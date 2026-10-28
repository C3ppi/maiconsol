"""Cliente mínimo do LCU (client do LoL) — só leitura. Lockfile: nome:pid:porta:senha:protocolo."""
import base64, json, os, ssl, string, urllib.request
from pathlib import Path

_ctx = ssl.create_default_context(); _ctx.check_hostname = False; _ctx.verify_mode = ssl.CERT_NONE

def find_lockfile():
    env = os.environ.get("LOL_LOCKFILE")
    cands = [Path(env)] if env else []
    for d in string.ascii_uppercase:
        cands += [Path(f"{d}:/Riot Games/League of Legends/lockfile"), Path(f"{d}:/Program Files/Riot Games/League of Legends/lockfile"),
                  Path(f"{d}:/Garena/League of Legends/lockfile")]
    for c in cands:
        try:
            if c.exists(): return c
        except OSError: pass
    return None

class LCU:
    def __init__(self): self.port = None; self.auth = None
    def connect(self) -> bool:
        lf = find_lockfile()
        if not lf: return False
        try:
            _, _, port, pw, _ = lf.read_text().strip().split(":")[:5]
        except Exception: return False
        self.port = port; self.auth = "Basic " + base64.b64encode(f"riot:{pw}".encode()).decode(); return True
    def get(self, path, timeout=1.5):
        if not self.port and not self.connect(): return None
        req = urllib.request.Request(f"https://127.0.0.1:{self.port}{path}", headers={"Authorization": self.auth})
        try:
            with urllib.request.urlopen(req, timeout=timeout, context=_ctx) as r: return json.loads(r.read().decode("utf8"))
        except Exception:
            self.port = None; return None
