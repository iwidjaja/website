from fastapi import FastAPI
from .routers import quiz

app = FastAPI()

app.include_router(quiz.router)

@app.get("/")
def read_root():
    return {"message": "Welcome to the Personalized Quiz Generator API"}