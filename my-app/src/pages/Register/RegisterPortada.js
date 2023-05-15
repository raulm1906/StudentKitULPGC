import React from "react";
import { Box, Image, Center } from "@chakra-ui/react";
import imagen from "./Group 22.svg";
import {useTranslation} from "react-i18next";


function RegisterPortada() {

    const [t, i18n] = useTranslation('common');
  
    return (
<<<<<<< HEAD
    <div className=" text-center w-50 registerPortada">
        <h1>La mejor herramienta como <br></br> estudiante de la ULPGC</h1>
        <h5>(y también la última)</h5>
        <h4>
            Accede de forma rápida a la información del profesorado, 
            asignatursas y cursos, y create un horario personal!
        </h4>
=======
    <div className=" text-center w-100 registerPortada">
        <h1>{t('Portada.mensajePortada1')}</h1>
        <h5>{t('Portada.mensajePortada2')}</h5>
        <h4>{t('Portada.mensajePortada3')}</h4>
>>>>>>> main
        <Center>
        <Box>
            <img src={imagen} alt="ULPGC" />
        </Box>
        </Center>
    </div>
    )
}

export default RegisterPortada;