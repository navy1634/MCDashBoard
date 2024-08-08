from sqlalchemy.orm import mapped_column
from sqlalchemy.types import Float, Integer, String

from app.api.domain.entity.status import Status
from app.api.infrastructure.database.get_db import Base


class StatusDTO(Base):
    __tablename__ = "pkstatus"

    id = mapped_column(String, primary_key=True)
    name = mapped_column(String)
    ano_name = mapped_column(String)
    generation = mapped_column(Integer)
    type1 = mapped_column(String)
    type2 = mapped_column(String)
    ability1 = mapped_column(String)
    ability2 = mapped_column(String)
    ability_hide = mapped_column(String)
    h = mapped_column(Integer)
    a = mapped_column(Integer)
    b = mapped_column(Integer)
    c = mapped_column(Integer)
    d = mapped_column(Integer)
    s = mapped_column(Integer)
    total = mapped_column(Integer)
    height = mapped_column(Float)
    weight = mapped_column(Float)
    egg_group1 = mapped_column(String)
    egg_group2 = mapped_column(String)

    def to_entity(self):
        return Status(
            id=self.id,
            name=self.name,
            ano_name=self.ano_name,
            generation=self.generation,
            type1=self.type1,
            type2=self.type2,
            ability1=self.ability1,
            ability2=self.ability2,
            ability_hide=self.ability_hide,
            H=self.h,
            A=self.a,
            B=self.b,
            C=self.c,
            D=self.d,
            S=self.s,
            total=self.total,
            height=self.height,
            weight=self.weight,
            egg_group1=self.egg_group1,
            egg_group2=self.egg_group2,
        )
