import React from "react";
import { Box, Image, Center } from "@chakra-ui/react";
import imagen from "./Group 22.svg";


function RegisterPortada() {
  
    return (
    <div className=" text-center w-50 registerPortada">
        <h1>La mejor herramienta como <br></br> estudiante de la ULPGC</h1>
        <h5>(y también la última)</h5>
        <h4>
            Accede de forma rápida a la información del profesorado, 
            asignatursas y cursos, y create un horario personal!
        </h4>
        <Center>
        <Box>
            <img src={imagen} alt="ULPGC" />
        </Box>
        </Center>
    </div>
    )
}

export default RegisterPortada;