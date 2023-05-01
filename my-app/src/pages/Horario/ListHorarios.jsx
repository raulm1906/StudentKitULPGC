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
  Icon,
  Input,
  Text
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
  const [title, setTitle] = useState("")
  const [showInput, setShowInput] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleCreateHorario = () => {
    setShowInput(true);
  }

  const handleSaveHorario = () => { 
    setShowInput(false)
    createSchedule(title)
  }


  const createSchedule = async (scheduleTitle) => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/horarios/schedule/", {
        userId: 1,
        title: scheduleTitle,
      });
      setScheduleData([...scheduleData, response.data])
      return response.data
    } catch (error) {
      console.error(error)
      return null
    }
  }

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
            {showInput ? (
        <Stack>
          <Input marginY="24px" placeholder="Enter title" value={title} onChange={handleTitleChange} />
          <Button onClick={handleSaveHorario}>Save</Button>
        </Stack>
      ) : (
        <Button marginTop="24px" onClick={handleCreateHorario}><AiOutlinePlus /></Button>
      )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

