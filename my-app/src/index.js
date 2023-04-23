import React from 'react';
import ReactDOM from 'react-dom/client';
import {router} from './router'
import  {Route, Router, RouterProvider} from "react-router-dom"

import { theme } from '@chakra-ui/theme';
import { ChakraProvider } from '@chakra-ui/react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
      <ChakraProvider theme={theme}>
        <RouterProvider router={router}/>
      </ChakraProvider>
);
