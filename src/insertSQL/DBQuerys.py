import sys
import mariadb
import DBConnection

def getTeacher_id(tacherName) -> int:

    connection = DBConnection.DBConnect(input("Username: "), input("Password: "), input("Host: "))
    cursor = connection.cursor()
    try:
        cursor.execute(f"SELECT id FROM teacher WHERE name='{tacherName}'")
        teacher_id = cursor.fetchone()[0]
    except mariadb.Error as e:
        DBConnection.DBDisconnect(connection)
        print("Error in database select")
        sys.exit(1)
    DBConnection.DBDisconnect(connection)
    return teacher_id

def getSubject_id(subjectName) -> int:
    subjectName = subjectName.upper()
    connection = DBConnection.DBConnect(input("Username: "), input("Password: "), input("Host: "))
    cursor = connection.cursor()
    try:
        cursor.execute(f"SELECT code FROM subject WHERE name='{subjectName}'")
        subject_id = cursor.fetchone()[0]
    except mariadb.Error as e:
        DBConnection.DBDisconnect(connection)
        print("Error in database select")
        sys.exit(1)
    DBConnection.DBDisconnect(connection)
    return subject_id