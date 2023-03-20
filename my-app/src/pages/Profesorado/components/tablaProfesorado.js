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
                    <Td border= {"0px"} borderRight={"2px"} borderRightColor="white" textAlign>{tutorias.LUNES}</Td>
                    <Td border= {"0px"} borderRight={"2px"} borderRightColor="white" textAlign>{tutorias.MARTES}</Td>
                    <Td border= {"0px"} borderRight={"2px"} borderRightColor="white" textAlign>{tutorias.MIERCOLES}</Td>
                    <Td border= {"0px"} borderRight={"2px"} borderRightColor="white" textAlign>{tutorias.JUEVES}</Td>
                    <Td border= {"0px"} textAlign>{tutorias.VIERNES}</Td>
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
                <Td border= {"0px"} borderRight={"2px"} borderRightColor="white" textAlign>{tutorias.LUNES}</Td>
                <Td border= {"0px"} borderRight={"2px"} borderRightColor="white" textAlign>{tutorias.MARTES}</Td>
                <Td border= {"0px"} borderRight={"2px"} borderRightColor="white" textAlign>{tutorias.MIERCOLES}</Td>
                <Td border= {"0px"} borderRight={"2px"} borderRightColor="white" textAlign>{tutorias.JUEVES}</Td>
                <Td border= {"0px"} textAlign>{tutorias.VIERNES}</Td>
                </Tr>
            </Tbody>
        </Table>
    </ChakraProvider>
    )
}

export default TableProf;