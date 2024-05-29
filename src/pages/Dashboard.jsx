import { Button } from "../components/Element/Button";
import { getUsername } from "../services/auth.services";
import React, { useEffect, useState } from "react";

export const Dashboard = () => {
  const [username, setUsername] = useState();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
    } else {
      setUsername(getUsername(token));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="max-w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="font-bold text-xl text-center mb-5">
        Hello {username} <br /> dashboard is ready coming soon 🎈
      </h1>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};
