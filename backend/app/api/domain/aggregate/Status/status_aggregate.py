from pydantic.dataclasses import dataclass

from app.api.domain.entity.status import Status


@dataclass(frozen=True)
class StatusAggregate:
    status_list: list[Status]

    def get_status(self) -> list[dict]:
        status_aggregate = []
        for status in self.status_list:
            status_dict = {
                "id": status.id,
                "name": status.name,
                "subinfo": {"ano_name": status.ano_name, "generation": status.generation, "height": status.height, "weight": status.weight},
                "ability": {
                    "1": status.ability1,
                    "2": status.ability2,
                    "hide": status.ability_hide,
                },
                "type": {
                    "1": status.type1,
                    "2": status.type2,
                },
                "Status": {
                    "H": status.H,
                    "A": status.A,
                    "B": status.B,
                    "C": status.C,
                    "D": status.D,
                    "S": status.S,
                    "total": status.total,
                },
                "egg_group": {
                    "1": status.egg_group1,
                    "2": status.egg_group2,
                },
            }
            status_aggregate.append(status_dict)

        return status_aggregate
