import { CommonFooter } from "../common-components/commonFooter";

export const Category = () => {
  return (
    <div id="layout-wrapper">
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            {/* <!-- start page title --> */}
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0 font-size-18">
                    Course categoery Management
                  </h4>

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="index.html">Dashboard</a>
                      </li>
                      <li className="breadcrumb-item active">
                        Course Categoery Management
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
                        <i className="bx bx-plus me-1 fw-semibold align-middle"></i>
                        Add New Categoery
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-md-12">
                {/* <!-- Role Table --> */}
                <div className="card ">
                  <div className="card-header justify-content-between">
                    <div className="card-title">Categoery List </div>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table
                        id="datatable-buttons"
                        className="table table-bordered dt-responsive nowrap w-100"
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
                                className="btn btn-icon btn-sm btn-warning rounded-pill"
                                data-bs-toggle="modal"
                                data-bs-target="#viewCourseModal"
                              >
                                <i className="mdi mdi-eye"></i>
                              </a>
                              <a
                                aria-label="anchor"
                                className="btn btn-icon btn-sm btn-primary rounded-pill"
                                data-bs-toggle="modal"
                                data-bs-target="#editCourseModal"
                              >
                                <i className="mdi mdi-pencil"></i>
                              </a>
                              <a
                                aria-label="anchor"
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

        {/* <!-- Add Course Modal --> */}
        <div
          className="modal fade"
          id="addCategoryModal"
          tabindex="-1"
          aria-labelledby="addCategoryModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addCourseModalLabel">
                  Add New Course
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form id="addCategoryForm">
                  <div className="mb-3">
                    <label for="categoryName" className="form-label">
                      Category Name:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="categoryName"
                      placeholder="Enter category name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label for="courseName" className="form-label">
                      Course Name:
                    </label>
                    <select id="courseName" className="form-select" required>
                      <option value="">Select a Course</option>
                      <option value="Course 1">Course 1</option>
                      <option value="Course 2">Course 2</option>
                      {/* <!-- Add more course options here --> */}
                    </select>
                  </div>
                  <div className="mb-3">
                    <label for="courseDescription" className="form-label">
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
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Edit Class Modal --> */}
        <div
          className="modal fade"
          id="editCourseModal"
          tabindex="-1"
          aria-labelledby="editCourseModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="editCourseModalLabel">
                  Edit Course Categoery
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form id="addCourseForm" className="row">
                  <div className="mb-3">
                    <label for="categoryName" className="form-label">
                      Category Name:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="categoryName"
                      value="Construction"
                    />
                  </div>
                  <div className="mb-3">
                    <label for="courseName" className="form-label">
                      Course Name:
                    </label>
                    <select id="courseName" className="form-select">
                      <option value="">Select a Course</option>
                      <option value="Course 1">Course 1</option>
                      <option value="Course 2">Course 2</option>
                      {/* <!-- Add more course options here --> */}
                    </select>
                  </div>
                  <div className="mb-3">
                    <label for="courseDescription" className="form-label">
                      Description:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="courseDescription"
                      value="loremvwbwjrgjrgbg3rwrggqg"
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

        {/* <!-- View Class Modal --> */}
        <div
          className="modal fade"
          id="viewCourseModal"
          tabindex="-1"
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
                ></button>
              </div>
              <div className="modal-body">
                <form id="addCourseForm" className="row">
                  <div className="mb-3">
                    <label for="categoryName" className="form-label">
                      Category Name:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="categoryName"
                      value="Construction"
                      disabled
                    />
                  </div>
                  <div className="mb-3">
                    <label for="courseName" className="form-label">
                      Course Name:
                    </label>
                    <select id="courseName" className="form-select" disabled>
                      <option value="">Select a Course</option>
                      <option value="Course 1">Course 1</option>
                      <option value="Course 2">Course 2</option>
                      {/* <!-- Add more course options here --> */}
                    </select>
                  </div>
                  <div className="mb-3">
                    <label for="courseDescription" className="form-label">
                      Description:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="courseDescription"
                      value="loremvwbwjrgjrgbg3rwrggqg"
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

      </div>
      {/* <!-- end main content--> */}
    </div>
  );
};
