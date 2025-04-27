import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavBar = [
    { name: "SignUp", to: "/signup" },
    { name: "About", to: "/about" },
    { name: "Product", to: "/product" },
    { name: "Price", to: "/price" },
    { name: "Support", to: "/support" },
  ];

  return (
    <nav className="w-full shadow px-8 md:px-32 py-4 flex items-center justify-between">
      {/* Logo */}
      <NavLink to="/">
        <div className="w-32">
          <img src="/assets/logo.svg" alt="Logo" className="w-full" />
        </div>
      </NavLink>

      {/* Desktop Nav */}
      <div className="hidden md:flex gap-10 text-gray-600 font-medium">
        {NavBar.map((item, index) => (
          <NavLink
            key={index}
            to={item.to}
            className={({ isActive }) =>
              `hover:text-black transition duration-300 ${
                isActive ? "text-blue-500 " : "text-gray-600"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>

      {/* Hamburger Icon */}
      <div className="relative w-6 h-6 md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-full h-full relative"
        >
          {/* Bars Icon */}
          <i
            className={`fa-solid fa-bars text-2xl text-gray-700 absolute top-0 left-0 transform transition-all duration-300 ease-in-out ${
              isMenuOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
            }`}
          ></i>

          {/* X Icon */}
          <i
            className={`fa-solid fa-xmark text-2xl text-gray-700 absolute top-0 left-0 transform transition-all duration-300 ease-in-out ${
              isMenuOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
            }`}
          ></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full rounded-2xl bg-white shadow-md flex flex-col items-start gap-4 px-6 py-4 md:hidden z-10">
          {NavBar.map((item, index) => (
            <NavLink
              key={index}
              to={item.to}
              className="text-gray-700 w-full py-2"
              onClick={() => setIsMenuOpen(false)} // Close menu on click
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
