import React from "react";
import { 
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

function Footer() {
  return (
    <>
      <hr />
      <footer className="bg-black text-white">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-8">
          <div className="flex flex-col items-center justify-center">
            <div className="flex space-x-6 mb-4">
              <a
                href="https://leetcode.com/u/Shaanchaudhary/" // your LeetCode link
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gray-800 p-3 hover:bg-blue-600 transition-colors duration-300"
              >
                <SiLeetcode size={24} />
              </a>
              <a
                href="https://x.com/ch60868207" // your Twitter link
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gray-800 p-3 hover:bg-blue-600 transition-colors duration-300"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://www.instagram.com/learn_code147/?hl=en" // your Instagram link
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gray-800 p-3 hover:bg-blue-600 transition-colors duration-300"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/shaan510/" // your LinkedIn link
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gray-800 p-3 hover:bg-blue-600 transition-colors duration-300"
              >
                <FaLinkedinIn size={24} />
              </a>
            </div>
            <p className="text-sm">© 2025 Your Name. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
