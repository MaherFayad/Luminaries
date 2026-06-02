import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Section/Footer.jsx";
import Navbar from "./Section/Navbar.jsx";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
