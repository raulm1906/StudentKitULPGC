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


if __name__ == "__main__":
    connection = DBConnection.DBConnect()
    cursor = connection.cursor()

    with open("../scrappers/subjects.json", 'r', encoding='utf-8') as subjectsJson:
        subjectsList = json.load(subjectsJson)

    for subject in subjectsList:
        dsDict = deserializeSubject(subject)

        try:
            cursor.execute("INSERT INTO SUBJECTS (code,name,degree,semester,type,credits,year,linkPD)\
                VAULES(?, ?, ?, ?, ?, ?, ?, ?)", (dsDict["code"], dsDict["name"], dsDict["degree"],
                                                    dsDict["semester"],dsDict["type"], dsDict["credits"],
                                                    dsDict["year"], dsDict["linkPD"]))
        except mariadb.Error as e:
            print(f"Error: {e}")

        connection.commit()

    DBConnection.DBDisconnect(connection)
