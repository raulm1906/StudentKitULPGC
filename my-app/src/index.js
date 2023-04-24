import React from 'react';
import ReactDOM from 'react-dom/client';
import {router} from './router'
import  {RouterProvider} from "react-router-dom"

import { theme } from '@chakra-ui/theme';
import { ChakraProvider } from '@chakra-ui/react';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
      <ChakraProvider theme={theme}>
        <RouterProvider router={router}/>
      </ChakraProvider>
);
