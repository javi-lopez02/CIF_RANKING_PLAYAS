import axios from "./axios";

export const getScientificRequest = () => {
  return axios.get("/scientific");
};
