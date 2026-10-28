"""gossip/scout LOCAL: nível 6 do oponente e CS/min aos 10 minutos. (Séries de vitórias/derrotas e 'main' do inimigo
dependiam de dados do perfil Riot via servidor e NÃO foram recuperados.)"""
import random
from dataclasses import dataclass, field
from ..common import P, seg, norm
from ..pools import pk

@dataclass
class State:
    lvl6_done: bool = False; cs10_done: bool = False; mine6: bool = False

@dataclass
class Ctx:
    game_time: float = 0.0
    me: P | None = None
    enemies: list = field(default_factory=list)

def on_tick(st: State, c: Ctx, sink):
    me = c.me
    if me is None: return
    t = c.game_time
    opp = next((p for p in c.enemies if p.position.upper() == me.position.upper() and p.position), None)
    if opp and me.position.upper() != "JUNGLE" and not st.lvl6_done and t < 900 and opp.level >= 6 and me.level < 6:
        st.lvl6_done = True
        sink.say("tips", 3, seg(opp.champion, pk("140F19778")))
    if not st.cs10_done and 600 <= t <= 630 and me.position.upper() not in ("UTILITY", ""):
        st.cs10_done = True
        cpm = me.cs / (t / 60.0)
        if me.position.upper() == "JUNGLE":
            p = "140F1AA78" if cpm >= 6 else "140F1A8A0" if cpm >= 4.5 else "140F1A990"
        elif cpm >= 8: p = "140F1A7E8"
        elif cpm >= 6.5: p = "140F1A1C8"
        elif cpm >= 5: p = "140F195D8" if me.kills > me.deaths else "140F19550"
        else: p = "140F19660"
        sink.say("tips", 2, seg(f"{cpm:.1f}", pk(p)))
