import React from 'react';
import data from '../../data/profesores.json';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SearchHomeProfesorado = ({ searchTerm, onItemClick }) => {
  const filteredData = data.filter(item => item.profesorado.profesor.toLowerCase().includes(searchTerm?.toLowerCase()));

  return (
    <div id="resultSearchHomeProfesorado">
      {filteredData.map(item => (
        <Link
          to={{
            pathname: `/HomeProfesorado/${item.id}`,
            state: { asignatura: item },
          }}
          key={item.id}
        >
          <div className="hover">
            <h2 onClick={() => onItemClick(item)} id="titleItemBusqueda">{item.profesorado.profesor}</h2>
            <p>{item.profesorado.email}</p>
            <p>{item.profesorado.despacho.toUpperCase()}</p>
            <hr />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SearchHomeProfesorado;
