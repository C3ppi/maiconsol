"""Servidor local que entrega o frontend ORIGINAL do ABSOL e imita o backend Tauri (comandos + eventos)."""
import json, mimetypes, os, shutil, subprocess, sys, threading, time, webbrowser
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlparse, parse_qs, unquote

ROOT = Path(__file__).resolve().parent / "frontend"
if getattr(sys, "frozen", False): ROOT = Path(getattr(sys, "_MEIPASS", ".")) / "absol" / "frontend"

class Bus:
    """Fila de eventos backend -> frontend (todas as janelas leem com long-poll)."""
    def __init__(self):
        self.cv = threading.Condition(); self.events = []; self.seq = 0
    def emit(self, event, payload=None):
        with self.cv:
            self.seq += 1; self.events.append((self.seq, event, payload)); self.events = self.events[-400:]; self.cv.notify_all()
    def wait(self, since, timeout=20):
        with self.cv:
            if not [e for e in self.events if e[0] > since]: self.cv.wait(timeout)
            ev = [{"event": e[1], "payload": e[2]} for e in self.events if e[0] > since]
            return {"last": self.seq if not ev else max(e[0] for e in self.events), "events": ev}

class App:
    """Estado compartilhado: config, volume, status, overlays. `handlers` são os comandos Tauri."""
    def __init__(self, cfg, voice=None, welcome=None):
        self.cfg = cfg; self.bus = Bus(); self.voice = voice; self.welcome = welcome
        self.lol_state = "offline"; self.client = False; self.volume = 60; self.port = 0; self.procs = []; self.builds = None
        self.handlers = {
            "get_lol_status": lambda a: self.lol_state,
            "set_modules": self.set_modules,
            "get_extras": self.get_extras, "get_builds": lambda a: self.builds.payload() if self.builds else {"status": "indisponível", "build": None, "on": False}, "set_extra": self.set_extra,
            "set_volume": self.set_volume,
            "play_welcome": lambda a: (self.welcome and self.welcome(), None)[1],
            "show_overlay": lambda a: self.open_window(a.get("label", "overlay")),
            "quit_app": lambda a: os._exit(0),
            "validate_session": lambda a: None, "set_session": lambda a: None, "sync_machine_info": lambda a: None,
        }
    def set_modules(self, a):
        ids = set(a.get("ids", []))
        from .config import IDS
        for m in IDS:
            if m != "system": self.cfg.set(m, m in ids)
        return None
    def get_extras(self, a):
        from .config import EXTRAS
        return [{"id": i, "nome": n, "desc": d, "on": self.cfg.enabled(i)} for i, n, d in EXTRAS]
    def set_extra(self, a):
        from .config import EXTRA_IDS
        if a.get("id") in EXTRA_IDS: self.cfg.set(a["id"], bool(a.get("on")))
        return self.get_extras({})
    def set_volume(self, a):
        try: self.volume = float(a.get("volume", 60))
        except Exception: pass
        if self.voice: self.voice.set_volume(self.volume)
    def set_state(self, st):
        if st != self.lol_state:
            self.lol_state = st; self.bus.emit("absol://lol-status", {"state": st})
    def open_window(self, label):
        url = f"http://127.0.0.1:{self.port}/" + ("" if label == "main" else "builds.html" if label == "builds" else label)
        size = {"main": "1366,768", "overlay": "420,320", "overlay-gold": "300,140", "builds": "460,640"}.get(label, "800,600")
        for exe in browser_candidates():
            try:
                self.procs.append(subprocess.Popen([exe, f"--app={url}", f"--window-size={size}", "--user-data-dir=" + str(Path(os.environ.get("TEMP", "/tmp")) / f"absol_profile_{label}")],
                                                   creationflags=0x08000000 if sys.platform == "win32" else 0))
                return None
            except Exception: continue
        webbrowser.open(url); return None

def browser_candidates():
    out = []
    if sys.platform == "win32":
        for base in (os.environ.get("ProgramFiles(x86)"), os.environ.get("ProgramFiles"), os.environ.get("LOCALAPPDATA")):
            if not base: continue
            out += [str(Path(base) / "Microsoft/Edge/Application/msedge.exe"), str(Path(base) / "Google/Chrome/Application/chrome.exe")]
        out = [p for p in out if Path(p).exists()]
    else:
        out = [p for p in (shutil.which("google-chrome"), shutil.which("chromium"), shutil.which("microsoft-edge")) if p]
    return out

def make_handler(app: App):
    class H(BaseHTTPRequestHandler):
        protocol_version = "HTTP/1.1"
        def log_message(self, *a): pass
        def _send(self, code, body: bytes, ctype="application/json", extra=None):
            self.send_response(code); self.send_header("Content-Type", ctype); self.send_header("Content-Length", str(len(body)))
            self.send_header("Cache-Control", "no-store")
            for k, v in (extra or {}).items(): self.send_header(k, v)
            self.end_headers(); self.wfile.write(body)
        def do_GET(self):
            u = urlparse(self.path); q = parse_qs(u.query)
            if u.path == "/__events":
                self._send(200, json.dumps(app.bus.wait(int(q.get("since", ["0"])[0]))).encode()); return
            rel = unquote(u.path).lstrip("/")
            f = (ROOT / rel).resolve() if rel else ROOT / "index.html"
            if not str(f).startswith(str(ROOT.resolve())) or not f.is_file(): f = ROOT / "index.html"   # SPA: /overlay, /overlay-gold...
            ctype = mimetypes.guess_type(str(f))[0] or "application/octet-stream"
            if f.suffix == ".js": ctype = "text/javascript"
            self._send(200, f.read_bytes(), ctype)
        def do_POST(self):
            u = urlparse(self.path)
            if not u.path.startswith("/__ipc/"): self._send(404, b"{}"); return
            cmd = unquote(u.path[len("/__ipc/"):])
            n = int(self.headers.get("Content-Length") or 0); raw = self.rfile.read(n) if n else b"{}"
            try: args = json.loads(raw or b"{}")
            except Exception: args = {}
            h = app.handlers.get(cmd)
            try: res = h(args) if h else None
            except Exception as e: res = None
            self._send(200, json.dumps(res).encode())
    return H

def serve(app: App, port=1420):
    for p in (port, 0):
        try:
            srv = ThreadingHTTPServer(("127.0.0.1", p), make_handler(app)); break
        except OSError: continue
    app.port = srv.server_address[1]
    threading.Thread(target=srv.serve_forever, daemon=True).start()
    return srv
