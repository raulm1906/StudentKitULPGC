import React from 'react';
import data from '../../data/subjects.json';
import '../../components/style.css'
import { Link } from 'react-router-dom';

const Search = ({ searchTerm, onItemClick }) => {
    const filteredData = data.filter(item => item.asignatura.toLowerCase().includes(searchTerm?.toLowerCase()));
  
    return (
     
    <div id="resultSearch">
        {filteredData.map((item, index) => (
             <Link
             to={{
               pathname: `/HomeAsignatura/${item.id}`,
               state: { asignatura: item },
             }}
             key={item.id}
           >
        <div className="border m-2" key={index}>
        <p onClick={() => onItemClick(item)} className="hover">{item.asignatura}</p>
        </div>
        </Link>
        ))}
    </div>
    );
};

export default Search;