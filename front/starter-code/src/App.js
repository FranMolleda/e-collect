import React from "react";
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
//Importamos Usercontext para decirle debajo que todo lo que esté dentro de UserContext.Provider, pueda utilizar el user
import { UserContext } from "./lib/auth.api";

export const App = () => (
  <UserContext.Provider value={{ username: "Fran" }}>
    <Router>
      <LayoutNavbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/auth/signup" component={Signup} />
        <Route path="/auth/login" component={Login} />
      </Switch>
      <Footer />
    </Router>
  </UserContext.Provider>
);
