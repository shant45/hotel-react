from fastapi import APIRouter
from database import users_collection
from models import User
import hashlib
from auth import create_token

router = APIRouter()

@router.post("/register")
def register(user: User):

    # prevent duplicate emails
    existing_user = users_collection.find_one({"email": user.email})
    if existing_user:
        return {"error": "Email already registered"}

    user.password = hashlib.sha256(user.password.encode()).hexdigest()

    users_collection.insert_one(user.model_dump())

    return {"message": "User registered successfully"}


@router.post("/login")
def login(email: str, password: str):

    user = users_collection.find_one({"email": email})

    if not user:
        return {"error": "User not found"}

    if hashlib.sha256(password.encode()).hexdigest() == user["password"]:

        token = create_token({"email": email})

        return {
            "message": "Login successful",
            "token": token
        }

    return {"error": "Invalid password"}
