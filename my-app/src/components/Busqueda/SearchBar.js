import React from "react";

const SearchBar = ({ searchTerm, handleChange, Placeholder }) => {
  return (
  
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder={Placeholder}
<<<<<<< HEAD
        className='w-100 h-100 bg-transparent'
=======
        className='w-100 h-100 bg-transparent border-0'
>>>>>>> main
      />
    
  );
};

export default SearchBar;