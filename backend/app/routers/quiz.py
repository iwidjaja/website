from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from .. import crud, models, schemas
from ..database import get_db

router = APIRouter()

@router.post("/quizzes/", response_model=schemas.Quiz)
def create_quiz(quiz: schemas.QuizCreate, db: Session = Depends(get_db)):
    return crud.create_quiz(db=db, quiz=quiz)

@router.get("/quizzes/{quiz_id}", response_model=schemas.Quiz)
def read_quiz(quiz_id: int, db: Session = Depends(get_db)):
    db_quiz = crud.get_quiz(db, quiz_id=quiz_id)
    if db_quiz is None:
        raise HTTPException(status_code=404, detail="Quiz not found")
    return db_quiz