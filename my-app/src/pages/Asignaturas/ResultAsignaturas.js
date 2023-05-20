import React, { useState,useEffect } from 'react';
import '../../components/style.css';
import TimeTable from './components/tableAsignaturas';
import Search from '../../components/Busqueda/SearchAsignaturas';
import SearchBar from '../../components/Busqueda/SearchBar';
import SubjectProfes from '../../components/Busqueda/SubjectProfes';
import { Link } from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { ExternalLinkIcon,Search2Icon } from '@chakra-ui/icons';
import { useTranslation } from 'react-i18next';
import { useColorMode } from '@chakra-ui/react';
import axios from 'axios';
import LoadingIcon from '../../LoadingIcon';
function Asignatura (){  
    const {id} = useParams();
    const [newSubject, setAsignatura] = useState({})
    const [searchTerm, setSearchTerm] = useState('');
    const [t, i18n] = useTranslation('common');
    const { colorMode } = useColorMode();
    const [loading, setLoading] = useState(true);
    useEffect(() => { 
        
        axios.get(`https://django.narurm.eu/asignaturas/subject/?id=${id}`)
        .then(response => { 
          setAsignatura(response.data[0]);
          setLoading(false);
        })
        .catch(error => {
            console.error(error);
        });
      }, []);
      

    const handleItemClick = (item) => {
        setAsignatura(item)

    }

    const handleChange = event => {
        setSearchTerm(event.target.value);
      }

      if (loading) {
        return <div style={{height: "70vh"}}><LoadingIcon/></div>
      }


    return (     
           
        <div className="d-flex "  style={{ gridColumn: 'span 3' }}>
             
            <section className={`d-flex scroll-box ${colorMode === 'dark' ? 'dark' : 'light'}`}>
                <h2 id="titlePage" type="text" name="nombre_asignatura" className='text-center fs-3 mb-3'><b> {newSubject.name}</b></h2>
                <Grid templateColumns='repeat(3, 1fr)' gap={2} border={"0px"}>
                    <GridItem w='100%' h='10'><b>{t('ResultAsignaturas.tipo')}: </b>{newSubject.subject_type}</GridItem>

                    <GridItem w='100%' h='10'><b>{t('ResultAsignaturas.title')}: </b>Grado en Ingeniería Informática</GridItem>

                    <GridItem w='100%' h='10'><b>{t('ResultAsignaturas.departamento')}: </b>{newSubject.department}</GridItem>

                    <GridItem w='100%' h='10'><b>{t('ResultAsignaturas.duracion')}: </b><label name="tipo_duracion">{newSubject.semester} semestre</label></GridItem>

                    <GridItem w='100%' h='10'><b>{t('ResultAsignaturas.creditos')}: </b><label name="creditos_subject">{newSubject.credits}</label></GridItem>

                    <GridItem w='100%' h='10'><b>{t('ResultAsignaturas.year')}: </b><label name="año_subject">{newSubject.year}</label></GridItem>

                </Grid>
                <div className="profesorado">
                   <b>{t('ResultAsignaturas.profesorado')}</b>
                   <SubjectProfes id={newSubject.id}></SubjectProfes>
                </div>
                <div style={{ borderTop: "3px solid #707070 "}}></div>

                <Link href={newSubject.linkpd} isExternal className="link">
                {t('ResultAsignaturas.docente')}<ExternalLinkIcon mx='2px' />
                </Link>
               <TimeTable horas={newSubject.lessons} />
            </section>

            <section className={`search_asignaturas ${colorMode === 'dark' ? 'dark' : 'light'}`}>
                <div className="d-flex nav_search">
                    <Search2Icon margin={"5"}></Search2Icon>
                    <SearchBar searchTerm={searchTerm} handleChange={handleChange} Placeholder={t('ResultAsignaturas.subjects')}/>
                </div>
                <Search searchTerm={searchTerm} onItemClick={handleItemClick}/>
            </section>
            
        </div>
        
      );
    }

export default Asignatura

