import requests
from bs4 import BeautifulSoup
import json
import lxml

def teacherFormatter(diccionario):
    cleandict = {}

    for key in diccionario:
        if key == "profesor":
            cleandict['profesor'] = diccionario[key].title()
        #if key == 'CATEGORÍA LABORAL:':
        elif key == 'CORREO ELECTRÓNICO:':
            cleandict['email'] = diccionario[key]
        #elif key == ''
        else:
            cleandict[key.lower()] = diccionario[key].capitalize()
       # elif key == "CORREO ELECTRÓNICO":
        #    diccionario[key] =
        #else:
         #   key = key.capitalize
          #  diccionario[key] = key.capitalize() + ' ' + diccionario[key].lower()
    print(cleandict)
    return cleandict

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
with open('teacherss.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=4, ensure_ascii=False, sort_keys=True)



