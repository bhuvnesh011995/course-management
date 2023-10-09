// <!doctype html>
// <html lang="en">

import { MenuBar } from "../common-components/MenuBar";
import { CommonNavbar } from "../common-components/Navbar";

// <head>

//     <meta charset="utf-8" />
//     <title>Employee Management | Tonga</title>
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
export const Employee = () => {
  return (
    <div id="layout-wrapper">
      <CommonNavbar />
      {/* ========== Left Sidebar Start ========== */}
      <MenuBar />
      {/* Left Sidebar End */}
      {/* ============================================================== */}
      {/* Start right Content here */}
      {/* ============================================================== */}
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            {/* start page title */}
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0 font-size-18">Employee Management</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="index.html">Dashboard</a>
                      </li>
                      <li className="breadcrumb-item active">
                        Employee Management
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
                        data-bs-target="#addEmployeeModal"
                      >
                        <i className="bx bx-plus me-1 fw-semibold align-middle" />
                        Add New Employee
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
                    <div className="card-title">Employee List </div>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table
                        id="datatable-buttons"
                        className="table table-bordered dt-responsive nowrap w-100"
                      >
                        <thead>
                          <tr>
                            <th>Employee ID</th>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Department</th>
                            <th>Course Assigned</th>
                            <th>Join Date</th>
                            <th>Status</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Jane Smith</td>
                            <td>Instructor</td>
                            <td>jsmith@example.com</td>
                            <td>(555) 123-4567</td>
                            <td>Computer Science</td>
                            <td>Introduction to Programming</td>
                            <td>2023-01-15</td>
                            <td>
                              {" "}
                              <span className="badge badge-soft-success">
                                Active
                              </span>
                            </td>
                            <td>
                              <a
                                aria-label="anchor"
                                href="javascript:void(0);"
                                className="btn btn-icon btn-sm btn-warning rounded-pill"
                                data-bs-toggle="modal"
                                data-bs-target="#viewEmployeeModal"
                              >
                                <i className="mdi mdi-eye" />
                              </a>
                              <a
                                aria-label="anchor"
                                href="javascript:void(0);"
                                className="btn btn-icon btn-sm btn-primary rounded-pill"
                                data-bs-toggle="modal"
                                data-bs-target="#editEmployeeModal"
                              >
                                <i className="mdi mdi-pencil" />
                              </a>
                              <a
                                aria-label="anchor"
                                href="javascript:void(0);"
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
        {/* Add Employee Modal */}
        <div
          className="modal fade"
          id="addEmployeeModal"
          tabIndex={-1}
          aria-labelledby="addEmployeeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addEmployeeModalLabel">
                  Add Employee
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
                    <label htmlFor="employeeID" className="form-label">
                      Employee ID
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="employeeID"
                      placeholder="Enter employee ID"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="employeeFirstName" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="employeeFirstName"
                      placeholder="Enter first name"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="employeeLastName" className="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="employeeLastName"
                      placeholder="Enter last name"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="employeeEmail" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="employeeEmail"
                      placeholder="Enter employee email"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="employeePhone" className="form-label">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="employeePhone"
                      placeholder="Enter employee phone"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="employeePosition" className="form-label">
                      Position
                    </label>
                    <select
                      className="form-control"
                      id="employeePosition"
                      required
                    >
                      <option value>Select position</option>
                      <option value="Manager">Manager</option>
                      <option value="Supervisor">Supervisor</option>
                      <option value="Associate">Associate</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="employeeDepartment" className="form-label">
                      Department
                    </label>
                    <select
                      className="form-control"
                      id="employeeDepartment"
                      required
                    >
                      <option value>Select department</option>
                      <option value="HR">HR</option>
                      <option value="Finance">Finance</option>
                      <option value="IT">IT</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="employeeJoinDate" className="form-label">
                      Join Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="employeeJoinDate"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="employeeSalary" className="form-label">
                      Salary
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="employeeSalary"
                      placeholder="Enter employee salary"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="employeeGender" className="form-label">
                      Gender
                    </label>
                    <select
                      className="form-control"
                      id="employeeGender"
                      required
                    >
                      <option value>Select gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="employeeRole" className="form-label">
                      Role
                    </label>
                    <select className="form-control" id="employeeRole" required>
                      <option value>Select role</option>
                      <option value="Admin">Admin</option>
                      <option value="Manager">Manager</option>
                      <option value="Employee">Employee</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="employeeStatus" className="form-label">
                      Status
                    </label>
                    <select
                      className="form-control"
                      id="employeeStatus"
                      required
                    >
                      <option value>Select status</option>
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>
                  <div className="col-md-12 mb-3">
                    <label htmlFor="employeeAddress" className="form-label">
                      Address
                    </label>
                    <textarea
                      className="form-control"
                      id="employeeAddress"
                      rows={3}
                      placeholder="Enter employee address"
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
                  Add Employee
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* View Employee Modal */}
        <div
          className="modal fade"
          id="viewEmployeeModal"
          tabIndex={-1}
          aria-labelledby="viewEmployeeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="viewEmployeeModalLabel">
                  View Employee Details
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
                    <label htmlFor="viewEmployeeID" className="form-label">
                      Employee ID
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="viewEmployeeID"
                      defaultValue={123}
                      readOnly
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label
                      htmlFor="viewEmployeeFirstName"
                      className="form-label"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="viewEmployeeFirstName"
                      defaultValue="John"
                      readOnly
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label
                      htmlFor="viewEmployeeLastName"
                      className="form-label"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="viewEmployeeLastName"
                      defaultValue="Doe"
                      readOnly
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="viewEmployeeEmail" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="viewEmployeeEmail"
                      defaultValue="johndoe@example.com"
                      readOnly
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="viewEmployeePhone" className="form-label">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="viewEmployeePhone"
                      defaultValue="555-123-4567"
                      readOnly
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label
                      htmlFor="viewEmployeePosition"
                      className="form-label"
                    >
                      Position
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="viewEmployeePosition"
                      defaultValue="Manager"
                      readOnly
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label
                      htmlFor="viewEmployeeDepartment"
                      className="form-label"
                    >
                      Department
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="viewEmployeeDepartment"
                      defaultValue="HR"
                      readOnly
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label
                      htmlFor="viewEmployeeJoinDate"
                      className="form-label"
                    >
                      Join Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="viewEmployeeJoinDate"
                      defaultValue="2022-01-15"
                      readOnly
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="viewEmployeeSalary" className="form-label">
                      Salary
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="viewEmployeeSalary"
                      defaultValue={60000}
                      readOnly
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="viewEmployeeGender" className="form-label">
                      Gender
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="viewEmployeeGender"
                      defaultValue="Male"
                      readOnly
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="viewEmployeeRole" className="form-label">
                      Role
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="viewEmployeeRole"
                      defaultValue="Admin"
                      readOnly
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="viewEmployeeStatus" className="form-label">
                      Status
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="viewEmployeeStatus"
                      defaultValue="Active"
                      readOnly
                    />
                  </div>
                  <div className="col-md-12 mb-3">
                    <label htmlFor="viewEmployeeAddress" className="form-label">
                      Address
                    </label>
                    <textarea
                      className="form-control"
                      id="viewEmployeeAddress"
                      rows={3}
                      readOnly
                      defaultValue={"123 Main St, City, Country"}
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
        <div
          className="modal fade"
          id="editEmployeeModal"
          tabIndex={-1}
          aria-labelledby="editEmployeeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="editEmployeeModalLabel">
                  Edit Employee
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
                    <label htmlFor="employeeID" className="form-label">
                      Employee ID
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="employeeID"
                      defaultValue={123}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="employeeFirstName" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="employeeFirstName"
                      defaultValue="John"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="employeeLastName" className="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="employeeLastName"
                      defaultValue="Doe"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="employeeEmail" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="employeeEmail"
                      defaultValue="johndoe@example.com"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="employeePhone" className="form-label">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="employeePhone"
                      defaultValue="555-123-4567"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="employeePosition" className="form-label">
                      Position
                    </label>
                    <select className="form-control" id="employeePosition">
                      <option value="Manager">Manager</option>
                      <option value="Supervisor">Supervisor</option>
                      <option value="Associate">Associate</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="employeeDepartment" className="form-label">
                      Department
                    </label>
                    <select className="form-control" id="employeeDepartment">
                      <option value="HR">HR</option>
                      <option value="Finance">Finance</option>
                      <option value="IT">IT</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="employeeJoinDate" className="form-label">
                      Join Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="employeeJoinDate"
                      defaultValue="2022-01-15"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="employeeSalary" className="form-label">
                      Salary
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="employeeSalary"
                      defaultValue={60000}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="employeeGender" className="form-label">
                      Gender
                    </label>
                    <select className="form-control" id="employeeGender">
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="employeeRole" className="form-label">
                      Role
                    </label>
                    <select className="form-control" id="employeeRole">
                      <option value="Admin">Admin</option>
                      <option value="Manager">Manager</option>
                      <option value="Employee">Employee</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="employeeStatus" className="form-label">
                      Status
                    </label>
                    <select className="form-control" id="employeeStatus">
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>
                  <div className="col-md-12 mb-3">
                    <label htmlFor="employeeAddress" className="form-label">
                      Address
                    </label>
                    <textarea
                      className="form-control"
                      id="employeeAddress"
                      rows={3}
                      defaultValue={"123 Main St, City, Country"}
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

                dropdownParent: $("#addEmployeeModal")

            });

        });

    </script>
</body>

</html> */
}
