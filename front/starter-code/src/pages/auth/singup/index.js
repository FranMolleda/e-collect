import React, { useState } from "react";
import { LoginSignupForm } from "../authForm";
import { doSignup, useUserSetter } from "../../../lib/auth.api";
import { Container } from "react-bootstrap";
//Importamos withRouter para que una vez hecho el signup vaya a una página
import { withRouter } from "react-router-dom";

//lo ponemos en signup con un parentesis que abarque todo y ponemos histoy, el cual debe tener  en algún momento un ascendente llamado Route (en este caso lo tenemos en App.js)
//WithRouter es un HOC (Hight Order Component)
export const Signup = withRouter(({ history }) => {
  const setUser = useUserSetter();

  const handleSubmit = async (username, password) => {
    const user = await doSignup(username, password, email);
    setUser(user);
    // Redirige el router a la HOME
    history.push("/");
  };

  return (
    <Container>
      <div>
        <h2>SignUp</h2>
        <LoginSignupForm {...{ handleSubmit }} />
      </div>
    </Container>
  );
});
