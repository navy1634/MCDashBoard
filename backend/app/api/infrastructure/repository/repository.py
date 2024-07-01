from api.infrastructure.database.databaseInterface import get_db
from api.infrastructure.DatabaseToObject.model import ModelClass
from fastapi import Depends
from sqlalchemy import and_, not_, select
from sqlalchemy.ext.asyncio import AsyncSession


class Repository(ModelClass):
    def __init__(self, db: AsyncSession) -> None:
        self.db = db
