import React from 'react';
import data from '../../data/profesores.json';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import {useTranslation} from "react-i18next";

const SearchHomeProfesorado = ({ searchTerm, onItemClick }) => {
  const filteredData = data.filter(item => item.profesorado.profesor.toLowerCase().includes(searchTerm?.toLowerCase()));
  const [t, i18n] = useTranslation('common');

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
            <p>{t('SearchHomeProfesorado.correo')}: {item.profesorado.email}</p>
            <p>{t('SearchHomeProfesorado.despacho')}: {item.profesorado.despacho.toUpperCase()}</p>
            <hr />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SearchHomeProfesorado;
