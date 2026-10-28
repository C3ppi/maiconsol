import sys, pathlib; sys.path.insert(0, str(pathlib.Path(__file__).resolve().parent.parent))
from absol.pools import POOLS
from absol.sink import VecSink
from absol.triggers import minimap, ward, kill, objectives, mental
from absol.engine import Engine
from absol.voice import clip_name

def test_pools(): assert len(POOLS) == 226
def test_md5(): assert clip_name("jungle") == "5d991220a07e65eb7ab854341691ca7d.mp3"

def test_minimap_intro_uma_vez():
    s, o = minimap.State(), VecSink()
    minimap.tick(s, minimap.Ctx(game_time=5), o); minimap.tick(s, minimap.Ctx(game_time=6), o)
    assert len(o.out) == 1 and o.out[0][:2] == ("minimap_intro", 4)

def test_ward_lee_troca_lente():
    s, o = ward.State(), VecSink()
    ward.tick(s, ward.Ctx(200, True, "Lee Sin", [3364], "JUNGLE", 5), o)
    assert o.out[0][1] == 4 and o.out[0][2] in POOLS["POOL_140EDD928"]

def test_ward_adc_nivel9():
    s, o = ward.State(), VecSink()
    ward.tick(s, ward.Ctx(600, True, "Jinx", [3340], "BOTTOM", 9), o)
    assert o.out[0][2] in POOLS["POOL_140EDC5D0"] and s.last_level == 9

def test_kill_first_blood():
    s, o = kill.State(), VecSink()
    c = kill.Ctx(ready=True, me_known=True, me_names=["Eu"], game_time=200, team=0,
                 enemies=[kill.Player(name="Foe", team=1)])
    kill.on_events(s, [kill.ChampionKill("Eu", "Foe")], c, o)
    assert o.out[0][:2] == ("kill", 1)

def test_mental_classify_behind():
    st = mental.State()
    c = mental.Ctx(game_time=600, allies=[mental.Player(kills=0, gold_value=5000)], enemies=[mental.Player(kills=10, gold_value=9000)])
    assert mental.classify(st, c) == 1

def test_engine_json():
    def mk(t, evs):
        return {"activePlayer": {"riotId": "Eu#BR1", "summonerName": "Eu", "currentGold": 500.0},
                "allPlayers": [
                    {"riotId": "Eu#BR1", "summonerName": "Eu", "championName": "Ahri", "team": "ORDER", "position": "MIDDLE", "level": 3, "items": [], "scores": {"kills": 0, "deaths": 0, "assists": 0, "creepScore": 10, "wardScore": 0.0}},
                    {"riotId": "Foe#BR1", "summonerName": "Foe", "championName": "Zed", "team": "CHAOS", "position": "MIDDLE", "level": 2, "items": [], "scores": {"kills": 0, "deaths": 0, "assists": 0, "creepScore": 9, "wardScore": 0.0}}],
                "events": {"Events": evs}, "gameData": {"gameTime": t}}
    e, o = Engine(), VecSink()
    fb = {"EventID": 1, "EventName": "ChampionKill", "KillerName": "Eu", "VictimName": "Foe", "Assisters": []}
    e.tick(mk(200.0, [fb]), o); assert any(x[0] == "kill" and x[1] == 1 for x in o.out)
    n = len(o.out); e.tick(mk(201.0, [fb]), o); assert len(o.out) == n
    e.tick(mk(250.0, [{"EventID": 2, "EventName": "DragonKill", "KillerName": "Eu", "DragonType": "Fire", "Stolen": "False"}]), o)
    assert any(x[0] == "objectives" and x[1] == 3 for x in o.out)

