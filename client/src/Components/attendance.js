// <!doctype html>
// <html lang="en">

import { MenuBar } from "../common-components/MenuBar";
import { CommonNavbar } from "../common-components/Navbar";
import { onMenuClicked } from "../common-components/useCommonUsableFunctions";

// <head>

//     <meta charset="utf-8" />
//     <title>Attendance Management | Tonga</title>
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta content="#" name="description" />
//     <meta content="Themesbrand" name="author" />
//     <!-- App favicon -->
//     <link rel="shortcut icon" href="assets/images/favicon.ico">

//     <!-- DataTables -->
//     <link href="assets/libs/datatables.net-bs4/css/dataTables.bootstrap4.min.css" rel="stylesheet" type="text/css" />
//     <link href="assets/libs/datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css" rel="stylesheet"
//         type="text/css" />

//     <!-- Responsive datatable examples -->
//     <link href="assets/libs/datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css" rel="stylesheet"
//         type="text/css" />

//     <!-- Bootstrap Css -->
//     <link href="assets/libs/select2/css/select2.min.css" rel="stylesheet" type="text/css" />
//     <link href="assets/css/bootstrap.min.css" id="bootstrap-style" rel="stylesheet" type="text/css" />
//     <!-- Icons Css -->
//     <link href="assets/css/icons.min.css" rel="stylesheet" type="text/css" />
//     <!-- App Css-->
//     <link href="assets/css/app.min.css" id="app-style" rel="stylesheet" type="text/css" />
//     <!-- Custom Css-->
//     <link href="assets/css/custom.css" id="app-style" rel="stylesheet" type="text/css" />
//     <link rel="stylesheet" href="assets/libs/smart-wizaed/smart-wizaed.css">

// </head>

// <body data-sidebar="dark">

{
  /* <!-- Start layout-wrapper --> */
}

