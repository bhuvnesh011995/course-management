import { useEffect, useState } from "react";
import { AddNewLeadModel } from "./addNewLeadModel";
import { DeleteModel } from "../../common-components/models/DeleteModal";
import { Link } from "react-router-dom";
import { Dropdown } from "../../common-components/common-dropDown";
import { toast } from "react-toastify";
import { useAuth } from "../../context/authContext";

export const LeadGrid = () => {
  const { user, NewAxiosInstance } = useAuth();
  const filterTypes = {
    registrationType: "",
    tradeType: "",
    textSearch: "",
  };

  const leadKeys = {
    allLeads: [],
    newLeads: [],
    pendingLeads: [],
    assignCourseLeads: [],
    completedLeads: [],
  };

  const [selectedFilter, setSelectedFilter] = useState(filterTypes);

  const [newLeadModal, setNewLeadModal] = useState(false);
  const [leadData, setLeadData] = useState(null);
  const [deleteLeadModal, setDeleteLeadModal] = useState(false);
  const [viewLead, setViewLead] = useState(false);
  const [tradeTypes, setTradeTypes] = useState([]);
  const [registrationTypes, setRegistrationTypes] = useState([]);

  const [leads, setLeads] = useState(leadKeys);

  useEffect(() => {
    getAllLeads();
    getRegistrationTypes();
    getTradeTypes();
  }, [selectedFilter]);

  const showLeadModal = (data, type) => {
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
      const { data } = await NewAxiosInstance.get("/leads/getAllLeads", {
        params: selectedFilter,
      });
      const leadData = {
        allLeads: [],
        newLeads: [],
        pendingLeads: [],
        assignCourseLeads: [],
        completedLeads: [],
      };
      leadData.allLeads = data.leads;
      data.leads.filter((e) => {
        if (e.status != "pending" && e.status == "new") {
          leadData.newLeads.push(e);
        } else if (e.status != "assign" && e.status == "pending") {
          leadData.pendingLeads.push(e);
        } else if (e.status != "confirmed" && e.status == "assign") {
          leadData.assignCourseLeads.push(e);
        } else if (e.status == "confirmed") {
          leadData.completedLeads.push(e);
        }
      });

      setLeads({ ...leadData });
    } catch (err) {
      console.error(err);
    }
  };

  const getTradeTypes = async () => {
    try {
      const { data } = await NewAxiosInstance.get("/trades/getTradeTypes");
      setTradeTypes(data.allTradeTypes);
    } catch (err) {
      console.error(err);
    }
  };

  const getRegistrationTypes = async () => {
    try {
      const { data } = await NewAxiosInstance.get(
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
                pendingLeads: [...leads.pendingLeads, data],
              }));
            } else if (type == "confirm") {
              setLeads((old) => ({
                ...old,
                completedLeads: [...leads.completedLeads, data],
              }));
            } else if (type == "getPayment") {
              setLeads((old) => ({
                ...old,
                assignCourseLeads: [...leads.assignCourseLeads, data],
              }));
            }
          } else {
            leads[key][index] = data;
            setLeads((old) => ({ ...leads }));
          }
          return;
        }
      });
    });
    if (!foundLead) {
      leads.newLeads.push(data);
    }
  };

  const deleteLead = async (leadData) => {
    try {
      toast.dismiss();
      const { data } = await NewAxiosInstance.delete("/leads/deleteLead", {
        params: leadData,
      });
      toast.success("lead deleted");
      Object.keys(leads).map((key) => {
        leads[key].filter((lead, index) => {
          if (lead._id === leadData._id) {
            leads[key].splice(index, 1);
            return;
          }
        });
      });
      setLeads((old) => ({ ...leads }));
    } catch (err) {
      toast.error("error occured");
      console.error(err);
    }
  };

  const clearFilters = () => {
    setSelectedFilter((old) => ({ ...filterTypes }));
  };

  return (
    <div id="layout-wrapper">
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
                            onChange={({ target }) => {
                              setSelectedFilter((old) => ({
                                ...old,
                                tradeType: target.value,
                              }));
                            }}
                            value={selectedFilter.tradeType}
                          >
                            <option value="">Select Trade Type</option>
                            {tradeTypes.map((type) => (
                              <option key={type._id} value={type._id}>
                                {type?.tradeType}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="col-xl-4">
                          <select
                            className="form-select"
                            onChange={({ target }) => {
                              setSelectedFilter((old) => ({
                                ...old,
                                registrationType: target.value,
                              }));
                            }}
                            value={selectedFilter.registrationType}
                          >
                            <option value="">Select Registration Type</option>
                            {registrationTypes.map((type) => (
                              <option key={type._id} value={type._id}>
                                {type?.registrationName}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="col-xl-4">
                          <div className="d-flex" role="search">
                            <input
                              className="form-control me-2"
                              type="search"
                              placeholder="Search"
                              onChange={({ target }) => {
                                setSelectedFilter((old) => ({
                                  ...old,
                                  textSearch: target.value,
                                }));
                              }}
                              value={selectedFilter.textSearch}
                            />{" "}
                            <button
                              onClick={clearFilters}
                              className=" btn btn-light"
                              type="submit"
                              style={{ width: "200px" }}
                            >
                              Clear Filters
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="btns">
                        {user.userData?.roleData?.lead?.create && (
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
                        )}
                        <Link
                          to={"/lead"}
                          className="btn btn-primary me-2"
                          style={{
                            height: "20px",
                            padding: "0 0.5rem",
                            fontSize: "0.7rem",
                          }}
                        >
                          <i className="mdi mdi-view-list fw-semibold align-middle" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="kanban-board p-3">
              {leads.newLeads.length ? (
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
                                    <Dropdown.Container
                                      className="bg-transparent "
                                      closeOnClick
                                      toggle={
                                        <>
                                          <span className="  mdi mdi-dots-vertical"></span>
                                        </>
                                      }
                                      menuClassName="dropdown-menu "
                                    >
                                      <Dropdown.Item
                                        onClick={() => {
                                          showLeadModal(lead, "view");
                                        }}
                                      >
                                        <i className="mdi mdi-eye me-1 align-middle d-inline-block text-warning" />
                                        View
                                      </Dropdown.Item>
                                      {user.userData?.roleData?.lead?.write && (
                                        <Dropdown.Item
                                          onClick={() => showLeadModal(lead)}
                                        >
                                          <i className="mdi mdi-pencil me-1 align-middle d-inline-block text-primary" />
                                          Edit
                                        </Dropdown.Item>
                                      )}
                                      {lead?.getPayment && (
                                        <Dropdown.Item>
                                          <span className="">
                                            <i className="bx bx-money me-1 align-middle d-inline-block text-info" />
                                            Payment
                                          </span>
                                        </Dropdown.Item>
                                      )}
                                      {lead?.confirmed && (
                                        <Dropdown.Item>
                                          <span className="">
                                            <i className="mdi mdi-check-circle me-1 align-middle d-inline-block text-success" />
                                            Confirm
                                          </span>
                                        </Dropdown.Item>
                                      )}
                                      {user.userData?.roleData?.lead
                                        ?.delete && (
                                        <Dropdown.Item
                                          onClick={() => {
                                            showLeadModal(lead, "delete");
                                          }}
                                        >
                                          <span className="">
                                            <i className="mdi mdi-trash-can me-1 align-middle d-inline-block text-danger" />
                                            Delete
                                          </span>
                                        </Dropdown.Item>
                                      )}
                                    </Dropdown.Container>
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
                                      <span className="me-2 text-primary">
                                        <span className="me-1">
                                          <i className="mdi mdi-briefcase align-middle fw-normal" />
                                        </span>
                                        <span className="fw-semibold fs-12">
                                          {lead.tradeType}
                                        </span>{" "}
                                      </span>
                                    </div>
                                    <div>
                                      <span className="me-2 text-primary">
                                        <span className="me-1">
                                          <i className="bx bx-phone align-middle fw-normal" />
                                        </span>
                                        <span className="fw-semibold fs-12">
                                          {lead.contactPersonMobile}
                                        </span>
                                      </span>
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
              ) : (
                <div></div>
              )}
              {leads.pendingLeads.length ? (
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
                                    <Dropdown.Container
                                      className="bg-transparent"
                                      closeOnClick
                                      toggle={
                                        <>
                                          <span className="  mdi mdi-dots-vertical"></span>
                                        </>
                                      }
                                      menuClassName="dropdown-menu dropdown-menu-end"
                                    >
                                      <Dropdown.Item
                                        onClick={() => {
                                          showLeadModal(lead, "view");
                                        }}
                                      >
                                        <i className="mdi mdi-eye me-1 align-middle d-inline-block text-warning" />
                                        View
                                      </Dropdown.Item>
                                      {user.userData?.roleData?.lead?.write && (
                                        <Dropdown.Item
                                          onClick={() => showLeadModal(lead)}
                                        >
                                          <i className="mdi mdi-pencil me-1 align-middle d-inline-block text-primary" />
                                          Edit
                                        </Dropdown.Item>
                                      )}
                                      {lead?.getPayment && (
                                        <Dropdown.Item>
                                          <span className="">
                                            <i className="bx bx-money me-1 align-middle d-inline-block text-info" />
                                            Payment
                                          </span>
                                        </Dropdown.Item>
                                      )}
                                      {lead?.confirmed && (
                                        <Dropdown.Item>
                                          <span className="">
                                            <i className="mdi mdi-check-circle me-1 align-middle d-inline-block text-success" />
                                            Confirm
                                          </span>
                                        </Dropdown.Item>
                                      )}
                                      {user.userData?.roleData?.lead
                                        ?.delete && (
                                        <Dropdown.Item
                                          onClick={() => {
                                            showLeadModal(lead, "delete");
                                          }}
                                        >
                                          <span className="">
                                            <i className="mdi mdi-trash-can me-1 align-middle d-inline-block text-danger" />
                                            Delete
                                          </span>
                                        </Dropdown.Item>
                                      )}
                                    </Dropdown.Container>
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
                                      <span className="me-2 text-primary">
                                        <span className="me-1">
                                          <i className="mdi mdi-briefcase align-middle fw-normal" />
                                        </span>
                                        <span className="fw-semibold fs-12">
                                          {lead.tradeType}
                                        </span>{" "}
                                      </span>
                                    </div>
                                    <div>
                                      <span className="me-2 text-primary">
                                        <span className="me-1">
                                          <i className="bx bx-phone align-middle fw-normal" />
                                        </span>
                                        <span className="fw-semibold fs-12">
                                          {lead.contactPersonMobile}
                                        </span>
                                      </span>
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
              ) : (
                <div></div>
              )}
              {leads.assignCourseLeads.length ? (
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
                                    <Dropdown.Container
                                      className="bg-transparent"
                                      closeOnClick
                                      toggle={
                                        <>
                                          <span className="  mdi mdi-dots-vertical"></span>
                                        </>
                                      }
                                      menuClassName="dropdown-menu dropdown-menu-end"
                                    >
                                      <Dropdown.Item
                                        onClick={() => {
                                          showLeadModal(lead, "view");
                                        }}
                                      >
                                        <i className="mdi mdi-eye me-1 align-middle d-inline-block text-warning" />
                                        View
                                      </Dropdown.Item>
                                      {user.userData?.roleData?.lead?.write && (
                                        <Dropdown.Item
                                          onClick={() => showLeadModal(lead)}
                                        >
                                          <i className="mdi mdi-pencil me-1 align-middle d-inline-block text-primary" />
                                          Edit
                                        </Dropdown.Item>
                                      )}
                                      {lead?.getPayment && (
                                        <Dropdown.Item>
                                          <span className="">
                                            <i className="bx bx-money me-1 align-middle d-inline-block text-info" />
                                            Payment
                                          </span>
                                        </Dropdown.Item>
                                      )}

                                      {lead?.confirmed && (
                                        <Dropdown.Item>
                                          <span className="">
                                            <i className="mdi mdi-check-circle me-1 align-middle d-inline-block text-success" />
                                            Confirm
                                          </span>
                                        </Dropdown.Item>
                                      )}
                                      {user.userData?.roleData?.lead
                                        ?.delete && (
                                        <Dropdown.Item
                                          onClick={() => {
                                            showLeadModal(lead, "delete");
                                          }}
                                        >
                                          <span className="">
                                            <i className="mdi mdi-trash-can me-1 align-middle d-inline-block text-danger" />
                                            Delete
                                          </span>
                                        </Dropdown.Item>
                                      )}
                                    </Dropdown.Container>
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
                                      <span className="me-2 text-primary">
                                        <span className="me-1">
                                          <i className="mdi mdi-briefcase align-middle fw-normal" />
                                        </span>
                                        <span className="fw-semibold fs-12">
                                          {lead.tradeType}
                                        </span>{" "}
                                      </span>
                                    </div>
                                    <div>
                                      <span className="me-2 text-primary">
                                        <span className="me-1">
                                          <i className="bx bx-phone align-middle fw-normal" />
                                        </span>
                                        <span className="fw-semibold fs-12">
                                          {lead.contactPersonMobile}
                                        </span>
                                      </span>
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
              ) : (
                <div></div>
              )}
              {leads.completedLeads.length ? (
                <div className="kanban-tasks-type course-2">
                  <div className="card bg-info bg-soft m-0 text-white">
                    <div className="card-header bg-info">
                      <div className="card-title">Completed</div>
                    </div>
                    <div className="card-body h-800 p-3">
                      <div id="course-2">
                        <div id="lead-column-3" className="task-list">
                          {leads.completedLeads.map((lead, index) => (
                            <div className="card task-box">
                              <div className="card-body p-0">
                                <div className="p-2 kanban-board-head">
                                  <div className="d-flex text-primary justify-content-between mb-2 fs-12 fw-semibold">
                                    <div>
                                      <i className="mdi mdi-star me-2 text-primary" />
                                      {lead.coreTradeRegNo}
                                    </div>

                                    <Dropdown.Container
                                      className="bg-transparent"
                                      closeOnClick
                                      toggle={
                                        <>
                                          <span className="  mdi mdi-dots-vertical"></span>
                                        </>
                                      }
                                      menuClassName="dropdown-menu dropdown-menu-end"
                                    >
                                      <Dropdown.Item
                                        onClick={() => {
                                          showLeadModal(lead, "view");
                                        }}
                                      >
                                        <i className="mdi mdi-eye me-1 align-middle d-inline-block text-warning" />
                                        View
                                      </Dropdown.Item>
                                      {user.userData?.roleData?.lead?.write && (
                                        <Dropdown.Item
                                          onClick={() => showLeadModal(lead)}
                                        >
                                          <i className="mdi mdi-pencil me-1 align-middle d-inline-block text-primary" />
                                          Edit
                                        </Dropdown.Item>
                                      )}
                                      {lead?.getPayment && (
                                        <Dropdown.Item>
                                          <i className="bx bx-money me-1 align-middle d-inline-block text-info" />
                                          Payment
                                        </Dropdown.Item>
                                      )}
                                      {lead?.confirmed && (
                                        <Dropdown.Item>
                                          <i className="mdi mdi-check-circle me-1 align-middle d-inline-block text-success" />
                                          Confirm
                                        </Dropdown.Item>
                                      )}
                                      {user.userData?.roleData?.lead
                                        ?.delete && (
                                        <Dropdown.Item
                                          onClick={() => {
                                            showLeadModal(lead, "delete");
                                          }}
                                        >
                                          <i className="mdi mdi-trash-can me-1 align-middle d-inline-block text-danger" />
                                          Delete
                                        </Dropdown.Item>
                                      )}
                                    </Dropdown.Container>
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
                                      <span className="me-2 text-primary">
                                        <span className="me-1">
                                          <i className="mdi mdi-briefcase align-middle fw-normal" />
                                        </span>
                                        <span className="fw-semibold fs-12">
                                          {lead.tradeType}
                                        </span>{" "}
                                      </span>
                                    </div>
                                    <div>
                                      <span className="me-2 text-primary">
                                        <span className="me-1">
                                          <i className="bx bx-phone align-middle fw-normal" />
                                        </span>
                                        <span className="fw-semibold fs-12">
                                          {lead.contactPersonMobile}
                                        </span>
                                      </span>
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
              ) : (
                <div></div>
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
          callback={(e) => deleteLead(e)}
          deleteHeader={"Lead"}
          data={leadData}
        />
      )}
    </div>
  );
};
