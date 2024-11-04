import React, { useState } from 'react';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="navBar relative">
            <header className="text-gray-300 body-font bg-slate-900">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-purple-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl text-gray-300">ReadLogger</span>
                    </a>

                    {/* Navigation links */}
                    <nav className={`md:ml-auto flex flex-wrap items-center text-base justify-center ${isOpen ? 'block' : 'hidden'} md:flex`}>
                        <a href='/' className="mr-5 hover:text-gray-900">Home</a>
                        <a href='/' className="mr-5 hover:text-gray-900">About us</a>
                        <a href='/test' className="mr-5 hover:text-gray-900">Library</a>
                        <a className="mr-5 hover:text-gray-900">Contact</a>
                    </nav>

                    {/* Login/Sign-in button */}
                    <button className={`text-gray-700 inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0 ${isOpen ? 'block' : 'hidden'} md:block` }>
                        Login/Sign-in
                    </button>

                    {/* Hamburger menu button for mobile view */}
                    <button
                        className="absolute top-0 right-0 mt-6 mr-6 inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base md:hidden"
                        onClick={toggleMenu}
                    >
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </header>
        </div>
    );
};

export default NavBar;