export const Attendance = () => {
  return (
    <div id="layout-wrapper">
      {/* <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex">
            <div className="navbar-brand-box d-flex justify-content-center align-items-center">
              <a href="index.html" className="logo logo-light">
                <span className="logo-sm">
                  <img src="assets/images/logo-light.svg" alt="" height="22" />
                  <h1 className="text-white">Tonga</h1>
                </span>
                <span className="logo-lg">
                  <img src="assets/images/logo-light.png" alt="" height="19" />
                  <h1 className="text-white">Tonga</h1>
                </span>
              </a>
            </div>

            <button
              type="button"
              className="btn btn-sm px-3 font-size-16 header-item waves-effect"
              id="vertical-menu-btn"
              onClick={() => onMenuClicked()}
            >
              <i className="fa fa-fw fa-bars"></i>
            </button>

            <form className="app-search d-none d-lg-block">
              <div className="position-relative">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                />
                <span className="bx bx-search-alt"></span>
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
                <i className="mdi mdi-magnify"></i>
              </button>
              <div
                className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                aria-labelledby="page-header-search-dropdown"
              >
                <form className="p-3">
                  <div className="form-group m-0">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search ..."
                        aria-label="Recipient's username"
                      />
                      <div className="input-group-append">
                        <button className="btn btn-primary" type="submit">
                          <i className="mdi mdi-magnify"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="dropdown d-inline-block">
              <button
                type="button"
                className="btn header-item waves-effect"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  id="header-lang-img"
                  src="assets/images/flags/us.jpg"
                  alt="Header Language"
                  height="16"
                />
              </button>
              <div className="dropdown-menu dropdown-menu-end">
                <a
                  href="javascript:void(0);"
                  className="dropdown-item notify-item language"
                  data-lang="en"
                >
                  <img
                    src="assets/images/flags/us.jpg"
                    alt="user-image"
                    className="me-1"
                    height="12"
                  />{" "}
                  <span className="align-middle">English</span>
                </a>
                <a
                  href="javascript:void(0);"
                  className="dropdown-item notify-item language"
                  data-lang="sp"
                >
                  <img
                    src="assets/images/flags/spain.jpg"
                    alt="user-image"
                    className="me-1"
                    height="12"
                  />
                  <span className="align-middle">Spanish</span>
                </a>

                <a
                  href="javascript:void(0);"
                  className="dropdown-item notify-item language"
                  data-lang="gr"
                >
                  <img
                    src="assets/images/flags/germany.jpg"
                    alt="user-image"
                    className="me-1"
                    height="12"
                  />
                  <span className="align-middle">German</span>
                </a>

                <a
                  href="javascript:void(0);"
                  className="dropdown-item notify-item language"
                  data-lang="it"
                >
                  <img
                    src="assets/images/flags/italy.jpg"
                    alt="user-image"
                    className="me-1"
                    height="12"
                  />
                  <span className="align-middle">Italian</span>
                </a>

                <a
                  href="javascript:void(0);"
                  className="dropdown-item notify-item language"
                  data-lang="ru"
                >
                  <img
                    src="assets/images/flags/russia.jpg"
                    alt="user-image"
                    className="me-1"
                    height="12"
                  />
                  <span className="align-middle">Russian</span>
                </a>
              </div>
            </div>

            <div className="dropdown d-none d-lg-inline-block ms-1">
              <button
                type="button"
                className="btn header-item noti-icon waves-effect"
                data-bs-toggle="fullscreen"
              >
                <i className="bx bx-fullscreen"></i>
              </button>
            </div>

            <div className="dropdown d-inline-block">
              <button
                type="button"
                className="btn header-item noti-icon waves-effect"
                id="page-header-notifications-dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="bx bx-bell bx-tada"></i>
                <span className="badge bg-danger rounded-pill">3</span>
              </button>
              <div
                className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                aria-labelledby="page-header-notifications-dropdown"
              >
                <div className="p-3">
                  <div className="row align-items-center">
                    <div className="col">
                      <h6 className="m-0" key="t-notifications">
                        {" "}
                        Notifications{" "}
                      </h6>
                    </div>
                    <div className="col-auto">
                      <a href="#!" className="small" key="t-view-all">
                        {" "}
                        View All
                      </a>
                    </div>
                  </div>
                </div>
                <div data-simplebar style="max-height: 230px;">
                  <a
                    href="javascript: void(0);"
                    className="text-reset notification-item"
                  >
                    <div className="d-flex">
                      <div className="avatar-xs me-3">
                        <span className="avatar-title bg-primary rounded-circle font-size-16">
                          <i className="bx bx-cart"></i>
                        </span>
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="mb-1" key="t-your-order">
                          Your order is placed
                        </h6>
                        <div className="font-size-12 text-muted">
                          <p className="mb-1" key="t-grammer">
                            If several languages coalesce the grammar
                          </p>
                          <p className="mb-0">
                            <i className="mdi mdi-clock-outline"></i>{" "}
                            <span key="t-min-ago">3 min ago</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    href="javascript: void(0);"
                    className="text-reset notification-item"
                  >
                    <div className="d-flex">
                      <img
                        src="assets/images/users/avatar-3.jpg"
                        className="me-3 rounded-circle avatar-xs"
                        alt="user-pic"
                      />
                      <div className="flex-grow-1">
                        <h6 className="mb-1">James Lemire</h6>
                        <div className="font-size-12 text-muted">
                          <p className="mb-1" key="t-simplified">
                            It will seem like simplified English.
                          </p>
                          <p className="mb-0">
                            <i className="mdi mdi-clock-outline"></i>{" "}
                            <span key="t-hours-ago">1 hours ago</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    href="javascript: void(0);"
                    className="text-reset notification-item"
                  >
                    <div className="d-flex">
                      <div className="avatar-xs me-3">
                        <span className="avatar-title bg-success rounded-circle font-size-16">
                          <i className="bx bx-badge-check"></i>
                        </span>
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="mb-1" key="t-shipped">
                          Your item is shipped
                        </h6>
                        <div className="font-size-12 text-muted">
                          <p className="mb-1" key="t-grammer">
                            If several languages coalesce the grammar
                          </p>
                          <p className="mb-0">
                            <i className="mdi mdi-clock-outline"></i>{" "}
                            <span key="t-min-ago">3 min ago</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>

                  <a
                    href="javascript: void(0);"
                    className="text-reset notification-item"
                  >
                    <div className="d-flex">
                      <img
                        src="assets/images/users/avatar-4.jpg"
                        className="me-3 rounded-circle avatar-xs"
                        alt="user-pic"
                      />
                      <div className="flex-grow-1">
                        <h6 className="mb-1">Salena Layfield</h6>
                        <div className="font-size-12 text-muted">
                          <p className="mb-1" key="t-occidental">
                            As a skeptical Cambridge friend of mine occidental.
                          </p>
                          <p className="mb-0">
                            <i className="mdi mdi-clock-outline"></i>{" "}
                            <span key="t-hours-ago">1 hours ago</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="p-2 border-top d-grid">
                  <a
                    className="btn btn-sm btn-link font-size-14 text-center"
                    href="javascript:void(0)"
                  >
                    <i className="mdi mdi-arrow-right-circle me-1"></i>{" "}
                    <span key="t-view-more">View More..</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="dropdown d-inline-block">
              <button
                type="button"
                className="btn header-item waves-effect"
                id="page-header-user-dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  className="rounded-circle header-profile-user"
                  src="assets/images/users/avatar-1.jpg"
                  alt="Header Avatar"
                />
                <span className="d-none d-xl-inline-block ms-1" key="t-henry">
                  Henry
                </span>
                <i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
              </button>
              <div className="dropdown-menu dropdown-menu-end">
                <a className="dropdown-item" href="#">
                  <i className="bx bx-user font-size-16 align-middle me-1"></i>
                  <span key="t-profile">Profile</span>
                </a>
                <a className="dropdown-item" href="#">
                  <i className="bx bx-wallet font-size-16 align-middle me-1"></i>{" "}
                  <span key="t-my-wallet">My Wallet</span>
                </a>
                <a className="dropdown-item d-block" href="#">
                  <span className="badge bg-success float-end">11</span>
                  <i className="bx bx-wrench font-size-16 align-middle me-1"></i>{" "}
                  <span key="t-settings">Settings</span>
                </a>
                <a className="dropdown-item" href="#">
                  <i className="bx bx-lock-open font-size-16 align-middle me-1"></i>{" "}
                  <span key="t-lock-screen">Lock screen</span>
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item text-danger" href="#">
                  <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i>{" "}
                  <span key="t-logout">Logout</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header> */}
      <CommonNavbar />
      {/* <!-- ========== Left Sidebar Start ========== --> */}

      <MenuBar />
      {/* <!-- Left Sidebar End --> */}

      {/* <!-- ============================================================== -->
        <!-- Start right Content here -->
        <!-- ============================================================== --> */}
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            {/* <!-- start page title --> */}
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0 font-size-18">
                    Attendance Management
                  </h4>

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="index.html">Dashboard</a>
                      </li>
                      <li className="breadcrumb-item active">
                        Attendance Management
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end page title --> */}
            <div className="row">
              <div className="col-xl-12">
                <div className="card">
                  <div className="card-body p-3">
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                      <div className="row w-100">
                        <div className="col-xl-4">
                          <div className="className-select">
                            <label for="classDropdown">Serch By Class:</label>
                            <select id="classDropdown" className="form-select">
                              <option value="math101">Class 1</option>
                              <option value="eng101">Class 2</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-xl-4">
                          <div className="className-select">
                            <label for="classDropdown">Serch By Course:</label>
                            <select id="classDropdown" className="form-select">
                              <option value="math101">Course 1</option>
                              <option value="eng101">Course 2</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-xl-4">
                          <div className="className-select">
                            <label for="classDropdown">Serch By Name:</label>
                            <div className="d-flex" role="search">
                              <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                              />{" "}
                              <button className="btn btn-light" type="submit">
                                Search
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Role cards --> */}

            <div className="row g-4">
              <div className="col-md-12">
                {/* <!-- Role Table --> */}
                <div className="card ">
                  <div className="card-header justify-content-between">
                    <div className="card-title">Attendance List </div>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table
                        id="datatable-buttons"
                        className="table table-bordered dt-responsive nowrap w-100"
                      >
                        <thead>
                          <tr>
                            <th>Sr No</th>
                            <th scope="col">Participant's Name</th>
                            <th scope="col">Enrollment ID</th>
                            <th scope="col">Course</th>
                            <th scope="col">Date</th>
                            <th scope="col">Status</th>
                            <th scope="col">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>John Doe</td>
                            <td>12345</td>
                            <td>Mathematics 101</td>
                            <td>2023-09-01</td>

                            <td>
                              <span className="badge badge-soft-danger">
                                Absent
                              </span>
                            </td>
                            <td>
                              <a
                                aria-label="anchor"
                                href="javascript:void(0);"
                                className="btn btn-icon btn-sm btn-danger rounded-pill"
                              >
                                <i className="mdi mdi-trash-can"></i>
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/* <!--/ Role Table --> */}
              </div>
            </div>
            {/* <!--/ Role cards --> */}
          </div>
          {/* <!-- container-fluid --> */}
        </div>
        {/* <!-- End Page-content --> */}

        <footer className="footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6">
                <script>document.write(new Date().getFullYear())</script> ©
                Tonga.
              </div>
              <div className="col-sm-6">
                <div className="text-sm-end d-none d-sm-block">
                  Design & Develop by{" "}
                  <a href="https://braincavesoft.com" target="_blank">
                    Braincave Software Pvt.Ltd.
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
{
  /* <!-- end main content--> */
}

