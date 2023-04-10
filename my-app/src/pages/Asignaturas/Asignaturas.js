import React, { useState,useEffect } from 'react';
import '../../components/style.css';
import TimeTable from './components/tableAsignaturas';
import Search from '../../components/Busqueda/SearchAsignaturas';
import SearchBar from '../../components/Busqueda/SearchBar';
import SearchProfesores from '../../components/Busqueda/SearchProfesores'
import SubjectProfes from '../../components/Busqueda/SubjectProfes';
import { Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

function Asignatura ({asignatura}){  

    const [newSubject, setAsignatura] = useState(asignatura)
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        importarJSON(`${newSubject.id}`);
    }, [newSubject])

    const handleItemClick = (item) => {
        setAsignatura(item)

    }



    const handleChange = event => {
        setSearchTerm(event.target.value);
      }

    
    function importarJSON(nombreArchivo) {
        try {
            const datos = require(`../../data/subjectSchedules/${nombreArchivo}.json`);
            return datos;
        } catch (error) {
            console.error(`Error al importar archivo JSON: ${error}`);
            return null;
        }
    }
    return (

        <div className="d-flex "  style={{ gridColumn: 'span 3' }}>
            <section className="d-flex scroll-box">
                <h2 id="titlePage" type="text" name="nombre_asignatura"><b> {newSubject.asignatura}</b></h2>
                <div id ="atributos_subject">
                    <div id="tipo_subject"><b>Tipo: </b><label name="tipo_subject">{newSubject.tipo}</label></div>
                    <div id="titulacion_subject"><b>Titulacion: </b><label name="titulacion_subject">{newSubject.titulacion}</label></div>
                    <div id= "departamento_subject"><b>Departamento: </b><label name="departamento_subject">{newSubject.departamento}</label></div>
                    <div id="duracion_subject"><b>Duracion: </b><label name="tipo_duracion">{newSubject.duracion}</label></div>
                    <div id="creditos_subject"><b>Créditos: </b><label name="creditos_subject">{newSubject.creditos}</label></div>
                    <div id="año_subject"><b>Año: </b><label name="año_subject">{newSubject.año}</label></div>
                </div>
                <div className="profesorado">
                   <b>Profesorados</b>
                   <SubjectProfes id={newSubject.id}></SubjectProfes>
                </div>
                <div style={{ borderTop: "3px solid #707070 "}}></div>

                <Link href={newSubject.proyectoDocente} isExternal className="link">
                Proyecto Docente de la Asignatura<ExternalLinkIcon mx='2px' />
                </Link>
                <TimeTable horas={importarJSON(newSubject.id)} />
            </section>

            <section className="search_asignaturas ">
                <div className="nav_search">
                    <button type = "submit" className="border-0 material-icons">search</button>
                    <SearchBar searchTerm={searchTerm} handleChange={handleChange} Placeholder={"Asignaturas"}/>
                </div>
                <Search searchTerm={searchTerm} onItemClick={handleItemClick}/>
            </section>
            
        </div>
      );
    }

export default Asignatura
