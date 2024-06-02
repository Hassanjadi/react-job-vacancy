import Cookies from "js-cookie";
import React, { useState } from "react";
import Logo from "../../assets/images/Logo.png";
import { Link, NavLink } from "react-router-dom";

export const NavbarClient = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="w-full py-5 z-50 fixed bg-[#F9F9F9]">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 flex justify-between items-center">
        <img src={Logo} alt="Logo LokerIn" className="h-10" />
        <div className="hidden lg:flex gap-8">
          <NavLink to="/" className="font-normal text-lg hover:font-semibold">
            Home
          </NavLink>
          <NavLink
            to="/job-vacancy"
            className="font-normal text-lg hover:font-semibold"
          >
            Job Vacancy
          </NavLink>

          <NavLink
            to="/dashboard"
            className="font-normal text-lg hover:font-semibold"
          >
            Dashboard
          </NavLink>
        </div>
        <button className="lg:hidden focus:outline-none" onClick={toggleMenu}>
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
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        {isMenuOpen && (
          <div className="md:hidden fixed top-0 right-0 w-3/5 h-full bg-white z-40">
            <div className="flex flex-col gap-4 items-start justify-start h-full px-6 pt-5">
              <div className="flex justify-between w-full py-2">
                <p className="font-bold">LOKERIN</p>
                <button
                  className="lg:hidden focus:outline-none"
                  onClick={closeMenu}
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
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
              <NavLink
                to="/"
                className="font-normal text-lg hover:font-semibold"
              >
                Home
              </NavLink>
              <NavLink
                to="/job-vacancy"
                className="font-normal text-lg hover:font-semibold"
              >
                Job Vacancy
              </NavLink>
              <NavLink
                to="#"
                className="font-normal text-lg hover:font-semibold"
              >
                Dashboard
              </NavLink>
              <Link
                to="/login"
                className="h-10 px-6 font-medium text-base rounded-md text-white bg-[#635BFF] flex items-center"
              >
                Sign In
              </Link>
            </div>
          </div>
        )}
        <div className="hidden lg:flex gap-4 items-center">
          {!Cookies.get("token") && (
            <Link
              to="/login"
              className="h-10 px-6 font-medium text-base rounded-md text-white bg-[#635BFF] flex items-center"
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
                  <img
                    src="https://wallpapers.com/images/featured/cool-profile-picture-87h46gcobjl5e4xu.webp"
                    alt="Avatar"
                    className="h-10 w-10 rounded-full"
                  />
                </button>
                {isDropdownOpen && (
                  <div className="absolute top-10 right-0 bg-white border rounded shadow">
                    <ul className="py-2">
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
      </div>
    </div>
  );
};
