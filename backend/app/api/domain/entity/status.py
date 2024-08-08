from pydantic.dataclasses import dataclass


@dataclass(frozen=True)
class Status:
    id: str
    name: str
    ano_name: str
    generation: int
    type1: str
    type2: str
    ability1: str
    ability2: str
    ability_hide: str
    H: int
    A: int
    B: int
    C: int
    D: int
    S: int
    total: int
    height: float
    weight: float
    egg_group1: str
    egg_group2: str
