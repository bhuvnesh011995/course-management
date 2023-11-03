import axios from "axios";

export const AxiosInstance = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "x-token-header": localStorage.getItem("token"),
  },
});

export const formAxiosInstance = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "x-token-header": localStorage.getItem("token"),
    "Content-Type": "multipart/form-data",
  },
});
