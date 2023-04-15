<<<<<<< HEAD
import React from 'react'
import { ChakraProvider } from '@chakra-ui/react';
=======
import React, { useEffect,useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react';
import { Box } from "@chakra-ui/react";
>>>>>>> main
import {
    Table,
    Thead,
    Tbody,
<<<<<<< HEAD
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
=======
    Tr,
    Th,
    Td,
  } from '@chakra-ui/react'


function TimeTable({horas}){

  const initialDayState = {
    "8:30": "",
    "9:30": "",
    "10:30": "",
    "11:30": "",
    "12:30": "",
    "13:30": "",
    "14:30": "",
    "15:30": "",
    "16:30": "",
    "17:30": "",
    "18:30": "",
    "19:30": "",
    "20:30": "",
  };

  const [lunes, setLunes] = useState({});
  const [martes, setMartes] = useState({});
  const [miercoles, setMiercoles] = useState({});
  const [jueves, setJueves] = useState({});
  const [viernes, setViernes] = useState({});

  useEffect(() => {
    setLunes(initialDayState);
    setMartes(initialDayState);
    setMiercoles(initialDayState);
    setJueves(initialDayState);
    setViernes(initialDayState);
    for(let i in horas){
      switch (horas[i].Day) {
        case "LUNES":
          setLunes(prevState => ({
            ...prevState,
            [horas[i].IHour]: horas[i].Classroom
          }));
          break;
        case "MARTES":
          setMartes(prevState => ({
            ...prevState,
            [horas[i].IHour]: horas[i].Classroom
          }));
          break;
        case "MIERCOLES":
          setMiercoles(prevState => ({
            ...prevState,
            [horas[i].IHour]: horas[i].Classroom
          }));
          break;
        case "JUEVES":
          setJueves(prevState => ({
            ...prevState,
            [horas[i].IHour]: horas[i].Classroom
          }));
        case "JUEVES":
          setJueves(prevState => ({
            ...prevState,
            [horas[i].IHour]: horas[i].Classroom
          }));
        default:
          //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
          break;
      }
    };
  }, [horas])

  const coloredCell = (value) => {
    return value ? <Box bg="green.100" p={0} margin={0} height={10}>{value}</Box> : "";
  };

   return (
      <ChakraProvider>
      <Table variant="simple"  size="md" textAlign={"center"} borderRadius="md" border="1px solid"> 
          <Thead>
              <Tr alignContent={"center"} border="1px solid">
                  <Th border="1px solid" >Mañana/Tarde</Th>
                  <Th border="1px solid">Lunes</Th>
                  <Th border="1px solid">Martes</Th>    
                  <Th border="1px solid">Miercoles</Th>    
                  <Th border="1px solid">Jueves</Th>    
                  <Th border="1px solid">Viernes</Th>
              </Tr>    
          </Thead>
          <Tbody>
              <Tr>
                  <Td margin={5} p={0} border="1px solid" textAlign>8:30-9:30</Td>
                  <Td margin={5} p={0} border="1px solid" textAlign>{coloredCell(lunes['8:30'])}</Td>
                  <Td margin={5} p={0} border="1px solid" textAlign>{coloredCell(martes['8:30'])}</Td>
                  <Td margin={5} p={0} border="1px solid" textAlign>{coloredCell(miercoles['8:30'])}</Td>
                  <Td margin={5} p={0} border="1px solid" textAlign>{coloredCell(jueves['8:30'])}</Td>
                  <Td margin={5} p={0} border="1px solid" textAlign>{coloredCell(viernes['8:30'])}</Td>
              </Tr>
              <Tr>
                  <Td margin={5} p={0} border="1px solid" textAlign>9:30-10:30</Td>
                  <Td margin={5} p={0} border="1px solid" textAlign>{coloredCell(lunes['9:30'])}</Td>
                  <Td margin={5} p={0} border="1px solid" textAlign>{coloredCell(martes['9:30'])}</Td>
                  <Td margin={5} p={0} border="1px solid" textAlign>{coloredCell(miercoles['9:30'])}</Td>
                  <Td margin={5} p={0} border="1px solid" textAlign>{coloredCell(jueves['9:30'])}</Td>
                  <Td margin={5} p={0} border="1px solid" textAlign>{coloredCell(viernes['9:30'])}</Td>
              </Tr>
              <Tr>
                  <Td margin={5} p={0} border="1px solid" textAlign>10:30-11:30</Td>
                  <Td margin={5} p={0} border="1px solid" textAlign>{coloredCell(lunes['10:30'])}</Td>
                  <Td margin={5} p={0} border="1px solid" textAlign>{coloredCell(martes['10:30'])}</Td>
                  <Td margin={5} p={0} border="1px solid" textAlign>{coloredCell(miercoles['10:30'])}</Td>
                  <Td margin={5} p={0} border="1px solid" textAlign>{coloredCell(jueves['10:30'])}</Td>
                  <Td margin={5} p={0} border="1px solid" textAlign>{coloredCell(viernes['10:30'])}</Td>
              </Tr>
              <Tr>
                  <Td margin={5} p={0} border="1px solid" textAlign>11:30-12:30</Td>
                  <Td margin={5} p={0} border="1px solid" textAlign>{coloredCell(lunes["11:30"])}</Td>
                  <Td margin={5} p={0} border="1px solid" textAlign>{coloredCell(martes['11:30'])}</Td>
                  <Td margin={5} p={0} border="1px solid" textAlign>{coloredCell(miercoles['11:30'])}</Td>
                   <Td margin={5} p={0} border="1px solid" textAlign>{coloredCell(jueves['11:30'])}</Td>
                   <Td margin={5} p={0} border="1px solid" textAlign>{coloredCell(viernes['11:30'])}</Td>
              </Tr>
              <Tr>
                  <Td margin={5} p={0} border="1px solid" textAlign>12:30-13:30</Td>
                  <Td margin={5} p={0} border="1px solid" textAlign>{coloredCell(lunes["12:30"])}</Td>
                   <Td margin={5} p={0} border="1px solid" textAlign>{coloredCell(martes['12:30'])}</Td>
                   <Td margin={5} p={0} border="1px solid" textAlign>{coloredCell(miercoles['12:30'])}</Td>
                   <Td margin={5} p={0} border="1px solid" textAlign>{coloredCell(jueves['12:30'])}</Td>
                   <Td margin={5} p={0} border="1px solid" textAlign>{coloredCell(viernes['12:30'])}</Td>
              </Tr>
              <Tr>
                  <Td margin={5} p={0} border="1px solid" textAlign>13:30-14:30</Td>
                  <Td margin={5} p={0} border="1px solid" textAlign>{coloredCell(lunes["13:30"])}</Td>
                   <Td margin={5} p={0} border="1px solid" textAlign>{coloredCell(martes['13:30'])}</Td>
                   <Td margin={5} p={0} border="1px solid" textAlign>{coloredCell(miercoles['13:30'])}</Td>
                   <Td margin={5} p={0} border="1px solid" textAlign>{coloredCell(jueves['13:30'])}</Td>
                   <Td margin={5} p={0} border="1px solid" textAlign>{coloredCell(viernes['13:30'])}</Td>
              </Tr>
              <Tr>
                  <Td margin={5} p={0} border="1px solid" textAlign>14:30-15:30</Td>
                  <Td margin={5} p={0} border="1px solid" textAlign>{coloredCell(lunes["14:30"])}</Td>
                   <Td margin={5} p={0} border="1px solid" textAlign>{coloredCell(martes['14:30'])}</Td>
                   <Td margin={5} p={0} border="1px solid" textAlign>{coloredCell(miercoles['14:30'])}</Td>
                   <Td margin={5} p={0} border="1px solid" textAlign>{coloredCell(jueves['14:30'])}</Td>
                   <Td margin={5} p={0} border="1px solid" textAlign>{coloredCell(viernes['14:30'])}</Td>
              </Tr>
              <Tr>
                  <Td margin={5} p={0} border="1px solid" textAlign>15:30-16:30</Td>
                  <Td margin={5} p={0} border="1px solid" textAlign>{coloredCell(lunes["15:30"])}</Td>
                   <Td margin={5} p={0} border="1px solid" textAlign>{coloredCell(martes['15:30'])}</Td>
                   <Td margin={5} p={0} border="1px solid" textAlign>{coloredCell(miercoles['15:30'])}</Td>
                   <Td margin={5} p={0} border="1px solid" textAlign>{coloredCell(jueves['15:30'])}</Td>
                   <Td margin={5} p={0} border="1px solid" textAlign>{coloredCell(viernes['15:30'])}</Td>
              </Tr>
              <Tr>
                  <Td margin={5} p={0} border="1px solid" textAlign>16:30-17:30</Td>
                  <Td margin={5} p={0} border="1px solid" textAlign>{coloredCell(lunes["16:30"])}</Td>
                   <Td margin={5} p={0} border="1px solid" textAlign>{coloredCell(martes['16:30'])}</Td>
                   <Td margin={5} p={0} border="1px solid" textAlign>{coloredCell(miercoles['16:30'])}</Td>
                   <Td margin={5} p={0} border="1px solid" textAlign>{coloredCell(jueves['16:30'])}</Td>
                   <Td margin={5} p={0} border="1px solid" textAlign>{coloredCell(viernes['16:30'])}</Td>
              </Tr>
              <Tr>
                  <Td margin={5} p={0} border="1px solid" textAlign>17:30-18:30</Td>
                  <Td margin={5} p={0} border="1px solid" textAlign>{coloredCell(lunes["17:30"])}</Td>
                   <Td margin={5} p={0} border="1px solid" textAlign>{coloredCell(martes['17:30'])}</Td>
                   <Td margin={5} p={0} border="1px solid" textAlign>{coloredCell(miercoles['17:30'])}</Td>
                   <Td margin={5} p={0} border="1px solid" textAlign>{coloredCell(jueves['17:30'])}</Td>
                   <Td margin={5} p={0} border="1px solid" textAlign>{coloredCell(viernes['17:30'])}</Td>
              </Tr>
              <Tr>
                  <Td margin={5} p={0} border="1px solid" textAlign>18:30-19:30</Td>
                  <Td margin={5} p={0} border="1px solid" textAlign>{coloredCell(lunes["18:30"])}</Td>
                   <Td margin={5} p={0} border="1px solid" textAlign>{coloredCell(martes['18:30'])}</Td>
                   <Td margin={5} p={0} border="1px solid" textAlign>{coloredCell(miercoles['18:30'])}</Td>
                   <Td margin={5} p={0} border="1px solid" textAlign>{coloredCell(jueves['18:30'])}</Td>
                   <Td margin={5} p={0} border="1px solid" textAlign>{coloredCell(jueves['18:30'])}</Td>
              </Tr>
              <Tr>
                  <Td margin={5} p={0} border="1px solid" textAlign>19:30-20:30</Td>
                  <Td margin={5} p={0} border="1px solid" textAlign>{coloredCell(lunes["20:30"])}</Td>
                   <Td margin={5} p={0} border="1px solid" textAlign>{coloredCell(martes['20:30'])}</Td>
                   <Td margin={5} p={0} border="1px solid" textAlign>{coloredCell(miercoles['20:30'])}</Td>
                   <Td margin={5} p={0} border="1px solid" textAlign>{coloredCell(jueves['20:30'])}</Td>
                   <Td margin={5} p={0} border="1px solid" textAlign>{coloredCell(jueves['20:30'])}</Td>
              </Tr>
          </Tbody>
      </Table>
  </ChakraProvider>
  )
}

export default TimeTable;
>>>>>>> main
