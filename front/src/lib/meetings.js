import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/meet",
  withCredentials: true,
});

export const getMeetings = async () => {
  const res = await api.get("/");
  return res.data;
};
