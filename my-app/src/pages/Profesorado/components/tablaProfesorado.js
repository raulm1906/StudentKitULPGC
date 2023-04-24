import React from 'react'
import { ChakraProvider } from '@chakra-ui/react';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
  } from '@chakra-ui/react'

function TableProf({tutorias}){
    return (
        
        <ChakraProvider>
        <h2> Primer Semestre</h2>

        <Table variant="simple"  size="md">
            <Thead>
                <Tr borderWidth={"0px"}>
                    <Th border= {"0px"} borderRight={"2px"} borderRadius borderRightColor="white" textAlign >Lunes</Th>
                    <Th border= {"0px"} borderRight={"2px"} borderRightColor="white" textAlign >Martes</Th>
                    <Th border= {"0px"} borderRight={"2px"} borderRightColor="white" textAlign >Miércoles</Th>
                    <Th border= {"0px"} borderRight={"2px"} borderRightColor="white" textAlign >Jueves</Th>
                    <Th border={"0px"} textAlign>Viernes</Th>
                </Tr>    
            </Thead>
            <Tbody>
                <Tr>
                    <Td border= {"0px"} borderRight={"2px"} borderRightColor="white" textAlign>{tutorias[0].firstSemester.LUNES}</Td>
                    <Td border= {"0px"} borderRight={"2px"} borderRightColor="white" textAlign>{tutorias[0].firstSemester.MARTES}</Td>
                    <Td border= {"0px"} borderRight={"2px"} borderRightColor="white" textAlign>{tutorias[0].firstSemester.MIERCOLES}</Td>
                    <Td border= {"0px"} borderRight={"2px"} borderRightColor="white" textAlign>{tutorias[0].firstSemester.JUEVES}</Td>
                    <Td border= {"0px"} textAlign>{tutorias[0].firstSemester.VIERNES}</Td>
                </Tr>
            </Tbody>
        </Table>
        <h2 className="m-10"> Segundo Semestres </h2>
        <Table variant="simple"  size="md">
            <Thead>
                <Tr borderWidth={"0px"}>
                    <Th border= {"0px"} borderRight={"2px"} borderRadius borderRightColor="white" textAlign >Lunes</Th>
                    <Th border= {"0px"} borderRight={"2px"} borderRightColor="white" textAlign >Martes</Th>
                    <Th border= {"0px"} borderRight={"2px"} borderRightColor="white" textAlign >Miércoles</Th>
                    <Th border= {"0px"} borderRight={"2px"} borderRightColor="white" textAlign >Jueves</Th>
                    <Th border={"0px"} textAlign>Viernes</Th>
                </Tr>    
            </Thead>
            <Tbody>
                <Tr>
                <Td border= {"0px"} borderRight={"2px"} borderRightColor="white" textAlign>{tutorias[0].secondSemester.LUNES}</Td>
                <Td border= {"0px"} borderRight={"2px"} borderRightColor="white" textAlign>{tutorias[0].secondSemester.MARTES}</Td>
                <Td border= {"0px"} borderRight={"2px"} borderRightColor="white" textAlign>{tutorias[0].secondSemester.MIERCOLES}</Td>
                <Td border= {"0px"} borderRight={"2px"} borderRightColor="white" textAlign>{tutorias[0].secondSemester.JUEVES}</Td>
                <Td border= {"0px"} textAlign>{tutorias[0].firstSemester.VIERNES}</Td>
                </Tr>
            </Tbody>
        </Table>
    </ChakraProvider>
    )
}

export default TableProf;