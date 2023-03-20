import { CardBody, CardHeader, Card, Heading, Flex, Box, Text} from "@chakra-ui/react";
import React from "react";
import { useEffect, useState } from "react";
import TutoriaSchedule from "./TutoriaSchedule";
import axios from "axios";

function ProfesorCard() {
    const [profesor, setProfesor] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/profesores/1")
        .then(response => {
            setProfesor(response.data)
        })
        .catch(error => {
            console.log(error)
        })
      }, []);  

    return(
        <Card h="100%" margin={2} bg="#EDECEC" padding={4} borderRadius="20px">
            <CardHeader textAlign="center">
                <Heading fontSize='4xl' as="b">{profesor.nombre}</Heading>
            </CardHeader>
            <CardBody padding={1} maxH="450px" overflowY="scroll">
                <Flex as="article" marginBottom={5} marginTop={5}>
                    <Box flex="1">
                        <Text ><Text as="b">Correo: </Text>{profesor.correo}</Text>
                    </Box>
                    <Box flex="1">
                        <Text ><Text as="b">Despacho: </Text>{profesor.despacho}</Text>
                        <Text ><Text as="b">Telefono: </Text>{profesor.telefono}</Text>
                    </Box>
                </Flex >
                <Flex as="article" direction="column" marginBottom={5}>
                    <Heading as="b" fontSize="xl">Horas de tutoria:</Heading>
                    <TutoriaSchedule/>
                </Flex>
                <Flex direction="column">
                    <Heading fontSize="xl" as="b">Asignaturas impartidas por el profesor:</Heading>
                    <Text >{profesor.correo}</Text>
                    <Text >{profesor.correo}</Text>
                    <Text >{profesor.correo}</Text>
                </Flex>
            </CardBody>
        </Card>
        
    )
}


export default ProfesorCard