import { useState } from "react";
import { Modal } from "react-bootstrap";
import { CommonDataTable } from "../../../common-components/CommonDataTable";
import { viewTrainerHeaders } from "../../../Constants/table.constants";
import { AllCalendar } from "../../../common-components/Calendar";
import { useAuth } from "../../../context/authContext";

export const ViewTrainer = ({ isOpen, setIsOpen, trainerData }) => {
  const { NewAxiosInstance } = useAuth();
  const [viewTab, setViewTab] = useState("trainerDetails");
  const [courses, setCourses] = useState([]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const getCourseDetails = async (type) => {
    try {
      setViewTab(type);
      const { data } = await NewAxiosInstance.get(
        "/trainer/trainerClassDetails",
        {
          params: trainerData,
        }
      );
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
            <h5 className="modal-title">View Trainer</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ border: "none", height: "auto" }}>
            <ul className="nav">
              <li
                className="nav-item"
                onClick={() => setViewTab("trainerDetails")}
              >
                <a className="nav-link" href="#step-11">
                  <div className="num">1</div>
                  Trainer's Details
                </a>
              </li>
              <li
                className="nav-item"
                onClick={() => getCourseDetails("courseDetails")}
              >
                <a className="nav-link" href="#step-22">
                  <span className="num">2</span>
                  Course Details
                </a>
              </li>
              <li
                className="nav-item"
                onClick={() => getCourseDetails("schedule")}
              >
                <a className="nav-link" href="#step-33">
                  <span className="num">3</span>
                  Scedule
                </a>
              </li>
            </ul>

            <div className="tab-content mt-3">
              {viewTab == "trainerDetails" && (
                <div className="row">
                  <div className="col-md-12">
                    <div
                      className="d-flex"
                      style={{
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <h5 className="modal-title">Trainer's Details</h5>
                    </div>
                    <div className="card border border-primary mt-3">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-3">
                            <label className="mb-0" for="">
                              {" "}
                              <b>Name</b>
                            </label>
                            <p className="m-0">{trainerData.trainerName}</p>
                          </div>
                          <div className="col-md-3">
                            <label className="mb-0" for="">
                              {" "}
                              <b>Email ID</b>
                            </label>
                            <p className="m-0">{trainerData.trainerEmail}</p>
                          </div>
                          <div className="col-md-3">
                            <label className="mb-0" for="">
                              <b>Mobile No.</b>
                            </label>
                            <p className="m-0">{trainerData.trainerMobile}</p>
                          </div>
                          <div className="col-md-3">
                            <label className="mb-0" for="">
                              {" "}
                              <b>DOB (Date of Birth)</b>
                            </label>
                            <p className="m-0">{trainerData.trainerDOB}</p>
                          </div>
                        </div>
                        <div className="row mt-3">
                          <div className="col-md-3">
                            <label className="mb-0" for="">
                              {" "}
                              <b>Designation</b>
                            </label>
                            <p className="m-0">
                              {trainerData.trainerDesignation}
                            </p>
                          </div>
                          <div className="col-md-6">
                            <label className="mb-0" for="">
                              {" "}
                              <b>Address</b>
                            </label>
                            <p className="m-0">{trainerData.trainerAddress}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {viewTab == "courseDetails" && (
                <div className="row">
                  <div className="col-md-12">
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
          <div className="progress">
            <div
              className="progress-bar"
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
