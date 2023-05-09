import React,{useEffect,useState} from "react";
import { Link } from 'react-router-dom';
import axios from "axios";


const SearchProfesores = ({searchTerm}) => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(()=>{
      axios.get('https://django.narurm.eu/profesores/teacher/')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
          console.error(error);
      });
      
    },[]);

        

    useEffect(() => {
      if (searchTerm) {
        setFilteredData(
          data.filter((item) =>
            item.name.toLowerCase().includes(searchTerm?.toLowerCase())
          )
        );
      } else {
        setFilteredData(data);
      }
    }, [data, searchTerm]);

    return (
        

        <div id="resultSearch">
            {filteredData.map((item, index) => (
            <Link
            to={{
                pathname: `/HomeProfesorado/${item.id}`,
                state: { asignatura: item },
            }}
            key={item.id}
            >

            <div className="hover border w-100 p-1" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}} key={index}>
              <h2 className='fs-5'>{item.name}</h2>
              <p className='mt-1 mb-1 fs-6'>Correo: {item.email}</p>
            </div>

          </Link>
        ))}
    </div>
    );
}

export default SearchProfesores;