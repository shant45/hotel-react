from pymongo import MongoClient
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

# Get MongoDB URI from .env
MONGO_URI = os.getenv("MONGO_URI")

# Connect to MongoDB
client = MongoClient(MONGO_URI)
db = client["hotel_booking"]

# Collections
users_collection = db["users"]
hotels_collection = db["hotels"]
bookings_collection = db["bookings"]