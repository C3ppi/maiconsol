"""Fila de voz (min-heap por prioridade, TTL por categoria) + player de mp3 do padrao.pak (md5(frase).mp3)."""
import csv, ctypes, hashlib, heapq, itertools, os, sys, tempfile, threading, time, zipfile
from pathlib import Path

TTL = {"kill": 6, "multikill": 6, "kill_praise": 6, "fed_alert": 6, "respawn": 8, "praise": 8, "system": 0,
       "jungle": 5, "jungle_spotted": 3, "gank_warning": 5, "objectives": 5, "obj_timer": 5, "minimap": 6,
       "minimap_intro": 10, "ward": 10, "tips": 8, "build": 15, "build_spike": 10, "build_next": 15,
       "build_warn": 8, "role": 3, "mental": 20, "mental_recall": 10, "mental_spike": 10, "gossip": 120,
       "build_web": 30, "champ_select": 20, "champ_select_pick": 20, "champ_select_comp": 60}   # system: 0 = sem expiração

def clip_name(phrase: str) -> str:
    return hashlib.md5(phrase.encode("utf8")).hexdigest() + ".mp3"

SEP = "\x1f"

PS_LOOP = (
    "[Console]::InputEncoding=[Text.Encoding]::UTF8;[Console]::OutputEncoding=[Text.Encoding]::UTF8;"
    "Add-Type -AssemblyName System.Speech;$s=New-Object System.Speech.Synthesis.SpeechSynthesizer;"
    "$voz=$env:ABSOL_VOZ;if($voz){try{$s.SelectVoice($voz)}catch{}}else{try{$s.SelectVoiceByHints('NotSet','NotSet',0,[System.Globalization.CultureInfo]'pt-BR')}catch{}};"
    "Write-Output 'pronto';"
    "while(($l=[Console]::In.ReadLine()) -ne $null){$p=$l.Split('|',3);$s.Volume=[int]$p[0];$s.Rate=[int]$p[1];$s.Speak($p[2]);Write-Output 'ok'}")

class Speaker:
    """Voz do Windows (System.Speech) num PowerShell que fica aberto: sem o atraso de abrir um processo a cada fala.
    Config (absol_config.json -> "tts"): {"velocidade": 2 (-10..10), "volume": 50 (% do volume geral), "voz": "Microsoft Maria Desktop"}"""
    def __init__(self, cmd=None, cfg=None):
        self.cmd = cmd; self.cfg = cfg or {}; self.p = None; self.lock = threading.Lock(); self.dead = False
    def _start(self):
        import subprocess, os
        env = dict(os.environ, ABSOL_VOZ=str(self.cfg.get("voz", "")))
        cmd = self.cmd or ["powershell", "-NoProfile", "-Command", PS_LOOP]
        self.p = subprocess.Popen(cmd, stdin=subprocess.PIPE, stdout=subprocess.PIPE, env=env, creationflags=0x08000000 if sys.platform == "win32" else 0)
        self.p.stdout.readline()    # 'pronto'
    def speak(self, text, volume=60.0):
        if self.dead or (self.cmd is None and sys.platform != "win32"): return False
        text = " ".join(text.replace("|", " ").split())
        if not text: return True
        vol = max(0, min(100, int(volume * float(self.cfg.get("volume", 50)) / 100.0)))
        rate = max(-10, min(10, int(self.cfg.get("velocidade", 2))))
        with self.lock:
            for tentativa in (0, 1):
                try:
                    if self.p is None or self.p.poll() is not None: self._start()
                    self.p.stdin.write(f"{vol}|{rate}|{text}\n".encode("utf8")); self.p.stdin.flush()
                    return bool(self.p.stdout.readline())
                except Exception:
                    self.p = None
            self.dead = True; return False

SPEAKER = Speaker()

