"""Port de kill::on_events (FUN_1401e33e0)."""
from dataclasses import dataclass, field
from ..pools import pk

@dataclass
class State:
    kill_times: list = field(default_factory=list)
    my_kills: int = 0; assists: int = 0
    first_blood_done: bool = False; level2_done: bool = False; cs_done: bool = False
    bounty_done: bool = False; kda_at: int = 0; kda7_done: bool = False
    alerted: set = field(default_factory=set)
    death_times: list = field(default_factory=list)
    killer_counts: dict = field(default_factory=dict)

@dataclass
class Player:
    name: str = ""; position: str = ""; level: int = 0; kills: int = 0; deaths: int = 0; cs: int = 0; team: int = 0

@dataclass
class ChampionKill:
    killer: str; victim: str; assisters: list = field(default_factory=list)

@dataclass
class Multikill:
    killer: str; streak: int | None = None

@dataclass
class Ctx:
    ready: bool = False; me_known: bool = False
    me_names: list = field(default_factory=list)
    role: str = ""; level: int = 0; kills: int = 0; deaths: int = 0; cs: int = 0; team: int = 0
    game_time: float = 0.0
    allies: list = field(default_factory=list); enemies: list = field(default_factory=list)
    def is_me(self, n): return any(m.lower() == n.lower() for m in self.me_names)
    def support(self): return self.me_known and self.role.upper() == "UTILITY"

def _find(lst, n):
    return next((p for p in lst if p.name.lower() == n.lower()), None)

def _trade(n): return pk("140EDB498" if n < 2 else "140EDB598")

def on_events(st: State, events, ctx: Ctx, sink):
    if not ctx.ready: return
    now = ctx.game_time
    for ev in events:
        if isinstance(ev, Multikill):
            if not ctx.is_me(ev.killer): continue
            s = {2: lambda: pk("140EDB6A8"), 3: lambda: pk("140EDBAD8"),
                 4: lambda: "Quadra kill! Elo errado com certeza! Vai pro penta!",
                 5: lambda: "penta_custom.mp3"}.get(ev.streak)
            if s is None: continue
            sink.say("multikill", 1, s())
        elif isinstance(ev, ChampionKill):
            if ctx.is_me(ev.victim): kind = "died"
            elif ctx.is_me(ev.killer):
                v = _find(ctx.allies, ev.victim)
                kind = "other" if (ctx.me_known and v is not None and v.team == ctx.team) else "mine"
            elif ctx.support():
                kind = "assist" if any(ctx.is_me(a) for a in ev.assisters) else "other"
            else: kind = "other"
            if kind == "mine":
                st.my_kills += 1; st.kill_times.append(now)
                if not st.first_blood_done:
                    st.first_blood_done = True
                    sink.say("kill", 1, pk("140EDBC88")); continue
                v = _find(ctx.enemies, ev.victim)
                if not st.level2_done and v is not None and ctx.level == 2 and v.level <= 1:
                    st.level2_done = True
                    sink.say("kill_praise", 2, "Belo kill! Pegou level 2 primeiro e destruiu!"); continue
                if v is not None and v.kills >= 6 and v.kills > v.deaths + 3:
                    sink.say("kill_praise", 1, pk("140EDB7A0"))
                else:   # marcos de abates (1401e480f, tabela 140eda550) ou 'Boa kill!' (FUN_1402530e0)
                    ms = {5: "Cinco kills! Ta jogando demais, craque!", 10: "Dez kills! Monstro! Ninguem para voce hoje!",
                          15: "Quinze kills! Isso e smurf? Ta destruindo!", 20: "Vinte kills! Lendario! Esse jogo ja e seu!"}
                    sink.say("kill", 2, ms.get(st.my_kills) or pk("140EDB910"))
            elif kind == "died":
                st.kill_times = [t for t in st.kill_times if now - t <= 12.0]
                n = len(st.kill_times)
                st.death_times.append(now)
                st.killer_counts[ev.killer] = st.killer_counts.get(ev.killer, 0) + 1
                if n > 0:
                    st.kill_times.clear()
                    sink.say("kill", 1, _trade(n))
                else:   # INCERTO: janela de 300s e limiar 3 reconstruídos do assembly (1401e4c80..1401e501a)
                    st.death_times = [t for t in st.death_times if now - t <= 300.0]
                    if len(st.death_times) > 2:
                        sink.say("kill", 2, pk("140EDBFB0"))
                    elif st.killer_counts[ev.killer] >= 3:
                        sink.say("kill", 2, pk("140EDBEA8"))
            elif kind == "assist":
                st.assists += 1
                s = {5: "5 assistencias! Que suporte presente, ta em todo lugar!",
                     10: "10 assistencias! Suporte dominante, o time agradece!",
                     15: "15 assistencias! Cara, voce ta carregando esse time nos bracos!",
                     20: "20 assistencias! Lendario! Suporte do ano sem duvida!"}.get(st.assists)
                sink.say("kill", 2, s or pk("140EDBD90"))
    _post_loop(st, ctx, sink)

def _post_loop(st, ctx, sink):
    t = ctx.game_time
    skip_cs = t < 420.0 or t > 1000.0 or st.cs_done or not ctx.me_known
    if not skip_cs and ctx.role and ctx.role.upper() != "UTILITY":
        op = next((p for p in ctx.enemies if p.position == ctx.role), None)
        if op:
            d = ctx.cs - op.cs
            if d >= 25: st.cs_done = True; sink.say("praise", 3, pk("140EDC098"))
            elif d <= -25: st.cs_done = True; sink.say("praise", 3, pk("140EDC178"))
    if ctx.me_known:
        k, d = ctx.kills, ctx.deaths
        if k >= 3 and d == 0 and st.kda_at == 0:
            st.kda_at = k; sink.say("praise", 2, pk("140EDB408"))
        elif k >= 7 and d <= 1 and not st.kda7_done:
            st.kda7_done = True; sink.say("praise", 2, pk("140EDBBC0"))
    if t <= 1500.0:
        for p in ctx.enemies:
            if p.kills > 5 and p.deaths + 4 <= p.kills and p.name not in st.alerted:
                st.alerted.add(p.name); sink.say("fed_alert", 1, pk("140EDC250"))
    if not st.bounty_done and ctx.me_known and ctx.kills > 4 and ctx.deaths < 2:
        st.bounty_done = True
        sink.say("fed_alert", 1, "Sua cabeca vale muito ouro agora! Joga seguro, nao entrega esse bounty.")
