import mariadb
import sys

def dbConnect ():
    # Connect to MariaDB Platform
    try:
        conn = mariadb.connect(
            user="",
            password="",
            host="localhost",
            port=3306,
            database="psulpgcstudentkit",
        )
        return conn
    except mariadb.Error as e:
        print(f"Error connecting to MariaDB Platform: {e}")
        sys.exit(1)


def dbDisconnect (conn):
    conn.close
