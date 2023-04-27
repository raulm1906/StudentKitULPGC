import os
import sys
import json
import mariadb
from src.insertSQL import DBConnection


def createTutoringDict(tutoringHours: list) -> dict:
    tutoringData = {}
    tutoringData["teacher_id"] = teacher_id
    tutoringData["day"] = dayNumber + 1
    tutoringData["start_time"] = tutoringHours[0]
    tutoringData["ending_time"] = tutoringHours[1]
    tutoringData["semester"] = 1
    return tutoringData


os.chdir(os.path.dirname(os.path.abspath(__file__)))
connection = DBConnection.DBConnect(input("Host: "), input("Username: "), input("Password: "))
with open("../scrappers/json/profesorado.json", 'r', encoding='utf-8') as teachersJson:
    teachersList = json.load(teachersJson)

finalList = []

cursor = connection.cursor()
for teacher in teachersList:

    try:
        cursor.execute(f"SELECT id FROM teacher WHERE name='{teacher['profesorado']['profesor']}'")
        teacher_id = cursor.fetchone()[0]
    except mariadb.Error as e:
        DBConnection.DBDisconnect(connection)
        print("Error in database select")
        sys.exit(1)

    tutoring = teacher["tutorias"]
    days = ("LUNES", "MARTES", "MIÉRCOLES", "JUEVES", "VIERNES")
    for dayNumber in range(5):
        # Split preventivo en caso de que haya 2 horas de tutoría el mismo día
        tutoringHoursList = tutoring[days[dayNumber]].split(" / ")
        for tutoringHours in tutoringHoursList:
            tutoringHours = tutoringHours.replace('.', ':')
            # Comprueba que haya tutoría ese día
            tutoringHours = tutoringHours.split("-")
            if len(tutoringHours) == 2:
                tutoringData = createTutoringDict(tutoringHours)
                finalList.append(tutoringData)

with open('../scrappers/json/tutoring_hours_1sem.json', 'w', encoding='utf-8') as f:
    json.dump(finalList, f, indent=4, ensure_ascii=False)

DBConnection.DBDisconnect(connection)
