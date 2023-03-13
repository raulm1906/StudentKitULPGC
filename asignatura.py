import requests
import csv
from bs4 import BeautifulSoup
import pandas as pd

# === ALGEBRA Y GEOMETRIA
url_AG = 'https://www2.ulpgc.es/plan-estudio/4008/41/40951'
html_AG = requests.get(url_AG)
content_AG = html_AG.content
soup = BeautifulSoup(content_AG,"lxml")

asignatura_AG = soup.find("caption",{"class":"separaMenu"})
tipo_AG = soup.find("td",{"headers":"hdTipo"})
titulacion_AG = soup.find("td",{"headers":"hdTitulacion"})
departamento_AG = soup.find("td",{"headers":"hdDepartamento"})
duracion_AG = soup.find("td",{"headers":"hdDuracion"})
creditos_AG = soup.find("td",{"headers":"hdCreditos"})
año_AG = soup.find("td",{"headers":"hdCursos"})

print("Asignatura:", asignatura_AG.text, "\n", "Tipo:", tipo_AG.text, "\n", "Titulación:", titulacion_AG.text, "\n")
print("Departamento:", departamento_AG.text, "\n", "Duracion:", duracion_AG.text, "\n", "Créditos:", creditos_AG.text, "\n", "Año:", año_AG.text, "\n")


# === MATEMÁTICA DISCRETA ===
url_MD = 'https://www2.ulpgc.es/plan-estudio/4008/41/40952'
html_MD = requests.get(url_MD)
content_MD = html_MD.content
soup = BeautifulSoup(content_MD,"lxml")

asignatura_MD = soup.find("caption",{"class":"separaMenu"})
tipo_MD = soup.find("td",{"headers":"hdTipo"})
titulacion_MD = soup.find("td",{"headers":"hdTitulacion"})
departamento_MD = soup.find("td",{"headers":"hdDepartamento"})
duracion_MD = soup.find("td",{"headers":"hdDuracion"})
creditos_MD = soup.find("td",{"headers":"hdCreditos"})
año_MD = soup.find("td",{"headers":"hdCursos"})

print("Asignatura:", asignatura_MD.text, "\n", "Tipo:", tipo_MD.text, "\n", "Titulación:", titulacion_MD.text, "\n")
print("Departamento:", departamento_MD.text, "\n", "Duracion:", duracion_MD.text, "\n", "Créditos:", creditos_MD.text, "\n", "Año:", año_MD.text, "\n")


# === FUNDAMENTOS DE PROGRAMACIÓN I ===
url_FPI = 'https://www2.ulpgc.es/plan-estudio/4008/41/40953'
html_FPI = requests.get(url_FPI)
content_FPI = html_FPI.content
soup = BeautifulSoup(content_FPI,"lxml")

asignatura_FPI = soup.find("caption",{"class":"separaMenu"})
tipo_FPI = soup.find("td",{"headers":"hdTipo"})
titulacion_FPI = soup.find("td",{"headers":"hdTitulacion"})
departamento_FPI = soup.find("td",{"headers":"hdDepartamento"})
duracion_FPI = soup.find("td",{"headers":"hdDuracion"})
creditos_FPI = soup.find("td",{"headers":"hdCreditos"})
año_FPI = soup.find("td",{"headers":"hdCursos"})

print("Asignatura:", asignatura_FPI.text, "\n", "Tipo:", tipo_FPI.text, "\n", "Titulación:", titulacion_FPI.text, "\n")
print("Departamento:", departamento_FPI.text, "\n", "Duracion:", duracion_FPI.text, "\n", "Créditos:", creditos_FPI.text, "\n", "Año:", año_FPI.text, "\n")


# === FUNDAMENTOS DE COMPUTADORES ===
url_FC = 'https://www2.ulpgc.es/plan-estudio/4008/41/40954'
html_FC = requests.get(url_FC)
content_FC = html_FC.content
soup = BeautifulSoup(content_FC,"lxml")

asignatura_FC = soup.find("caption",{"class":"separaMenu"})
tipo_FC = soup.find("td",{"headers":"hdTipo"})
titulacion_FC = soup.find("td",{"headers":"hdTitulacion"})
departamento_FC = soup.find("td",{"headers":"hdDepartamento"})
duracion_FC = soup.find("td",{"headers":"hdDuracion"})
creditos_FC = soup.find("td",{"headers":"hdCreditos"})
año_FC = soup.find("td",{"headers":"hdCursos"})

print("Asignatura:", asignatura_FC.text, "\n", "Tipo:", tipo_FC.text, "\n", "Titulación:", titulacion_FC.text, "\n")
print("Departamento:", departamento_FC.text, "\n", "Duracion:", duracion_FC.text, "\n", "Créditos:", creditos_FC.text, "\n", "Año:", año_FC.text, "\n")


# === HABILIDADES PROFESIONALES PARA INGENIEROS ===
url_HPI = 'https://www2.ulpgc.es/plan-estudio/4008/41/40955'
html_HPI = requests.get(url_HPI)
content_HPI = html_HPI.content
soup = BeautifulSoup(content_HPI,"lxml")

asignatura_HPI = soup.find("caption",{"class":"separaMenu"})
tipo_HPI = soup.find("td",{"headers":"hdTipo"})
titulacion_HPI = soup.find("td",{"headers":"hdTitulacion"})
departamento_HPI = soup.find("td",{"headers":"hdDepartamento"})
duracion_HPI = soup.find("td",{"headers":"hdDuracion"})
creditos_HPI = soup.find("td",{"headers":"hdCreditos"})
año_HPI = soup.find("td",{"headers":"hdCursos"})

print("Asignatura:", asignatura_HPI.text, "\n", "Tipo:", tipo_HPI.text, "\n", "Titulación:", titulacion_HPI.text, "\n")
print("Departamento:", departamento_HPI.text, "\n", "Duracion:", duracion_HPI.text, "\n", "Créditos:", creditos_HPI.text, "\n", "Año:", año_HPI.text, "\n")


