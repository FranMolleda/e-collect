import axios from "axios";

//Para no escribir toda la url en cada llamada a axios:
const api = axios.create({ baseURL: "http://localhost:3000" });
export const doSignup = async (username, password, email) => {
  // Axios post ruta /auth/signup en servidor para crear un usuario en mongodb
  console.log("Registrando Usuario...");
  console.log(username, password, email);
  const res = await api.post("/auth/signup", {
    username,
    password,
    email,
  });
  console.log("created User");
  //Data es el body de la respuesta, que viene a ser el newUser del res.json del back
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
