import React from 'react';
import ReactDOM from 'react-dom/client';
import {router} from './router'
import  {RouterProvider} from "react-router-dom"

import { theme } from '@chakra-ui/theme';
import { ChakraProvider } from '@chakra-ui/react';

import {I18nextProvider} from "react-i18next";
import i18next from "i18next";

import common_es from "./translations/es/common.json";
import common_en from "./translations/en/common.json";

i18next.init({
    interpolation: { escapeValue: false },  // React already does escaping
    lng: 'en',                              // language to use
    resources: {
        en: {
            common: common_en               // 'common' is our custom namespace
        },
        es: {
            common: common_es
        },
    },
});

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
      <ChakraProvider theme={theme}>
        <I18nextProvider i18n={i18next}>
          <RouterProvider router={router}/>
        </I18nextProvider>
      </ChakraProvider>
);
