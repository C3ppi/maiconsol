"""Converte o JSON da Live Client API nos eventos que o frontend original espera (absol://game-*)."""
from .engine import _canon, _gold_value, _P
from .triggers import build

class Bridge:
    def __init__(self, app): self.app = app; self.live = False; self.seen = -1; self.last_role = ""; self.ended = False; self.last_build = None
    def _player(self, p, ap=None):
        sc = p.get("scores", {})
        return {"riot_id": p.get("riotId", ""), "summoner_name": p.get("summonerName", ""), "champion_name": p.get("championName", ""),
                "position": p.get("position", ""), "level": p.get("level", 1), "team": p.get("team", ""), "is_dead": bool(p.get("isDead")),
                "items": [{"item_id": i.get("itemID"), "name": i.get("displayName", ""), "count": i.get("count", 1), "price": i.get("price", 0)} for i in p.get("items", [])],
                "scores": {"kills": sc.get("kills", 0), "deaths": sc.get("deaths", 0), "assists": sc.get("assists", 0),
                           "creep_score": sc.get("creepScore", 0), "cs": sc.get("creepScore", 0), "ward_score": sc.get("wardScore", 0.0)}}
    def update(self, raw):
        bus = self.app.bus; gd = raw.get("gameData", {}); t = float(gd.get("gameTime", 0.0)); ap = raw.get("activePlayer", {})
        players = raw.get("allPlayers", [])
        me = next((p for p in players if p.get("riotId") and p.get("riotId") == ap.get("riotId") or p.get("summonerName") == ap.get("summonerName")), None)
        if not self.live or t < 5 and self.ended:
            self.live = True; self.ended = False; self.seen = -1
            bus.emit("absol://game-started", None)
            role = (me or {}).get("position", "")
            bus.emit("absol://game-live", {"coaching_active": True, "supported_mode": True, "server_offline": False,
                                           "free_queue_blocked": False, "role": role})
        role = (me or {}).get("position", "")
        if role and role != self.last_role:
            self.last_role = role; bus.emit("absol://player-role", {"role": role})
        snap = {"game_time": t, "game_mode": gd.get("gameMode", ""), "current_gold": ap.get("currentGold", 0.0),
                "my_player": self._player(me) if me else None, "players": [self._player(p) for p in players],
                "coaching_active": True, "supported_mode": True}
        bus.emit("absol://game-snapshot", snap)
        new = [e for e in raw.get("events", {}).get("Events", []) if e.get("EventID", 0) > self.seen]
        if new:
            self.seen = max(e["EventID"] for e in new); bus.emit("absol://game-events", new)
            if any(e.get("EventName") == "GameEnd" for e in new): self.end()
        if me and t >= 60:
            rec = build.recommend(_P(me, ap), [_P(p) for p in players if p.get("team") != me.get("team")])
            if rec and rec != self.last_build:
                self.last_build = rec; bus.emit("absol://build-path", rec)
        if me:
            mine = [p for p in players if p.get("team") == me.get("team")]; foe = [p for p in players if p.get("team") != me.get("team")]
            bus.emit("absol://gold-diff", {"diff": sum(map(_gold_value, mine)) - sum(map(_gold_value, foe))})
    def end(self):
        if self.live:
            self.live = False; self.ended = True; self.last_role = ""
            self.app.bus.emit("absol://game-ended", None)
