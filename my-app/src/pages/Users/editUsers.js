import React from 'react';
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Button, Box, Text } from "@chakra-ui/react";
import '../../components/forms.css'

function editUsers() {

  return (

    <Box colSpan={0} display={"flex"}>
      <div className="editUser">
        <h1>Editar Usuario</h1>
          <FormControl>
            <FormLabel className="usuario-label">Nombre de usuario</FormLabel>
            <Input placeholder="Nombre de usuario" type='text'/>
            <FormLabel className="usuario-label">Email</FormLabel>
            <Input placeholder="pepe.fernandez110@alu.ulpgc.es" type='text' readOnly/>
            <FormLabel className="usuario-label">Contraseña</FormLabel>
            <Input type='password'/>
            <FormLabel className="usuario-label">Confirmar Contraseña</FormLabel>
            <Input type='password'/>
          </FormControl>
          <Button type="submit">Cancelar cambios</Button>
          <Button type="submit">Confirmar cambios</Button>
      </div>
    </Box>


  )
}

export default editUsers;

  /*
  return (
<form>
<h1>Editar Usuario</h1>
  <label>
    Nombre de Usuario: 
    <input type="text" name="UserName" id="newUserName" />
  </label>
  <label>
      Email:
      <input type="text" name="email" id="emailnotMod" readOnly/>
  </label>
  <label>
      Contraseña:
        <input type="password" name="newPassword" id="newPassword"/>
  </label>
  <label>
      Repetir Contraseña:
      <input type="password" name="repeatPassword" id="checkPassowrd"/>
  </label>

    <input type="button" id="accept" name="aceptar" value="Aceptar"/>
    <input type="button" id="cancel" name="cancelar" value="cancelear"/>

</form>
  );
*/

