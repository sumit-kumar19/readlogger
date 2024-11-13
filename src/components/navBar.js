// import React, { useState } from 'react';

// const NavBar = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <div className="navBar relative">
//             <header className="text-gray-300 body-font bg-slate-900">
//                 <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row ">
//                     <a  href ="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
//                         <img src="https://steamuserimages-a.akamaihd.net/ugc/2312101943904128274/142C7109DE75F729CF0A2A2167EDB400968B9AAC/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true" alt="logo" className="w-11 h-11 rounded-full" />
//                         <span className="ml-3 text-xl text-gray-300">ReadLogger</span>
//                     </a>

//                     {/* Navigation links */}
//                     <nav className={`md:ml-auto flex flex-wrap items-center text-base justify-center ${isOpen ? 'block' : 'hidden'} md:flex`}>
//                         <a href='/' className="mr-5 hover:text-gray-400">Home</a>
//                         <a href='/' className="mr-5 hover:text-gray-400">About us</a>
//                         <a href='/libaray' className="mr-5 hover:text-gray-400">Library</a>
//                         <a className="mr-5 hover:text-gray-400">Contact</a>
//                     </nav>

//                     {/* Login/Sign-in button */}
//                     <button className={`text-gray-700 inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0 ${isOpen ? 'block' : 'hidden'} md:block` }>
//                         Login/Sign-in
//                     </button>

//                     {/* Hamburger menu button for mobile view */}
//                     <button
//                         className="absolute top-0 right-0 mt-6 mr-6 inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base md:hidden"
//                         onClick={toggleMenu}
//                     >
//                         <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
//                             <path d="M4 6h16M4 12h16M4 18h16"></path>
//                         </svg>
//                     </button>
//                 </div>
//             </header>
//         </div>
//     );
// };

// export default NavBar;
'use client'

import React, { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function Component() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [activePage, setActivePage] = useState('home')

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className="relative">
      <header className="relative z-50 w-full bg-white dark:bg-gray-800">
        <div className="container mx-auto flex items-center justify-between px-4 py-6">
          <a href="/" className="flex items-center font-medium text-gray-900 dark:text-gray-100">
            <img
              src="https://steamuserimages-a.akamaihd.net/ugc/2312101943904128274/142C7109DE75F729CF0A2A2167EDB400968B9AAC/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
              alt="logo"
              className="h-11 w-11 rounded-full"
            />
            <span className="ml-3 text-xl">ReadLogger</span>
          </a>

          {/* Navigation links for desktop */}
          <nav className="hidden space-x-12 md:flex">
            <a
              href="/"
              className={`text-sm font-medium uppercase tracking-wider transition-colors ${
                activePage === 'home' ? 'text-purple-400' : 'text-gray-900 hover:text-purple-400'
              } dark:text-gray-100 dark:hover:text-blue-300`}
              onClick={() => setActivePage('home')}
            >
              Home
            </a>
            <a
              href="/about"
              className={`text-sm font-medium uppercase tracking-wider transition-colors ${
                activePage === 'about' ? 'text-purple-400' : 'text-gray-900 hover:text-purple-400'
              } dark:text-gray-100 dark:hover:text-blue-300`}
              onClick={() => setActivePage('about')}
            >
              About
            </a>
            <a
              href="/contact"
              className={`text-sm font-medium uppercase tracking-wider transition-colors ${
                activePage === 'contact' ? 'text-purple-400' : 'text-gray-900 hover:text-purple-400'
              } dark:text-gray-100 dark:hover:text-blue-300`}
              onClick={() => setActivePage('contact')}
            >
              Contact
            </a>
            <a
              href="/libaray"
              className={`text-sm font-medium uppercase tracking-wider transition-colors ${
                activePage === 'contact' ? 'text-purple-400' : 'text-gray-900 hover:text-purple-400'
              } dark:text-gray-100 dark:hover:text-blue-300`}
              onClick={() => setActivePage('libaray')}
            >
              Library
            </a>
          </nav>
          

          <div className="hidden items-center space-x-4 md:flex">
            {/* Theme toggle button for desktop */}
            <button
              onClick={toggleTheme}
              className="rounded-full p-2 text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-white dark:text-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* Login/Sign-in button for desktop */}
            <button className="rounded bg-purple-400 px-3 py-1 text-base text-white hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2 focus:ring-offset-white dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800">
              Login/Sign-in
            </button>
          </div>
          

          {/* Hamburger menu button for mobile view */}
          <button
            className="inline-flex items-center rounded border-0 bg-white px-3 py-1 text-base text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-white dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800 md:hidden"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
            {isOpen ? (
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-6 w-6"
                viewBox="0 0 24 24"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-6 w-6"
                viewBox="0 0 24 24"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Dropdown menu for mobile */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="absolute right-0 z-10 w-full max-w-[30%] border border-gray-200 bg-white px-2 py-4 shadow-lg dark:border-gray-600 dark:bg-gray-800 md:hidden"
        >
          <nav className="flex flex-col space-y-2">
            <a
              className={`block py-2 text-sm font-medium uppercase tracking-wider ${
                activePage === 'home' ? 'text-purple-400' : 'text-gray-900 hover:text-purple-400'
              } dark:text-gray-100 dark:hover:text-blue-300`}
              href="/"
              onClick={() => {
                setActivePage('home')
                toggleMenu()
              }}
            >
              Home
            </a>
            <a
              className={`block py-2 text-sm font-medium uppercase tracking-wider ${
                activePage === 'about' ? 'text-purple-400' : 'text-gray-900 hover:text-purple-400'
              } dark:text-gray-100 dark:hover:text-blue-300`}
              href="/"
              onClick={() => {
                setActivePage('about')
                toggleMenu()
              }}
            >
              About
            </a>
            <a
              className={`block py-2 text-sm font-medium uppercase tracking-wider ${
                activePage === 'contact' ? 'text-purple-400' : 'text-gray-900 hover:text-purple-400'
              } dark:text-gray-100 dark:hover:text-blue-300`}
              href="/"
              onClick={() => {
                setActivePage('contact')
                toggleMenu()
              }}
            >
              Contact
            </a>
            <a
              className={`block py-2 text-sm font-medium uppercase tracking-wider ${
                activePage === 'contact' ? 'text-purple-400' : 'text-gray-900 hover:text-purple-400'
              } dark:text-gray-100 dark:hover:text-blue-300`}
              href="/libaray"
              onClick={() => {
                setActivePage('contact')
                toggleMenu()
              }}
            >
              Library
            </a>
            <button
              onClick={toggleTheme}
              className="flex items-center py-2 text-sm font-medium uppercase tracking-wider text-gray-900 hover:text-purple-400 dark:text-gray-100 dark:hover:text-blue-300"
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              Theme
            </button>
            <button className="mt-2 w-full rounded bg-purple-400 px-3 py-2 text-sm font-medium uppercase tracking-wider text-white hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2 focus:ring-offset-white dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800">
              Login/Sign-in
            </button>
          </nav>

        </div>
      )}
    </div>
  )
}