# === MATEMÁTICAS PARA LA COMPUTACIÓN ===
url_MC = 'https://www2.ulpgc.es/plan-estudio/4008/41/40956'
html_MC = requests.get(url_MC)
content_MC = html_MC.content
soup = BeautifulSoup(content_MC,"lxml")

asignatura_MC = soup.find("caption",{"class":"separaMenu"})
tipo_MC = soup.find("td",{"headers":"hdTipo"})
titulacion_MC = soup.find("td",{"headers":"hdTitulacion"})
departamento_MC = soup.find("td",{"headers":"hdDepartamento"})
duracion_MC = soup.find("td",{"headers":"hdDuracion"})
creditos_MC = soup.find("td",{"headers":"hdCreditos"})
año_MC = soup.find("td",{"headers":"hdCursos"})

print("Asignatura:", asignatura_MC.text, "\n", "Tipo:", tipo_MC.text, "\n", "Titulación:", titulacion_MC.text, "\n")
print("Departamento:", departamento_MC.text, "\n", "Duracion:", duracion_MC.text, "\n", "Créditos:", creditos_MC.text, "\n", "Año:", año_MC.text, "\n")


# === FUNDAMENTOS FÍSICOS DE LA INFORMÁTICA ===
url_FFI = 'https://www2.ulpgc.es/plan-estudio/4008/41/40957'
html_FFI = requests.get(url_FFI)
content_FFI = html_FFI.content
soup = BeautifulSoup(content_FFI,"lxml")

asignatura_FFI = soup.find("caption",{"class":"separaMenu"})
tipo_FFI = soup.find("td",{"headers":"hdTipo"})
titulacion_FFI = soup.find("td",{"headers":"hdTitulacion"})
departamento_FFI = soup.find("td",{"headers":"hdDepartamento"})
duracion_FFI = soup.find("td",{"headers":"hdDuracion"})
creditos_FFI = soup.find("td",{"headers":"hdCreditos"})
año_FFI = soup.find("td",{"headers":"hdCursos"})

print("Asignatura:", asignatura_FFI.text, "\n", "Tipo:", tipo_FFI.text, "\n", "Titulación:", titulacion_FFI.text, "\n")
print("Departamento:", departamento_FFI.text, "\n", "Duracion:", duracion_FFI.text, "\n", "Créditos:", creditos_FFI.text, "\n", "Año:", año_FFI.text, "\n")


# === FUNDAMENTOS DE PROGRAMACIÓN II ===
url_FP2 = 'https://www2.ulpgc.es/plan-estudio/4008/41/40958'
html_FP2 = requests.get(url_FP2)
content_FP2 = html_FP2.content
soup = BeautifulSoup(content_FP2,"lxml")

asignatura_FP2 = soup.find("caption",{"class":"separaMenu"})
tipo_FP2 = soup.find("td",{"headers":"hdTipo"})
titulacion_FP2 = soup.find("td",{"headers":"hdTitulacion"})
departamento_FP2 = soup.find("td",{"headers":"hdDepartamento"})
duracion_FP2 = soup.find("td",{"headers":"hdDuracion"})
creditos_FP2 = soup.find("td",{"headers":"hdCreditos"})
año_FP2 = soup.find("td",{"headers":"hdCursos"})

print("Asignatura:", asignatura_FP2.text, "\n", "Tipo:", tipo_FP2.text, "\n", "Titulación:", titulacion_FP2.text, "\n")
print("Departamento:", departamento_FP2.text, "\n", "Duracion:", duracion_FP2.text, "\n", "Créditos:", creditos_FP2.text, "\n", "Año:", año_FP2.text, "\n")


# === ESTRUCTURA DE COMPUTADORES ===
url_EC = 'https://www2.ulpgc.es/plan-estudio/4008/41/40959'
html_EC = requests.get(url_EC)
content_EC = html_EC.content
soup = BeautifulSoup(content_EC,"lxml")

asignatura_EC = soup.find("caption",{"class":"separaMenu"})
tipo_EC = soup.find("td",{"headers":"hdTipo"})
titulacion_EC = soup.find("td",{"headers":"hdTitulacion"})
departamento_EC = soup.find("td",{"headers":"hdDepartamento"})
duracion_EC = soup.find("td",{"headers":"hdDuracion"})
creditos_EC = soup.find("td",{"headers":"hdCreditos"})
año_EC = soup.find("td",{"headers":"hdCursos"})

print("Asignatura:", asignatura_EC.text, "\n", "Tipo:", tipo_EC.text, "\n", "Titulación:", titulacion_EC.text, "\n")
print("Departamento:", departamento_EC.text, "\n", "Duracion:", duracion_EC.text, "\n", "Créditos:", creditos_EC.text, "\n", "Año:", año_EC.text, "\n")


# === LA EMPRESA Y SUS PROCESOS ===
url_EP = 'https://www2.ulpgc.es/plan-estudio/4008/41/40960'
html_EP = requests.get(url_EP)
content_EP = html_EP.content
soup = BeautifulSoup(content_EP,"lxml")

asignatura_EP = soup.find("caption",{"class":"separaMenu"})
tipo_EP = soup.find("td",{"headers":"hdTipo"})
titulacion_EP = soup.find("td",{"headers":"hdTitulacion"})
departamento_EP = soup.find("td",{"headers":"hdDepartamento"})
duracion_EP = soup.find("td",{"headers":"hdDuracion"})
creditos_EP = soup.find("td",{"headers":"hdCreditos"})
año_EP = soup.find("td",{"headers":"hdCursos"})

print("Asignatura:", asignatura_EP.text, "\n", "Tipo:", tipo_EP.text, "\n", "Titulación:", titulacion_EP.text, "\n")
print("Departamento:", departamento_EP.text, "\n", "Duracion:", duracion_EP.text, "\n", "Créditos:", creditos_EP.text, "\n", "Año:", año_EP.text, "\n")





# --- SEGUNDO CURSO ---

# === MÉTODOS ESTADÍSTICOS ===
url_ME = 'https://www2.ulpgc.es/plan-estudio/4008/41/40961'
html_ME = requests.get(url_ME)
content_ME = html_ME.content
soup = BeautifulSoup(content_ME,"lxml")

