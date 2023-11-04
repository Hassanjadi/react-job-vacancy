import Cookies from "js-cookie";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/images/logo-brand.png";

const Navbar = () => {
  let navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white border-b fixed top-0 w-full z-50">
      <div className="container-lg mx-auto py-4 px-4 lg:px-16 flex justify-between items-center">
        <div>
          <Link to="/">
            <img className="w-24" src={Logo} alt="Logo Brand" />
          </Link>
        </div>

        <div className="hidden lg:flex items-center space-x-6">
          <Link
            to="/"
            className="font-semibold text-base hover:text-indigo-400"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="font-semibold text-base hover:text-indigo-400"
          >
            About
          </Link>
          <Link
            to="/job-vacancy"
            className="font-semibold text-base hover:text-indigo-400"
          >
            Job Vacancy
          </Link>
          {!Cookies.get("token") && (
            <Link
              to="/login"
              className="text-white text-base font-semibold py-1 px-4 rounded-lg bg-indigo-500 focus:outline-none hover:bg-indigo-400"
            >
              Sign In
            </Link>
          )}
          {Cookies.get("token") && (
            <div className="flex items-center">
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center text-white focus:outline-none"
                >
                  <span className="mr-2 text-black font-semibold">Budiman</span>
                  <img
                    src="https://cdn-brilio-net.akamaized.net/community/2018/12/11/15638/image_1542268156_5bed24fca770f.jpg"
                    alt="Avatar"
                    className="h-6 w-6 rounded-full"
                  />
                </button>
                {isDropdownOpen && (
                  <div className="absolute top-10 right-0 bg-white border rounded shadow">
                    <ul className="py-2">
                      <li>
                        <Link
                          to="/dashboard"
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                        >
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={() => {
                            Cookies.remove("token");
                            navigate("/");
                          }}
                          className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
                        >
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="lg:hidden flex items-center space-x-4">
          <button
            className="text-indigo-500 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white py-2 px-4 space-y-2">
          <Link
            to="/"
            className="block font-semibold text-base text-indigo-500"
          >
            Home
          </Link>
          <Link
            to="/vacancy"
            className="block font-semibold text-base text-indigo-500"
          >
            Job Vacancy
          </Link>
          <Link
            to="/about"
            className="block font-semibold text-base text-indigo-500"
          >
            About
          </Link>
          <button className="block text-white w-full text-center text-base py-1 px-2 rounded-lg bg-indigo-500 focus:outline-none">
            Sign In
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
