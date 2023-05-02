import React, { useContext } from 'react'
import { Flex, Text, Button, Checkbox } from '@chakra-ui/react'
import { useState } from 'react'
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu'
import { AiFillCaretDown } from 'react-icons/ai'
import { Icon } from '@chakra-ui/icon' 
import AppContext from '../../../../../app/AppContext'
import { createEvents } from '../utils/utils'


export default function AsignaturaCheckbox({ subject }) {
    console.log(subject)
    const datos = "assds"
    {/* Handles state of the checkbox */}
    const [isChecked, setIsChecked] = useState(false)

    {/* Handles the list of events that will be displayed on the schedule */}
    const {events, setEvents} = useContext(AppContext)

    { /* Handles the state of selected theory group */}
    const [groupTheory, setGroupTheory] = useState(null)

    { /* Handles the state of selected practice group */}
    const [groupPractice, setGroupPractice] = useState(null)

    function handleTheory(group){
        setGroupTheory(group)
    }
    
    function handlePractice(group){
        setGroupPractice(group)
    }    

    function handleNewEvents(){
        const sessionsTheory = datos.filter(item => item.Group === groupTheory)
        const sessionsPractice = datos.filter(item => item.Group === groupPractice)

        const eventsTheory = createEvents(sessionsTheory, 40951)
        const eventsPractice = createEvents(sessionsPractice, 40951)

        setEvents([...events, ...eventsTheory, ...eventsPractice])
    }

    function handleDeleteEvents(id){
        setEvents(events.filter(event => event.subject_code !== 40951));
    }

    function handleCheckBoxChange(e){
        setIsChecked(e.target.checked)
        if(e.target.checked) {
            handleNewEvents()
        }else{
            handleDeleteEvents(40951)
        }
    } 

    return (
    <Flex flexDirection="row" justifyContent="space-between">
            <Checkbox marginLeft="10px" checked={isChecked} onChange={handleCheckBoxChange}>
                <Text fontWeight="semibold" color="#919191">
                    {subject.code}
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
                            {groupTheory}
                        </MenuButton>
                        <MenuList>
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
                            {groupPractice}
                        </MenuButton>
                        <MenuList>

                        </MenuList>
                    </Menu>
                </Flex>
            </Flex>
        </Flex>
  )
}
