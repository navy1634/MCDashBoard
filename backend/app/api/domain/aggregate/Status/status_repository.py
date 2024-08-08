from abc import abstractmethod

from app.api.domain.aggregate.Status.status_aggregate import StatusAggregate


class StatusRepository:
    @abstractmethod
    def get_by_id(self, id_: int) -> StatusAggregate:
        pass

    @abstractmethod
    def get_by_type(self, type: str) -> StatusAggregate:
        pass
