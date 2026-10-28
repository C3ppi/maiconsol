"""Port de jungle (FUN_1402c25f0): avisos de gank pelo tempo de primeiro clear do jungler inimigo,
jungler inimigo morto e jungler reaparecido. Tabela de clear (segundos) lida do binário.
jungle_spotted: lógica lida do binário (FUN_1402c25f0): dispara quando o jungler inimigo volta de morto, sobe de nível ou muda de itens
(depois da 1ª leitura, >=5s de jogo, t<900). Frase: 1/3 'Nome + (apareceu no mapa! Cuidado! | no mapa!)', 2/3 pool 140ED6F58.
INCERTO: o original talvez usasse outra fonte de dados (visão); com a Live Client API isso vira 'jungler mudou de estado'."""
import random
from dataclasses import dataclass, field
from ..common import P, seg, norm
from ..pools import pk, POOLS

CLEAR = {  # nomes normalizados (sem espaço/apóstrofo/pontuação)
    "vi": 175, "zac": 185, "nunu": 160, "nunuwillump": 160, "kayn": 200, "udyr": 200,
    "elise": 150, "shaco": 150, "talon": 160, "poppy": 185, "amumu": 185, "ivern": 175, "briar": 170,
    "viego": 185, "diana": 210, "leesin": 150, "twitch": 150, "reksai": 155, "wukong": 185, "gragas": 185,
    "maokai": 185, "rammus": 180, "lillia": 210, "graves": 195, "xinzhao": 160, "camille": 160,
    "evelynn": 200, "nidalee": 170, "kindred": 175, "warwick": 175, "sejuani": 185, "hecarim": 185,
    "trundle": 185, "skarner": 185, "belveth": 200, "karthus": 240, "shyvana": 230, "jarvaniv": 155,
    "pantheon": 160, "volibear": 185, "nocturne": 180, "masteryi": 220, "fiddlesticks": 220,
}
DEFAULT_CLEAR = 195.0
CLIP_CHAMPS = {"skarner", "warwick", "malzahar", "rammus", "amumu", "sejuani", "darius", "maokai", "poppy",
               "katarina", "shaco", "pyke", "yone", "viego", "ambessa", "ahri", "sylas", "aurora", "graves",
               "leesin", "reksai", "ksante", "camille"}

@dataclass
class State:
    first_done: bool = False; second_done: bool = False; last_warn: float = 0.0; cycle_t: float = 0.0
    dead_said: bool = False; was_dead: bool = False; started: bool = False
    sp_init: bool = False; sp_level: int = 0; sp_hash: tuple = (); sp_jungle: bool = False; sp_start: float = 0.0; sp_alert: float = -1.0

@dataclass
class Ctx:
    game_time: float = 0.0
    me: P | None = None
    enemies: list = field(default_factory=list)

def clear_time(champion: str) -> float:
    return float(CLEAR.get(norm(champion), DEFAULT_CLEAR))

def _spotted(st, t, ej, sink):
    if not st.started: st.started = True; st.sp_start = t
    is_j = ej.position.upper() == "JUNGLE"
    h = tuple(ej.items) if ej.items else ()
    alert = False
    if ej.level != st.sp_level and not (is_j and not st.sp_jungle) or ej.level == st.sp_level and not (is_j and not st.sp_jungle) and h != st.sp_hash:
        alert = st.sp_init
    elif is_j and not st.sp_jungle:
        if not st.sp_init:
            st.sp_init = True
        else:
            alert = (t - st.sp_start) >= 5.0
    st.sp_level, st.sp_hash, st.sp_jungle = ej.level, h, is_j
    if alert:
        st.sp_alert = t
        r = random.randrange(6)
        if r < 2 and ej.champion:
            s = seg(ej.champion, ("apareceu no mapa! Cuidado!", "no mapa!")[r])
        else:
            s = pk("140ED6F58")
        sink.say("jungle_spotted", 3, s)

def on_tick(st: State, c: Ctx, sink):
    t = c.game_time
    if t < 10.0 and t < st.last_warn:
        st.__dict__.update(State().__dict__)
    me = c.me
    ej = next((p for p in c.enemies if p.position.upper() == "JUNGLE"), None)
    if me is None or ej is None: return
    my_jungle = me.position.upper() == "JUNGLE"
    # ---- jungler inimigo morto / voltou
    if ej.is_dead:
        st.was_dead = True; st.sp_jungle = False
        if t <= 480 and not my_jungle and not st.dead_said and not me.is_dead and ej.respawn >= 1.0:
            st.dead_said = True
            sink.say("jungle", 2, pk("140ED6E38"))
        return
    if t < 900:
        _spotted(st, t, ej, sink)
    st.was_dead = False
    if t > 1200 or me.is_dead or my_jungle: return
    # ---- ciclo de gank warnings
    if st.first_done and st.second_done:
        if t - st.cycle_t < 120.0: return
        st.first_done = st.second_done = False; st.cycle_t = t
    clr = clear_time(ej.champion)
    if not st.first_done:
        if t <= clr:
            if clr - 30.0 <= t and 30.0 < t - st.last_warn:
                sink.say("gank_warning", 2, pk("140ED6B28"))
                st.last_warn = t; st.cycle_t = t; st.first_done = True
        else:
            st.first_done = True
    if not st.second_done and st.first_done:
        if t <= clr + 100.0:
            if clr + 70.0 <= t and 30.0 < t - st.last_warn:
                sink.say("gank_warning", 2, pk("140ED6CB8"))
                st.last_warn = t; st.cycle_t = t; st.second_done = True
        else:
            st.second_done = True; st.cycle_t = t
