import React from "react";
import Sidebar from "../components/Sidebar";
import NavbarAdmin from "../components/NavbarAdmin";
import Footer from "../components/Footer";

const LayoutAdmin = (props) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden ml-48">
        <NavbarAdmin />
        <main className="flex-1 overflow-x-hidden my-4 bg-gray-100">
          <div className="container">{props.children}</div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default LayoutAdmin;
