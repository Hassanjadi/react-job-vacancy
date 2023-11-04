import React from "react";
import { Link } from "react-router-dom";
import LogoBrand from "../assets/images/logo-brand.png";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-full w-48 bg-white overflow-y-auto border-r border-gray-300">
      <div className="text-white font-bold text-xl p-4">
        <img src={LogoBrand} alt="Logo" />
      </div>
      <hr className="bg-black my-2" />
      <ul className="space-y-1 mt-4">
        <li className="hover:bg-indigo-200 p-2 rounded-lg">
          <Link to="/" className="text-gray-500 text-base font-medium block">
            Dashboard
          </Link>
        </li>
        <li className="hover:bg-indigo-200 p-2 rounded-lg">
          <Link to="/data-form" className="text-gray-500 font-medium block">
            Data Form
          </Link>
        </li>
        <li className="hover:bg-indigo-200 p-2 rounded-lg">
          <Link to="/data-table" className="text-gray-500 font-medium block">
            Data Table
          </Link>
        </li>
        <li className="hover:bg-indigo-200 p-2 rounded-lg">
          <Link to="/profile" className="text-gray-500 font-medium block">
            Profile
          </Link>
        </li>
        <li className="hover:bg-indigo-200 p-2 rounded-lg">
          <Link
            to="/change-password"
            className="text-gray-500 font-medium block"
          >
            Change Password
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