asignatura_ME = soup.find("caption",{"class":"separaMenu"})
tipo_ME = soup.find("td",{"headers":"hdTipo"})
titulacion_ME = soup.find("td",{"headers":"hdTitulacion"})
departamento_ME = soup.find("td",{"headers":"hdDepartamento"})
duracion_ME = soup.find("td",{"headers":"hdDuracion"})
creditos_ME = soup.find("td",{"headers":"hdCreditos"})
año_ME = soup.find("td",{"headers":"hdCursos"})

print("Asignatura:", asignatura_ME.text, "\n", "Tipo:", tipo_ME.text, "\n", "Titulación:", titulacion_ME.text, "\n")
print("Departamento:", departamento_ME.text, "\n", "Duracion:", duracion_ME.text, "\n", "Créditos:", creditos_ME.text, "\n", "Año:", año_ME.text, "\n")

# === ALGORITMOS Y PROGRAMACIÓN ===
url_AP = 'https://www2.ulpgc.es/plan-estudio/4008/41/40962'
html_AP = requests.get(url_AP)
content_AP = html_AP.content
soup = BeautifulSoup(content_AP,"lxml")

asignatura_AP = soup.find("caption",{"class":"separaMenu"})
tipo_AP = soup.find("td",{"headers":"hdTipo"})
titulacion_AP = soup.find("td",{"headers":"hdTitulacion"})
departamento_AP = soup.find("td",{"headers":"hdDepartamento"})
duracion_AP = soup.find("td",{"headers":"hdDuracion"})
creditos_AP = soup.find("td",{"headers":"hdCreditos"})
año_AP = soup.find("td",{"headers":"hdCursos"})

print("Asignatura:", asignatura_AP.text, "\n", "Tipo:", tipo_AP.text, "\n", "Titulación:", titulacion_AP.text, "\n")
print("Departamento:", departamento_AP.text, "\n", "Duracion:", duracion_AP.text, "\n", "Créditos:", creditos_AP.text, "\n", "Año:", año_AP.text, "\n")


# === TECNOLOGÍAS DE PROGRAMACIÓN ===
url_TP = 'https://www2.ulpgc.es/plan-estudio/4008/41/40963'
html_TP = requests.get(url_TP)
content_TP = html_TP.content
soup = BeautifulSoup(content_TP,"lxml")

asignatura_TP = soup.find("caption",{"class":"separaMenu"})
tipo_TP = soup.find("td",{"headers":"hdTipo"})
titulacion_TP = soup.find("td",{"headers":"hdTitulacion"})
departamento_TP = soup.find("td",{"headers":"hdDepartamento"})
duracion_TP = soup.find("td",{"headers":"hdDuracion"})
creditos_TP = soup.find("td",{"headers":"hdCreditos"})
año_TP = soup.find("td",{"headers":"hdCursos"})

print("Asignatura:", asignatura_TP.text, "\n", "Tipo:", tipo_TP.text, "\n", "Titulación:", titulacion_TP.text, "\n")
print("Departamento:", departamento_TP.text, "\n", "Duracion:", duracion_TP.text, "\n", "Créditos:", creditos_TP.text, "\n", "Año:", año_TP.text, "\n")


# === PERIFÉRICOS E INTERFACES ===
url_PI = 'https://www2.ulpgc.es/plan-estudio/4008/41/40964'
html_PI = requests.get(url_PI)
content_PI = html_PI.content
soup = BeautifulSoup(content_PI,"lxml")

asignatura_PI = soup.find("caption",{"class":"separaMenu"})
tipo_PI = soup.find("td",{"headers":"hdTipo"})
titulacion_PI = soup.find("td",{"headers":"hdTitulacion"})
departamento_PI = soup.find("td",{"headers":"hdDepartamento"})
duracion_PI = soup.find("td",{"headers":"hdDuracion"})
creditos_PI = soup.find("td",{"headers":"hdCreditos"})
año_PI = soup.find("td",{"headers":"hdCursos"})

print("Asignatura:", asignatura_PI.text, "\n", "Tipo:", tipo_PI.text, "\n", "Titulación:", titulacion_PI.text, "\n")
print("Departamento:", departamento_PI.text, "\n", "Duracion:", duracion_PI.text, "\n", "Créditos:", creditos_PI.text, "\n", "Año:", año_PI.text, "\n")


# === INGENIERÍA DEL SOFTWARE I ===
url_IS1 = 'https://www2.ulpgc.es/plan-estudio/4008/41/40965'
html_IS1 = requests.get(url_IS1)
content_IS1 = html_IS1.content
soup = BeautifulSoup(content_IS1,"lxml")

asignatura_IS1 = soup.find("caption",{"class":"separaMenu"})
tipo_IS1 = soup.find("td",{"headers":"hdTipo"})
titulacion_IS1 = soup.find("td",{"headers":"hdTitulacion"})
departamento_IS1 = soup.find("td",{"headers":"hdDepartamento"})
duracion_IS1 = soup.find("td",{"headers":"hdDuracion"})
creditos_IS1 = soup.find("td",{"headers":"hdCreditos"})
año_IS1 = soup.find("td",{"headers":"hdCursos"})

print("Asignatura:", asignatura_IS1.text, "\n", "Tipo:", tipo_IS1.text, "\n", "Titulación:", titulacion_IS1.text, "\n")
print("Departamento:", departamento_IS1.text, "\n", "Duracion:", duracion_IS1.text, "\n", "Créditos:", creditos_IS1.text, "\n", "Año:", año_IS1.text, "\n")


# === MÉTODOS NUMÉRICOS ===
url_MN = 'https://www2.ulpgc.es/plan-estudio/4008/41/40966'
html_MN = requests.get(url_MN)
content_MN = html_MN.content
soup = BeautifulSoup(content_MN,"lxml")

asignatura_MN = soup.find("caption",{"class":"separaMenu"})
tipo_MN = soup.find("td",{"headers":"hdTipo"})
titulacion_MN = soup.find("td",{"headers":"hdTitulacion"})
departamento_MN = soup.find("td",{"headers":"hdDepartamento"})
duracion_MN = soup.find("td",{"headers":"hdDuracion"})
creditos_MN = soup.find("td",{"headers":"hdCreditos"})
año_MN = soup.find("td",{"headers":"hdCursos"})

