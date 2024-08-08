from fastapi import APIRouter, Depends, status
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.orm import Session

from app.api.application.status_use_case import StatusUseCase
from app.api.infrastructure.database.get_db import ConnectDatabase
from app.api.infrastructure.repository.status_repository import StatusRepositoryImpl
from app.api.presentation.schema.status import StatusSchema

router = APIRouter()
factory = ConnectDatabase()
db_session = factory.get_session()


def get_db():
    """データベースセッションを取得する"""
    with db_session() as session:
        try:
            yield session
            session.commit()
        except SQLAlchemyError:
            session.rollback()
            raise


@router.get("/")
def index(db: Session = Depends(get_db)) -> dict:
    return {"message": "Hello World"}


@router.get("/pokemon", status_code=status.HTTP_200_OK)
def pokemon_status(id_: int, db: Session = Depends(get_db)) -> dict:
    try:
        repo = StatusRepositoryImpl(db)
        usecase = StatusUseCase(repo=repo)
        res = usecase.handler(id_=id_)
        return res
    except SQLAlchemyError as e:
        raise
