import React from 'react'
import '../components/style.css';
import { background, ChakraProvider } from '@chakra-ui/react';
import TableProf from '../components/tableAsignaturas';
import Header from './cabecera';

function Profesorado (){
    return (
        <div id="mainprofesorado">
            <section className="scroll-box">
                <h2 id="teachername" type="text" name="profesor_nombre">ProfesorNombre</h2>
                <div id ="atributos_teacher">
                    <div className="area_conocimiento"><b>Área de conocimiento:</b><label name="tipo_conocimiento">------</label></div>
                    <div className="correo"><b>Correo electrónico:</b><label name="correo">XXX</label></div>
                    <div className= "Despacho"><b>Departamento:</b><label name="despacho">XXX</label></div>
                    <div className="telefono"><b>telefono:</b><label name="telefono">XXX</label></div>
                </div>
                <p><b>Horas de tutorias</b></p>
                <div></div>
                <p><b>Asignaturas impartidas por el profesor</b></p>
            </section>
            <section className="search_profesores">
                <div className="nav_search">
                    <i className="material-icons">search</i>
                    <span>Profesores</span>
                </div>
            </section>

        </div>
      );
}

export default Profesorado

