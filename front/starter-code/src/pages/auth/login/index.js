import React, { useState } from "react";
import { LoginSignupForm } from "../authForm";
import { doLogin } from "../../../lib/auth.api";
import { withRouter } from "react-router-dom";

import { Container } from "react-bootstrap";

export const Login = withRouter(({ history }) => {
  const [error, setError] = useState();

  const handleSubmit = async (username, password, email) => {
    try {
      await doLogin(username, password, email);
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
            {error}{" "}
          </div>
        )}

        <LoginSignupForm {...{ handleSubmit }} />
      </div>
    </Container>
  );
});
