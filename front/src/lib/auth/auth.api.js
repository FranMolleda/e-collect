import axios from "axios";
//Vamos a crear contexto para tener el usuario disponible en toda la app, importamos React
import React, { useContext } from "react";

//Inicializamos UserContext y en App.js lo requerimos
export const UserContext = React.createContext();
//Vamos a crear un contexto personalizado, de esta manera lo importaremos de una forma más sencilla en cualquier sitio.
export const useUser = () => {
  const userState = useContext(UserContext);
  return userState.user;
};
//Creamos otro, el cual tambien pasamos en App para recoger el cambio de estado y lo pasamos en login
export const useUserSetter = () => {
  const userState = useContext(UserContext);
  return userState.setUser;
};

export const useUserIsLoading = () => {
  const userState = useContext(UserContext);
  return userState.loading;
};
//Logout
export const useUserLogout = () => {
  const userState = useContext(UserContext);
  //Devuelve la función "handleLogout"
  return async () => {
    console.log("Log out!");
    //Quita el usuario de React User State context
    userState.setUser(null);
    //Quitar la cookie del back y front
    return doLogout();
  };
};

const api = axios.create({
  baseURL: process.env.BACKEND_URL,
  withCredentials: true,
});

export const doSignup = async (username, password, email, _id, profilePic) => {
  console.log(username, password, email, _id, profilePic);
  const res = await api.post("/auth/signup", {
    username,
    password,
    email,
    profilePic,
  });
  console.log("created User");
  console.log(res.data);
  return res.data;
};

export const doLogin = async (username, password, email, _id, profilePic) => {
  console.log("Do Login");
  const res = await api.post("/auth/login", {
    username,
    password,
    email,
    _id,
    profilePic,
  });
  console.log(res.data);
  return res.data;
};

export const doLogout = async () => {
  const res = await api.get("/auth/logout");
  console.log(res.data);
  return res.data;
};
export const whoami = async () => {
  const res = await api.get("/auth/whoami");
  return res.data;
};
