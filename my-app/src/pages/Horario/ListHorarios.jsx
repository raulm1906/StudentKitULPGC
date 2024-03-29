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
  Box,
  useColorMode
} from '@chakra-ui/react';
import { AiOutlinePlus } from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'
import { GrSchedules } from "react-icons/gr"
import { GridItem } from '@chakra-ui/layout';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import axios from 'axios'

export default function ListHorarios() {
  const [isOpen, setIsOpen] = useState(false);
  const [t] = useTranslation('common');
  const [scheduleData, setScheduleData] = useState([])
  const [title, setTitle] = useState("")
  const [showInput, setShowInput] = useState(false)
  const { colorMode } = useColorMode();

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
      const response = await axios.post("https://django.narurm.eu/horarios/schedule/", {
        userId: 2,
        title: scheduleTitle,
      });
      setScheduleData([...scheduleData, response.data])
      return response.data
    } catch (error) {
      console.error(error)
      return null
    }
  }

  const deleteSchedule = async (scheduleId) => {
    try {
      const response = await axios.delete(`https://django.narurm.eu/horarios/schedule/${scheduleId}`)
      const currentSchedules = scheduleData.filter((schedule) => schedule.id !== scheduleId)
      console.log(currentSchedules)
      setScheduleData(currentSchedules)
    }catch(error){
      console.error(error)
    }
  }

  useEffect(() => { 
    axios
    .get("https://django.narurm.eu/horarios/schedule/")
    .then((response) => {
      setScheduleData(response.data)
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
        leftIcon={<Icon as={GrSchedules} color="white.500"/>} 
        bg={colorMode === 'dark' ? "#313535" : "#DADADA"}
        borderRadius="20px"
        >{t('listHorarios.mishorarios')}</Button>
    </GridItem>
      <Drawer isOpen={isOpen} placement="right" onClose={handleToggle}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton bg={colorMode === 'dark' ? "#313535" : "#DADADA"}/>
          <DrawerHeader color="white">Mis horarios</DrawerHeader>
          <DrawerBody display="flex" flexDirection="column">
            <Stack spacing="24px">
              {scheduleData.map((horario) => (
                <Box key={horario.id}>
                  <Link to={`/horario/${horario.id}`} state={{data: horario}}><Button w="75%">{horario.title}</Button></Link>
                  <Button marginLeft={5} value={horario.id}  onClick={() => deleteSchedule(horario.id)}><BsTrash/></Button>
                </Box>
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

