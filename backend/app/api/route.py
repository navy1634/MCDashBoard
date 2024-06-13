from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from ..database.model import *
from ..database.repository import *
from ..databaseInterface import get_db
from .model import *

router = APIRouter()


@router.get("/")
def index(db: AsyncSession = Depends(get_db)) -> dict:
    return {"message": "Hello World"}
