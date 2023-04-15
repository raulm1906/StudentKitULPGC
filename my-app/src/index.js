import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import cabecera from './pages/cabecera';
import Profesorado from './pages/Profesorado/Profesorado';
import Asignatura from './pages/Asignaturas/Asignaturas';
import {router} from './router'
<<<<<<< HEAD
import  {Route, RouterProvider} from "react-router-dom"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router = {router} />
=======
import  {Route, Router, RouterProvider} from "react-router-dom"
import subject from "./data/subjects.json";
import profesores from "./data/profesores.json"
import { theme } from '@chakra-ui/theme';
import { ChakraProvider } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={theme}>
    <RouterProvider router = {router}/>
  </ChakraProvider>  
>>>>>>> main
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
<<<<<<< HEAD
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
=======
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
>>>>>>> main
