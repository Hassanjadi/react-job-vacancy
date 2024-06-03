import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./pages/Home.jsx";
import { ErrorPage } from "./pages/404.jsx";
import { Dashboard } from "./pages/Dashboard";
import { LoginPage } from "./pages/Login.jsx";
import { Vacancy } from "./pages/Vacancy.jsx";
import { RegisterPage } from "./pages/Register.jsx";
import { DetailJobPage } from "./pages/DetailJob.jsx";
import { JobProvider } from "./context/JobContext.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProtectedRoute } from "./components/utils/ProtectedRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/job-vacancy",
    element: <Vacancy />,
  },
  {
    path: "/",
    element: <Home />,
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
    <JobProvider>
      <RouterProvider router={router} />
    </JobProvider>
  </React.StrictMode>
);
