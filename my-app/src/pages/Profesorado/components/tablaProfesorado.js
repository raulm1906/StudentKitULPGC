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
  import { useTranslation } from 'react-i18next';

function TableProf({tutorias}){
    const [t, i18n] = useTranslation('common');
    return (
        
        <ChakraProvider>
        <h2>{t('tablaProfesorado.1')}</h2>

        <Table variant="simple"  size="md">
            <Thead>
                <Tr borderWidth={"0px"}>
                    <Th border= {"0px"} borderRight={"2px"} borderRadius borderRightColor="white" textAlign >{t('Day.Monday')}</Th>
                    <Th border= {"0px"} borderRight={"2px"} borderRightColor="white" textAlign >{t('Day.Tuesday')}</Th>
                    <Th border= {"0px"} borderRight={"2px"} borderRightColor="white" textAlign >{t('Day.Wednesday')}</Th>
                    <Th border= {"0px"} borderRight={"2px"} borderRightColor="white" textAlign >{t('Day.Thursday')}</Th>
                    <Th border={"0px"} textAlign>{t('Day.Friday')}</Th>
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
        <h2 className="m-10">{t('tablaProfesorado.2')}</h2>
        <Table variant="simple"  size="md">
            <Thead>
                <Tr borderWidth={"0px"}>
                    <Th border= {"0px"} borderRight={"2px"} borderRadius borderRightColor="white" textAlign >{t('Day.Monday')}</Th>
                    <Th border= {"0px"} borderRight={"2px"} borderRightColor="white" textAlign >{t('Day.Tuesday')}</Th>
                    <Th border= {"0px"} borderRight={"2px"} borderRightColor="white" textAlign >{t('Day.Wednesday')}</Th>
                    <Th border= {"0px"} borderRight={"2px"} borderRightColor="white" textAlign >{t('Day.Thursday')}</Th>
                    <Th border={"0px"} textAlign>{t('Day.Friday')}</Th>
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