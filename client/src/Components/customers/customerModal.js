import { Modal } from "react-bootstrap";
import { filePath } from "../../common-components/useCommonUsableFunctions";
import { useState } from "react";
import { AxiosInstance } from "../../common-components/axiosInstance";
import { CommonDataTable } from "../../common-components/CommonDataTable";
import { accountHistoryHeaders } from "../../Constants/table.constants";

export const ViewCustomerModal = ({
  setIsOpen,
  isOpen,
  leadData,
  registrationData,
}) => {
  const [detailTab, setDetailTab] = useState("customer");
  const [accountHistory, setAccountHistory] = useState([]);
  const handleclose = () => {
    setIsOpen(false);
  };
  const openFile = (fileName) => {
    const selectedFilePath = leadData.fileLocations[fileName];

    const leadUrl = filePath(selectedFilePath);
    window.open(leadUrl);
  };

  const getAccountHistory = async () => {
    try {
      setDetailTab("account");
      const { data } = await AxiosInstance.get("/leads/accountHistory", {
        params: leadData,
      });
      setAccountHistory(data);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <Modal onHide={handleclose} show={isOpen} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>
            <h5 className="modal-title add-customer-title">View customer</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row text-left">
            <div id="smartwizard" style={{ border: "none", height: "auto" }}>
              <ul className="nav">
                <li
                  className="nav-item"
                  onClick={() => setDetailTab("customer")}
                >
                  <a className="nav-link" href="#step-11">
                    <div className="num">1</div>
                    customer Details
                  </a>
                </li>
                <li className="nav-item" onClick={() => getAccountHistory()}>
                  <a className="nav-link" href="#step-22">
                    <span className="num">2</span>
                    Account History
                  </a>
                </li>
              </ul>
              {detailTab == "customer" && (
                <div className="row">
                  <div className="col-md-12">
                    <div
                      className="d-flex"
                      style={{
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <h5 className="modal-title">customer Details</h5>
                    </div>
                    <div className="card border border-primary mt-3">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-3">
                            <label className="mb-0">
                              {" "}
                              <b>Company Name</b>
                            </label>
                            <p className="m-0">{leadData?.companyName}</p>
                          </div>
                          <div className="col-md-3">
                            <label className="mb-0">
                              {" "}
                              <b>Company UEN No.</b>
                            </label>
                            <p className="m-0">{leadData?.companyUEN}</p>
                          </div>
                          <div className="col-md-3">
                            <label className="mb-0">
                              <b>Company Address</b>
                            </label>
                            <p className="m-0">{leadData?.companyAddress}</p>
                          </div>
                          <div className="col-md-3">
                            <label className="mb-0">
                              {" "}
                              <b>Postal Code</b>
                            </label>
                            <p className="m-0">{leadData?.postalCode}</p>
                          </div>
                        </div>
                        <div className="row mt-3">
                          <div className="col-md-3">
                            <label className="mb-0">
                              {" "}
                              <b>Contact Person</b>
                            </label>
                            <p className="m-0">{leadData?.contactPerson}</p>
                          </div>
                          <div className="col-md-3">
                            <label className="mb-0">
                              {" "}
                              <b>Contact Person's Mobile</b>
                            </label>
                            <p className="m-0">
                              {leadData?.contactPersonMobile}
                            </p>
                          </div>
                          <div className="col-md-3">
                            <label className="mb-0">
                              {" "}
                              <b>Contact Person's Email</b>
                            </label>
                            <p className="m-0">
                              {leadData?.contactPersonEmail}
                            </p>
                          </div>
                          <div className="col-md-3">
                            <label className="mb-0">
                              {" "}
                              <b>Office Telephone No.</b>
                            </label>
                            <p className="m-0">{leadData?.officeTelephone}</p>
                          </div>
                        </div>
                        <div className="row mt-3">
                          <div className="col-md-3">
                            <label className="mb-0">
                              <b>Office Fax No.</b>
                            </label>
                            <p className="m-0">{leadData?.officeFax}</p>
                          </div>
                          <div className="col-md-3">
                            <label className="mb-0">
                              <b>Name of Participant</b>{" "}
                            </label>
                            <p className="m-0">{leadData?.participantName}</p>
                          </div>
                          <div className="col-md-3">
                            <label className="mb-0">
                              {" "}
                              <b>Participant's Mobile</b>
                            </label>
                            <p className="m-0">{leadData?.participantMobile}</p>
                          </div>
                          {registrationData[0].registrationCode == "AMN" ? (
                            <div className="row">
                              <div className="col-md-3">
                                <label className="mb-0">
                                  {" "}
                                  <b>MYE No.</b>
                                </label>
                                <p className="m-0">{leadData?.myeNo}</p>
                              </div>
                              <div className="col-md-3">
                                <label className="mb-0">
                                  {" "}
                                  <b>Pa Reference No.</b>
                                </label>
                                <p className="m-0">{leadData?.paReferenceNo}</p>
                              </div>
                              <div className="col-md-3">
                                <label className="mb-0">
                                  {" "}
                                  <b>Participant's Ic No</b>
                                </label>
                                <p className="m-0">
                                  {leadData?.participantIcNo}
                                </p>
                              </div>
                              <div className="col-md-3">
                                <label className="mb-0">
                                  {" "}
                                  <b>Date Of Birth</b>
                                </label>
                                <p className="m-0">{leadData?.DOB}</p>
                              </div>
                              <div className="col-md-3">
                                <label className="mb-0">
                                  {" "}
                                  <b>Nationality</b>
                                </label>
                                <p className="m-0">{leadData?.nationality}</p>
                              </div>
                              <div className="col-md-3">
                                <label className="mb-0">
                                  {" "}
                                  <b>Educational / Vocational Level</b>
                                </label>
                                <p className="m-0">
                                  {leadData?.educationalLevel}
                                </p>
                              </div>
                            </div>
                          ) : (
                            <div className="row">
                              <div className="col-md-3">
                                <label className="mb-0">
                                  {" "}
                                  <b>Participant's NRIC / FIN No.</b>
                                </label>
                                <p className="m-0">
                                  {leadData?.participantNRIC}
                                </p>
                              </div>
                              <div className="col-md-3">
                                <label className="mb-0">
                                  <b>Alternate Mobile Number</b>{" "}
                                </label>
                                <p className="m-0">
                                  {leadData?.alternateMobile}
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="row mt-3">
                          <div className="col-md-3">
                            <label className="mb-0">
                              <b>Trade Type</b>
                            </label>
                            <p className="m-0">{leadData?.tradeType}</p>
                          </div>
                          {registrationData[0].registrationCode == "CRW" && (
                            <div className="col-md-3">
                              <label className="mb-0">
                                <b>Trade Level</b>
                              </label>
                              <p className="m-0">
                                {
                                  registrationData[0].tradeLevels.filter(
                                    (e) => e._id == leadData?.tradeLevel
                                  )[0].tradeLevel
                                }
                              </p>
                            </div>
                          )}
                          <div className="col-md-6">
                            <label className="mb-0">
                              <b>
                                CoreTrade / Multi-skilling/Direct R1
                                Registration No
                              </b>
                            </label>
                            <p className="m-0">{leadData?.coreTradeRegNo}</p>
                          </div>
                        </div>
                        <div className="row mt-3">
                          {registrationData[0].registrationCode != "SK" && (
                            <div className="col-md-3">
                              <label className="mb-0">
                                <b>Valid BCA Acknowledgement Notice</b>{" "}
                              </label>
                              <p className="m-0 mt-2">
                                <a
                                  className="btn btn-outline-primary"
                                  onClick={() => openFile("notice")}
                                >
                                  <i className="mdi mdi-eye" />
                                </a>
                                {/* <a className="btn btn-outline-success" href="#">
                              <i className="mdi mdi-download" />
                            </a> */}
                              </p>
                            </div>
                          )}
                          <div className="col-md-3">
                            <label className="mb-0">
                              <b>Valid copy of NRIC / Work document</b>{" "}
                            </label>
                            <p className="m-0 mt-2">
                              <a
                                className="btn btn-outline-primary"
                                onClick={() => openFile("nric")}
                              >
                                <i className="mdi mdi-eye" />
                              </a>
                              {/* <a className="btn btn-outline-success" href="#">
                              <i className="mdi mdi-download" />
                            </a> */}
                            </p>
                          </div>
                          {registrationData[0].registrationCode != "CRW" && (
                            <div className="col-md-3">
                              <label className="mb-0">
                                <b>Valid Copy Of Passport</b>{" "}
                              </label>
                              <p className="m-0 mt-2">
                                <a
                                  className="btn btn-outline-primary"
                                  onClick={() => openFile("passportCopy")}
                                >
                                  <i className="mdi mdi-eye" />
                                </a>
                                {/* <a className="btn btn-outline-success" href="#">
                              <i className="mdi mdi-download" />
                            </a> */}
                              </p>
                            </div>
                          )}
                          {registrationData[0].registrationCode != "CRW" && (
                            <div className="col-md-3">
                              <label className="mb-0">
                                <b>Valid Copy Of MOM Employment Details</b>{" "}
                              </label>
                              <p className="m-0 mt-2">
                                <a
                                  className="btn btn-outline-primary"
                                  onClick={() => openFile("MOME")}
                                >
                                  <i className="mdi mdi-eye" />
                                </a>
                                {/* <a className="btn btn-outline-success" href="#">
                              <i className="mdi mdi-download" />
                            </a> */}
                              </p>
                            </div>
                          )}
                          {registrationData[0].registrationCode == "MSG" && (
                            <div className="col-md-3">
                              <label className="mb-0">
                                <b>
                                  1st Skill Evaluation Certificate / BCA Skills
                                  Qualification Statement
                                </b>{" "}
                              </label>
                              <p className="m-0 mt-2">
                                <a
                                  className="btn btn-outline-primary"
                                  onClick={() => openFile("skill")}
                                >
                                  <i className="mdi mdi-eye" />
                                </a>
                                {/* <a className="btn btn-outline-success" href="#">
                              <i className="mdi mdi-download" />
                            </a> */}
                              </p>
                            </div>
                          )}
                          {registrationData[0].registrationCode == "AMN" && (
                            <div className="row">
                              <div className="col-md-3">
                                <label className="mb-0">
                                  <b>Copy Of PA Quota（PA复印件）</b>{" "}
                                </label>
                                <p className="m-0 mt-2">
                                  <a
                                    className="btn btn-outline-primary"
                                    onClick={() => openFile("pa")}
                                  >
                                    <i className="mdi mdi-eye" />
                                  </a>
                                  {/* <a className="btn btn-outline-success" href="#">
                              <i className="mdi mdi-download" />
                            </a> */}
                                </p>
                              </div>
                              <div className="col-md-3">
                                <label className="mb-0">
                                  <b>Copy Of Worker's IC 员工的身份证复印件</b>{" "}
                                </label>
                                <p className="m-0 mt-2">
                                  <a
                                    className="btn btn-outline-primary"
                                    onClick={() => openFile("workersIc")}
                                  >
                                    <i className="mdi mdi-eye" />
                                  </a>
                                  {/* <a className="btn btn-outline-success" href="#">
                              <i className="mdi mdi-download" />
                            </a> */}
                                </p>
                              </div>
                              <div className="col-md-3">
                                <label className="mb-0">
                                  <b>
                                    Copy Of Worker's Passport (if available)
                                    员工的护照复印件 - 如有请提供
                                  </b>{" "}
                                </label>
                                <p className="m-0 mt-2">
                                  <a
                                    className="btn btn-outline-primary"
                                    onClick={() => openFile("workersPassport")}
                                  >
                                    <i className="mdi mdi-eye" />
                                  </a>
                                  {/* <a className="btn btn-outline-success" href="#">
                              <i className="mdi mdi-download" />
                            </a> */}
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {detailTab == "account" && (
                <div className="tab-content mt-3">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="card">
                        <div className="card-header justify-content-between">
                          <div className="card-title">Account History List</div>
                        </div>
                        <div className="card-body">
                          <div className="table-responsive">
                            <CommonDataTable
                              tableHeaders={accountHistoryHeaders}
                              data={accountHistory}
                            />
                            {/* <table
                              id="datatable-buttons"
                              className="table display table-bordered dt-responsive nowrap w-100"
                            >
                              <thead>
                                <tr>
                                  <th>Course</th>
                                  <th>class</th>
                                  <th>Amount</th>
                                  <th>Purchase Date</th>
                                  <th>Payment Status</th>
                                  <th>Invoices</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Course 1</td>
                                  <td>Class A</td>
                                  <td>$ 99</td>
                                  <td>22 may 2022</td>
                                  <td>
                                    <span className="badge badge-soft-danger">
                                      Unpaid
                                    </span>
                                  </td>
                                  <td>
                                    <a
                                      aria-label="anchor"
                                      href="javascript:void(0);"
                                      className="btn btn-icon btn-sm btn-warning rounded-pill"
                                    >
                                      <i className="mdi mdi-eye" />
                                    </a>
                                    <a
                                      aria-label="anchor"
                                      href="javascript:void(0);"
                                      className="btn btn-icon btn-sm btn-success rounded-pill"
                                    >
                                      <i className="mdi mdi-download" />
                                    </a>
                                  </td>
                                  <td>
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
                            </table> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className="progress">
                <div
                  className={`progress-bar ${
                    detailTab == "customer"
                      ? "w-50"
                      : detailTab == "account" && "w-100"
                  } `}
                  role="progressbar"
                  aria-valuenow={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};
