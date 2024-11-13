from sqlalchemy.orm import Session
from . import models, schemas

def get_quiz(db: Session, quiz_id: int):
    return db.query(models.Quiz).filter(models.Quiz.id == quiz_id).first()

def create_quiz(db: Session, quiz: schemas.QuizCreate):
    db_quiz = models.Quiz(title=quiz.title, description=quiz.description)
    db.add(db_quiz)
    db.commit()
    db.refresh(db_quiz)
    for question in quiz.questions:
        db_question = models.Question(
            quiz_id=db_quiz.id,
            question_text=question.question_text,
            correct_answer=question.correct_answer,
            options=",".join(question.options)
        )
        db.add(db_question)
    db.commit()
    return db_quiz