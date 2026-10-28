"""Configuração persistida (absol_config.json ao lado do app): módulos ligados/desligados."""
import json, sys, threading
from pathlib import Path

MODULES = [  # (id, nome, descrição)
    ("minimap", "Minimapa", "Lembretes para olhar o mapa"),
    ("ward", "Wards e lentes", "Troca de trinket, lembrar de wardar, Lee Sin, suporte"),
    ("kill", "Kills e mortes", "First blood, multikill, trocas, KDA, CS, inimigo fed, respawn"),
    ("objectives", "Objetivos", "Dragão, barão, arauto, vastilarvas, torres, inibidores, timers"),
    ("mental", "Mental / estado do jogo", "Na frente/atrás, recall, mortos, ouro parado, fim de jogo"),
    ("jungle", "Jungle e gank", "Aviso de gank, jungler inimigo morto/reaparecido"),
    ("role", "Dicas por posição", "CS, teleport, assassinos, Barreira/Anjo, suporte..."),
    ("tips", "Dicas de matchup e campeão", "Dicas faladas (voz do Windows) + CS aos 10 min, nível 6"),
    ("build", "Build (aproximada)", "Botas, anti-cura, item completo"),
    ("champ_select", "Seleção de campeões", "Ban, pick, composição (via client do LoL)"),
    ("system", "Mensagens do sistema", "Boas-vindas e veredito pós-partida"),
]
EXTRAS = [  # recursos NOVOS (não existiam no original); não entram no set_modules da interface original
    ("jungle_vision", "Jungler na minimapa (visão)", "Fala quando o ícone do jungler inimigo aparece na minimapa (captura de tela, só Windows)"),
    ("builds_web", "Builds e runas (sites)", "Mostra runas/itens do op.gg, u.gg etc. ao travar o campeão (janelinha + voz)"),
]
MODULES += EXTRAS
EXTRA_IDS = [m[0] for m in EXTRAS]
IDS = [m[0] for m in MODULES if m[0] not in EXTRA_IDS]

def config_path():
    base = Path(sys.executable).parent if getattr(sys, "frozen", False) else Path(__file__).resolve().parent.parent
    return base / "absol_config.json"

class Config:
    def __init__(self, path=None):
        self.path = Path(path) if path else config_path(); self.lock = threading.Lock()
        self.off = set(); self.extra = {}
        try:
            d = json.loads(self.path.read_text(encoding="utf8"))
            self.off = set(d.get("desligados", [])); self.extra = {k: v for k, v in d.items() if k != "desligados"}
        except Exception: pass
    def enabled(self, module): return module not in self.off
    def set(self, module, on):
        with self.lock:
            (self.off.discard if on else self.off.add)(module)
            try: self.path.write_text(json.dumps({**self.extra, "desligados": sorted(self.off)}, ensure_ascii=False, indent=1), encoding="utf8")
            except OSError: pass
