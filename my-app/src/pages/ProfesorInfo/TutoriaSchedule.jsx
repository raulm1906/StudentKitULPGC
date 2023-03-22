import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Heading, Spacer } from "@chakra-ui/react";

function TutoriaSchedule(){
    return(
        <Flex as="article" margin={5} direction="column" bg="#d9d9d9" borderRadius="20px" p={4}>
            <Heading textAlign="center" fontSize="md">Primer semestre</Heading>
            <Table variant="striped" colorScheme="gray.500">
            <Thead>
                <Tr color="#919191">
                    <Th w="100px" padding={2} textAlign="center" borderRight="2px solid white">Lunes</Th>
                    <Th w="100px" padding={2} textAlign="center" borderRight="2px solid white">Martes</Th>
                    <Th w="100px" padding={2} textAlign="center" borderRight="2px solid white">Miercoles</Th>
                    <Th w="100px" padding={2} textAlign="center" borderRight="2px solid white">Jueves</Th>
                    <Th w="100px" padding={2} textAlign="center">Viernes</Th>
                </Tr>
            </Thead>
            <Tbody >
                <Tr >
                    <Td w="100px" textAlign="center" borderRight="2px solid white"> - </Td>
                    <Td w="100px" textAlign="center" borderRight="2px solid white"> 10:30 - 11:30 </Td>
                    <Td w="100px" textAlign="center" borderRight="2px solid white"> - </Td>
                    <Td w="100px" textAlign="center" borderRight="2px solid white"> - </Td>
                    <Td w="100px" textAlign="center"> 12:30 - 2:30 </Td>
                </Tr>
            </Tbody>
        </Table>
        <Heading textAlign="center" fontSize="md">Segundo semestre</Heading>
        <Table variant="striped" colorScheme="gray.500">
            <Thead>
                <Tr color="#919191">
                    <Th w="100px" textAlign="center" padding={2} borderRight="2px solid white">Lunes</Th>
                    <Th w="100px" textAlign="center" padding={2} borderRight="2px solid white">Martes</Th>
                    <Th w="100px" textAlign="center" padding={2} borderRight="2px solid white">Miercoles</Th>
                    <Th w="100px" textAlign="center" padding={2} borderRight="2px solid white">Jueves</Th>
                    <Th w="100px" textAlign="center" padding={2}>Viernes</Th>
                </Tr>
            </Thead>
            <Tbody>
                <Tr >
                    <Td w="100px" textAlign="center" borderRight="2px solid white"> 9:30 - 12:30 </Td>
                    <Td w="100px" textAlign="center" borderRight="2px solid white"> - </Td>
                    <Td w="100px" textAlign="center" borderRight="2px solid white"> - </Td>
                    <Td w="100px" textAlign="center" borderRight="2px solid white"> 14:30 - 15:30 </Td>
                    <Td w="100px" textAlign="center"> 12:30 - 2:30 </Td>
                </Tr>
            </Tbody>
        </Table>
    </Flex>
        
        
    )
}


export default TutoriaSchedule