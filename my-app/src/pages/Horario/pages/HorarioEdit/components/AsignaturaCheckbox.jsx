import React, { useContext } from 'react'
import { Flex, Text, Button, Checkbox } from '@chakra-ui/react'
import { useState } from 'react'
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu'
import { AiFillCaretDown } from 'react-icons/ai'
import { Icon } from '@chakra-ui/icon' 
import AppContext from '../../../../../app/AppContext'
import { v4 as uuidv4 } from 'uuid'


const daysOfWeek = {
        "LUNES": 1,
        "MARTES": 2,
        "MIERCOLES": 3,
        "JUEVES": 4,
        "VIERNES": 5
    }

function createEvents(sessions, id){
    return sessions.map(session =>({
        id: uuidv4(),
        title: `${id} Grupo ${session.Group}`,
        startTime: session.IHour,
        endTime: session.FHour,
        daysOfWeek: [daysOfWeek[`${session.Day}`]], // 1 = Monday
        startRecur: '2023-03-01T00:00:00', 
        endRecur: '2024-05-01T00:00:00',
        rrule: {
            freq: 'weekly',
            interval: 1,
        },
    }))
}

export default function AsignaturaCheckbox({ id, name }) {
    const datos = require(`/src/data/subjectSchedules/${id}.json`)

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

        const eventsTheory = createEvents(sessionsTheory, id)
        const eventsPractice = createEvents(sessionsPractice, id)

        setEvents([...events, ...eventsTheory, ...eventsPractice])
    }

    function handleDeleteEvents(id){
        setEvents(prevEvents => prevEvents.filter(event => event.id !== id));
    }

    function handleCheckBoxChange(e){
        setIsChecked(e.target.checked)
        if(e.target.checked) {
            handleNewEvents()
        }
    } 

    return (
    <Flex flexDirection="row" justifyContent="space-between">
            <Checkbox marginLeft="10px" checked={isChecked} onChange={handleCheckBoxChange}>
                <Text fontWeight="semibold" color="#919191">
                    {name}
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
                            <MenuItem onClick={() => handleTheory("1")}>Grupo 1</MenuItem>
                            <MenuItem onClick={() => handleTheory("2")}>Grupo 2</MenuItem>
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
                            <MenuItem onClick={() => handlePractice("17")}>Grupo 17</MenuItem>
                            <MenuItem onClick={() => handlePractice("18")}>Grupo 18</MenuItem>
                            <MenuItem onClick={() => handlePractice("19")}>Grupo 19</MenuItem>
                            <MenuItem onClick={() => handlePractice("20")}>Grupo 20</MenuItem>
                            <MenuItem onClick={() => handlePractice("22")}>Grupo 22</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </Flex>
        </Flex>
  )
}
