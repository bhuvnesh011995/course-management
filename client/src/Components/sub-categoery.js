// <!doctype html>
// <html lang="en">

import { MenuBar } from "../common-components/MenuBar";
import { CommonNavbar } from "../common-components/Navbar";

// <head>

//     <meta charset="utf-8" />
//     <title>Course Sub Categoery Management | Tonga</title>
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
export const SubCategory = () => {
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
                  <h4 className="mb-sm-0 font-size-18">
                    Course Sub categoery Management
                  </h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="index.html">Dashboard</a>
                      </li>
                      <li className="breadcrumb-item active">
                        Course Sub Categoery Management
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
                        data-bs-target="#addCategoryModal"
                      >
                        <i className="bx bx-plus me-1 fw-semibold align-middle" />
                        Add New SubCategoery
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
                    <div className="card-title">Sub Categoery List </div>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table
                        id="datatable-buttons"
                        className="table table-bordered dt-responsive nowrap w-100"
                      >
                        <thead>
                          <tr>
                            <th>Subcategory ID</th>
                            <th>Subcategory Name</th>
                            <th>Category</th>
                            <th>Course Name</th>
                            <th>Description</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>101</td>
                            <td>Construction</td>
                            <td>Aluminium Formwork (Enhanced)</td>
                            <td>Course-1</td>
                            <td>Lorem ipsum dolor sit amet.</td>
                            <td>
                              <a
                                aria-label="anchor"
                                href="javascript:void(0);"
                                className="btn btn-icon btn-sm btn-warning rounded-pill"
                                data-bs-toggle="modal"
                                data-bs-target="#viewCourseModal"
                              >
                                <i className="mdi mdi-eye" />
                              </a>
                              <a
                                aria-label="anchor"
                                href="javascript:void(0);"
                                className="btn btn-icon btn-sm btn-primary rounded-pill"
                                data-bs-toggle="modal"
                                data-bs-target="#editCourseModal"
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
        {/* Add Course Modal */}
        <div
          className="modal fade"
          id="addCategoryModal"
          tabIndex={-1}
          aria-labelledby="addCategoryModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addCourseModalLabel">
                  Add New SubCategoery
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <form id="addCategoryForm">
                  <div className="mb-3">
                    <label htmlFor="categoryName" className="form-label">
                      Subcategory Name:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="categoryName"
                      placeholder="Enter Subcategory name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="categoryName" className="form-label">
                      Category Name:
                    </label>
                    <select id="courseName" className="form-select" required>
                      <option value selected>
                        Select a Course
                      </option>
                      <option value="Course 1">Categoery 1</option>
                      <option value="Course 2">Categoery 2</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="courseName" className="form-label">
                      Course Name:
                    </label>
                    <select id="courseName" className="form-select" required>
                      <option value selected>
                        Select a Course
                      </option>
                      <option value="Course 1">Course 1</option>
                      <option value="Course 2">Course 2</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="courseDescription" className="form-label">
                      Description:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="courseDescription"
                      placeholder="Enter description"
                      required
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
                <button type="submit" className="btn btn-primary">
                  type="submit" class="btn btn-primary"
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Edit Class Modal */}
        <div
          className="modal fade"
          id="editCourseModal"
          tabIndex={-1}
          aria-labelledby="editCourseModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="editCourseModalLabel">
                  Edit SubCategoery
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <form id="addCourseForm" className="row">
                  <div className="mb-3">
                    <label htmlFor="categoryName" className="form-label">
                      Subcategory Name:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="categoryName"
                      placeholder="Sub-1"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="categoryName" className="form-label">
                      Category Name:
                    </label>
                    <select id="courseName" className="form-select" required>
                      <option value>Select a Course</option>
                      <option value="Course 1" selected>
                        Categoery 1
                      </option>
                      <option value="Course 2">Categoery 2</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="courseName" className="form-label">
                      Course Name:
                    </label>
                    <select id="courseName" className="form-select">
                      <option value>Select a Course</option>
                      <option value="Course 1" selected>
                        Course 1
                      </option>
                      <option value="Course 2">Course 2</option>
                      {/* Add more course options here */}
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="courseDescription" className="form-label">
                      Description:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="courseDescription"
                      defaultValue="loremvwbwjrgjrgbg3rwrggqg"
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
                <button
                  type="button"
                  className="btn btn-primary"
                  id="editClassSubmit"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* View Class Modal */}
        <div
          className="modal fade"
          id="viewCourseModal"
          tabIndex={-1}
          aria-labelledby="viewCourseModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="viewCourseModalLabel">
                  View Course Categoery
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <form id="addCourseForm" className="row">
                  <div className="mb-3">
                    <label htmlFor="categoryName" className="form-label">
                      Subcategory Name:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="categoryName"
                      defaultValue="sub-1"
                      disabled
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="categoryName" className="form-label">
                      Category Name:
                    </label>
                    <select id="courseName" className="form-select" disabled>
                      <option value selected>
                        Select a Course
                      </option>
                      <option value="Course 1">Categoery 1</option>
                      <option value="Course 2">Categoery 2</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="courseName" className="form-label">
                      Course Name:
                    </label>
                    <select id="courseName" className="form-select" disabled>
                      <option value>Select a Course</option>
                      <option value="Course 1" selected>
                        Course 1
                      </option>
                      <option value="Course 2">Course 2</option>
                      {/* Add more course options here */}
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="courseDescription" className="form-label">
                      Description:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="courseDescription"
                      defaultValue="loremvwbwjrgjrgbg3rwrggqg"
                      disabled
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
