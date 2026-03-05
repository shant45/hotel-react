from pydantic import BaseModel

class User(BaseModel):
    name: str
    email: str
    password: str


class Hotel(BaseModel):
    name: str
    location: str
    price: int
    rooms: int
    image_url: str = ""


class Booking(BaseModel):
    user_email: str
    hotel_name: str
    checkin: str
    checkout: str
