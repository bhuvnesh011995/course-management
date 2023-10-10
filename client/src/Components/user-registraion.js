import profileImg from "../assets/images/profile-img.png";
import logoImg from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import {
  emailPattern,
  namePattern,
  passwordPattern,
  phonePattern,
} from "../common-components/validations";

export const UserRegistration = () => {
  const {
    handleSubmit,
    register,
    setValues,
    reset,
    watch,
    getValues,
    formState: { errors },
  } = useForm();

  const registerUser = async (userData) => {
    try {
      const formdata = new FormData();
      formdata.append("userImage", userData.userImage[0]);
      const { data } = await axios.post(
        "http://localhost:5000/api/users/registerUser",
        formdata,
        {
          params: {
            userData,
          },
        }
      );
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="account-pages my-5 pt-sm-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-6">
            <div className="card overflow-hidden">
              <div className="bg-primary bg-soft">
                <div className="row">
                  <div className="col-7">
                    <div className="text-primary p-4">
                      <h1 className="text-primary fw-bold">Register Now !</h1>
                      <p>Get your free account now.</p>
                    </div>
                  </div>
                  <div className="col-5 align-self-end">
                    <img src={profileImg} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="card-body pt-0">
                <div>
                  <Link to="/">
                    <div
                      style={{ height: "70px", width: "70px" }}
                      className="avatar-md profile-user-wid mb-4"
                    >
                      <span className="avatar-title rounded-circle bg-light">
                        <img
                          src={logoImg}
                          alt=""
                          className="rounded-circle"
                          height={34}
                        />
                      </span>
                    </div>
                  </Link>
                </div>
                <div className="p-2">
                  <form
                    className="needs-validation row"
                    onSubmit={handleSubmit(registerUser)}
                  >
                    <div className="col-md-6 col-sm-12 mb-3">
                      <label className="form-label">First Name</label>
                      <input
                        type="text"
                        className={`form-control ${
                          errors?.firstName
                            ? "is-invalid"
                            : watch("firstName")?.length > 0 && "is-valid"
                        }`}
                        id="firstName"
                        placeholder="Enter First Name"
                        {...register("firstName", {
                          required: "Please Enter Your First Name",
                          pattern: namePattern,
                        })}
                      />
                      <div className="invalid-feedback">
                        {errors?.firstName && errors?.firstName?.message}
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12 mb-3">
                      <label className="form-label">Last Name</label>
                      <input
                        type="text"
                        className={`form-control ${
                          errors?.lastName
                            ? "is-invalid"
                            : watch("lastName")?.length > 0 && "is-valid"
                        }`}
                        id="lastname"
                        placeholder="Enter Last Name"
                        {...register("lastName", {
                          required: "Please Enter Your Last Name",
                          pattern: namePattern,
                        })}
                      />
                      <div className="invalid-feedback">
                        {errors?.lastName && errors?.lastName?.message}
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12 mb-3">
                      <label className="form-label">Username</label>
                      <input
                        type="text"
                        className={`form-control ${
                          errors?.userName
                            ? "is-invalid"
                            : watch("userName")?.length > 0 && "is-valid"
                        }`}
                        id="username"
                        placeholder="Enter Username"
                        {...register("userName", {
                          required: "Please Enter User Name",
                          pattern: namePattern,
                        })}
                      />
                      <div className="invalid-feedback">
                        {errors?.userName && errors?.userName?.message}
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12 mb-3">
                      <label className="form-label">Password</label>
                      <input
                        type="password"
                        className={`form-control ${
                          errors?.password
                            ? "is-invalid"
                            : watch("password")?.length > 0 && "is-valid"
                        }`}
                        placeholder="Enter Password"
                        {...register("password", {
                          required: "Please Enter password",
                          pattern: passwordPattern,
                        })}
                      />
                      <div className="invalid-feedback">
                        {errors?.password && errors?.password?.message}
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12 mb-3">
                      <label className="form-label">Photo</label>
                      <input
                        type="file"
                        className={`form-control`}
                        id="userphoto"
                        multiple={false}
                        accept="image/*"
                        {...register("userImage")}
                      />
                    </div>
                    <div className="col-md-6 col-sm-12 mb-3">
                      <label htmlFor="useremail" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className={`form-control ${
                          errors?.email
                            ? "is-invalid"
                            : watch("email")?.length > 0 && "is-valid"
                        }`}
                        id="useremail"
                        placeholder="Enter Email"
                        {...register("email", {
                          required: "Please Enter Email",
                          pattern: emailPattern,
                        })}
                      />
                      <div className="invalid-feedback">
                        {errors?.email && errors?.email?.message}
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12 mb-3">
                      <label className="form-label">Phone No.</label>
                      <input
                        type="tel"
                        className={`form-control ${
                          errors?.phoneNo
                            ? "is-invalid"
                            : watch("phoneNo")?.length > 0 && "is-valid"
                        }`}
                        id="phoneno"
                        placeholder="Enter Phone Number"
                        {...register("phoneNo", {
                          required: "Please Enter Phone Number",
                          pattern: phonePattern,
                        })}
                      />
                      <div className="invalid-feedback">
                        {errors?.phoneNo && errors?.phoneNo?.message}
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12 mb-3">
                      <label className="form-label">
                        Applied For Which Course
                      </label>
                      <select
                        className={`form-select ${
                          errors?.course
                            ? "is-invalid"
                            : watch("course")?.length > 0 && "is-valid"
                        }`}
                        id="course"
                        {...register("course", {
                          required: "Please select a course.",
                        })}
                      >
                        <option value="" disabled selected>
                          Select a Course
                        </option>
                        <option value="course1">Course 1</option>
                        <option value="course2">Course 2</option>
                        <option value="course3">Course 3</option>
                      </select>
                      <div className="invalid-feedback">
                        {errors?.course && errors?.course?.message}
                      </div>
                    </div>
                    <div className="col-md-12 col-sm-12 mb-3">
                      <label htmlFor="description" className="form-label">
                        Description
                      </label>
                      <textarea
                        className={`form-control ${
                          errors?.discription
                            ? "is-invalid"
                            : watch("discription")?.length > 0 && "is-valid"
                        }`}
                        id="description"
                        rows={4}
                        placeholder="Enter Description"
                        {...register("discription", {
                          required: "Please enter a Description.",
                          pattern: namePattern,
                        })}
                      />
                      <div className="invalid-feedback">
                        {errors?.discription && errors?.discription?.message}
                      </div>
                    </div>
                    <div className="mt-4 d-grid">
                      <button
                        className="btn btn-primary waves-effect waves-light"
                        type="submit"
                      >
                        Register
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="mt-5 text-center">
              <div>
                <p>
                  Already have an account ?{" "}
                  <Link to="/login" className="fw-medium text-primary">
                    {" "}
                    Login
                  </Link>{" "}
                </p>
                <p>© Tonga.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /* <!-- JAVASCRIPT -->
        <script src="assets/libs/jquery/jquery.min.js"></script>
        <script src="assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="assets/libs/metismenu/metisMenu.min.js"></script>
        <script src="assets/libs/simplebar/simplebar.min.js"></script>
        <script src="assets/libs/node-waves/waves.min.js"></script>

        <!-- validation init -->
        <script src="assets/js/pages/validation.init.js"></script>
        
        <!-- App js -->
        <script src="assets/js/app.js"></script>

</body>
</html> */
}
