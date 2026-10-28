"""Port de mental::on_tick (FUN_1403368b0 / FUN_140336730 e funções de fala). Ver mental.rs para INCERTOs."""
from dataclasses import dataclass, field
from ..pools import pk

@dataclass
class Player:
    champion: str = ""; is_dead: bool = False; kills: int = 0; gold_value: int = 0
@dataclass
class GameEnd: result: str | None = None
@dataclass
class TurretKilled: turret: str
@dataclass
class InhibKilled: inhib: str

@dataclass
class Ctx:
    game_time: float = 0.0; me_known: bool = False; me_dead: bool = False; role: str = ""
    gold: float = 0.0; hp: float = 0.0; hp_max: float = 0.0; mana: float = 0.0; mana_max: float = 0.0
    deaths: int = 0; team_chaos: bool = False
    allies: list = field(default_factory=list); enemies: list = field(default_factory=list)

@dataclass
class State:
    turrets_taken: int = 0; turrets_lost: int = 0; inhibs_taken: int = 0; inhibs_lost: int = 0
    game_state: int = 2; ended: bool = False; last_periodic: float = 0.0
    dead_enemy_prev: int = 0; dead_ally_prev: int = 0
    enemy_death_t: list = field(default_factory=list); ally_death_t: list = field(default_factory=list)
    dead_last_say: float = -5.0; dead_flag: bool = False; dead_set: list = field(default_factory=list)
    gold_early_done: bool = False; recall_last: float = 0.0; recall_n: int = 0
    trade_peak: float = 0.0; trade_peak_t: float = 0.0; trade_drop_t: float = 0.0
    trade_deaths: int = 0; trade_n: int = 0

def _c(h, n): return n.lower() in h.lower()
def _clamp(x, a, b): return max(a, min(b, x))

def _update_counts(st, ctx, ev):
    tag = "TChaos" if ctx.team_chaos else "TOrder"
    if isinstance(ev, TurretKilled):
        if _c(ev.turret, tag): st.turrets_lost += 1
        else: st.turrets_taken += 1
    elif isinstance(ev, InhibKilled):
        if _c(ev.inhib, tag): st.inhibs_lost += 1
        else: st.inhibs_taken += 1

def classify(st, ctx):
    """0 = na frente, 1 = atrás, 2 = parelho."""
    ka = sum(p.kills for p in ctx.allies); ke = sum(p.kills for p in ctx.enemies)
    ga = sum(p.gold_value for p in ctx.allies); ge = sum(p.gold_value for p in ctx.enemies)
    s1 = 0.0
    if ga + ge > 0: s1 = ((ga - ge) / (ga + ge) / 0.15) * 10.0
    s1 = _clamp(s1, -10.0, 10.0)
    dk = ka - ke; prev = st.game_state
    if ctx.game_time >= 300.0:
        if dk < 0:   # idioma de divisão do binário, copiado literalmente do Rust (mental.rs)
            t = 2 - dk
            a = ((t * 0x55555555) >> 32) - t
            kt = (a >> 1) - (a >> 31)
        else:
            kt = (dk + 2) // 3
        td = _clamp(st.turrets_taken - st.turrets_lost, -5, 5)
        idd = _clamp(st.inhibs_taken - st.inhibs_lost, -3, 3)
        total = s1 + _clamp(idd * 3 + td * 2 + kt, -10, 10)
        up = 3.0 if prev == 0 else 6.0
        down = -3.0 if prev == 1 else -6.0
        return 0 if total >= up else (1 if total <= down else 2)
    x = dk * 0.5 + s1
    thr = 2.0 if prev < 2 else 4.0
    return 0 if x >= thr else (2 if x > -thr else 1)

def _ahead_b(t, sup):
    if t >= 600: return pk("140ED78A8")
    return "Seu time esta bem! Mantem a visao e nao arrisca a toa." if sup else "Seu time esta bem! Mantem o farm e nao arrisca a toa."
def _behind_b(t, sup):
    if t >= 600: return pk("140ED7680" if sup else "140ED7568")
    return ("Ta um pouco dificil, mas relaxa. Mantem a visao e espera o late game." if sup
            else "Ta um pouco dificil, mas relaxa. Foca no seu farm e espera o late game.")
def _even_b(t, sup):
    return pk("140ED7160" if t >= 600 else "140ED73E0" if sup else "140ED7338")

