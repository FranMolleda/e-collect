import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

export const LoginSignupForm = ({ handleSubmit }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  return (
    <>
      <Container>
        <div>
          {/* Rescatamos el evento del onSubmit para llevarlo a handleSubmit  y con el e.preventDefault no recargue la página*/}
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(username, password, email);
            }}
          >
            <Form.Group controlId="formGroupUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Username"
                //Le damos un valor para que sea un componente controlado
                value={username}
                //Le decimos que setee el estado con onChange para que capture los cambios
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Button type="submit">Submit form</Button>
          </Form>
        </div>
      </Container>
    </>
  );
};
