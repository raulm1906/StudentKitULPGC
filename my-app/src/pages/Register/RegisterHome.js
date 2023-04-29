import React from "react";
import { useState } from "react";
import { FormControl, FormLabel, FormHelperText, FormErrorMessage, Input, Checkbox } from "@chakra-ui/react";
import { Button, Box } from "@chakra-ui/react";
import '../../components/forms.css'
import imagen from "./Group 22.svg";
import RegisterPortada from "./RegisterPortada";
import { Link } from "react-router-dom";

function RegisterHome() {
    const [usuarioInput, setUsuarioInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [confirmPasswordInput, setConfirmPasswordInput] = useState('');

    const handleUsuarioInputChange = (e) => setUsuarioInput(e.target.value);
    const handleEmailInputChange = (e) => setEmailInput(e.target.value);
    const handlePasswordInput = (e) => setPasswordInput(e.target.value);
    const handleConfirmPasswordInput = (e) => setConfirmPasswordInput(e.target.value);

    const isUsuarioError = usuarioInput === ''
    const isEmailError = emailInput === ''

    return (
      <Box colSpan={2} display={"flex"}>
        <div className=" text-center w-50 register">
          <h1>Crea una cuenta</h1>
          <FormControl>
            <FormLabel className="usuario-label">Nombre de usuario</FormLabel>
            <Input type='usuario' value={usuarioInput} onChange={handleUsuarioInputChange}/>
            {!isUsuarioError ? (
              <FormHelperText>
                Enter your username.
              </FormHelperText>
            ) : (
              <FormErrorMessage>Username is required.</FormErrorMessage>
            )}
            <FormLabel className="email-label">Email</FormLabel>
              <Input placeholder="pepe.fernandez110@alu.ulpgc.es" type="email" value={emailInput} onChange={handleEmailInputChange} />
              {!isEmailError ? (
                <FormHelperText>
                  Enter the email you'd like to receive the newsletter on.
                </FormHelperText>
              ) : (
                <FormErrorMessage>Email is required.</FormErrorMessage>
              )}
            <FormLabel className="contraseña-label">Contraseña</FormLabel>
            <Input type='password' value={passwordInput} onChange={handlePasswordInput} />
            {!isEmailError ? (
              <FormHelperText>
                Enter the email you'd like to receive the newsletter on.
              </FormHelperText>
            ) : (
              <FormErrorMessage>Email is required.</FormErrorMessage>
            )}
            <FormLabel className="confirmarContraseña-label">Confirmar contraseña</FormLabel>
            <Input type='password' value={confirmPasswordInput} onChange={handleConfirmPasswordInput} />
            {!isEmailError ? (
              <FormHelperText>
                Enter the email you'd like to receive the newsletter on.
              </FormHelperText>
            ) : (
              <FormErrorMessage>Email is required.</FormErrorMessage>
            )}
          </FormControl>
          <Button>Registrarse</Button>
          <p>¿Ya tienes una cuenta?</p>
          <Link to="/Login">Login</Link>
        </div>
        <RegisterPortada></RegisterPortada>
      </Box>
    )

}

export default RegisterHome
