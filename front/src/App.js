import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../public/styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Layout/Footer/Footer";
import LayoutNavbar from "./components/Layout/Navbar/Navbar";
import Home from "./pages/home/Home.page";
import Contact from "./pages/contact/Contact.page";
import About from "./pages/about/Abauot.page";
import { Signup } from "./pages/auth/singup/Singup.page";
import { Login } from "./pages/auth/login/Login.page";
import { PrivateOrganize } from "./pages/organize/Organize.page";
import { withAuthentication } from "./lib/auth/withAuthentication";
import Joinin from "./pages/joinIn/Meetings.page";
import JoininOne from "./pages/joinIn/MeetDetail.page";
import { ProfilePage } from "./pages/profile/Profile.page";
export const App = withAuthentication(() => (
  <Router>
    <LayoutNavbar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
      <Route path="/auth/signup" component={Signup} />
      <Route path="/auth/login" component={Login} />
      <Route path="/auth/profile" component={ProfilePage} />
      <Route
        path="/meet/:id"
        component={(props) => <JoininOne meetId={props.match.params.id} />}
      />
      <Route path="/organize" component={PrivateOrganize} />
      <Route path="/meet" component={Joinin} />
    </Switch>
    <Footer />
  </Router>
));
