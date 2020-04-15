import axios from "axios";
import _ from "lodash";

const api = axios.create({
  baseURL: "http://localhost:3000",
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
  console.log(res.data);
  return _.filter(res.data, { _id: idMeet });
};