print("Asignatura:", asignatura_MN.text, "\n", "Tipo:", tipo_MN.text, "\n", "Titulación:", titulacion_MN.text, "\n")
print("Departamento:", departamento_MN.text, "\n", "Duracion:", duracion_MN.text, "\n", "Créditos:", creditos_MN.text, "\n", "Año:", año_MN.text, "\n")


# === ESTRUCTURAS DE DATOS Y PROGRAMACIÓN ===
url_EDP = 'https://www2.ulpgc.es/plan-estudio/4008/41/40967'
html_EDP = requests.get(url_EDP)
content_EDP = html_EDP.content
soup = BeautifulSoup(content_EDP,"lxml")

asignatura_EDP = soup.find("caption",{"class":"separaMenu"})
tipo_EDP = soup.find("td",{"headers":"hdTipo"})
titulacion_EDP = soup.find("td",{"headers":"hdTitulacion"})
departamento_EDP = soup.find("td",{"headers":"hdDepartamento"})
duracion_EDP = soup.find("td",{"headers":"hdDuracion"})
creditos_EDP = soup.find("td",{"headers":"hdCreditos"})
año_EDP = soup.find("td",{"headers":"hdCursos"})

print("Asignatura:", asignatura_EDP.text, "\n", "Tipo:", tipo_EDP.text, "\n", "Titulación:", titulacion_EDP.text, "\n")
print("Departamento:", departamento_EDP.text, "\n", "Duracion:", duracion_EDP.text, "\n", "Créditos:", creditos_EDP.text, "\n", "Año:", año_EDP.text, "\n")


# === BASES DE DATOS I ===
url_BD1 = 'https://www2.ulpgc.es/plan-estudio/4008/41/40968'
html_BD1 = requests.get(url_BD1)
content_BD1 = html_BD1.content
soup = BeautifulSoup(content_BD1,"lxml")

asignatura_BD1 = soup.find("caption",{"class":"separaMenu"})
tipo_BD1 = soup.find("td",{"headers":"hdTipo"})
titulacion_BD1 = soup.find("td",{"headers":"hdTitulacion"})
departamento_BD1 = soup.find("td",{"headers":"hdDepartamento"})
duracion_BD1 = soup.find("td",{"headers":"hdDuracion"})
creditos_BD1 = soup.find("td",{"headers":"hdCreditos"})
año_BD1 = soup.find("td",{"headers":"hdCursos"})

print("Asignatura:", asignatura_BD1.text, "\n", "Tipo:", tipo_BD1.text, "\n", "Titulación:", titulacion_BD1.text, "\n")
print("Departamento:", departamento_BD1.text, "\n", "Duracion:", duracion_BD1.text, "\n", "Créditos:", creditos_BD1.text, "\n", "Año:", año_BD1.text, "\n")


# === ARQUITECTURA DE COMPUTADORES ===
url_AC = 'https://www2.ulpgc.es/plan-estudio/4008/41/40969'
html_AC = requests.get(url_AC)
content_AC = html_AC.content
soup = BeautifulSoup(content_AC,"lxml")

asignatura_AC = soup.find("caption",{"class":"separaMenu"})
tipo_AC = soup.find("td",{"headers":"hdTipo"})
titulacion_AC = soup.find("td",{"headers":"hdTitulacion"})
departamento_AC = soup.find("td",{"headers":"hdDepartamento"})
duracion_AC = soup.find("td",{"headers":"hdDuracion"})
creditos_AC = soup.find("td",{"headers":"hdCreditos"})
año_AC = soup.find("td",{"headers":"hdCursos"})

print("Asignatura:", asignatura_AC.text, "\n", "Tipo:", tipo_AC.text, "\n", "Titulación:", titulacion_AC.text, "\n")
print("Departamento:", departamento_AC.text, "\n", "Duracion:", duracion_AC.text, "\n", "Créditos:", creditos_AC.text, "\n", "Año:", año_AC.text, "\n")


# === FUNDAMENTOS DE LOS SISTEMAS OPERATIVOS ===
url_FSO = 'https://www2.ulpgc.es/plan-estudio/4008/41/40970'
html_FSO = requests.get(url_FSO)
content_FSO = html_FSO.content
soup = BeautifulSoup(content_FSO,"lxml")

asignatura_FSO = soup.find("caption",{"class":"separaMenu"})
tipo_FSO = soup.find("td",{"headers":"hdTipo"})
titulacion_FSO = soup.find("td",{"headers":"hdTitulacion"})
departamento_FSO = soup.find("td",{"headers":"hdDepartamento"})
duracion_FSO = soup.find("td",{"headers":"hdDuracion"})
creditos_FSO = soup.find("td",{"headers":"hdCreditos"})
año_FSO = soup.find("td",{"headers":"hdCursos"})

print("Asignatura:", asignatura_FSO.text, "\n", "Tipo:", tipo_FSO.text, "\n", "Titulación:", titulacion_FSO.text, "\n")
print("Departamento:", departamento_FSO.text, "\n", "Duracion:", duracion_FSO.text, "\n", "Créditos:", creditos_FSO.text, "\n", "Año:", año_FSO.text, "\n")





# --- TERCER CURSO ---

# === REDES DE COMPUTADORES ===
url_RC = 'https://www2.ulpgc.es/plan-estudio/4008/41/40971'
html_RC = requests.get(url_RC)
content_RC = html_RC.content
soup = BeautifulSoup(content_RC,"lxml")

asignatura_RC = soup.find("caption",{"class":"separaMenu"})
tipo_RC = soup.find("td",{"headers":"hdTipo"})
titulacion_RC = soup.find("td",{"headers":"hdTitulacion"})
departamento_RC = soup.find("td",{"headers":"hdDepartamento"})
duracion_RC = soup.find("td",{"headers":"hdDuracion"})
creditos_RC = soup.find("td",{"headers":"hdCreditos"})
año_RC = soup.find("td",{"headers":"hdCursos"})

