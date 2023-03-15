from . import DBConnection
import json
import re
import mariadb


def deserializeSubject(subject: dict) -> dict:
    cleanDict = {}
    # Subject code
    cleanDict["code"] = subject["id"]

    # Subject name
    name = subject["asignatura"].split("- ")
    cleanDict["name"] = name[1]

    # Subject degree
    cleanDict["degree"] = subject["titulacion"]

    # Subject semester
    semester = re.findall(r'\d', subject["duracion"])
    if len(semester) != 0:
        cleanDict["semester"] = semester[0]
    else:
        cleanDict["semester"] = "Anual"

    # Subject type
    cleanDict["type"] = subject["tipo"]

    # Subject credits
    cleanDict["credits"] = re.findall(r'\d+', subject["creditos"])[0]

    # Subject year
    cleanDict["year"] = subject["año"]

    # Subject linkPD
    cleanDict["linkPD"] = subject["proyectoDocente"]

    return cleanDict

def insertDegree(connection: mariadb.connections, degree: str) -> bool:
    cursor = connection.cursor
    try:
        cursor.execute(f"INSERT INTO DEGREE(degree) VALUES ({degree})")
        connection.commit()
        return True
    except mariadb.Error as e:
        print(f"Error: {e}")
        return False

def insertSubject(connection: mariadb.connections, subject: dict) -> bool:
    cursor = connection.cursor
    try:
        cursor.execute(f"SELECT id FROM DEGREES WHERE degree={subject['degree']}")
        degreeId = cursor[0]
        cursor.execute(f"INSERT INTO SUBJECTS (code,name,degree,semester,type,credits,year,linkPD) \
            VALUES ({subject['code']}, {subject['name']}, {degreeId}, {subject['semester']}, \
            {subject['type']}, {subject['credits']}, {subject['year']}, {subject['linkPD']})")
        connection.commit()
        return True
    except mariadb.Error as e:
        print(f"Error: {e}")
        return False


if __name__ == "__main__":
    connection = DBConnection.DBConnect()

    with open("../scrappers/subjects.json", 'r', encoding='utf-8') as subjectsJson:
        subjectsList = json.load(subjectsJson)

    for subject in subjectsList:
        dsDict = deserializeSubject(subject)
        insertSubject(dsDict)

    DBConnection.DBDisconnect(connection)
