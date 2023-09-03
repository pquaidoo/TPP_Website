from enum import Enum
from pydantic import BaseModel
from typing import Optional, List


class Role(str, Enum):
    officer = "officer"
    member = "member"
    student = "student"

class Members(BaseModel):
    uwID: str
    firstName: str
    middleName: str
    lastName: str
    roles: List[Role]
    projects: List[str]

class Update_Member(BaseModel):
    uwID: Optional[str]
    firstName: Optional[str]
    middleName: Optional[str]
    lastName: Optional[str]
    roles: Optional[List[Role]]
    
################################################################

#Project Section:

class Season(str, Enum):
    autumn = "autumn"
    winter = "winter"
    spring = "spring"
    summer = "summer"   

class Project_date(BaseModel):
    season: Season
    year: int

class Projects(BaseModel):
    project_name: str
    project_Contributors: List[str]
    project_url: str
    project_date: Project_date
    

class update_projects(BaseModel):
    project_name: Optional[str]
    project_Contributors: Optional[List[str]]
    project_url: Optional[str]