import requests
from bs4 import BeautifulSoup
import json
import lxml

id = 1


def teacherFormatter(diccionario):
    global id
    final_dict = {'id': id}
    if diccionario['área de conocimiento'] == 'Ciencia De La Comp. E Intel. Artificial':
        diccionario['área de conocimiento'] = 'Ciencia de la Computación e Inteligencia Artificial'

    clean_dict = {
        'profesor': diccionario.get('profesor', '').title(),
        'email': diccionario.get('email', ''),
        'teléfono': diccionario.get('teléfono', ''),
        'área de conocimiento': diccionario.get('área de conocimiento', '')
    }
    final_dict['profesorado'] = clean_dict
    id += 1
    return final_dict


def obtener_informacion(url):
    page = requests.get(url)
    soup = BeautifulSoup(page.text, 'lxml')
    # Find the data table on the page
    table = soup.find('table')
    # Find all rows in the table
    rows = table.find_all('tr')
    # Create a dictionary to store the data
    dicc = {}
    # Initialize variable to store name
    nombre = ''
    # Loop through all rows and get the data
    for row in rows:
        cols = row.find_all('td')
        if len(cols) >= 2:
            datos = cols[0].text.strip()
            resultado = cols[1].text.strip()
            if datos == 'APELLIDOS:':
                nombre = resultado
            elif datos == 'NOMBRE:':
                nombre = nombre + ', ' + resultado
                dicc['profesor'] = nombre
            elif datos == 'TELÉFONO DE CONTACTO:':
                dicc['teléfono'] = resultado
                correo = cols[3].text.strip()
                dicc['email'] = correo
            elif datos == 'ÁREA DE CONOCIMIENTO:':
                dicc['área de conocimiento'] = resultado


    # Store the formatted teacher information in the dictionary
    newdicc = teacherFormatter(dicc)
    print(newdicc)
    return newdicc



url = "https://www2.ulpgc.es/plan-estudio/4008/41/docentes"
page = requests.get(url)
soup = BeautifulSoup(page.text, 'lxml')

# Encuentra la tabla de datos en la página
table = soup.find('table')
# Find all the a components in the page
links = table.find_all('a')
data = []

for link in links:
    data.append(obtener_informacion(link.get('href')))

        # Store all the data in a JSON
with open('json/teachers.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=4, ensure_ascii=False, sort_keys=True)



