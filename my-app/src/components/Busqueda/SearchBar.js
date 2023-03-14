import React from "react";

const SearchBar = ({ searchTerm, handleChange }) => {
  return (
  
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Asignaturas"
        className='w-100 h-100 bg-transparent'
      />
    
  );
};

export default SearchBar;