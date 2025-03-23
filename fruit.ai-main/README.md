#Fruit.ai
Fruit.ai is a web application designed to provide information about various fruits through a user-friendly interface. The project is built with ReactJS for the frontend and FastAPI for the backend.

Features: 

  1) FAQ Management: Users can view, add, edit, and delete FAQs related to fruits.
  2) Responsive Design: The application is optimized for both desktop and mobile views.
  3) Real-time Updates: Thanks to FastAPI, updates to the FAQ data are handled efficiently.

Technologies Used:
  1) Frontend: ReactJS
  2) Backend: FastAPI
  3) Database: MongoDB (assumed from the provided backend code)
  4) HTTP Client: Axios (for making API requests)

Getting Started :

  Prerequisites
    1) Node.js and npm (for ReactJS)
    2) Python 3.8+ (for FastAPI)
    3) MongoDB (for the database)
    4) Installation
    
Clone the Repository


    git clone https://github.com/yourusername/fruit.ai.git
    cd fruit.ai

Frontend Setup:

  Navigate to the frontend directory:

        cd frontend
        
  Install dependencies:
  
        npm install
Start the React development server:

    npm start
    
Backend Setup:

  Navigate to the backend directory:

    cd ../backend
Create and activate a virtual environment:

    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
Install dependencies:

    pip install -r requirements.txt
Start the FastAPI server:

    uvicorn main:app --reload
