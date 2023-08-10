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