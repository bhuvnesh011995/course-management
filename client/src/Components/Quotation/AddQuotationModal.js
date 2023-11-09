import { useState } from "react";
import { Modal, Tab, TabContainer, Tabs } from "react-bootstrap";

export default function AddQuotationModal({show,setShow}) {

let [event,setEvent] = useState("customer")
function handleNext(){
    if(event==="customer") {
        setEvent("course")
    }
    else if(event==='course') {
        setEvent("address")
    }
else if(event==='address') setEvent("preview")
}

function handlePrevious(){
    if(event==="preview") {
        setEvent("address")
    }
    else if(event==='address') {
        setEvent("course")
    }
    else if(event==='course') {
        setEvent("customer")
    }
}


    return(
        <Modal show={show} onHide={()=>setShow(false)}
        className="modal-dialog-scrollable"
        size="xl"
        >
            <Modal.Header closeButton>
          <Modal.Title>
            <h5 className="modal-title">Add New Quotation</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form className="row text-left">
            <div style={{ border: "none", height: "auto" }}>
            <Tabs
            onSelect={eventKey=>setEvent(eventKey)}
      activeKey={event}
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab className="mt-3" style={{ border: "none" }} eventKey="customer" title="1 Customer">
        
            
            <div className="row">
                          <div className="col-md-3">
                            <div className="mb-3">
                              <label className="form-label">Search By</label>
                              <div className="input-icon mb-3">
                                <input
                                  type="text"
                                  defaultValue
                                  className="form-control"
                                  placeholder="Search…"
                                />
                                <span className="input-icon-addon">
                                  {/* Download SVG icon from http://tabler-icons.io/i/search */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon"
                                    width={20}
                                    height={20}
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <path
                                      stroke="none"
                                      d="M0 0h24v24H0z"
                                      fill="none"
                                    />
                                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                                    <path d="M21 21l-6 -6" />
                                  </svg>
                                </span>
                              </div>
                            </div>
                            <div className="mb-3">
                              <div
                                className="card border border-primary"
                                style={{ cursor: "pointer" }}
                              >
                                <div className="card-body">
                                  <div className="my-auto">
                                    <label
                                      className="mb-0 text-Primary fw-bold d-flex align-items-center "
                                      style={{ fontSize: "16px" }}
                                    >
                                      <i className="bx bxs-graduation me-2 fs-4 text-primary" />
                                      Will Smith
                                    </label>
                                    <p className="m-0 ps-4">
                                      Tel - +91 9825804569
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-9">
                            <div
                              className="d-flex"
                              style={{
                                justifyContent: "space-between",
                                alignItems: "center",
                              }}
                            >
                              <h5 className="modal-title">Customer Details</h5>
                            </div>
                            <div className="card border border-primary mt-3">
                              <div className="card-body">
                                <div className="row">
                                  <div className="col-md-3">
                                    <label className="mb-0" htmlFor>
                                      {" "}
                                      <b>Company Name</b>
                                    </label>
                                    <p className="m-0">Company ABC</p>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="mb-0" htmlFor>
                                      {" "}
                                      <b>Company UEN No.</b>
                                    </label>
                                    <p className="m-0">123456789Ae</p>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="mb-0" htmlFor>
                                      <b>Company Address</b>
                                    </label>
                                    <p className="m-0">123 Main St</p>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="mb-0" htmlFor>
                                      {" "}
                                      <b>Postal Code</b>
                                    </label>
                                    <p className="m-0">12345</p>
                                  </div>
                                </div>
                                <div className="row mt-3">
                                  <div className="col-md-3">
                                    <label className="mb-0" htmlFor>
                                      {" "}
                                      <b>Contact Person</b>
                                    </label>
                                    <p className="m-0">John Doe</p>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="mb-0" htmlFor>
                                      {" "}
                                      <b>Contact Person's Mobile</b>
                                    </label>
                                    <p className="m-0">123-456-7890</p>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="mb-0" htmlFor>
                                      {" "}
                                      <b>Contact Person's Email</b>
                                    </label>
                                    <p className="m-0">johndoe@example.com</p>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="mb-0" htmlFor>
                                      {" "}
                                      <b>Office Telephone No.</b>
                                    </label>
                                    <p className="m-0">987-654-321</p>
                                  </div>
                                </div>
                                <div className="row mt-3">
                                  <div className="col-md-3">
                                    <label className="mb-0" htmlFor>
                                      <b>Office Fax No.</b>
                                    </label>
                                    <p className="m-0">123-987-6543</p>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="mb-0" htmlFor>
                                      <b>Name of Participant</b>{" "}
                                    </label>
                                    <p className="m-0">Alice Smitht</p>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="mb-0" htmlFor>
                                      {" "}
                                      <b>Participant's NRIC / FIN No.</b>
                                    </label>
                                    <p className="m-0">S1234567A</p>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="mb-0" htmlFor>
                                      {" "}
                                      <b>Participant's Mobile</b>
                                    </label>
                                    <p className="m-0">789-123-4567</p>
                                  </div>
                                </div>
                                <div className="row mt-3">
                                  <div className="col-md-3">
                                    <label className="mb-0" htmlFor>
                                      <b>Alternate Mobile Number</b>{" "}
                                    </label>
                                    <p className="m-0">987-789-6543</p>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="mb-0" htmlFor>
                                      <b>Trade Type</b>
                                    </label>
                                    <p className="m-0">TradeType-1</p>
                                  </div>
                                  <div className="col-md-6">
                                    <label className="mb-0" htmlFor>
                                      <b>
                                        CoreTrade / Multi-skilling/Direct R1
                                        Registration No
                                      </b>
                                    </label>
                                    <p className="m-0">CT123456</p>
                                  </div>
                                </div>
                                <div className="row mt-3">
                                  <div className="col-md-3">
                                    <label className="mb-0" htmlFor>
                                      <b>Valid BCA Acknowledgement Notice</b>{" "}
                                    </label>
                                    <p className="m-0 mt-2">
                                      <a
                                        className="btn btn-outline-primary"
                                        href="#"
                                      >
                                        <i className="mdi mdi-eye" />
                                      </a>
                                      <a
                                        className="btn btn-outline-success"
                                        href="#"
                                      >
                                        <i className="mdi mdi-download" />
                                      </a>
                                    </p>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="mb-0" htmlFor>
                                      <b>Valid copy of NRIC / Work document</b>{" "}
                                    </label>
                                    <p className="m-0 mt-2">
                                      <a
                                        className="btn btn-outline-primary"
                                        href="#"
                                      >
                                        <i className="mdi mdi-eye" />
                                      </a>
                                      <a
                                        className="btn btn-outline-success"
                                        href="#"
                                      >
                                        <i className="mdi mdi-download" />
                                      </a>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
           
      </Tab>
      <Tab eventKey="course"  title="2 Course">
      
           
            <div className="row">
                          <div className="col-md-4 ">
                            <div className="card">
                              <div className="card-body">
                                <div className="row">
                                  <div className="col-md-12">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        Select Course
                                        <span className="text-danger">*</span>
                                      </label>
                                      <select
                                        type="text"
                                        className="form-select"
                                        value
                                      >
                                        <option value="a">Course-1</option>
                                        <option value="b">Course-2</option>
                                        <option value="c">Course-3</option>
                                        <option value="d">Course-4</option>
                                        <option value="e">Course-5</option>
                                        <option value="f">Course-6</option>
                                      </select>
                                    </div>
                                    <div className>
                                      <label className="form-label">
                                        Search By
                                      </label>
                                      <div className="input-icon mb-3">
                                        <input
                                          type="text"
                                          defaultValue
                                          className="form-control"
                                          placeholder="Search…"
                                        />
                                        <span className="input-icon-addon">
                                          {/* Download SVG icon from http://tabler-icons.io/i/search */}
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon"
                                            width={20}
                                            height={20}
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="currentColor"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          >
                                            <path
                                              stroke="none"
                                              d="M0 0h24v24H0z"
                                              fill="none"
                                            />
                                            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                                            <path d="M21 21l-6 -6" />
                                          </svg>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-12">
                                    <div className="table-responsive">
                                      <table className="table text-center text-nowrap table-bordered border-primary">
                                        <thead>
                                          <tr>
                                            <th>Course Code</th>
                                            <th>Course Name</th>
                                            <th>Course Duration</th>
                                            <th>Trainer</th>
                                            <th>Unit Price</th>
                                            <th>Action</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td>CS101</td>
                                            <td>Computer Science</td>
                                            <td>12 weeks</td>
                                            <td>John Doe</td>
                                            <td>$308.00</td>
                                            <td>
                                              <button
                                                className="btn btn-primary"
                                                type="button"
                                              >
                                                <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  className="icon m-0"
                                                  width={20}
                                                  height={20}
                                                  viewBox="0 0 24 24"
                                                  strokeWidth={2}
                                                  stroke="currentColor"
                                                  fill="none"
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                >
                                                  <path
                                                    stroke="none"
                                                    d="M0 0h24v24H0z"
                                                    fill="none"
                                                  />
                                                  <path d="M12 5l0 14" />
                                                  <path d="M5 12l14 0" />
                                                </svg>
                                              </button>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-8 pe-0">
                            <div id="service-table">
                              <div className="card">
                                <div className="card-body p-0">
                                  <div className="table-responsive">
                                    <table
                                      className="table card-table table-vcenter text-center text-nowrap"
                                      id
                                      style={{ width: "100%" }}
                                    >
                                      <thead>
                                        <tr>
                                          <th>SL NO</th>
                                          <th>Course Name</th>
                                          <th>Unit Price</th>
                                          <th>Discount (%)</th>
                                          <th>Gross Amt ($)</th>
                                          <th>Tax</th>
                                          <th>Action</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td>1</td>
                                          <td>HTML</td>
                                          <td>
                                            <input
                                              type="number"
                                              className="form-control"
                                            />
                                          </td>
                                          <td>5%</td>
                                          <td>$543</td>
                                          <td>18%</td>
                                          <td>
                                            <button
                                              className="btn btn-danger ripple"
                                              type="button"
                                            >
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="icon icon-tabler icon-tabler-playstation-x m-0"
                                                width={20}
                                                height={20}
                                                viewBox="0 0 24 24"
                                                strokeWidth={2}
                                                stroke="currentColor"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                              >
                                                <path
                                                  stroke="none"
                                                  d="M0 0h24v24H0z"
                                                  fill="none"
                                                />
                                                <path d="M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9z"></path>
                                                <path d="M8.5 8.5l7 7" />
                                                <path d="M8.5 15.5l7 -7" />
                                              </svg>
                                            </button>
                                          </td>
                                        </tr>
                                      </tbody>
                                      <thead>
                                        <tr>
                                          <th
                                            colSpan={5}
                                            style={{ textAlign: "end" }}
                                          >
                                            Total discount{" "}
                                          </th>
                                          <th colSpan={2}>5%</th>
                                        </tr>
                                        <tr>
                                          <th
                                            colSpan={5}
                                            style={{ textAlign: "end" }}
                                          >
                                            Total tax{" "}
                                          </th>
                                          <th colSpan={2}>18%</th>
                                        </tr>
                                        <tr>
                                          <th
                                            colSpan={5}
                                            style={{ textAlign: "end" }}
                                          >
                                            Grand total
                                          </th>
                                          <th colSpan={2}>$ 616.00</th>
                                        </tr>
                                      </thead>
                                      <thead
                                        id="package-total"
                                        style={{ display: "none" }}
                                      >
                                        <tr>
                                          <th
                                            colSpan={7}
                                            style={{ textAlign: "end" }}
                                          >
                                            Package Amount
                                          </th>
                                          <th colSpan={2}>
                                            <input
                                              type="text"
                                              className="form-control"
                                            />
                                          </th>
                                        </tr>
                                      </thead>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

        
      </Tab>
      <Tab eventKey="address"  title="3 Address">
      
            
            <div className="row">
                          <div className="col-md-3">
                            <div className="card border border-primary">
                              <div className="card-body">
                                <h3
                                  className="card-title mb-2"
                                  style={{ color: "#1F3BB3" }}
                                >
                                  <b className="me-2">Jhone Doe</b>
                                </h3>
                                <p className="card-p d-flex align-items-center mb-2 ">
                                  <i
                                    className="bx bx-phone me-2"
                                    style={{ fontSize: "14px" }}
                                  />
                                  +91 9758697820
                                </p>
                                <p className="card-p  d-flex align-items-center mb-2">
                                  <i
                                    className="bx bx-envelope me-2"
                                    style={{ fontSize: "14px" }}
                                  />
                                  abc@pvtltd.com
                                </p>
                                <hr className="my-3" />
                                <h3
                                  className="card-title mb-1"
                                  style={{ color: "#1F3BB3" }}
                                >
                                  <b>Course Details</b>
                                </h3>
                                <div className="amount">
                                  <p className="m-0 card-p">Cyber Security</p>
                                  <p className="m-0">Duration : 12 Weeks</p>
                                  <p className="m-0">
                                    Starting Date: 25/04/2023
                                  </p>
                                  <p className="m-0">Starting Time: 05:47 PM</p>
                                </div>
                                <hr className="my-3" />
                                <div className="driver mt-2">
                                  <h3
                                    className="card-title mb-1"
                                    style={{ color: "#1F3BB3" }}
                                  >
                                    <b>Amount Details</b>
                                  </h3>
                                  <div className="row">
                                    <div className="col-md-7">
                                      <p className="m-0"> Total:</p>
                                    </div>
                                    <div className="col-md-5">
                                      <p className="m-0">$200.00</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-9">
                            <div className="card">
                              <div className="card-body">
                                <ul
                                  className="nav nav-pills nav-pills-primary"
                                  data-bs-toggle="tabs"
                                  role="tablist"
                                >
                                  <li
                                    className="nav-item me-2"
                                    role="presentation"
                                  >
                                    <a
                                      href="#tab-one"
                                      className="nav-link active"
                                      data-bs-toggle="tab"
                                      aria-selected="true"
                                      role="tab"
                                    >
                                      Address
                                    </a>
                                  </li>
                                  <li
                                    className="nav-item me-2"
                                    role="presentation"
                                  >
                                    <a
                                      href="#tab-three"
                                      className="nav-link"
                                      data-bs-toggle="tab"
                                      aria-selected="false"
                                      role="tab"
                                      tabIndex={-1}
                                    >
                                      Additional Info
                                    </a>
                                  </li>
                                </ul>
                                <div className="tab-content">
                                  <div
                                    className="tab-pane active show"
                                    id="tab-one"
                                    role="tabpanel"
                                  >
                                    <div className="row my-3">
                                      <div className="col-lg-4 col-md-4 col-sm-12">
                                        <label
                                          htmlFor="radio-card-1"
                                          className="radio-card"
                                        >
                                          <input
                                            type="radio"
                                            name="radio-card"
                                            id="radio-card-1"
                                            defaultChecked
                                          />
                                          <div className="card-content-wrapper">
                                            <span className="check-icon" />
                                            <div className="card-content">
                                              <h4>Sky Enterprice</h4>
                                              <p className="mb-1">
                                                {" "}
                                                <strong>Contact No:</strong>
                                                1234567890
                                              </p>
                                              <p className="mb-1">
                                                {" "}
                                                <strong>Email ID:</strong>
                                                ABC@gmail.com
                                              </p>
                                              <p className="mb-1">
                                                <strong>Address:</strong>8
                                                Shopping Centre, 9 Bishan Place,
                                                Singapore 579837
                                              </p>
                                              <div className="form-check">
                                                <input
                                                  className="form-check-input"
                                                  type="radio"
                                                  name="flexRadioDefault"
                                                  id="flexRadioDefault2"
                                                  defaultChecked
                                                />
                                                <label
                                                  className="form-check-label"
                                                  htmlFor="flexRadioDefault2"
                                                >
                                                  Default Address
                                                </label>
                                              </div>
                                            </div>
                                          </div>
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="tab-pane"
                                    id="tab-three"
                                    role="tabpanel"
                                  >
                                    <div className="row mt-3">
                                      <div className="form-group col-lg-6 col-md-6 col-sm-12 text-start">
                                        <label
                                          htmlFor="message-text"
                                          className="col-form-label"
                                        >
                                          Date
                                        </label>
                                        <input
                                          type="date"
                                          className="form-control"
                                        />
                                      </div>
                                      <div className="form-group col-lg-6 col-md-6 col-sm-12 text-start">
                                        <label
                                          htmlFor="message-text"
                                          className="col-form-label"
                                        >
                                          Time
                                        </label>
                                        <input
                                          type="time"
                                          className="form-control"
                                          placeholder="Time of Cleaning"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

        
      </Tab>
      <Tab eventKey="preview"  title="4 Preview">
      
            
            <div className="row">
                          <div className="col-md-3">
                            <div className="card border border-primary">
                              <div className="card-body">
                                <h3
                                  className="card-title mb-1"
                                  style={{ color: "#1F3BB3" }}
                                >
                                  <b>Address</b>
                                </h3>
                                <p className="m-0">
                                  BLK 3017 BEDOK NORTH STREET 5 #01-22 GOURMET
                                  EAST KITCHEN SINGAPORE 486121
                                </p>
                                <hr className="my-3" />
                                <h3
                                  className="card-title mb-1"
                                  style={{ color: "#1F3BB3" }}
                                >
                                  <b>Course Details</b>
                                </h3>
                                <p className="m-0 card-p">Cyber Security</p>
                                <p className="m-0">Duration : 12 Weeks</p>
                                <p className="m-0">Starting Date: 25/04/2023</p>
                                <p className="m-0">Starting Time: 05:47 PM</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-9">
                            <div className="row">
                              <div className="col-md-8">
                                <div className="card">
                                  <div className="card-body p-0">
                                    <div className="table-responsive">
                                      <table className="table card-table table-vcenter text-center text-nowrap datatable">
                                        <thead>
                                          <tr>
                                            <th>SL NO</th>
                                            <th>Course Name</th>
                                            <th>Unit Price</th>
                                            <th>Quantity</th>
                                            <th>Gross Amount ($)</th>
                                            <th>Discount (%)</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td>1</td>
                                            <td>Html</td>
                                            <td>$308.00</td>
                                            <td>2</td>
                                            <td>$308.00</td>
                                            <td>8%</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="card border border-primary">
                                  <div className="card-body">
                                    <h3
                                      className="card-title mb-1"
                                      style={{ color: "#1F3BB3" }}
                                    >
                                      <b className="me-2">Customer Details</b>
                                    </h3>
                                    <p className="m-0">
                                      <i
                                        className="bx bx-user me-2 pt-1"
                                        style={{ fontSize: "14px" }}
                                      />
                                      Jhone Doe
                                    </p>
                                    <p className="m-0">
                                      <i
                                        className="bx bx-phone me-2 pt-1"
                                        style={{ fontSize: "14px" }}
                                      />
                                      +91-9737155901
                                    </p>
                                    <hr className="my-3" />
                                    <h3
                                      className="card-title mb-1"
                                      style={{ color: "#1F3BB3" }}
                                    >
                                      <b className="me-2">Amount Details</b>
                                    </h3>
                                    <div className="row">
                                      <div className="col-md-7">
                                        <p className="m-0">
                                          Total <small>(before tax):</small>
                                        </p>
                                        <p className="m-0">Total Tax:</p>
                                        <p className="m-0">Total Discount:</p>
                                        <h6>Grand Total:</h6>
                                      </div>
                                      <div className="col-md-5">
                                        <p className="m-0">$200.00</p>
                                        <p className="m-0">$0.00</p>
                                        <p className="m-0">$0.00</p>
                                        <h6>$200.00</h6>
                                      </div>
                                    </div>
                                    <button
                                      type="button"
                                      className="btn btn-info w-100 mt-3"
                                      data-dismiss="modal"
                                    >
                                      Confirm
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

        
      </Tab>
 
    </Tabs>
    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: event==="customer"?"25%":event==="course"?"50%": event==="address"?"75%":"100%" }}
                      />
                    </div>
            </div>
        </form>
        </Modal.Body>
        <Modal.Footer>
            <button type="button" onClick={handlePrevious} disabled={event==='customer'} class="btn me-auto sw-btn-prev sw-btn">Previous</button>
            <button type="button" onClick={handleNext} disabled={event==="preview"} class="btn btn-primary next-btn" >Next</button>
        </Modal.Footer>
       
        </Modal>
    )
};