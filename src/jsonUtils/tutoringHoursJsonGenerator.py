import os
import sys
import json
import mariadb
from src.insertSQL import DBConnection


def createTutoringDict(tutoringHours: list, semester: int) -> dict:
    tutoringData = {}
    tutoringData["teacher_id"] = teacher_id
    tutoringData["day"] = dayNumber + 1
    tutoringData["start_time"] = tutoringHours[0]
    tutoringData["ending_time"] = tutoringHours[1]
    tutoringData["semester"] = semester+1
    return tutoringData


os.chdir(os.path.dirname(os.path.abspath(__file__)))
connection = DBConnection.DBConnect(input("Username: "), input("Password: "), input("Host: "))
with open("../scrappers/json/profesorado.json", 'r', encoding='utf-8') as teachersJson:
    teachersList = json.load(teachersJson)

finalData = []
semestersNames = ("firstSemester", "secondSemester")

cursor = connection.cursor()
for teacher in teachersList:

    try:
        cursor.execute(f"SELECT id FROM teacher WHERE name='{teacher['profesorado']['profesor']}'")
        teacher_id = cursor.fetchone()[0]
    except mariadb.Error as e:
        DBConnection.DBDisconnect(connection)
        print("Error in database select")
        sys.exit(1)

    days = ("LUNES", "MARTES", "MIÉRCOLES", "JUEVES", "VIERNES")
    tutoring = teacher["tutorias"]
    for semester in range(2):
        for dayNumber in range(4):
            # Split preventivo en caso de que haya 2 horas de tutoría el mismo día
            tutoringHoursList = tutoring[0][semestersNames[semester]][days[dayNumber]].split(" / ")
            for tutoringHours in tutoringHoursList:
                tutoringHours = tutoringHours.replace('.', ':')
                # Comprueba que haya tutoría ese día
                tutoringHours = tutoringHours.split("-")
                if len(tutoringHours) == 2:
                    tutoringData = createTutoringDict(tutoringHours,semester)
                    finalData.append(tutoringData)
with open('../scrappers/json/tutoring_hours.json', 'w', encoding='utf-8') as f:
    json.dump(finalData, f, indent=4, ensure_ascii=False)


DBConnection.DBDisconnect(connection)
