"""Módulo NOVO (não existia no original): runas e itens recomendados vindos de sites (op.gg, u.gg, deeplol, mobalytics, metasrc)
e, como último recurso, das runas recomendadas do próprio client (LCU). Mostra numa janelinha + fala quando você trava o campeão.
INCERTO: o leitor de páginas é genérico (procura ícones de item/runa na ordem em que aparecem) e NUNCA foi testado contra os sites
reais — eles mudam e podem bloquear. Se uma fonte falhar, salva a página em cache_icones/debug_<fonte>.html e tenta a próxima."""
import json, re, html, threading, urllib.request, urllib.error
from pathlib import Path
from .common import norm, seg

DD = "https://ddragon.leagueoflegends.com"
UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/1.0 Chrome/124.0 Safari/537.36"
ROLE = {  # posição do LCU/Live Client -> nome em cada site
    "TOP": ("top", "top", "top"), "JUNGLE": ("jungle", "jungle", "jungle"), "MIDDLE": ("mid", "mid", "mid"),
    "BOTTOM": ("adc", "adc", "adc"), "UTILITY": ("support", "supp", "support"),
}
SOURCES = [  # (nome, url) — {c}=slug do campeão, {r}=posição
    ("op.gg", "https://op.gg/lol/champions/{c}/build/{r}"),
    ("u.gg", "https://u.gg/lol/champions/{c}/build/{r}"),
    ("deeplol", "https://www.deeplol.gg/champions/{c}/build/{r}"),
    ("mobalytics", "https://mobalytics.gg/lol/champions/{c}/build/{r}"),
    ("metasrc", "https://www.metasrc.com/lol/build/{c}/{r}"),
]
SHARDS = {5001: "Vida", 5002: "Armadura", 5003: "Resist. mágica", 5005: "Vel. de ataque", 5007: "Habilidade", 5008: "Força adaptável",
          5010: "Velocidade de movimento", 5011: "Vida", 5013: "Tenacidade"}

def _get(url, timeout=8):
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept-Language": "en-US,en;q=0.8"})
    with urllib.request.urlopen(req, timeout=timeout) as r: return r.read().decode("utf8", "replace")

class Static:
    """Dados estáticos da Riot (nomes, tags, ícones). `load()` baixa e guarda em cache."""
    def __init__(self, version="", items=None, trees=None):
        self.version = version; self.items = items or {}; self.trees = trees or []
        self._index()
    def _index(self):
        self.runes = {}   # id -> dict(name, tree, slot, icon)
        for tr in self.trees:
            for si, slot in enumerate(tr.get("slots", [])):
                for r in slot.get("runes", []):
                    self.runes[r["id"]] = {"name": r["name"], "tree": tr["name"], "treeid": tr["id"], "slot": si, "icon": r["icon"]}
        self.stem = {}
        for rid, r in self.runes.items():
            self.stem[norm(Path(r["icon"]).stem)] = rid; self.stem.setdefault(norm(r["name"]), rid)
        self.item_name = {norm(i["name"]): int(k) for k, i in self.items.items()}
    @classmethod
    def load(cls, cache: Path):
        cache.mkdir(parents=True, exist_ok=True)
        f = cache / "static.json"
        try:
            if f.exists(): d = json.loads(f.read_text(encoding="utf8"))
            else:
                v = json.loads(_get(f"{DD}/api/versions.json"))[0]
                items = json.loads(_get(f"{DD}/cdn/{v}/data/pt_BR/item.json"))["data"]
                trees = json.loads(_get(f"{DD}/cdn/{v}/data/pt_BR/runesReforged.json"))
                d = {"version": v, "items": items, "trees": trees}; f.write_text(json.dumps(d), encoding="utf8")
            return cls(d["version"], d["items"], d["trees"])
        except Exception:
            return None
    def item(self, iid):
        i = self.items.get(str(iid))
        return {"id": int(iid), "name": i["name"] if i else f"Item {iid}", "icon": f"{DD}/cdn/{self.version}/img/item/{iid}.png"}
    def rune(self, rid):
        r = self.runes.get(rid)
        return {"id": rid, "name": r["name"] if r else str(rid), "icon": f"{DD}/cdn/img/{r['icon']}" if r else ""}
    def kind(self, iid):
        i = self.items.get(str(iid))
        if not i: return "?"
        tags = i.get("tags", []); g = i.get("gold", {}).get("total", 0)
        if "Boots" in tags and g >= 900: return "boots"
        if i.get("consumable") or (g <= 500 and (i.get("into") or "Lane" in tags or "Jungle" in tags)) or "Trinket" in tags: return "start"
        if not i.get("into") and g >= 1600 and not i.get("consumable"): return "core"
        return "part"

