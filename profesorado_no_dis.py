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
    tr_elements = table.find_all('tr')

    # Initialize a list to store the data rows
    data_rows = []
    count = 0
    # Loop through all rows and get the name of the person in the first column
    for tr in tr_elements:
        try:
            cols = tr.find_all('td')
            # Skip rows with less than two columns or with certain text
            if len(cols) < 2 or 'CORREO ELECTRÓNICO' in cols[0].text:
                continue
            # Extract the data from the row
            if len(cols) == 4:
                data_rows.append((cols[0].text.strip(), cols[1].text.strip()))
                data_rows.append((cols[2].text.strip(), cols[3].text.strip()))
            else:
                data_rows.append((cols[0].text.strip(), cols[1].text.strip()))
            count += 1
            if count >= 4:
                break
        except Exception as e:
            print(f"Error processing row: {e}")

    # Use a dictionary comprehension to build the dictionary from the data rows
    dicc = {k: v for k, v in data_rows}
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



