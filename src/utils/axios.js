import * as axiosOriginal from "axios";

export const axios = axiosOriginal.create({
  baseURL: `https://wocman-node-api-8080.herokuapp.com/`,
});

export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};
