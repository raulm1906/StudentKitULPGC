import React, { useState,useEffect } from 'react';
import '../../components/style.css';
import TimeTable from './components/tableAsignaturas';
import Search from '../../components/Busqueda/SearchAsignaturas';
import SearchBar from '../../components/Busqueda/SearchBar';
import SearchProfesores from '../../components/Busqueda/SearchProfesores'
import SubjectProfes from '../../components/Busqueda/SubjectProfes';
import asignaturas from '../../data/subjects.json';
import { Link } from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { useTranslation } from 'react-i18next';

function Asignatura (){  
    const {id} = useParams();
    const [newSubject, setAsignatura] = useState({})
    const [searchTerm, setSearchTerm] = useState('');
    const [t, i18n] = useTranslation('common');

    useEffect(() => {
        importarJSON(`${id}`);
        setAsignatura(asignaturas.find(asig => asig.id === id));
    }, [id])


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
            return null;
        }
    }

    return (        
        <div className="d-flex "  style={{ gridColumn: 'span 3' }}>
            <section className="d-flex scroll-box">
                <h2 id="titlePage" type="text" name="nombre_asignatura"><b> {newSubject.asignatura}</b></h2>
                <Grid templateColumns='repeat(3, 1fr)' gap={2} border={"0px"}>
                    <GridItem w='100%' h='10'><b>{t('ResultAsignaturas.tipo')}: </b>{newSubject.tipo}</GridItem>

                    <GridItem w='100%' h='10'><b>{t('ResultAsignaturas.title')}: </b>{newSubject.titulacion}</GridItem>

                    <GridItem w='100%' h='10'><b>{t('ResultAsignaturas.departamento')}: </b>{newSubject.departamento}</GridItem>

                    <GridItem w='100%' h='10'><b>{t('ResultAsignaturas.duracion')}: </b><label name="tipo_duracion">{newSubject.duracion}</label></GridItem>

                    <GridItem w='100%' h='10'><b>{t('ResultAsignaturas.creditos')}: </b><label name="creditos_subject">{newSubject.creditos}</label></GridItem>

                    <GridItem w='100%' h='10'><b>{t('ResultAsignaturas.year')}: </b><label name="año_subject">{newSubject.año}</label></GridItem>

                </Grid>
                <div className="profesorado">
                   <b>{t('ResultAsignaturas.profesorado')}</b>
                   <SubjectProfes id={newSubject.id}></SubjectProfes>
                </div>
                <div style={{ borderTop: "3px solid #707070 "}}></div>

                <Link href={newSubject.proyectoDocente} isExternal className="link">
                {t('ResultAsignaturas.docente')}<ExternalLinkIcon mx='2px' />
                </Link>
                <TimeTable horas={importarJSON(newSubject.id)} />
            </section>

            <section className="search_asignaturas ">
                <div className="nav_search">
                    <button type = "submit" className="border-0 material-icons"></button>
                    <SearchBar searchTerm={searchTerm} handleChange={handleChange} Placeholder={t('ResultAsignaturas.subjects')}/>
                </div>
                <Search searchTerm={searchTerm} onItemClick={handleItemClick}/>
            </section>
            
        </div>
        
      );
    }

export default Asignatura

