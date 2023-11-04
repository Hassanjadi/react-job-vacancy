import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavbarAdmin = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="mx-10 pt-5 flex justify-between">
      <input
        className="border px-3 py-2 rounded-lg text-xs"
        type="search"
        name="search"
        placeholder="Search"
      />
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
                  <button className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavbarAdmin;
