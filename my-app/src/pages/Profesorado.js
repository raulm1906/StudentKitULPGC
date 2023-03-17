import React,  { useEffect, useState } from 'react'
import '../components/style.css';
import { ChakraProvider } from '@chakra-ui/react';
import TableProf from '../components/tablaProfesorado';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from '../components/Busqueda/Search';
import SearchBar from '../components/Busqueda/SearchBar';
import { Container, Row, Col } from 'react-bootstrap';


function Profesorado (){

    const [newSubject, setAsignatura] = useState()
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedItem, setSelectedItem] = useState(null);

    const cambiarSubject = (varSubject) => {
        setAsignatura(varSubject)
    }

    const handleSearchInputChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const handleItemClick = (item) => {
        setSelectedItem(item);
        setAsignatura(item)
    }
    
    const handleChange = event => {
        setSearchTerm(event.target.value);
      }

    return (
        <div id="mainprofesorado">
            <section className="scroll-box">
                <h2 id="teachername" type="text" name="profesor_nombre">ProfesorNombre</h2>
                <div id ="atributos_teacher">
                    <div className="Area_conocimiento"><b>Área de conocimiento:</b><label name="tipo_conocimiento">------</label></div>
                    <div className="Correo"><b>Correo electrónico:</b><label name="correo">XXX</label></div>
                    <div className= "Despacho"><b>Departamento:</b><label name="despacho">XXX</label></div>
                    <div className="Telefono"><b>telefono:</b><label name="telefono">XXX</label></div>
                </div>
                <b>Horas Tutorías</b>
                <div className='text-center tutoriasFrame'>

                    <p className='text-center'>Primer Semestre</p>
                    <TableProf className="center-x"/>
                    <p className='text-center'>Segundo Semestre</p>
                    <TableProf className="center-x"/>
                </div>
            </section>



            <section className="search_asignaturas">
                <div className="nav_search">
                    <button type = "submit" className="material-icons">search</button>
                    <SearchBar searchTerm={searchTerm} handleChange={handleChange} />
                </div>

                <Search searchTerm={searchTerm} onItemClick={handleItemClick} />

            </section>

        </div>
      );
}

export default Profesorado

