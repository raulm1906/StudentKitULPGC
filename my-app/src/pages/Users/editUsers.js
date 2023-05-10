import React from 'react';
import './editUser.css'
function editUsers(){
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
}
export default editUsers;