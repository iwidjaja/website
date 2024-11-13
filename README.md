# Personal Website

This project is a personal website built with a FastAPI backend and a React frontend. The website includes a homepage and a portfolio page that displays content from an S3 bucket served through CloudFront.

## Project Structure

website/
├── backend/
│   ├── env/                   # Virtual environment directory
│   ├── main.py                # FastAPI application file
│   └── requirements.txt       # Python dependencies
├── frontend/
│   ├── public/
│   │   ├── index.html         # HTML template
│   ├── src/
│   │   ├── App.js             # Main React component
│   │   ├── App.css            # CSS for styling React components
│   │   ├── index.js           # Entry point for React application
│   │   └── // ...existing code...
│   ├── package.json           # JavaScript dependencies
│   └── // ...existing code...
├── dev.sh                     # Initialization script
└── README.md                  # Project documentation


## Setup Instructions

### Step 1: Initialize the Backend

1. Navigate to the `backend` directory:
    ```sh
    cd backend
    ```

2. Create a virtual environment and activate it:
    ```sh
    python3 -m venv env
    source env/bin/activate
    ```

3. Install the required dependencies:
    ```sh
    pip install -r requirements.txt
    ```

4. Start the FastAPI backend:
    ```sh
    uvicorn main:app --reload
    ```

### Step 2: Initialize the Frontend

1. Navigate to the `frontend` directory:
    ```sh
    cd ../frontend
    ```

2. Install the required dependencies:
    ```sh
    npm install
    ```

3. Start the React frontend:
    ```sh
    npm start
    ```

### Step 3: Run the Initialization Script

Alternatively, you can use the provided `init.sh` script to initialize and start both the backend and frontend:

1. Make the script executable:
    ```sh
    chmod +x dev.sh
    ```

2. Run the script:
    ```sh
    ./dev.sh
    ```

## File Descriptions

### Backend

- `main.py`: The main FastAPI application file.
- `requirements.txt`: The list of Python dependencies for the backend.

### Frontend

- `src/App.js`: The main React component file.
- `src/App.css`: The CSS file for styling the React components.
- `src/index.js`: The entry point for the React application.
- `package.json`: The list of JavaScript dependencies for the frontend.

## Customization

- Replace `"https://your-custom-domain.com"` in `src/App.js` with your actual custom domain that points to your CloudFront distribution.
- Customize the styles in `src/App.css` to match your personal preferences.

## License

This project is licensed under the MIT License.