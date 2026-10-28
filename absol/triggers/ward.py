"""Port de ward::tick (FUN_140336f10)."""
from dataclasses import dataclass, field
from ..pools import pk

@dataclass
class State:
    ref_score: float = 0.0; last_t: float = 0.0; n_reminders: int = 0; last_level: int = 0
    jungle_t: float = 0.0; lee_n: int = 0; lee_t: float = 0.0
    sup_n: int = 0; sup_t: float = 0.0; sup_periodic_t: float = 0.0; sup_periodic_n: int = 0
    lee_swapped: bool = False; lee_wait: bool = False

@dataclass
class Ctx:
    game_time: float = 0.0
    active_player_known: bool = False
    champion: str = ""
    items: list = field(default_factory=list)
    role: str = ""
    level: int = 0
    ward_score: float = 0.0

def normalize_champion(n):
    return n.lower().replace("'", "").replace(".", "").replace(" ", "_")

SUPPORT_UPGRADES = (3866, 3867, 3869, 3870, 3871, 3876, 3877)
ASSASSINS = ("talon", "naafiri", "rengar", "khazix", "qiyana")
STEALTHY = ("shaco", "briar", "twitch", "evelynn", "fiddlesticks")

def trinket_swap(level, role):
    if role == "MIDDLE":
        p = "140EDC8A8" if level < 12 else "140EDC7B8" if level < 15 else "140EDC6C8"
    elif role == "BOTTOM":
        p = "140EDC5D0" if level < 12 else "140EDC4D8" if level < 15 else "140EDC3E0"
    else:
        p = "140EDCB98" if level < 12 else "140EDCAA8" if level < 15 else "140EDC9B8"
    return pk(p)

def tick(st: State, c: Ctx, sink):
    t = c.game_time; known = c.active_player_known; rl = len(c.role)
    jungle = c.role == "JUNGLE"; util = c.role == "UTILITY"
    has = lambda i: i in c.items
    stealth, oracle, farsight = has(3340), has(3364), has(3363)
    if rl == 6 and known and t >= 180.0 and jungle:
        _jungle_block(st, c, t, stealth, oracle, farsight, sink)
    elif not (rl == 6 and known):
        if st.sup_n < 4 and known and rl == 7:
            if util:
                if oracle: st.sup_n = 4
                elif stealth or st.sup_t > 0.0:
                    if st.sup_t == 0.0:
                        atlas = has(3865)
                        upgraded = any(has(u) for u in SUPPORT_UPGRADES)
                        if upgraded and not atlas:
                            st.sup_t = t; st.sup_n = 1
                            sink.say("ward", 4, pk("140EDDB60"))
                    elif t - st.sup_t >= 60.0:
                        st.sup_t = t; st.sup_n += 1
                        sink.say("ward", 4, pk("140EDDB60"))
                else: st.sup_n = 4
        elif not known:
            return
    _level_logic(st, c, t, known, rl, jungle, util, stealth, oracle, farsight, sink)

def _jungle_block(st, c, t, stealth, oracle, farsight, sink):
    champ = normalize_champion(c.champion)
    if champ in ("leesin", "lee_sin"):
        if st.lee_n > 2: return
        bflag = False
        if st.lee_wait:
            if t - st.lee_t >= 30.0:
                if not stealth:
                    st.lee_swapped = False; st.lee_wait = False; go_a = True
                else: go_a = False
            else: return
        elif not stealth: bflag = st.lee_swapped; go_a = True
        else: go_a = False
        if go_a:
            if (not oracle and not farsight) or bflag: return
            st.lee_swapped = True
            sink.say("ward", 4, pk("140EDD928"))
        elif st.jungle_t == 0.0:
            st.jungle_t = t
            sink.say("ward", 4, pk("140EDD758"))
        else:
            if st.lee_wait or not st.lee_swapped: return
            st.lee_wait = True; st.lee_n += 1; st.lee_t = t
            sink.say("ward", 5, pk("140EDD820"))
        return
    if oracle or farsight or (st.jungle_t > 0.0 and t - st.jungle_t < 180.0): return
    st.jungle_t = t
    if champ in ASSASSINS: sink.say("ward", 4, pk("140EDD468"))
    elif champ in STEALTHY: sink.say("ward", 4, pk("140EDD368"))
    else: sink.say("ward", 4, pk("140EDD608"))

def _level_logic(st, c, t, known, rl, jungle, util, stealth, oracle, farsight, sink):
    level = c.level
    to_timer = True; bflag_skip = False
    if 9 <= level <= 18 and level > st.last_level:
        if rl == 7 and util:
            if t < 180.0: bflag_skip = True; to_timer = False
        elif rl == 7 or not (rl == 6 and jungle):
            if oracle or farsight: st.last_level = 99
            elif stealth:
                st.last_level = level
                sink.say("ward", 4, trinket_swap(level, c.role))
        elif t < 180.0:
            return
    skip = False
    if to_timer:
        if t < 180.0: skip = True
        else:
            is_sup, interval, limit = (True, 120.0, 5) if (rl == 7 and util) else (False, 240.0, 3)
            if st.n_reminders < limit:
                if st.last_t == 0.0 or st.ref_score + 0.5 <= c.ward_score:
                    st.ref_score = c.ward_score; st.last_t = t
                elif interval <= t - st.last_t:
                    st.n_reminders += 1; st.last_t = t
                    sink.say("ward", 4, pk("140EDCDF0") if is_sup else pk("140EDC2E0"))
    else:
        skip = bflag_skip
    if rl == 7 and known and not skip and st.sup_periodic_n < 6 and util:
        if st.sup_periodic_t != 0.0:
            if t - st.sup_periodic_t >= 180.0:
                st.sup_periodic_t = t; st.sup_periodic_n += 1
                sink.say("ward", 5, pk("140EDD200"))
        else:
            st.sup_periodic_t = t
