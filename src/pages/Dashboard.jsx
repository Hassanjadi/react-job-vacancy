import React from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Element/Button";

export const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    Cookies.remove("token");
    navigate("/login");
  };

  return (
    <div className="max-w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="font-bold text-xl text-center mb-5">
        dashboard is ready coming soon 🎈
      </h1>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};
