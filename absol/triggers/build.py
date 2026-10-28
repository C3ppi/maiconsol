"""build / build_warn / build_next / build_spike — APROXIMAÇÃO LOCAL.
O exe original buscava builds do servidor (RUNTIME_META). Aqui: botas anti-AP/AD, anti-cura, item completo e
'Build completa!' usando a tabela de botas e preços recuperadas (items.json / prices.json)."""
from dataclasses import dataclass, field
from ..common import P, seg, norm, load_data, AP, HEALERS, TANKS, SHIELDERS, ATKSPEED

_ITEMS = load_data("items.json"); _PRICES = {int(k): v for k, v in load_data("prices.json")["prices"].items()}
BOOT_IDS = {1001, 2422} | {u["id"] for u in _ITEMS["upgrades"]}
BOOT_NAME = {u["id"]: u["name"] for u in _ITEMS["upgrades"]}
MERCURY = {3111, 3173}; ARMOR_BOOTS = {3047, 3174}
ANTI_HEAL_AD, ANTI_HEAL_AP = "Lembrete Mortal", "Morellonomicon"

@dataclass
class State:
    warned: set = field(default_factory=set)
    seen_complete: int = 0
    done_said: bool = False
    next_t: float = -999.0

@dataclass
class Ctx:
    game_time: float = 0.0
    me: P | None = None
    enemies: list = field(default_factory=list)
    gold: float = 0.0

def price(i): return _PRICES.get(i, 0)
def complete_count(me): return sum(1 for i in me.items if i not in BOOT_IDS and price(i) >= 2200)

def on_tick(st: State, c: Ctx, sink):
    me = c.me
    if me is None: return
    t = c.game_time; en = [norm(p.champion) for p in c.enemies]
    n_ap = sum(e in AP for e in en); n_heal = sum(e in HEALERS for e in en)
    n_tank = sum(e in TANKS for e in en); n_as = sum(e in ATKSPEED for e in en); n_sh = sum(e in SHIELDERS for e in en)
    boots = [i for i in me.items if i in BOOT_IDS]
    ad = norm(me.champion) not in AP
    if t >= 420 and not me.is_dead:
        if "boots" not in st.warned and boots and boots[0] in (1001, 2422) and c.gold >= 900:
            st.warned.add("boots")
            if n_ap >= 3: sink.say("build_warn", 4, "O time inimigo tem muito dano magico. Considera Passos de Mercurio nas botas.")
            elif len(en) - n_ap >= 4 and n_as >= 2: sink.say("build_warn", 4, "Eles tem varios atiradores de auto ataque. Considera Botas Galvanizadas de Aco.")
        if "heal" not in st.warned and n_heal >= 2 and t >= 600:
            st.warned.add("heal")
            sink.say("build_warn", 4, f"O time inimigo tem muita cura. Considera comprar {ANTI_HEAL_AD if ad else ANTI_HEAL_AP}.")
        if "tank" not in st.warned and n_tank >= 3 and t >= 600:
            st.warned.add("tank")
            sink.say("build_warn", 4, "O time inimigo tem muitos tanks. Considera Lembrancas do Lorde Dominik e itens de dano baseado em vida.")
        if "shield" not in st.warned and n_sh >= 3 and t >= 600:
            st.warned.add("shield")
            sink.say("build_warn", 4, "Eles tem muito escudo. Considera item anti-escudo, como a Presa da Serpente.")
    n = complete_count(me)
    if n > st.seen_complete:
        st.seen_complete = n
        sink.say("build_spike", 4, f"Item completo! {n}o item fechado, power spike, joga mais agressivo.")
        if n >= 5 and not st.done_said:
            st.done_said = True; sink.say("build", 4, "Build completa! Agora e so jogar!")

def recommend(me: P, enemies: list):
    """Itens situacionais sugeridos (alimenta o overlay 'Itens recomendados' via absol://build-path). APROXIMAÇÃO."""
    en = [norm(p.champion) for p in enemies]
    n = lambda S: sum(e in S for e in en)
    ad = norm(me.champion) not in AP; out = []
    if n(AP) >= 3: out.append({"item_id": 3111, "name": "Passos de Mercúrio"})
    elif len(en) - n(AP) >= 4: out.append({"item_id": 3047, "name": "Botas Galvanizadas de Aço"})
    if n(HEALERS) >= 2: out.append({"item_id": 3033, "name": "Lembrete Mortal"} if ad else {"item_id": 3165, "name": "Morellonomicon"})
    if n(TANKS) >= 3: out.append({"item_id": 3036, "name": "Lembranças do Lorde Dominik"})
    if n(SHIELDERS) >= 3: out.append({"item_id": 6695, "name": "Presa da Serpente"})
    if n(ATKSPEED) >= 3 and not ad: out.append({"item_id": 3075, "name": "Cota de Espinhos"})
    return out
