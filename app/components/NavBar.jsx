"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/Sanminaret_logo3.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle mobile menu

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-900 py-2 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <Image src={logo} className="w-40 h-12 md:w-72 md:h-20" alt="Logo" />

        {/* Hamburger icon for mobile */}
        <div className="lg:hidden">
          <button
            onClick={handleToggle}
            className="text-white focus:outline-none ml-32"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-12 text-white">
          <li>
            <a href="/" className="hover:text-blue-300">
              Home
            </a>
          </li>
          <li>
            <Link href="/about-page" className="hover:text-blue-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/services-page" className="hover:text-blue-300">
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact-page" className="hover:text-blue-300">
              Contact
            </Link>
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
            <a href="/" className="block hover:text-blue-300">
              Home
            </a>
          </li>
          <li>
            <Link href="/about-page" className="block hover:text-blue-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/services-page" className="block hover:text-blue-300">
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact-page" className="block hover:text-blue-300">
              Contact
            </Link>
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
