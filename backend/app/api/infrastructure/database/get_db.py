import os
from datetime import datetime

from sqlalchemy import create_engine
from sqlalchemy.orm import DeclarativeBase, sessionmaker


class ConnectDatabase:
    def __init__(self) -> None:
        # データベース設定
        POSTGRES_USER = os.getenv("POSTGRES_USER")
        POSTGRES_PASSWORD = os.getenv("POSTGRES_PASSWORD")
        POSTGRES_DATABASE = os.getenv("POSTGRES_DATABASE")
        DATABASE_URL = "postgresql+psycopg2://{user}:{password}@{host}/{db_name}".format(
            **{
                "user": POSTGRES_USER,
                "password": POSTGRES_PASSWORD,
                "host": "postgres-server:5432",
                "db_name": POSTGRES_DATABASE,
            }
        )
        self.engine = create_engine(DATABASE_URL)
        self.session = sessionmaker(autocommit=False, autoflush=True, bind=self.engine)

    def get_session(self):
        return self.session


class Base(DeclarativeBase):
    """ORMモデルのベースクラス"""

    pass
