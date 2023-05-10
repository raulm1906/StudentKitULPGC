import React, { useEffect, useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react';
import { Box } from "@chakra-ui/react";
import { Table, Thead, Tbody, Tr, Th, Td} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next';

function TimeTable({ horas }) {
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

  const loopTrough = () => {
    const newLunes = { ...initialDayState };
    const newMartes = { ...initialDayState };
    const newMiercoles = { ...initialDayState };
    const newJueves = { ...initialDayState };
    const newViernes = { ...initialDayState };
    
    horas.forEach((element) => {
      console.log(element)
      const { day, start_time, ending_time, classroom } = element;
      const startHour = parseInt(start_time.substring(0, 2));
      const endHour = parseInt(ending_time.substring(0, 2));
      const duration = endHour - startHour;
      
      switch (day) {
        case 1:
          if (duration == 2) {
            newLunes[start_time] = classroom;
            const new_start_time = startHour + 1
            const newStartTime = (new_start_time < 10 ? '0' : '') + new_start_time.toString() + start_time.substring(2);
            newLunes[newStartTime] = classroom;
          } else {
            newLunes[start_time] = classroom;
          }
          break;
        case 2:
          if (duration == 2) {
            newMartes[start_time] = classroom;
            const new_start_time = startHour + 1
            const newStartTime = (new_start_time < 10 ? '0' : '') + new_start_time.toString() + start_time.substring(2);
            newMartes[newStartTime] = classroom;
          } else {
            newMartes[start_time] = classroom;
          }
          break;
        case 3:
          if (duration == 2) {
            newMiercoles[start_time] = classroom;
            const new_start_time = startHour + 1
            const newStartTime = (new_start_time < 10 ? '0' : '') + new_start_time.toString() + start_time.substring(2);
            newMiercoles[newStartTime] = classroom;
          } else {
            newMiercoles[start_time] = classroom;
          }
          break;
        case 4:
          if (duration == 2) {
            newJueves[start_time] = classroom;
            const new_start_time = startHour + 1
            const newStartTime = (new_start_time < 10 ? '0' : '') + new_start_time.toString() + start_time.substring(2);
            newJueves[newStartTime] = classroom;
          } else {
            newJueves[start_time] = classroom;
          }
          break;
        case 5:
          if (duration == 2) {
            newViernes[start_time] = classroom;
            const new_start_time = startHour + 1
            const newStartTime = (new_start_time < 10 ? '0' : '') + new_start_time.toString() + start_time.substring(2);
            newViernes[newStartTime] = classroom;
          } else {
            newViernes[start_time] = classroom;
          }
          break;
        default:
          break;
      }
    });
    
    setLunes(newLunes);
    setMartes(newMartes);
    setMiercoles(newMiercoles);
    setJueves(newJueves);
    setViernes(newViernes);
  };  
  
  useEffect(() => {
    loopTrough();
  }, [horas]);  

  
  const coloredCell = (value) => {
    console.log(value)
    if (value == null) {
      return "";
    }
    if (value.charAt(0) === 'L') {
      return value ? <Box bg="#FDD85A" p={0} margin={0} height={"100%"}>{value}</Box> : "";
    }
    return value ? <Box bg="#99BC59" p={0} margin={0} height={"100%"}>{value}</Box> : "";
  };

  return ( 
    <ChakraProvider>
      <Table variant="simple" marginTop={"2%"} size="md" textAlign={"center"} borderRadius="md" border="1px solid">
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
            <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>13:30-14:30</Td>
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
            <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>{coloredCell(lunes["19:30:00"])}</Td>
            <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>{coloredCell(martes['19:30:00'])}</Td>
            <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>{coloredCell(miercoles['19:30:00'])}</Td>
            <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>{coloredCell(jueves['19:30:00'])}</Td>
            <Td height={"2rem"} margin={5} p={0} border="1px solid" textAlign>{coloredCell(jueves['19:30:00'])}</Td>
          </Tr>
        </Tbody>
      </Table>
    </ChakraProvider>
  )
}

export default TimeTable;
