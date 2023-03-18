import requests
from bs4 import BeautifulSoup
import json
import lxml


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
    for row in rows:
        cols = row.find_all('td')

        if len(cols) >= 2 and cont < 7:
            if cont == 5:
                cont += 1
                continue
                '''
                el intento de sacar el correo electronico
            if cont == 3:
                datos = cols.find('td', string='CORREO ELECTRÓNICO').text.strip()
                resultado = cols.find('td', string=' CORREO ELECTRÓNICO: ').find_next_sibling('td').text.strip()
                print(datos, resultado)
                dicc[datos] = resultado
                '''
            datos = cols[0].text.strip()
            resultado = cols[1].text.strip()
            # print(datos, resultado)
            dicc[datos] = resultado
            cont += 1
    return dicc



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
with open('teachers.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=4, ensure_ascii=False, sort_keys=True)



