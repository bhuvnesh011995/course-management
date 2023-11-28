import { useCallback, useEffect, useState } from "react";
// import usIcon from "../assets/images/flags/us.jpg";
// import italyIcon from "../assets/images/flags/italy.jpg";
// import spainIcon from "../assets/images/flags/spain.jpg";
// import germanIcon from "../assets/images/flags/germany.jpg";
// import systemLogo from "../assets/images/clients/4.png";
import headerAvatar from "../assets/images/users/avatar-1.jpg";
import { filePath, onMenuClicked } from "./useCommonUsableFunctions";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { AxiosInstance } from "./axiosInstance";
import { toast } from "react-toastify";
import { Dropdown } from "./common-dropDown";

export const CommonNavbar = () => {
  const { initialUser, user, setUser, setLanCode, lanCode, getLanguage } =
    useAuth();
  const navigate = useNavigate();
  const [showLanguages, setShowLanguages] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [languages, setLanguages] = useState([]);
  const getLanguages = useCallback(async () => {
    try {
      let response = await AxiosInstance.get("/languages/lang");
      if (response?.status === 200) {
        setLanguages(response.data ?? []);
        response.data.length && setLanCode(response.data[0].code);
      }
    } catch (error) {
      console.error(error);
      if (error.response.status == 401)
        toast.error(error.response.data.message);
      toast.error("error while fecting languages");
    }
  });
  useEffect(() => {
    getLanguages();
  }, []);

  const [isFullScreen, setIsFullScreen] = useState(false);

  const fullScreen = () => {
    if (!isFullScreen) {
      document.getElementById("layout-wrapper").requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    setIsFullScreen(!isFullScreen);
  };

  const changeLanguage = (langUrl) => {
    const languageElement = document.getElementById("header-lang-img");
    languageElement.src = langUrl;
    setShowLanguages(false);
  };

  const userLogOut = () => {
    localStorage.removeItem("token");
    setUser(initialUser);

    navigate("/login");
  };

  return (
    <div id="layout-wrapper">
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex justify-content-center align-items-center">
            {/* LOGO */}
            <div className="navbar-brand-box d-flex justify-content-center align-items-center">
              <Link to="/" className="logo logo-light">
                <span className="logo-sm">
                  {/* <img
                    id="systemLogoImg-sm"
                    height={100}
                    src={
                      user.systemConfigurations?.systemLogo?.length
                        ? filePath(user.systemConfigurations?.systemLogo)
                        : systemLogo
                    }
                  /> */}
                  Tonga
                </span>
                <span className="logo-lg">
                  {/* <img
                    id="systemLogoImg-lg"
                    height={90}
                    src={
                      user.systemConfigurations?.systemLogo?.length
                        ? filePath(user.systemConfigurations?.systemLogo)
                        : systemLogo
                    }
                  /> */}
                  Tonga
                </span>
              </Link>
            </div>
            <button
              type="button"
              className="btn btn-sm px-3 font-size-16 header-item waves-effect"
              id="vertical-menu-btn"
              onClick={() => onMenuClicked()}
            >
              <i className="fa fa-fw fa-bars" />
            </button>
            {/* App Search*/}
            <form className="app-search d-none d-lg-block">
              <div className="position-relative">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                />
                <span className="bx bx-search-alt" />
              </div>
            </form>
          </div>
          <div className="d-flex">
            <div className="dropdown d-inline-block d-lg-none ms-2">
              <button
                type="button"
                className="btn header-item noti-icon waves-effect"
                id="page-header-search-dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="mdi mdi-magnify" />
              </button>
              <div
                className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                aria-labelledby="page-header-search-dropdown"
              ></div>
            </div>
            <div className="dropdown mt-4">
              <select
                value={lanCode}
                onChange={(e) => setLanCode(e.target.value)}
              >
                {languages?.map((ele, i) => (
                  <option key={i} value={ele.code}>
                    {ele.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="dropdown d-inline-block">
              <button
                type="button"
                className="btn header-item waves-effect"
                id="page-header-user-dropdown"
                onClick={() => setShowUserMenu(!showUserMenu)}
              >
                <img
                  className="rounded-circle header-profile-user"
                  src={headerAvatar}
                  alt="Header Avatar"
                />
                <span className="d-none d-xl-inline-block ms-1" key="t-henry">
                  Henry
                </span>
                <i className="mdi mdi-chevron-down d-none d-xl-inline-block" />
              </button>
              {showUserMenu && (
                <div className="right-10 dropdown-menu dropdown-menu-end">
                  <a className="dropdown-item" href="#">
                    <i className="bx bx-user font-size-16 align-middle me-1" />
                    <span key="t-profile">Profile</span>
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item text-danger" onClick={userLogOut}>
                    <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger" />{" "}
                    <span key="t-logout">Logout</span>
                  </a>
                </div>
              )}
            </div>

            {/* <Dropdown.Container
              className="bg-transparent "
              closeOnClick
              toggle={
                <button
                  type="button"
                  className="btn header-item waves-effect"
                  id="page-header-user-dropdown"
                  onClick={() => setShowUserMenu(!showUserMenu)}
                >
                  <img
                    className="rounded-circle header-profile-user"
                    src={headerAvatar}
                    alt="Header Avatar"
                  />
                  <span className="d-none d-xl-inline-block ms-1" key="t-henry">
                    Henry
                  </span>
                  <i className="mdi mdi-chevron-down d-none d-xl-inline-block" />
                </button>
              }
              menuClassName="dropdown-menu "
            >
              <Dropdown.Item className="dropdown-item">
                <a className="dropdown-item" href="#">
                  <i className="bx bx-user font-size-16 align-middle me-1" />
                  <span key="t-profile">Profile</span>
                </a>
              </Dropdown.Item>

              <Dropdown.Item className="dropdown-item text-danger">
                <a className="dropdown-item text-danger" onClick={userLogOut}>
                  <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger" />{" "}
                  <span key="t-logout">Logout</span>
                </a>
              </Dropdown.Item>
            </Dropdown.Container> */}
          </div>
        </div>
      </header>
    </div>
  );
};
