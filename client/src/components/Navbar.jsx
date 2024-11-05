import React, { useContext, useEffect, useState } from "react";
import { FaWallet, FaUser } from "react-icons/fa"; // Importing user icon
import { Link, NavLink, useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import appex_logo from "../assets/apex_logo.png";
import { UserAuthContext } from "../context/UserAuthProvider";
import easternCard from '../assets/card_logo.png'

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
  const { user, setUser, applyCardUser,setApplyCardUser } = useContext(UserAuthContext);
  const userName = user ? user.name : "";

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setApplyCardUser(null)
    navigate("/");
  };

  return (
    <nav className="bg-gray-800 md:static fixed w-full z-[9999] text-white px-4 py-3">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <img src={easternCard} width={90} alt="" />
        </div>

        {/* Menu Items (Desktop) */}
        <div className="hidden md:flex space-x-6">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `navBar p-4 mx-1 ${isActive ? "text-[#590039] bg-white" : ""}`
              }
            >
              {item.name}
            </NavLink>
          ))}
          {/* User Display or Login */}
          {userName ? (
            <NavLink to="/profile" className="flex items-center space-x-2">
              <FaUser />
              <span>{userName}</span>
            </NavLink>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `navBar p-4 mx-1 ${isActive ? "text-[#590039] bg-white" : ""}`
              }
            >
              Login
            </NavLink>
          )}
          <div className="flex items-center space-x-1">
            <FaWallet />
            {user && applyCardUser != null ? (
              <span>{applyCardUser.wallet}</span>
            ) : (
              <span className="text-white">0</span>
            )}
          </div>
        </div>

        {/* Apply Card Button and Logout Button (Mobile) */}
        <div className="hidden z-[9999] md:flex items-center h-full space-x-4">
          <Link
            to={user ? "/user-details" : "/apply-card"}
            className="apply-btn relative  px-5 py-3 text-[#212529] bg-white transition-colors overflow-hidden group"
          >
            <span className="absolute inset-0 bg-[#590039] scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100 origin-center rounded-lg -z-10"></span>{" "}
            {/* Background effect */}
            <span className="absolute inset-0 bg-[#590039] scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100 origin-center rounded-lg -z-10"></span>{" "}
            {/* Background effect */}
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
              Apply Card
            </span>{" "}
            {/* Text with color change */}
          </Link>
          {userName && (
            // <button
            //   onClick={handleLogout}
            //   className=" bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 active:bg-red-700 transition-colors"
            // >
            //   Logout
            // </button>
            <button
              onClick={handleLogout}
              className="apply-btn relative  px-5 py-3 text-[#212529] bg-white transition-colors overflow-hidden group"
            >
              <span className="absolute inset-0 bg-[#590039] scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100 origin-center rounded-lg -z-10"></span>{" "}
              {/* Background effect */}
              <span className="absolute inset-0 bg-[#590039] scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100 origin-center rounded-lg -z-10"></span>{" "}
              {/* Background effect */}
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                Logout
              </span>{" "}
              {/* Text with color change */}
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
        className={`md:hidden z-[9999] fixed top-[76px] left-0 h-full w-1/2 bg-gray-800 transform transition-transform duration-300 ${
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
          {userName ? (
            <Link
              to="/profile"
              onClick={toggleMenu}
              className="flex items-center space-x-2"
            >
              <FaUser />
              <span>{userName}</span>
            </Link>
          ) : (
            <Link
              to="/login"
              className="hover:text-gray-400 active:text-gray-300"
              onClick={toggleMenu}
            >
              Login
            </Link>
          )}
          <div className="flex items-center space-x-1">
            <FaWallet />
            {user && applyCardUser != null ? <span>{applyCardUser.wallet}</span> : <span>0</span>}
          </div>
          {/* Logout Button in Mobile Menu */}
          <div className=" z-[9999] md:flex items-center space-x-4">
            <Link
              to={user ? "/user-details" : "/apply-card"}
              onClick={toggleMenu}
              className="mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 active:bg-purple-700 transition-colors"
            >
              Apply Card
            </Link>
            {userName && (
              <button
                onClick={() => {
                  handleLogout(), toggleMenu();
                }}
                className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 active:bg-red-700 transition-colors"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
