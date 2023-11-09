// <!doctype html>
// <html lang="en">

import { MenuBar } from "../common-components/MenuBar";
import { CommonNavbar } from "../common-components/Navbar";
import { onMenuClicked } from "../common-components/useCommonUsableFunctions";

// <head>

//     <meta charset="utf-8" />
//     <title>Course Categoery Management | Tonga</title>
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

export const Category = () => {
  return (
    <div id="layout-wrapper">
      <div class="main-content">
        <div class="page-content">
          <div class="container-fluid">
            {/* <!-- start page title --> */}
            <div class="row">
              <div class="col-12">
                <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 class="mb-sm-0 font-size-18">
                    Course categoery Management
                  </h4>

                  <div class="page-title-right">
                    <ol class="breadcrumb m-0">
                      <li class="breadcrumb-item">
                        <a href="index.html">Dashboard</a>
                      </li>
                      <li class="breadcrumb-item active">
                        Course Categoery Management
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end page title --> */}
            <div class="row">
              <div class="col-xl-12">
                <div class="card">
                  <div class="card-body p-3">
                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-3">
                      <div class="row w-50">
                        <div class="col-xl-5">
                          <select class="form-select">
                            <option value="CA">Newest</option>
                            <option value="NV">Oldest</option>
                            <option value="OR">Recent</option>
                          </select>
                        </div>

                        <div class="col-xl-7">
                          <div class="d-flex" role="search">
                            <input
                              class="form-control me-2"
                              type="search"
                              placeholder="Search"
                              aria-label="Search"
                            />{" "}
                            <button class="btn btn-light" type="submit">
                              Search
                            </button>
                          </div>
                        </div>
                      </div>

                      <button
                        class="btn btn-primary me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#addCategoryModal"
                      >
                        <i class="bx bx-plus me-1 fw-semibold align-middle"></i>
                        Add New Categoery
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row g-4">
              <div class="col-md-12">
                {/* <!-- Role Table --> */}
                <div class="card ">
                  <div class="card-header justify-content-between">
                    <div class="card-title">Categoery List </div>
                  </div>
                  <div class="card-body">
                    <div class="table-responsive">
                      <table
                        id="datatable-buttons"
                        class="table table-bordered dt-responsive nowrap w-100"
                      >
                        <thead>
                          <tr>
                            <th>Category ID</th>
                            <th>Category Name</th>
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

                            <td>Lorem ipsum dolor sit amet.</td>

                            <td>
                              <a
                                aria-label="anchor"
                                href="javascript:void(0);"
                                class="btn btn-icon btn-sm btn-warning rounded-pill"
                                data-bs-toggle="modal"
                                data-bs-target="#viewCourseModal"
                              >
                                <i class="mdi mdi-eye"></i>
                              </a>
                              <a
                                aria-label="anchor"
                                href="javascript:void(0);"
                                class="btn btn-icon btn-sm btn-primary rounded-pill"
                                data-bs-toggle="modal"
                                data-bs-target="#editCourseModal"
                              >
                                <i class="mdi mdi-pencil"></i>
                              </a>
                              <a
                                aria-label="anchor"
                                href="javascript:void(0);"
                                class="btn btn-icon btn-sm btn-danger rounded-pill"
                              >
                                <i class="mdi mdi-trash-can"></i>
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

        {/* <!-- Add Course Modal --> */}
        <div
          class="modal fade"
          id="addCategoryModal"
          tabindex="-1"
          aria-labelledby="addCategoryModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="addCourseModalLabel">
                  Add New Course
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form id="addCategoryForm">
                  <div class="mb-3">
                    <label for="categoryName" class="form-label">
                      Category Name:
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="categoryName"
                      placeholder="Enter category name"
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <label for="courseName" class="form-label">
                      Course Name:
                    </label>
                    <select id="courseName" class="form-select" required>
                      <option value="" selected>
                        Select a Course
                      </option>
                      <option value="Course 1">Course 1</option>
                      <option value="Course 2">Course 2</option>
                      {/* <!-- Add more course options here --> */}
                    </select>
                  </div>
                  <div class="mb-3">
                    <label for="courseDescription" class="form-label">
                      Description:
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="courseDescription"
                      placeholder="Enter description"
                      required
                    />
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="submit" class="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Edit Class Modal --> */}
        <div
          class="modal fade"
          id="editCourseModal"
          tabindex="-1"
          aria-labelledby="editCourseModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="editCourseModalLabel">
                  Edit Course Categoery
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form id="addCourseForm" class="row">
                  <div class="mb-3">
                    <label for="categoryName" class="form-label">
                      Category Name:
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="categoryName"
                      value="Construction"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="courseName" class="form-label">
                      Course Name:
                    </label>
                    <select id="courseName" class="form-select">
                      <option value="">Select a Course</option>
                      <option value="Course 1" selected>
                        Course 1
                      </option>
                      <option value="Course 2">Course 2</option>
                      {/* <!-- Add more course options here --> */}
                    </select>
                  </div>
                  <div class="mb-3">
                    <label for="courseDescription" class="form-label">
                      Description:
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="courseDescription"
                      value="loremvwbwjrgjrgbg3rwrggqg"
                    />
                  </div>
                </form>
              </div>

              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  id="editClassSubmit"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- View Class Modal --> */}
        <div
          class="modal fade"
          id="viewCourseModal"
          tabindex="-1"
          aria-labelledby="viewCourseModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="viewCourseModalLabel">
                  View Course Categoery
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form id="addCourseForm" class="row">
                  <div class="mb-3">
                    <label for="categoryName" class="form-label">
                      Category Name:
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="categoryName"
                      value="Construction"
                      disabled
                    />
                  </div>
                  <div class="mb-3">
                    <label for="courseName" class="form-label">
                      Course Name:
                    </label>
                    <select id="courseName" class="form-select" disabled>
                      <option value="">Select a Course</option>
                      <option value="Course 1" selected>
                        Course 1
                      </option>
                      <option value="Course 2">Course 2</option>
                      {/* <!-- Add more course options here --> */}
                    </select>
                  </div>
                  <div class="mb-3">
                    <label for="courseDescription" class="form-label">
                      Description:
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="courseDescription"
                      value="loremvwbwjrgjrgbg3rwrggqg"
                      disabled
                    />
                  </div>
                </form>
              </div>

              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        <footer class="footer">
          <div class="container-fluid">
            <div class="row">
              <div class="col-sm-6">
                <script>document.write(new Date().getFullYear())</script> ©
                Tonga.
              </div>
              <div class="col-sm-6">
                <div class="text-sm-end d-none d-sm-block">
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
      {/* <!-- end main content--> */}
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
