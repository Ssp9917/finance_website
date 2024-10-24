import React, { useState } from 'react';
import { FaWallet } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import appex_logo from '../assets/apex_logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Array of objects for menu items
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: "Login", path: '/login' }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white px-4 py-3">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold"><img src={appex_logo} width={90} alt="" /></div>

        {/* Menu Items (Desktop) */}
        <div className="hidden md:flex space-x-6">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="hover:text-gray-400 active:text-gray-300"
            >
              {item.name}
            </Link>
          ))}
          <div className="flex items-center space-x-1">
            <FaWallet />
            <span>0</span>
          </div>
        </div>

        {/* Apply Card Button (Mobile) */}
        <button>
          <Link
            to="/apply-card"
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 active:bg-blue-700 transition-colors"
            onClick={toggleMenu}
          >
            Apply Card
          </Link>
        </button>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <span className={`block w-6 h-0.5 bg-white mb-1 transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white mb-1 transition-opacity ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-[76px] left-0 h-full w-1/2 bg-gray-800 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col p-4 space-y-4">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="hover:text-gray-400 active:text-gray-300"
              onClick={toggleMenu}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex items-center space-x-1">
            <FaWallet />
            <span>0</span>
          </div>
        </div>
      </div>


    </nav>
  );
};

export default Navbar;
