// <!doctype html>
// <html lang="en">

import { MenuBar } from "../../common-components/MenuBar";
import { CommonNavbar } from "../../common-components/Navbar";
import { onMenuClicked } from "../../common-components/useCommonUsableFunctions";

export const Certificate = () => {
  return (
    <div id="layout-wrapper">
      <CommonNavbar />
      <MenuBar />
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0 font-size-18">
                    Certificate Management
                  </h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="index.html">Dashboard</a>
                      </li>
                      <li className="breadcrumb-item active">
                        Certificate Management
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
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
                        data-bs-target="#addCertificateModal"
                      >
                        <i className="bx bx-plus me-1 fw-semibold align-middle" />
                        Add New Certificate
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header justify-content-between">
                    <div className="card-title">Certificate List </div>
                  </div>
                  <div className="card-body">
                    <table
                      id="datatable-buttons"
                      className="table table-bordered dt-responsive nowrap w-100"
                    >
                      <thead>
                        <tr>
                          <th>Certificate Number</th>
                          <th>Participant's Name</th>
                          <th>Course Name</th>
                          <th>Duration</th>
                          <th>Grade</th>
                          <th>Date of Completion</th>
                          <th>Attachments</th>
                          <th>Remarks</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>015Uik5695</td>
                          <td>Sonam Sharma</td>
                          <td>HTML</td>
                          <td>3 Months</td>
                          <td>A+</td>
                          <td>15-06-2023 2:27 PM</td>
                          <td>certificate.pdf</td>
                          <td>impresive </td>
                          <td>
                            <a
                              aria-label="anchor"
                              href="javascript:void(0);"
                              className="btn btn-icon btn-sm btn-warning rounded-pill"
                              data-bs-toggle="modal"
                              data-bs-target="#viewCertificateModal"
                            >
                              <i className="mdi mdi-eye" />
                            </a>
                            <a
                              aria-label="anchor"
                              href="javascript:void(0);"
                              className="btn btn-icon btn-sm btn-primary rounded-pill"
                              data-bs-toggle="modal"
                              data-bs-target="#editCertificateModal"
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
              </div>{" "}
              {/* end col */}
            </div>
            {/* end row */}
          </div>{" "}
          {/* container-fluid */}
        </div>
        {/* End Page-content */}
        {/*Add New Certificate Modal */}
        {/* Add Certificate Modal */}
        <div
          className="modal fade"
          id="addCertificateModal"
          tabIndex={-1}
          aria-labelledby="addCertificateModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addCertificateModalLabel">
                  Add Certificate
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <form id="addCertificateForm">
                  <div className="row">
                    <div className="col-md-12 mb-3">
                      <label htmlFor="certificateNumber" className="form-label">
                        Certificate Number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="certificateNumber"
                        defaultValue="cfg01895gh36"
                        readOnly
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="firstName" className="form-label">
                        Participant's Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        placeholder="Enter Participant's Name"
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="course" className="form-label">
                        Course
                      </label>
                      <select className="form-select" id="class-add" required>
                        <option value={0}>Select courses</option>
                        <option value="class-1">class-1</option>
                        <option value="class-2">class-2</option>
                        <option value="class-3">class-3</option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="courseDuration" className="form-label">
                        Course Duration
                      </label>
                      <select
                        className="form-select"
                        id="courseDuration"
                        required
                      >
                        <option value selected>
                          Select Duration
                        </option>
                        <option value="3 Months">3 Months</option>
                        <option value="6 Months">6 Months</option>
                        <option value="1 Year">1 Year</option>
                        {/* Add more options here */}
                      </select>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="grade" className="form-label">
                        Grade
                      </label>
                      <select className="form-select" id="grade" required>
                        <option value selected>
                          Select Grade
                        </option>
                        <option value="A+">A+</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        {/* Add more options here */}
                      </select>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="dateOfCompletion" className="form-label">
                        Date of Completion
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="dateOfCompletion"
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label
                        htmlFor="certificateAttachment"
                        className="form-label"
                      >
                        Attachment
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        id="certificateAttachment"
                        accept=".pdf,.doc,.docx"
                      />
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
                  id="addCertificateSubmit"
                >
                  Add Certificate
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* end modal */}
        <div
          className="modal fade"
          id="viewCertificateModal"
          tabIndex={-1}
          aria-labelledby="viewCertificateModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="viewCertificateModalLabel">
                  View Certificate
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <form>
                  <div className="row">
                    <div className="col-md-12 mb-3">
                      <label
                        htmlFor="viewCertificateNumber"
                        className="form-label"
                      >
                        Certificate Number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="viewCertificateNumber"
                        defaultValue="cfg01895gh36"
                        readOnly
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="viewFirstName" className="form-label">
                        Participant's Nam
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="viewFirstName"
                        defaultValue="Sonam Sharma"
                        readOnly
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="viewCourse" className="form-label">
                        Course
                      </label>
                      <select className="form-select" id="viewCourse" disabled>
                        <option value="class-1">class-1</option>
                        <option value="class-2">class-2</option>
                        <option value="class-3">class-3</option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label
                        htmlFor="viewCourseDuration"
                        className="form-label"
                      >
                        Course Duration
                      </label>
                      <select
                        className="form-select"
                        id="viewCourseDuration"
                        disabled
                      >
                        <option value="3 Months">3 Months</option>
                        <option value="6 Months">6 Months</option>
                        <option value="1 Year">1 Year</option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="viewGrade" className="form-label">
                        Grade
                      </label>
                      <select className="form-select" id="viewGrade" disabled>
                        <option value="A+">A+</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label
                        htmlFor="viewDateOfCompletion"
                        className="form-label"
                      >
                        Date of Completion
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="viewDateOfCompletion"
                        defaultValue="2023-09-15"
                        disabled
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label
                        htmlFor="viewCertificateAttachment"
                        className="form-label"
                      >
                        Attachment
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="viewCertificateAttachment"
                        defaultValue="Document.pdf"
                        readOnly
                      />
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
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        {/*Edit  Certificate Modal */}
        <div
          className="modal fade"
          id="editCertificateModal"
          tabIndex={-1}
          aria-labelledby="editCertificateModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="editCertificateModalLabel">
                  Edit Certificate
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <form id="editCertificateForm">
                  <div className="row">
                    <div className="col-md-12 mb-3">
                      <label
                        htmlFor="editCertificateNumber"
                        className="form-label"
                      >
                        Certificate Number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="editCertificateNumber"
                        defaultValue="cfg01895gh36"
                        readOnly
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="firstName" className="form-label">
                        Participant's Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        defaultValue="Sonam Sharma"
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="editCourse" className="form-label">
                        Course
                      </label>
                      <select className="form-select" id="editCourse" required>
                        <option value="class-1">class-1</option>
                        <option value="class-2">class-2</option>
                        <option value="class-3">class-3</option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label
                        htmlFor="editCourseDuration"
                        className="form-label"
                      >
                        Course Duration
                      </label>
                      <select
                        className="form-select"
                        id="editCourseDuration"
                        required
                      >
                        <option value="3 Months">3 Months</option>
                        <option value="6 Months">6 Months</option>
                        <option value="1 Year">1 Year</option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="editGrade" className="form-label">
                        Grade
                      </label>
                      <select className="form-select" id="editGrade" required>
                        <option value="A+">A+</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label
                        htmlFor="editDateOfCompletion"
                        className="form-label"
                      >
                        Date of Completion
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="editDateOfCompletion"
                        defaultValue="2023-09-15"
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label
                        htmlFor="editCertificateAttachment"
                        className="form-label"
                      >
                        Attachment
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        id="editCertificateAttachment"
                        accept=".pdf,.doc,.docx"
                      />
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
                  id="editCertificateSubmit"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* end modal */}
        <footer className="footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6">© Saurabh Amin.</div>
              <div className="col-sm-6">
                <div className="text-sm-end d-none d-sm-block">
                  Design &amp; Develop by Saurabh Amin
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      {/* end main content*/}
      {/* end main content*/}
    </div>
  );
};
{
  /* <!-- END layout-wrapper --> */
}

{
  /* <!-- JAVASCRIPT -->
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
