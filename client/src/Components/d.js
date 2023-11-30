import { CommonFooter } from "../common-components/commonFooter";

export const D = () => {
  return (
    <div id="layout-wrapper">
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            {/* start page title */}
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0 font-size-18">Schedule</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a>Dashboard</a>
                      </li>
                      <li className="breadcrumb-item active">Schedule</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            {/* end page title */}
            <div className="row">
              <div className="col-lg-3">
                <div className="card">
                  <div className="card-body">
                    <div className="d-grid">
                      <button
                        className="btn font-16 btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#addEventModal"
                      >
                        <i className="mdi mdi-plus-circle-outline" /> Add New
                      </button>
                    </div>
                    <h5 className="text-primary my-3">Sort By :</h5>
                    <div className="mb-3">
                      <label className="form-label">Start Date</label>
                      <input
                        type="text"
                        className="form-control"
                        id="startDate"
                        name="startDate"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">End Date</label>
                      <input
                        type="text"
                        className="form-control"
                        id="endDate"
                        name="endDate"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Course Filter</label>
                      <select
                        className="selectpicker form-select"
                        id="courseFilter"
                        name="courseFilter"
                      >
                        <option value="">All Courses</option>
                        <option value="Course 1">Course 1</option>
                        <option value="Course 2">Course 2</option>
                        <option value="Course 3">Course 3</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Trainer Filter</label>
                      <select
                        className="selectpicker form-select"
                        id="trainerFilter"
                        name="trainerFilter"
                      >
                        <option value="">All Trainers</option>
                        <option value="Trainer 1">Trainer 1</option>
                        <option value="Trainer 2">Trainer 2</option>
                        <option value="Trainer 3">Trainer 3</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Class Filter</label>
                      <select
                        className="selectpicker form-select"
                        id="classFilter"
                        name="classFilter"
                      >
                        <option value="">All Classes</option>
                        <option value="Class A">Class A</option>
                        <option value="Class B">Class B</option>
                        <option value="Class C">Class C</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="card">
                  <div className="card-body">
                    <div id="calendar" />
                    {/* Event Creation Form */}
                    {/* Add Event Modal */}
                    <div
                      className="modal fade"
                      id="addEventModal"
                      tabIndex={-1}
                      role="dialog"
                      aria-labelledby="addEventModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="addEventModalLabel">
                              Add Course
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="modal-body">
                            <form id="eventForm" className="row">
                              <div className="col-md-6 form-group mb-3">
                                <label>Course Name:</label>
                                <select
                                  className="form-select"
                                  id="courseName"
                                  required=""
                                >
                                  <option value="select">--select--</option>
                                  <option value="course1">Course 1</option>
                                  <option value="course2">Course 2</option>
                                  <option value="course3">Course 3</option>
                                </select>
                              </div>
                              <div className="col-md-6 form-group mb-3">
                                <label>Class Name:</label>
                                <select
                                  className="form-select"
                                  id="className"
                                  required=""
                                >
                                  <option value="select">--select--</option>
                                  <option value="class1">Class 1</option>
                                  <option value="class2">Class 2</option>
                                  <option value="class3">Class 3</option>
                                </select>
                              </div>
                              <div className="col-md-6 form-group mb-3">
                                <label>Start Time:</label>
                                <input
                                  type="time"
                                  className="form-control"
                                  id="startTime"
                                  required=""
                                />
                              </div>
                              <div className="col-md-6 form-group mb-3">
                                <label>End Time:</label>
                                <input
                                  type="time"
                                  className="form-control"
                                  id="endTime"
                                  required=""
                                />
                              </div>
                              <div className="col-md-6 form-group mb-3">
                                <label>Start Date:</label>
                                <input
                                  type="date"
                                  className="form-control"
                                  id="eventStartDate"
                                  required=""
                                />
                              </div>
                              <div className="col-md-6 form-group mb-3">
                                <label>End Date:</label>
                                <input
                                  type="date"
                                  className="form-control"
                                  id="eventEndDate"
                                  required=""
                                />
                              </div>
                              <div className="col-md-12 form-group mb-3">
                                <label>Location:</label>
                                <select
                                  className="form-select"
                                  id="location"
                                  required=""
                                >
                                  <option value="select">--select--</option>
                                  <option value="location1">Location 1</option>
                                  <option value="location2">Location 2</option>
                                  <option value="location3">Location 3</option>
                                </select>
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
                            <button
                              type="button"
                              className="btn btn-primary"
                              onclick="addEvent()"
                            >
                              Add Course
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Event Details Modal */}
                    <div
                      className="modal fade"
                      id="eventDetailsModal"
                      tabIndex={-1}
                      role="dialog"
                      aria-labelledby="eventDetailsModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5
                              className="modal-title"
                              id="eventDetailsModalLabel"
                            >
                              Course Details
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="modal-body">
                            <form id="eventDetailsForm" className="row">
                              <div className="col-md-6 form-group mb-3">
                                <label>Course Name:</label>
                                <select
                                  className="form-select"
                                  id="eventDetailsTitle"
                                  disabled=""
                                >
                                  <option value="select">--select--</option>
                                  <option value="course1">Course 1</option>
                                  <option value="course2">Course 2</option>
                                  <option value="course3">Course 3</option>
                                </select>
                              </div>
                              <div className="col-md-6 form-group mb-3">
                                <label>Class Name:</label>
                                <select
                                  className="form-select"
                                  id="eventDetailsType"
                                  disabled=""
                                >
                                  <option value="select">--select--</option>
                                  <option value="class1">Class 1</option>
                                  <option value="class2">Class 2</option>
                                  <option value="class3">Class 3</option>
                                </select>
                              </div>
                              <div className="col-md-6 form-group mb-3">
                                <label>Start Time:</label>
                                <input
                                  type="time"
                                  className="form-control"
                                  id="eventDetailsStartTime"
                                  disabled=""
                                />
                              </div>
                              <div className="col-md-6 form-group mb-3">
                                <label>End Time:</label>
                                <input
                                  type="time"
                                  className="form-control"
                                  id="eventDetailsEndTime"
                                  disabled=""
                                />
                              </div>
                              <div className="col-md-6 form-group mb-3">
                                <label>Start Date:</label>
                                <input
                                  type="date"
                                  className="form-control"
                                  id="eventDetailsStartDate"
                                  disabled=""
                                />
                              </div>
                              <div className="col-md-6 form-group mb-3">
                                <label>End Date:</label>
                                <input
                                  type="date"
                                  className="form-control"
                                  id="eventDetailsEndDate"
                                  disabled=""
                                />
                              </div>
                              <div className="col-md-12 form-group mb-3">
                                <label>Location:</label>
                                <select
                                  className="form-select"
                                  id="eventDetailsLocation"
                                  disabled=""
                                >
                                  <option value="select">--select--</option>
                                  <option value="location1">Location 1</option>
                                  <option value="location2">Location 2</option>
                                  <option value="location3">Location 3</option>
                                </select>
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
                </div>
              </div>
              <div style={{ clear: "both" }} />
            </div>
          </div>
        </div>{" "}
      </div>
      {/* End Page-content */}
    </div>
  );
};
