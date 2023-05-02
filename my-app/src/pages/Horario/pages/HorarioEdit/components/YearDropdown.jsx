import React from 'react'
import {Text, Button } from '@chakra-ui/react'
import { Collapse } from '@chakra-ui/transition'
import { useState, useEffect } from 'react'
import { AiFillCaretDown } from 'react-icons/ai'
import { Icon } from '@chakra-ui/icon' 
import AsignaturaCheckbox from './AsignaturaCheckbox'
import axios from 'axios'




export default function YearDropdown(props) {

    const [isOpen, setIsOpen] = useState(false)
    const handleToggle = () => setIsOpen(!isOpen)
    const { year, setYear } = props
    const [subjects, setSubjects] = useState([])

    useEffect(() => {
      async function fetchSubjects() {
        const response = await axios.get(`https://django.narurm.eu/asignaturas/subject/?year=${year}`)
        setSubjects(response.data)
      }
      fetchSubjects()
      console.log(subjects)
    }, [])

  


  return (
    <>
        <Button 
        onClick={handleToggle} 
        mb={2} display="flex" 
        justifyContent="space-between" 
      >
        <Text> Año {year}</Text>
        <Icon as={AiFillCaretDown}/>
      </Button>
      <Collapse in={isOpen}>
        { Array.from({length: subjects.length }, (_, i) => {
          return <AsignaturaCheckbox subject={subjects[i]}/>
        })}
      </Collapse>
    </>
  )
}
