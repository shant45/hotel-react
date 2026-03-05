from pymongo import MongoClient

client = MongoClient("mongodb+srv://shantanubansode0_db_user:uO4RFTuHXuYr4h0t@cluster0.ubq8rcr.mongodb.net/?appName=Cluster0&retryWrites=true&w=majority")

db = client["hotel_booking"]

users_collection = db["users"]
hotels_collection = db["hotels"]
bookings_collection = db["bookings"]
