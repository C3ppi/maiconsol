"""ABSOL local — lê a Live Client API (1x/s) e o client do LoL (LCU) e fala as dicas.
Uso: python -m absol.main [--pak caminho/padrao.pak] [--demo arquivo.json] [--sem-modulo tips,build]"""
import argparse, sys, threading, time
from pathlib import Path
from .engine import Engine
from .live_client import fetch
from .voice import Mp3Player, VoiceQueue
from .lcu import LCU
from .triggers import champ_select
from .config import Config
import queue
from .webapp import App, serve
from .bridge import Bridge

MODULE_OF = {"minimap": "minimap", "minimap_intro": "minimap", "ward": "ward", "kill": "kill", "kill_praise": "kill",
             "multikill": "kill", "fed_alert": "kill", "praise": "kill", "respawn": "kill", "objectives": "objectives",
             "obj_timer": "objectives", "build": "build", "build_spike": "build", "build_next": "build", "build_warn": "build",
             "mental": "mental", "mental_recall": "mental", "mental_spike": "mental", "jungle": "jungle", "jungle_spotted": "jungle", "jungle_vision": "jungle_vision", "build_web": "builds_web",
             "gank_warning": "jungle", "role": "role", "tips": "tips", "gossip": "tips", "champ_select": "champ_select",
             "champ_select_pick": "champ_select", "champ_select_comp": "champ_select"}

class Gate:
    def __init__(self, inner, cfg): self.inner = inner; self.cfg = cfg
    def say(self, cat, prio, phrase):
        if self.cfg.enabled(MODULE_OF.get(cat, "system")): self.inner.say(cat, prio, phrase)

def lcu_loop(sink, stop, app=None, mgr=None):
    lcu = LCU(); st = champ_select.State(); names = {}
    while not stop.is_set():
        ph = lcu.get("/lol-gameflow/v1/gameflow-phase")
        if app: app.client = bool(ph)
        if ph:
            champ_select.on_phase(st, str(ph).strip('"'), sink)
            if ph == "ChampSelect":
                if not names:
                    cs = lcu.get("/lol-game-data/assets/v1/champion-summary.json") or []
                    names = {c["id"]: c["name"] for c in cs}
                s = lcu.get("/lol-champ-select/v1/session")
                if s:
                    champ_select.on_session(st, s, names, sink)
                    if mgr: mgr.on_session(s, names, lcu)
        time.sleep(1.5)

def main():
    ap = argparse.ArgumentParser()
    here = Path(sys.executable).parent if getattr(sys, "frozen", False) else Path(__file__).resolve().parent.parent
    ap.add_argument("--pak", default=str(here / "padrao.pak"))
    ap.add_argument("--demo", help="arquivo JSON (allgamedata) para simular sem o jogo")
    ap.add_argument("--sem-modulo", default="", help="módulos desligados nesta execução, separados por vírgula")
    ap.add_argument("--sem-janela", action="store_true", help="roda só no console, sem abrir a interface")
    ap.add_argument("--janela-simples", action="store_true", help="usa a janelinha simples (tkinter) em vez da interface original")
    ap.add_argument("--calibrar", action="store_true", help="salva minimapa_debug.png (recorte da minimapa usado pelo detector) e sai")
    ap.add_argument("--baixar-vozes", action="store_true", help="gera/baixa (voz neural) todas as frases sem clip no padrao.pak e sai")
    ap.add_argument("--porta", type=int, default=1420)
    a = ap.parse_args()
    if a.calibrar:
        from .vision import calibrate
        calibrate(Config().extra); return
    player = Mp3Player(Path(a.pak))
    from . import voice as _v
    _cfg0 = Config(); _v.EDGE.cfg = _cfg0.extra.get("tts", {}); _v.EDGE.cache = here / "cache_voz"
    if a.baixar_vozes:
        from .pools import POOLS
        fr = sorted({p for v in POOLS.values() for p in v if not player.has(p)}); ok = 0
        print(f"{len(fr)} frases sem clip. Baixando...")
        for i, ph in enumerate(fr, 1):
            _v.EDGE.off_until = 0
            ok += bool(_v.EDGE.get(ph)); print(f"\r{i}/{len(fr)}", end="", flush=True)
        print(f"\nPronto: {ok} de {len(fr)} no cache ({_v.EDGE.cache})"); return
    if not player.zip: print(f"AVISO: {a.pak} não encontrado — frases sem clip usam a voz do Windows.")
    cfg = Config(); from . import voice as _v; _v.SPEAKER.cfg = cfg.extra.get("tts", {}); sys.platform == "win32" and threading.Thread(target=lambda: _v.SPEAKER.speak(" ", 0), daemon=True).start(); cfg.off |= set(filter(None, a.sem_modulo.split(",")))
    logq = queue.Queue()
    def log(line): print(line); logq.put(line)
    vq = VoiceQueue(player, log=log); sink = Gate(vq, cfg)
    stop = threading.Event()
    app = App(cfg, vq, welcome=lambda: sink.say("system", 3, "ABSOL online. Coach ativado, parceiro. Vamos amassar essa ranquiada!"))
    bridge = Bridge(app)
    if a.sem_janela or a.demo:
        loop(a, sink, vq, stop, log, app, bridge)
    elif a.janela_simples:
        threading.Thread(target=loop, args=(a, sink, vq, stop, log, app, bridge), daemon=True).start()
        from .gui import run
        run(cfg, stop.set, logq)
    else:
        serve(app, a.porta)
        print(f"Interface: http://127.0.0.1:{app.port}/")
        threading.Thread(target=loop, args=(a, sink, vq, stop, log, app, bridge), daemon=True).start()
        app.open_window("main")
        try:
            while not stop.is_set(): time.sleep(0.5)
        except KeyboardInterrupt: stop.set()

def here_cache(): return Path(__file__).resolve().parent.parent / "cache_icones"

def loop(a, sink, vq, stop, log, app=None, bridge=None):
    eng = Engine(); last_t = -1; waiting = False
    if a.sem_janela or a.demo or a.janela_simples:
        sink.say("system", 3, "ABSOL online. Coach ativado, parceiro. Vamos amassar essa ranquiada!")
    if not a.demo:
        from .vision import Watcher
        w = Watcher(sink, app.cfg if app else Config(), lambda: eng.enemy_jungler if last_t >= 0 and not waiting else None,
                    Path(sys.executable).parent / "cache_icones" if getattr(sys, "frozen", False) else here_cache(), log=log)
        w.start()
        from .builds import Manager
        mgr = Manager(sink, app.cfg if app else Config(), app, w.cache, log=log)
        if app: app.builds = mgr
    if not a.demo: threading.Thread(target=lcu_loop, args=(sink, stop, app, mgr), daemon=True).start()
    log("ABSOL local rodando. Abra o LoL.")
    try:
        while not stop.is_set():
            if a.demo:
                import json; raw = json.loads(Path(a.demo).read_text(encoding="utf8"))
            else: raw = fetch()
            if raw:
                waiting = False
                t = raw.get("gameData", {}).get("gameTime", 0)
                if t < last_t - 5: eng.reset()
                last_t = t; eng.tick(raw, sink)
                if app: app.set_state("ingame"); bridge.update(raw)
            else:
                if bridge and bridge.live: bridge.end()
                if app: app.set_state("client" if app.client else "offline")
                if not waiting: log("Aguardando partida..."); waiting = True
            time.sleep(1.0)
    except KeyboardInterrupt:
        stop.set(); vq.stop = True

if __name__ == "__main__": main()
