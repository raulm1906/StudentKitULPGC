# This is a sample Python script.

# Press Mayús+F10 to execute it or replace it with your code.
# Press Double Shift to search everywhere for classes, files, tool windows, actions, and settings.
import json

data=[]

while(True):

    horario = {
        'Group' : input("Group: "),
        'Classroom' : input("Classroom: "),
        'Day' : input("Day: "),
        'Week': input("Week: "),
        'IHour': input("Initial Hour: "),
        'FHour': input("Final Hour: ")
    }

    data.append(horario)

    if(input("Terminar (y para si): ") == "y"):
        break

with open("./horarios/" + input("Nombre del archivo (terminado en .json) : "), 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=4, ensure_ascii=False, sort_keys=True)

print('Done')