print("Asignatura:", asignatura_RC.text, "\n", "Tipo:", tipo_RC.text, "\n", "Titulación:", titulacion_RC.text, "\n")
print("Departamento:", departamento_RC.text, "\n", "Duracion:", duracion_RC.text, "\n", "Créditos:", creditos_RC.text, "\n", "Año:", año_RC.text, "\n")


# === ADMINISTRACIÓN DE SISTEMAS OPERATIVOS ===
url_ASO = 'https://www2.ulpgc.es/plan-estudio/4008/41/40972'
html_ASO = requests.get(url_ASO)
content_ASO = html_ASO.content
soup = BeautifulSoup(content_ASO,"lxml")

asignatura_ASO = soup.find("caption",{"class":"separaMenu"})
tipo_ASO = soup.find("td",{"headers":"hdTipo"})
titulacion_ASO = soup.find("td",{"headers":"hdTitulacion"})
departamento_ASO = soup.find("td",{"headers":"hdDepartamento"})
duracion_ASO = soup.find("td",{"headers":"hdDuracion"})
creditos_ASO = soup.find("td",{"headers":"hdCreditos"})
año_ASO = soup.find("td",{"headers":"hdCursos"})

print("Asignatura:", asignatura_ASO.text, "\n", "Tipo:", tipo_ASO.text, "\n", "Titulación:", titulacion_ASO.text, "\n")
print("Departamento:", departamento_ASO.text, "\n", "Duracion:", duracion_ASO.text, "\n", "Créditos:", creditos_ASO.text, "\n", "Año:", año_ASO.text, "\n")


# === BASES DE DATOS II ===
url_BD2 = 'https://www2.ulpgc.es/plan-estudio/4008/41/40973'
html_BD2 = requests.get(url_BD2)
content_BD2 = html_BD2.content
soup = BeautifulSoup(content_BD2,"lxml")

asignatura_BD2 = soup.find("caption",{"class":"separaMenu"})
tipo_BD2 = soup.find("td",{"headers":"hdTipo"})
titulacion_BD2 = soup.find("td",{"headers":"hdTitulacion"})
departamento_BD2 = soup.find("td",{"headers":"hdDepartamento"})
duracion_BD2 = soup.find("td",{"headers":"hdDuracion"})
creditos_BD2 = soup.find("td",{"headers":"hdCreditos"})
año_BD2 = soup.find("td",{"headers":"hdCursos"})

print("Asignatura:", asignatura_BD2.text, "\n", "Tipo:", tipo_BD2.text, "\n", "Titulación:", titulacion_BD2.text, "\n")
print("Departamento:", departamento_BD2.text, "\n", "Duracion:", duracion_BD2.text, "\n", "Créditos:", creditos_BD2.text, "\n", "Año:", año_BD2.text, "\n")


# === FUNDAMENTOS DE LOS SISTEMAS INTELIGENTES ===
url_FSI = 'https://www2.ulpgc.es/plan-estudio/4008/41/40974'
html_FSI = requests.get(url_FSI)
content_FSI = html_FSI.content
soup = BeautifulSoup(content_FSI,"lxml")

asignatura_FSI = soup.find("caption",{"class":"separaMenu"})
tipo_FSI = soup.find("td",{"headers":"hdTipo"})
titulacion_FSI = soup.find("td",{"headers":"hdTitulacion"})
departamento_FSI = soup.find("td",{"headers":"hdDepartamento"})
duracion_FSI = soup.find("td",{"headers":"hdDuracion"})
creditos_FSI = soup.find("td",{"headers":"hdCreditos"})
año_FSI = soup.find("td",{"headers":"hdCursos"})

print("Asignatura:", asignatura_FSI.text, "\n", "Tipo:", tipo_FSI.text, "\n", "Titulación:", titulacion_FSI.text, "\n")
print("Departamento:", departamento_FSI.text, "\n", "Duracion:", duracion_FSI.text, "\n", "Créditos:", creditos_FSI.text, "\n", "Año:", año_FSI.text, "\n")


# === INGENIERÍA DEL SOFTWARE II ===
url_IS2 = 'https://www2.ulpgc.es/plan-estudio/4008/41/40975'
html_IS2 = requests.get(url_IS2)
content_IS2 = html_IS2.content
soup = BeautifulSoup(content_IS2,"lxml")

asignatura_IS2 = soup.find("caption",{"class":"separaMenu"})
tipo_IS2 = soup.find("td",{"headers":"hdTipo"})
titulacion_IS2 = soup.find("td",{"headers":"hdTitulacion"})
departamento_IS2 = soup.find("td",{"headers":"hdDepartamento"})
duracion_IS2 = soup.find("td",{"headers":"hdDuracion"})
creditos_IS2 = soup.find("td",{"headers":"hdCreditos"})
año_IS2 = soup.find("td",{"headers":"hdCursos"})

print("Asignatura:", asignatura_IS2.text, "\n", "Tipo:", tipo_IS2.text, "\n", "Titulación:", titulacion_IS2.text, "\n")
print("Departamento:", departamento_IS2.text, "\n", "Duracion:", duracion_IS2.text, "\n", "Créditos:", creditos_IS2.text, "\n", "Año:", año_IS2.text, "\n")


# === ADMINISTRACION DE SERVICIOS EN RED ===
url_ASR = 'https://www2.ulpgc.es/plan-estudio/4008/41/40976'
html_ASR = requests.get(url_ASR)
content_ASR = html_ASR.content
soup = BeautifulSoup(content_ASR,"lxml")

asignatura_ASR = soup.find("caption",{"class":"separaMenu"})
tipo_ASR = soup.find("td",{"headers":"hdTipo"})
titulacion_ASR = soup.find("td",{"headers":"hdTitulacion"})
departamento_ASR = soup.find("td",{"headers":"hdDepartamento"})
duracion_ASR = soup.find("td",{"headers":"hdDuracion"})
creditos_ASR = soup.find("td",{"headers":"hdCreditos"})
año_ASR = soup.find("td",{"headers":"hdCursos"})

