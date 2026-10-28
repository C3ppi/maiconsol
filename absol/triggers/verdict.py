"""Veredito pós-partida (match_verdict.rs). Frases exatas; a escolha por categoria é uma heurística (INCERTO)."""
from dataclasses import dataclass
from ..common import P
from ..pools import pk

@dataclass
class Ctx:
    game_time: float = 0.0
    me: P | None = None
    win: bool = False
    team_kills: int = 0

def verdict(c: Ctx) -> str:
    me = c.me
    if c.game_time < 210: return pk("140F21D98")
    k, d, a = me.kills, me.deaths, me.assists
    share = (k + a) / c.team_kills if c.team_kills else 0.0
    kda = (k + a) / max(1, d)
    if c.win:
        if d == 0: return pk("140F234A0" if k + a >= 10 else "140F22CE8")
        if kda >= 5 and share >= 0.6: return pk("140F231F8")
        if d >= 8: return pk("140F229F0")
        if share < 0.3: return pk("140F22B88")
        return pk("140F228D0" if d > 4 else "140F22E08")
    if d >= 10: return pk("140F22458")
    if share < 0.25: return pk("140F221D8")
    if kda >= 3: return pk("140F227C0")
    return pk("140F21EE0" if d >= 5 else "140F235E8")
