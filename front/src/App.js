import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../public/styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Layout/Footer";
import LayoutNavbar from "./components/Layout/Navbar";
import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";
import { Signup } from "./pages/auth/singup";
import { Login } from "./pages/auth/login";
import Joinin from "./pages/joinIn";
import { PrivateOrganize } from "./pages/organize";
import { withAuthentication } from "./lib/withAuthentication";

export const App = withAuthentication(() => (
  <Router>
    <LayoutNavbar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
      <Route path="/auth/signup" component={Signup} />
      <Route path="/auth/login" component={Login} />
      <Route path="/joinin" component={Joinin} />
      <Route path="/organize" component={PrivateOrganize} />
    </Switch>
    <Footer />
  </Router>
));
