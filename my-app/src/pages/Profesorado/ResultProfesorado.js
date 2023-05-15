import React, { useState, useEffect } from 'react'
import '../../components/style.css';
import TableProf from './components/tablaProfesorado';
import SearchBar from '../../components/Busqueda/SearchBar';
import SearchProfesores from '../../components/Busqueda/SearchProfesores';
import { Grid, GridItem } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {Search2Icon,ChevronRightIcon} from '@chakra-ui/icons'
import { useColorMode } from '@chakra-ui/react';
import axios from 'axios';
import {
    List,
    ListItem,
    ListIcon,
  } from '@chakra-ui/react'
import LoadingIcon from '../../LoadingIcon';
function Profesorado() {
    
    const { id } = useParams();
    const [newTeacher, setnewTeacher] = useState({})
    const [searchTerm, setSearchTerm] = useState('');
    const [t, i18n] = useTranslation('common');
    const [knowledge_area,setKnowledge] = useState({})
    const [knowledge_areaID,setKnowledgeID] = useState('');
    const [tutoringHour,setTutoringHour] =useState({});
    const[subjectTeacher,setSubjectTeacher] =useState({});
    const [subjects, setSubjects] = useState([]);
    const { colorMode } = useColorMode();

    useEffect(() => {
        axios.get(`https://django.narurm.eu/profesores/teacher/?id=${id}`)
        .then(response => {
            setnewTeacher(response.data[0]); 
            setKnowledgeID(response.data[0].knowledge_area)
        })
        axios.get(`https://django.narurm.eu/profesores/tutoring_hour/`)
        .then(response => {
            setTutoringHour(response.data.filter(item => item.teacher === parseInt(id))) 
        })
        .catch(error => {
            console.error(error);  
        });
    }, [id])

    useEffect(() => {
        axios.get(`https://django.narurm.eu/profesores/knowledge_area/${knowledge_areaID}/`)
        .then(response => {
            setKnowledge(response.data)
        })
        .catch(error => {
            console.error(error); 
        });
      }, [knowledge_areaID]);
      
      
      

    const handleItemClick = (item) => {
        setnewTeacher(item)
    }

    const handleChange = event => {

        setSearchTerm(event.target.value);
    }

    if (!newTeacher.name) {
        return <LoadingIcon></LoadingIcon>
    }
    return (

        <div className='d-flex' style={{ gridColumn: 'span 3' }}>
            <section className={`scroll-box ${colorMode === 'dark' ? 'dark' : ''}`}>
                <h1 className='text-center fs-3 mb-3' type="text" name="profesor_nombre"><b> { newTeacher.name}</b></h1>
                <Grid templateColumns='repeat(2, 1fr)' gap={2}>
                    <GridItem w='100%' h='10' textAlign><b>{t('ResultProfesorado.email')}:</b> { newTeacher.email}</GridItem>

                    <GridItem w='100%' h='10'><b>{t('ResultProfesorado.departamento')}:</b> { newTeacher.office}</GridItem>

                    <GridItem w='100%' h='10'><b>{t('ResultProfesorado.phone')}:</b> { newTeacher.phone_number}</GridItem>

                    <GridItem w='100%' h='10'> <b>{t('ResultProfesorado.conocimiento')}: </b> { knowledge_area.knowledge_area}</GridItem>
                </Grid>
                
               <b>{t('ResultProfesorado.horasTutorias')}:</b>
                <div className={`text-center tutoriasFrame ${colorMode === 'dark' ? 'dark' : ''}`}>  
                    {tutoringHour.length != 0 ? <TableProf className="center-x" tutorias={tutoringHour}/> : <h1>No se han registrado horas de tutorías</h1>}
                </div>
<<<<<<< HEAD
             

=======
            
                <div>
                    <b>{t('ResultProfesorado.asignaturas')}:</b>
                    <List spacing={3} marginLeft={"2"}>                    
                    {subjects.map((element, index) => (
                    <ListItem key={index}>
                        <ListIcon as={ChevronRightIcon} color='green.500' />
                        {element[0].name}
                    </ListItem>
                    ))}
                    </List>
                </div>
>>>>>>> 8768211cd65c6a70c39caf27dfd49e68350c57c4
              
            </section>
            
            <section className={`search_asignaturas ${colorMode === 'dark' ? 'dark' : ''}`}>
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