//     <!-- END layout-wrapper -->

//     <!-- JAVASCRIPT -->
//     <script src="assets/libs/jquery/jquery.min.js"></script>
//     <script src="assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
//     <script src="assets/libs/smart-wizaed/smart-wizaed.js"></script>
//     <script src="assets/libs/metismenu/metisMenu.min.js"></script>
//     <script src="assets/libs/simplebar/simplebar.min.js"></script>
//     <script src="assets/libs/node-waves/waves.min.js"></script>
//     <script src="assets/libs/select2/js/select2.min.js"></script>

//     <!-- Required datatable js -->
//     <script src="assets/libs/datatables.net/js/jquery.dataTables.min.js"></script>
//     <script src="assets/libs/datatables.net-bs4/js/dataTables.bootstrap4.min.js"></script>
//     <!-- Buttons examples -->
//     <script src="assets/libs/datatables.net-buttons/js/dataTables.buttons.min.js"></script>
//     <script src="assets/libs/datatables.net-buttons-bs4/js/buttons.bootstrap4.min.js"></script>
//     <script src="assets/libs/jszip/jszip.min.js"></script>
//     <script src="assets/libs/pdfmake/build/pdfmake.min.js"></script>
//     <script src="assets/libs/pdfmake/build/vfs_fonts.js"></script>
//     <script src="assets/libs/datatables.net-buttons/js/buttons.html5.min.js"></script>
//     <script src="assets/libs/datatables.net-buttons/js/buttons.print.min.js"></script>
//     <script src="assets/libs/datatables.net-buttons/js/buttons.colVis.min.js"></script>

//     <!-- Responsive examples -->
//     <script src="assets/libs/datatables.net-responsive/js/dataTables.responsive.min.js"></script>
//     <script src="assets/libs/datatables.net-responsive-bs4/js/responsive.bootstrap4.min.js"></script>

//     <!-- Datatable init js -->
//     <script src="assets/js/pages/datatables.init.js"></script>

//     <script src="assets/js/app.js"></script>
//     <!-- form advanced init -->

//     <script>
//     $('#smartwizard-edit').smartWizard({
//       transition: {
//         animation: 'slideHorizontal', // Effect on navigation, none|fade|slideHorizontal|slideVertical|slideSwing|css(Animation CSS className also need to specify)
//       }
//     });

//     </script>

// </body>

// </html> */}
