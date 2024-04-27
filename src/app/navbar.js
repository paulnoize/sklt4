'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

import Image from 'next/image'
import LanguageButton from './ui/LanguageButton'


const Navbar = () => {
  const { theme, setTheme } = useTheme()
  const [darkModeActive, setDarkModeActive] = useState(false);

  useEffect(() => {
    setDarkModeActive(theme === 'dark');
  }, [theme]);

  const toggleDarkMode = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };


  return (
    <nav className="fixed top-0 left-0 right-0  z-10 flex items-center justify-between pt-1 pb-1 pl-2 pr-2">
      <div className="flex items-center justify-center h-12 w-12 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none">
        <Image
          src={darkModeActive ? '/skeleton-logo.svg' : '/skeleton-logo-d.svg'}
          alt="Logo Skeleton"
          width={26}
          height={26}
          className="p-1"
          priority
        />
      </div>

      <div className="flex items-center">
      <LanguageButton />

        <button
          className="h-12 w-12 rounded-lg p-3 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none"
          onClick={toggleDarkMode}
        >
          <svg
            className={`fill-current ${darkModeActive ? 'text-yellow-500' : 'text-violet-700'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              className={darkModeActive ? 'hidden' : 'block'}
              d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
            ></path>
            <path
              className={darkModeActive ? 'block' : 'hidden'}
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  )
}

export default Navbar