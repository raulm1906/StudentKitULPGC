import sys
from . import DBConnection
from . import jsonFormatter
import json
import mariadb
import logging


def insertDegree(connection: mariadb.connections, degree: str, logging: bool = False) -> bool:
    cursor = connection.cursor
    try:
        cursor.execute(f"INSERT INTO DEGREE(degree) VALUES ({degree})")
        return True
    except mariadb.Error as e:
        if logging:
            logging.error(f"Error: {e}")
        return False


def insertSubject(connection: mariadb.connections, subject: dict, logging: bool = False) -> bool:
    cursor = connection.cursor

    try:
        cursor.execute(f"SELECT id FROM DEGREES WHERE degree={subject['degree']}")
        degreeId = cursor.fetchone()[0]
        if logging:
            logging.info(degreeId)
        cursor.execute(f"INSERT INTO SUBJECTS (code,name,degree,semester,type,credits,year,linkPD) \
            VALUES ({subject['code']}, {subject['name']}, {degreeId}, {subject['semester']}, \
            {subject['type']}, {subject['credits']}, {subject['year']}, {subject['linkPD']})")
        if logging:
            logging.info(cursor.fetchone()[0])
        return True
    except mariadb.Error as e:
        if logging:
            logging.exception(f"Error: {e}")
        return False


if __name__ == "__main__":
    if len(sys.argv) == 2:
        connection = DBConnection.DBConnect(sys.argv[0], sys.argv[1])
    elif len(sys.argv) == 3:
        connection = DBConnection.DBConnect(sys.argv[0], sys.argv[1], sys.argv[2])
    else:
        exit(1)

    logging.basicConfig(filename="../../logs/insertSQL.log", encoding="UFT-8",
                        format='%(asctime)s %(message)s', datefmt='%m/%d/%Y %I:%M:%S %p')

    with open("../scrappers/subjects.json", 'r', encoding='utf-8') as subjectsJson:
        subjectsList = json.load(subjectsJson)

    insertDegree(connection,subjectsList[0]['degree'],True)

    for subject in subjectsList:
        dsDict = jsonFormatter.subjectFormatter(subject)
        insertSubject(connection, dsDict)

    DBConnection.DBDisconnect(connection)
