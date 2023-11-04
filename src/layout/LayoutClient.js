import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const LayoutClient = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
};

export default LayoutClient;
