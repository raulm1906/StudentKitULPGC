import * as React from 'react';

import TablaHorario from './components/TablaHorario';
import { GridItem, Grid, Flex, Heading } from '@chakra-ui/layout';
import { useLocation, useParams } from 'react-router';
import { useEffect } from 'react';
import { useState } from 'react';
import FilterCard from './components/AsignaturasCard';
import EditButton from './components/EditButton';
import AppContext from '../../../../app/AppContext';

function PageHorario(){

    const [events, setEvents] = useState([])
    const {horarioid } = useParams()
    const [horario, setHorario] = useState([])
    const horarios = require("../../../../data/subjectSchedules/horarios.json")
    
    useEffect(() => {
        const matchingHorario = horarios.find(h => h.id == parseInt(horarioid))
        setHorario(matchingHorario)   
    }, [horarioid])

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
                    <Heading fontSize="xl" textAlign="center">{horario.name}</Heading>
                </GridItem>
                <GridItem marginLeft={styles.gridItem.marginLeft} gridRow={3} colSpan={3}>
                    <TablaHorario />
                </GridItem>
            </AppContext.Provider>
        </>
        
    )
}

export default PageHorario