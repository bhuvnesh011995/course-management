// <!doctype html>
// <html lang="en">

import { MenuBar } from "../common-components/MenuBar";
import { CommonNavbar } from "../common-components/Navbar";

// <head>

//     <meta charset="utf-8" />
//     <title>Task Management | Tonga</title>
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
//     <link href="assets/libs/bootstrap-datepicker/css/bootstrap-datepicker.min.css" rel="stylesheet" type="text/css">

//     <link href="assets/libs/bootstrap-timepicker/css/bootstrap-timepicker.min.css" rel="stylesheet" type="text/css">

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
export const Task = () => {
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
                  <h4 className="mb-sm-0 font-size-18">Task Management</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="index.html">Dashboard</a>
                      </li>
                      <li className="breadcrumb-item active">
                        Task Management
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
                        data-bs-target="#addTaskModal"
                      >
                        <i className="bx bx-plus me-1 fw-semibold align-middle" />
                        Add New Task
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
                    <div className="card-title">Task List </div>
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
                            <th>Task Name</th>
                            <th>Assigned To</th>
                            <th>Assigned By</th>
                            <th>Course</th>
                            <th>Class</th>
                            <th>Status</th>
                            <th>Priority</th>
                            <th>Created At</th>
                            <th>Due Date</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Task 1</td>
                            <td>Customer A</td>
                            <td>Trainer X</td>
                            <td>Course X</td>
                            <td>Class 101</td>
                            <td>
                              <span className="badge badge-soft-danger">
                                Pending
                              </span>
                            </td>
                            <td>
                              <span className="badge badge-soft-danger">
                                High
                              </span>
                            </td>
                            <td>2023-09-5</td>
                            <td>2023-09-10</td>
                            <td>
                              <a
                                aria-label="anchor"
                                href="javascript:void(0);"
                                className="btn btn-icon btn-sm btn-warning rounded-pill"
                                data-bs-toggle="modal"
                                data-bs-target="#viewTaskModal"
                              >
                                <i className="mdi mdi-eye" />
                              </a>
                              <a
                                aria-label="anchor"
                                href="javascript:void(0);"
                                className="btn btn-icon btn-sm btn-primary rounded-pill"
                                data-bs-toggle="modal"
                                data-bs-target="#editTaskModal"
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
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/*/ Role Table */}
              </div>
            </div>
            {/*/ Role cards */}
          </div>{" "}
          {/* container-fluid */}
        </div>
        {/* End Page-content */}
        {/* Add Task Modal */}
        {/* Add Task Modal */}
        <div
          className="modal fade"
          id="addTaskModal"
          tabIndex={-1}
          aria-labelledby="addTaskModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addTaskModalLabel">
                  Add New Task
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <form id="addTaskForm">
                  <div className="mb-3">
                    <label htmlFor="taskName" className="form-label">
                      Task Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="taskName"
                      placeholder="Enter task name"
                      required
                    />
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="assignedTo" className="form-label">
                        Assigned To
                      </label>
                      <select className="form-select" id="assignedTo" required>
                        <option value disabled>
                          Select assigned to
                        </option>
                        <option value="Customer A">Customer A</option>
                        <option value="Customer B">Customer B</option>
                        {/* Add more options here */}
                      </select>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="assignedBy" className="form-label">
                        Assigned By
                      </label>
                      <select className="form-select" id="assignedBy" required>
                        <option value disabled>
                          Select assigned by
                        </option>
                        <option value="Trainer X">Trainer X</option>
                        <option value="Trainer Y">Trainer Y</option>
                        {/* Add more options here */}
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="course" className="form-label">
                        Course
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="course"
                        placeholder="Enter course"
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="class" className="form-label">
                        Class
                      </label>
                      <select className="form-select" id="class" required>
                        <option value disabled>
                          Select class
                        </option>
                        <option value="Class 101">Class 101</option>
                        <option value="Class 102">Class 102</option>
                        {/* Add more options here */}
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="status" className="form-label">
                        Status
                      </label>
                      <select className="form-select" id="status-task" required>
                        <option value disabled>
                          Select status
                        </option>
                        <option value="Pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                        {/* Add more options here */}
                      </select>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="priority" className="form-label">
                        Priority
                      </label>
                      <select className="form-select" id="priority" required>
                        <option value disabled>
                          Select priority
                        </option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                        {/* Add more options here */}
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="createdAt" className="form-label">
                        Created At
                      </label>
                      <input
                        type="datetime-local"
                        className="form-control"
                        id="createdAt"
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="dueDate" className="form-label">
                        Due Date
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="dueDate"
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="attachments" className="form-label">
                        Attachments
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        id="attachments"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="estimatedTime" className="form-label">
                        Estimated Time
                      </label>
                      <select
                        className="form-select"
                        id="estimatedTime"
                        required
                      >
                        <option value disabled>
                          Select estimated time
                        </option>
                        <option value={1}>1 hour</option>
                        <option value={3}>3 hours</option>
                        <option value={6}>6 hours</option>
                        <option value={9}>9 hours</option>
                        <option value={9}>12 hours</option>
                        <option value={9}>1 Day</option>
                        <option value={9}>2 Day</option>
                      </select>
                    </div>
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
                <button
                  type="button"
                  className="btn btn-primary"
                  id="addTaskSubmit"
                >
                  Add Task
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Edit Task Modal */}
        <div
          className="modal fade"
          id="editTaskModal"
          tabIndex={-1}
          aria-labelledby="editTaskModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="editTaskModalLabel">
                  Edit Task Details
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <form id="editTaskForm">
                  <div className="mb-3">
                    <label htmlFor="editTaskName" className="form-label">
                      Task Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="editTaskName"
                    />
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="editAssignedTo" className="form-label">
                        Assigned To
                      </label>
                      <select className="form-select" id="editAssignedTo">
                        <option value="Customer A">Customer A</option>
                        <option value="Customer B">Customer B</option>
                        {/* Add more options here */}
                      </select>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="editAssignedBy" className="form-label">
                        Assigned By
                      </label>
                      <select className="form-select" id="editAssignedBy">
                        <option value="Trainer X">Trainer X</option>
                        <option value="Trainer Y">Trainer Y</option>
                        {/* Add more options here */}
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="editCourse" className="form-label">
                        Course
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="editCourse"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="editClass" className="form-label">
                        Class
                      </label>
                      <select className="form-select" id="editClass">
                        <option value="Class 101">Class 101</option>
                        <option value="Class 102">Class 102</option>
                        {/* Add more options here */}
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="editStatus" className="form-label">
                        Status
                      </label>
                      <select className="form-select" id="editStatus">
                        <option value="Pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                        {/* Add more options here */}
                      </select>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="editPriority" className="form-label">
                        Priority
                      </label>
                      <select className="form-select" id="editPriority">
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                        {/* Add more options here */}
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="editCreatedAt" className="form-label">
                        Created At
                      </label>
                      <input
                        type="datetime-local"
                        className="form-control"
                        id="editCreatedAt"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="editDueDate" className="form-label">
                        Due Date
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="editDueDate"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="editAttachment" className="form-label">
                        New Attachment
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        id="editAttachment"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="editEstimatedTime" className="form-label">
                        Estimated Time
                      </label>
                      <select className="form-select" id="editEstimatedTime">
                        <option value={1}>1 hour</option>
                        <option value={3}>3 hours</option>
                        <option value={6}>6 hours</option>
                        {/* Add more options here */}
                      </select>
                    </div>
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
                <button
                  type="button"
                  className="btn btn-primary"
                  id="editTaskSubmit"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* View Task Modal */}
        <div
          className="modal fade"
          id="viewTaskModal"
          tabIndex={-1}
          aria-labelledby="viewTaskModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="viewTaskModalLabel">
                  View Task Details
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="viewTaskName" className="form-label">
                    Task Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="viewTaskName"
                    defaultValue="Task 1"
                    disabled
                  />
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="viewAssignedTo" className="form-label">
                      Assigned To
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="viewAssignedTo"
                      defaultValue="Customer A"
                      disabled
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="viewAssignedBy" className="form-label">
                      Assigned By
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="viewAssignedBy"
                      defaultValue="Trainer X"
                      disabled
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="viewCourse" className="form-label">
                      Course
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="viewCourse"
                      defaultValue="Course X"
                      disabled
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="viewClass" className="form-label">
                      Class
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="viewClass"
                      defaultValue="Class 101"
                      disabled
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="viewStatus" className="form-label">
                      Status
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="viewStatus"
                      defaultValue="Pending"
                      disabled
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="viewPriority" className="form-label">
                      Priority
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="viewPriority"
                      defaultValue="High"
                      disabled
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="viewCreatedAt" className="form-label">
                      Created At
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="viewCreatedAt"
                      defaultValue="2023-09-05"
                      disabled
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="viewDueDate" className="form-label">
                      Due Date
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="viewDueDate"
                      defaultValue="2023-09-10"
                      disabled
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="viewDocument" className="form-label">
                      Document
                    </label>
                    <div id="viewDocument" className="form-control" disabled>
                      Document.pdf
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="viewEstimatedTime" className="form-label">
                      Estimated Time
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="viewEstimatedTime"
                      defaultValue="3 hours"
                      disabled
                    />
                  </div>
                </div>
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
    <script src="assets/libs/bootstrap-datepicker/js/bootstrap-datepicker.min.js"></script>
    <script src="assets/libs/bootstrap-timepicker/js/bootstrap-timepicker.min.js"></script>

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

                dropdownParent: $("#addClassModal")

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

</body>

</html> */
}
