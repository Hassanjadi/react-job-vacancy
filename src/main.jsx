import "./index.css";
import React from "react";
import { Home } from "./pages/Home";
import ReactDOM from "react-dom/client";
import { ErrorPage } from "./pages/404";
import { LoginPage } from "./pages/Login";
import { Vacancy } from "./pages/Vacancy";
import { Dashboard } from "./pages/Dashboard";
import { RegisterPage } from "./pages/Register";
import { DetailJobPage } from "./pages/DetailJob";
import { ProtectedRoute } from "./components/Utils/ProtectedRoute";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { JobProvider } from "./context/JobContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/vacancy",
    element: <Vacancy />,
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
    path: "/register",
    element: (
      <ProtectedRoute requiresAuth={false}>
        <RegisterPage />
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
