from sqlalchemy import or_, select
from sqlalchemy.orm import Session

from app.api.domain.aggregate.Status.status_aggregate import StatusAggregate
from app.api.domain.aggregate.Status.status_repository import StatusRepository
from app.api.infrastructure.DatabaseToObject.status import StatusDTO


class StatusRepositoryImpl(StatusRepository):
    def __init__(self, db: Session) -> None:
        self.db = db

    def get_by_id(self, id_: int) -> StatusAggregate:
        """_summary_

        Args:
            id (int): 図鑑番号

        Returns:
            StatusAggregate: 集約オブジェクト
        """
        query = select(StatusDTO).where(StatusDTO.id == f"{id_ :04}")
        result = self.db.execute(query).all()

        pokemon_status_list = []
        for status_dto in result:
            pokemon_status_list.append(status_dto[0].to_entity())

        return StatusAggregate(status_list=pokemon_status_list)

    def get_by_type(self, type: str) -> StatusAggregate:
        """_summary_

        Args:
            id (int): _description_

        Returns:
            StatusAggregate: _description_
        """
        query = select(StatusDTO).where(or_(StatusDTO.type1 == type, StatusDTO.type2 == type))
        result = self.db.execute(query).all()

        pokemon_status_list = []
        for status_dto in result:
            pokemon_status_list.append(status_dto[0].to_entity())

        return StatusAggregate(status_list=pokemon_status_list)
