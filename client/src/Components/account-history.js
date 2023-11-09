import "../assets/css/app.min.css";

// <!doctype html>
// <html lang="en">

// <head>

//     <meta charset="utf-8" />
//     <title>Account History | Tonga</title>
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta content="#" name="description" />
//     <meta content="Themesbrand" name="author" />
//     <!-- App favicon -->
//     <link rel="shortcut icon" href="assets/images/favicon.ico">

//     <!-- DataTables -->
// <link href="assets/libs/datatables.net-bs4/css/dataTables.bootstrap4.min.css" rel="stylesheet" type="text/css" />
// <link href="assets/libs/datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css" rel="stylesheet"
//     type="text/css" />

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
//     <style>
//         .select2-container {
//             width: 100% !important;
//         }
//     </style>
// </head>

// <body data-sidebar="dark">

import React from "react";
import { CommonNavbar } from "../common-components/Navbar";

export const AccountHistory = () => {
  return (
    <div>
      {/* <header id="page-topbar">
        <div ClassName="navbar-header">
          <div ClassName="d-flex">
            <div ClassName="navbar-brand-box d-flex justify-content-center align-items-center">
              <a href="index.html" ClassName="logo logo-light">
                <span ClassName="logo-sm">
                  <img src="assets/images/logo-light.svg" alt="" height="22" />
                  <h1 ClassName="text-white">Tonga</h1>
                </span>
                <span ClassName="logo-lg">
                  <img src="assets/images/logo-light.png" alt="" height="19" />
                  <h1 ClassName="text-white">Tonga</h1>
                </span>
              </a>
            </div>

            <button
              type="button"
              ClassName="btn btn-sm px-3 font-size-16 header-item waves-effect"
              id="vertical-menu-btn"
            >
              <i ClassName="fa fa-fw fa-bars"></i>
            </button>

            <form ClassName="app-search d-none d-lg-block">
              <div ClassName="position-relative">
                <input
                  type="text"
                  ClassName="form-control"
                  placeholder="Search..."
                />
                <span ClassName="bx bx-search-alt"></span>
              </div>
            </form>
          </div>

          <div ClassName="d-flex">
            <div ClassName="dropdown d-inline-block d-lg-none ms-2">
              <button
                type="button"
                ClassName="btn header-item noti-icon waves-effect"
                id="page-header-search-dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i ClassName="mdi mdi-magnify"></i>
              </button>
              <div
                ClassName="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                aria-labelledby="page-header-search-dropdown"
              >
                <form ClassName="p-3">
                  <div ClassName="form-group m-0">
                    <div ClassName="input-group">
                      <input
                        type="text"
                        ClassName="form-control"
                        placeholder="Search ..."
                        aria-label="Recipient's username"
                      />
                      <div ClassName="input-group-append">
                        <button ClassName="btn btn-primary" type="submit">
                          <i ClassName="mdi mdi-magnify"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div ClassName="dropdown d-inline-block">
              <button
                type="button"
                ClassName="btn header-item waves-effect"
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
              <div ClassName="dropdown-menu dropdown-menu-end">
                <a
                  href="javascript:void(0);"
                  ClassName="dropdown-item notify-item language"
                  data-lang="en"
                >
                  <img
                    src="assets/images/flags/us.jpg"
                    alt="user-image"
                    ClassName="me-1"
                    height="12"
                  />{" "}
                  <span ClassName="align-middle">English</span>
                </a>
                <a
                  href="javascript:void(0);"
                  ClassName="dropdown-item notify-item language"
                  data-lang="sp"
                >
                  <img
                    src="assets/images/flags/spain.jpg"
                    alt="user-image"
                    ClassName="me-1"
                    height="12"
                  />
                  <span ClassName="align-middle">Spanish</span>
                </a>

                <a
                  href="javascript:void(0);"
                  ClassName="dropdown-item notify-item language"
                  data-lang="gr"
                >
                  <img
                    src="assets/images/flags/germany.jpg"
                    alt="user-image"
                    ClassName="me-1"
                    height="12"
                  />
                  <span ClassName="align-middle">German</span>
                </a>

                <a
                  href="javascript:void(0);"
                  ClassName="dropdown-item notify-item language"
                  data-lang="it"
                >
                  <img
                    src="assets/images/flags/italy.jpg"
                    alt="user-image"
                    ClassName="me-1"
                    height="12"
                  />
                  <span ClassName="align-middle">Italian</span>
                </a>

                <a
                  href="javascript:void(0);"
                  ClassName="dropdown-item notify-item language"
                  data-lang="ru"
                >
                  <img
                    src="assets/images/flags/russia.jpg"
                    alt="user-image"
                    ClassName="me-1"
                    height="12"
                  />
                  <span ClassName="align-middle">Russian</span>
                </a>
              </div>
            </div>

            <div ClassName="dropdown d-none d-lg-inline-block ms-1">
              <button
                type="button"
                ClassName="btn header-item noti-icon waves-effect"
                data-bs-toggle="fullscreen"
              >
                <i ClassName="bx bx-fullscreen"></i>
              </button>
            </div>

            <div ClassName="dropdown d-inline-block">
              <button
                type="button"
                ClassName="btn header-item noti-icon waves-effect"
                id="page-header-notifications-dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i ClassName="bx bx-bell bx-tada"></i>
                <span ClassName="badge bg-danger rounded-pill">3</span>
              </button>
              <div
                ClassName="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                aria-labelledby="page-header-notifications-dropdown"
              >
                <div ClassName="p-3">
                  <div ClassName="row align-items-center">
                    <div ClassName="col">
                      <h6 ClassName="m-0" key="t-notifications">
                        {" "}
                        Notifications{" "}
                      </h6>
                    </div>
                    <div ClassName="col-auto">
                      <a href="#!" ClassName="small" key="t-view-all">
                        {" "}
                        View All
                      </a>
                    </div>
                  </div>
                </div>
                <div data-simplebar style="max-height: 230px;">
                  <a
                    href="javascript: void(0);"
                    ClassName="text-reset notification-item"
                  >
                    <div ClassName="d-flex">
                      <div ClassName="avatar-xs me-3">
                        <span ClassName="avatar-title bg-primary rounded-circle font-size-16">
                          <i ClassName="bx bx-cart"></i>
                        </span>
                      </div>
                      <div ClassName="flex-grow-1">
                        <h6 ClassName="mb-1" key="t-your-order">
                          Your order is placed
                        </h6>
                        <div ClassName="font-size-12 text-muted">
                          <p ClassName="mb-1" key="t-grammer">
                            If several languages coalesce the grammar
                          </p>
                          <p ClassName="mb-0">
                            <i ClassName="mdi mdi-clock-outline"></i>{" "}
                            <span key="t-min-ago">3 min ago</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    href="javascript: void(0);"
                    ClassName="text-reset notification-item"
                  >
                    <div ClassName="d-flex">
                      <img
                        src="assets/images/users/avatar-3.jpg"
                        ClassName="me-3 rounded-circle avatar-xs"
                        alt="user-pic"
                      />
                      <div ClassName="flex-grow-1">
                        <h6 ClassName="mb-1">James Lemire</h6>
                        <div ClassName="font-size-12 text-muted">
                          <p ClassName="mb-1" key="t-simplified">
                            It will seem like simplified English.
                          </p>
                          <p ClassName="mb-0">
                            <i ClassName="mdi mdi-clock-outline"></i>{" "}
                            <span key="t-hours-ago">1 hours ago</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    href="javascript: void(0);"
                    ClassName="text-reset notification-item"
                  >
                    <div ClassName="d-flex">
                      <div ClassName="avatar-xs me-3">
                        <span ClassName="avatar-title bg-success rounded-circle font-size-16">
                          <i ClassName="bx bx-badge-check"></i>
                        </span>
                      </div>
                      <div ClassName="flex-grow-1">
                        <h6 ClassName="mb-1" key="t-shipped">
                          Your item is shipped
                        </h6>
                        <div ClassName="font-size-12 text-muted">
                          <p ClassName="mb-1" key="t-grammer">
                            If several languages coalesce the grammar
                          </p>
                          <p ClassName="mb-0">
                            <i ClassName="mdi mdi-clock-outline"></i>{" "}
                            <span key="t-min-ago">3 min ago</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>

                  <a
                    href="javascript: void(0);"
                    ClassName="text-reset notification-item"
                  >
                    <div ClassName="d-flex">
                      <img
                        src="assets/images/users/avatar-4.jpg"
                        ClassName="me-3 rounded-circle avatar-xs"
                        alt="user-pic"
                      />
                      <div ClassName="flex-grow-1">
                        <h6 ClassName="mb-1">Salena Layfield</h6>
                        <div ClassName="font-size-12 text-muted">
                          <p ClassName="mb-1" key="t-occidental">
                            As a skeptical Cambridge friend of mine occidental.
                          </p>
                          <p ClassName="mb-0">
                            <i ClassName="mdi mdi-clock-outline"></i>{" "}
                            <span key="t-hours-ago">1 hours ago</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div ClassName="p-2 border-top d-grid">
                  <a
                    ClassName="btn btn-sm btn-link font-size-14 text-center"
                    href="javascript:void(0)"
                  >
                    <i ClassName="mdi mdi-arrow-right-circle me-1"></i>{" "}
                    <span key="t-view-more">View More..</span>
                  </a>
                </div>
              </div>
            </div>

            <div ClassName="dropdown d-inline-block">
              <button
                type="button"
                ClassName="btn header-item waves-effect"
                id="page-header-user-dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  ClassName="rounded-circle header-profile-user"
                  src="assets/images/users/avatar-1.jpg"
                  alt="Header Avatar"
                />
                <span ClassName="d-none d-xl-inline-block ms-1" key="t-henry">
                  Henry
                </span>
                <i ClassName="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
              </button>
              <div ClassName="dropdown-menu dropdown-menu-end">
                <a ClassName="dropdown-item" href="#">
                  <i ClassName="bx bx-user font-size-16 align-middle me-1"></i>
                  <span key="t-profile">Profile</span>
                </a>
                <a ClassName="dropdown-item" href="#">
                  <i ClassName="bx bx-wallet font-size-16 align-middle me-1"></i>{" "}
                  <span key="t-my-wallet">My Wallet</span>
                </a>
                <a ClassName="dropdown-item d-block" href="#">
                  <span ClassName="badge bg-success float-end">11</span>
                  <i ClassName="bx bx-wrench font-size-16 align-middle me-1"></i>{" "}
                  <span key="t-settings">Settings</span>
                </a>
                <a ClassName="dropdown-item" href="#">
                  <i ClassName="bx bx-lock-open font-size-16 align-middle me-1"></i>{" "}
                  <span key="t-lock-screen">Lock screen</span>
                </a>
                <div ClassName="dropdown-divider"></div>
                <a ClassName="dropdown-item text-danger" href="#">
                  <i ClassName="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i>{" "}
                  <span key="t-logout">Logout</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header> */}
      <div ClassName="main-content">
        <div ClassName="page-content">
          <div ClassName="container-fluid">
            <div ClassName="row">
              <div ClassName="col-12">
                <div ClassName="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 ClassName="mb-sm-0 font-size-18">Account History</h4>

                  <div ClassName="page-title-right">
                    <ol ClassName="breadcrumb m-0">
                      <li ClassName="breadcrumb-item">
                        <a href="index.html">Dashboard</a>
                      </li>
                      <li ClassName="breadcrumb-item active">
                        Account History
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div ClassName="row">
              <div ClassName="col-xl-12">
                <div ClassName="card">
                  <div ClassName="card-body p-3">
                    <div ClassName="d-flex align-items-center justify-content-between flex-wrap gap-3">
                      <div ClassName="row w-100">
                        <div ClassName="col-xl-5">
                          <select ClassName="form-select">
                            <option value="CA">Newest</option>
                            <option value="NV">Oldest</option>
                            <option value="OR">Recent</option>
                          </select>
                        </div>

                        <div ClassName="col-xl-7">
                          <div ClassName="d-flex" role="search">
                            <input
                              ClassName="form-control me-2"
                              type="search"
                              placeholder="Search"
                              aria-label="Search"
                            />{" "}
                            <button ClassName="btn btn-light" type="submit">
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

            <div ClassName="row g-4">
              <div ClassName="col-md-12">
                <div ClassName="card ">
                  <div ClassName="card-header justify-content-between">
                    <div ClassName="card-title">Account History List </div>
                  </div>
                  <div ClassName="card-body">
                    <div ClassName="table-responsive">
                      <table
                        id="datatable-buttons"
                        ClassName="table table-bordered dt-responsive nowrap w-100"
                      >
                        <thead>
                          <tr>
                            <th>Enrollment ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Quotation History</th>
                            <th>Past Invoices</th>
                            <th>Activities Record</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>E102</td>
                            <td>John Doe</td>
                            <td>john@example.com</td>
                            <td>
                              <a
                                href="#"
                                ClassName="btn btn-outline-primary btn-sm"
                                data-bs-toggle="modal"
                                data-bs-target="#viewQuotationHistoryModal"
                              >
                                View Quotation History
                              </a>
                            </td>
                            <td>
                              <a
                                href="#"
                                ClassName="btn btn-outline-info btn-sm"
                                data-bs-toggle="modal"
                                data-bs-target="#viewPastInvoiceModal"
                              >
                                View Past Invoices
                              </a>
                            </td>
                            <td>
                              <a
                                href="#"
                                ClassName="btn btn-outline-secondary btn-sm"
                                data-bs-toggle="modal"
                                data-bs-target="#viewActivitiesModal"
                              >
                                View Activities
                              </a>
                            </td>
                            <td>
                              <a
                                aria-label="anchor"
                                href="javascript:void(0);"
                                ClassName="btn btn-icon btn-sm btn-danger rounded-pill"
                              >
                                <i ClassName="mdi mdi-trash-can"></i>
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          ClassName="modal fade"
          id="viewQuotationHistoryModal"
          tabindex="-1"
          aria-labelledby="viewQuotationHistoryModalLabel"
          aria-hidden="true"
        >
          <div ClassName="modal-dialog modal-lg">
            <div ClassName="modal-content">
              <div ClassName="modal-header">
                <h5 ClassName="modal-title" id="viewQuotationHistoryModalLabel">
                  Quotation History
                </h5>
                <button
                  type="button"
                  ClassName="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div ClassName="modal-body">
                <table
                  id="datatable-buttons"
                  ClassName="table table-bordered dt-responsive nowrap w-100"
                >
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Course</th>
                      <th>Amount</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>2023-08-01</td>
                      <td>Course-1</td>
                      <td>$1500</td>
                      <td>
                        <a
                          aria-label="anchor"
                          href="javascript:void(0);"
                          ClassName="btn btn-icon btn-sm btn-warning me-1 rounded-pill"
                        >
                          <i ClassName="mdi mdi-eye"></i>
                        </a>
                        <a
                          aria-label="anchor"
                          href="javascript:void(0);"
                          ClassName="btn btn-icon btn-sm btn-primary rounded-pill"
                        >
                          <i ClassName="mdi mdi-download"></i>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div ClassName="modal-footer">
                <button
                  type="button"
                  ClassName="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          ClassName="modal fade"
          id="viewPastInvoiceModal"
          tabindex="-1"
          aria-labelledby="viewPastInvoiceModalLabel"
          aria-hidden="true"
        >
          <div ClassName="modal-dialog modal-lg">
            <div ClassName="modal-content">
              <div ClassName="modal-header">
                <h5 ClassName="modal-title" id="viewPastInvoiceModalLabel">
                  View Past Invoice
                </h5>
                <button
                  type="button"
                  ClassName="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div ClassName="modal-body">
                <table
                  id="datatable-buttons"
                  ClassName="table table-bordered dt-responsive nowrap w-100"
                >
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Course</th>
                      <th>Amount</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>2023-08-15</td>
                      <td>Course-1</td>
                      <td>$1500</td>
                      <td>
                        <a
                          aria-label="anchor"
                          href="javascript:void(0);"
                          ClassName="btn btn-icon btn-sm btn-warning me-1 rounded-pill"
                        >
                          <i ClassName="mdi mdi-eye"></i>
                        </a>
                        <a
                          aria-label="anchor"
                          href="javascript:void(0);"
                          ClassName="btn btn-icon btn-sm btn-primary rounded-pill"
                        />
                        <i ClassName="mdi mdi-download"></i>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div ClassName="modal-footer">
                <button
                  type="button"
                  ClassName="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          ClassName="modal fade"
          id="viewActivitiesModal"
          tabindex="-1"
          aria-labelledby="viewActivitiesModalLabel"
          aria-hidden="true"
        >
          <div ClassName="modal-dialog modal-lg">
            <div ClassName="modal-content">
              <div ClassName="modal-header">
                <h5 ClassName="modal-title" id="viewActivitiesModalLabel">
                  Activities Record
                </h5>
                <button
                  type="button"
                  ClassName="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div ClassName="modal-body">
                <table
                  id="datatable-buttons"
                  ClassName="table table-bordered dt-responsive nowrap w-100"
                >
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Activity Type</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>2023-08-20</td>
                      <td>Logged In</td>
                      <td>User logged in to the system.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div ClassName="modal-footer">
                <button
                  type="button"
                  ClassName="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        <footer ClassName="footer">
          <div ClassName="container-fluid">
            <div ClassName="row">
              <div ClassName="col-sm-6">
                <script>document.write(new Date().getFullYear())</script> ©
                Tonga.
              </div>
              <div ClassName="col-sm-6">
                <div ClassName="text-sm-end d-none d-sm-block">
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
  /* Start layout-wrapper  */
}
{
  /* <!-- END layout-wrapper -->



    <!-- JAVASCRIPT -->
    <script src="assets/libs/jquery/jquery.min.js"></script>
    <script src="assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="assets/libs/metismenu/metisMenu.min.js"></script>
    <script src="assets/libs/simplebar/simplebar.min.js"></script>
    <script src="assets/libs/node-waves/waves.min.js"></script>
    <script src="assets/libs/select2/js/select2.min.js"></script>

    <!-- Required datatable js -->
    <script src="assets/libs/datatables.net/js/jquery.dataTables.min.js"></script>
    <script src="assets/libs/datatables.net-bs4/js/dataTables.bootstrap4.min.js"></script>
    <!-- Buttons examples -->
    <script src="assets/libs/datatables.net-buttons/js/dataTables.buttons.min.js"></script>
    <script src="assets/libs/datatables.net-buttons-bs4/js/buttons.bootstrap4.min.js"></script>
    <script src="assets/libs/jszip/jszip.min.js"></script>
    <script src="assets/libs/pdfmake/build/pdfmake.min.js"></script>
    <script src="assets/libs/pdfmake/build/vfs_fonts.js"></script>
    <script src="assets/libs/datatables.net-buttons/js/buttons.html5.min.js"></script>
    <script src="assets/libs/datatables.net-buttons/js/buttons.print.min.js"></script>
    <script src="assets/libs/datatables.net-buttons/js/buttons.colVis.min.js"></script>

    <!-- Responsive examples -->
    <script src="assets/libs/datatables.net-responsive/js/dataTables.responsive.min.js"></script>
    <script src="assets/libs/datatables.net-responsive-bs4/js/responsive.bootstrap4.min.js"></script>

    <!-- Datatable init js -->
    <script src="assets/js/pages/datatables.init.js"></script>


    <script src="assets/js/app.js"></script>
    <!-- form advanced init -->
    <script src="assets/js/pages/form-advanced.init.js"></script>
    <script>

        $(document).ready(function () {

            $(".select2").select2({

                dropdownParent: $("#addUserModal")

            });

        });

    </script>
    <script>

            $(document).ready(function () {
    
                $(".select2").select2({
    
                    dropdownParent: $("#editUserModal")
    
                });
    
            });
    
    </script>
<script>
    $(document).ready(function() {
  $('table#datatable-buttons').DataTable();
} );
</script>
</body>

</html> */
}
