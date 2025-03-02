import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const navList = [
    { href: "/#home", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#services", label: "Services" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 right-0 backdrop-blur-sm shadow-sm bg-white/90 border border-gray-100">
      <div className="container mx-auto w-full flex justify-between items-center gap-4 h-16 md:h-20 px-8 md:px-4">
        {/* Logos */}
        <div className="flex justify-center cursor-pointer">
          <div className="h-4 w-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition-opacity"></div>
          <div className="-ml-2 h-4 w-4 bg-red-500 rounded-full opacity-100 hover:opacity-75 transition-opacity"></div>
        </div>

        {/* Mobile menu icon */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2"
        >
          {isMenuOpen ? (
            <HiX className="size-6" />
          ) : (
            <HiMenu className="size-6" />
          )}
        </button>

        {/* Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navList.map((links, index) => (
            <a
              key={index}
              href={links.href}
              onClick={() => setActiveLink(links.href)}
              className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all ${
                activeLink === links.href
                  ? "text-blue-600 after:w-full"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {links.label}
            </a>
          ))}
        </div>

        {/* Button */}
        <button className="hidden md:block bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100">
          <a href="#newsLetter">Get in touch</a>
        </button>
      </div>

      {/* Moblie Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4">
          <div className="container mx-auto px-4 space-y-3">
            {navList.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.href); // Update active link
                  setIsMenuOpen(false); // Close mobile menu
                }}
                className={`block text-sm font-medium py-2 ${
                  activeLink === link.href
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                a
              >
                {link.label}
              </a>
            ))}

            {/* Button */}
            <button className="w-full bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100">
              <a href="#newsLetter">Get in touch</a>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
