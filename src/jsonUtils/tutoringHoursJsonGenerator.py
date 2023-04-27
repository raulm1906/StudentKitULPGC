import re
import os
import sys
import json
import mariadb
from src.insertSQL import DBConnection

os.chdir(os.path.dirname(os.path.abspath(__file__)))
connection = DBConnection.DBConnect(input("Username: "), input("Password: "))

with open("../scrappers/json/profesorado.json", 'r', encoding='utf-8') as teachersJson:
    teachersList = json.load(teachersJson)

finalDict = {}

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
    tutoringData = {}
    days = ("LUNES", "MARTES", "MIÉRCOLES", "JUEVES", "VIERNES")
    for dayNumber in range(5):
        # Comprueba que haya tutoría ese día
        tutoringHours = tutoringData[days[dayNumber]].split("-")
        tutoringHours = tutoringHours.replace('.', ':')
        if len(tutoringHours) == "2":
            tutoringData["teacher_id"] = teacher_id
            tutoringData["day"] = dayNumber
            tutoringData["start_time"] = tutoringHours[0]
            tutoringData["end_time"] = tutoringHours[1]
            tutoringData["semester"] = 1



DBConnection.DBDisconnect(connection)

