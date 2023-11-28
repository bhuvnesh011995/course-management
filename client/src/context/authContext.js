import { useCallback, useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { IntlProvider } from "react-intl";
import { AxiosInstance } from "../common-components/axiosInstance";
import { toast } from "react-toastify";
import { filePath } from "../common-components/useCommonUsableFunctions";

let initialUser = {
  username: "",
  email: "",
  token: "",
  userData: {},
  systemConfigurations: {},
  otherConfigurations: {},
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
      console.error(error);
      toast.error("error occured while fetching data");
    }
  }, []);

  const getTokenUser = useCallback(async () => {
    try {
      const tokenUser = await AxiosInstance.get(`/users/tokenUser`);
      if (tokenUser.status == 200)
        setUser((old) => ({ ...old, userData: tokenUser.data }));
    } catch (err) {
      console.error(err);
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

  const getSystemData = async () => {
    try {
      const systemData = await AxiosInstance.get("/config/system");
      if (systemData?.status == 200)
        setUser((old) => ({ ...old, systemConfigurations: systemData.data }));
      if (systemData?.data?.systemFavicon?.length) {
        const favIconUrl = filePath(systemData.data.systemFavicon);
        const favIconElement = document.getElementById("favIcon-img");
        if (favIconElement) favIconElement.href = favIconUrl;
      }
      if (systemData?.data?.name?.length) {
        // const systemElement = document.getElementById("tongaSystemName");
        // systemElement.textContent = systemData.data.name;
        document.title = systemData.data.name;
      }
    } catch (err) {
      console.error(err);
    }
  };

  const getOtherData = async () => {
    try {
      const otherData = await AxiosInstance.get("/config/other");
      if (otherData?.status == 200)
        setUser((old) => ({ ...old, otherConfigurations: otherData.data }));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token") || user.token) getTokenUser();
    getSystemData();
    getOtherData();
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
