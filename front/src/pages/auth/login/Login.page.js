import React, { useState } from "react";
import { LoginSignupForm } from "../authForm/AuthForm";
import { doLogin, useUserSetter } from "../../../lib/auth/auth.api";
import { withRouter } from "react-router-dom";
import { Container } from "react-bootstrap";

export const Login = withRouter(({ history }) => {
  const [error, setError] = useState();
  const setUser = useUserSetter();

  const handleSubmit = async (username, password, email, id) => {
    try {
      const user = await doLogin(username, password, email, id);
      setUser(user);
      history.push("/");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <Container>
      <div>
        <h1>Login</h1>
        {error && (
          <div className="alert alert-danger" role="alert">
            Introduzca los datos correctamente
          </div>
        )}
      </div>

      <LoginSignupForm {...{ handleSubmit }} />
    </Container>
  );
});
