import { Box, Flex, Heading, Text, Button } from '@chakra-ui/react'
import { Collapse } from '@chakra-ui/transition'
import React from 'react'
import { useState } from 'react'
import { AiFillCaretDown } from 'react-icons/ai'
import { BsChevronLeft } from 'react-icons/bs'
import { Icon } from '@chakra-ui/icon' 
import YearDropdown from './YearDropdown'

export default function FilterCard(props) {

  const handleCloseButton =() => {
    const newStyles = {
      box: {
          marginLeft: "-320px",
          transition: "0.5s ease all"
      },
      gridItem: {
          marginLeft: "0px",
          transition: "0.5s ease all"
      }
  }
  props.onStylesChange(newStyles)
  }


  const [isOpen, setIsOpen] = useState(false)
  const handleToggle = () => setIsOpen(!isOpen)


  return (
    <Flex
      as="section"
      flexDirection="column"
      w="300px"
      h="70%" 
      bg="#f0f0f0"
      borderRadius="20px"
      position="fixed" 
      zIndex="20"
      transition="0.5s ease all"
      margin="20px"
      marginLeft={props.marginCard}
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Heading marginLeft="20px" fontSize="lg">Asignaturas</Heading>
        <Button 
          bg="#DADADA" 
          borderRadius="full" 
          margin="10px" 
          padding="0px"
          onClick={handleCloseButton}
        >
          <BsChevronLeft fontSize="15px"/>
        </Button>
      </Flex>

      <Flex flexDirection="column" h="100%">
        
        <YearDropdown year="Año 1"/>
        <YearDropdown year="Año 2"/>
      </Flex>
    </Flex>
  )
}
