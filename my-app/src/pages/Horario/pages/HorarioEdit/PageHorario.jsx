import * as React from 'react';

import TablaHorario from './components/TablaHorario';
import { GridItem, Heading } from '@chakra-ui/layout';
import { Button, Text } from '@chakra-ui/react'
import {useParams } from 'react-router';
import { useEffect } from 'react';
import { useState } from 'react';
import FilterCard from './components/AsignaturasCard';
import EditButton from './components/EditButton';
import AppContext from '../../../../app/AppContext';
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'


function PageHorario(){

    const [events, setEvents] = useState([])
    const {horarioid } = useParams()
    const [horario, setHorario] = useState({})
    const [showConfirmation, setShowConfirmation] = useState(false)

    const handlePostData =  () => {
        console.log(events)
        events.map((event) => {
            postEvent(event)
        })
        setShowConfirmation(true);
        setTimeout(() => {
            setShowConfirmation(false);
          }, 2000)
      }

    const postEvent = async (event) => {
        try {
            const response = await axios.post("http://127.0.0.1:8000/horarios/event/", {
                id: event.id,
                subject_code: event.subject_code,
                title: event.title,
                startTime: event.startTime,
                endTime: event.endTime,
                days_of_week: event.daysOfWeek[0],
                startRecur: event.startRecur,
                endRecur: event.endRecur,
                rrule: event.rrule,
                schedule: horario.id
            });
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

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
                    <Button margin="30px" onClick={handlePostData}>Guardar horario</Button>
                    {showConfirmation && <Text color="green" fontSize="md" marginX="30px">El horario ha sido guardado.</Text>}
                </GridItem>
            </AppContext.Provider>
        </>
        
    )
}

export default PageHorario