print("Asignatura:", asignatura_ASR.text, "\n", "Tipo:", tipo_ASR.text, "\n", "Titulación:", titulacion_ASR.text, "\n")
print("Departamento:", departamento_ASR.text, "\n", "Duracion:", duracion_ASR.text, "\n", "Créditos:", creditos_ASR.text, "\n", "Año:", año_ASR.text, "\n")


# === VIRTUALIZACIÓN Y PROCESAMIENTO DISTRIBUIDO ===
url_VPD = 'https://www2.ulpgc.es/plan-estudio/4008/41/40977'
html_VPD = requests.get(url_VPD)
content_VPD = html_VPD.content
soup = BeautifulSoup(content_VPD,"lxml")

asignatura_VPD = soup.find("caption",{"class":"separaMenu"})
tipo_VPD = soup.find("td",{"headers":"hdTipo"})
titulacion_VPD = soup.find("td",{"headers":"hdTitulacion"})
departamento_VPD = soup.find("td",{"headers":"hdDepartamento"})
duracion_VPD = soup.find("td",{"headers":"hdDuracion"})
creditos_VPD = soup.find("td",{"headers":"hdCreditos"})
año_VPD = soup.find("td",{"headers":"hdCursos"})

print("Asignatura:", asignatura_VPD.text, "\n", "Tipo:", tipo_VPD.text, "\n", "Titulación:", titulacion_VPD.text, "\n")
print("Departamento:", departamento_VPD.text, "\n", "Duracion:", duracion_VPD.text, "\n", "Créditos:", creditos_VPD.text, "\n", "Año:", año_VPD.text, "\n")


# === PROGRAMACIÓN WEB Y MÓVIL ===
url_PWM = 'https://www2.ulpgc.es/plan-estudio/4008/41/40978'
html_PWM = requests.get(url_PWM)
content_PWM = html_PWM.content
soup = BeautifulSoup(content_PWM,"lxml")

asignatura_PWM = soup.find("caption",{"class":"separaMenu"})
tipo_PWM = soup.find("td",{"headers":"hdTipo"})
titulacion_PWM = soup.find("td",{"headers":"hdTitulacion"})
departamento_PWM = soup.find("td",{"headers":"hdDepartamento"})
duracion_PWM = soup.find("td",{"headers":"hdDuracion"})
creditos_PWM = soup.find("td",{"headers":"hdCreditos"})
año_PWM = soup.find("td",{"headers":"hdCursos"})

print("Asignatura:", asignatura_PWM.text, "\n", "Tipo:", tipo_PWM.text, "\n", "Titulación:", titulacion_PWM.text, "\n")
print("Departamento:", departamento_PWM.text, "\n", "Duracion:", duracion_PWM.text, "\n", "Créditos:", creditos_PWM.text, "\n", "Año:", año_PWM.text, "\n")


# === PRODUCCIÓN DE SOFTWARE ===
url_PS = 'https://www2.ulpgc.es/plan-estudio/4008/41/40979'
html_PS = requests.get(url_PS)
content_PS = html_PS.content
soup = BeautifulSoup(content_PS,"lxml")

asignatura_PS = soup.find("caption",{"class":"separaMenu"})
tipo_PS = soup.find("td",{"headers":"hdTipo"})
titulacion_PS = soup.find("td",{"headers":"hdTitulacion"})
departamento_PS = soup.find("td",{"headers":"hdDepartamento"})
duracion_PS = soup.find("td",{"headers":"hdDuracion"})
creditos_PS = soup.find("td",{"headers":"hdCreditos"})
año_PS = soup.find("td",{"headers":"hdCursos"})

print("Asignatura:", asignatura_PS.text, "\n", "Tipo:", tipo_PS.text, "\n", "Titulación:", titulacion_PS.text, "\n")
print("Departamento:", departamento_PS.text, "\n", "Duracion:", duracion_PS.text, "\n", "Créditos:", creditos_PS.text, "\n", "Año:", año_PS.text, "\n")





# --- CUARTO CURSO ---

# === INFORMÁTICA GRÁFICA ===
url_IG = 'https://www2.ulpgc.es/plan-estudio/4008/41/40980'
html_IG = requests.get(url_IG)
content_IG = html_IG.content
soup = BeautifulSoup(content_IG,"lxml")

asignatura_IG = soup.find("caption",{"class":"separaMenu"})
tipo_IG = soup.find("td",{"headers":"hdTipo"})
titulacion_IG = soup.find("td",{"headers":"hdTitulacion"})
departamento_IG = soup.find("td",{"headers":"hdDepartamento"})
duracion_IG = soup.find("td",{"headers":"hdDuracion"})
creditos_IG = soup.find("td",{"headers":"hdCreditos"})
año_IG = soup.find("td",{"headers":"hdCursos"})

print("Asignatura:", asignatura_IG.text, "\n", "Tipo:", tipo_IG.text, "\n", "Titulación:", titulacion_IG.text, "\n")
print("Departamento:", departamento_IG.text, "\n", "Duracion:", duracion_IG.text, "\n", "Créditos:", creditos_IG.text, "\n", "Año:", año_IG.text, "\n")


# === SISTEMAS ROBÓTICOS AUTÓNOMOS ===
url_SRA = 'https://www2.ulpgc.es/plan-estudio/4008/41/40981'
html_SRA = requests.get(url_SRA)
content_SRA = html_SRA.content
soup = BeautifulSoup(content_SRA,"lxml")

asignatura_SRA = soup.find("caption",{"class":"separaMenu"})
tipo_SRA = soup.find("td",{"headers":"hdTipo"})
titulacion_SRA = soup.find("td",{"headers":"hdTitulacion"})
departamento_SRA = soup.find("td",{"headers":"hdDepartamento"})
duracion_SRA = soup.find("td",{"headers":"hdDuracion"})
creditos_SRA = soup.find("td",{"headers":"hdCreditos"})
año_SRA = soup.find("td",{"headers":"hdCursos"})

print("Asignatura:", asignatura_SRA.text, "\n", "Tipo:", tipo_SRA.text, "\n", "Titulación:", titulacion_SRA.text, "\n")
print("Departamento:", departamento_SRA.text, "\n", "Duracion:", duracion_SRA.text, "\n", "Créditos:", creditos_SRA.text, "\n", "Año:", año_SRA.text, "\n")


