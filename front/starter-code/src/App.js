import React from "react";
import "../public/styles/App.css";
import Footer from "./components/Layout/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import LayoutNavbar from "./components/Layout/Navbar";
import Home from "./pages/home/Home";

export const App = () => {
  return (
    <>
      {/* <LayoutNavbar /> */}
      <Home />
      <Footer />
    </>
  );
};
