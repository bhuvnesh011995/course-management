import axios from "axios";
import { BASEURL } from "../config/config";

export const AxiosInstance = axios.create({
  baseURL: BASEURL+"/api",
  headers: {
    "x-token-header": localStorage.getItem("token"),
  },
});

export const formAxiosInstance = axios.create({
  baseURL: BASEURL + "/api",
  headers: {
    "x-token-header": localStorage.getItem("token"),
    "Content-Type": "multipart/form-data",
  },
});
