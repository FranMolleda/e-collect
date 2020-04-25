import React, { useState, useEffect } from "react";
import { useForm, FormContext } from "react-hook-form";
import { Container, Card, Button, Form, Col } from "react-bootstrap";
import { withProtected } from "../../lib/auth/protectRoute.hoc.js";
import { useUser, useUserSetter, doLogin } from "../../lib/auth/auth.api.js";
import { changeAvatar } from "../../lib/auth/user.api";
import {
  getMeet,
  deleteUserMeet,
  getUserMeet,
} from "../../lib/frontRoutes/meetings.api";
import _ from "lodash";
import { StyledLink } from "./StyleProfile";

export const ProfilePage = withProtected((props, user) => {
  const [meet, setMeet] = useState({});
  user = useUser();
  const setUser = useUserSetter();
  const methods = useForm();
  const { handleSubmit, register, errors } = methods;

  const onSubmit = (values) => {
    const myAvatar = values.avatar[0];
    changeAvatar(myAvatar)
      .then((res) => {
        console.log("Changed File");
        setUser(res.data.user);
        setMeet(res.data.user);
        console.log(res.data.user);
      })
      .catch((e) => {
        console.log("Error uploading file");
        console.log(e);
      });
  };

  let imgPath;
  if (user.profilePic) {
    const localPath = _.get(user, "profilePic.path");
    if (localPath) {
      imgPath = `http://localhost:3000/${localPath}`;
    } else {
      imgPath = _.get(user, "profilePic.url");
    }
  }
  return (
    <>
      <div>
        <Container className="form-container">
          <Form.Group>
            <Form.Row>
              <Form.Label column="lg" lg={2}>
                Nombre
              </Form.Label>
              <Col>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder={user.username}
                />
              </Col>
            </Form.Row>
            <br />
            <Form.Row>
              <Form.Label column lg={2}>
                Email
              </Form.Label>
              <Col>
                <Form.Control type="text" placeholder={user.email} />
              </Col>
            </Form.Row>
            <br />
            <Form.Row>
              <Form.Label column lg={2}>
                Ciudad
              </Form.Label>
              <Col>
                <Form.Control type="text" placeholder={user.city} />
              </Col>
            </Form.Row>
            <br />
            <Form.Row>
              <Form.Label column lg={2}>
                Regogidas en las que he participado
              </Form.Label>
              <Col>
                <Form.Control type="text" placeholder={8} />
              </Col>
            </Form.Row>
          </Form.Group>
          <FormContext {...methods}>
            <h4 style={{ padding: "10px 0", marginLeft: "50%" }}>
              Foto de perfil
            </h4>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div style={{ padding: "10px 0", marginLeft: "50%" }}>
                {imgPath && (
                  <div>
                    <img
                      src={imgPath}
                      width="150"
                      height="150"
                      style={{ border: "1px solid grey" }}
                    />
                  </div>
                )}
                <input name="avatar" type="file" ref={register()} />
              </div>
              <button type="submit" style={{ marginLeft: "50%" }}>
                Cambia tu foto de perfil
              </button>
            </form>
          </FormContext>
        </Container>
      </div>
    </>
  );
});
