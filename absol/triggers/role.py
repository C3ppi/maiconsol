"""Port de role (FUN_1402b94a0) — dicas por posição. Pools: 0x14024f4d0..0x1402528b0.
Estrutura recuperada do decompilado; aninhamento exato de alguns blocos é INCERTO (ver README)."""
import math, random
from dataclasses import dataclass, field
from ..common import P, seg, norm, has_spell
from ..pools import pk

ASSASSINS = {"zed", "fizz", "ekko", "pyke", "talon", "akali", "shaco", "diana", "elise", "qiyana", "rengar",
             "khazix", "syndra", "veigar", "nidalee", "evelynn", "leblanc", "katarina", "nocturne"}
LANE_WORD = {"MIDDLE": "mid", "BOTTOM": "bot", "TOP": "top", "UTILITY": "sup", "JUNGLE": "jungle"}

@dataclass
class State:
    tp_warn_target: float = 0.0
    hp_t: float = 0.0; hp_n: int = 0            # Anjo Guardiao (+0x2c/+0x30)
    bar_t: float = 0.0; bar_n: int = 0          # Barreira
    j_cs: int = 0; j_t: float = 0.0; j_n: int = 0
    j_tip: bool = False; j_dead_flag: bool = False; j_farm: bool = False; j_ally: bool = False
    lead_t: float = 0.0; obj_key: float = -1.0
    cs_done: bool = False; assassin_done: bool = False; adc_tip: bool = False
    tp_checked: bool = False; tp_done: bool = False
    sup_bot_t: float = 0.0; sup_ward_t: float = 0.0
    ejd_flag: bool = False; split_t: float = 0.0

@dataclass
class Ctx:
    game_time: float = 0.0
    me: P | None = None
    allies: list = field(default_factory=list)      # inclui eu
    enemies: list = field(default_factory=list)

def _next_boundary(t, first, period):
    return first if t < first else (math.floor((t - first) / period) + 1) * period + first

def on_tick(st: State, c: Ctx, sink):
    me = c.me
    if me is None: return
    t = c.game_time; role = me.position.upper(); ratio = me.hp / me.hp_max if me.hp_max > 0 else 1.0
    dead = me.is_dead
    # --- Anjo Guardião (id 3026) com vida entre 20% e 40%
    if t < 840 and (st.hp_n == 0 or t - st.hp_t >= 300) and 3026 in me.items and not dead and 0.2 < ratio <= 0.4 and me.hp > 0:
        st.hp_t = t; st.hp_n += 1
        sink.say("role", 3, pk("140EDE908"))
    # --- Barreira com vida entre 20% e 35%
    if t <= 480 and not dead and (st.bar_n == 0 or t - st.bar_t >= 180) and me.hp_max > 0 and 0.2 < ratio <= 0.35 \
            and has_spell(me, "barrier", "barreira"):
        st.bar_t = t; st.bar_n += 1
        sink.say("role", 3, pk("140EDE358"))
    if role in ("JUNGLE", "MIDDLE", "BOTTOM"):
        if role == "JUNGLE": _jungle(st, c, me, t, dead, sink)
        if role == "BOTTOM": _adc(st, c, me, t, sink)
        if role == "MIDDLE": _mid(st, c, me, t, sink)
        _obj_warning(st, c, me, t, role, sink)
    elif role == "UTILITY":
        _support(st, c, me, t, sink)
    # --- teleport
    if t >= 240 and role in ("TOP", "MIDDLE", "BOTTOM"):
        _tp(st, c, me, t, role, sink)
    # --- jungler inimigo morto (qualquer role, exceto jungle)
    if 180 <= t <= 900 and not dead and role != "JUNGLE":
        ej = next((p for p in c.enemies if p.position.upper() == "JUNGLE"), None)
        if ej:
            if not ej.is_dead: st.ejd_flag = False
            elif not st.ejd_flag and ej.respawn > 4:
                st.ejd_flag = True
                if random.random() < 0.5: sink.say("role", 3, pk("140EDDD08"))
                else: sink.say("role", 3, seg(int(ej.respawn), pk("140EDDDB0")))
    # --- vários inimigos mortos: split push
    if t >= 1200 and not dead and t - st.split_t >= 90 and sum(p.is_dead for p in c.enemies) > 1:
        st.split_t = t; sink.say("role", 3, pk("140EDE030"))