def extract(page: str, st: Static):
    """Ordem de aparição de itens e runas no HTML (por id de imagem, nome do arquivo ou alt)."""
    items, runes, shards = [], [], []
    for m in re.finditer(r'item\w*/(\d{3,5})\.\w+|[?&]item(?:Id)?=(\d{4})|"itemId"\s*:\s*(\d{4})|alt="([^"]{3,40})"', page):
        iid = next((int(g) for g in m.groups()[:3] if g), None)
        if iid is None:
            iid = st.item_name.get(norm(html.unescape(m.group(4))))
        if iid and str(iid) in st.items and iid not in items: items.append(iid)
    for m in re.finditer(r'perk\w*[/-][^"\'\s>]*?(\d{4})\.\w+|/([A-Za-z]{4,30})\.(?:png|webp|jpg)|alt="([^"]{3,40})"', page):
        rid = None
        if m.group(1):
            n = int(m.group(1)); 
            if n in st.runes: rid = n
            elif n in SHARDS and n not in shards: shards.append(n)
        elif m.group(2): rid = st.stem.get(norm(m.group(2)))
        elif m.group(3): rid = st.stem.get(norm(html.unescape(m.group(3))))
        if rid and rid not in runes: runes.append(rid)
    return items, runes, shards

def assemble(items, runes, shards, st: Static):
    """Monta a build a partir das listas em ordem; None se não deu pra identificar chaves/itens."""
    key = next((r for r in runes if st.runes[r]["slot"] == 0), None)
    if key is None: return None
    tree = st.runes[key]["treeid"]
    prim = [key] + [r for r in runes if st.runes[r]["treeid"] == tree and r != key][:3]
    sec_tree = next((st.runes[r]["treeid"] for r in runes if st.runes[r]["treeid"] != tree and st.runes[r]["slot"] > 0), None)
    sec = [r for r in runes if st.runes[r]["treeid"] == sec_tree and st.runes[r]["slot"] > 0][:2] if sec_tree else []
    start = [i for i in items if st.kind(i) == "start"][:2]
    boots = [i for i in items if st.kind(i) == "boots"][:2]
    core = [i for i in items if st.kind(i) == "core"]
    if len(core) < 3: return None
    return {"runes": {"primary": [st.rune(r) for r in prim], "secondary": [st.rune(r) for r in sec],
                      "shards": [{"id": s, "name": SHARDS[s]} for s in shards[:3]],
                      "tree": next(t["name"] for t in st.trees if t["id"] == tree)},
            "items": {"start": [st.item(i) for i in start], "boots": [st.item(i) for i in boots],
                      "core": [st.item(i) for i in core[:3]], "options": [st.item(i) for i in core[3:7]]}}

def slug(champion):  # "Kai'Sa" -> kaisa ; "Nunu & Willump" -> nunu
    n = norm(champion)
    return {"nunuwillump": "nunu", "renataglasc": "renata", "wukong": "wukong"}.get(n, n)

