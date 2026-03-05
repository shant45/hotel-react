from fastapi import APIRouter
from database import bookings_collection, hotels_collection
from models import Booking

router = APIRouter()

@router.post("/book")

def book_room(booking: Booking):

    hotel = hotels_collection.find_one({"name": booking.hotel_name})

    if hotel["rooms"] <= 0:
        return {"error": "No rooms available"}

    hotels_collection.update_one(
        {"name": booking.hotel_name},
        {"$inc": {"rooms": -1}}
    )

    bookings_collection.insert_one(booking.dict())

    return {"message": "Room booked"}


@router.get("/bookings/{email}")

def get_bookings(email: str):

    bookings = list(bookings_collection.find({"user_email":email},{"_id":0}))

    return bookings
