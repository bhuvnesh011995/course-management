import { useEffect, useState } from "react";
import { MenuBar } from "../../common-components/MenuBar";
import { CommonNavbar } from "../../common-components/Navbar";
import { AxiosInstance } from "../../common-components/axiosInstance";
import { AddNewLeadModel } from "./addNewLeadModel";
import { DeleteModel } from "../../common-components/models/DeleteModal";

export const LeadGrid = () => {
  const [newLeadModal, setNewLeadModal] = useState(false);
  const [leadData, setLeadData] = useState(null);
  const [deleteLeadModal, setDeleteLeadModal] = useState(false);
  const [viewLead, setViewLead] = useState(false);
  const [tradeTypes, setTradeTypes] = useState([]);
  const [registrationTypes, setRegistrationTypes] = useState([]);
  const [previousMenu, setPreviousMenu] = useState("");

  const [leads, setLeads] = useState({
    newLeads: [],
    pendingLeads: [],
    assignCourseLeads: [],
    completedLeads: [],
  });

  useEffect(() => {
    getAllLeads();
    getRegistrationTypes();
    getTradeTypes();
  }, []);

  const showLeadModal = (data, type, index) => {
    console.log(data);
    if (data) {
      setLeadData(data);
    } else if (!data) {
      setLeadData(null);
    }
    if (type == "delete") {
      setDeleteLeadModal(true);
    } else if (type == "view") setViewLead(true);
    else {
      setDeleteLeadModal(false);
      setViewLead(false);
    }
    if (type != "delete") setNewLeadModal(!newLeadModal);
  };

  const getAllLeads = async () => {
    try {
      const { data } = await AxiosInstance.get("/leads/getAllLeads");
      const leadData = {
        newLeads: [],
        pendingLeads: [],
        assignCourseLeads: [],
        completedLeads: [],
      };
      data.leads.filter((e) => {
        if (!e.courseAssigned) {
          leadData.newLeads.push(e);
        } else if (e.courseAssigned && !e.getPayment && !e.confirmed) {
          leadData.pendingLeads.push(e);
        } else if (e.getPayment && !e.confirmed && e.courseAssigned) {
          leadData.assignCourseLeads.push(e);
        } else if (e.getPayment && e.confirmed && e.courseAssigned) {
          leadData.completedLeads.push(e);
        }
      });

      setLeads({ ...leadData });
    } catch (err) {
      console.error(err);
    }
  };

  const filterLeadByOption = async (filterRole) => {
    try {
      console.log(filterRole);
    } catch (err) {
      console.error(err);
    }
  };

  const showLeadMenu = (data) => {
    if (previousMenu.length > 0 && previousMenu != data) {
      const previousMenuElement = document.getElementById(previousMenu);
      if (previousMenuElement)
        if (previousMenuElement.style.visibility == "visible")
          previousMenuElement.style.visibility = "hidden";
    }
    setPreviousMenu(data);
    const menuElement = document.getElementById(data);
    if (menuElement)
      if (menuElement.style.visibility == "hidden")
        menuElement.style.visibility = "visible";
      else if (menuElement.style.visibility == "visible")
        menuElement.style.visibility = "hidden";
  };

  const getTradeTypes = async () => {
    try {
      const { data } = await AxiosInstance.get("/trades/getTradeTypes");
      setTradeTypes(data.allTradeTypes);
    } catch (err) {
      console.error(err);
    }
  };

  const getRegistrationTypes = async () => {
    try {
      const { data } = await AxiosInstance.get(
        "/registrationType/getRegistrationTypes"
      );
      setRegistrationTypes(data);
    } catch (err) {
      console.error(err);
    }
  };

  const updateLeads = (data, type) => {
    let foundLead;
    Object.keys(leads).map((key) => {
      leads[key].filter((lead, index) => {
        if (lead._id === data._id) {
          foundLead = lead;
          if (type) {
            leads[key].splice(index, 1);
            if (type == "courseAssign") {
              setLeads((old) => ({
                ...old,
                assignCourseLeads: [...leads.assignCourseLeads, data],
              }));
            } else if (type == "confirm") {
              setLeads((old) => ({
                ...old,
                completedLeads: [...leads.completedLeads, data],
              }));
            } else if (type == "getPayment") {
              setLeads((old) => ({
                ...old,
                pendingLeads: [...leads.pendingLeads, data],
              }));
            }
          }
          return;
        }
      });
    });
    if (!foundLead) {
      leads.newLeads.push(data);
    }
  };

  return (
    <div id="layout-wrapper">
      <CommonNavbar />
      <MenuBar />

      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-12">
                <div className="card">
                  <div className="card-body p-3">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="card-title">Lead List </div>
                      <div className="row w-75">
                        <div className="col-xl-4">
                          <select
                            className="form-select"
                            onChange={({ target }) =>
                              filterLeadByOption(target.value)
                            }
                          >
                            <option value={""} selected>
                              Sort By
                            </option>
                            <option value={"newLead"}>New Lead</option>
                            <option value={"paymentPending"}>
                              Payment-Pending
                            </option>
                            <option value={"assignCourse"}>
                              Course-Assign
                            </option>
                          </select>
                        </div>
                        <div className="col-xl-4">
                          <select className="form-select">
                            <option value={""} selected>
                              Select Company
                            </option>
                          </select>
                        </div>
                        <div className="col-xl-4">
                          <div className="d-flex" role="search">
                            <input
                              className="form-control me-2"
                              type="search"
                              placeholder="Search"
                            />{" "}
                            <button className="btn btn-light" type="submit">
                              Search
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="btns">
                        <button
                          className="btn btn-primary"
                          style={{
                            height: "20px",
                            padding: "0 0.5rem",
                            fontSize: "0.7rem",
                          }}
                          onClick={() => showLeadModal()}
                        >
                          <i className="bx bx-plus fw-semibold align-middle" />{" "}
                          Add New
                        </button>
                        <a
                          className="btn btn-primary me-2"
                          style={{
                            height: "20px",
                            padding: "0 0.5rem",
                            fontSize: "0.7rem",
                          }}
                        >
                          <i className="mdi mdi-view-list fw-semibold align-middle" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="kanban-board p-3">
              {leads.newLeads.length && (
                <div className="kanban-tasks-type new-lead">
                  <div className="card bg-soft bg-success m-0">
                    <div className="card-header bg-success text-white d-flex justify-content-between align-items-center">
                      <div className="card-title">New</div>
                    </div>
                    <div className="card-body h-800 p-3">
                      <div id="new-lead">
                        <div id="lead-column-1" className="task-list">
                          {leads.newLeads.map((lead, index) => (
                            <div className="card task-box">
                              <div className="card-body p-0">
                                <div className="p-2 kanban-board-head">
                                  <div className="d-flex text-primary justify-content-between mb-2 fs-12 fw-semibold">
                                    <div>
                                      <i className="mdi mdi-star me-2 text-primary" />
                                      {lead.coreTradeRegNo}
                                    </div>
                                    <div className="dropdown">
                                      <a
                                        className="fs-15 cursor-pointer"
                                        onClick={() =>
                                          showLeadMenu(`newLead${index}`)
                                        }
                                      >
                                        {" "}
                                        <i className="mdi mdi-dots-vertical" />{" "}
                                      </a>
                                      <ul
                                        id={`newLead${index}`}
                                        style={{ visibility: "hidden" }}
                                        className="dropdown-menu dropdown-menu-end"
                                      >
                                        <li>
                                          <a
                                            className="dropdown-item"
                                            onClick={() =>
                                              showLeadModal(lead, "view")
                                            }
                                          >
                                            <i className="mdi mdi-eye me-1 align-middle d-inline-block text-warning" />
                                            View
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            className="dropdown-item"
                                            onClick={() => showLeadModal(lead)}
                                          >
                                            <i className="mdi mdi-pencil me-1 align-middle d-inline-block text-primary" />
                                            Edit
                                          </a>
                                        </li>
                                        <li>
                                          <a className="dropdown-item">
                                            <i className="bx bx-money me-1 align-middle d-inline-block text-info" />
                                            Payment
                                          </a>
                                        </li>
                                        <li>
                                          <a className="dropdown-item">
                                            <i className="mdi mdi-check-circle me-1 align-middle d-inline-block text-success" />
                                            Confirm
                                          </a>
                                        </li>
                                        <li>
                                          <a className="dropdown-item">
                                            <i className="mdi mdi-trash-can me-1 align-middle d-inline-block text-danger" />
                                            Delete
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="kanban-content">
                                    <h6 className="mb-2 fs-12">
                                      <span className="fw-bold">
                                        Company Name
                                      </span>{" "}
                                      : {lead.companyName}
                                    </h6>
                                    <h6 className="mb-2 fs-12">
                                      <span className="fw-bold">
                                        Contact Person
                                      </span>{" "}
                                      : {lead.contactPerson}
                                    </h6>
                                    <h6 className="mb-0 fs-12">
                                      <span className="fw-bold">
                                        Participant Name
                                      </span>{" "}
                                      : {lead.participantName}
                                    </h6>
                                  </div>
                                </div>
                                <div className="p-2 border-top border-block-start-dashed">
                                  <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                      <a className="me-2 text-primary">
                                        <span className="me-1">
                                          <i className="mdi mdi-briefcase align-middle fw-normal" />
                                        </span>
                                        <span className="fw-semibold fs-12">
                                          {lead.tradeType}
                                        </span>{" "}
                                      </a>
                                    </div>
                                    <div>
                                      <a className="me-2 text-primary">
                                        <span className="me-1">
                                          <i className="bx bx-phone align-middle fw-normal" />
                                        </span>
                                        <span className="fw-semibold fs-12">
                                          {lead.contactPersonMobile}
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {leads.pendingLeads.length && (
                <div className="kanban-tasks-type course-1">
                  <div className="card bg-primary bg-soft m-0">
                    <div className="card-header bg-primary text-white">
                      <div className="card-title">Pending</div>
                    </div>
                    <div className="card-body h-800 p-3">
                      <div id="course-1">
                        <div id="lead-column-2" className="task-list">
                          {leads.pendingLeads.map((lead, index) => (
                            <div className="card task-box">
                              <div className="card-body p-0">
                                <div className="p-2 kanban-board-head">
                                  <div className="d-flex text-primary justify-content-between mb-2 fs-12 fw-semibold">
                                    <div>
                                      <i className="mdi mdi-star me-2 text-primary" />
                                      {lead.coreTradeRegNo}
                                    </div>
                                    <div className="dropdown">
                                      <a
                                        className="fs-15 cursor-pointer"
                                        onClick={() =>
                                          showLeadMenu(`pendingLead${index}`)
                                        }
                                      >
                                        {" "}
                                        <i className="mdi mdi-dots-vertical" />{" "}
                                      </a>
                                      <ul
                                        style={{ visibility: "hidden" }}
                                        id={`pendingLead${index}`}
                                        className="dropdown-menu dropdown-menu-end"
                                      >
                                        <li>
                                          <a
                                            className="dropdown-item"
                                            onClick={() =>
                                              showLeadModal(lead, "view")
                                            }
                                          >
                                            <i className="mdi mdi-eye me-1 align-middle d-inline-block text-warning" />
                                            View
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            className="dropdown-item"
                                            onClick={() => showLeadModal(lead)}
                                          >
                                            <i className="mdi mdi-pencil me-1 align-middle d-inline-block text-primary" />
                                            Edit
                                          </a>
                                        </li>
                                        <li>
                                          <a className="dropdown-item">
                                            <i className="bx bx-money me-1 align-middle d-inline-block text-info" />
                                            Payment
                                          </a>
                                        </li>
                                        <li>
                                          <a className="dropdown-item">
                                            <i className="mdi mdi-check-circle me-1 align-middle d-inline-block text-success" />
                                            Confirm
                                          </a>
                                        </li>
                                        <li>
                                          <a className="dropdown-item">
                                            <i className="mdi mdi-trash-can me-1 align-middle d-inline-block text-danger" />
                                            Delete
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="kanban-content">
                                    <h6 className="mb-2 fs-12">
                                      <span className="fw-bold">
                                        Company Name
                                      </span>{" "}
                                      : {lead.companyName}
                                    </h6>
                                    <h6 className="mb-2 fs-12">
                                      <span className="fw-bold">
                                        Contact Person
                                      </span>{" "}
                                      : {lead.contactPerson}
                                    </h6>
                                    <h6 className="mb-0 fs-12">
                                      <span className="fw-bold">
                                        Participant Name
                                      </span>{" "}
                                      : {lead.participantName}
                                    </h6>
                                  </div>
                                </div>
                                <div className="p-2 border-top border-block-start-dashed">
                                  <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                      <a className="me-2 text-primary">
                                        <span className="me-1">
                                          <i className="mdi mdi-briefcase align-middle fw-normal" />
                                        </span>
                                        <span className="fw-semibold fs-12">
                                          {lead.tradeType}
                                        </span>{" "}
                                      </a>
                                    </div>
                                    <div>
                                      <a className="me-2 text-primary">
                                        <span className="me-1">
                                          <i className="bx bx-phone align-middle fw-normal" />
                                        </span>
                                        <span className="fw-semibold fs-12">
                                          {lead.contactPersonMobile}
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {leads.assignCourseLeads.length && (
                <div className="kanban-tasks-type course-2">
                  <div className="card bg-warning bg-soft m-0 text-white">
                    <div className="card-header bg-warning">
                      <div className="card-title">Assign</div>
                    </div>
                    <div className="card-body h-800 p-3">
                      <div id="course-2">
                        <div id="lead-column-3" className="task-list">
                          {leads.assignCourseLeads.map((lead, index) => (
                            <div className="card task-box">
                              <div className="card-body p-0">
                                <div className="p-2 kanban-board-head">
                                  <div className="d-flex text-primary justify-content-between mb-2 fs-12 fw-semibold">
                                    <div>
                                      <i className="mdi mdi-star me-2 text-primary" />
                                      {lead.coreTradeRegNo}
                                    </div>
                                    <div
                                      className="dropdown"
                                      onClick={() =>
                                        showLeadMenu(`assignCourseLead${index}`)
                                      }
                                    >
                                      <a className="fs-15 cursor-pointer">
                                        {" "}
                                        <i className="mdi mdi-dots-vertical" />{" "}
                                      </a>
                                      <ul
                                        style={{ visibility: "hidden" }}
                                        className="dropdown-menu dropdown-menu-end"
                                        id={`assignCourseLead${index}`}
                                      >
                                        <li>
                                          <a
                                            className="dropdown-item"
                                            onClick={() =>
                                              showLeadModal(lead, "view")
                                            }
                                          >
                                            <i className="mdi mdi-eye me-1 align-middle d-inline-block text-warning" />
                                            View
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            className="dropdown-item"
                                            onClick={() => showLeadModal(lead)}
                                          >
                                            <i className="mdi mdi-pencil me-1 align-middle d-inline-block text-primary" />
                                            Edit
                                          </a>
                                        </li>
                                        <li>
                                          <a className="dropdown-item">
                                            <i className="bx bx-money me-1 align-middle d-inline-block text-info" />
                                            Payment
                                          </a>
                                        </li>
                                        <li>
                                          <a className="dropdown-item">
                                            <i className="mdi mdi-check-circle me-1 align-middle d-inline-block text-success" />
                                            Confirm
                                          </a>
                                        </li>
                                        <li>
                                          <a className="dropdown-item">
                                            <i className="mdi mdi-trash-can me-1 align-middle d-inline-block text-danger" />
                                            Delete
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="kanban-content">
                                    <h6 className="mb-2 fs-12">
                                      <span className="fw-bold">
                                        Company Name
                                      </span>{" "}
                                      : {lead.companyName}
                                    </h6>
                                    <h6 className="mb-2 fs-12">
                                      <span className="fw-bold">
                                        Contact Person
                                      </span>{" "}
                                      : {lead.contactPerson}
                                    </h6>
                                    <h6 className="mb-0 fs-12">
                                      <span className="fw-bold">
                                        Participant Name
                                      </span>{" "}
                                      : {lead.participantName}
                                    </h6>
                                  </div>
                                </div>
                                <div className="p-2 border-top border-block-start-dashed">
                                  <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                      <a className="me-2 text-primary">
                                        <span className="me-1">
                                          <i className="mdi mdi-briefcase align-middle fw-normal" />
                                        </span>
                                        <span className="fw-semibold fs-12">
                                          {lead.tradeType}
                                        </span>{" "}
                                      </a>
                                    </div>
                                    <div>
                                      <a className="me-2 text-primary">
                                        <span className="me-1">
                                          <i className="bx bx-phone align-middle fw-normal" />
                                        </span>
                                        <span className="fw-semibold fs-12">
                                          {lead.contactPersonMobile}
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <footer className="footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">© Tonga.</div>
            </div>
          </div>
        </footer>
      </div>
      {newLeadModal && (
        <AddNewLeadModel
          setIsOpen={setNewLeadModal}
          isOpen={newLeadModal}
          leadData={leadData}
          callback={(e, type) => updateLeads(e, type)}
          viewLead={viewLead}
          registrationTypes={registrationTypes}
          tradeTypes={tradeTypes}
        />
      )}
      {deleteLeadModal && (
        <DeleteModel
          setIsOpen={setDeleteLeadModal}
          isOpen={deleteLeadModal}
          message={`do you really want to delete this Lead`}
          // callback={(e) => deleteLead(e)}
          deleteHeader={"Lead"}
          data={leadData}
        />
      )}
    </div>
  );
};
