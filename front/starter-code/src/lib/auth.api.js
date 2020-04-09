import axios from "axios";
//Vamos a crear contexto para tener el usuario disponible en toda la app, importamos React
import React from "react";
//Inicializamos UserContext y en App.js lo requerimos
export const UserContext = React.createContext();

const api = axios.create({ baseURL: "http://localhost:3000" });
export const doSignup = async (username, password, email) => {
  console.log("Registrando Usuario...");
  console.log(username, password, email);
  const res = await api.post("/auth/signup", {
    username,
    password,
    email,
  });
  console.log("created User");
  console.log(res.data);
  return res.data;
};

export const doLogin = async (username, password, email) => {
  console.log("Do Login");
  const res = await api.post("/auth/login", {
    username,
    password,
    email,
  });
  console.log(res.data);
  return res.data;
};
