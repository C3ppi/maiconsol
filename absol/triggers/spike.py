"""mental_spike — port de FUN_1403977e0 (trechos 'Falta pouco pro spike...' / 'Cuidado, o inimigo...').
Tabela campeão -> valor: FUN_1401f7230 (29 campeões, data/spike_levels.json).
INCERTO: o binário compara o valor com o NÍVEL do jogador (nivel == valor-1) mas a fala diz "minutos";
valores 25 nunca batem com nível (máx 18). Copiado literalmente. Quais campos são kills/deaths nas condições
de consolo (0x1c8<=1 e 0x1cc>=3) foi assumido como kills<=1 e deaths>=3."""
import json, os, random
from dataclasses import dataclass, field
from ..common import P, seg, norm

_T = {norm(k): v for k, v in json.load(open(os.path.join(os.path.dirname(__file__), "..", "data", "spike_levels.json"))).items()}

@dataclass
class State:
    me_warned: bool = False      # +0x14d
    me_console: bool = False     # +0x14c
    en_warned: set = field(default_factory=set)   # +0x14f
    en_late: set = field(default_factory=set)     # +0x14e

@dataclass
class Ctx:
    game_time: float = 0.0
    me: P | None = None
    enemies: list = field(default_factory=list)

def _me_msg(name, n, rng):
    v = rng.randrange(4)
    if v == 0: return seg("calma mano,", name, f"ganha forca depois dos {n} minutos. ja jaja ce ta gigante!")
    if v == 1: return seg("relaxa,", name, f"ganha forca depois dos {n} minutos. ja jaja ce ta gigante!")
    if v == 2: return seg("aguenta a firme!", name, f"fica monstruoso depois dos {n} minutos. joga seguro ate la!")
    return seg("precisa de tempo.", name, f"depois dos {n} minutos ce vira outro jogador. paciencia!")

def on_tick(st: State, c: Ctx, sink, rng=random):
    me = c.me
    if me is None: return
    t = c.game_time
    n = _T.get(norm(me.champion))
    if n is not None:
        if me.level == n - 1 and not st.me_warned and t <= 900:
            st.me_warned = True
            sink.say("mental_spike", 3, "Falta pouco pro spike do seu campeao.")
        if me.deaths >= 3 and me.kills <= 1 and not st.me_console and t <= 900:
            st.me_console = True
            sink.say("mental_spike", 4, _me_msg(me.champion, n, rng))
    for e in c.enemies:
        n = _T.get(norm(e.champion))
        if n is None: continue
        if e.level == n - 1 and e.champion not in st.en_warned:
            st.en_warned.add(e.champion)
            sink.say("mental_spike", 3, "Cuidado, o inimigo ja ja atinge o pico de forca.")
        if t > 840 and e.level >= n and e.champion not in st.en_late:
            st.en_late.add(e.champion)
            sink.say("mental_spike", 4, seg("cuidado,", e.champion, f"fica forte depois dos {n} min. nao deixa o jogo arrastar!"))
