import axios from "./axios";

export const getBeachRegionRequest = (query: string) => {
  return axios.get(`/region?p=${query}`);
};

export const getBeachTypeRequest = (query: string) => {
  return axios.get(`/beach-type?p=${query}`, );
};
