import csv

import requests
from bs4 import BeautifulSoup
import re
import lxml


def leer_informacion(direccion):
    '''lee la información de un profesor'''
    session = requests.Session()
    page = session.get(direccion)
    soup = BeautifulSoup(page.text, 'lxml')

    nombre = soup.find('span', {'class': 'texto'})
    print(nombre.get_text())

    datos = []
    cuerpo3 = soup.findAll('td', class_='cuerpo3')
    for data in cuerpo3:
        if data.find('a', href=re.compile('^http://www.dis.ulpgc.es/profesorado/horariodocencia.asp\?id')):
            continue
        if data.find('img'):
            continue

        #print(data.strip())
        print(data.text.strip())


#---------------------------------PROGRAMA PRINCIPAL----------------------------


url = 'https://www.dis.ulpgc.es/profesorado/'
session = requests.Session()
page = session.get(url)
soup = BeautifulSoup(page.text, 'lxml')

external_links = []

links = soup.findAll('a')

with open('profesores.csv', 'w', newline='') as csvfile:

    writer = csv.writer(csvfile)
    writer.writerow([])

    for link in links:
        url = link.get('href')
        if url.startswith('javascript:'):
            match = re.search(r"\'(.+?)\'", url)
            if match:
                url = match.group(1)
        if 'ficha' in url:
            url = 'https://www.dis.ulpgc.es/profesorado/' + url
            leer_informacion(url)


