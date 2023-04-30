import React, { useState } from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Button, Box, Text } from "@chakra-ui/react";
import '../../components/forms.css'
import imagen from "./Group 22.svg";
import RegisterPortada from "./RegisterPortada";
import { Link } from "react-router-dom";
import {useTranslation} from "react-i18next";

function RegisterHome() {
  const [usuarioInput, setUsuarioInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [confirmPasswordInput, setConfirmPasswordInput] = useState('');
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);
  const [isFormValid, setIsFormValid] = useState(false);
  const [t, i18n] = useTranslation('common');

  const handleUsuarioInputChange = (e) => setUsuarioInput(e.target.value);
  const handleEmailInputChange = (e) => setEmailInput(e.target.value);
  const handlePasswordInputChange = (e) => {
    setPasswordInput(e.target.value);
    setIsPasswordMatch(e.target.value === confirmPasswordInput);
  };
  const handleConfirmPasswordInputChange = (e) => {
    setConfirmPasswordInput(e.target.value);
    setIsPasswordMatch(e.target.value === passwordInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      console.log(t('mensajeErrorRegistro.mensajeRegistro2'));
    } else {
      console.log(t('mensajeErrorRegistro.mensajeRegistro3'));
    }
  }

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  const validateForm = () => {
    if (!usuarioInput || !emailInput || !passwordInput || !confirmPasswordInput) {
      return false;
    }

    if (!validateEmail(emailInput)) {
      return false;
    }

    if (!isPasswordMatch) {
      return false;
    }

    return true;
  }

  const handleFormChange = () => {
    setIsFormValid(validateForm());
  }

  return (
    <Box colSpan={2} display={"flex"}>
      <div className=" text-center w-100 register">
        <h1>{t('Registro.mensajeRegistro')}</h1>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel className="usuario-label">{t('Registro.nombreDeUsuario')}</FormLabel>
            <Input placeholder="Pepe Fernandez" type='text' value={usuarioInput} onChange={handleUsuarioInputChange} onBlur={handleFormChange} required/>
            <FormLabel className="email-label">{t('Registro.email')}</FormLabel>
            <Input placeholder="pepe.fernandez110@alu.ulpgc.es" type="email" value={emailInput} onChange={handleEmailInputChange} onBlur={handleFormChange} required/>
            <FormLabel className="contraseña-label">{t('Registro.contraseña')}</FormLabel>
            <Input type='password' value={passwordInput} onChange={handlePasswordInputChange} onBlur={handleFormChange} required/>
            <FormLabel className="confirmarContraseña-label">{t('Registro.confirmarContraseña')}</FormLabel>
            <Input type='password' value={confirmPasswordInput} onChange={handleConfirmPasswordInputChange} onBlur={handleFormChange} required/>
            {!isPasswordMatch && <Text color="red">{t('mensajeErrorRegistro.mensajeRegistro1')}</Text>}
          </FormControl>
          <Button type="submit" disabled={!isFormValid}>{t('Registro.registrarse')}</Button>
        </form>
        <p>{t('Registro.mensajeLogin')}</p>
        <Link to="/Login">{t('Registro.login')}</Link>     
        </div>
      <RegisterPortada />
    </Box>
  )
}

export default RegisterHome;
