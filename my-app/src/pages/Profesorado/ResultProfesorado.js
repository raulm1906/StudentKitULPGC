import React, { useState, useEffect } from 'react'
import '../../components/style.css';
import TableProf from './components/tablaProfesorado';
import SearchBar from '../../components/Busqueda/SearchBar';
import SearchProfesores from '../../components/Busqueda/SearchProfesores';
import { Grid, GridItem } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import profesores from '../../data/profesores.json';
import { useTranslation } from 'react-i18next';
import {Search2Icon} from '@chakra-ui/icons'
import axios from 'axios';

function Profesorado() {
    const { id } = useParams();
    const [newTeacher, setnewTeacher] = useState({})
    const [searchTerm, setSearchTerm] = useState('');
    const [t, i18n] = useTranslation('common');

    useEffect(() => {
        setnewTeacher(profesores.find(profesor => profesor.id == id));
    }, [id])

 
    const handleItemClick = (item) => {
        setnewTeacher(item)
    }

    const handleChange = event => {
        setSearchTerm(event.target.value);
    }

    if (!newTeacher.profesorado) {
        return <div>Cargando información del profesor...</div>;
    }

    return (

        <div className='d-flex' style={{ gridColumn: 'span 3' }}>
            <section className="scroll-box">
                <h2 id="titlePage" type="text" name="profesor_nombre"><b>{newTeacher.profesorado.profesor}</b></h2>
                <Grid templateColumns='repeat(2, 1fr)' gap={2}>
                    <GridItem w='100%' h='10' textAlign><b>{t('ResultProfesorado.email')}:</b>{newTeacher.profesorado.email}</GridItem>

                    <GridItem w='100%' h='10'><b>{t('ResultProfesorado.departamento')}:</b>{newTeacher.profesorado.despacho}</GridItem>

                    <GridItem w='100%' h='10'><b>{t('ResultProfesorado.phone')}:</b>{newTeacher.profesorado.telfono}</GridItem>

                    <GridItem w='100%' h='10'> <b>{t('ResultProfesorado.conocimiento')}: </b>{newTeacher.profesorado.area_de_conocimiento}</GridItem>
                </Grid>

                <b>{t('ResultProfesorado.horasTutorias')}:</b>
                <div className='text-center tutoriasFrame'>
                    <TableProf className="center-x" tutorias={newTeacher.tutorias} />
                </div>

                <div>
                    <b>{t('ResultProfesorado.asignaturas')}:</b>
                    <br></br>
                    {newTeacher.asignaturas.map((asignatura, index) => (
                        <li key={index}>{asignatura}</li>
                    ))}
                </div>
                
            </section>
            <section className="search_asignaturas">
                <div className="d-flex nav_search">
                    <Search2Icon margin={"5"}></Search2Icon>
                    <SearchBar searchTerm={searchTerm} handleChange={handleChange} Placeholder={t('ResultProfesorado.profesores')} />
                </div>
                <SearchProfesores searchTerm={searchTerm} onItemClick={handleItemClick} />
            </section>

        </div>
    );
}

export default Profesorado

