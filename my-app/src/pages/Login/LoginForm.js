import React from "react";
import { useState } from "react";
import { FormControl, FormLabel, FormHelperText, FormErrorMessage, Input, Checkbox } from "@chakra-ui/react";
import { Button, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import '../../components/forms.css'
import RegisterPortada from "../Register/RegisterPortada";
function LoginForm() {
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
  
    const handleEmailInputChange = (e) => setEmailInput(e.target.value);
    const handlePasswordInput = (e) => setPasswordInput(e.target.value);
    const handleRememberMeChange = (e) => setRememberMe(e.target.checked);
  
    const isEmailError = emailInput === '';
  
    return (
    <Box colSpan={2} display={"flex"}>
      <div className=" text-center w-100 form">
        <h1>Bienvenido de <br></br> vuelta!</h1>
        <FormControl>
        <FormLabel className="email-label">Email</FormLabel>
          <Input placeholder='pepe.fernandez110@alu.ulpgc.es' type='email' value={emailInput} onChange={handleEmailInputChange} />
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

        </FormControl>
        <Button>Login</Button>
        <FormLabel className="rememberMe-label">
          <Checkbox
            isChecked={rememberMe}
            onChange={handleRememberMeChange}
          />
          Recuérdame
        </FormLabel>
        <p>¿Todavía no tienes una cuenta? <Link to="/Register">Regístrate</Link> </p>
      </div>
      <RegisterPortada></RegisterPortada>
    </Box>
    )
}

export default LoginForm;