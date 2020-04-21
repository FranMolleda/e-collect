import React, { useState } from "react";
import { withProtected } from "../../lib/auth/protectRoute.hoc.js";
import { useUser, useUserSetter } from "../../lib/auth/auth.api.js";
import { useForm, FormContext } from "react-hook-form";
import { Input } from "../../forms/input";
import { Container } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { changeAvatar } from "../../lib/auth/user.api";
import _ from "lodash";

export const ProfilePage = withProtected(() => {
  const user = useUser();
  const setUser = useUserSetter();
  const { handleSubmit, register } = useForm();

  const onSubmit = (values) => {
    const myAvatar = values.avatar[0];
    console.log(myAvatar);
    changeAvatar(myAvatar)
      .then((res) => {
        console.log("Changed File");
        setUser(res.data.user);
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
    <div>
      <h2>Perfil de {user.username} y tal</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
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
    </div>
  );
});
