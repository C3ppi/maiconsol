"""champ_select (FUN_1402b3060) — APROXIMAÇÃO via LCU. Frases exatas do exe; condições reconstruídas.
Fluxo/ordem original não recuperados (INCERTO)."""
from dataclasses import dataclass, field
from ..common import seg, norm, load_data, AP, TANKS, ASSASSINS, CC_HEAVY
import random

COUNTERS = {norm(k): v for k, v in load_data("counters.json").items()}
MATCHUP = {norm(k): v for k, v in load_data("matchup_tips.json").items() if k != "_doc"}
AD_OK = lambda n: n not in AP

@dataclass
class State:
    phase: str = ""; ready_said: bool = False; ban_said: bool = False; pick_said: bool = False
    comp_ap: bool = False; comp_ad: bool = False; tank: bool = False; assassin: bool = False; cc: bool = False; tip: bool = False
    lane_hint: str = ""

def reset(st): st.__dict__.update(State().__dict__)

def on_phase(st: State, phase: str, sink):
    if phase != st.phase:
        if phase in ("None", "Lobby", "Matchmaking"): reset(st)
        st.phase = phase
    if phase == "ReadyCheck" and not st.ready_said:
        st.ready_said = True; sink.say("champ_select", 1, "Partida encontrada!")

def on_session(st: State, s: dict, names: dict, sink):
    """s = /lol-champ-select/v1/session ; names = {id: nome}."""
    me = s.get("localPlayerCellId"); my = {p["cellId"]: p for p in s.get("myTeam", [])}
    mine = my.get(me, {}); my_champ = names.get(mine.get("championId") or mine.get("championPickIntent") or 0, "")
    for grp in s.get("actions", []):
        for a in grp:
            if a.get("actorCellId") != me or not a.get("isInProgress"): continue
            if a.get("type") == "ban" and not st.ban_said:
                st.ban_said = True
                ban = "Yone"
                c = COUNTERS.get(norm(my_champ))
                if c and c.get("counters"): ban = c["counters"][0]
                sink.say("champ_select", 1, f"Fase de ban! Bane {ban}.")
            elif a.get("type") == "pick" and not st.pick_said:
                st.pick_said = True
                if not my_champ:
                    sink.say("champ_select_pick", 1, "Sua vez de pickar! Ta em duvida? Troca a ordem de escolha com alguem.")
                else:
                    sink.say("champ_select_pick", 1, "Sua vez de pickar.")
    ally = [norm(names.get(p.get("championId") or 0, "")) for p in s.get("myTeam", []) if p.get("championId")]
    enemy = [norm(names.get(p.get("championId") or 0, "")) for p in s.get("theirTeam", []) if p.get("championId")]
    if len(ally) >= 4:
        if not st.comp_ap and not any(a in AP for a in ally): st.comp_ap = True; sink.say("champ_select_comp", 2, "Seu time precisa de AP.")
        if not st.comp_ad and all(a in AP for a in ally if a): st.comp_ad = True; sink.say("champ_select_comp", 2, "Seu time precisa de AD.")
    if len(enemy) >= 4:
        if not st.tank and sum(e in TANKS for e in enemy) >= 3:
            st.tank = True; sink.say("champ_select_comp", 2, "O time inimigo tem muitos tanks. Considere campeoes com dano baseado em vida.")
        if not st.assassin and sum(e in ASSASSINS for e in enemy) >= 2:
            st.assassin = True; sink.say("champ_select_comp", 2, "Cuidado com os assassinos inimigos. Jogue com cautela.")
        if not st.cc and sum(e in CC_HEAVY for e in enemy) >= 3:
            st.cc = True; sink.say("champ_select_comp", 2, "Considera pegar Purificar! O time inimigo tem muito controle de grupo.")
    # dica de matchup quando o pick está travado
    if not st.tip and mine.get("championId") and any(a.get("completed") and a.get("actorCellId") == me and a.get("type") == "pick"
                                                       for g in s.get("actions", []) for a in g):
        md = MATCHUP.get(norm(my_champ))
        if md:
            st.tip = True
            sink.say("champ_select", 2, seg("Dica de matchup:", random.choice(md.get("general", [""]))))
