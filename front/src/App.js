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
import { PrivateOrganize } from "./pages/organize";
import { withAuthentication } from "./lib/auth/withAuthentication";
import JoininPlace from "./pages/joinIn/indexPlace";
import Joinin from "./pages/joinIn";
import JoininOne from "./pages/joinIn/meetOne";

export const App = withAuthentication(() => (
  <Router>
    <LayoutNavbar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
      <Route path="/auth/signup" component={Signup} />
      <Route path="/auth/login" component={Login} />
      <Route path="/joinin" component={JoininPlace} />
      <Route path="/organize" component={PrivateOrganize} />
      <Route path="/meet/:id" component={JoininOne} />
      <Route path="/meet/" component={Joinin} />
    </Switch>
    <Footer />
  </Router>
));
