import { Flex, Heading, Button } from '@chakra-ui/react'
import React from 'react'
import { BsChevronLeft } from 'react-icons/bs'
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

  return (
    <Flex
      as="section"
      flexDirection="column"
      w="300px"
      h="65%" 
      bg="#f0f0f0"
      borderRadius="20px"
      position="absolute" 
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

      <Flex flexDirection="column" h="90%" pb={3} px={1} overflowY="scroll">
        
        <YearDropdown year={1}/>
        <YearDropdown year={2}/>
        <YearDropdown year={3}/>
        <YearDropdown year={4}/>
        
      </Flex>
    </Flex>
  )
}
