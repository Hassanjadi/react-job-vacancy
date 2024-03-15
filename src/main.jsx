import "./index.css";
import React from "react";
import { Home } from "./pages/home";
import ReactDOM from "react-dom/client";
import { ErrorPage } from "./pages/404.jsx";
import { LoginPage } from "./pages/login.jsx";
import { RegisterPage } from "./pages/register.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
