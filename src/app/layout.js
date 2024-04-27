"use client"
import React, { useState, useEffect } from 'react';

import { ThemeProvider } from 'next-themes'
import { Montserrat } from 'next/font/google'
import { LanguageProvider } from './ui/LanguageContext';

export const montserrat = Montserrat({ subsets:['latin'] })
import './globals.css'
import Navbar from './navbar'

export default function RootLayout({ children }) {

  
  const [initialLanguage, setInitialLanguage] = useState('es'); // Establece el idioma inicial en 'en' por defecto
  useEffect(() => {
    // Recupera el idioma almacenado en localStorage al cargar la página
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      setInitialLanguage(storedLanguage);
    }
  }, []);
  
  return (
    <html className={montserrat.className} lang={initialLanguage} suppressHydrationWarning>
      <body className="dark:bg-black" >
      <LanguageProvider initialLanguage={initialLanguage}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Navbar/>
          {children}
        </ThemeProvider>
      </LanguageProvider>
      </body>
    </html>
  )
}