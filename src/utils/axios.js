import * as axiosOriginal from "axios";
import { BASE_URL } from "./constants";

export const axios = axiosOriginal.create({
  baseURL: BASE_URL
});

export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};
