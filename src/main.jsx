import "./index.css";
import React from "react";
import { Home } from "./pages/Home";
import ReactDOM from "react-dom/client";
import { Vacancy } from "./pages/Vacancy";
import { ErrorPage } from "./pages/404.jsx";
import { Dashboard } from "./pages/Dashboard";
import { LoginPage } from "./pages/Login.jsx";
import { RegisterPage } from "./pages/Register.jsx";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Cookies from "js-cookie";
import { DetailJobPage } from "./pages/DetailJob";
import { JobProvider } from "./Context/JobContext.jsx";

const AuthRoute = (props) => {
  if (Cookies.get("token") !== undefined) {
    return <Navigate to={"/"} />;
  } else if (Cookies.get("token") === undefined) {
    return props.children;
  }
};

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
    element: <Dashboard />,
  },
  {
    path: "/login",
    element: (
      <AuthRoute>
        <LoginPage />
      </AuthRoute>
    ),
  },
  {
    path: "/register",
    element: (
      <AuthRoute>
        <RegisterPage />
      </AuthRoute>
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
