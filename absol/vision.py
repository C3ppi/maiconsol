"""Detector do jungler inimigo na MINIMAPA (recurso NOVO — não vem do ABSOL original).
Captura só o canto da minimapa (Windows: Pillow ImageGrab) e procura o ícone do campeão inimigo (Data Dragon da Riot)
com template matching (OpenCV). Fala "jungler apareceu" quando o ícone surge depois de sumir.
INCERTO: nunca foi testado com o LoL de verdade (só com imagens sintéticas). Ajuste via absol_config.json -> "minimapa":
  {"x": 1640, "y": 800, "lado": 280, "limiar": 0.12}   (x,y = canto superior esquerdo da minimapa em pixels; lado = tamanho)
`python -m absol.main --calibrar` salva minimapa_debug.png (o recorte usado) para conferir."""
import json, random, threading, time, urllib.request
from pathlib import Path
from .common import norm, seg
from .pools import pk

DDRAGON = "https://ddragon.leagueoflegends.com"
FRAC_LADO = 0.2593          # lado da minimapa / altura da tela (escala padrão, ~280px em 1080p)
FRAC_ICONE = (0.075, 0.09, 0.105, 0.12)   # diâmetros testados do ícone / lado da minimapa
INNER = 0.78                 # fração do raio usada do ícone (tira a borda colorida)
LIMIAR = 0.12                # TM_SQDIFF_NORMED: menor = melhor

def _np():
    import numpy as np, cv2
    return np, cv2

def grab(box=None):
    """Retorna imagem BGR (numpy) do monitor principal (ou do box x,y,w,h). None se não der."""
    try:
        from PIL import ImageGrab
        im = ImageGrab.grab() if box is None else ImageGrab.grab(bbox=(box[0], box[1], box[0] + box[2], box[1] + box[3]))
        np, cv2 = _np()
        return cv2.cvtColor(np.array(im.convert("RGB")), cv2.COLOR_RGB2BGR)
    except Exception:
        return None

def minimap_box(screen_w, screen_h, cfg=None):
    c = (cfg or {})
    lado = int(c.get("lado") or screen_h * FRAC_LADO)
    x = int(c["x"]) if "x" in c else screen_w - lado
    y = int(c["y"]) if "y" in c else screen_h - lado
    return x, y, lado, lado

def make_templates(icon_bgr, lado):
    """Cria templates circulares (com máscara) em vários tamanhos a partir do ícone quadrado do campeão."""
    np, cv2 = _np()
    h, w = icon_bgr.shape[:2]
    out = []
    for f in FRAC_ICONE:
        d = max(8, int(round(lado * f)))
        t = cv2.resize(icon_bgr, (d, d), interpolation=cv2.INTER_AREA)
        yy, xx = np.ogrid[:d, :d]; r = d / 2.0
        m = (((yy - r + .5) ** 2 + (xx - r + .5) ** 2) <= (r * INNER) ** 2).astype("uint8") * 255
        out.append((t, cv2.merge([m, m, m])))
    return out

def find(img, templates, limiar=LIMIAR):
    """Melhor casamento; retorna (score, (x,y)) ou (1.0, None)."""
    np, cv2 = _np()
    best = (1.0, None)
    for t, m in templates:
        if img.shape[0] < t.shape[0] or img.shape[1] < t.shape[1]: continue
        r = cv2.matchTemplate(img, t, cv2.TM_SQDIFF_NORMED, mask=m)
        r = np.nan_to_num(r, nan=1.0, posinf=1.0)
        mn, _, loc, _ = cv2.minMaxLoc(r)
        if mn < best[0]: best = (float(mn), loc)
    return (best[0], best[1]) if best[0] <= limiar else (best[0], None)

# ---------------- ícones (Data Dragon) ----------------
def _get(url, timeout=10):
    with urllib.request.urlopen(url, timeout=timeout) as r: return r.read()

