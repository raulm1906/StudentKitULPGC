import React from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageContext = React.createContext();

const LanguageProvider = ({ children }) => {
  const { t } = useTranslation();

  return (
    <LanguageContext.Provider value={t}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;

