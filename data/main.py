import os
import json

# specify the directory path where the JSON files are stored
directory_path = "subjectSchedules/"

def assignTheory(data):
    theoryGroup = {
        "groupId": data['Group'],
        "classroom": data['Classroom'],
        "day": data['Day'],
        "startHour": data['IHour'],
        "finishHour": data['FHour'],
        "week": data['Week']
    }
    return theoryGroup

def assignPractice(data):
    practiceGroup = {
        "groupId": data['Group'],
        "classroom": data['Classroom'],
        "day": data['Day'],
        "startHour": data['IHour'],
        "finishHour": data['FHour'],
        "week": data['Week']
    }
    return practiceGroup

# iterate over all the files in the directory
completeData = []
for filename in os.listdir(directory_path):
    if filename.endswith(".json"):
        # open the JSON file and load the data
        with open(os.path.join(directory_path, filename), "r") as f:
            updated_filename = os.path.splitext(filename)[0]
            data = json.load(f)
            theory_groups = []
            practice_groups = []
            for item in data:
                if (int(item['Group']) < 10):
                    info = assignTheory(item)
                    theory_groups.append(info) # add the info data to the theory_groups list
                else:
                    info = assignPractice(item)
                    practice_groups.append(info) # add the info data to the practice_groups list
            jsonData = {
                "id": updated_filename,
                "theoryGroups": theory_groups, # add the theory_groups list to the jsonData dictionary
                "practiceGroups": practice_groups # add the practice_groups list to the jsonData dictionary
            }
            completeData.append(jsonData)

# write the completeData list to a JSON file
with open("output.json", "w") as outfile:
    json.dump(completeData, outfile, indent=4)
