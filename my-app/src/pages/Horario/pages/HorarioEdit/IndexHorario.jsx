import * as React from 'react';
import { Scheduler } from 'devextreme-react/scheduler';

import { Text, Box } from '@chakra-ui/react'
import TablaHorario from './components/TablaHorario';
import { GridItem, Grid, Flex, Heading } from '@chakra-ui/layout';
import {MdModeEdit} from "react-icons/md"
import { Button } from '@chakra-ui/button';
import { useParams } from 'react-router';
import { useMemo } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import FilterCard from './components/AsignaturasCard';
import EditButton from './components/EditButton';


function Horario(){

    const [horario, setHorario] = useState([])
    const {horarioid } = useParams()
    useEffect(() => {
        axios.get(`http://localhost:3001/horarios/${horarioid}`)
        .then(response => {
            setHorario(response.data)
        })
        .catch(error => {
            console.log(error)
        })
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
            <GridItem gridColumn={1}>
                <EditButton onStylesChange={handleStylesChange}/>
                <FilterCard
                    onStylesChange={handleStylesChange}
                    marginCard = {styles.box.marginLeft}
                />
            </GridItem>
            <GridItem gridRow={2} gridColumn={2}>
                <Heading fontSize="xl" textAlign="center">{horario.nombre}</Heading>
            </GridItem>
            <GridItem marginLeft={styles.gridItem.marginLeft} gridRow={3} colSpan={3}>
                <TablaHorario />
            </GridItem>
        </>
        
    )
}

export default Horario