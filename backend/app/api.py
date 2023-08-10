from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from uuid import UUID, uuid4
from typing import List
from fastapi import FastAPI, HTTPException
from models import Members, Role, Update_Member

app = FastAPI()
origins = [
    "http://localhost:3000",
    "localhost:3000"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)
@app.get("/")
async def root():
    return {"message": "Hello World"}

################################

db: List [Members] = [
    Members(
        uwID= "insert uwID 1",
        firstName= "insert firstName 1",
        middleName= "insert middleName 1",
        lastName= "insert lastName 1",
        roles= [Role.officer, Role.member],
        projects= ["tpp website"]
    ),
    Members(
        uwID= "insert uwID 2",
        firstName= "insert firstName 2",
        middleName= "insert middleName 2",
        lastName= "insert lastName 2",
        roles= [Role.officer, Role.member],
        projects= ["tpp website"]
    ),
    Members(
        uwID= "insert uwID 3",
        firstName= "insert firstName 3",
        middleName= "insert middleName 3",
        lastName= "insert lastName 3",
        roles= [Role.officer, Role.member],
        projects= ["tpp website"]
    ),
    Members(
        uwID= "insert uwID 4",
        firstName= "insert firstName 4",
        middleName= "insert middleName 4",
        lastName= "insert lastName 4",
        roles= [Role.member],
        projects= ["tpp website"]
    )
]

@app.get("/members")
async def fetch_members():
    return db;


