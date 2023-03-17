import React from "react";
import Subjects from '../../data/profesorado.json'



const SearchProfesores = ({searchTerm}) => {

    const nombres= [];
    const obj = Subjects.find(obj => obj.id === searchTerm);
    obj.info.forEach(item => nombres.push(item.nombre));
    const nombresUnicos = [...new Set(nombres)];



    return (
        <div className ="d-flex">
            {nombresUnicos.map((nombre)=>(
                <div className="p-2"> {nombre} </div>
            ))}
        </div>
    );
}

export default SearchProfesores;