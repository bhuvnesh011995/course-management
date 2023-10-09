// <!doctype html>
// <html lang="en">

//     <head>

//         <meta charset="utf-8" />
//         <title>Register | Tonga</title>
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <meta content="#" name="description" />
//         <meta content="Themesbrand" name="author" />
//         <!-- App favicon -->
//         <link rel="shortcut icon" href="assets/images/favicon.ico">

//         <!-- Bootstrap Css -->
//         <link href="assets/css/bootstrap.min.css" id="bootstrap-style" rel="stylesheet" type="text/css" />
//         <!-- Icons Css -->
//         <link href="assets/css/icons.min.css" rel="stylesheet" type="text/css" />
//         <!-- App Css-->
//         <link href="assets/css/app.min.css" id="app-style" rel="stylesheet" type="text/css" />

//     </head>

//     <body >

export const UserRegistration = () => {
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
                    <img
                      src="assets/images/profile-img.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="card-body pt-0">
                <div>
                  <a href="index.html">
                    <div className="avatar-md profile-user-wid mb-4">
                      <span className="avatar-title rounded-circle bg-light">
                        <img
                          src="assets/images/logo.svg"
                          alt=""
                          className="rounded-circle"
                          height={34}
                        />
                      </span>
                    </div>
                  </a>
                </div>
                <div className="p-2">
                  <form className="needs-validation row" noValidate action="#">
                    <div className="col-md-6 col-sm-12 mb-3">
                      <label htmlFor="firstname" className="form-label">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstname"
                        placeholder="Enter First Name"
                        required
                      />
                      <div className="invalid-feedback">
                        Please enter your First Name.
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12 mb-3">
                      <label htmlFor="lastname" className="form-label">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastname"
                        placeholder="Enter Last Name"
                        required
                      />
                      <div className="invalid-feedback">
                        Please enter your Last Name.
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12 mb-3">
                      <label htmlFor="username" className="form-label">
                        Username
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        placeholder="Enter Username"
                        required
                      />
                      <div className="invalid-feedback">
                        Please enter a Username.
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12 mb-3">
                      <label htmlFor="userpassword" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="userpassword"
                        placeholder="Enter Password"
                        required
                      />
                      <div className="invalid-feedback">
                        Please enter a Password.
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12 mb-3">
                      <label htmlFor="userphoto" className="form-label">
                        Photo
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        id="userphoto"
                        accept="image/*"
                      />
                    </div>
                    <div className="col-md-6 col-sm-12 mb-3">
                      <label htmlFor="useremail" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="useremail"
                        placeholder="Enter Email"
                        required
                      />
                      <div className="invalid-feedback">
                        Please enter a valid Email.
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12 mb-3">
                      <label htmlFor="phoneno" className="form-label">
                        Phone No.
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phoneno"
                        placeholder="Enter Phone Number"
                        required
                      />
                      <div className="invalid-feedback">
                        Please enter a valid Phone Number.
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12 mb-3">
                      <label htmlFor="course" className="form-label">
                        Applied For Which Course
                      </label>
                      <select className="form-select" id="course" required>
                        <option value disabled selected>
                          Select a Course
                        </option>
                        <option value="course1">Course 1</option>
                        <option value="course2">Course 2</option>
                        <option value="course3">Course 3</option>
                      </select>
                      <div className="invalid-feedback">
                        Please select a course.
                      </div>
                    </div>
                    <div className="col-md-12 col-sm-12 mb-3">
                      <label htmlFor="description" className="form-label">
                        Description
                      </label>
                      <textarea
                        className="form-control"
                        id="description"
                        rows={4}
                        placeholder="Enter Description"
                        required
                        defaultValue={""}
                      />
                      <div className="invalid-feedback">
                        Please enter a Description.
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
                  <a href="auth-login.html" className="fw-medium text-primary">
                    {" "}
                    Login
                  </a>{" "}
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
