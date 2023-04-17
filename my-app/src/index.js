import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import cabecera from './pages/cabecera';
import Profesorado from './pages/Profesorado/Profesorado';
import Asignatura from './pages/Asignaturas/Asignaturas';
import {router} from './router'
import  {Route, Router, RouterProvider} from "react-router-dom"
import subject from "./data/subjects.json";
import profesores from "./data/profesores.json"
import { theme } from '@chakra-ui/theme';
import { ChakraProvider } from '@chakra-ui/react';

import data from "./data/profesores.json";

import Profesor from './pages/Profesorado/Profesor';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 /* <ChakraProvider theme={theme}>
    <RouterProvider router = {router}/>
  </ChakraProvider>  */
  <Profesor  profesor={data[0]}></Profesor>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals