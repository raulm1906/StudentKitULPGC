import requests
from bs4 import BeautifulSoup
import json
import lxml

id = 1
def teacherFormatter(diccionario):
    cleandict = {}
    finaldicc = {}
    global id
    finaldicc['id'] = id
    for key in diccionario:
        if key == 'CATEGORÍA LABORAL:' or key == 'DIRECCIÓN POSTAL:':
            continue
        elif key == "profesor":
            cleandict['profesor'] = diccionario[key].title()
        elif key == 'CORREO ELECTRÓNICO:':
            cleandict['email'] = diccionario[key]
        elif key == 'TELÉFONO DE CONTACTO:':
            cleandict['teléfono'] = diccionario[key]
        else:
            if diccionario[key] == 'Ciencia De La Comp. E Intel. Artificial':
                cleandict[key.lower()] = 'Ciencia de la Computación e Inteligencia Artificial'
            else:
                cleandict[key.lower()] = diccionario[key].capitalize()
    finaldicc['profesorado'] = cleandict
    id += 1
    print(finaldicc)
    return finaldicc

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
                nombre_completo += resultado + ' '
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



