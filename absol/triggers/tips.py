"""tips — dicas de matchup (matchup_tips.json) e de campeão (champion_tips.json), extraídas do exe.
Quando falar (início de partida / fase de rota / periódico) é INCERTO: reconstruído a partir da documentação do JSON
('Tips spoken at game start and during lane phase')."""
import random
from dataclasses import dataclass, field
from ..common import P, seg, norm, load_data

MATCHUP = {norm(k): v for k, v in load_data("matchup_tips.json").items() if k != "_doc"}
CHAMP = {norm(k): v for k, v in load_data("champion_tips.json").items()}
LEVEL2 = {"strong": "Voce e forte no nivel 2, aproveita pra trocar primeiro.",
          "weak": "Voce e fraco no nivel 2, evita trocar antes de ter mais nivel.",
          "neutral": "Nivel 2 e parelho, joga pela wave."}

@dataclass
class State:
    start_done: bool = False; lane_done: bool = False; lvl2_done: bool = False
    last_periodic: float = 0.0; used: set = field(default_factory=set)

@dataclass
class Ctx:
    game_time: float = 0.0
    me: P | None = None
    enemies: list = field(default_factory=list)

def _fresh(st, key, options):
    ops = [o for o in options if (key, o) not in st.used] or options
    c = random.choice(ops); st.used.add((key, c)); return c

def on_tick(st: State, c: Ctx, sink):
    me = c.me
    if me is None: return
    t = c.game_time; mk = norm(me.champion); md = MATCHUP.get(mk)
    if t < st.last_periodic - 5:
        st.__dict__.update(State().__dict__)
    if 8 <= t <= 60 and not st.start_done and md and md.get("general"):
        st.start_done = True
        sink.say("tips", 2, _fresh(st, "g", md["general"]))
    if 60 <= t <= 300 and not st.lane_done and md:
        opp = next((p for p in c.enemies if p.position.upper() == me.position.upper() and p.position), None)
        vs = {norm(k): v for k, v in md.get("vs", {}).items()}
        if opp and norm(opp.champion) in vs:
            st.lane_done = True
            sink.say("tips", 2, seg("Dica de matchup:", _fresh(st, "vs", vs[norm(opp.champion)])))
    if me.level == 2 and not st.lvl2_done and md and md.get("level2") in LEVEL2 and t < 300:
        st.lvl2_done = True; sink.say("tips", 2, LEVEL2[md["level2"]])
    if t >= 180 and t - st.last_periodic >= 300 and mk in CHAMP and CHAMP[mk]:
        st.last_periodic = t
        sink.say("tips", 2, _fresh(st, "c", CHAMP[mk]))
