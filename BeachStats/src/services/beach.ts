import axios from "./axios";

export const getBeachRequest = () => {
  return axios.get("/beaches");
};

export const getBeachIDRequest = (query: string) => {
  return axios.get(`/beach?p=${query}`)
}
