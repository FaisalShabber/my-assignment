import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="text-black font-dmSans font-semibold">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="md:ml-auto flex flex-wrap items-center text-base font-semibold justify-center ">
          <Link
            to="/"
            className="mr-5  font-dmSans hover:text-gray-900 underline underline-offset-8"
          >
            Home
          </Link>
          <Link
            to="/"
            className="mr-5  hover:text-gray-900 hover:underline underline-offset-8"
          >
            About
          </Link>
          <Link
            to="/"
            className="mr-5  hover:text-gray-900 hover:underline underline-offset-8"
          >
            Services
          </Link>
          <Link
            to="/"
            className="mr-5  hover:text-gray-900 hover:underline underline-offset-8"
          >
            Portfolio
          </Link>
          <Link
            to="/"
            className="mr-5  hover:text-gray-900 hover:underline underline-offset-8"
          >
            Bio
          </Link>
          <Link
            to="/"
            className="mr-5  hover:text-gray-900 hover:underline underline-offset-8"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
