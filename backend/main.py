from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes import users, hotels, bookings

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(users.router)
app.include_router(hotels.router)
app.include_router(bookings.router)

@app.get("/")
def home():
    return {"message": "Hotel Booking API Running"}
