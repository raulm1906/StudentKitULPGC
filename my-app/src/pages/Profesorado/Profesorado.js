import React,  { useState } from 'react'
import '../../components/style.css';
import TableProf from './components/tablaProfesorado';
import SearchBar from '../../components/Busqueda/SearchBar';
import SearchProfesores from '../../components/Busqueda/SearchProfesores';
import { Grid, GridItem } from '@chakra-ui/react'


function Profesorado ({profesor}){
    const [newTeacher, setnewTeacher] = useState(profesor)
    const [searchTerm, setSearchTerm] = useState('');


    
    const handleItemClick = (item) => {
        setnewTeacher(item)
    }
    
    const handleChange = event => {
        setSearchTerm(event.target.value);
      }
    

    return (
        <div className='d-flex'  style={{ gridColumn: 'span 3' }}>
            <section className="scroll-box">
                <h2 id="titlePage" type="text" name="profesor_nombre"><b>{newTeacher.profesorado.profesor}</b></h2>
                <Grid templateColumns='repeat(2, 1fr)' gap={2}>
                    <GridItem w='100%' h='10' textAlign><b>Correo electrónica:</b>{newTeacher.profesorado.emial}</GridItem>

                    <GridItem w='100%' h='10'><b>Departamento: </b>{newTeacher.profesorado.despacho}</GridItem>

                    <GridItem w='100%' h='10'><b>Teléfono: </b>{newTeacher.profesorado.teléfono}</GridItem>

                    <GridItem w='100%' h='10'> <b>Área de conocimiento: </b>{newTeacher.profesorado.area_de_conocimiento}</GridItem>
                </Grid>

                <b>Horas Tutorías</b>
                <div className='text-center tutoriasFrame'>
                    <TableProf className="center-x" tutorias={newTeacher.tutorias}/>
                </div>
            </section>
            <section className="search_asignaturas">
                <div className="nav_search">
                    <button type = "submit" className="material-icons">search</button>
                    <SearchBar searchTerm={searchTerm} handleChange={handleChange} Placeholder={"Profesores"}/>
                </div>

                <SearchProfesores searchTerm={searchTerm} onItemClick={handleItemClick} />
            </section>

        </div>
      );
}

export default Profesorado

