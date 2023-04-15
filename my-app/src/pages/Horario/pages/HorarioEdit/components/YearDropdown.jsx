import React from 'react'
import {Text, Button } from '@chakra-ui/react'
import { Collapse } from '@chakra-ui/transition'
import { useState } from 'react'
import { AiFillCaretDown } from 'react-icons/ai'
import { Icon } from '@chakra-ui/icon' 
import AsignaturaCheckbox from './AsignaturaCheckbox'



export default function YearDropdown(props) {

    const [isOpen, setIsOpen] = useState(false)
    const handleToggle = () => setIsOpen(!isOpen)
    const { year, subjectIds } = props;

  return (
    <>
        <Button 
        onClick={handleToggle} 
        mb={2} display="flex" 
        justifyContent="space-between" 
      >
        <Text> {year}</Text>
        <Icon as={AiFillCaretDown}/>
      </Button>
      <Collapse in={isOpen}>

        <AsignaturaCheckbox id="40951" name="AG"/>
        <AsignaturaCheckbox id="40952" name="BD2"/>
        <AsignaturaCheckbox id="40953" name="EC"/>
      </Collapse>
    </>
  )
}
