import React, { useState, useEffect } from "react";
import { UserContext, whoami } from "./auth.api";
import { Loading } from "./loading/styleLoading";

// THIS is a HOC
export const withAuthentication = (Component) => () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // When the app starts this runs only once
    console.log("Welcome to app! 👨🏼‍💻");

    // Try to get the current logged in user from our backend
    whoami()
      .then((user) => {
        setUser(user);
      })
      .catch((e) => {
        console.error("No user logged in ");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    //Todo lo que pongamos en value, es lo que podemos recibir desde cualquier sito con useContext
    //Pasamos el userState en login para que si cambia este estado, se recoja en user y se propaga para toda la app
    //Ponemos también loading para proteger las rutas
    //Hemos creado setUser en auth.api
    <UserContext.Provider value={{ user, setUser, loading }}>
      {loading && <Loading />}
      <Component />
    </UserContext.Provider>
  );
};
