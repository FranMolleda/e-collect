import React, { useState } from "react";
import { useForm, FormContext } from "react-hook-form";
import { Container } from "react-bootstrap";
import { withProtected } from "../../lib/auth/protectRoute.hoc.js";
import { useUser, useUserSetter } from "../../lib/auth/auth.api.js";
import { Input, InputTextarea } from "../../forms/input/index";
import { withRouter } from "react-router-dom";
import { changeAvatar, editProfile } from "../../lib/auth/user.api";
import _ from "lodash";

export const ProfilePage = withProtected(
  withRouter(({ history }) => {
    const [error, setError] = useState();
    const user = useUser();
    const setUser = useUserSetter();
    const methods = useForm();
    const { handleSubmit, register, errors } = methods;
    const messageError = "Campo vacío";

    const onSubmit = (values) => {
      const myAvatar = values.avatar[0];
      const username = values.username;
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
      editProfile(username).then((res) => {
        console.log(username);
        setUser(res.data.user);
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
          </Container>
        </FormContext>
      </div>
    );
  })
);
