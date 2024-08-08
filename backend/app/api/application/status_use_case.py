from app.api.domain.aggregate.Status.status_aggregate import StatusAggregate
from app.api.infrastructure.repository.status_repository import StatusRepository


class StatusUseCase:
    def __init__(self, repo: StatusRepository) -> None:
        self.repo = repo

    def handler(self, id_: int) -> dict:
        status_aggregate = self.repo.get_by_id(id_=id_)
        pk_status_dict = self._create_data(id_, status_aggregate)
        return pk_status_dict

    def _create_data(self, id_: int, status_aggregate: StatusAggregate) -> dict:
        pk_status_dict = {"id": id_, "info": status_aggregate.get_status()}
        return pk_status_dict
