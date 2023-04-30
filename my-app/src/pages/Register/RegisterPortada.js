import React from "react";
import { Box, Image, Center } from "@chakra-ui/react";
import imagen from "./Group 22.svg";
import {useTranslation} from "react-i18next";


function RegisterPortada() {

    const [t, i18n] = useTranslation('common');
  
    return (
    <div className=" text-center w-100 registerPortada">
        <h1>{t('Portada.mensajePortada1')}</h1>
        <h5>{t('Portada.mensajePortada2')}</h5>
        <h4>{t('Portada.mensajePortada3')}</h4>
        <Center>
        <Box>
            <img src={imagen} alt="ULPGC" />
        </Box>
        </Center>
    </div>
    )
}

export default RegisterPortada;