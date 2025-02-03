import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Using Lucide icons for the hamburger menu and close icons

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle mobile menu

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#0E465E] text-white uppercase font-semibold p-8 w-full z-[100] relative">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl">San Minaret Hospital</h1>

        {/* Hamburger Icon (Visible only on small screens) */}
        <div className="lg:hidden cursor-pointer" onClick={handleToggle}>
          {isOpen ? <X className="text-white w-8 h-8" /> : <Menu className="text-white w-8 h-8" />}
        </div>

        {/* Desktop Menu (Hidden on small screens) */}
        <ul className="hidden lg:flex items-center space-x-8">
          <li 
          href="/"
          className="relative group cursor-pointer">
            Home
            <span className="absolute bottom-[-2px] left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li 
          className="relative group cursor-pointer">
            <a href="#features">
            About
            <span className="absolute bottom-[-2px] left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li 
          href="/services"
          className="relative group cursor-pointer">
            <a href="#features">
            Services
            <span className="absolute bottom-[-2px] left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li 
          href="/contact"
          className="relative group cursor-pointer">
            Contact
            <span className="absolute bottom-[-2px] left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
        </ul>

        <button className="hidden lg:inline-block bg-transparent border border-[#ffffff] rounded-xl text-white py-2 px-4 ml-8">
          Contact us
        </button>
      </div>

      {/* Mobile Menu (Visible only when the hamburger menu is clicked) */}
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} mt-4`}>
        <ul className="space-y-4 text-center">
          <li className="hover:underline cursor-pointer">Home</li>
          <li className="hover:underline cursor-pointer">About</li>
          <li className="hover:underline cursor-pointer">Services</li>
          <li className="hover:underline cursor-pointer">Contact</li>
        </ul>
        <button className="bg-transparent border border-[#ffffff] rounded-xl text-white py-2 px-4 mt-4 w-full">
          Contact us
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
