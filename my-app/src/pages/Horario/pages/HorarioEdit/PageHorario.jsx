import * as React from 'react';

import TablaHorario from './components/TablaHorario';
import { GridItem, Grid, Flex, Heading } from '@chakra-ui/layout';
import { useLocation, useParams } from 'react-router';
import { useEffect } from 'react';
import { useState } from 'react';
import FilterCard from './components/AsignaturasCard';
import EditButton from './components/EditButton';
import AppContext from '../../../../app/AppContext';
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'


function PageHorario(){

    const [events, setEvents] = useState([])
    const {horarioid } = useParams()
    const [horario, setHorario] = useState({})


    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(`http://127.0.0.1:8000/horarios/schedule/?id=${horarioid}`)
            setHorario(response.data[0])
        }    
        fetchData()
    }, [horarioid])

    useEffect(() => {
        if (horario && horario.events) {
          setEvents(horario.events)
        }
      }, [horario])



    const [styles, setStyles] = useState({
        box: {
            marginLeft: "-300px"
        },
        gridItem: {
            marginLeft: "0px"
        }
      })

      const handleStylesChange = (newStyles) => {
        setStyles(newStyles);
      }

    return(
        <>
            <AppContext.Provider value={{events, setEvents}}>
                <GridItem gridColumn={1}>
                    <EditButton onStylesChange={handleStylesChange}/>
                    <FilterCard
                        onStylesChange={handleStylesChange}
                        marginCard = {styles.box.marginLeft}
                    />
                </GridItem>
                <GridItem gridRow={2} gridColumn={2}>
                    <Heading fontSize="xl" textAlign="center">{horario.title}</Heading>
                </GridItem>
                <GridItem marginLeft={styles.gridItem.marginLeft} gridRow={3} colSpan={3}>
                    <TablaHorario />
                </GridItem>
            </AppContext.Provider>
        </>
        
    )
}

export default PageHorario