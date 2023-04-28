import sys
import mariadb
import DBConnection

def getTeacher_id(tacherName, connection: DBConnection) -> int:

    cursor = connection.cursor()
    try:
        cursor.execute(f"SELECT id FROM teacher WHERE name='{tacherName}'")
        teacher_id = cursor.fetchone()[0]
    except mariadb.Error as e:
        print("Error in database select")
    return teacher_id

def getSubject_id(subjectName, connection: DBConnection) -> int:

    subjectName = subjectName.upper()
    cursor = connection.cursor()
    try:
        cursor.execute(f"SELECT code FROM subject WHERE name='{subjectName}'")
        subject_id = cursor.fetchone()[0]
    except mariadb.Error as e:
        print("Error in database select")
    return subject_id