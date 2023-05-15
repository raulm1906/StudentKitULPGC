import React,{useEffect,useState} from 'react';
import data from '../../data/subjects.json';
import '../../components/style.css'
import { Link } from 'react-router-dom';
import { useColorMode } from '@chakra-ui/react';
import axios from 'axios';
const Search = ({ searchTerm, onItemClick}) => {
    const [data, setData] = useState([]);
    const { colorMode } = useColorMode();

    useEffect(()=>{
      axios.get('https://django.narurm.eu/asignaturas/subject/')
      .then(response => {

        setData(response.data);
      })
      .catch(error => {
          console.error(error);
      });
    },[]);

    useEffect(()=>{
      axios.get('https://django.narurm.eu/asignaturas/subject/')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
          console.error(error);
      });
    },[]);
    const filteredData = data.filter(item => item.name.toLowerCase().includes(searchTerm?.toLowerCase()));
 
    return (
     
    <div id="resultSearch" className={colorMode === 'dark' ? 'dark' : ''}>
        {filteredData.map((item, index) => (
             <Link className=''
             to={{
               pathname: `/HomeAsignatura/${item.code}`,
               state: { asignatura: item },
             }}
             key={item.code}
           >
            <div onClick={() => onItemClick(item)} className="hover border w-100 p-1" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}} key={index}>
            <h2 className='fs-5'>{item.name}</h2>
            <p className='mt-1 mb-1 fs-6'>Año: {item.year} Cuatrimestre: {item.semester}</p>
            </div>
        </Link>
        ))}
    </div>
    );
};

export default Search;