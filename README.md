Hotel Booking Management System
Project Overview

The Hotel Booking Management System is a web-based application that allows users to browse hotels, make bookings, and manage their reservations. Admins can manage hotels by adding, updating, or deleting hotel details.

This project is designed as a college project demonstrating full-stack development using Python (FastAPI), React, Bootstrap, and MongoDB.

Features
User Features

View hotels with images, price, and available rooms

Book a hotel with check-in and check-out dates

View profile with logout functionality

Responsive and attractive Home page

Admin Features

Add new hotels with name, location, rooms, price, and image URL

Edit hotel details (CRUD)

Delete hotels

Manage bookings

Shared Features

Login/Register with validation and toast notifications

Dynamic Navbar showing appropriate buttons based on login state

Toast notifications for API responses

Modern UI with React + Bootstrap

Technologies Used

Backend: Python, FastAPI, Pydantic, PyMongo

Frontend: React, Vite, Bootstrap, React Router, React Toastify

Database: MongoDB

Other: Axios for API requests

Folder Structure
hotel-booking-project/
│
├── backend/             # FastAPI backend
│   ├── main.py
│   ├── models.py
│   ├── routes/
│   ├── requirements.txt
│
├── frontend/            # React frontend
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
└── README.md
Setup Instructions
1️⃣ Backend Setup (FastAPI)

Open terminal and navigate to backend folder:

cd backend

(Optional) Create virtual environment:

python -m venv venv
# Windows
venv\Scripts\activate
# Mac/Linux
source venv/bin/activate

Install dependencies:

pip install -r requirements.txt
# or if no requirements.txt
pip install fastapi uvicorn pymongo pydantic

Run the backend server:

uvicorn main:app --reload

Backend will run at:

http://127.0.0.1:8000

API docs (Swagger UI):

http://127.0.0.1:8000/docs
2️⃣ Frontend Setup (React + Vite + Bootstrap)

Open a new terminal and navigate to frontend folder:

cd frontend

Install dependencies:

npm install

Start the React development server:

npm run dev

Frontend will run at (default Vite port):

http://localhost:5173
3️⃣ Configure API Calls

Make sure the backend URL is correctly set in your frontend API service, e.g., http://127.0.0.1:8000.

Example in frontend/src/services/api.js:

import axios from "axios"

const API = axios.create({
  baseURL: "http://127.0.0.1:8000"
})

export default API
Usage

Open frontend in browser: http://localhost:5173

Register a new user or admin

Login

Navigate:

Home Page – Welcome and Explore Hotels

Hotels Page – View all hotels with images

Booking Page – Book a hotel with check-in/check-out

Profile Page – View profile and logout

Admin Dashboard – Add/Edit/Delete hotels

Screenshots (Optional)

You can include screenshots of:

Home page with background image

Hotels page with hotel cards

Booking page

Admin dashboard with CRUD operations

Profile page

Notes

Make sure MongoDB is running locally or provide a MongoDB URI in main.py

Use valid image URLs when adding hotels

Toast notifications will appear for successful and failed actions
