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
    const [knowledge_area,setKnowledge] = useState('');
    const[subjectTeacher,setSubjectTeacher] =useState({});
    
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/profesores/teacher/?id=${id}`)
        .then(response => {
            setnewTeacher(response.data[0]);
        })
        .catch(error => {
            console.error(error);
        });
    }, [id])

    useEffect(() => {
        if (newTeacher.id) { // Verifica que newTeacher tenga un valor válido
            axios.get(`http://127.0.0.1:8000/profesores/knowledge_area/?id=${newTeacher.id}`)
                .then(response => {
                    setKnowledge(response.data[0].knowledge_area); // Accede al valor de knowledge_area en la respuesta
                })
                .catch(error => {
                    console.error(error);
                });
        //Zona para obtener los subject del profesor
        axios.get(`http://127.0.0.1:8000/asignaturas/subject_teacher/?teacher=${newTeacher.id}`)
        .then(response => {
            setSubjectTeacher(response.data)
        })


        }
    }, [newTeacher]);


    const AsignaturasProfesor = () => {
        console.log(subjectTeacher);
        if (subjectTeacher && subjectTeacher.length > 0) {
          return axios.get(`http://127.0.0.1:8000/asignaturas/subject_teacher/?teacher=${newTeacher.id}`)
            .then(response => {
              if (response.data.length > 0) {
                const subjectNames = response.data.map(item => {
                  return axios.get(`http://127.0.0.1:8000/asignaturas/subject/?name=${item.subject}`)
                    .then(response => response.data[0].name)
                    .catch(error => console.error(error));
                });
                return Promise.all(subjectNames)
                  .then(subjectNames => {
                    const uniqueSubjectNames = subjectNames.filter((subjectName, index, self) => self.indexOf(subjectName) === index);
                    console.log(uniqueSubjectNames);
                    return uniqueSubjectNames;
                  })
                  .catch(error => console.error(error));
              } else {
                console.log('No se encontraron asignaturas para el profesor.');
              }
            })
            .catch(error => console.error(error));
        } else {
          console.log('subjectTeacher está vacío');
        }
      };
      
      

    const handleItemClick = (item) => {
        setnewTeacher(item)
    }

    const handleChange = event => {
        setSearchTerm(event.target.value);
    }

    if (!newTeacher.name) {
        return <div>Cargando información del profesor...</div>;
    }
    return (

        <div className='d-flex' style={{ gridColumn: 'span 3' }}>
            <section className="scroll-box">
                <h2 id="titlePage" type="text" name="profesor_nombre"><b>{newTeacher.name}</b></h2>
                <Grid templateColumns='repeat(2, 1fr)' gap={2}>
                    <GridItem w='100%' h='10' textAlign><b>{t('ResultProfesorado.email')}:</b>{newTeacher.email}</GridItem>

                    <GridItem w='100%' h='10'><b>{t('ResultProfesorado.departamento')}:</b>{newTeacher.office}</GridItem>

                    <GridItem w='100%' h='10'><b>{t('ResultProfesorado.phone')}:</b>{newTeacher.phone_number}</GridItem>

                    <GridItem w='100%' h='10'> <b>{t('ResultProfesorado.conocimiento')}: </b>{knowledge_area}</GridItem>
                </Grid>
                {/*
               <b>{t('ResultProfesorado.horasTutorias')}:</b>
                <div className='text-center tutoriasFrame'>
                    <TableProf className="center-x" tutorias={newTeacher.tutoring_hours}/>
                </div>*/}
           
               <div>
                    <b>{t('ResultProfesorado.asignaturas')}:</b>
                    <br></br>
                    {AsignaturasProfesor().map((asignatura, index) => (
                        <li key={index}>{asignatura}</li>
                    ))}
                </div>
              {/*
            </section>
            
            <section className="search_asignaturas">
                <div className="d-flex nav_search">
                    <Search2Icon margin={"5"}></Search2Icon>
                    <SearchBar searchTerm={searchTerm} handleChange={handleChange} Placeholder={t('ResultProfesorado.profesores')} />
                </div>
                <SearchProfesores searchTerm={searchTerm} onItemClick={handleItemClick} />*/}
            </section>

        </div>
    );
}

export default Profesorado

