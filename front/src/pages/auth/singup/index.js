import React, { useState } from "react";
import { LoginSignupForm } from "../authForm";
import { doSignup, useUserSetter } from "../../../lib/auth/auth.api";
import { Container } from "react-bootstrap";
//Importamos withRouter para que una vez hecho el signup vaya a una página
import { withRouter } from "react-router-dom";

//lo ponemos en signup con un parentesis que abarque todo y ponemos histoy, el cual debe tener  en algún momento un ascendente llamado Route (en este caso lo tenemos en App.js)
//WithRouter es un HOC (Hight Order Component)
export const Signup = withRouter(({ history }) => {
  const [error, setError] = useState();
  const setUser = useUserSetter();
  const EMAIL_PATTERN = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const PASSWORD_PATTERN = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/;

  const handleSubmit = async (username, password, email) => {
    try {
      // CLIENT VALIDATION LOGIC
      const user = await doSignup(username, password, email);
      if (username == "" || password == "") {
        throw new Error("Complete los campos correctamente");
      }
      password == PASSWORD_PATTERN && username != "" && email == EMAIL_PATTERN;
      // Redirige el router a la HOME
      history.push("/");
      setUser(user);
    } catch (e) {
      console.log(e);
      setError(e.message);
    }
  };

  return (
    <Container>
      <div>
        <h2>SignUp</h2>
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        <LoginSignupForm {...{ handleSubmit }} />
      </div>
    </Container>
  );
});
