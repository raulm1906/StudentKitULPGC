import mariadb
import sys

def DBConnect (user: str, password: str, saveLog: bool = False):
    # Connect to MariaDB Platform
    try:
        conn = mariadb.connect(
            user=user,
            password=password,
            host="localhost",
            port=3306,
            database="psulpgcstudentkit",
        )
        return conn
    except mariadb.Error as e:
        print(f"Could not connect to database")
        sys.exit(1)


def DBDisconnect (conn):
    conn.close
