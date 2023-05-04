import React, { useEffect,useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react';
import { Box } from "@chakra-ui/react";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
  } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next';

function TimeTable({horas,id}){
  const [t, i18n] = useTranslation('common');


  const initialDayState = {
    "08:30:00": "",
    "09:30:00": "",
    "10:30:00": "",
    "11:30:00": "",
    "12:30:00": "",
    "13:30:00": "",
    "14:30:00": "",
    "15:30:00": "",
    "16:30:00": "",
    "17:30:00": "",
    "18:30:00": "",
    "19:30:00": "",
    "20:30:00": "",
  };
 
  const [lunes, setLunes] = useState(initialDayState);
  const [martes, setMartes] = useState(initialDayState);
  const [miercoles, setMiercoles] = useState(initialDayState);
  const [jueves, setJueves] = useState(initialDayState);
  const [viernes, setViernes] = useState(initialDayState);

  const fillHours = (day, start, end, value) => {
    day = { ...day };
    const startIdx = Object.keys(day).indexOf(start);
    const endIdx = Object.keys(day).indexOf(end);

    for (let i = startIdx; i <= endIdx; i++) {
      day[Object.keys(day)[i]] = value;
    }

    return day;
  };

  useEffect(() => {

    setLunes(initialDayState);
    setMartes(initialDayState);
    setMiercoles(initialDayState);
    setJueves(initialDayState);
    setViernes(initialDayState);

    for (let i in horas) {
      switch (horas[i].day) {
        case 1:
          setLunes(fillHours(lunes, horas[i].start_time, horas[i].ending_time, horas[i].classroom));
          break;
        case 2:
          setMartes(fillHours(martes, horas[i].start_time, horas[i].ending_time, horas[i].classroom));
          break;
        case 3:
          setMiercoles(fillHours(miercoles, horas[i].start_time, horas[i].ending_time, horas[i].classroom));
          break;
        case 4:
          setJueves(fillHours(jueves, horas[i].start_time, horas[i].ending_time, horas[i].classroom));
          break;
        case 5:
          setViernes(fillHours(viernes, horas[i].start_time, horas[i].ending_time, horas[i].classroom));
          break;
        default:
          //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
          break;
      }
    }
  }, [horas]);



  const coloredCell = (value) => {
    if (value == null) {
      return "";
    }

    
    if(value.charAt(0) === 'L'){
      return value ? <Box bg="#FDD85A" p={0} margin={0} height={"100%"}>{value}</Box> : "";
    }
      return value ? <Box bg="#99BC59" p={0} margin={0} height={"100%"}>{value}</Box> : "";
    };

   return (
      <ChakraProvider>
      <Table variant="simple"  marginTop={"2%"} size="md" textAlign={"center"} borderRadius="md" border="1px solid"> 
          <Thead>
              <Tr alignContent={"center"} border="1px solid">
                  <Th border="1px solid" >{t('Day.Schedule')}</Th>
                  <Th border="1px solid">{t('Day.Monday')}</Th>
                  <Th border="1px solid">{t('Day.Tuesday')}</Th>    
                  <Th border="1px solid">{t('Day.Wednesday')}</Th>    
                  <Th border="1px solid">{t('Day.Thursday')}</Th>    
                  <Th border="1px solid">{t('Day.Friday')}</Th>
              </Tr>    
          </Thead>
          <Tbody>
              <Tr>
                  <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>8:30-9:30</Td>
                  <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>{coloredCell(lunes['08:30:00'])}</Td>
                  <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>{coloredCell(martes['08:30:00'])}</Td>
                  <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>{coloredCell(miercoles['08:30:00'])}</Td>
                  <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>{coloredCell(jueves['08:30:00'])}</Td>
                  <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>{coloredCell(viernes['08:30:00'])}</Td>
              </Tr>
              <Tr>
                  <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>9:30-10:30</Td>
                  <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>{coloredCell(lunes['09:30:00'])}</Td>
                  <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>{coloredCell(martes['09:30:00'])}</Td>
                  <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>{coloredCell(miercoles['09:30:00'])}</Td>
                  <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>{coloredCell(jueves['09:30:00'])}</Td>
                  <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>{coloredCell(viernes['09:30:00'])}</Td>
              </Tr>
              <Tr>
                  <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>10:30-11:30</Td>
                  <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>{coloredCell(lunes['10:30:00'])}</Td>
                  <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>{coloredCell(martes['10:30:00'])}</Td>
                  <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>{coloredCell(miercoles['10:30:00'])}</Td>
                  <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>{coloredCell(jueves['10:30:00'])}</Td>
                  <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>{coloredCell(viernes['10:30:00'])}</Td>
              </Tr>
              <Tr>
                  <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>11:30-12:30</Td>
                  <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>{coloredCell(lunes["11:30:00"])}</Td>
                  <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>{coloredCell(martes['11:30:00'])}</Td>
                  <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>{coloredCell(miercoles['11:30:00'])}</Td>
                   <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>{coloredCell(jueves['11:30:00'])}</Td>
                   <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>{coloredCell(viernes['11:30:00'])}</Td>
              </Tr>
              <Tr>
                  <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>12:30-13:30</Td>
                  <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>{coloredCell(lunes["12:30:00"])}</Td>
                   <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>{coloredCell(martes['12:30:00'])}</Td>
                   <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>{coloredCell(miercoles['12:30:00'])}</Td>
                   <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>{coloredCell(jueves['12:30:00'])}</Td>
                   <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>{coloredCell(viernes['12:30:00'])}</Td>
              </Tr>
              <Tr>
                  <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>13:30:-14:30</Td>
                  <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>{coloredCell(lunes["13:30:00"])}</Td>
                   <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>{coloredCell(martes['13:30:00'])}</Td>
                   <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>{coloredCell(miercoles['13:30:00'])}</Td>
                   <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>{coloredCell(jueves['13:30:00'])}</Td>
                   <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>{coloredCell(viernes['13:30:00'])}</Td>
              </Tr>
              <Tr>
                  <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>14:30-15:30</Td>
                  <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>{coloredCell(lunes["14:30:00"])}</Td>
                   <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>{coloredCell(martes['14:30:00'])}</Td>
                   <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>{coloredCell(miercoles['14:30:00'])}</Td>
                   <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>{coloredCell(jueves['14:30:00'])}</Td>
                   <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>{coloredCell(viernes['14:30:00'])}</Td>
              </Tr>
              <Tr>
                  <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>15:30-16:30</Td>
                  <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>{coloredCell(lunes["15:30:00"])}</Td>
                   <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>{coloredCell(martes['15:30:00'])}</Td>
                   <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>{coloredCell(miercoles['15:30:00'])}</Td>
                   <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>{coloredCell(jueves['15:30:00'])}</Td>
                   <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>{coloredCell(viernes['15:30:00'])}</Td>
              </Tr>
              <Tr>
                  <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>16:30-17:30</Td>
                  <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>{coloredCell(lunes["16:30:00"])}</Td>
                   <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>{coloredCell(martes['16:30:00'])}</Td>
                   <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>{coloredCell(miercoles['16:30:00'])}</Td>
                   <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>{coloredCell(jueves['16:30:00'])}</Td>
                   <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>{coloredCell(viernes['16:30:00'])}</Td>
              </Tr>
              <Tr>
                  <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>17:30-18:30</Td>
                  <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>{coloredCell(lunes["17:30:00"])}</Td>
                   <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>{coloredCell(martes['17:30:00'])}</Td>
                   <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>{coloredCell(miercoles['17:30:00'])}</Td>
                   <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>{coloredCell(jueves['17:30:00'])}</Td>
                   <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>{coloredCell(viernes['17:30:00'])}</Td>
              </Tr>
              <Tr>
                  <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>18:30-19:30</Td>
                  <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>{coloredCell(lunes["18:30:00"])}</Td>
                   <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>{coloredCell(martes['18:30:00'])}</Td>
                   <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>{coloredCell(miercoles['18:30:00'])}</Td>
                   <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>{coloredCell(jueves['18:30:00'])}</Td>
                   <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>{coloredCell(jueves['18:30:00'])}</Td>
              </Tr>
              <Tr>
                  <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>19:30-20:30</Td>
                  <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>{coloredCell(lunes["20:30:00"])}</Td>
                   <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>{coloredCell(martes['20:30:00'])}</Td>
                   <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>{coloredCell(miercoles['20:30:00'])}</Td>
                   <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>{coloredCell(jueves['20:30:00'])}</Td>
                   <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>{coloredCell(jueves['20:30:00'])}</Td>
              </Tr>
          </Tbody>
      </Table>
  </ChakraProvider>
  )
}

export default TimeTable;
