"""Port de objectives::on_tick (FUN_1402ab2b0)."""
from dataclasses import dataclass, field
from ..pools import pk

@dataclass
class State:
    ally_soul: str | None = None; enemy_soul: str | None = None
    dragon_on: bool = True; dragon_t: float = 300.0
    baron_on: bool = True; baron_t: float = 1200.0
    herald_on: bool = True; herald_t: float = 900.0
    grubs_on: bool = True; grubs_t: float = 480.0
    elder_on: bool = False; elder_t: float = 0.0
    ally_dragons: int = 0; enemy_dragons: int = 0
    ally_grubs: int = 0; enemy_grubs: int = 0; total_grubs: int = 0
    turrets_lost: int = 0; turrets_taken: int = 0; last_balance: int = 0
    f78: bool = False; f79: bool = False; f7a: bool = False; f7b: bool = False; f7c: bool = False
    f7d: bool = False; f7e: bool = False; f7f: bool = False; f80: bool = False
    f81: bool = False; f82: bool = False; f83: bool = False; f84: bool = False

@dataclass
class Ace: acing_team: str
@dataclass
class BaronKill: killer: str; stolen: bool = False
@dataclass
class HordeKill: killer: str
@dataclass
class DragonKill: killer: str; dragon_type: str = ""; stolen: bool = False
@dataclass
class HeraldKill: killer: str
@dataclass
class InhibKilled: inhib: str
@dataclass
class TurretKilled: turret: str

@dataclass
class Ctx:
    game_time: float = 0.0; me_known: bool = False; role: str = ""
    cs: int = 0; gold: float = 0.0; team_chaos: bool = False; flag_1f1: bool = False
    spells: list = field(default_factory=list)
    ally_names: list = field(default_factory=list)
    def tag(self): return "TChaos" if self.team_chaos else "TOrder"
    def team_str(self): return "CHAOS" if self.team_chaos else "ORDER"
    def is_ally(self, n):
        return bool(n) and (any(a.lower() == n.lower() for a in self.ally_names) or _c(n, self.tag()))

def _c(h, n): return n.lower() in h.lower()

_AIR = {"Air": "140F134D8", "Fire": "140F14370", "Water": "140F13938", "Earth": "140F14410",
        "Hextech": "140F13EE8", "Chemtech": "140F142D8", "_": "140F13E38"}
_ENEMY = {"Air": "140F13A78", "Fire": "140F14E70", "Water": "140F13F98", "Earth": "140F14F10",
          "Hextech": "140F14588", "Chemtech": "140F14DB8", "_": "140F144C0"}
_SOUL_A = {"Air": "140F12328", "Fire": "140F12228", "Water": "140F12148", "Earth": "140F12050",
           "Hextech": "140F11F20", "Chemtech": "140F11E38", "_": "140F14FA8"}
_SOUL_E = {"Air": "140F13130", "Fire": "140F13038", "Water": "140F12F38", "Earth": "140F12E40",
           "Hextech": "140F12D20", "Chemtech": "140F12C30", "_": "140F10C50"}
def _el(tbl, t): return pk(tbl.get(t, tbl["_"]))

def dragon_minute(role, has_tp, cs, gold, flag):
    if role == "TOP":
        ahead = (gold >= 2000.0) if flag else (cs > 0x4f)
        return pk("140F14A60" if (has_tp and ahead) else "140F14960")
    if role == "UTILITY": return pk("140F14668")
    if role == "BOTTOM": return pk("140F14C68" if flag else "140F14B78")
    if role == "MIDDLE": return pk("140F14858")
    if role == "JUNGLE": return pk("140F14760")
    return pk("140F12598")

def on_tick(st: State, events, ctx: Ctx, sink):
    now = ctx.game_time
    if now < 10.0 and st.dragon_on and st.dragon_t > 500.0:
        st.__dict__.update(State().__dict__)
    for ev in events:
        if isinstance(ev, Ace):
            if ev.acing_team == ctx.team_str(): sink.say("objectives", 1, pk("140F10930"))
        elif isinstance(ev, BaronKill):
            ally = ctx.is_ally(ev.killer)
            st.baron_on = True; st.baron_t = now + 360.0; st.herald_on = False
            st.f7b = st.f7c = st.f7d = st.f7e = st.f7f = False
            p = {(True, False): "140F111A0", (True, True): "140F14228",
                 (False, False): "140F10A30", (False, True): "140F13420"}[(ally, bool(ev.stolen))]
            sink.say("objectives", 2, pk(p))
        elif isinstance(ev, HordeKill):
            ally = ctx.is_ally(ev.killer)
            if ally: st.ally_grubs += 1
            else: st.enemy_grubs += 1
            st.total_grubs += 1
            mine = st.ally_grubs if ally else st.enemy_grubs
            s = st.ally_grubs + st.enemy_grubs
            p = None
            if s == 1: p = "140F10F40" if ally else "140F11238"
            elif s == 2:
                p = ("140F10FD0" if ally else "140F112F8") if mine == 2 else "140F14D08"
            elif s >= 3:
                p = ("140F110C0" if ally else "140F11408") if mine == 3 else ("140F12B28" if ally else "140F136B0")
            if p: sink.say("objectives", 4, pk(p))
            if st.total_grubs > 2: st.grubs_on = False
        elif isinstance(ev, HeraldKill):
            ally = ctx.is_ally(ev.killer)
            st.herald_on = False; st.f7e = st.f7f = st.f80 = False
            sink.say("objectives", 4, pk("140F11D28" if ally else "140F10D48"))
        elif isinstance(ev, InhibKilled):
            sink.say("objectives", 2, pk("140F10B80" if _c(ev.inhib, ctx.tag()) else "140F10E98"))
        elif isinstance(ev, TurretKilled):
            if not _c(ev.turret, ctx.tag()):
                st.turrets_taken += 1
                if _c(ev.turret, "_P1_"): sink.say("objectives", 2, pk("140F13380"))
            else:
                st.turrets_lost += 1
                if _c(ev.turret, "_P1_"): sink.say("objectives", 2, pk("140F12898"))
            bal = st.turrets_taken - st.turrets_lost
            if bal != st.last_balance:
                p = {-5: "140F12A70", -3: "140F12988", 3: "140F13790", 5: "140F13880"}.get(bal)
                if p:
                    st.last_balance = bal
                    sink.say("objectives", 4 if abs(bal) < 5 else 2, pk(p))
        elif isinstance(ev, DragonKill):
            _dragon_kill(st, ctx, ev, sink)
    _timers(st, ctx, sink)

