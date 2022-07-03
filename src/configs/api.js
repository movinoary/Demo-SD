import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:5010/api/sd-jatirahayu-iv/",
});

export const setAuthToken = token => {
  if (token) {
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete API.defaults.headers.common["Authorization"];
  }
};
