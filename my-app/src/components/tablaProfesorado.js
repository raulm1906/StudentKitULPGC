import React from 'react'
import { ChakraProvider } from '@chakra-ui/react';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'

function TableProf(){
    return (
        <ChakraProvider>
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
                    <Td border= {"0px"} borderRight={"2px"} borderRightColor="white" textAlign>-</Td>
                    <Td border= {"0px"} borderRight={"2px"} borderRightColor="white" textAlign>-</Td>
                    <Td border= {"0px"} borderRight={"2px"} borderRightColor="white" textAlign>-</Td>
                    <Td border= {"0px"} borderRight={"2px"} borderRightColor="white" textAlign>-</Td>
                    <Td border= {"0px"} textAlign>-</Td>
                </Tr>
            </Tbody>
        </Table>
    </ChakraProvider>
    )
}

export default TableProf;