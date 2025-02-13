import React, { useState } from "react";
import { Menu, X } from "lucide-react"; 
import Link from "next/link";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle mobile menu

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">SANMINARET</h1>
        
        {/* Hamburger icon for mobile */}
        <div className="lg:hidden">
          <button onClick={handleToggle} className="text-white focus:outline-none ml-32">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8 text-white">
          <li>
            <a href="#" className="hover:text-blue-300">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-300">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-blue-300">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-300">
              Contact
            </a>
          </li>
        </ul>

        {/* Button for all screens */}
        <Link href="#appointment">
        <button className="hidden lg:block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Book Now
        </button>
        </Link>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="lg:hidden mt-4 space-y-4 text-white text-center">
          <li>
            <a href="#" className="block hover:text-blue-300">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="block hover:text-blue-300">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="block hover:text-blue-300">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="block hover:text-blue-300">
              Contact
            </a>
          </li>
          <li>
          <Link href="#appointment">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 w-full">
              Book Now
            </button>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
