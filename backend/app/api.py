from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from uuid import UUID, uuid4
from fastapi import FastAPI, HTTPException
from __init__ import members, projects
from models import Role

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


@app.get("/officers")
async def fetch_Officers():
    officer_members = [member for member in members if Role.officer in member.roles]
    return officer_members;



@app.get("/projects")
async def fetch_projects():
    return projects;