def from_sites(champion, position, st, cache: Path, log=print, get=_get, sources=SOURCES):
    roles = ROLE.get(position.upper())
    for si, (name, url) in enumerate(sources):
        r = roles[1] if name == "u.gg" else roles[2] if name == "metasrc" else roles[0] if roles else ""
        u = url.format(c=slug(champion), r=r)
        try:
            page = get(u)
            b = assemble(*extract(page, st), st)
            if b: b.update(source=name, url=u); return b
            log(f"[builds] {name}: página lida mas não achei runas/itens (salvei debug)")
            (cache / f"debug_{name.replace('.', '_')}.html").write_text(page[:400000], encoding="utf8")
        except Exception as e:
            log(f"[builds] {name} falhou ({type(e).__name__}: {e}); tentando a próxima fonte")
    return None

def from_lcu(lcu, champ_id, position, st):
    pos = {"TOP": "top", "JUNGLE": "jungle", "MIDDLE": "middle", "BOTTOM": "bottom", "UTILITY": "utility"}.get(position.upper(), "middle")
    d = lcu.get(f"/lol-perks/v1/recommended-pages/champion/{champ_id}/position/{pos}/map/11") if lcu else None
    pages = d if isinstance(d, list) else (d or {}).get("recommendedPages") or []
    if not pages: return None
    p = pages[0]; ids = p.get("perks") or p.get("selectedPerkIds") or []
    runes = [i for i in ids if i in st.runes]
    key = runes[0] if runes else None
    if key is None: return None
    tree = st.runes[key]["treeid"]
    return {"runes": {"primary": [st.rune(r) for r in runes if st.runes[r]["treeid"] == tree],
                      "secondary": [st.rune(r) for r in runes if st.runes[r]["treeid"] != tree],
                      "shards": [{"id": s, "name": SHARDS[s]} for s in ids if s in SHARDS], "tree": st.runes[key]["tree"]},
            "items": {"start": [], "boots": [], "core": [], "options": []}, "source": "client do LoL (só runas)", "url": ""}

def speak(champion, b):
    core = ", ".join(i["name"] for i in b["items"]["core"])
    parts = [f"Build do {champion}."]
    if b["runes"]["primary"]: parts.append(f"Runa principal {b['runes']['primary'][0]['name']}.")
    if core: parts.append(f"Itens: {core}.")
    return " ".join(parts)

class Manager:
    """Recebe a sessão da seleção de campeões; busca em segundo plano; guarda `current` para a janelinha."""
    def __init__(self, sink, cfg, app, cache: Path, log=print, stable=2):
        self.sink, self.cfg, self.app, self.cache, self.log, self.stable = sink, cfg, app, cache, log, stable
        self.current = None; self.status = "aguardando seleção"; self._key = None; self._n = 0; self._done = None; self.lcu = None; self.names = {}; self.st = None
    def on_session(self, s, names, lcu=None):
        if not self.cfg.enabled("builds_web"): return
        me = s.get("localPlayerCellId"); p = next((x for x in s.get("myTeam", []) if x.get("cellId") == me), None)
        if not p or not p.get("championId"): return
        champ = names.get(p["championId"], ""); pos = (p.get("assignedPosition") or "").upper()
        key = (p["championId"], pos)
        self._n = self._n + 1 if key == self._key else 1; self._key = key
        if self._n >= self.stable and self._done != key and champ:
            self._done = key; self.lcu = lcu
            threading.Thread(target=self.fetch, args=(champ, pos, p["championId"]), daemon=True).start()
    def fetch(self, champ, pos, cid):
        self.status = f"buscando build de {champ}..."
        self.st = self.st or Static.load(self.cache)
        if not self.st: self.status = "sem acesso aos dados da Riot (internet?)"; self.log("[builds] " + self.status); return
        b = from_sites(champ, pos or "MIDDLE", self.st, self.cache, self.log) or from_lcu(self.lcu, cid, pos or "MIDDLE", self.st)
        if not b: self.status = "nenhuma fonte respondeu"; self.log("[builds] " + self.status); return
        b.update(champion=champ, role=pos); self.current = b; self.status = "ok"
        self.sink.say("build_web", 4, speak(champ, b))
        try: self.app.open_window("builds")
        except Exception: pass
    def payload(self): return {"status": self.status, "build": self.current, "on": self.cfg.enabled("builds_web")}
