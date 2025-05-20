import axios from "./axios";

export const getExpertRequest = () => {
  return axios.get("/experts");
};
