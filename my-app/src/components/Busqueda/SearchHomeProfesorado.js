import React, {useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import {useTranslation} from "react-i18next";
import axios from 'axios';
import LoadingIcon from '../../LoadingIcon';

const SearchHomeProfesorado = ({ searchTerm }) => {
  const [t, i18n] = useTranslation('common');
  const[filteredData,setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setLoading(true);
    axios.get(`https://django.narurm.eu/profesores/teacher/`)
    .then(response => {
      setData(response.data.filter(item => item.name.toLowerCase().includes(searchTerm?.toLowerCase())));
      setLoading(false);

    })

  },[searchTerm])

  if (loading) {
    
    return <LoadingIcon/>;
  }
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
            <h2 id="titleItemBusqueda">{item.name}</h2>
            <p>{t('SearchHomeProfesorado.correo')}: {item.email}</p>
            <p>{t('SearchHomeProfesorado.despacho')}: {item.office}</p>
            <hr />
          </div>
        </Link>
      ))}
        
    </div>
  );
};

export default SearchHomeProfesorado;
