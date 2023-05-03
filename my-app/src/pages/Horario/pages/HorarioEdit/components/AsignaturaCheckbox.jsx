import React, { useContext } from 'react'
import { Flex, Text, Button, Checkbox } from '@chakra-ui/react'
import { useState } from 'react'
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu'
import { AiFillCaretDown } from 'react-icons/ai'
import { Icon } from '@chakra-ui/icon' 
import AppContext from '../../../../../app/AppContext'
import { createEvents, getInitials } from '../utils/utils'


export default function AsignaturaCheckbox({ subject }) {
    const initials = getInitials(subject.name)
    const lessons = subject.lessons
    const groupMapping = {
        41: 17,
        42: 17,
        43: 18,
        44: 18,
        45: 19,
        46: 19,
        47: 20,
        48: 20,
        49: 21,
        50: 21,
        51: 22,
        52: 22
      }

    const [isChecked, setIsChecked] = useState(false)
    const {events, setEvents} = useContext(AppContext)
    const [groupTheory, setGroupTheory] = useState(null)
    const [groupPractice, setGroupPractice] = useState(null)

    function getActualGroup(group) {
        return groupMapping[group] || group;
    }

    function handleTheory(group){
        setGroupTheory(group)
    }
    
    function handlePractice(group){
        setGroupPractice(group)
    }    

    function handleNewEvents(){
        const sessionsTheory = lessons.filter(item => item.group === groupTheory)
        const sessionsPractice = lessons.filter(item => item.group === getActualGroup(groupPractice))
        console.log(sessionsPractice)
        const sessionsPracticeInClassroom = lessons.filter(item => item.group === groupPractice)


        const eventsTheory = createEvents(sessionsTheory, initials, "#FEAD57")
        const eventsPractice = createEvents(sessionsPractice, initials, "#1FACE8")
        const eventsPracticeInClassroom = createEvents(sessionsPracticeInClassroom, initials, "#71D359")

        setEvents([...events, ...eventsTheory, ...eventsPractice, ...eventsPracticeInClassroom])

    }

    function handleDeleteEvents(){
        setEvents(events.filter(event => event.subject_code !== subject.code.toString()))
    }

    function handleCheckBoxChange(e){
        setIsChecked(e.target.checked)
        if(e.target.checked) {
            handleNewEvents()
        }else{
            handleDeleteEvents()
        }
    } 

    return (
    <Flex flexDirection="row" justifyContent="space-between">
            <Checkbox marginLeft="10px" checked={isChecked} onChange={handleCheckBoxChange}>
                <Text fontWeight="semibold" color="#919191">
                    {initials}
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
                            <MenuItem onClick={() => handleTheory(1)}>Grupo 1</MenuItem>
                            <MenuItem onClick={() => handleTheory(2)}>Grupo 2</MenuItem>
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
                            <MenuItem onClick={() => handlePractice(41)}>Grupo 41</MenuItem>
                            <MenuItem onClick={() => handlePractice(42)}>Grupo 42</MenuItem>
                            <MenuItem onClick={() => handlePractice(43)}>Grupo 43</MenuItem>
                            <MenuItem onClick={() => handlePractice(44)}>Grupo 44</MenuItem>
                            <MenuItem onClick={() => handlePractice(45)}>Grupo 45</MenuItem>
                            <MenuItem onClick={() => handlePractice(46)}>Grupo 46</MenuItem>
                            <MenuItem onClick={() => handlePractice(47)}>Grupo 47</MenuItem>
                            <MenuItem onClick={() => handlePractice(48)}>Grupo 48</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </Flex>
        </Flex>
  )
}