import React, {useEffect} from 'react'
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
  import axios from 'axios';
function TableProf({tutorias}){
    const [t, i18n] = useTranslation('common');

    useEffect(() => {
    console.log(tutorias[0]);
    }, [tutorias]);


    
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
                    <Td border= {"0px"} borderRight={"2px"} borderRightColor="white" textAlign>{tutorias[0].firstSemester.Monday}</Td>
                    <Td border= {"0px"} borderRight={"2px"} borderRightColor="white" textAlign>{tutorias[0].firstSemester.Tuesday}</Td>
                    <Td border= {"0px"} borderRight={"2px"} borderRightColor="white" textAlign>{tutorias[0].firstSemester.Wednesday}</Td>
                    <Td border= {"0px"} borderRight={"2px"} borderRightColor="white" textAlign>{tutorias[0].firstSemester.Thursday}</Td>
                    <Td border= {"0px"} textAlign>{tutorias[0].firstSemester.Friday}</Td>
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
                <Td border= {"0px"} borderRight={"2px"} borderRightColor="white" textAlign>{tutorias[0].secondSemester.Monday}</Td>
                <Td border= {"0px"} borderRight={"2px"} borderRightColor="white" textAlign>{tutorias[0].secondSemester.Tuesday}</Td>
                <Td border= {"0px"} borderRight={"2px"} borderRightColor="white" textAlign>{tutorias[0].secondSemester.Wednesday}</Td>
                <Td border= {"0px"} borderRight={"2px"} borderRightColor="white" textAlign>{tutorias[0].secondSemester.Thursday}</Td>
                <Td border= {"0px"} textAlign>{tutorias[0].firstSemester.Friday}</Td>
                </Tr>
            </Tbody>
    </Table>
    </ChakraProvider>
    )
}

export default TableProf;