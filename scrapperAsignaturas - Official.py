import requests
import csv
from bs4 import BeautifulSoup
import pandas as pd
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

    # Create a dictionary for the current course
    course = {
        'id': asignatura_number,
        'asignatura': asignatura.text,
        'tipo': tipo.text,
        'titulacion': titulacion.text,
        'departamento': departamento.text,
        'duracion': duracion.text,
        'creditos': creditos.text,
        'año': año.text
    }

    # Append the course dictionary to the courses list
    data.append(course)

    # Print the extracted information
    print(f'Asignatura: {asignatura.text}\nTipo: {tipo.text}\nTitulación: {titulacion.text}\n')
    print(f'Departamento: {departamento.text}\nDuracion: {duracion.text}\nCréditos: {creditos.text}\nAño: {año.text}\n')

with open('courses.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=4, ensure_ascii=False, sort_keys=True) 