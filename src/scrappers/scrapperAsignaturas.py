import requests
from bs4 import BeautifulSoup
import json

data = []

for endpoint in range(40951, 40991):
    # Construct the URL for the current endpoint
    url = f'https://www2.ulpgc.es/plan-estudio/4008/41/{endpoint}'

    # Send a request to the URL and get the HTML content
    html = requests.get(url).content

    # Parse the HTML content using BeautifulSoup
    soup = BeautifulSoup(html, 'lxml')

    # Extract the desired information using BeautifulSoup's find() method
    asignatura = soup.find('caption', {'class': 'separaMenu'})
    asignature_string = str(asignatura.text)
    asignatura_number = asignature_string.split(":")[0].split("-")[0].strip()
    tipo = soup.find('td', {'headers': 'hdTipo'})
    titulacion = soup.find('td', {'headers': 'hdTitulacion'})
    departamento = soup.find('td', {'headers': 'hdDepartamento'})
    duracion = soup.find('td', {'headers': 'hdDuracion'})
    creditos = soup.find('td', {'headers': 'hdCreditos'})
    año = soup.find('td', {'headers': 'hdCursos'})
    proyectoDocente = soup.find('a', string='Proyecto docente [2022/23]')

    # Create a dictionary for the current subject
    subject = {
        'id': asignatura_number,
        'asignatura': asignatura.text,
        'tipo': tipo.text,
        'titulacion': titulacion.text,
        'departamento': departamento.text,
        'duracion': duracion.text,
        'creditos': creditos.text,
        'año': año.text,
        'proyectoDocente': proyectoDocente.get('href')
    }

    # Append the subject dictionary to the subjects list
    data.append(subject)

    # Print the extracted information
    '''
    print(f'Asignatura: {asignatura.text}\nTipo: {tipo.text}\nTitulación: {titulacion.text}')
    print(f'Departamento: {departamento.text}\nDuracion: {duracion.text}\nCréditos: {creditos.text}\nAño: {año.text}')
    print(f'Proyecto Docente: {subject["proyectoDocente"]}\n')
    '''

with open('json/subjects.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=4, ensure_ascii=False, sort_keys=True)

print('Done')
