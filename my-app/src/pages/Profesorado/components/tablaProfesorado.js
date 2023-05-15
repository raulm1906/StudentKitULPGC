import React, {useEffect,useState} from 'react'
import { ChakraProvider } from '@chakra-ui/react';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
  } from '@chakra-ui/react';
import LoadingIcon from '../../../LoadingIcon';
import { useTranslation } from 'react-i18next';
function TableProf({tutorias}){
    const [t, i18n] = useTranslation('common');
    const [Flunes,setFlunes] = useState([])
    const [Fmartes,setFmartes] = useState({})
    const [Fmiercoles,setFmiercoles] = useState({})
    const [Fjueves,setFjueves] = useState({})
    const [Fviernes,setFviernes] = useState({})

    const [Slunes,setSlunes] = useState({})
    const [Smartes,setSmartes] = useState({})
    const [Smiercoles,setSmiercoles] = useState({})
    const [Sjueves,setSjueves] = useState({})
    const [Sviernes,setSviernes] = useState({})
    
    useEffect(() => {

        if (tutorias === {} || tutorias.length === undefined) {
            
        }else{ 
            setFlunes((tutorias.filter(item => item.day === 1 && item.semester ==="1"))); 
            setFmartes(tutorias.filter(item => item.day  === 2 && item.semester ==="1"));
            setFmiercoles(tutorias.filter(item => item.day === 3 && item.semester ==="1"));
            setFjueves(tutorias.filter(item => item.day === 4 && item.semester ==="1"));
            setFviernes(tutorias.filter(item => item.day === 5 && item.semester ==="1"));
            setSlunes((tutorias.filter(item => item.day === 1 && item.semester ==="1")));
            setSmartes(tutorias.filter(item => item.day  === 2 && item.semester ==="2"));
            setSmiercoles(tutorias.filter(item => item.day === 3 && item.semester ==="3"));
            setSjueves(tutorias.filter(item => item.day === 4 && item.semester ==="4"));
            setSviernes(tutorias.filter(item => item.day === 5 && item.semester ==="5"));
        }
      }, [tutorias]);

    return (
        
        <ChakraProvider>

        <h2>{t('tablaProfesorado.1')}</h2>

        <Table variant="simple"  size="md">
            <Thead>
                <Tr borderWidth={"0px"}> 
                    <Th border= {"0px"} borderRight={"2px"} borderRadius borderRightColor="white" textAlign  >{t('Day.Monday')}</Th>
                    <Th border= {"0px"} borderRight={"2px"} borderRightColor="white" textAlign >{t('Day.Tuesday')}</Th>
                    <Th border= {"0px"} borderRight={"2px"} borderRightColor="white" textAlign >{t('Day.Wednesday')}</Th>
                    <Th border= {"0px"} borderRight={"2px"} borderRightColor="white" textAlign >{t('Day.Thursday')}</Th>
                    <Th border={"0px"} textAlign>{t('Day.Friday')}</Th>
                </Tr>     
            </Thead>

   
            <Tbody>
                <Tr>
<<<<<<< HEAD
                    <Td border= {"0px"} borderRight={"2px"} borderRightColor="white" textAlign>{tutorias[0].firstSemester.Monday}</Td>
                    <Td border= {"0px"} borderRight={"2px"} borderRightColor="white" textAlign>{tutorias[0].firstSemester.Tuesday}</Td>
                    <Td border= {"0px"} borderRight={"2px"} borderRightColor="white" textAlign>{tutorias[0].firstSemester.Wednesday}</Td>
                    <Td border= {"0px"} borderRight={"2px"} borderRightColor="white" textAlign>{tutorias[0].firstSemester.Thursday}</Td>
                    <Td border= {"0px"} textAlign>{tutorias[0].firstSemester.Friday}</Td>
                </Tr>
            </Tbody>
        </Table>
        
=======
                    <Td border= {"0px"} borderRight={"2px"} borderRightColor="white" textAlign maxW='20'>
                    {`${Flunes[0]?.start_time || '----'} - ${Flunes[0]?.ending_time || '----'}`}
                    </Td>
                    <Td border= {"0px"} borderRight={"2px"} borderRightColor="white" textAlign maxW='20'>
                    {`${Fmartes[0]?.start_time || '----'} - ${Fmartes[0]?.ending_time || '----'}`}
                    </Td>
                    <Td border= {"0px"} borderRight={"2px"} borderRightColor="white" textAlign maxW='20'>
                    {`${Fmiercoles[0]?.start_time || '----'} - ${Fmiercoles[0]?.ending_time || '----'}`}
                    </Td>
                    <Td border= {"0px"} borderRight={"2px"} borderRightColor="white" textAlign maxW='20'>
                    {`${Fjueves[0]?.start_time || '----'} - ${Fjueves[0]?.ending_time || '----'}`}
                    </Td>
                    <Td border= {"0px"} textAlign maxW='20'>
                    {`${Fviernes[0]?.start_time || '----'} - ${Fviernes[0]?.ending_time || '----'}`}
                    </Td>
                </Tr>
            </Tbody>
        </Table>
>>>>>>> 8768211cd65c6a70c39caf27dfd49e68350c57c4
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
<<<<<<< HEAD
                <Td border= {"0px"} borderRight={"2px"} borderRightColor="white" textAlign>{tutorias[0].secondSemester.Monday}</Td>
                <Td border= {"0px"} borderRight={"2px"} borderRightColor="white" textAlign>{tutorias[0].secondSemester.Tuesday}</Td>
                <Td border= {"0px"} borderRight={"2px"} borderRightColor="white" textAlign>{tutorias[0].secondSemester.Wednesday}</Td>
                <Td border= {"0px"} borderRight={"2px"} borderRightColor="white" textAlign>{tutorias[0].secondSemester.Thursday}</Td>
                <Td border= {"0px"} textAlign>{tutorias[0].firstSemester.Friday}</Td>
=======
                <Td border= {"0px"} borderRight={"2px"} borderRightColor="white" textAlign maxW='20'>{`${Slunes[0]?.start_time || '----'} - ${Slunes[0]?.ending_time || '----'}`}</Td>
                <Td border= {"0px"} borderRight={"2px"} borderRightColor="white" textAlign maxW='20'>{`${Smartes[0]?.start_time || '----'} - ${Smartes[0]?.ending_time || '----'}`}</Td>
                <Td border= {"0px"} borderRight={"2px"} borderRightColor="white" textAlign maxW='20'>{`${Smiercoles[0]?.start_time || '----'} - ${Smiercoles[0]?.ending_time || '----'}`}</Td>
                <Td border= {"0px"} borderRight={"2px"} borderRightColor="white" textAlign maxW='20'>{`${Sjueves[0]?.start_time || '----'} - ${Sjueves[0]?.ending_time || '----'}`}</Td>
                <Td border= {"0px"} borderRight={"2px"} borderRightColor="white" textAlign maxW='20'>{`${Sviernes[0]?.start_time || '----'} - ${Sviernes[0]?.ending_time || '----'}`}</Td>
>>>>>>> 8768211cd65c6a70c39caf27dfd49e68350c57c4
                </Tr>
            </Tbody>
    </Table>
    </ChakraProvider>
    )
}

export default TableProf;