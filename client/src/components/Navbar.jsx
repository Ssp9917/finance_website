import React, { useContext, useState } from "react";
import { FaWallet, FaUser } from "react-icons/fa"; // Importing user icon
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import appex_logo from "../assets/apex_logo.png";
import { UserAuthContext } from "../context/UserAuthProvider";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  // Array of objects for menu items
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Retrieve user data from local storage
  const { user, setUser } = useContext(UserAuthContext);
  const userName = user ? user.name : "";

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  return (
    <nav className="bg-gray-800 text-white px-4 py-3">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <img src={appex_logo} width={90} alt="" />
        </div>

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
          {/* User Display or Login */}
          {userName ? (
            <Link to='/profile' className="flex items-center space-x-2">
              <FaUser />
              <span>{userName}</span>
            </Link>
          ) : (
            <Link
              to="/login"
              className="hover:text-gray-400 active:text-gray-300"
            >
              Login
            </Link>
          )}
          <div className="flex items-center space-x-1">
            <FaWallet />
            <span>0</span>
          </div>
        </div>

        {/* Apply Card Button and Logout Button (Mobile) */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to={user ? "/user-details" : "/apply-card"}
            className="mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 active:bg-purple-700 transition-colors"
          >
            Apply Card
          </Link>
          {userName && (
            <button
              onClick={handleLogout}
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 active:bg-red-700 transition-colors"
            >
              Logout
            </button>
          )}
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <span
              className={`block w-6 h-0.5 bg-white mb-1 transition-transform ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white mb-1 transition-opacity ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-transform ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-[76px] left-0 h-full w-1/2 bg-gray-800 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
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
          {/* User Display or Login */}
          <Link
            to="/profile"
            className="cursor-pointer flex items-center space-x-2"
            onClick={toggleMenu}
          >
            <FaUser />
            <div className="hover:underline">{userName}</div>
          </Link>
          <div className="flex items-center space-x-1">
            <FaWallet />
            <span>0</span>
          </div>
          {/* Logout Button in Mobile Menu */}
          {userName && (
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 active:bg-red-700 transition-colors"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
