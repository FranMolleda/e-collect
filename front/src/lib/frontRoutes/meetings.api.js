import axios from "axios";
import _ from "lodash";

const api = axios.create({
  baseURL: process.env.BACKEND_URL,
  withCredentials: true,
});

export const getPlaces = async () => {
  const res = await api.get("/place");
  return res.data;
};
export const getMeetings = async () => {
  const res = await api.get("/meet");
  return res.data;
};
export const deleteMeet = async (idMeet) => {
  const res = await api.delete(`/meet/delete/${idMeet}`);
  return res.data;
};
export const getMeet = async (idMeet) => {
  const res = await api.get(`/meet/${idMeet}`);
  //Filtramos por un meeting especifico:

  return res.data;
};
export const getAddMeet = async (idUser) => {
  const res = await api.put(`/user/edit/${idUser}`);

  return res.data;
};

//Si lo que quiero es recibir un array el return sería así: return _.filter(res.data);
