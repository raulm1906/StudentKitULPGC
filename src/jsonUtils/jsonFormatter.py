import re

def subjectFormatter(subject: dict) -> dict:
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