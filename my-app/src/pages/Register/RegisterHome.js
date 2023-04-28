import "./Register.css"
import imagen from "./Group 22.svg";
function RegisterHome() {
    return(
<div className="App">
      <div className="split left">
        <h1>Crea una cuenta</h1>
        <main>
          <form action="procesar_registro.php" method="post">
            <div>
              <label htmlFor="nombre">Nombre de usuario</label>
              <input type="text" id="nombre" name="nombre" required />
            </div>
            <div>
              <label htmlFor="correo">Email</label>
              <input type="text" id="correo" name="correo" required />
            </div>
            <div>
              <label htmlFor="contraseña">Contraseña</label>
              <input type="password" id="contraseña" name="contraseña" required />
            </div>
            <div>
              <label htmlFor="confirmar-contraseña">Confirmar contraseña</label>
              <input type="password" id="confirmar-contraseña" name="confirmar-contraseña" required />
            </div>
            <button type="submit">Registrarse</button>
          </form>
          <div>
            <label htmlFor="mensaje-login">¿Ya tienes una cuenta?</label>
            <a href="">Login</a>
          </div>
        </main>
      </div>
      <div className="split right">
        <h1>La mejor herramienta como estudiante de la ULPGC</h1>
        <p>(Y también la única)</p>
        <h2>Accede de forma rápida a la información del profesorado, asignaturas y cursos, y crea un horario personal.</h2>
        <main>
          <form action="procesar_imagen.php" method="post">
            <img src={imagen} alt="ULPGC" />
          </form>
        </main>
      </div>
    </div>
    )
}

export default RegisterHome