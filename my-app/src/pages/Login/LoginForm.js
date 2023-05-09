import React from "react";
import { useState } from "react";
import { FormControl, FormLabel, FormHelperText, FormErrorMessage, Input, Checkbox } from "@chakra-ui/react";
import { Button, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {useTranslation} from "react-i18next";

import '../../components/forms.css'
import RegisterPortada from "../Register/RegisterPortada";
function LoginForm() {
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [t, i18n] = useTranslation('common');
  
    const handleEmailInputChange = (e) => setEmailInput(e.target.value);
    const handlePasswordInput = (e) => setPasswordInput(e.target.value);
    const handleRememberMeChange = (e) => setRememberMe(e.target.checked);
  
    const isEmailError = emailInput === '';
  
    return (
    <Box colSpan={2} display={"flex"}>
      <div className=" text-center w-100 form">
        <h1>{t('InicioSesion.mensajeInicioSesion1')}</h1>
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
        <Button>{t('InicioSesion.login')}</Button>
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