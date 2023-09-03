import axios from "axios";

const BASE_URL = "http://0.0.0.0:8000";

export const getMembers = () => {
  return axios.get(`${BASE_URL}/officers`);
};

export const getProjects = () => {
  return axios.get(`${BASE_URL}/projects`);
};
