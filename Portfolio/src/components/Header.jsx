import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-950 shadow-md h-[10vh] flex items-center justify-center z-10">
      <nav className="flex justify-center p-4">
        <ul className="flex gap-4">
          <li>
            <Link to="/" className="text-gray-100 hover:text-gray-600 text-xl">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="text-gray-100 hover:text-gray-500 text-xl"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-gray-100 hover:text-gray-500 text-xl"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
