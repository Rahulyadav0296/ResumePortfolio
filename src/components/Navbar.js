import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(
    location.pathname.replace(/\/$/, "")
  );

  useEffect(() => {
    setActiveLink(location.pathname.replace(/\/$/, ""));
  }, [location.pathname]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-gray-800 to-orange-700 p-6 fixed w-full top-0 z-10">
      <div className="flex justify-between items-center">
        <div className="text-white font-bold text-lg">
          <img src="/logo.png" alt="Personal Logo" className="h-8" />
        </div>
        <div className="md:hidden">
          <button onClick={handleToggle} className="text-white">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      <ul
        className={`md:flex md:justify-center md:space-x-8 md:items-center text-white font-bold ${
          isOpen ? "block" : "hidden"
        } md:block mt-4 md:mt-0`}
      >
        <>
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className={`hover:text-gray-200 transition duration-300 cursor-pointer ${
              activeLink === "/" ? "text-green-500" : ""
            }`}
            onClick={closeMenu}
          >
            <li className="py-2 md:py-0">Home</li>
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className={`hover:text-gray-200 transition duration-300 cursor-pointer ${
              activeLink === "/about" ? "text-green-800" : ""
            }`}
            onClick={closeMenu}
          >
            <li className="py-2 md:py-0">About Me</li>
          </ScrollLink>
          <ScrollLink
            to="skills"
            smooth={true}
            duration={500}
            className={`hover:text-gray-200 transition duration-300 cursor-pointer ${
              activeLink === "/skills" ? "text-red-800" : ""
            }`}
            onClick={closeMenu}
          >
            <li className="py-2 md:py-0">Skills</li>
          </ScrollLink>
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            className={`hover:text-gray-200 transition duration-300 cursor-pointer ${
              activeLink === "/projects" ? "text-gray-200" : ""
            }`}
            onClick={closeMenu}
          >
            <li className="py-2 md:py-0">Projects</li>
          </ScrollLink>
          <ScrollLink
            to="testimonials"
            smooth={true}
            duration={500}
            className={`hover:text-gray-200 transition duration-300 cursor-pointer ${
              activeLink === "/testimonials" ? "text-gray-200" : ""
            }`}
            onClick={closeMenu}
          >
            <li className="py-2 md:py-0">Testimonials</li>
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className={`hover:text-gray-200 transition duration-300 cursor-pointer ${
              activeLink === "/contact" ? "text-gray-200" : ""
            }`}
            onClick={closeMenu}
          >
            <li className="py-2 md:py-0">Contact Me</li>
          </ScrollLink>
        </>
      </ul>
    </nav>
  );
}

export default Navbar;
