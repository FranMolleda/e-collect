import React, { useState } from "react";
import { useForm, FormContext } from "react-hook-form";
import { Container } from "react-bootstrap";
import { withProtected } from "../../lib/auth/protectRoute.hoc.js";
import { useUser, useUserSetter } from "../../lib/auth/auth.api.js";
import { Input, InputTextarea } from "../../forms/input/index";
import { withRouter } from "react-router-dom";
import { changeAvatar, editProfile } from "../../lib/auth/user.api";
import { getUserMeet } from "../../lib/frontRoutes/meetings.api";
import { Link } from "react-router-dom";

import _ from "lodash";

export const ProfilePage = withProtected(
  withRouter((props, { history }) => {
    const [error, setError] = useState();
    const [meet, setMeet] = useState({});
    const user = useUser();
    const setUser = useUserSetter({});
    const methods = useForm();
    const { handleSubmit, register, errors } = methods;
    const messageError = "Campo vacío";
    const id = user.id;
    console.log(user);
    const onSubmit = (values) => {
      const myAvatar = values.avatar[0];
      console.log(myAvatar);
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
                  <label>Nombre</label>
                  <input
                    name="username"
                    defaultValue={user.username}
                    ref={register()}
                  />
                </div>
                <div>
                  <label>Contraseña</label>
                  <input
                    name="password"
                    defaultValue={user.password}
                    ref={register()}
                  />
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
              <Link as="button" to="/meet">
                Mis recogidas
              </Link>
            </Container>
          </FormContext>
        </div>
        <div>
          <p>Estas son mis recogidas</p>

          {user && user.meetings.map((e, i) => <div key={i}>{e.title}</div>)}
        </div>
      </>
    );
  })
);
