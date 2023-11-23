import { useCallback, useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { IntlProvider } from "react-intl";
import { AxiosInstance } from "../common-components/axiosInstance";
import { toast } from "react-toastify";
import {} from "react-router-dom";
import axios from "axios";
import { BASEURL } from "../config/config";
let initialUser = {
  username: "",
  email: "",
  token: "",
  userData: {},
};
let authContext = createContext(initialUser);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(initialUser);
  const [lanCode, setLanCode] = useState();
  const [language, setLanguage] = useState();
  const [ready, setReady] = useState(false);

  const userLogOut = () => {
    localStorage.removeItem("token");
    setUser(initialUser);
  };

  const getLanguage = useCallback(async (languageCode) => {
    try {
      let response = await AxiosInstance.get(
        "/languages/language/?code=" + languageCode ?? ""
      );
      if (response && response.status === 200) {
        setLanguage(response.data.language);
      } else {
        toast.error("cannot get language data");
      }
    } catch (error) {
      toast.error("error occured while fetching data");
    }
  }, []);

  const getTokenUser = useCallback(async () => {
    try {
      const token = user.token || localStorage.getItem("token");
      const tokenUser = await AxiosInstance.get(`/users/tokenUser/${token}`);
      if (tokenUser.status == 200)
        setUser((old) => ({ ...old, userData: tokenUser.data }));
    } catch (err) {
      console.log(err.response, "errorroror");
      // if (err.response.status == 401) {
      //   userLogOut();
      //   toast.error(err.response.data.message);
      // } else
      // console.log(err.response, "boom");
      toast.error("error occured while fetching data");
    }
  }, []);

  useEffect(() => {
    if (ready) {
      getLanguage(lanCode);
    } else setReady(true);
  }, [lanCode]);

  useEffect(() => {
    if (localStorage.getItem("token") || user.token) getTokenUser();
  }, [localStorage.getItem("token"), user.token]);

  return (
    <IntlProvider locale={lanCode || "en"} messages={language}>
      <authContext.Provider
        value={{ initialUser, user, setUser, lanCode, setLanCode, getLanguage }}
      >
        {children}
      </authContext.Provider>
    </IntlProvider>
  );
}

let useAuth = () => useContext(authContext);

export { useAuth };
