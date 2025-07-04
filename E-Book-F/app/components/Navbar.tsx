"use client"
import React, { useState } from 'react';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <nav className="bg-[#272267] text-white px-4 sm:px-6 py-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        
        {/* Logo */}
        <div className="flex items-center">
          <a href="/">
            <img
              src="https://pearsonbookspublishing.co.uk/neo/assets/images/logo.png"
              alt="Logo"
              className="h-12 w-auto"
            />
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4 text-[18px] sm:text-[19px] relative">
          <a href="/" className="hover:underline">Home</a>
          <a href="/about" className="hover:underline">About</a>

          {/* Services Dropdown (click-based) */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="hover:underline focus:outline-none"
            >
              Services
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 flex flex-col bg-white text-[#272267] shadow-lg rounded-md mt-2 min-w-[180px] z-10">
                <a href="/webdesign" className="px-4 py-2 hover:bg-[#272267] hover:text-white">Web Designing</a>
                <a href="/webdesign" className="px-4 py-2 hover:bg-[#272267] hover:text-white">App Development</a>
                <a href="/webdesign" className="px-4 py-2 hover:bg-[#272267] hover:text-white">Digital Marketing</a>
              </div>
            )}
          </div>

          <a href="/testimonials" className="hover:underline">Testimonials</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </div>

        {/* CTA Button */}
        <div className="bg-white text-[#272267] font-bold text-[18px] py-2 px-6 rounded-md hover:opacity-90 transition">
          REQUEST QUOTE
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
