import React from "react";
import data from '../../data/profesores.json'



const SearchProfesores = ({searchTerm, onItemClick}) => {


    function filterByProfesor(data, searchTerm) {
        const filteredData = data.filter((item) => {
          const itemProfesor = item.profesorado.profesor.toLowerCase();
          const searchProfesor = searchTerm.toLowerCase();
          return itemProfesor.includes(searchProfesor);
        });
        return filteredData;
    }

    const hadleClick = (e) => {
        const text = e.target.textContent;
        onItemClick(text);
       
    }
  
    const filteredData = filterByProfesor(data, searchTerm);
    return (
        

        <div id="resultSearch">
            {filteredData.map((item, index) => (
            <div className="border m-2" key={index}>
            <p onClick={() => onItemClick(item)} className="hover">{item.profesorado.profesor}</p>
            
        </div>
        ))}
    </div>
    );
}

export default SearchProfesores;