def _jungle(st, c, me, t, dead, sink):
    # sem farmar há 100s (progresso de CS), máx. 3 avisos
    if t >= 70 and st.j_n <= 2:
        if st.j_t == 0.0 or st.j_cs < me.cs: st.j_cs = me.cs; st.j_t = t
        elif t - st.j_t >= 100:
            st.j_n += 1; st.j_t = t; sink.say("role", 2, pk("140EDDF80"))
    if 80 <= t <= 120 and not st.j_tip:
        st.j_tip = True; sink.say("role", 3, pk("140EDE700"))
    if t >= 180 and not dead:
        ej = next((p for p in c.enemies if p.position.upper() == "JUNGLE"), None)
        if ej:
            if not ej.is_dead: st.j_dead_flag = False
            elif not st.j_dead_flag:
                st.j_dead_flag = True
                pool = "140EDEDA0" if random.random() < .5 else "140EDEE38"   # INCERTO: param_3 do original
                sink.say("role", 2, seg(ej.champion, pk(pool)))
    if t >= 480 and not st.j_farm and me.cs / (t / 60.0) < 4.5:
        st.j_farm = True; sink.say("role", 3, pk("140EDDCA0"))
    if 300 <= t <= 1200 and not st.j_ally:
        for a in c.allies:
            if a is me or a.champion == me.champion: continue
            pos = a.position.upper()
            if pos in ("TOP", "MIDDLE", "BOTTOM") and a.deaths > 4 and a.deaths - a.kills > 2:
                st.j_ally = True
                sink.say("role", 3, seg(LANE_WORD[pos], pk("140EDE1B0"))); break

def _adc(st, c, me, t, sink):
    if not st.cs_done and 480 <= t <= 720:
        st.cs_done = True
        v = round(me.cs / (t / 60.0))
        if v >= 8: s = pk("140EDDE80")
        elif v >= 6: s = pk("140EDEED8")
        elif me.kills > me.deaths: s = pk("140EDE0C0")
        else: s = pk("140EDDC00")
        sink.say("role", 2, seg(v, s))
    if t >= 600 and not st.assassin_done and sum(norm(p.champion) in ASSASSINS for p in c.enemies) > 1:
        st.assassin_done = True; sink.say("role", 2, pk("140EDEBB0"))
    if me.kills >= 5 and t >= 720 and not st.adc_tip and me.deaths >= 2 and max(0, me.kills - me.deaths) <= 3:
        st.adc_tip = True; sink.say("role", 3, pk("140EDE550"))

def _mid(st, c, me, t, sink):
    if 480 <= t <= 1500 and t - st.lead_t >= 120:
        om = next((p for p in c.enemies if p.position.upper() == "MIDDLE"), None)
        if om and me.cs - om.cs > 14:
            st.lead_t = t; sink.say("role", 3, seg(me.cs - om.cs, pk("140EDE9D8")))

def _obj_warning(st, c, me, t, role, sink):
    """Dragão (300s, depois a cada 300s) e Barão (1200s, depois a cada 360s): aviso entre 20 e 45s antes."""
    if role == "JUNGLE": return
    for name, first, period in (("Dragon", 300, 300), ("Baron", 1200, 360)):
        if name == "Baron" and t < 1200: continue
        nxt = _next_boundary(t, first, period); rem = nxt - t
        if 20 < rem <= 45 and st.obj_key != nxt + (0.5 if name == "Baron" else 0):
            st.obj_key = nxt + (0.5 if name == "Baron" else 0)
            sink.say("role", 2, seg(name, int(rem), pk("140EDE7A0"))); return

def _support(st, c, me, t, sink):
    if 420 <= t <= 800 and me.level > 5 and t - st.sup_bot_t >= 90:
        if any(p.is_dead and p.position.upper() in ("BOTTOM", "UTILITY") for p in c.enemies):
            st.sup_bot_t = t; sink.say("role", 3, pk("140EDE440"))
    if t >= 420 and t - st.sup_ward_t >= 180 and me.ward_score < (t / 60.0 / 3.0) * 0.6:
        st.sup_ward_t = t
        sink.say("role", 3, seg(f"Vision score {round(me.ward_score)}.", pk("140EDE280")))

def _tp(st, c, me, t, role, sink):
    opp = next((p for p in c.enemies if p.position.upper() == role), None)
    if opp is None: return
    my_tp = has_spell(me, "teleport", "teletransport"); op_tp = has_spell(opp, "teleport", "teletransport")
    if not st.tp_done and not op_tp:
        st.tp_done = True
        sink.say("role", 3, seg(opp.champion, pk("140EDE838" if my_tp else "140EDEC88"))); return
    if my_tp:
        nxt = _next_boundary(t, 300, 300)
        if 30 < nxt - t <= 60 and st.tp_warn_target != nxt:
            st.tp_warn_target = nxt; sink.say("role", 3, pk("140EDEAB0"))