def load_icon(champion, cache: Path):
    """Baixa (e guarda em cache) o ícone quadrado do campeão. None se offline."""
    np, cv2 = _np()
    cache.mkdir(parents=True, exist_ok=True)
    idx = cache / "champions.json"
    try:
        if idx.exists(): data = json.loads(idx.read_text(encoding="utf8"))
        else:
            v = json.loads(_get(f"{DDRAGON}/api/versions.json"))[0]
            data = json.loads(_get(f"{DDRAGON}/cdn/{v}/data/en_US/champion.json")); data["_v"] = v
            idx.write_text(json.dumps(data), encoding="utf8")
        cid = next((c["id"] for c in data["data"].values() if norm(c["name"]) == norm(champion) or norm(c["id"]) == norm(champion)), None)
        if not cid: return None
        f = cache / f"{cid}.png"
        if not f.exists(): f.write_bytes(_get(f"{DDRAGON}/cdn/{data['_v']}/img/champion/{cid}.png"))
        return cv2.imread(str(f), cv2.IMREAD_COLOR)
    except Exception:
        return None

# ---------------- vigia ----------------
class Watcher:
    """Thread que vigia a minimapa enquanto há partida. `target()` retorna o nome do jungler inimigo (ou None)."""
    def __init__(self, sink, cfg, target, cache: Path, log=print, fps=2.5):
        self.sink, self.cfg, self.target, self.cache, self.log, self.dt = sink, cfg, target, cache, log, 1.0 / fps
        self.tpl = {}; self.seen = 0; self.absent_since = -1e9; self.visible = False; self.last_say = 0.0
        self.stop = False; self.warned = False
    def start(self): threading.Thread(target=self.run, daemon=True).start()

    def step(self, img, champion, limiar=LIMIAR, now=None):
        """Processa um quadro da minimapa (já recortado). Retorna True se anunciou."""
        now = time.time() if now is None else now
        lado = img.shape[0]
        key = (norm(champion), lado)
        if key not in self.tpl:
            icon = load_icon(champion, self.cache) if not hasattr(self, "_icon") else self._icon
            self.tpl[key] = make_templates(icon, lado) if icon is not None else None
        tp = self.tpl[key]
        if not tp: return False
        score, loc = find(img, tp, limiar)
        if loc is not None:
            self.seen += 1
            if self.seen >= 2 and not self.visible:      # 2 quadros seguidos = confirmado
                self.visible = True
                if now - self.absent_since >= 6.0 and now - self.last_say >= 15.0:
                    self.last_say = now
                    s = seg(champion, "apareceu na minimapa! Cuidado!") if random.random() < .5 else pk("140ED6F58")
                    self.sink.say("jungle_vision", 3, s); return True
        else:
            self.seen = 0
            if self.visible: self.visible = False; self.absent_since = now
        return False

    def run(self):
        while not self.stop:
            try:
                champ = self.target() if self.cfg.enabled("jungle_vision") else None
                if champ:
                    full = grab()
                    if full is None:
                        if not self.warned: self.warned = True; self.log("[visão] captura de tela indisponível (precisa de Windows + pillow/opencv/numpy)")
                        time.sleep(5); continue
                    H, W = full.shape[:2]
                    x, y, w, h = minimap_box(W, H, self.cfg.extra.get("minimapa"))
                    img = full[y:y + h, x:x + w]
                    self.step(img, champ, float((self.cfg.extra.get("minimapa") or {}).get("limiar", LIMIAR)))
                    time.sleep(self.dt)
                else: time.sleep(1.0)
            except Exception as e:
                if not self.warned: self.warned = True; self.log(f"[visão] erro: {e}")
                time.sleep(3)

def calibrate(cfg_extra=None, out="minimapa_debug.png"):
    np, cv2 = _np()
    full = grab()
    if full is None: print("Não consegui capturar a tela (precisa de Windows com pillow instalado)."); return
    H, W = full.shape[:2]; x, y, w, h = minimap_box(W, H, (cfg_extra or {}).get("minimapa"))
    cv2.imwrite(out, full[y:y + h, x:x + w]); print(f"Recorte salvo em {out} ({w}x{h} em x={x}, y={y}). Se não for só a minimapa, ajuste 'minimapa' em absol_config.json.")
