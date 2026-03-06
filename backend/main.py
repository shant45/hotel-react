from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import os

# Load .env (optional here, database.py already does it)
load_dotenv()

# Import routers
from routes import users, hotels, bookings

# Create FastAPI app
app = FastAPI()

# CORS settings
FRONTEND_URL = os.getenv("FRONTEND_URL", "*")  # Set your deployed frontend URL in .env
app.add_middleware(
    CORSMiddleware,
    allow_origins=[FRONTEND_URL],  # in development you can use "*"
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(users.router)
app.include_router(hotels.router)
app.include_router(bookings.router)

# Test route
@app.get("/")
def home():
    return {"message": "Hotel Booking API Running"}