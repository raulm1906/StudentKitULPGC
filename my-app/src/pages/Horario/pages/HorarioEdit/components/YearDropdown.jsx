import React from 'react'
import { Box, Flex, Heading, Text, Button, Checkbox } from '@chakra-ui/react'
import { Collapse } from '@chakra-ui/transition'
import { useState } from 'react'
import { AiFillCaretDown } from 'react-icons/ai'
import { Icon } from '@chakra-ui/icon' 
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu'



export default function YearDropdown(props) {

    const [isOpen, setIsOpen] = useState(false)
    const handleToggle = () => setIsOpen(!isOpen)

    const [grupoTeoria, setGrupoTeoria] = useState("")
    const handleTeoria = (grupo) => {
        setGrupoTeoria(grupo)
    }

    const [grupoPractica, setGrupoPractica] = useState("")
    const handlePractica = (grupo) => {
        setGrupoPractica(grupo)
    }

  return (
    <>
        <Button 
        onClick={handleToggle} 
        mb={2} display="flex" 
        justifyContent="space-between" 
      >
        <Text> {props.year}</Text>
        <Icon as={AiFillCaretDown}/>
      </Button>
      <Collapse in={isOpen}>
        <Box>
            <Checkbox marginLeft="10px">
                <Text fontWeight="semibold" color="#919191">
                    Asignatura 1
                </Text>
            </Checkbox>
        </Box>
        <Flex flexDirection="row" justifyContent="space-between">
            <Checkbox marginLeft="10px">
                <Text fontWeight="semibold" color="#919191">
                    MN
                </Text>
            </Checkbox>
            <Flex>
                <Flex flexDirection="column" marginLeft="10px" marginRight="10px" alignItems="center">
                    <Text fontSize="xs">Teoría</Text>
                    <Menu>
                        <MenuButton 
                            as={Button} 
                            fontSize="xs" 
                            size="xs"
                            bg="white" 
                            rightIcon={<Icon fontSize="10px" as={AiFillCaretDown}/>}
                            style={{ 
                                width: "70px",
                                padding: "0.5rem",
                                borderRadius: "0.375rem",
                                fontWeight: "normal",
                                fontSize: "10px"
                            }}
                        >
                            {grupoTeoria}
                        </MenuButton>
                        <MenuList>
                            <MenuItem onClick={() => handleTeoria("Grupo 1")}>Grupo 1</MenuItem>
                            <MenuItem onClick={() => handleTeoria("Grupo 2")}>Grupo 2</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
                <Flex flexDirection="column" marginLeft="10px" marginRight="10px" alignItems="center">
                    <Text fontSize="xs">Práctica</Text>
                    <Menu>
                        <MenuButton 
                            as={Button} 
                            fontSize="xs" 
                            size="xs"
                            bg="white" 
                            rightIcon={<Icon fontSize="10px" as={AiFillCaretDown}/>}
                            style={{ 
                                width: "70px",
                                padding: "0.5rem",
                                borderRadius: "0.375rem",
                                fontWeight: "normal",
                                fontSize: "10px"
                            }}
                        >
                            {grupoPractica}
                        </MenuButton>
                        <MenuList>
                            <MenuItem onClick={() => handlePractica("Grupo 42")}>Grupo 42</MenuItem>
                            <MenuItem onClick={() => handlePractica("Grupo 43")}>Grupo 43</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </Flex>
        </Flex>
      </Collapse>
    </>
  )
}
