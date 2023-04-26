import React from "react";
import { useState } from "react";
import { FormControl, FormLabel, FormHelperText, FormErrorMessage, Input } from "@chakra-ui/react";
import { Button, Box } from "@chakra-ui/react";

import '../../components/forms.css'
import RegisterPortada from "../Register/RegisterPortada";
function LoginForm() {
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
  
    const handleEmailInputChange = (e) => setEmailInput(e.target.value);
    const handlePasswordInput = (e) => setPasswordInput(e.target.value);
  
    const isEmailError = emailInput === '';
  
    return (
    <Box colSpan={2} display={"flex"}>
      <RegisterPortada></RegisterPortada>
      
      <div className=" form">
        <h1>Bienvenido de <br></br> vuelta!</h1>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input placeholder='pepe.fernandez110@alu.ulpgc.es' type='email' value={emailInput} onChange={handleEmailInputChange} />
          {!isEmailError ? (
            <FormHelperText>
              Enter the email you'd like to receive the newsletter on.
            </FormHelperText>
          ) : (
            <FormErrorMessage>Email is required.</FormErrorMessage>
          )}

          <FormLabel>Contraseña</FormLabel>
          <Input type='password' value={passwordInput} onChange={handlePasswordInput} />
          {!isEmailError ? (
            <FormHelperText>
              Enter the email you'd like to receive the newsletter on.
            </FormHelperText>
          ) : (
            <FormErrorMessage>Email is required.</FormErrorMessage>
          )}

        </FormControl>
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
    )
}

export default LoginForm;