class EdgeVoice:
    """Voz neural do Edge (pacote edge-tts, precisa de internet). Cada frase vira um mp3 em cache_voz/ — da 2ª vez é instantâneo
    e funciona offline. Config "tts": {"motor": "edge"|"windows", "voz": "pt-BR-FranciscaNeural", "velocidade": 2, "volume": 50}"""
    DEFAULT = "pt-BR-FranciscaNeural"
    def __init__(self, cache: Path, cfg=None, gen=None):
        self.cache = Path(cache); self.cfg = cfg or {}; self.gen = gen; self.off_until = 0.0
        try: self.cache.mkdir(parents=True, exist_ok=True)
        except OSError: pass
    def enabled(self):
        if self.cfg.get("motor", "edge") != "edge": return False
        if self.gen: return True
        try: import edge_tts; return True
        except Exception: return False
    def _params(self):
        v = self.cfg.get("voz") or self.DEFAULT
        if not str(v).startswith("pt-") and "Neural" not in str(v): v = self.DEFAULT   # nome de voz do Windows não vale aqui
        return v, f"{int(self.cfg.get('velocidade', 2)) * 5:+d}%"
    def path(self, text):
        v, rate = self._params()
        return self.cache / (hashlib.md5(f"{v}|{rate}|{text}".encode("utf8")).hexdigest() + ".mp3")
    def get(self, text):
        """Caminho do mp3 (gera se preciso). None se offline/erro (cai na voz do Windows)."""
        text = " ".join(text.split())
        if not text or not self.enabled(): return None
        f = self.path(text)
        if f.exists() and f.stat().st_size > 500: return f
        import time
        if time.time() < self.off_until: return None
        v, rate = self._params()
        try:
            if self.gen: self.gen(text, v, rate, f)
            else:
                import asyncio, edge_tts
                async def run(): await asyncio.wait_for(edge_tts.Communicate(text, v, rate=rate).save(str(f)), 8)
                asyncio.run(run())
            return f if f.exists() and f.stat().st_size > 500 else None
        except Exception:
            self.off_until = time.time() + 60; return None   # sem internet: não trava cada fala, tenta de novo em 1 min

EDGE = EdgeVoice(Path("cache_voz"))

def tts(text: str, volume=60.0):
    return SPEAKER.speak(text, volume)

class Mp3Player:
    """MCI (Windows). Fora do Windows apenas registra no console."""
    def __init__(self, pak: Path):
        self.pak = Path(pak); self.zip = zipfile.ZipFile(self.pak) if self.pak.exists() else None
        self.names = set(self.zip.namelist()) if self.zip else set()
        self.tmp = Path(tempfile.mkdtemp(prefix="absol_")); self.alias = "absol_audio"
        self.mci = ctypes.windll.winmm.mciSendStringW if sys.platform == "win32" else None
    def _cmd(self, s):
        buf = ctypes.create_unicode_buffer(256); self.mci(s, buf, 256, None)
    def has(self, phrase): return clip_name(phrase) in self.names
    def play(self, phrase) -> bool:
        """Toca cada segmento (separados por \\x1f): clip do pak se existir, senão voz do Windows."""
        ok = False; buf = []
        def flush():
            nonlocal ok, buf
            if buf:
                txt = " ".join(buf); f = EDGE.get(txt)
                if f and self._play_file(f, EDGE.cfg.get("volume", 70) / 100.0): ok = True
                elif tts(txt, getattr(self, "volume", 60.0)): ok = True
            buf = []
        for part in phrase.split(SEP):
            if self._play_one(part): flush(); ok = True
            else: buf.append(part)       # segmentos sem clip seguidos viram UMA fala (sem pausa no meio)
        flush()
        return ok
    def _play_one(self, phrase) -> bool:
        f = phrase if phrase in self.names else clip_name(phrase)
        if not self.mci or f not in self.names: return False
        p = self.tmp / f
        if not p.exists(): p.write_bytes(self.zip.read(f))
        return self._play_file(p, 1.0)
    def _play_file(self, p, fator=1.0) -> bool:
        if not self.mci: return False
        self._cmd(f"close {self.alias}"); self._cmd(f'open "{p}" type mpegvideo alias {self.alias}')
        self._cmd(f"setaudio {self.alias} volume to {int(getattr(self, 'volume', 60) * 10 * fator)}")
        self._cmd(f"play {self.alias} wait"); return True

class VoiceQueue:
    def __init__(self, player: Mp3Player, log=print):
        self.heap = []; self.seq = itertools.count(); self.lock = threading.Lock()
        self.player = player; self.log = log; player.volume = 60; self.enabled = None  # None = todos os módulos
        self.stop = False
        threading.Thread(target=self._run, daemon=True).start()
    def say(self, category, prio, phrase):
        if not phrase: return
        with self.lock:
            heapq.heappush(self.heap, (prio, next(self.seq), time.time(), category, phrase))
    def _run(self):
        while not self.stop:
            item = None
            with self.lock:
                while self.heap:
                    prio, _, t0, cat, ph = heapq.heappop(self.heap)
                    ttl = TTL.get(cat, 8)
                    if ttl and time.time() - t0 > ttl: continue
                    item = (cat, prio, ph); break
            if not item: time.sleep(0.1); continue
            cat, prio, ph = item
            ok = self.player.play(ph)
            self.log(f"[{cat} p{prio}] {ph.replace(SEP, ' ')}" + ("" if ok else "   (sem clip de áudio)"))
            if not ok: time.sleep(0.3)

def _set_volume(self, v):
    """v em 0..100 (como o frontend)."""
    self.player.volume = max(0.0, min(100.0, float(v)))
VoiceQueue.set_volume = _set_volume
