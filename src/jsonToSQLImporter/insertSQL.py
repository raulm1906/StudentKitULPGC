import os
import sys
import DBConnection
import jsonFormatter
import json
import mariadb
import logging


def insertDegree(connection: mariadb.connections, degree: str, saveLog: bool = False) -> bool:
    cursor = connection.cursor()
    try:
        cursor.execute(f"INSERT INTO DEGREE(degree) VALUES('{degree}')")
        if saveLog:
            logging.info(f"{cursor.rowcount} values inserted")
        return True
    except mariadb.Error as e:
        if saveLog:
            logging.error(f"Error: {e}")
        return False


def insertSubject(connection: mariadb.connections, subject: dict, saveLog: bool = False) -> bool:
    cursor = connection.cursor()

    try:
        cursor.execute(f"SELECT id FROM DEGREES WHERE degree='{subject['degree']}'")
        degreeId = cursor.fetchone()[0]
        if saveLog:
            logging.info(degreeId)
        cursor.execute(f"INSERT INTO SUBJECTS (code,name,degree,semester,type,credits,year,linkPD) \
            VALUES('{subject['code']}', '{subject['name']}', '{degreeId}', '{subject['semester']}', \
            '{subject['type']}', '{subject['credits']}', '{subject['year']}', '{subject['linkPD']}')")
        if saveLog:
            logging.info(f"{cursor.rowcount} values inserted")
        return True
    except mariadb.Error as e:
        if saveLog:
            logging.exception(f"Error: {e}")
        return False


if __name__ == "__main__":
    os.chdir(os.path.dirname(os.path.abspath(__file__)))

    if len(sys.argv) == 3:
        connection = DBConnection.DBConnect(sys.argv[1], sys.argv[2])
        saveLog = False
    elif len(sys.argv) == 4:
        connection = DBConnection.DBConnect(sys.argv[1], sys.argv[2], sys.argv[3])
        saveLog = sys.argv[3]
    else:
        sys.exit(-1)


    logging.basicConfig(filename="../../logs/insertSQL.log", encoding="UTF-8",
                        format='%(asctime)s %(message)s', datefmt='%m/%d/%Y %I:%M:%S %p')

    with open("../scrappers/subjects.json", 'r', encoding='utf-8') as subjectsJson:
        subjectsList = json.load(subjectsJson)

    #insertDegree(connection,jsonFormatter.subjectFormatter(subjectsList[0])['degree'],saveLog)

    for subject in subjectsList:
        dsDict = jsonFormatter.subjectFormatter(subject)
        insertSubject(connection, dsDict, saveLog)

    DBConnection.DBDisconnect(connection)
