from pathlib import Path
from absol import builds

TREES = [
 {"id": 8000, "name": "Precisão", "slots": [
   {"runes": [{"id": 8010, "name": "Conquistador", "icon": "perk-images/Styles/Precision/Conqueror/Conqueror.png"}]},
   {"runes": [{"id": 9111, "name": "Triunfo", "icon": "perk-images/Styles/Precision/Triumph.png"}]},
   {"runes": [{"id": 9104, "name": "Lenda: Ímpeto", "icon": "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png"}]},
   {"runes": [{"id": 8014, "name": "Golpe de Misericórdia", "icon": "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png"}]}]},
 {"id": 8300, "name": "Inspiração", "slots": [
   {"runes": [{"id": 8351, "name": "Aprimoramento Glacial", "icon": "perk-images/Styles/Inspiration/GlacialAugment/GlacialAugment.png"}]},
   {"runes": [{"id": 8306, "name": "Calçados Mágicos", "icon": "perk-images/Styles/Inspiration/HextechFlashtraption/HextechFlashtraption.png"}]},
   {"runes": [{"id": 8347, "name": "Perspicácia Cósmica", "icon": "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png"}]}]}]
ITEMS = {"1054": {"name": "Escudo de Doran", "gold": {"total": 450}, "tags": ["Lane"], "into": ["3047"]},
         "3047": {"name": "Botas de Aço Chapeadas", "gold": {"total": 1100}, "tags": ["Boots"]},
         "6630": {"name": "Rasgador de Almas", "gold": {"total": 3300}, "tags": []},
         "3078": {"name": "Força da Trindade", "gold": {"total": 3333}, "tags": []},
         "6333": {"name": "Dança da Morte", "gold": {"total": 3300}, "tags": []},
         "3026": {"name": "Anjo Guardião", "gold": {"total": 3200}, "tags": []},
         "3036": {"name": "Dominik", "gold": {"total": 3300}, "tags": []}}

def st(): return builds.Static("16.21.1", ITEMS, TREES)

PAGE = ('<img src="https://x/img/item/1054.png"><img src="https://x/item/3047.png"><img src="https://x/item/3078.png">'
        '<img src="https://x/item/6630.png"><img src="https://x/item/6333.png"><img src="https://x/item/3026.png">'
        '<img src="https://s/perk-images/Styles/Precision/Conqueror/Conqueror.png"><img src="https://s/perk-images/Styles/Precision/Triumph.png">'
        '<img src="https://s/perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png"><img src="https://s/perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png">'
        '<img src="https://s/perk/8306.png"><img src="https://s/perk/8347.png"><img src="https://s/perk/5005.png"><img src="https://s/perk/5008.png">')

def test_extract_assemble():
    b = builds.assemble(*builds.extract(PAGE, st()), st())
    assert [x["name"] for x in b["items"]["core"]] == ["Força da Trindade", "Rasgador de Almas", "Dança da Morte"]
    assert b["items"]["boots"][0]["id"] == 3047 and b["items"]["start"][0]["id"] == 1054
    assert b["runes"]["primary"][0]["name"] == "Conquistador" and len(b["runes"]["primary"]) == 4
    assert [r["name"] for r in b["runes"]["secondary"]] == ["Calçados Mágicos", "Perspicácia Cósmica"]
    assert [s["id"] for s in b["runes"]["shards"]] == [5005, 5008]

def test_fallback_between_sources(tmp_path):
    calls = []
    def get(u):
        calls.append(u)
        if "op.gg" in u: raise OSError("403")
        if "u.gg" in u: return "<html>nada util</html>"
        return PAGE
    b = builds.from_sites("Vi", "JUNGLE", st(), tmp_path, log=lambda *a: None, get=get)
    assert b["source"] == "deeplol" and len(calls) == 3 and "/jungle" in calls[0]
    assert (tmp_path / "debug_u_gg.html").exists()

def test_all_fail_returns_none(tmp_path):
    assert builds.from_sites("Vi", "TOP", st(), tmp_path, log=lambda *a: None, get=lambda u: (_ for _ in ()).throw(OSError("x"))) is None

def test_lcu_fallback():
    class L:
        def get(self, p): return [{"perks": [8010, 9111, 9104, 8014, 8306, 8347, 5005]}]
    b = builds.from_lcu(L(), 254, "JUNGLE", st())
    assert b["runes"]["primary"][0]["name"] == "Conquistador" and "client" in b["source"]
