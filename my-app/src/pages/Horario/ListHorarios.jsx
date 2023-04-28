import { useEffect, useState } from 'react';
import React from 'react';
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Button,
  Stack,
  Icon
} from '@chakra-ui/react';
import { AiOutlinePlus } from 'react-icons/ai'
import { GrSchedules } from "react-icons/gr"
import { GridItem } from '@chakra-ui/layout';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios'

export default function ListHorarios() {
  const [isOpen, setIsOpen] = useState(false);
  const [scheduleData, setScheduleData] = useState([])

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => { 
    axios
    .get("http://127.0.0.1:8000/horarios/schedule/")
    .then((response) => {
      setScheduleData(response.data)
      console.log(scheduleData)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])
  
  return (
    <>
    <Outlet/>
    <GridItem gridRow={2} gridColumn={3} display="flex" justifyContent="end" alignItems="center" marginRight="20px">
        <Button 
        onClick={handleToggle} 
        leftIcon={<Icon as={GrSchedules} color="white.500" />} 
        bg="#DADADA"
        borderRadius="20px"
        >Mis Horarios</Button>
    </GridItem>
      <Drawer isOpen={isOpen} placement="right" onClose={handleToggle}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton bg="#DADADA"/>
          <DrawerHeader color="white">Mis horarios</DrawerHeader>
          <DrawerBody display="flex" flexDirection="column">
            <Stack spacing="24px">
              {scheduleData.map((horario) => (
                <Link to={`/horario/${horario.id}`} state={{data: horario}} key={horario.id}><Button w="100%">{horario.title}</Button></Link>
              ))}
            </Stack>
            <Button marginTop="24px"><AiOutlinePlus/ ></Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

