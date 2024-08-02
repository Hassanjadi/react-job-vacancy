import "./index.css";
import React from "react";
import { Home } from "./pages/Home";
import { ErrorPage } from "./pages/404";
import ReactDOM from "react-dom/client";
import { Vacancy } from "./pages/Vacancy";
import { LoginPage } from "./pages/Login";
import { DataForm } from "./pages/DataForm";
import { ListJobs } from "./pages/ListJobs";
import { Dashboard } from "./pages/Dashboard";
import { RegisterPage } from "./pages/Register";
import { DetailJobPage } from "./pages/DetailJob";
import { ProtectedRoute } from "./components/Utils/ProtectedRoute";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { JobProvider } from "./context/JobContext";
import { Profile } from "./pages/Profile";

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
    path: "/dashboard/list-job-vacancy",
    element: (
      <ProtectedRoute requiresAuth={true}>
        <ListJobs />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard/form",
    element: (
      <ProtectedRoute requiresAuth={true}>
        <DataForm />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard/profile",
    element: (
      <ProtectedRoute requiresAuth={true}>
        <Profile />,
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
