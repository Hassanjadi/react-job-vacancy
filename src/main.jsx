import "./index.css";
import React from "react";
import { Home } from "./pages/Home.jsx";
import ReactDOM from "react-dom/client";
import { Vacancy } from "./pages/Vacancy.jsx";
import { ErrorPage } from "./pages/404.jsx";
import { LoginPage } from "./pages/Login.jsx";
import { Dashboard } from "./pages/Dashboard";
import { DetailJobPage } from "./pages/Dashboard.jsx";
import { RegisterPage } from "./pages/Register.jsx";
import { JobProvider } from "./context/JobContext.jsx";
import { ProtectedRoute } from "./components/utils/ProtectedRoute.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/job-vacancy",
    element: (
      <JobProvider>
        <Vacancy />
      </JobProvider>
    ),
  },
  {
    path: "/",
    element: (
      <JobProvider>
        <Home />
      </JobProvider>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute requiresAuth={true}>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <ProtectedRoute requiresAuth={false}>
        <LoginPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/register",
    element: (
      <ProtectedRoute requiresAuth={false}>
        <RegisterPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/job/:id",
    element: <DetailJobPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
