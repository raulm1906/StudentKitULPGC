import React from 'react';
import data from '../../data/subjects.json';
import { Link } from 'react-router-dom';

const SearchHomeAsignatura = ({ searchTerm, onItemClick }) => {
  const filteredData = data.filter(item => item.asignatura.toLowerCase().includes(searchTerm?.toLowerCase()));
  
  return (
    <div id="resultSearchHomeAsignatua">
      {filteredData.map(item => (
        <Link
          to={{
            pathname: `/HomeAsignatura/${item.id}`,
            state: { asignatura: item },
          }}
          key={item.id}
        >
          <div className="hover">
            <h2 onClick={() => onItemClick(item)} id="titleItemBusqueda">{item.asignatura}</h2>
            <p>Coordinador:</p>
            <p>Curso: {item.duracion}</p>
            <hr />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SearchHomeAsignatura;
