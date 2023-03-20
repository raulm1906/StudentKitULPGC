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
        <Table size="md">
            <Thead>
                <Tr>
                    <Th>Mañana/Tarde</Th>
                    <Th>Lunes</Th>
                    <Th>Martes</Th>    
                    <Th>Miercoles</Th>    
                    <Th>Jueves</Th>    
                    <Th>Viernes</Th>
                </Tr>    
            </Thead>
            <Tbody>
                <Tr>
                    <Td>8:30-9:30</Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                </Tr>
                <Tr>
                    <Td>9:30-10:30</Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                </Tr>
                <Tr>
                    <Td>10:30-11:30</Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                </Tr>
                <Tr>
                    <Td>11:30-12:30</Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                </Tr>
                <Tr>
                    <Td>12:30-13:30</Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                </Tr>
                <Tr>
                    <Td>13:30-14:30</Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                </Tr>
            </Tbody>
        </Table>
    </ChakraProvider>
    )
}

export default TableProf;