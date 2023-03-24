import requests
from bs4 import BeautifulSoup
import json
import lxml

id = 1


def teacherFormatter(diccionario):
    global id
    final_dict = {'id': id}
    clean_dict = {
        'profesor': diccionario.get('profesor', '').title(),
        'email': diccionario.get('CORREO ELECTRÓNICO:', ''),
        'teléfono': diccionario.get('TELÉFONO DE CONTACTO:', '')
    }
    for key, value in diccionario.items():
        if key in ['CATEGORÍA LABORAL:', 'DIRECCIÓN POSTAL:', 'CORREO ELECTRÓNICO:', 'TELÉFONO DE CONTACTO:']:
            continue
        elif key == 'profesor':
            continue
        else:
            if value == 'Ciencia De La Comp. E Intel. Artificial':
                value = 'Ciencia de la Computación e Inteligencia Artificial'
            else:
                value = value.capitalize()
            clean_dict[key.lower()] = value
    final_dict['profesorado'] = clean_dict
    id += 1
    print(final_dict)
    return final_dict

def obtener_informacion(url):
    page = requests.get(url)
    soup = BeautifulSoup(page.text, 'lxml')
    # Find the data table on the page
    table = soup.find('table')
    # Find all rows in the table
    rows = table.find_all('tr')
    # Loop through all rows and get the name of the person in the first column
    cont = 0
    dicc = {}
    nombre_completo = ''
    for row in rows:
        cols = row.find_all('td')


        if len(cols) >= 2 and cont < 7:
            if cont == 5:
                cont += 1
                continue

            datos = cols[0].text.strip()
            resultado = cols[1].text.strip()

            if cont == 3:
                dicc[datos] = resultado
                datos = cols[2].text.strip()
                resultado = cols[3].text.strip()
                dicc[datos] = resultado
            if cont == 0:
                nombre_completo += resultado
            elif cont == 1:
                nombre_completo += ', ' + resultado
                dicc['profesor'] = nombre_completo

            elif cont > 1:
                dicc[datos] = resultado
            cont += 1
    newdicc = teacherFormatter(dicc)
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



