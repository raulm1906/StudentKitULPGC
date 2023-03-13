import React,  { useEffect, useState } from 'react'
import '../components/style.css';
import { ChakraProvider } from '@chakra-ui/react';
import TableProf from '../components/tableAsignaturas';


function Asignatura (){  
    return (
        <div id="mainprofesorado">
            <section className="scroll-box">
                <h2 id="subjectname" type="text" name="nombre_asignatura"><b>SubjectName</b></h2>
                <div id ="atributos_subject">
                    <div className="tipo_subject"><b>Tipo:</b><label name="tipo_subject">XXX</label></div>
                    <div className="titulacion_subject"><b>Titulacion:</b><label name="titulacion_subject">XXX</label></div>
                    <div className= "departamento_subject"><b>Departamento:</b><label name="departamento_subject">XXX</label></div>
                    <div className="duracion_subject"><b>Duracion:</b><label name="tipo_duracion">XXX</label></div>
                    <div className="creditos_subject"><b>Créditos:</b><label name="creditos_subject">XXX</label></div>
                    <div className="año_subject"><b>Año:</b><label name="año_subject">XXX</label></div>
                </div>
                <div className="profesorado">
                   <b>Profesorados</b>
                </div>
                <div style={{ borderTop: "3px solid #707070 ", marginLeft: 20, marginRight: 20 }}></div>
                <TableProf />
            </section>
            <section className="search_asignaturas">
                <div className="nav_search">
                    <i className="material-icons">search</i>
                    <span>Asignaturas</span>
                </div>
            </section>
            
        </div>
      );
    }

export default Asignatura

