import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom"; // <-- Use react-router-dom
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { FaSquareXTwitter, FaSquareInstagram } from "react-icons/fa6";

function Navbar() {
  const [menu, setMenu] = useState(false);
  
  const navItems = [
    { text: "Home", link: "/" },
    { text: "About", link: "/about" },
    { text: "Projects", link: "/projects" },
    { text: "Services", link: "/services" },
    { text: "Skills", link: "/skills" },
    { text: "Contact", link: "/contact" },
  ];

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-black text-white">
        <div className="flex justify-between items-center h-16">
          {/* Desktop Nav Items */}
          <div className="flex-1 hidden md:flex justify-start">
            <ul className="flex space-x-7">
              {navItems.map(({ link, text }) => (
                <li
                  className="px-5 py-2 rounded-md hover:bg-blue-600 hover:text-white duration-200 cursor-pointer"
                  key={link}
                >
                  <Link to={link}>{text}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media + Resume Button */}
          <div className="flex items-center space-x-4">
    
           {/* Social Icons */}
            <a
              href="https://github.com/shaan566"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLogoLinkedinSquare
                size={26}
                className="hover:text-blue-500 transition-colors duration-300"
              />
            </a>
            <a
              href="https://x.com/ch60868207"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareXTwitter
                size={26}
                className="hover:text-blue-300 transition-colors duration-300"
              />
            </a>
            <a
              href="https://www.instagram.com/learn_code147/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareInstagram
                size={26}
                className="hover:text-blue-500 transition-colors duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
