from fastapi import APIRouter, HTTPException
from database import hotels_collection
from models import Hotel

router = APIRouter()

@router.post("/add-hotel")
def add_hotel(hotel: Hotel):

    hotels_collection.insert_one(hotel.dict())

    return {"message": "Hotel added"}


@router.get("/hotels")
def get_hotels():

    hotels = list(hotels_collection.find({}, {"_id":0}))

    return hotels


@router.put("/update-hotel/{hotel_name}")
def update_hotel(hotel_name: str, hotel: Hotel):
    
    result = hotels_collection.update_one(
        {"name": hotel_name},
        {"$set": hotel.dict()}
    )

    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Hotel not found")

    return {"message": "Hotel updated successfully"}


@router.delete("/delete-hotel/{hotel_name}")
def delete_hotel(hotel_name: str):
    
    result = hotels_collection.delete_one({"name": hotel_name})
    
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Hotel not found")
    
    return {"message": "Hotel deleted successfully"}
