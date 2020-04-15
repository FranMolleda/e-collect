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
//Importamos Usercontext para decirle debajo que todo lo que esté dentro de UserContext.Provider, pueda utilizar el user
import { UserContext, whoami } from "./lib/auth.api";
import Joinin from "./pages/joinIn";
import { PrivateOrganize } from "./pages/organize";
import { Loading } from "./lib/loading/styleLoading";

export const App = () => {
  //Creamos estado del usuario
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Welcome to app!");

    //Intenta obtener el usuario logueado de nuestro backend
    whoami()
      .then((user) => {
        console.log(`Welcome again user ${user.username}`);
        setUser(user);
      })
      .catch((e) => {
        console.error("No user Logged in");
      })
      //Cuando acabe (haya error o no, pon Loading a false), esto es para evitar el pequeño parpadeo mientras chequea si tiene usuario o no
      .finally(() => setLoading(false));
  }, []);

  return (
    //Todo lo que pongamos en value, es lo que podemos recibir desde cualquier sito con useContext
    //Pasamos el userState en login para que si cambia este estado, se recoja en user y se propaga para toda la app
    //Ponemos también loading para proteger las rutas
    //Hemos creado setUser en auth.api
    <UserContext.Provider value={{ user, setUser, loading }}>
      {loading && <Loading />}
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
    </UserContext.Provider>
  );
};
