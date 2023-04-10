import React from "react";
import { Box, Image, Center } from "@chakra-ui/react";

import './forms.css';

function RegisterPortada() {
  
    return (
    <div className="registerPortada">
        <h1>La mejor herramienta como <br></br> estudiante de la ULPGC</h1>
        <h5>(y también la última)</h5>
        <h4>
            Accede de forma rápida a la información del profesorado, 
            asignatursas y cursos, y create un horario personal!
        </h4>
        <Center>
        <Box>
            <Image src='https://via.placeholder.com/150' alt='Dan Abramov' />
        </Box>
        </Center>
    </div>
    )
}

export default RegisterPortada;