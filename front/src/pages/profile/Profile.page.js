import React, { useState, useEffect } from "react";
import { useForm, FormContext } from "react-hook-form";
import { Container, Card } from "react-bootstrap";
import { withProtected } from "../../lib/auth/protectRoute.hoc.js";
import { useUser, useUserSetter, doLogin } from "../../lib/auth/auth.api.js";
import { withRouter } from "react-router-dom";
import { changeAvatar, editProfile } from "../../lib/auth/user.api";
import { Link } from "react-router-dom";

import _ from "lodash";

export const ProfilePage = withProtected(
  withRouter(({ props, user, history }) => {
    user = useUser();
    const setUser = useUserSetter({});
    const methods = useForm();
    const { handleSubmit, register, errors } = methods;
    const onSubmit = (values) => {
      const myAvatar = values.avatar[0];
      changeAvatar(myAvatar)
        .then((res) => {
          console.log("Changed File");
          setUser(res.data.user);
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
          <h2>Perfil de {user.username}</h2>
          <FormContext {...methods}>
            <Container>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <p>Nombre: {user.username}</p>
                </div>
                <div>
                  <p>Email: {user.email}</p>
                </div>
                <div>
                  <p>
                    Recogidas en las que he participado:{" "}
                    {user.meetings.length - 2}
                  </p>
                </div>
                <div>
                  <p>
                    Recogidas en las que estoy inscrito: {user.meetings.length}
                  </p>
                </div>
                <div style={{ padding: "10px 0" }}>
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
                <button type="submit">Change Profile Pic</button>
              </form>
            </Container>
          </FormContext>
        </div>
        <p>{user.title}</p>
        <div>
          <ul>
            {user &&
              user.meetings.map((meeting, i) => (
                <>
                  <Card style={{ width: "18rem" }}>
                    <Card.Body>
                      <Card.Title> {meeting.title}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        Card Subtitle
                      </Card.Subtitle>
                      <Card.Text></Card.Text>
                      <Card.Link href="#">Card Link</Card.Link>
                      <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                  </Card>
                  <Link to={`/meet/${meeting.id}`} key={i}>
                    <li>
                      {meeting.title}, {meeting.city}
                    </li>
                  </Link>
                </>
              ))}
          </ul>
        </div>
      </>
    );
  })
);
