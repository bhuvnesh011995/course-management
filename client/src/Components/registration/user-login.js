import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import logoLight from "../../assets/images/logo-light.svg";
import profileImg from "../../assets/images/profile-img.png";
import { AxiosInstance } from "../../common-components/axiosInstance";
import { toast } from "react-toastify";
import { useAuth } from "../../context/authContext";
import { CommonFooter } from "../../common-components/commonFooter";

export const LoginUser = () => {
  const navigate = useNavigate();
  const { setUser, user, initialUser } = useAuth();

  useEffect(() => {
    if (user.token || localStorage.getItem("token")) navigate("/");
  }, []);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const signIn = async (userData) => {
    try {
      toast.dismiss();
      const response = await AxiosInstance.post("/users/signIn", userData);
      if (response.status === 200) {
        if (response.data.token) {
          const token = response.data.token;
          toast.success("Login Successfull");
          setUser((old) => ({ ...old, token: token }));
          localStorage.setItem("token", token);
          navigate("/");
        }
      } else {
        toast.error("something went wrong");
      }
    } catch (err) {
      if (err.response.status === 401) {
        toast.error(err.response?.data?.message);
      }
    }
  };

  const changePasswordType = () => {
    const passwordElement = document.getElementById("password");
    if (passwordElement.type == "text") passwordElement.type = "password";
    else passwordElement.type = "input";
  };

  return (
    <div className="account-pages my-5 pt-sm-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 col-xl-5">
            <div className="card overflow-hidden">
              <div className="bg-primary bg-soft">
                <div className="row">
                  <div className="col-7">
                    <div className="text-primary p-4">
                      <h5 className="text-primary">Welcome Back !!!</h5>
                      <p>Log in to continue to Tonga.</p>
                    </div>
                  </div>
                  <div className="col-5 align-self-end">
                    <img src={profileImg} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="card-body pt-0">
                <div className="auth-logo">
                  <a className="auth-logo-light">
                    <div className="avatar-md profile-user-wid mb-4">
                      <span className="avatar-title rounded-circle bg-light">
                        <img
                          src={logoLight}
                          alt=""
                          className="rounded-circle"
                          height="34"
                        />
                      </span>
                    </div>
                  </a>

                  {/* <Link to="/" className="auth-logo-dark">
                    <div className="avatar-md profile-user-wid mb-4">
                      <span className="avatar-title rounded-circle bg-light">
                        <img src={logo} alt="" className="rounded-circle" />
                      </span>
                    </div>
                  </Link> */}
                </div>
                <div className="p-2">
                  <form
                    className="form-horizontal"
                    onSubmit={handleSubmit(signIn)}
                  >
                    <div className="mb-3">
                      <label for="username" className="form-label">
                        Email
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        placeholder="Enter email"
                        {...register("email", {
                          required: "this is required field",
                        })}
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Password</label>
                      <div className="input-group auth-pass-inputgroup">
                        <input
                          type="password"
                          id="password"
                          className="form-control"
                          placeholder="Enter password"
                          {...register("password", {
                            required: "this is required field",
                          })}
                        />
                        <button
                          className="btn btn-light "
                          type="button"
                          id="password-addon"
                          onClick={changePasswordType}
                        >
                          <i className="mdi mdi-eye-outline"></i>
                        </button>
                      </div>
                    </div>

                    <div className="form-check d-flex align-items-center ">
                      <input
                        style={{ width: "14px" }}
                        className="mx-2"
                        type="checkbox"
                        id="remember-check"
                      />
                      <label className="form-check-label" for="remember-check">
                        Remember me
                      </label>
                    </div>

                    <div className="mt-3 d-grid">
                      <button
                        className="btn btn-primary waves-effect waves-light"
                        type="submit"
                      >
                        Log In
                      </button>
                    </div>

                    <div className="mt-4 text-center">
                      <h5 className="font-size-14 mb-3">Sign in with</h5>

                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <a className="social-list-item bg-primary text-white border-primary">
                            <i className="mdi mdi-facebook"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a className="social-list-item bg-info text-white border-info">
                            <i className="mdi mdi-twitter"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a className="social-list-item bg-danger text-white border-danger">
                            <i className="mdi mdi-google"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="mt-5 text-center">
              <div>
                <p>
                  © <script>{new Date().getFullYear()}</script> Tonga.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
