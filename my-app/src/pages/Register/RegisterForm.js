import React from "react";
import { useState } from "react";
import { FormControl, FormLabel, FormHelperText, FormErrorMessage, Input } from "@chakra-ui/react";
import { Button, Center } from "@chakra-ui/react";


function RegisterForm() {
    const [usuarioInput, setUsuarioInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [confirmPasswordInput, setConfirmPasswordInput] = useState('');

  
    const handleUsuarioInputChange = (e) => setUsuarioInput(e.target.value);
    const handleEmailInputChange = (e) => setEmailInput(e.target.value);
    const handlePasswordInput = (e) => setPasswordInput(e.target.value);
    const handleConfirmPasswordInput = (e) => setConfirmPasswordInput(e.target.value);

  
    const isUsuarioError = usuarioInput === '';
    const isEmailError = emailInput === '';
  
    return (
    <Center width={"50%"}>
      <div className="form">
        <h1>Crea una cuenta</h1>
        <FormControl>
          <FormLabel>Nombre de usuario</FormLabel>

          <Input placeholder='Nombre de Usuario' type='usuario' value={usuarioInput} onChange={handleUsuarioInputChange}/>
 

          <FormLabel>Email</FormLabel>
          <Input placeholder='pepe.fernandez110@alu.ulpgc.es' type='email' value={emailInput} onChange={handleEmailInputChange} />

          <FormLabel>Contraseña</FormLabel>
          <Input type='password' value={passwordInput} onChange={handlePasswordInput} />

          <FormLabel>Confirmar Contraseña</FormLabel>
          <Input type='password' value={confirmPasswordInput} onChange={handleConfirmPasswordInput} />


        </FormControl>
          <Button
              size='md'
              height='48px'
              width='200px'
              border='2px'
              borderColor='green.500'
          >
          Registrarse
          </Button>

          <p>Ya tienes una cuenta?</p>
          <p><a href="">Login</a></p>
        </div>
      </Center>
    )
}

export default RegisterForm;