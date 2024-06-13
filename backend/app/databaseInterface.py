from collections.abc import AsyncGenerator

from fastapi import Depends
from sqlalchemy import exc
from sqlalchemy.ext.asyncio import AsyncSession, async_sessionmaker, create_async_engine

from .database.repository import *

# データベース設定
DATABASE_URL = (
    "mysql+aiomysql://{user}:{password}@{host}/{db_name}?charset=utf8mb4".format(
        **{
            "user": "user",
            "password": "password",
            "host": "mysql",
            "db_name": "database",
        }
    )
)

engine = create_async_engine(DATABASE_URL)


async def get_db() -> AsyncGenerator[AsyncSession, None]:
    factory = async_sessionmaker(engine)
    async with factory() as session:
        try:
            yield session
            await session.commit()
        except exc.SQLAlchemyError:
            await session.rollback()
            raise


async def get_repository(db: AsyncSession = Depends(get_db)) -> AsyncSession:
    return
