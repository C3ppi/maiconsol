"""Tipos compartilhados pelos gatilhos novos (role, jungle, build, tips)."""
from dataclasses import dataclass, field
SEP = "\x1f"   # separador de segmentos de fala (cada segmento pode ser um clip ou TTS)

def seg(*parts) -> str:
    return SEP.join(str(p) for p in parts if str(p) != "")

@dataclass
class P:
    """Jogador (Live Client)."""
    champion: str = ""; position: str = ""; is_dead: bool = False; respawn: float = 0.0
    level: int = 1; cs: int = 0; kills: int = 0; deaths: int = 0; assists: int = 0
    ward_score: float = 0.0; hp: float = 0.0; hp_max: float = 0.0
    items: list = field(default_factory=list)       # ids
    item_names: list = field(default_factory=list)
    spells: list = field(default_factory=list)      # nomes
    team: str = ""

def norm(n: str) -> str:
    return "".join(ch for ch in n.lower() if ch.isalnum())

def has_spell(p: P, *needles) -> bool:
    return any(any(nd in s.lower() for nd in needles) for s in p.spells)

import json as _json
from pathlib import Path as _Path
def load_data(name):
    return _json.loads((_Path(__file__).with_name("data") / name).read_text(encoding="utf8"))

# Conjuntos de campeões usados pelos analisadores locais (build / champ select).
# INCERTO: o exe usava dados do servidor; estas listas são uma aproximação feita aqui.
AP = set(map(norm, """Ahri Anivia Annie Aurelion_Sol Azir Brand Cassiopeia Elise Evelynn Fiddlesticks Fizz Gragas Heimerdinger Hwei Karma Karthus
Kassadin Katarina Kennen LeBlanc Lillia Lissandra Lux Malzahar Morgana Neeko Nidalee Orianna Ryze Seraphine Swain Sylas Syndra
Taliyah Teemo TwistedFate Veigar Velkoz Vex Viktor Vladimir Xerath Ziggs Zilean Zoe Zyra Soraka Janna Nami Lulu Sona Yuumi Mel Aurora Ekko Diana Amumu Singed""".split()))
HEALERS = set(map(norm, """Soraka Aatrox Vladimir Warwick Sylas Yuumi Nami Sona Swain DrMundo Briar Olaf Kayn Illaoi Fiora Trundle Irelia Nasus Renekton Sett Zac Seraphine Senna""".split()))
TANKS = set(map(norm, """Alistar Amumu Braum Chogath DrMundo Galio Garen Gragas Ksante Leona Malphite Maokai Nautilus Ornn Poppy Rammus Rell Sejuani Shen Sion Skarner TahmKench Taric Thresh Zac Volibear Nunu""".split()))
SHIELDERS = set(map(norm, """Janna Lulu Karma Shen Orianna Sona Yuumi Nami Soraka Ivern Taric Braum Galio Rell Seraphine Lux Morgana Illaoi""".split()))
ATKSPEED = set(map(norm, """Vayne Jinx Kaisa Twitch KogMaw Tristana Ashe Caitlyn Draven Jhin Lucian MissFortune Samira Sivir Varus Xayah Zeri Aphelios Kalista Smolder Yasuo Yone Tryndamere Masteryi Kayle""".split()))
ASSASSINS = set(map(norm, """Zed Fizz Ekko Pyke Talon Akali Shaco Diana Elise Qiyana Rengar Khazix Syndra Veigar Nidalee Evelynn Leblanc Katarina Nocturne Naafiri Kassadin""".split()))
CC_HEAVY = set(map(norm, """Alistar Amumu Annie Ashe Braum Leona Lissandra Lux Malphite Maokai Morgana Nautilus Rakan Rell Sejuani Thresh Varus Zyra Blitzcrank Skarner Nunu Ornn Poppy Sion Vi Warwick Zac""".split()))
