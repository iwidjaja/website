from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from .database import Base

class Quiz(Base):
    __tablename__ = "quizzes"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(String)

class Question(Base):
    __tablename__ = "questions"
    id = Column(Integer, primary_key=True, index=True)
    quiz_id = Column(Integer, ForeignKey("quizzes.id"))
    question_text = Column(String)
    correct_answer = Column(String)
    options = Column(String)  # Comma-separated options
    quiz = relationship("Quiz", back_populates="questions")

Quiz.questions = relationship("Question", back_populates="quiz")