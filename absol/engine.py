"""Liga o JSON da Live Client API aos gatilhos (equivalente a engine.rs)."""
from .triggers import minimap, ward, kill, objectives, mental, role as role_t, jungle, tips, gossip, build, verdict, spike
from .common import P, load_data
_PRICES = {int(k): v for k, v in load_data('prices.json')['prices'].items()}

def _canon(p):
    g = (p.get("riotId") or "").split("#")[0]
    return g or p.get("summonerName", "")

def _matches(p, n):
    c = [p.get("summonerName", ""), p.get("riotId", ""), (p.get("riotId") or "").split("#")[0], p.get("championName", "")]
    return any(x and x.lower() == n.lower() for x in c)

def _resolve(players, n):
    for p in players:
        if _matches(p, n): return _canon(p)
    return n

def _truthy(v): return v is True or (isinstance(v, str) and v.lower() == "true")

def _kp(p):
    sc = p.get("scores", {})
    return kill.Player(name=_canon(p), position=p.get("position", ""), level=p.get("level", 0),
                       kills=max(0, sc.get("kills", 0)), deaths=max(0, sc.get("deaths", 0)),
                       cs=sc.get("creepScore", 0), team=int(p.get("team") == "CHAOS"))

def _gold_value(p):
    return sum(int(i.get("price") or _PRICES.get(i.get("itemID"), 0)) * int(i.get("count", 1)) for i in p.get("items", []))

def _P(p, ap=None):
    sc = p.get("scores", {}); sp = p.get("summonerSpells", {})
    spells = [sp.get("summonerSpellOne", {}).get("displayName", ""), sp.get("summonerSpellTwo", {}).get("displayName", "")]
    cs = (ap or {}).get("championStats", {}) if ap else {}
    return P(champion=p.get("championName", ""), position=p.get("position", ""), is_dead=bool(p.get("isDead")),
             respawn=float(p.get("respawnTimer", 0.0)), level=p.get("level", 1), cs=sc.get("creepScore", 0),
             kills=max(0, sc.get("kills", 0)), deaths=max(0, sc.get("deaths", 0)), assists=max(0, sc.get("assists", 0)),
             ward_score=float(sc.get("wardScore", 0.0)), hp=float(cs.get("currentHealth", 0.0)), hp_max=float(cs.get("maxHealth", 0.0)),
             items=[i.get("itemID") for i in p.get("items", [])], item_names=[i.get("displayName", "") for i in p.get("items", [])],
             spells=spells, team=p.get("team", ""))

