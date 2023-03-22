import React,  { useState } from 'react'
import '../../components/style.css';
import TableProf from './components/tablaProfesorado';
import SearchBar from '../../components/Busqueda/SearchBar';
import SearchProfesores from '../../components/Busqueda/SearchProfesores';


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
        <div >
            <section className="scroll-box">
                <h2 id="teachername" type="text" name="profesor_nombre">{newTeacher.profesorado.profesor}</h2>
                <div id ="atributos_teacher">
                    <div className="Correo"><b>Correo electrónico:</b><label name="correo">{newTeacher.profesorado.email}</label></div>
                    <div className= "Despacho"><b>Departamento:</b><label name="despacho">{newTeacher.profesorado.despacho}</label></div>
                    <div className="Telefono"><b>telefono:</b><label name="telefono">{newTeacher.profesorado.telefono}</label></div>
                </div>
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

