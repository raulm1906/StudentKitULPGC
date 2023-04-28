import os
import json

def createLessonDict(lesson: dict, subjectCode: int) -> dict:
    lessonData = {}
    lessonData["subject_id"] = subjectCode
    lessonData["classroom"] = lesson["Classroom"]
    lessonData["group"] = lesson["Group"]
    lessonData["day"] = days.index(lesson["Day"])+1
    lessonData["week"] = lesson["Week"]
    lessonData["start_time"] = lesson["IHour"]
    lessonData["ending_time"] = lesson["FHour"]

    return lessonData

os.chdir(os.path.dirname(os.path.abspath(__file__)))

finalData = []
days = ("LUNES", "MARTES", "MIERCOLES", "JUEVES", "VIERNES")

for code in range(40951, 40990):
    with open(f"../scrappers/json/subjectSchedules/{code}.json", 'r', encoding='utf-8') as subjectLessonJson:
        subjectArray = json.load(subjectLessonJson)

    for lesson in subjectArray:
        lessonData = createLessonDict(lesson, code)
        finalData.append(lessonData)


with open('../scrappers/json/lessons.json', 'w', encoding='utf-8') as f:
    json.dump(finalData, f, indent=4, ensure_ascii=False)