def _dragon_kill(st, ctx, ev, sink):
    now = ctx.game_time; ally = ctx.is_ally(ev.killer); ty = ev.dragon_type; stolen = bool(ev.stolen)
    if ty == "Elder":
        st.elder_on = True; st.elder_t = now + 360.0; st.f83 = st.f84 = False
        soul = (st.ally_dragons > 3) if ally else (st.enemy_dragons > 3)
        p = {(False, False, False): "140F14078", (False, False, True): "140F141B0",
             (False, True, False): "140F13CF0", (False, True, True): "140F13DA0",
             (True, False, False): "140F13B40", (True, False, True): "140F13C40",
             (True, True, False): "140F13570", (True, True, True): "140F13610"}[(ally, stolen, soul)]
        sink.say("objectives", 2, pk(p)); return
    st.dragon_on = True; st.dragon_t = now + 300.0; st.f78 = st.f79 = st.f7a = False
    if ally: st.ally_dragons += 1; n = st.ally_dragons
    else: st.enemy_dragons += 1; n = st.enemy_dragons
    if n != 4:
        s = (pk("140F139D0") if stolen else _el(_AIR, ty)) if ally else _el(_ENEMY, ty)
        sink.say("objectives", 3, s)
        if ally and n == 3: sink.say("objectives", 4, pk("140F12418"))
        elif not ally and n == 3: sink.say("objectives", 4, pk("140F13248"))
    else:
        st.dragon_on = False; st.f78 = st.f79 = st.f7a = False
        if not st.elder_on:
            st.elder_on = True; st.elder_t = now + 360.0; st.f83 = st.f84 = False
        if ally: st.ally_soul = ty; sink.say("objectives", 2, _el(_SOUL_A, ty))
        else: st.enemy_soul = ty; sink.say("objectives", 2, _el(_SOUL_E, ty))

def _timers(st, ctx, sink):
    now = ctx.game_time
    role = ctx.role if ctx.me_known else ""
    skip_far = role in ("UTILITY", "BOTTOM"); jungler = role == "JUNGLE"
    if st.grubs_on:
        d = st.grubs_t - now
        if d > 60.0 or d <= 55.0 or st.f81:
            if 25.0 < d <= 30.0 and not st.f82:
                st.f82 = True
                if not skip_far: sink.say("obj_timer", 2, pk("140F11B20"))
        else:
            st.f81 = True
            if not skip_far: sink.say("obj_timer", 4, pk("140F11C30"))
        if now >= 900.0: st.grubs_on = False
    if st.herald_on:
        d = st.herald_t - now
        if d > 60.0 or d <= 55.0 or st.f7e:
            if 25.0 < d <= 30.0 and not st.f7f:
                st.f7f = True
                if not skip_far: sink.say("obj_timer", 2, pk("140F12680"))
        else:
            st.f7e = True
            if not skip_far: sink.say("obj_timer", 4, pk("140F12780"))
    if st.dragon_on:
        d = st.dragon_t - now
        if jungler and -10.0 < d <= -5.0 and not st.f7a:
            st.f7a = True; sink.say("obj_timer", 2, "Dragon disponivel! Smite seguro!")
        if 55.0 < d <= 60.0 and not st.f78:
            st.f78 = True
            has_tp = ctx.me_known and any("teleport" in s.lower() for s in ctx.spells)
            sink.say("obj_timer", 2, dragon_minute(role, has_tp, ctx.cs, ctx.gold, ctx.flag_1f1))
        if 25.0 < d <= 30.0 and not st.f79:
            st.f79 = True; sink.say("obj_timer", 1, pk("140F124D0"))
    if st.elder_on:
        d = st.elder_t - now
        if 55.0 < d <= 60.0 and not st.f83: st.f83 = True; sink.say("obj_timer", 2, pk("140F11A48"))
        if 25.0 < d <= 30.0 and not st.f84:
            st.f84 = True; sink.say("obj_timer", 1, pk("140F11950" if jungler else "140F11858"))
    if st.baron_on:
        d = st.baron_t - now
        if jungler and -10.0 < d <= -5.0 and not st.f7d:
            st.f7d = True; sink.say("obj_timer", 1, "Baron disponivel! Smite seguro!")
        if 55.0 < d <= 60.0 and not st.f7b:
            st.f7b = True
            s = ("Baron nascendo em um minuto! Arauto encerra agora. Agrupa o time e prepara visao no pit!"
                 if st.herald_on else pk("140F116F8"))
            sink.say("obj_timer", 2, s)
        if 25.0 < d <= 30.0 and not st.f7c:
            st.f7c = True; sink.say("obj_timer", 1, pk("140F115F8" if jungler else "140F114F0"))
