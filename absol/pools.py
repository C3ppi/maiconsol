"""Pools de frases recuperadas do binário original (texto exato). pools.json gerado de pools.rs."""
import json, random
from pathlib import Path
POOLS = json.loads((Path(__file__).with_name("pools.json")).read_text(encoding="utf8"))
def pk(name: str) -> str:
    """Sorteia uma frase do pool POOL_<VA> (mesmo nome do Rust)."""
    p = POOLS["POOL_" + name.upper().replace("POOL_", "")]
    return random.choice(p) if p else ""
