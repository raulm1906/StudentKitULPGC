import React from "react";
import { useEffect, useState } from "react";
import {BiSearchAlt} from 'react-icons/bi'
import { Flex, Box, Text, Heading, List, ListItem, Icon } from "@chakra-ui/react";
import axios from "axios";

function SearchProfesorCard(){
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3001/profesores")
        .then(response => {
            setData(response.data)
        })
        .catch(error => {
            console.log(error)
        })
      }, []);

    return(
        <Flex as="section" h="100%" margin="1rem" bg="#EDECEC" borderRadius="20px" direction="column">
            <Flex as="article" borderBottom="2px solid white" padding={3}>
                <Icon as={BiSearchAlt}></Icon>
                <Heading as="b" fontSize="xl">Profesores</Heading>
            </Flex>
            <Box marginTop={3} maxH="450px" overflowY="scroll" as="article" padding={3}>
                <List spacing={3}>
                    {data.map((profesor) => (
                    <ListItem key={profesor.id}>
                        <Text fontSize="xl">{profesor.nombre}</Text>
                        <Text>{profesor.correo}</Text>
                    </ListItem>
                    ))}
                </List>
                </Box>
        </Flex>
    )

}


export default SearchProfesorCard