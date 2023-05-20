import React, { useEffect } from "react";
import { useState } from "react";
import { FormControl, FormLabel, FormHelperText, FormErrorMessage, Input, Checkbox } from "@chakra-ui/react";
import { Button, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {useTranslation} from "react-i18next";
import { useColorMode } from '@chakra-ui/react';
import '../../components/forms.css'
import RegisterPortada from "../Register/RegisterPortada";
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { saveToken, getToken, decodeToken,isAuthenticated } from "../../authHelper";
function LoginForm() {
    const [token , setToken] = useState("")
    const [redirect, setRedirect] = useState(false);
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [t, i18n] = useTranslation('common');
    const { colorMode } = useColorMode();
  
    const handleEmailInputChange = (e) => setEmailInput(e.target.value);
    const handlePasswordInput = (e) => setPasswordInput(e.target.value);
    const handleRememberMeChange = (e) => setRememberMe(e.target.checked);
    const isEmailError = emailInput === '';


    const handleSubmit = async(e) => {
      e.preventDefault();
      console.log(emailInput,passwordInput)
      const data = {
        "username": emailInput,
        "password": passwordInput,
      };
      try{
        const response = await axios.post('https://django.narurm.eu/usuarios/login/',data)
        console.log(response.data.token)
        saveToken(response.data.token); //guardar el token en memoria usando authHelper
        decodeToken(getToken())
        //setRedirect(true); Esto redirige al home en el caso de que este todo correcto
      }catch(error){
        if (error.response) {
          alert("Contraseña o email no coinciden");
        }
      }
    }



    if (redirect) {
      return <Navigate to="/" replace={true} />;
    }

    return (
    <Box colSpan={2} display={"flex"}>
      <div className={` text-center w-100 form ${colorMode === 'dark' ? 'dark' : ''}`}>
        <h1>{t('InicioSesion.mensajeInicioSesion1')}</h1>
        <form onSubmit={handleSubmit}>
        <FormControl>
        <FormLabel className="email-label">{t('InicioSesion.email')}</FormLabel>
          <Input placeholder='pepe.fernandez110@alu.ulpgc.es' type='email' value={emailInput} onChange={handleEmailInputChange} />
          {!isEmailError ? (
            <FormHelperText>
              {t('mensajeErrorLogin.mensajeErrorLogin1')}
            </FormHelperText>
          ) : (
            <FormErrorMessage>{t('mensajeErrorLogin.mensajeErrorLogin1')}</FormErrorMessage>
          )}

          <FormLabel className="contraseña-label">{t('InicioSesion.contraseña')}</FormLabel>
          <Input type='password' value={passwordInput} onChange={handlePasswordInput} />
          {!isEmailError ? (
            <FormHelperText>
              {t('mensajeErrorLogin.mensajeErrorLogin1')}
            </FormHelperText>
          ) : (
            <FormErrorMessage>{t('mensajeErrorLogin.mensajeErrorLogin1')}</FormErrorMessage>
          )}

        </FormControl>
        <Button type="submit">{t('InicioSesion.login')}</Button>
        </form>

        <FormLabel className="rememberMe-label">
          <Checkbox
            isChecked={rememberMe}
            onChange={handleRememberMeChange}
          />
          {t('InicioSesion.recuerdame')}
        </FormLabel>
        <p>{t('InicioSesion.mensajeInicioSesion2')} <Link to="/Register">{t('InicioSesion.registrate')}</Link> </p>
      </div>
      <RegisterPortada></RegisterPortada>
    </Box>
    )
}

export default LoginForm;