def on_tick(st: State, events, ctx: Ctx, sink):
    now = ctx.game_time
    if now < st.last_periodic: st.__dict__.update(State().__dict__)
    prev = st.game_state
    for e in events: _update_counts(st, ctx, e)
    cur = classify(st, ctx)
    if not st.ended:
        for e in events:
            if isinstance(e, GameEnd):
                st.ended = True
                if ctx.me_known:
                    sink.say("system", 1, pk("140F10510" if e.result == "Win" else "140F103B0"))
                break
    st.game_state = cur
    role = ctx.role.upper()
    sup = ctx.me_known and role == "UTILITY"; jungle = ctx.me_known and role == "JUNGLE"

    if now >= 1320.0:
        now_dead = [p.champion for p in ctx.enemies if p.is_dead]
        for n in st.dead_set:
            if n not in now_dead: sink.say("respawn", 2, n)
        st.dead_set = now_dead

    if not (ctx.me_known and ctx.me_dead):
        ed = sum(p.is_dead for p in ctx.enemies); ad = sum(p.is_dead for p in ctx.allies)
        st.enemy_death_t += [now] * max(0, ed - st.dead_enemy_prev)
        st.ally_death_t += [now] * max(0, ad - st.dead_ally_prev)
        st.dead_enemy_prev, st.dead_ally_prev = ed, ad
        st.enemy_death_t = [t for t in st.enemy_death_t if now - t <= 15.0]
        st.ally_death_t = [t for t in st.ally_death_t if now - t <= 15.0]
        ne, na = len(st.enemy_death_t), len(st.ally_death_t)
        if ne < 3 or ne <= na: st.dead_flag = False
        elif not st.dead_flag and now - st.dead_last_say >= 5.0:
            st.dead_flag = True; st.dead_last_say = now
            s = {3: "Eles estao com 3 mortos. Pressao neles!", 4: "Eles estao com 4 mortos. Da pra fazer algo grande."}.get(ne, "Ace! Hora de punir o mapa.")
            sink.say("mental", 2, s)

    if now - st.last_periodic >= 240.0:
        st.last_periodic = now
        f = prev == 2
        if cur == 0: s = pk("140ED8170") if f else _ahead_b(now, sup)
        elif cur == 1: s = pk("140ED7F38" if sup else "140ED7E98") if f else _behind_b(now, sup)
        else: s = pk("140ED7BF8") if f else _even_b(now, sup)
        sink.say("mental", 6, s)

    if ctx.me_known and now <= 300.0 and not jungle and ctx.hp_max > 0.0 and st.trade_n < 2:
        r = ctx.hp / ctx.hp_max
        if st.trade_drop_t != 0.0:
            if st.trade_deaths < ctx.deaths: st.trade_peak = r; st.trade_peak_t = now
            elif now - st.trade_drop_t >= 4.0:
                st.trade_n += 1; st.trade_peak = r; st.trade_peak_t = now
                sink.say("mental", 2, pk("140ED8380"))
        else:
            peak = st.trade_peak
            if now - st.trade_peak_t > 3.0 or st.trade_peak < r:
                st.trade_peak = r; st.trade_peak_t = now; peak = r
            if peak >= 0.85 and peak - r >= 0.15:
                st.trade_drop_t = now; st.trade_deaths = ctx.deaths
    if 90.0 <= now <= 300.0 and not st.gold_early_done and int(max(ctx.gold, 0.0)) > 0x577:
        st.gold_early_done = True
        sink.say("mental", 2, pk("140ED8270" if jungle else "140ED7CF0"))

    if st.recall_n < 5 and ctx.me_known and not ctx.me_dead and now >= 180.0 and now - st.recall_last >= 60.0 and ctx.hp_max > 0.0:
        gold = int(max(ctx.gold, 0.0)); r = ctx.hp / ctx.hp_max
        mana_r = ctx.mana / ctx.mana_max if ctx.mana_max > 0 else 1.0
        if ctx.hp > 0.0 and r <= 0.25 and gold > 0x31f:
            st.recall_last = now; st.recall_n += 1; sink.say("mental_recall", 2, pk("140ED7A08"))
        elif r <= 0.35 and ctx.mana_max > 100.0 and ctx.hp > 0.0 and mana_r <= 0.15:
            st.recall_last = now; st.recall_n += 1; sink.say("mental_recall", 2, pk("140ED85B8"))
        elif ctx.hp > 0.0 and r <= 0.5 and gold > 0x9c3:
            st.recall_last = now; st.recall_n += 1
            sink.say("mental_recall", 3, pk("140ED84F8") if jungle else "Muito gold parado e meia vida! Bom momento pra dar B e voltar forte!")
