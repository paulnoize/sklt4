import React, { createContext, useContext, useState, useEffect } from 'react';
import translations from './translations.json';

const LanguageContext = createContext();

export const LanguageProvider = ({ children, initialLanguage }) => {
  const [language, setLanguage] = useState(initialLanguage);

  const toggleLanguage = () => {
    const newLanguage = language === 'es' ? 'en' : 'es';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage); // Almacena el nuevo idioma en localStorage
  };

  const getText = (key) => {
    return translations[language][key] || key;
  };

  useEffect(() => {
    // Recupera el idioma almacenado en localStorage cuando se monta el componente
    const storedLanguage = localStorage.getItem('language');
    setLanguage(storedLanguage || initialLanguage);
  }, [initialLanguage]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, getText }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
