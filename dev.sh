#!/bin/bash

# Initialize Backend
echo "Initializing backend..."
cd backend
uvicorn app.main:app --reload

cd ..

# Initialize Frontend
echo "Initializing frontend..."
cd frontend

npm start

echo "Initialization complete!"