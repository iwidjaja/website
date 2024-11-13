# Personalized Quiz Generator

## Overview

The Personalized Quiz Generator is an application where users can:

- Create and customize quizzes on any topic they like (e.g., science, pop culture, coding).
- Add multiple-choice questions with a correct answer and several options.
- Take quizzes created by themselves or others, with scores tracked and results shown at the end.
- Add a twist by personalizing quiz content, with suggestions based on popular topics or previous quizzes the user took.

## Setup

### Backend

1. Navigate to the `backend` directory.
2. Create a virtual environment and activate it.
3. Install the dependencies:
    ```bash
    pip install -r requirements.txt
    ```
4. Start the FastAPI server:
    ```bash
    uvicorn app.main:app --reload
    ```

### Frontend

1. Navigate to the `frontend` directory.
2. Install the dependencies:
    ```bash
    npm install
    ```
3. Start the React development server:
    ```bash
    npm start
    ```

## Usage

- Access the frontend at `http://localhost:3000`.
- Access the backend API at `http://localhost:8000`.