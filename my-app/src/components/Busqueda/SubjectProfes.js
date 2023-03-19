import React from 'react';
import data from '../../data/asignaturasProfe.json';

const SubjectProfes = ({ id }) => {
  const obj = data.filter((elem) => elem.id === id)[0];
  const nombres = obj ? obj.info.map((elem) => elem.nombre) : [];

  return (
    <div>
      {nombres.length > 0 ? (
        <div className='row'>
          {nombres.map((nombre, index) => (
            <div key={index} className='col-md-6'>{nombre}</div>
          ))}
        </div>
      ) : (
        <p>No se encontraron nombres para la ID {id}</p>
      )}
    </div>
  );
};

export default SubjectProfes;