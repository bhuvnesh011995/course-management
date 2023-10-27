import axios from "axios";

export const AxiosInstance = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "token-header": localStorage.getItem("token"),
  },
});
