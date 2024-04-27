import React from 'react';
import { useLanguage } from './LanguageContext';

const LanguageButton = () => {
  const { toggleLanguage, language } = useLanguage();

  return (
    <button className="h-12 w-12 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none"
      onClick={toggleLanguage}>
      {language.toUpperCase()}
    </button>
  );
};

export default LanguageButton;