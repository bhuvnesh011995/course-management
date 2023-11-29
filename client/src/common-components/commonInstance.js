import axios from "axios";
import { BASEURL } from "../config/config";
import { useAuth } from "../context/authContext";
import { useEffect } from "react";

export let AxiosInstance, formAxiosInstance;

export default function useAxios() {
  const { user } = useAuth();
  useEffect(() => {
    AxiosInstance = axios.create({
      baseURL: BASEURL + "/api",
      headers: {
        "x-token-header": user?.token || localStorage.getItem("token"),
      },
    });

    formAxiosInstance = axios.create({
      baseURL: BASEURL + "/api",
      headers: {
        "x-token-header": user?.token || localStorage.getItem("token"),
        "Content-Type": "multipart/form-data",
      },
    });
  }, [user]);

  return { AxiosInstance, formAxiosInstance };
}
