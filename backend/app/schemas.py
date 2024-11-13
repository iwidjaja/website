from pydantic import BaseModel
from typing import List, Optional

class QuestionBase(BaseModel):
    question_text: str
    correct_answer: str
    options: List[str]

class QuestionCreate(QuestionBase):
    pass

class Question(QuestionBase):
    id: int
    quiz_id: int

    class Config:
        orm_mode = True

class QuizBase(BaseModel):
    title: str
    description: Optional[str] = None

class QuizCreate(QuizBase):
    questions: List[QuestionCreate]

class Quiz(QuizBase):
    id: int
    questions: List[Question]

    class Config:
        orm_mode = True