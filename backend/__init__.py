from typing import List
from models import Members, Role, Projects, Season, Project_date

members: List [Members] = [
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

projects: List [Projects] = [
     Projects(
        project_name="MewTwo Escape",
        project_Contributors=["Patrick", "Yonas", "Bhavneet"],  # List of contributors
        project_url="https://github.com/YonasOmega/Mewtwo-Escape",
        project_date=Project_date(season=Season.winter, year=2023)
    ),
    Projects(
        project_name="pr",
        project_Contributors=["Patrick", "Yonas", "Bill"],  # List of contributors
        project_url="https://github.com/BillJamesM/pr_api",
        project_date=Project_date(season=Season.spring, year=2023)
    )
]