class Engine:
    def __init__(self): self.reset()
    def reset(self):
        self.mm = minimap.State(); self.wd = ward.State(); self.kl = kill.State()
        self.ob = objectives.State(); self.mt = mental.State()
        self.rl = role_t.State(); self.jg = jungle.State(); self.tp = tips.State(); self.gs = gossip.State(); self.bd = build.State(); self.sp = spike.State()
        self.verdict_done = False
        self.seen = -1; self.started = False; self.enemy_jungler = None

    def tick(self, raw: dict, sink):
        gd = raw.get("gameData", {}); t = float(gd.get("gameTime", 0.0))
        players = raw.get("allPlayers", []); ap = raw.get("activePlayer", {})
        me = None
        for p in players:
            if ap and (p.get("riotId") == ap.get("riotId") and p.get("riotId") or p.get("summonerName") == ap.get("summonerName")):
                me = p; break
        if t < 5.0 and self.started and self.seen > 0:
            self.seen = -1; self.kl = kill.State()
        self.started = True
        my_team = me.get("team") if me else ""
        allies = [p for p in players if my_team and p.get("team") == my_team]
        enemies = [p for p in players if my_team and p.get("team") != my_team]
        role = me.get("position", "") if me else ""
        ej = next((p for p in enemies if str(p.get("position", "")).upper() == "JUNGLE"), None)
        self.enemy_jungler = ej.get("championName") if ej and not ej.get("isDead") else None   # p/ detector da minimapa
        # minimap
        minimap.tick(self.mm, minimap.Ctx(t, me is not None, bool(me and me.get("isDead")), role), sink)
        # ward
        ward.tick(self.wd, ward.Ctx(t, me is not None, me.get("championName", "") if me else "",
                  [i.get("itemID") for i in me.get("items", [])] if me else [], role,
                  me.get("level", 0) if me else 0, me.get("scores", {}).get("wardScore", 0.0) if me else 0.0), sink)
        # eventos novos
        evs = [e for e in raw.get("events", {}).get("Events", []) if e.get("EventID", 0) > self.seen]
        if evs: self.seen = max(e["EventID"] for e in evs)
        kev, oev, mev = [], [], []
        R = lambda n: _resolve(players, n)
        for e in evs:
            n = e.get("EventName")
            if n == "ChampionKill":
                kev.append(kill.ChampionKill(R(e.get("KillerName", "")), R(e.get("VictimName", "")),
                                             [R(a) for a in e.get("Assisters", [])]))
            elif n == "Multikill": kev.append(kill.Multikill(R(e.get("KillerName", "")), e.get("KillStreak")))
            elif n == "Ace": oev.append(objectives.Ace(e.get("AcingTeam", "")))
            elif n == "BaronKill": oev.append(objectives.BaronKill(R(e.get("KillerName", "")), _truthy(e.get("Stolen"))))
            elif n == "HordeKill": oev.append(objectives.HordeKill(R(e.get("KillerName", ""))))
            elif n == "DragonKill": oev.append(objectives.DragonKill(R(e.get("KillerName", "")), e.get("DragonType", ""), _truthy(e.get("Stolen"))))
            elif n == "HeraldKill": oev.append(objectives.HeraldKill(R(e.get("KillerName", ""))))
            elif n == "InhibKilled":
                oev.append(objectives.InhibKilled(e.get("InhibKilled", ""))); mev.append(mental.InhibKilled(e.get("InhibKilled", "")))
            elif n == "TurretKilled":
                oev.append(objectives.TurretKilled(e.get("TurretKilled", ""))); mev.append(mental.TurretKilled(e.get("TurretKilled", "")))
            elif n == "GameEnd": mev.append(mental.GameEnd(e.get("Result")))
        team_chaos = bool(me and me.get("team") == "CHAOS")
        gold = float(ap.get("currentGold", 0.0))
        if me:
            m = kill.Player  # noqa
            sc = me.get("scores", {})
            kc = kill.Ctx(True, True, [_canon(me)], role, me.get("level", 0), max(0, sc.get("kills", 0)),
                          max(0, sc.get("deaths", 0)), sc.get("creepScore", 0), _kp(me).team, t,
                          [_kp(p) for p in allies], [_kp(p) for p in enemies])
            kill.on_events(self.kl, kev, kc, sink)
        names = []
        for p in allies: names += [_canon(p), p.get("summonerName", ""), p.get("championName", "")]
        oc = objectives.Ctx(t, me is not None, role, max(0, me.get("scores", {}).get("creepScore", 0)) if me else 0,
                            gold, team_chaos, False, [me.get("summonerSpells", {}).get("summonerSpellOne", {}).get("displayName", ""),
                            me.get("summonerSpells", {}).get("summonerSpellTwo", {}).get("displayName", "")] if me else [], names)
        objectives.on_tick(self.ob, oev, oc, sink)
        cs = ap.get("championStats", {})
        mp = lambda p: mental.Player(p.get("championName", ""), bool(p.get("isDead")), max(0, p.get("scores", {}).get("kills", 0)), _gold_value(p))
        mc = mental.Ctx(t, me is not None, bool(me and me.get("isDead")), role, gold, cs.get("currentHealth", 0.0),
                        cs.get("maxHealth", 0.0), cs.get("resourceValue", 0.0), cs.get("resourceMax", 0.0),
                        me.get("scores", {}).get("deaths", 0) if me else 0, team_chaos,
                        [mp(p) for p in allies], [mp(p) for p in enemies])
        mental.on_tick(self.mt, mev, mc, sink)
        # ---- módulos recuperados depois (role, jungle, tips, gossip, build) e veredito
        if me:
            pme = _P(me, ap); pal = [_P(p, ap if p is me else None) for p in allies]; pen = [_P(p) for p in enemies]
            role_t.on_tick(self.rl, role_t.Ctx(t, pme, pal, pen), sink)
            jungle.on_tick(self.jg, jungle.Ctx(t, pme, pen), sink)
            tips.on_tick(self.tp, tips.Ctx(t, pme, pen), sink)
            gossip.on_tick(self.gs, gossip.Ctx(t, pme, pen), sink)
            spike.on_tick(self.sp, spike.Ctx(t, pme, pen), sink)
            build.on_tick(self.bd, build.Ctx(t, pme, pen, gold), sink)
            for e in evs:
                if e.get("EventName") == "GameEnd" and not self.verdict_done:
                    self.verdict_done = True
                    tk = sum(p.kills for p in pal)
                    sink.say("system", 4, verdict.verdict(verdict.Ctx(t, pme, e.get("Result") == "Win", tk)))
