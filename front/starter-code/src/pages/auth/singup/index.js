import React from "react";
import { LoginSignupForm } from "../authForm";
import { doSignup } from "../../../lib/auth.api";
//Importamos withRouter para que una vez hecho el signup vaya a una página
import { withRouter } from "react-router-dom";

import { Container } from "react-bootstrap";

//lo ponemos en signup con un parentesis que abarque todo y ponemos histoy, el cual debe tener  en algún momento un ascendente llamado Route (en este caso lo tenemos en App.js)
//WithRouter es un HOC (Hight Order Component)
export const Signup = withRouter(({ history }) => {
  const handleSubmit = async (username, password, email) => {
    await doSignup(username, password, email);
    //aquí le decimos donde queremos que nos redirija con el history
    history.push("/");
  };

  return (
    <>
      <Container>
        <div>
          <h1>Regístrate</h1>
        </div>
        <LoginSignupForm handleSubmit={handleSubmit} />
        {/* //Otra menra sería: 
        <LoginSignupForm {...{ handleSubmit}}*/}
      </Container>
    </>
  );
});
