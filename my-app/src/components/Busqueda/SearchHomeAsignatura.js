import React from 'react';
import data from '../../data/subjects.json';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SearchHomeAsignatura = ({ searchTerm, onItemClick }) => {
  const filteredData = data.filter(item => item.asignatura.toLowerCase().includes(searchTerm?.toLowerCase()));
  const [t, i18n] = useTranslation('common');
  
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
            <p>{t('HomeAsignatura.coordinador')}</p>
            <p>{t('HomeAsignatura.curso')}:{item.duracion}</p>
            <hr />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SearchHomeAsignatura;
