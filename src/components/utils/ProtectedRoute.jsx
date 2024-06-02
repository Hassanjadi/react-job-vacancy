import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

export const ProtectedRoute = ({ children, requiresAuth }) => {
  const token = Cookies.get("token");

  if (requiresAuth && !token) {
    return <Navigate to="/login" />;
  }

  if (!requiresAuth && token) {
    return <Navigate to="/" />;
  }

  return children;
};
