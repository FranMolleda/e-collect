import React from "react";
import { Switch, Route } from "react-router-dom";
import "../public/styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Layout/Footer";
import LayoutNavbar from "./components/Layout/Navbar";
import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";
import { Signup } from "./pages/auth/singup";
import { Login } from "./pages/auth/login";
export const App = () => {
  return (
    <>
      <LayoutNavbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/auth/signup" component={Signup} />
        <Route path="/auth/login" component={Login} />
      </Switch>
      <Footer />
    </>
  );
};