def test_role_jungle_kill_milestones_champselect():
    from absol.triggers import role, jungle, champ_select, kill
    from absol.common import P
    o = VecSink(); s = jungle.State()
    me = P(champion="Ahri", position="MIDDLE"); ej = P(champion="Lee Sin", position="JUNGLE")
    for t in range(0, 200): jungle.on_tick(s, jungle.Ctx(t, me, [ej]), o)
    assert any(x[0] == "gank_warning" for x in o.out)
    o = VecSink(); st = kill.State()
    c = kill.Ctx(ready=True, me_known=True, me_names=["Eu"], game_time=300, team=0, enemies=[kill.Player(name="F", team=1)])
    for i in range(6): kill.on_events(st, [kill.ChampionKill("Eu", "F")], c, o)
    assert any("Cinco kills" in x[2] for x in o.out)
    o = VecSink(); cs = champ_select.State()
    champ_select.on_phase(cs, "ReadyCheck", o); assert o.out[0][2] == "Partida encontrada!"

def test_config_desliga_modulo(tmp_path):
    from absol.config import Config
    from absol.main import Gate
    cfg = Config(tmp_path / "c.json"); o = VecSink(); g = Gate(o, cfg)
    g.say("kill", 1, "a"); cfg.set("kill", False); g.say("kill", 1, "b"); g.say("minimap", 5, "c")
    assert [x[2] for x in o.out] == ["a", "c"]
    assert Config(tmp_path / "c.json").off == {"kill"}

def test_spike():
    from absol.triggers import spike
    from absol.common import P
    class S:
        def __init__(s): s.m=[]
        def say(s,c,p,t): s.m.append((c,t))
    s=S(); st=spike.State()
    spike.on_tick(st, spike.Ctx(300, P(champion="Kayle", level=15), []), s)
    assert s.m and s.m[0][0]=="mental_spike"
    s2=S(); spike.on_tick(st, spike.Ctx(900, P(champion="Ahri"), [P(champion="Kog'Maw", level=24)]), s2)
    assert len(s2.m)==1

def test_jungle_spotted():
    from absol.triggers import jungle
    from absol.common import P
    class S:
        def __init__(s): s.m=[]
        def say(s,c,p,t): s.m.append((c,t))
    s=S(); st=jungle.State()
    me=P(champion="Ahri", position="MIDDLE")
    def ej(**k): return P(champion="Vi", position="JUNGLE", level=k.get("l",3), items=k.get("i",[1]), is_dead=k.get("d",False))
    t=20
    for e in (ej(), ej(), ej(l=4), ej(l=4), ej(l=4,i=[1,2]), ej(d=True), ej()):
        t+=10; jungle.on_tick(st, jungle.Ctx(t, me, [e]), s)
    assert sum(1 for c,_ in s.m if c=="jungle_spotted")==3

def test_tts_persistent_speaker(tmp_path):
    import sys, textwrap
    from absol.voice import Speaker
    f = tmp_path / "fake.py"
    f.write_text(textwrap.dedent("""
        import sys
        print('pronto', flush=True)
        for l in sys.stdin.buffer:
            open(sys.argv[1], 'ab').write(l); print('ok', flush=True)
    """))
    log = tmp_path / "log.txt"
    sp = Speaker([sys.executable, str(f), str(log)], {"velocidade": 3, "volume": 50})
    assert sp.speak("oi mano | tudo", 80) and sp.speak("segunda fala", 80)
    lines = log.read_bytes().decode().splitlines()
    assert lines == ["40|3|oi mano tudo", "40|3|segunda fala"]

def test_edge_cache(tmp_path):
    from absol.voice import EdgeVoice
    n = []
    def gen(text, voz, rate, f): n.append(text); f.write_bytes(b"x" * 600)
    e = EdgeVoice(tmp_path, {"velocidade": 2}, gen=gen)
    a = e.get("Olha o jungler!"); b = e.get("Olha  o jungler!")
    assert a == b and a.exists() and n == ["Olha o jungler!"]       # 2ª vez vem do cache
    e2 = EdgeVoice(tmp_path, {"motor": "windows"}, gen=gen); assert e2.get("x") is None
    def falha(*a): raise OSError("sem internet")
    e3 = EdgeVoice(tmp_path, {}, gen=falha); assert e3.get("outra frase") is None and e3.get("mais uma") is None