# === VISIÓN POR COMPUTADOR ===
url_VC = 'https://www2.ulpgc.es/plan-estudio/4008/41/40982'
html_VC = requests.get(url_VC)
content_VC = html_VC.content
soup = BeautifulSoup(content_VC,"lxml")

asignatura_VC = soup.find("caption",{"class":"separaMenu"})
tipo_VC = soup.find("td",{"headers":"hdTipo"})
titulacion_VC = soup.find("td",{"headers":"hdTitulacion"})
departamento_VC = soup.find("td",{"headers":"hdDepartamento"})
duracion_VC = soup.find("td",{"headers":"hdDuracion"})
creditos_VC = soup.find("td",{"headers":"hdCreditos"})
año_VC = soup.find("td",{"headers":"hdCursos"})

print("Asignatura:", asignatura_VC.text, "\n", "Tipo:", tipo_VC.text, "\n", "Titulación:", titulacion_VC.text, "\n")
print("Departamento:", departamento_VC.text, "\n", "Duracion:", duracion_VC.text, "\n", "Créditos:", creditos_VC.text, "\n", "Año:", año_VC.text, "\n")


# === PROGRAMACIÓN DE APLICACIONES MÓVILES NATIVAS ===
url_PAMN = 'https://www2.ulpgc.es/plan-estudio/4008/41/40983'
html_PAMN = requests.get(url_PAMN)
content_PAMN = html_PAMN.content
soup = BeautifulSoup(content_PAMN,"lxml")

asignatura_PAMN = soup.find("caption",{"class":"separaMenu"})
tipo_PAMN = soup.find("td",{"headers":"hdTipo"})
titulacion_PAMN = soup.find("td",{"headers":"hdTitulacion"})
departamento_PAMN = soup.find("td",{"headers":"hdDepartamento"})
duracion_PAMN = soup.find("td",{"headers":"hdDuracion"})
creditos_PAMN = soup.find("td",{"headers":"hdCreditos"})
año_PAMN = soup.find("td",{"headers":"hdCursos"})

print("Asignatura:", asignatura_PAMN.text, "\n", "Tipo:", tipo_PAMN.text, "\n", "Titulación:", titulacion_PAMN.text, "\n")
print("Departamento:", departamento_PAMN.text, "\n", "Duracion:", duracion_PAMN.text, "\n", "Créditos:", creditos_PAMN.text, "\n", "Año:", año_PAMN.text, "\n")


# === COMPUTACIÓN EN LA NUBE ===
url_CN = 'https://www2.ulpgc.es/plan-estudio/4008/41/40984'
html_CN = requests.get(url_CN)
content_CN = html_CN.content
soup = BeautifulSoup(content_CN,"lxml")

asignatura_CN = soup.find("caption",{"class":"separaMenu"})
tipo_CN = soup.find("td",{"headers":"hdTipo"})
titulacion_CN = soup.find("td",{"headers":"hdTitulacion"})
departamento_CN = soup.find("td",{"headers":"hdDepartamento"})
duracion_CN = soup.find("td",{"headers":"hdDuracion"})
creditos_CN = soup.find("td",{"headers":"hdCreditos"})
año_CN = soup.find("td",{"headers":"hdCursos"})

print("Asignatura:", asignatura_CN.text, "\n", "Tipo:", tipo_CN.text, "\n", "Titulación:", titulacion_CN.text, "\n")
print("Departamento:", departamento_CN.text, "\n", "Duracion:", duracion_CN.text, "\n", "Créditos:", creditos_CN.text, "\n", "Año:", año_CN.text, "\n")


# === INTERNET DE LAS COSAS ===
url_IC = 'https://www2.ulpgc.es/plan-estudio/4008/41/40985'
html_IC = requests.get(url_IC)
content_IC = html_IC.content
soup = BeautifulSoup(content_IC,"lxml")

asignatura_IC = soup.find("caption",{"class":"separaMenu"})
tipo_IC = soup.find("td",{"headers":"hdTipo"})
titulacion_IC = soup.find("td",{"headers":"hdTitulacion"})
departamento_IC = soup.find("td",{"headers":"hdDepartamento"})
duracion_IC = soup.find("td",{"headers":"hdDuracion"})
creditos_IC = soup.find("td",{"headers":"hdCreditos"})
año_IC = soup.find("td",{"headers":"hdCursos"})

print("Asignatura:", asignatura_IC.text, "\n", "Tipo:", tipo_IC.text, "\n", "Titulación:", titulacion_IC.text, "\n")
print("Departamento:", departamento_IC.text, "\n", "Duracion:", duracion_IC.text, "\n", "Créditos:", creditos_IC.text, "\n", "Año:", año_IC.text, "\n")


# === EMPRENDIMIENTO Y CREACIÓN DE EMPRESAS DE BASE TECNOLÓGICA ===
url_ECEBT = 'https://www2.ulpgc.es/plan-estudio/4008/41/40986'
html_ECEBT = requests.get(url_ECEBT)
content_ECEBT = html_ECEBT.content
soup = BeautifulSoup(content_ECEBT,"lxml")

asignatura_ECEBT = soup.find("caption",{"class":"separaMenu"})
tipo_ECEBT = soup.find("td",{"headers":"hdTipo"})
titulacion_ECEBT = soup.find("td",{"headers":"hdTitulacion"})
departamento_ECEBT = soup.find("td",{"headers":"hdDepartamento"})
duracion_ECEBT = soup.find("td",{"headers":"hdDuracion"})
creditos_ECEBT = soup.find("td",{"headers":"hdCreditos"})
año_ECEBT = soup.find("td",{"headers":"hdCursos"})

print("Asignatura:", asignatura_ECEBT.text, "\n", "Tipo:", tipo_ECEBT.text, "\n", "Titulación:", titulacion_ECEBT.text, "\n")
print("Departamento:", departamento_ECEBT.text, "\n", "Duracion:", duracion_ECEBT.text, "\n", "Créditos:", creditos_ECEBT.text, "\n", "Año:", año_ECEBT.text, "\n")


