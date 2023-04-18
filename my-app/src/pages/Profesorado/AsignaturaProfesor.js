import React from "react";

function AsignaturaProfesor({ asignaturas }) {
  return (
    <div>
      {asignaturas.map((asignatura) => (
        <div key={asignatura}>{asignatura}</div>
      ))}
    </div>
  );
}

export default AsignaturaProfesor;