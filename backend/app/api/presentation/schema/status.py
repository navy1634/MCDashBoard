from pydantic import BaseModel, Field


class StatusSchema(BaseModel):
    id: str = Field(...)
    name: str = Field(...)
    ano_name: str = Field(...)
    generation: int = Field(...)
    type1: str = Field(...)
    type2: str = Field(...)
    ability1: str = Field(...)
    ability2: str = Field(...)
    ability_hide: str = Field(...)
    H: int = Field(...)
    A: int = Field(...)
    B: int = Field(...)
    C: int = Field(...)
    D: int = Field(...)
    S: int = Field(...)
    total: int = Field(...)
    height: float = Field(...)
    weight: float = Field(...)
    egg_group1: str = Field(...)
    egg_group2: str = Field(...)
