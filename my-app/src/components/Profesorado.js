import React, { useState, useEffect } from 'react';
import { Divider } from '@chakra-ui/react';

import './profesorado.css';

function Profesorado() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className='scrollbox'>
      <h1>Hola Mundo</h1>
      {data.map(photo => (
        <div key={photo.id}>
          <h1>{photo.title}</h1>
          <h2>{photo.thumbnailUrl}</h2>
          <h3>{photo.thumbnailUrl}</h3>
          <Divider orientation='horizontal' />
        </div>
      ))}
    </div>
  );
}

export default Profesorado;