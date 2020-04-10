import React, { useState } from "react";
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

export const App = () => {
  //Creamos estado del usuario
  const [user, setUser] = useState();
  return (
    //Todo lo que pongamos en value, es lo que podemos recibir desde cualquier sito con useContext
    //Pasamos el userState en login para que si cambia este estado, se recoja en user y se propaga para toda la app
    //Hemos creado setUser en auth.api
    <UserContext.Provider value={{ user, setUser }}>
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
};
