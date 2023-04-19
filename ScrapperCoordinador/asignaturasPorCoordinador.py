import json
import requests
from bs4 import BeautifulSoup

data = []

def getCoordinador(url):
    # Send a request to the URL and get the HTML content
    html = requests.get(url).content

    # Parse the HTML content using BeautifulSoup
    soup = BeautifulSoup(html, 'lxml')

    for i in range(1, 35):
        name_subjects = soup.select_one(f'#uno{i}').text.strip()
        name_coordinator = soup.select_one(f'#tres{i}').text.strip()

        # Create a dictionary for the coordinator of each subject
        information = {
            'asignatura': name_subjects,
            'coordinador': name_coordinator
        }

        # Add the coordinator dictionary of each subject to the list of coordinators
        data.append(information)

        # Print the extracted information
        print(f'Asignatura: {name_subjects}')
        print(f'Coordinador: {name_coordinator}\n')

    with open('coordinador.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=4, ensure_ascii=False, sort_keys=True)

url = 'https://www.dis.ulpgc.es/asignaturas/index.asp?carrera=GII&orden=curso'
getCoordinador(url)
