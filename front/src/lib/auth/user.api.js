import axios from "axios";

const api = axios.create({
  baseURL: process.env.BACKEND_URL,
  withCredentials: true,
});

export const changeAvatar = async (avatarFile, username) => {
  const data = new FormData();
  data.append("avatar", avatarFile, "username", username);
  return api.post("/profilepic", data);
};

export const editProfile = async (username, password) => {
  console.log("entrando");
  const res = await api.post("/user/create", {
    username,
    password,
  });
  console.log("edited User");
  console.log(username);
  return res.data;
};
