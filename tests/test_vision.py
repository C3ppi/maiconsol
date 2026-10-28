import numpy as np, cv2
from absol import vision

def _icon(seed=1):
    r = np.random.RandomState(seed)
    base = cv2.resize(r.randint(0, 255, (12, 12, 3)).astype("uint8"), (120, 120), interpolation=cv2.INTER_CUBIC)
    cv2.circle(base, (60, 60), 30, (int(r.randint(256)),) * 3, -1)
    return base

def _minimap(icon, d=27, pos=(120, 90), seed=5):
    r = np.random.RandomState(seed)
    bg = cv2.resize(r.randint(20, 90, (28, 28, 3)).astype("uint8"), (280, 280), interpolation=cv2.INTER_CUBIC)
    bg = np.clip(bg.astype(int) + r.randint(-6, 6, bg.shape), 0, 255).astype("uint8")
    if pos:
        t = cv2.resize(icon, (d, d), interpolation=cv2.INTER_AREA)
        m = np.zeros((d, d), "uint8"); cv2.circle(m, (d // 2, d // 2), d // 2, 255, -1)
        x, y = pos; roi = bg[y:y + d, x:x + d]; roi[m > 0] = t[m > 0]
        cv2.circle(bg, (x + d // 2, y + d // 2), d // 2, (40, 40, 220), 2)   # anel vermelho
        bg = cv2.GaussianBlur(bg, (3, 3), 0)
    return bg

def test_find_present_and_absent():
    icon = _icon(); tp = vision.make_templates(icon, 280)
    for d in (23, 27, 31):
        s, loc = vision.find(_minimap(icon, d), tp)
        assert loc is not None, (d, s)
        assert abs(loc[0] - 120) <= 6 and abs(loc[1] - 90) <= 6
    assert vision.find(_minimap(icon, pos=None), tp)[1] is None
    assert vision.find(_minimap(_icon(9), 27), tp)[1] is None      # outro campeão

class Sink:
    def __init__(s): s.m = []
    def say(s, c, p, t): s.m.append((c, t))

def test_watcher_announces_after_absence():
    icon = _icon()
    from absol.config import Config
    w = vision.Watcher(Sink(), Config("/tmp/_cfg.json"), lambda: "Vi", __import__("pathlib").Path("/tmp/_c"))
    w._icon = icon
    on, off = _minimap(icon), _minimap(icon, pos=None)
    t = 100.0
    for _ in range(3): w.step(off, "Vi", now=t); t += .4          # ausente
    t += 10
    for _ in range(4): w.step(on, "Vi", now=t); t += .4           # aparece
    assert [c for c, _ in w.sink.m] == ["jungle_vision"]
    for _ in range(4): w.step(on, "Vi", now=t); t += .4           # continua visível: não repete
    assert len(w.sink.m) == 1
