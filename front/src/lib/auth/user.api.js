import axios from "axios";

const api = axios.create({
  baseURL: process.env.BACKEND_URL,
  withCredentials: true,
});

export const changeAvatar = async (avatarFile) => {
  const data = new FormData();
  data.append("avatar", avatarFile);
  return api.post("/profilepic", data);
};
