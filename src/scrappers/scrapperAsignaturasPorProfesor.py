import requests
from bs4 import BeautifulSoup
import json
import os

data = []

def getInfoFromAsignaturas(url, id):
    # Send a request to the URL and get the HTML content
    html = requests.get(url).content

    data_asignaturas = []

    # Parse the HTML content using BeautifulSoup
    soup = BeautifulSoup(html, 'lxml')

    tables = soup.find_all('table')
    for table in tables:
        rows = table.find_all('div', attrs={'align': 'left'})
        if len(rows) != 0:
            nombre = rows[0].text.strip()
            aula = rows[-1].text.strip()
            print(nombre, aula)
            # create a new dictionary and add the values as key-value pairs
            table_dict = {'grupos': aula, 'nombre': nombre}
            data_asignaturas.append(table_dict)
            json_Format = {
                'id': id,
                'info': data_asignaturas
            }
    print(json_Format)
    data.append(json_Format)

for endpoint in range(40951, 40991):
    # Construct the URL for the current endpoint
    url = f'https://www2.ulpgc.es/plan-estudio/4008/41/{endpoint}'

    # Send a request to the URL and get the HTML content
    html = requests.get(url).content

    # Parse the HTML content using BeautifulSoup
    soup = BeautifulSoup(html, 'lxml')

    # Extract the desired information using BeautifulSoup's find() method7
    title = soup.find('caption', {'class': 'separaMenu'})
    profesorado_element = soup.find('a', text='Profesorado')
    title_id = title.text.split()[0]
    profesorado_link = profesorado_element['href']
    #print(profesorado_link)
    print("************************")
    getInfoFromAsignaturas(profesorado_link, title_id)
    print("************************")

    # Print the extracted information
    '''
    print(f'Asignatura: {asignatura.text}\nTipo: {tipo.text}\nTitulación: {titulacion.text}')
    print(f'Departamento: {departamento.text}\nDuracion: {duracion.text}\nCréditos: {creditos.text}\nAño: {año.text}')
    print(f'Proyecto Docente: {subject["proyectoDocente"]}\n')
    '''

# create the subfolder if it does not exist
subfolder = "json/asignaturas-por-profesor"
if not os.path.exists(subfolder):
    os.makedirs(subfolder)

# write the JSON file to the subfolder
filename = f"{subfolder}/AsignaturasPorProfesor.json"
with open(filename, "w", encoding="utf-8") as f:
    json.dump(data, f, indent=4, ensure_ascii=False, sort_keys=True)

print('Done')
