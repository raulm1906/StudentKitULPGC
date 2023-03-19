import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, BrowserRouter, Routes } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@chakra-ui/theme';
import Layout from './pages/common/Layout'
import AppRoutes from './AppRoutes';
import Index from "./pages/common/Layout"
import IndexHorario from "./pages/Horario/pages/HorarioEdit/IndexHorario"
import ListHorario from './pages/Horario/ListHorario';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: 'horario/',
        element: <ListHorario/>,
        children:[
          {
            path: ':horarioid',
            element: <IndexHorario/>
          }
        ]
      }
    ]
  }
]
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <ChakraProvider theme={theme}>
      <RouterProvider router={router}/>
    </ChakraProvider>
    
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
