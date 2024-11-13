from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from ..main import app
from ..database import Base, get_db

SQLALCHEMY_DATABASE_URL = "sqlite:///./test.db"

engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})
TestingSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base.metadata.create_all(bind=engine)

def override_get_db():
    try:
        db = TestingSessionLocal()
        yield db
    finally:
        db.close()

app.dependency_overrides[get_db] = override_get_db

client = TestClient(app)

def test_create_quiz():
    response = client.post(
        "/quizzes/",
        json={"title": "Sample Quiz", "description": "A sample quiz", "questions": [
            {"question_text": "What is 2+2?", "correct_answer": "4", "options": ["1", "2", "3", "4"]}
        ]}
    )
    assert response.status_code == 200
    assert response.json()["title"] == "Sample Quiz"

def test_read_quiz():
    response = client.get("/quizzes/1")
    assert response.status_code == 200
    assert response.json()["title"] == "Sample Quiz"