import { useState } from "react";
import { Modal } from "react-bootstrap";
import { AxiosInstance } from "../../../common-components/axiosInstance";
import { CommonDataTable } from "../../../common-components/CommonDataTable";
import { viewTrainerHeaders } from "../../../Constants/table.constants";
import {
  AllCalendar,
  CommonCalendar,
} from "../../../common-components/Calendar";
import { NewClassModal } from "../../course-management/models/classModal";

export const ViewTrainer = ({ isOpen, setIsOpen, trainerData }) => {
  const [viewTab, setViewTab] = useState("trainerDetails");
  const [courses, setCourses] = useState([]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const getCourseDetails = async (type) => {
    try {
      setViewTab(type);
      const { data } = await AxiosInstance.get("/trainer/trainerClassDetails", {
        params: trainerData,
      });
      setCourses(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Modal show={isOpen} onHide={handleClose} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>
            <h5 class="modal-title">View Trainer</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ border: "none", height: "auto" }}>
            <ul class="nav">
              <li class="nav-item" onClick={() => setViewTab("trainerDetails")}>
                <a class="nav-link" href="#step-11">
                  <div class="num">1</div>
                  Trainer's Details
                </a>
              </li>
              <li
                class="nav-item"
                onClick={() => getCourseDetails("courseDetails")}
              >
                <a class="nav-link" href="#step-22">
                  <span class="num">2</span>
                  Course Details
                </a>
              </li>
              <li class="nav-item" onClick={() => getCourseDetails("schedule")}>
                <a class="nav-link" href="#step-33">
                  <span class="num">3</span>
                  Scedule
                </a>
              </li>
            </ul>

            <div class="tab-content mt-3">
              {viewTab == "trainerDetails" && (
                <div class="row">
                  <div class="col-md-12">
                    <div
                      class="d-flex"
                      style={{
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <h5 class="modal-title">Trainer's Details</h5>
                    </div>
                    <div class="card border border-primary mt-3">
                      <div class="card-body">
                        <div class="row">
                          <div class="col-md-3">
                            <label class="mb-0" for="">
                              {" "}
                              <b>Name</b>
                            </label>
                            <p class="m-0">{trainerData.trainerName}</p>
                          </div>
                          <div class="col-md-3">
                            <label class="mb-0" for="">
                              {" "}
                              <b>Email ID</b>
                            </label>
                            <p class="m-0">{trainerData.trainerEmail}</p>
                          </div>
                          <div class="col-md-3">
                            <label class="mb-0" for="">
                              <b>Mobile No.</b>
                            </label>
                            <p class="m-0">{trainerData.trainerMobile}</p>
                          </div>
                          <div class="col-md-3">
                            <label class="mb-0" for="">
                              {" "}
                              <b>DOB (Date of Birth)</b>
                            </label>
                            <p class="m-0">{trainerData.trainerDOB}</p>
                          </div>
                        </div>
                        <div class="row mt-3">
                          <div class="col-md-3">
                            <label class="mb-0" for="">
                              {" "}
                              <b>Designation</b>
                            </label>
                            <p class="m-0">{trainerData.trainerDesignation}</p>
                          </div>
                          <div class="col-md-6">
                            <label class="mb-0" for="">
                              {" "}
                              <b>Address</b>
                            </label>
                            <p class="m-0">{trainerData.trainerAddress}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {viewTab == "courseDetails" && (
                <div class="row">
                  <div class="col-md-12">
                    {/* <div class="card">
                      <div class="card-header justify-content-between">
                        <div class="card-title">Course</div>
                      </div>
                      <div class="card-body">
                        <div class="table-responsive">
                          <table
                            id="datatable-buttons"
                            class="table display table-bordered dt-responsive nowrap w-100"
                          >
                            <thead>
                              <tr>
                                <th>Course</th>
                                <th>class</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Lec In Week</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Course 1</td>
                                <td>Class A</td>

                                <td>22 may 2022</td>
                                <td>4:00pm To 6:pm</td>
                                <td>
                                  <span class="badge badge-soft-primary">
                                    Monday
                                  </span>
                                  <span class="badge badge-soft-success">
                                    wednasday
                                  </span>
                                  <span class="badge badge-soft-warning">
                                    saturday
                                  </span>
                                </td>
                                <td>
                                  <a
                                    aria-label="anchor"
                                    href="javascript:void(0);"
                                    class="btn btn-icon btn-sm btn-primary rounded-pill"
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
                    </div> */}
                    <CommonDataTable
                      tableHeaders={viewTrainerHeaders}
                      data={courses}
                    />
                  </div>
                </div>
              )}
              {viewTab == "schedule" && (
                <div>
                  <AllCalendar events={courses} />
                </div>
              )}
            </div>
          </div>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style={{
                width:
                  viewTab == "trainerDetails"
                    ? "34%"
                    : viewTab == "courseDetails"
                    ? "68%"
                    : "100%",
              }}
            ></div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};