# === LOS SISTEMAS DE INFORMACIÓN EN LA ORGANIZACIÓN ===
url_SIO = 'https://www2.ulpgc.es/plan-estudio/4008/41/40987'
html_SIO = requests.get(url_SIO)
content_SIO = html_SIO.content
soup = BeautifulSoup(content_SIO,"lxml")

asignatura_SIO = soup.find("caption",{"class":"separaMenu"})
tipo_SIO = soup.find("td",{"headers":"hdTipo"})
titulacion_SIO = soup.find("td",{"headers":"hdTitulacion"})
departamento_SIO = soup.find("td",{"headers":"hdDepartamento"})
duracion_SIO = soup.find("td",{"headers":"hdDuracion"})
creditos_SIO = soup.find("td",{"headers":"hdCreditos"})
año_SIO = soup.find("td",{"headers":"hdCursos"})

print("Asignatura:", asignatura_SIO.text, "\n", "Tipo:", tipo_SIO.text, "\n", "Titulación:", titulacion_SIO.text, "\n")
print("Departamento:", departamento_SIO.text, "\n", "Duracion:", duracion_SIO.text, "\n", "Créditos:", creditos_SIO.text, "\n", "Año:", año_SIO.text, "\n")


# === SEGURIDAD DE LA INFORMACIÓN ===
url_SI = 'https://www2.ulpgc.es/plan-estudio/4008/41/40988'
html_SI = requests.get(url_SI)
content_SI = html_SI.content
soup = BeautifulSoup(content_SI,"lxml")

asignatura_SI = soup.find("caption",{"class":"separaMenu"})
tipo_SI = soup.find("td",{"headers":"hdTipo"})
titulacion_SI = soup.find("td",{"headers":"hdTitulacion"})
departamento_SI = soup.find("td",{"headers":"hdDepartamento"})
duracion_SI = soup.find("td",{"headers":"hdDuracion"})
creditos_SI = soup.find("td",{"headers":"hdCreditos"})
año_SI = soup.find("td",{"headers":"hdCursos"})

print("Asignatura:", asignatura_SI.text, "\n", "Tipo:", tipo_SI.text, "\n", "Titulación:", titulacion_SI.text, "\n")
print("Departamento:", departamento_SI.text, "\n", "Duracion:", duracion_SI.text, "\n", "Créditos:", creditos_SI.text, "\n", "Año:", año_SI.text, "\n")


# === PROYECTOS DE INGENIERÍA Y GESTIÓN DEL SOFTWARE ===
url_PIGS = 'https://www2.ulpgc.es/plan-estudio/4008/41/40989'
html_PIGS = requests.get(url_PIGS)
content_PIGS = html_PIGS.content
soup = BeautifulSoup(content_PIGS,"lxml")

asignatura_PIGS = soup.find("caption",{"class":"separaMenu"})
tipo_PIGS = soup.find("td",{"headers":"hdTipo"})
titulacion_PIGS = soup.find("td",{"headers":"hdTitulacion"})
departamento_PIGS = soup.find("td",{"headers":"hdDepartamento"})
duracion_PIGS = soup.find("td",{"headers":"hdDuracion"})
creditos_PIGS = soup.find("td",{"headers":"hdCreditos"})
año_PIGS = soup.find("td",{"headers":"hdCursos"})

print("Asignatura:", asignatura_PIGS.text, "\n", "Tipo:", tipo_PIGS.text, "\n", "Titulación:", titulacion_PIGS.text, "\n")
print("Departamento:", departamento_PIGS.text, "\n", "Duracion:", duracion_PIGS.text, "\n", "Créditos:", creditos_PIGS.text, "\n", "Año:", año_PIGS.text, "\n")


# === PRÁCTICAS EXTERNAS ===
url_PE = 'https://www2.ulpgc.es/plan-estudio/4008/41/40990'
html_PE = requests.get(url_PE)
content_PE = html_PE.content
soup = BeautifulSoup(content_PE,"lxml")

asignatura_PE = soup.find("caption",{"class":"separaMenu"})
tipo_PE = soup.find("td",{"headers":"hdTipo"})
titulacion_PE = soup.find("td",{"headers":"hdTitulacion"})
departamento_PE = soup.find("td",{"headers":"hdDepartamento"})
duracion_PE = soup.find("td",{"headers":"hdDuracion"})
creditos_PE = soup.find("td",{"headers":"hdCreditos"})
año_PE = soup.find("td",{"headers":"hdCursos"})

print("Asignatura:", asignatura_PE.text, "\n", "Tipo:", tipo_PE.text, "\n", "Titulación:", titulacion_PE.text, "\n")
print("Departamento:", departamento_PE.text, "\n", "Duracion:", duracion_PE.text, "\n", "Créditos:", creditos_PE.text, "\n", "Año:", año_PE.text, "\n")


# === TRABAJO FIN DE GRADO ===
url_TFG = 'https://www2.ulpgc.es/plan-estudio/4008/41/40991'
html_TFG = requests.get(url_TFG)
content_TFG = html_TFG.content
soup = BeautifulSoup(content_TFG,"lxml")

asignatura_TFG = soup.find("caption",{"class":"separaMenu"})
tipo_TFG = soup.find("td",{"headers":"hdTipo"})
titulacion_TFG = soup.find("td",{"headers":"hdTitulacion"})
departamento_TFG = soup.find("td",{"headers":"hdDepartamento"})
duracion_TFG = soup.find("td",{"headers":"hdDuracion"})
creditos_TFG = soup.find("td",{"headers":"hdCreditos"})
año_TFG = soup.find("td",{"headers":"hdCursos"})

print("Asignatura:", asignatura_TFG.text, "\n", "Tipo:", tipo_TFG.text, "\n", "Titulación:", titulacion_TFG.text, "\n")
print("Departamento:", departamento_TFG.text, "\n", "Duracion:", duracion_TFG.text, "\n", "Créditos:", creditos_TFG.text, "\n", "Año:", año_TFG.text, "\n")
