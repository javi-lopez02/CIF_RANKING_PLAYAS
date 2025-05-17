import axios from "./axios";

export const getMediaRequest = () => {
  return axios.get("/media");
};
