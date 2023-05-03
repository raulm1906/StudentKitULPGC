import React from "react";
import { useState } from "react";
<<<<<<< HEAD
import { FormControl, FormLabel, FormHelperText, FormErrorMessage, Input } from "@chakra-ui/react";
import { Button, Box } from "@chakra-ui/react";

//import '../../components/forms.css'
=======
import { FormControl, FormLabel, FormHelperText, FormErrorMessage, Input, Checkbox } from "@chakra-ui/react";
import { Button, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {useTranslation} from "react-i18next";

import '../../components/forms.css'
>>>>>>> main
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
<<<<<<< HEAD
      <RegisterPortada></RegisterPortada>
      
      <div className=" form">
        <h1>Bienvenido de <br></br> vuelta!</h1>
=======
      <div className=" text-center w-100 form">
        <h1>{t('InicioSesion.mensajeInicioSesion1')}</h1>
>>>>>>> main
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
<<<<<<< HEAD
          <Button
              size='md'
              height='48px'
              width='200px'
              border='2px'
              borderColor='green.500'
          >
          Login
          </Button>

          <p>Todavía no tienes una cuenta?</p>
          <p><a href="">Regístrate</a></p>
        </div>
      </Box>
=======
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
>>>>>>> main
    )
}

export default LoginForm;