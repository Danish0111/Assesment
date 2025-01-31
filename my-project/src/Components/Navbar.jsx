import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';  // Cross icon
import logo from '../assets/logo.png';

const Navbar = () => {
  // State to control the mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu (when clicking on cross button)
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top Header */}
      <div className="header bg-[#1C4670] text-white flex justify-end items-center md:gap-6 p-2 md:px-6 sm:px-20">
        <span className="email flex items-center gap-2 text-xs md:text-sm">
          <FontAwesomeIcon className='hidden md:block' icon={faEnvelope} />
          www.registerkaro.in
        </span>
        <span className="phone flex items-center gap-2 text-xs md:text-sm">
          <svg className='hidden md:block'
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.4803 0.763672C14.7811 0.845703 14.9999 1.0918 14.9999 1.39258C14.9999 8.41992 9.31238 14.0801 2.31238 14.0801C1.98425 14.0801 1.73816 13.8887 1.65613 13.5879L0.999878 10.7441C0.94519 10.4434 1.08191 10.1152 1.38269 9.97852L4.44519 8.66602C4.71863 8.55664 5.01941 8.63867 5.21082 8.85742L6.578 10.5254C8.71082 9.51367 10.4335 7.76367 11.4178 5.68555L9.74988 4.31836C9.53113 4.12695 9.4491 3.82617 9.55847 3.55273L10.871 0.490234C11.0077 0.189453 11.3358 0.0253906 11.6366 0.107422L14.4803 0.763672Z"
              fill="#E6ECFD"
            />
          </svg>
          +918447746183
        </span>
        <div className="social flex items-center gap-3 text-xs md:text-sm">
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faPinterest} />
        </div>
      </div>

      {/* Navbar */}
      <div className="nav py-4 shadow-md relative z-10 bg-white">
        <nav className="flex justify-between items-center px-6 sm:px-10">
          {/* Logo */}
          <div className="logo w-[150px] sm:w-[200px]">
            <img src={logo} alt="Logo" />
          </div>

          {/* Menu for Larger Screens */}
          <div className="hidden lg:flex gap-8">
            <ul className="flex gap-6 lg:gap-10 font-semibold text-sm lg:text-base">
              <li>Home</li>
              <li>Our Services</li>
              <li>Blog</li>
              <li>Contact Us</li>
              <li>About us</li>
            </ul>
            <div className="search text-sm lg:text-base">
              <FontAwesomeIcon icon={faSearch} />
            </div>
            <div className="button">
              <button className="bg-[#1C4670] text-white py-2 px-4 rounded-lg text-sm lg:text-base">
                Talk an expert
              </button>
            </div>
          </div>

          {/* Hamburger Menu for Smaller Screens */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-[#1C4670] text-2xl focus:outline-none"
            >
              {isMenuOpen ? (
                <FontAwesomeIcon icon={faTimes} /> // Cross icon when menu is open
              ) : (
                '☰' // Hamburger icon when menu is closed
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-24 left-0 w-full bg-white shadow-md z-10">
          <ul className="flex flex-col items-center py-4">
            <li className="py-2">Home</li>
            <li className="py-2">Our Services</li>
            <li className="py-2">Blog</li>
            <li className="py-2">Contact Us</li>
            <li className="py-2">About us</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
