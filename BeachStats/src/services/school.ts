import axios from "./axios";

export const getSchoolRequest = () => {
  return axios.get("/school");
};
