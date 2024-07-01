from datetime import datetime

from sqlalchemy.ext.asyncio import create_async_engine
from sqlalchemy.orm import DeclarativeBase


class ConnectDatabase:
    def __init__(self) -> None:
        # データベース設定
        DATABASE_URL = "mysql+aiomysql://{user}:{password}@{host}/{db_name}?charset=utf8".format(
            **{
                "user": "user",
                "password": "password",
                "host": "mysql",
                "db_name": "database",
            }
        )
        self.engine = create_async_engine(DATABASE_URL)


class Base(DeclarativeBase):
    """ORMモデルのベースクラス"""
    pass
