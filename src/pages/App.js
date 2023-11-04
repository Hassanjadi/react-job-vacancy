import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import "./App.css";
import Home from "./Client/Home";
import Vacancy from "./Client/Vacancy";
import Login from "./Client/Login";
import Register from "./Client/Register";
import Dashboard from "./Admin/Dashboard";
import Profile from "./Admin/Profile";
import DataTable from "./Admin/DataTable";
import DataForm from "./Admin/DataForm";
import ChangePassword from "./Admin/ChangePassword";
import LayoutClient from "../layout/LayoutClient";
import LayoutAdmin from "../layout/LayoutAdmin";
import About from "./Client/About";
import { GlobalProvider } from "../context/GlobalContext";

function App() {
  return (
    <>
      <Router>
        <GlobalProvider>
          <Routes>
            <Route
              path="/"
              element={
                <LayoutClient>
                  <Home />
                </LayoutClient>
              }
            />
            <Route
              path="/job-vacancy"
              element={
                <LayoutClient>
                  <Vacancy />
                </LayoutClient>
              }
            />
            <Route
              path="/about"
              element={
                <LayoutClient>
                  <About />
                </LayoutClient>
              }
            />
            <Route
              path="/dashboard"
              element={
                <LayoutAdmin>
                  <Dashboard />
                </LayoutAdmin>
              }
            />
            <Route
              path="/profile"
              element={
                <LayoutAdmin>
                  <Profile />
                </LayoutAdmin>
              }
            />
            <Route
              path="/data-table"
              element={
                <LayoutAdmin>
                  <DataTable />
                </LayoutAdmin>
              }
            />
            <Route
              path="/data-form"
              element={
                <LayoutAdmin>
                  <DataForm />
                </LayoutAdmin>
              }
            />
            <Route
              path="/change-password"
              element={
                <LayoutAdmin>
                  <ChangePassword />
                </LayoutAdmin>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
          </Routes>
        </GlobalProvider>
      </Router>
    </>
  );
}
export default App;
