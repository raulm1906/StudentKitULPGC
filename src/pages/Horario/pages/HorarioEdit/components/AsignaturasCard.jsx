import { Button } from '@chakra-ui/button'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { Collapse } from '@chakra-ui/transition'
import React from 'react'
import { useState } from 'react'
import { AiFillCaretDown } from 'react-icons/ai'
import { BsChevronLeft } from 'react-icons/bs'
import { Icon } from '@chakra-ui/icon' 

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
      <Button 
        onClick={handleToggle} 
        mb={2} display="flex" 
        justifyContent="space-between" 
      >
        <Text>Año 1</Text>
        <Icon as={AiFillCaretDown}/>
      </Button>
      <Collapse in={isOpen}>
        <Text marginLeft="20px">Asignatura 1</Text>
        <Text marginLeft="20px">Asignatura 2</Text>
        <Text marginLeft="20px">Asignatura 3</Text>
        <Text marginLeft="20px">Asignatura 4</Text>
      </Collapse>

      <Button 
        onClick={handleToggle} 
        mb={2} display="flex" 
        justifyContent="space-between" 
      >
        <Text>Año 2</Text>
        <Icon as={AiFillCaretDown}/>
      </Button>
      <Collapse in={isOpen}>
        <Text marginLeft="20px">Asignatura 1</Text>
        <Text marginLeft="20px">Asignatura 2</Text>
        <Text marginLeft="20px">Asignatura 3</Text>
        <Text marginLeft="20px">Asignatura 4</Text>
      </Collapse>
      </Flex>
    </Flex>
  )
}
