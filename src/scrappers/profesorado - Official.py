import requests
from bs4 import BeautifulSoup
import json

data = []
area = []
def getTutorias(url):
    url = f'https://www.dis.ulpgc.es/profesorado/{url}'
    # Send a request to the URL and get the HTML content
    tutorias = requests.get(url).content

    # Parse the HTML content using BeautifulSoup
    soup = BeautifulSoup(tutorias, 'lxml')

    # Extract the desired information using BeautifulSoup's find() method
    tables = soup.find_all('table')

    days = []
    hours = []

    filtered_tables = [table for table in tables if not (table.get('width') and '%' in table.get('width'))]
    for table in filtered_tables:
        width = table.get('width')
        if (width) == '518':
            td_elements = table.find_all('td')
            for td in td_elements:
                if '-' in td.text:
                    hours.append(td.text.strip())
                else:
                    days.append(td.text.strip())
        elif(width) == '430':
            cont = 0
            td_col_elements = table.find_all('td', {'colspan':'6'})
            for td_col in td_col_elements:
                if cont == 1:
                    area_de_conocimiento = td_col.text.strip()
                    print(area_de_conocimiento)

                cont += 1

    joined = zip(days, hours)
    result = {k: v for k, v in joined}

    #print(result)
    return result

for endpoint in range(1, 58):
    # Construct the URL for the current endpoint
    url = f'https://www.dis.ulpgc.es/profesorado/'

    # Send a request to the URL and get the HTML content
    html1 = requests.get(url).content

    # Parse the HTML content using BeautifulSoup
    soup = BeautifulSoup(html1, 'lxml')

    # Extract the desired information using BeautifulSoup's find() method
    professor = soup.find('td', {'id': f'uno{endpoint}'})
    a_element = professor.find('a')
    a_link = a_element.get('href')
    despacho = soup.find('td', {'id': f'dos{endpoint}'})
    telefono = soup.find('td', {'id': f'tres{endpoint}'})
    correo = soup.find('td', {'id': f'cuatro{endpoint}'})
    pattern = 'ulpgc.es'
    formatted_email = f"{correo.text.split('.')[0]}@{pattern}"

    current_tutorias = getTutorias(a_link)

    profesorado = {
        'profesor': professor.text.strip(),
        'despacho': despacho.text.strip(),
        'teléfono': telefono.text.strip(),
        'email': formatted_email.strip()
    }

    jsonFormat = {
        'id': endpoint,
        'profesorado': profesorado,
        'tutorias': current_tutorias
    }
    data.append(jsonFormat)

with open('json/profesorado.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=4, ensure_ascii=False, sort_keys=True)