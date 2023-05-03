import React, {useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import LoadingIcon from '../../LoadingIcon';

const SearchHomeAsignatura = ({ searchTerm }) => {
  const[filteredData,setData] = useState([]);
  const [t, i18n] = useTranslation('common');
  const [loading, setLoading] = useState(true);


  useEffect(()=>{
    setLoading(true)
    axios.get(`https://django.narurm.eu/asignaturas/subject/`)
    .then(response => {
      setData(response.data.filter(item => item.name.toLowerCase().includes(searchTerm?.toLowerCase())));
      setLoading(false);

    })
  },[searchTerm])
  
  if (loading) {
    
    return <LoadingIcon/>;
  }


  return (
    
    <div id="resultSearchHomeAsignatua">
      {filteredData.map(item => (
        <Link
          
          to={{
            pathname: `/HomeAsignatura/${item.code}`,
            state: { asignatura: item },
          }}
          key={item.id}
        >
          <div className="hover">
            <h2 id="titleItemBusqueda">{item.name}</h2>
            <p>{t('HomeAsignatura.coordinador')}:</p>
            <p>{t('HomeAsignatura.curso')}:{item.semester} semestre</p>
            <hr />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SearchHomeAsignatura;
