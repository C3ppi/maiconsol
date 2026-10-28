"""Cliente da Live Client Data API (somente leitura) e montagem dos contextos dos gatilhos."""
import json, ssl, urllib.request

URL = "https://127.0.0.1:2999/liveclientdata/allgamedata"
_ctx = ssl.create_default_context(); _ctx.check_hostname = False; _ctx.verify_mode = ssl.CERT_NONE

def fetch(timeout=1.5):
    try:
        with urllib.request.urlopen(URL, timeout=timeout, context=_ctx) as r:
            return json.loads(r.read().decode("utf8"))
    except Exception:
        return None
