// <!doctype html>
// <html lang="en">

import { MenuBar } from "../common-components/MenuBar";
import { CommonNavbar } from "../common-components/Navbar";

// <head>

//     <meta charset="utf-8" />
//     <title>Profile Management | Tonga</title>
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
//     <style>
//         .select2-container {
//             width: 100% !important;
//         }
//     </style>

// </head>

// <body data-sidebar="dark">

//     <!-- Start layout-wrapper -->
export const Profile = () => {
  return (
    <div id="layout-wrapper">
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            {/* start page title */}
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0 font-size-18">Profile Management</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="index.html">Dashboard</a>
                      </li>
                      <li className="breadcrumb-item active">
                        Profile Management
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            {/* end page title */}
            <div className="row">
              <div className="col-xl-12">
                <div className="card">
                  <div className="card-body p-3">
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                      <div className="row w-50">
                        <div className="col-xl-5">
                          <select className="form-select">
                            <option value="CA">Newest</option>
                            <option value="NV">Oldest</option>
                            <option value="OR">Recent</option>
                          </select>
                        </div>
                        <div className="col-xl-7">
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
                      <button
                        className="btn btn-primary me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#addTrainerModal"
                      >
                        <i className="bx bx-plus me-1 fw-semibold align-middle" />
                        Add New Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-4">
              <div className="col-md-12">
                {/* Role Table */}
                <div className="card ">
                  <div className="card-header justify-content-between">
                    <div className="card-title">Profile List </div>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table
                        id="datatable-buttons"
                        className="table table-bordered dt-responsive nowrap w-100"
                      >
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Date of Birth</th>
                            <th>Email</th>
                            <th>Contact Number</th>
                            <th>Gender</th>
                            <th>Specialization</th>
                            <th>Description</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td
                              data-bs-toggle="modal"
                              data-bs-target="#viewTrainerModal"
                              style={{ cursor: "pointer" }}
                            >
                              John Doe
                            </td>
                            <td>1 Jan, 1990</td>
                            <td>john@example.com</td>
                            <td>123-456-7890</td>
                            <td>Male</td>
                            <td>Web Development</td>
                            <td>This is a trainer's description.</td>
                            <td>
                              <a
                                aria-label="anchor"
                                className="btn btn-icon btn-sm btn-primary rounded-pill"
                                data-bs-toggle="modal"
                                data-bs-target="#editTrainerModal"
                              >
                                <i className="mdi mdi-pencil" />
                              </a>
                              <a
                                aria-label="anchor"
                                className="btn btn-icon btn-sm btn-danger rounded-pill"
                              >
                                <i className="mdi mdi-trash-can" />
                              </a>
                            </td>
                          </tr>
                          {/* Add more rows as needed */}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/*/ Role Table */}
              </div>
            </div>
          </div>{" "}
          {/* container-fluid */}
        </div>
        {/* End Page-content */}
        <div
          className="modal fade"
          id="addTrainerModal"
          tabIndex={-1}
          aria-labelledby="addTrainerModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addTrainerModalLabel">
                  Add Trainer
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <form className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Photo</label>
                    <input
                      type="file"
                      className="form-control"
                      id="trainerPhoto"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="trainerFirstName"
                      placeholder="Enter first name"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="trainerLastName"
                      placeholder="Enter last name"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="trainerEmail"
                      placeholder="Enter email"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Contact Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="trainerPhone"
                      placeholder="Enter contact number"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Gender</label>
                    <select className="form-select" id="trainerGender">
                      <option value={0}>Male</option>
                      <option value={1}>Female</option>
                      <option value={2}>Other</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Date of Birth</label>
                    <input
                      type="date"
                      className="form-control"
                      id="trainerDOB"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Specialization</label>
                    <select
                      className="form-control select2"
                      id="trainerSpecialization"
                      required
                    >
                      <option value="Web Development">Web Development</option>
                      <option value="Data Science">Data Science</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      {/* Add more specialization options here */}
                    </select>
                  </div>
                  <div className="col-md-12 mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                      className="form-control"
                      id="trainerDescription"
                      rows={4}
                      placeholder="Enter trainer description"
                      required
                      defaultValue={""}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Add Trainer
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* View Trainer Modal */}
        <div
          className="modal fade"
          id="viewTrainerModal"
          tabIndex={-1}
          aria-labelledby="viewTrainerModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="viewTrainerModalLabel">
                  View Trainer
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <form className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Photo</label>
                    <input
                      type="file"
                      className="form-control"
                      id="viewTrainerPhoto"
                      disabled
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="viewTrainerFirstName"
                      defaultValue="John"
                      disabled
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="viewTrainerLastName"
                      defaultValue="Doe"
                      disabled
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Date of Birth</label>
                    <input
                      type="date"
                      className="form-control"
                      id="viewTrainerDOB"
                      defaultValue="1990-01-01"
                      disabled
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="viewTrainerEmail"
                      defaultValue="john@example.com"
                      disabled
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Contact Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="viewTrainerPhone"
                      defaultValue="123-456-7890"
                      disabled
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Gender</label>
                    <select
                      className="form-select"
                      id="viewTrainerGender"
                      disabled
                    >
                      <option value={0}>Male</option>
                      <option value={1}>Female</option>
                      <option value={2}>Other</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Specialization</label>
                    <input
                      type="text"
                      className="form-control"
                      id="viewTrainerSpecialization"
                      defaultValue="Web Development"
                      disabled
                    />
                  </div>
                  <div className="col-md-12 mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                      className="form-control"
                      id="viewTrainerDescription"
                      rows={4}
                      disabled
                      defaultValue={"This is a trainer's description."}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Edit Trainer Modal */}
        {/* Edit Trainer Modal */}
        {/* Edit Trainer Modal */}
        <div
          className="modal fade"
          id="editTrainerModal"
          tabIndex={-1}
          aria-labelledby="editTrainerModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="editTrainerModalLabel">
                  Edit Trainer
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <form className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Photo</label>
                    <input
                      type="file"
                      className="form-control"
                      id="editTrainerPhoto"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="editTrainerFirstName"
                      defaultValue="John"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="editTrainerLastName"
                      defaultValue="Doe"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Date of Birth</label>
                    <input
                      type="date"
                      className="form-control"
                      id="editTrainerDOB"
                      defaultValue="1990-01-01"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="editTrainerEmail"
                      defaultValue="john@example.com"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Contact Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="editTrainerPhone"
                      defaultValue="123-456-7890"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Gender</label>
                    <select
                      className="form-select"
                      id="editTrainerGender"
                      required
                    >
                      <option value={0}>Male</option>
                      <option value={1}>Female</option>
                      <option value={2}>Other</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Specialization</label>
                    <select
                      className="form-control select2"
                      id="editTrainerSpecialization"
                      required
                    >
                      <option value="Web Development">Web Development</option>
                      <option value="Data Science">Data Science</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      {/* Add more specialization options here */}
                    </select>
                  </div>
                  <div className="col-md-12 mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                      className="form-control"
                      id="editTrainerDescription"
                      rows={4}
                      required
                      defaultValue={"This is a trainer's description."}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="button" className="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6">© Tonga.</div>
              <div className="col-sm-6">
                <div className="text-sm-end d-none d-sm-block">
                  Design &amp; Develop by{" "}
                  <a href="https://braincavesoft.com" target="_blank">
                    Braincave Software Pvt.Ltd.
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      {/* end main content*/}
    </div>
  );
};
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

                dropdownParent: $("#addTrainerModal")

            });

        });

    </script>
</body>

</html> */
}
