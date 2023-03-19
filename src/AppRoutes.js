import React from 'react';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element="./pages/Horario" />

    </Routes>
  )
}


export default AppRoutes