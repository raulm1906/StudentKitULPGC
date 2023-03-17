import React from 'react';
import data from '../../data/subjects.json';
import '../../components/style.css'
const Search = ({ searchTerm, onItemClick }) => {
    const filteredData = data.filter(item => item.asignatura.toLowerCase().includes(searchTerm?.toLowerCase()));


    const handleClick = (e) => {
        const text = e.target.textContent;
        onItemClick(text);
    }
  
    return (
     
    <div id="resultSearch">
        {filteredData.map((item, index) => (
        <div className="border m-2" key={index}>
        <p onClick={() => onItemClick(item)}>{item.asignatura}</p>
        </div>
        ))}
    </div>
    );
};

export default Search;