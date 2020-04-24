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

export const deleteUserMeet = async (idMeet) => {
  const res = await api.delete(`/auth/profile/delete/${idMeet}`);
  return res.data;
};
export const getDeleteUserMeet = async (idMeet) => {
  const res = await api.delete(`/auth/profile/${idMeet}`);
  return res.data;
};

export const deleteMeet = async (idMeet) => {
  const res = await api.delete(`/meet/delete/${idMeet}`);
  return res.data;
};

export const getMeet = async (idMeet) => {
  const res = await api.get(`/meet/${idMeet}`);
  return res.data;
};

export const getAddMeet = async (id) => {
  const res = await api.post(`/user/${id}/addmeet`);
  return res.data;
};

export const getUserMeet = async (casa) => {
  const res = await api.delete(`/user/profile/usermeet/${casa}`);
  return res.data;
};

//Si lo que quiero es recibir un array el return sería así: return _.filter(res.data);
