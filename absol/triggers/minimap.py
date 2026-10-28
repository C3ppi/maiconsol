"""Port de minimap::tick (FUN_14026afc0). Ver src-tauri/.../triggers/minimap.rs para offsets."""
from dataclasses import dataclass
from ..pools import pk

@dataclass
class State:
    count: int = 0
    last_time: float = 0.0
    intro_done: bool = False

@dataclass
class Ctx:
    game_time: float = 0.0
    active_player_known: bool = False
    active_flag: bool = False      # INCERTO (+0x1e1)
    role: str = ""

def interval(t):
    if t >= 300:
        if t >= 600:
            if t >= 900:
                return 50.0 if t < 1500 else 60.0
            return 40.0
        return 35.0
    return 30.0

def tick(st: State, ctx: Ctx, sink):
    t = ctx.game_time
    if st.last_time <= t:
        flag = not st.intro_done
    else:
        st.count = 0; st.last_time = -100.0; st.intro_done = False; flag = True
    if t < 40.0 and 2.0 <= t and flag:
        st.intro_done = True
        sink.say("minimap_intro", 4, pk("140ED8938"))
    if t < 40.0: return
    if ctx.active_player_known and ctx.active_flag: return
    if t - st.last_time < interval(t): return
    st.last_time = t
    st.count += 1
    if st.count % 5 != 0:
        ph = pk("140ED8768")
    elif ctx.active_player_known and ctx.role.lower() == "jungle":
        ph = pk("140ED89C0")
    else:
        ph = pk("140ED8A18")
    sink.say("minimap", 5, ph)
