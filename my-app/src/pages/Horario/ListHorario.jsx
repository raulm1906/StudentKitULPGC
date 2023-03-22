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
import { AiOutlinePlus, AiOutlineLeft } from 'react-icons/ai'
import { GrSchedules } from "react-icons/gr"
import { GridItem } from '@chakra-ui/layout';
import { Outlet } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };


  const [horarios, setHorarios] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3001/horarios")
    .then(response => {
        setHorarios(response.data)
    })
    .catch(error => {
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
          <DrawerCloseButton color="white"/>
          <DrawerHeader color="white">Mis horarios</DrawerHeader>
          <DrawerBody display="flex" flexDirection="column">
            <Stack spacing="24px">
              {horarios.map((horario) => (
                <Link to={`/horario/${horario.id}`}><Button w="100%">{horario.nombre}</Button></Link>
              ))}
            </Stack>
            <Button marginTop="24px"><AiOutlinePlus/ ></Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Sidebar;
