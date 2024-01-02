import { useEffect, useState } from "react";
import { Modal, Tab, TabContainer, Tabs } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { filePath } from "../../common-components/useCommonUsableFunctions";
import moment from "moment";
import { CommonDataTable } from "../../common-components/CommonDataTable";
import { quotationPreviewHeaders } from "../../Constants/table.constants";
import { toast } from "react-toastify";
import { useAuth } from "../../context/authContext";

export default function AddQuotationModal({ show, setShow, callback }) {
  const { NewAxiosInstance } = useAuth();
  const filterTypes = {
    textSearch: "",
    company: "",
  };

  const [event, setEvent] = useState("customer");
  const [selectedFilter, setSelectedFilter] = useState(filterTypes);
  const [selectedLead, setSelectedLead] = useState(null);
  const [allCompanies, setAllCompanies] = useState([]);
  const [customerCourses, setCustomerCourses] = useState([]);

  const addCourses = {
    courseName: "",
    unitPrice: "",
    discount: "",
    grossAmt: "",
    tax: "",
    unit: "",
  };

  const courseErrors = {
    courseName: "",
    unitPrice: "",
    discount: "",
    grossAmt: "",
    tax: "",
    unit: "",
  };

  const [coursePrices, setCoursePrices] = useState({
    totalDiscount: "",
    totalTax: "",
    grandTotal: "",
    totalGrossAmt: "",
  });

  const [newCourses, setNewCourses] = useState([addCourses]);
  const [newCourseErrors, setNewCourseErrors] = useState([courseErrors]);

  const {
    register,
    reset,
    getValues,
    setValue,
    watch,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (event == "customer") {
      getAllCompanies();
    } else if (event == "course") {
      accountHistory();
    }
  }, [selectedFilter, event]);

  async function handleNext() {
    toast.dismiss();
    if (!selectedLead) {
      toast.error("Please Select Customer !");
      return;
    } else if (!selectedLead?.class?.length) {
      toast.error("Class is not assigned for this customer");
      return;
    }
    if (selectedLead?.class?.length) {
      const chekedClass = await checkCourseInClass();
      if (chekedClass.status != 200) {
        toast.error(chekedClass.data.message);
        return;
      }
      if (event === "customer" && selectedLead) {
        setEvent("course");
      } else if (event === "course") {
        setEvent("preview");
      }
    }
  }

  const checkCourseInClass = async () => {
    const checkClass = await NewAxiosInstance.get("/class/getCourseClass", {
      params: { classId: selectedLead?.class },
    });
    return checkClass;
  };

  function handlePrevious() {
    if (event === "preview") {
      setEvent("course");
    } else if (event === "course") {
      setEvent("customer");
    }
  }

  const accountHistory = async () => {
    try {
      const { data } = await NewAxiosInstance.get("/leads/accountHistory", {
        params: { contactPersonEmail: selectedLead?.contactPersonEmail },
      });
      setCustomerCourses(data);
    } catch (err) {
      console.error(err);
    }
  };

  const getAllCompanies = async () => {
    try {
      const { data } = await NewAxiosInstance.get("/leads/getAllCompanies", {
        params: selectedFilter,
      });
      setAllCompanies(data);
    } catch (err) {
      console.error(err);
    }
  };

  const getSelectedLead = async (id) => {
    try {
      const { data } = await NewAxiosInstance.get("/leads/getCompany", {
        params: { _id: id },
      });
      if (data) {
        setSelectedLead(data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const openFile = (fileName) => {
    const selectedFilePath = selectedLead.fileLocations[fileName];
    if (selectedFilePath.split("https://").length == 2) {
      window.open(selectedFilePath);
      return;
    }
    const leadUrl = filePath(selectedFilePath);
    window.open(leadUrl);
  };

  const saveQuotationData = async () => {
    try {
      toast.dismiss();
      const Obj = {};
      Obj["quotationCourses"] = newCourses;
      Obj["leadId"] = selectedLead._id;
      const newQuotation = await NewAxiosInstance.post(
        "/quotations/addNewQuotation",
        Obj,
      );
      if (newQuotation.status == 200) {
        callback(newQuotation.data.data);
        toast.success(newQuotation.data.message);
      } else {
        toast.error("something went wrong");
      }
      handleClose();
    } catch (err) {
      toast.error("something went wrong");
      console.error(err);
    }
  };

  const calculateCoursePrices = () => {
    const priceTypes = {
      totalDiscount: 0,
      totalTax: 0,
      totalGrossAmt: 0,
      grandTotal: 0,
    };
    newCourses.map((course) => {
      priceTypes.totalDiscount =
        priceTypes.totalDiscount + Number(course.discount);
      priceTypes.totalTax = priceTypes.totalTax + Number(course.tax);
      if (course.unitPrice)
        priceTypes.totalGrossAmt =
          priceTypes.totalGrossAmt +
          Number(course.unitPrice) * Number(course.unit);
      else
        priceTypes.totalGrossAmt =
          priceTypes.totalGrossAmt + Number(course.grossAmt);
    });

    const calculateCourseTotal =
      priceTypes.totalGrossAmt * (priceTypes.totalTax / 100) +
      priceTypes.totalGrossAmt -
      priceTypes.totalGrossAmt * (priceTypes.totalDiscount / 100);

    priceTypes.grandTotal = calculateCourseTotal.toFixed(2);
    setCoursePrices(priceTypes);
  };

  const changePriceType = (value, type, index) => {
    if (!/^\d*$/.test(value)) {
      newCourseErrors[index][type] = "Please enter a valid number.";
      setNewCourseErrors([...newCourseErrors]);
    } else {
      newCourseErrors[index][type] = "";
      setNewCourseErrors([...newCourseErrors]);
      if (newCourses[index].unitPrice > 0)
        newCourses[index].grossAmt =
          newCourses[index].unitPrice * newCourses[index].unit;
      newCourses[index][type] = value;
      setNewCourses([...newCourses]);
    }
    calculateCoursePrices();
  };

  const handleTabSelect = async (tabKey) => {
    toast.dismiss();
    if (!selectedLead) {
      toast.error("Please Select Customer !");
      return;
    }
    if (tabKey == "preview") {
      if (!coursePrices.grandTotal || !coursePrices.totalGrossAmt) {
        toast.error("Please Enter Course Details !");
        return;
      }
    }
    if (!selectedLead?.class?.length) {
      toast.error("Class is not assigned for this customer");
      return;
    }
    const chekedClass = await checkCourseInClass();
    if (chekedClass.status != 200) {
      toast.error(chekedClass.data.message);
      return;
    }
    setEvent(tabKey);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <Modal
      show={show}
      onHide={() => handleClose()}
      className='modal-dialog-scrollable'
      size='xl'
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <h5 className='modal-title'>Add New Quotation</h5>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className='row text-left'>
          <div style={{ border: "none", height: "auto" }}>
            <Tabs
              onSelect={(eventKey) => handleTabSelect(eventKey)}
              activeKey={event}
              id='justify-tab-example'
              className='mb-3'
              justify
            >
              <Tab
                className='mt-3'
                style={{ border: "none" }}
                eventKey='customer'
                title='1 Customer'
              >
                <div className='row'>
                  <div className='col-md-3'>
                    <div className='mb-3'>
                      <label className='form-label'>Search By</label>
                      <div className='input-icon mb-3'>
                        <input
                          type='text'
                          defaultValue
                          className='form-control'
                          onChange={({ target }) =>
                            setSelectedFilter((old) => ({
                              textSearch: target.value,
                            }))
                          }
                          value={selectedFilter.textSearch}
                          placeholder='Search…'
                        />
                        <span className='input-icon-addon'>
                          {/* Download SVG icon from http://tabler-icons.io/i/search */}
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='icon'
                            width={20}
                            height={20}
                            viewBox='0 0 24 24'
                            strokeWidth={2}
                            stroke='currentColor'
                            fill='none'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          >
                            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                            <path d='M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0' />
                            <path d='M21 21l-6 -6' />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div
                      className='mb-3'
                      style={{
                        height: "350px",
                        overflow: "hidden",
                        overflowY: true,
                      }}
                    >
                      {allCompanies?.length ? (
                        allCompanies.map((company) => (
                          <div
                            className='card border border-primary cursor-pointer'
                            style={{ cursor: "pointer" }}
                            onClick={() => getSelectedLead(company._id)}
                          >
                            <div className='card-body'>
                              <div className='my-auto'>
                                <label
                                  className='mb-0 text-Primary fw-bold d-flex align-items-center '
                                  style={{ fontSize: "16px" }}
                                >
                                  <i className='bx bxs-graduation me-2 fs-4 text-primary' />
                                  {company.companyName}
                                </label>
                                <p className='m-0 ps-4'>
                                  Tel - {company.contactPersonMobile}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div></div>
                      )}
                    </div>
                  </div>
                  {selectedLead && (
                    <div className='col-md-9'>
                      <div
                        className='d-flex'
                        style={{
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <h5 className='modal-title'>Customer Details</h5>
                      </div>
                      <div className='card border border-primary mt-3'>
                        <div className='card-body'>
                          <div className='row'>
                            <div className='col-md-3'>
                              <label className='mb-0'>
                                {" "}
                                <b>Company Name</b>
                              </label>
                              <p className='m-0'>{selectedLead?.companyName}</p>
                            </div>
                            <div className='col-md-3'>
                              <label className='mb-0'>
                                {" "}
                                <b>Company UEN No.</b>
                              </label>
                              <p className='m-0'>{selectedLead?.companyUEN}</p>
                            </div>
                            <div className='col-md-3'>
                              <label className='mb-0'>
                                <b>Company Address</b>
                              </label>
                              <p className='m-0'>
                                {selectedLead?.companyAddress}
                              </p>
                            </div>
                            <div className='col-md-3'>
                              <label className='mb-0'>
                                {" "}
                                <b>Postal Code</b>
                              </label>
                              <p className='m-0'>{selectedLead?.postalCode}</p>
                            </div>
                          </div>
                          <div className='row mt-3'>
                            <div className='col-md-3'>
                              <label className='mb-0'>
                                {" "}
                                <b>Contact Person</b>
                              </label>
                              <p className='m-0'>
                                {selectedLead?.contactPerson}
                              </p>
                            </div>
                            <div className='col-md-3'>
                              <label className='mb-0'>
                                {" "}
                                <b>Contact Person's Mobile</b>
                              </label>
                              <p className='m-0'>
                                {selectedLead?.contactPersonMobile}
                              </p>
                            </div>
                            <div className='col-md-3'>
                              <label className='mb-0'>
                                {" "}
                                <b>Contact Person's Email</b>
                              </label>
                              <p className='m-0'>
                                {selectedLead?.contactPersonEmail}
                              </p>
                            </div>
                            <div className='col-md-3'>
                              <label className='mb-0'>
                                {" "}
                                <b>Office Telephone No.</b>
                              </label>
                              <p className='m-0'>
                                {selectedLead?.officeTelephone}
                              </p>
                            </div>
                          </div>
                          <div className='row mt-3'>
                            <div className='col-md-3'>
                              <label className='mb-0'>
                                <b>Office Fax No.</b>
                              </label>
                              <p className='m-0'>{selectedLead?.officeFax}</p>
                            </div>
                            <div className='col-md-3'>
                              <label className='mb-0'>
                                <b>Name of Participant</b>{" "}
                              </label>
                              <p className='m-0'>
                                {selectedLead?.participantName}
                              </p>
                            </div>
                            <div className='col-md-3'>
                              <label className='mb-0'>
                                {" "}
                                <b>Participant's Mobile</b>
                              </label>
                              <p className='m-0'>
                                {selectedLead?.participantMobile}
                              </p>
                            </div>
                            {selectedLead?.registrationType == "AMN" ? (
                              <div className='row'>
                                <div className='col-md-3'>
                                  <label className='mb-0'>
                                    {" "}
                                    <b>MYE No.</b>
                                  </label>
                                  <p className='m-0'>{selectedLead?.myeNo}</p>
                                </div>
                                <div className='col-md-3'>
                                  <label className='mb-0'>
                                    {" "}
                                    <b>Pa Reference No.</b>
                                  </label>
                                  <p className='m-0'>
                                    {selectedLead?.paReferenceNo}
                                  </p>
                                </div>
                                <div className='col-md-3'>
                                  <label className='mb-0'>
                                    {" "}
                                    <b>Participant's Ic No</b>
                                  </label>
                                  <p className='m-0'>
                                    {selectedLead?.participantIcNo}
                                  </p>
                                </div>
                                <div className='col-md-3'>
                                  <label className='mb-0'>
                                    {" "}
                                    <b>Date Of Birth</b>
                                  </label>
                                  <p className='m-0'>{selectedLead?.DOB}</p>
                                </div>
                                <div className='col-md-3'>
                                  <label className='mb-0'>
                                    {" "}
                                    <b>Nationality</b>
                                  </label>
                                  <p className='m-0'>
                                    {selectedLead?.nationality}
                                  </p>
                                </div>
                                <div className='col-md-3'>
                                  <label className='mb-0'>
                                    {" "}
                                    <b>Educational / Vocational Level</b>
                                  </label>
                                  <p className='m-0'>
                                    {selectedLead?.educationalLevel}
                                  </p>
                                </div>
                              </div>
                            ) : (
                              <div className='row'>
                                <div className='col-md-3'>
                                  <label className='mb-0'>
                                    {" "}
                                    <b>Participant's NRIC / FIN No.</b>
                                  </label>
                                  <p className='m-0'>
                                    {selectedLead?.participantNRIC}
                                  </p>
                                </div>
                                <div className='col-md-3'>
                                  <label className='mb-0'>
                                    <b>Alternate Mobile Number</b>{" "}
                                  </label>
                                  <p className='m-0'>
                                    {selectedLead?.alternateMobile}
                                  </p>
                                </div>
                              </div>
                            )}
                          </div>
                          <div className='row mt-3'>
                            <div className='col-md-3'>
                              <label className='mb-0'>
                                <b>Trade Type</b>
                              </label>
                              <p className='m-0'>{selectedLead?.tradeType}</p>
                            </div>
                            {selectedLead?.registrationType != "CRW" && (
                              <div className='col-md-3'>
                                <label className='mb-0'>
                                  <b>Trade Level</b>
                                </label>
                                <p className='m-0'>
                                  {selectedLead?.tradeLevel}
                                </p>
                              </div>
                            )}
                            <div className='col-md-6'>
                              <label className='mb-0'>
                                <b>
                                  CoreTrade / Multi-skilling/Direct R1
                                  Registration No
                                </b>
                              </label>
                              <p className='m-0'>
                                {selectedLead?.coreTradeRegNo}
                              </p>
                            </div>
                          </div>
                          <div className='row mt-3'>
                            {selectedLead?.registrationType != "SK" && (
                              <div className='col-md-3'>
                                <label className='mb-0'>
                                  <b>Valid BCA Acknowledgement Notice</b>{" "}
                                </label>
                                <p className='m-0 mt-2'>
                                  <a
                                    className='btn btn-outline-primary'
                                    onClick={() => openFile("notice")}
                                  >
                                    <i className='mdi mdi-eye' />
                                  </a>
                                  {/* <a className="btn btn-outline-success" href="#">
                              <i className="mdi mdi-download" />
                            </a> */}
                                </p>
                              </div>
                            )}
                            <div className='col-md-3'>
                              <label className='mb-0'>
                                <b>Valid copy of NRIC / Work document</b>{" "}
                              </label>
                              <p className='m-0 mt-2'>
                                <a
                                  className='btn btn-outline-primary'
                                  onClick={() => openFile("nric")}
                                >
                                  <i className='mdi mdi-eye' />
                                </a>
                                {/* <a className="btn btn-outline-success" href="#">
                              <i className="mdi mdi-download" />
                            </a> */}
                              </p>
                            </div>
                            {selectedLead?.registrationType != "CRW" && (
                              <div className='col-md-3'>
                                <label className='mb-0'>
                                  <b>Valid Copy Of Passport</b>{" "}
                                </label>
                                <p className='m-0 mt-2'>
                                  <a
                                    className='btn btn-outline-primary'
                                    onClick={() => openFile("passportCopy")}
                                  >
                                    <i className='mdi mdi-eye' />
                                  </a>
                                  {/* <a className="btn btn-outline-success" href="#">
                              <i className="mdi mdi-download" />
                            </a> */}
                                </p>
                              </div>
                            )}
                            {selectedLead?.registrationType != "CRW" && (
                              <div className='col-md-3'>
                                <label className='mb-0'>
                                  <b>Valid Copy Of MOM Employment Details</b>{" "}
                                </label>
                                <p className='m-0 mt-2'>
                                  <a
                                    className='btn btn-outline-primary'
                                    onClick={() => openFile("MOME")}
                                  >
                                    <i className='mdi mdi-eye' />
                                  </a>
                                  {/* <a className="btn btn-outline-success" href="#">
                              <i className="mdi mdi-download" />
                            </a> */}
                                </p>
                              </div>
                            )}
                            {selectedLead?.registrationType == "MSG" && (
                              <div className='col-md-3'>
                                <label className='mb-0'>
                                  <b>
                                    1st Skill Evaluation Certificate / BCA
                                    Skills Qualification Statement
                                  </b>{" "}
                                </label>
                                <p className='m-0 mt-2'>
                                  <a
                                    className='btn btn-outline-primary'
                                    onClick={() => openFile("skill")}
                                  >
                                    <i className='mdi mdi-eye' />
                                  </a>
                                  {/* <a className="btn btn-outline-success" href="#">
                              <i className="mdi mdi-download" />
                            </a> */}
                                </p>
                              </div>
                            )}
                            {selectedLead?.registrationType == "AMN" && (
                              <div className='row'>
                                <div className='col-md-3'>
                                  <label className='mb-0'>
                                    <b>Copy Of PA Quota（PA复印件）</b>{" "}
                                  </label>
                                  <p className='m-0 mt-2'>
                                    <a
                                      className='btn btn-outline-primary'
                                      onClick={() => openFile("pa")}
                                    >
                                      <i className='mdi mdi-eye' />
                                    </a>
                                    {/* <a className="btn btn-outline-success" href="#">
                              <i className="mdi mdi-download" />
                            </a> */}
                                  </p>
                                </div>
                                <div className='col-md-3'>
                                  <label className='mb-0'>
                                    <b>
                                      Copy Of Worker's IC 员工的身份证复印件
                                    </b>{" "}
                                  </label>
                                  <p className='m-0 mt-2'>
                                    <a
                                      className='btn btn-outline-primary'
                                      onClick={() => openFile("workersIc")}
                                    >
                                      <i className='mdi mdi-eye' />
                                    </a>
                                    {/* <a className="btn btn-outline-success" href="#">
                              <i className="mdi mdi-download" />
                            </a> */}
                                  </p>
                                </div>
                                <div className='col-md-3'>
                                  <label className='mb-0'>
                                    <b>
                                      Copy Of Worker's Passport (if available)
                                      员工的护照复印件 - 如有请提供
                                    </b>{" "}
                                  </label>
                                  <p className='m-0 mt-2'>
                                    <a
                                      className='btn btn-outline-primary'
                                      onClick={() =>
                                        openFile("workersPassport")
                                      }
                                    >
                                      <i className='mdi mdi-eye' />
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
                  )}
                </div>
              </Tab>
              <Tab eventKey='course' title='2 Course'>
                <div className='row'>
                  <div className='col-md-4 '>
                    <div className='card'>
                      <div className='card-body'>
                        <div className='row'>
                          <div className='col-md-12'>
                            <div
                              className='table-responsive'
                              style={{
                                height: "350px",
                                overflow: "hidden",
                                overflowY: true,
                              }}
                            >
                              {customerCourses?.length ? (
                                customerCourses.map((course) => (
                                  <div
                                    className='card border border-primary'
                                    style={{ cursor: "pointer" }}
                                    // onClick={() => getSelectedLead(company._id)}
                                  >
                                    <div className='card-body'>
                                      <div className='my-auto'>
                                        <label
                                          className='mb-0 text-Primary fw-bold d-flex align-items-center '
                                          style={{ fontSize: "14px" }}
                                        >
                                          <i className='bx bxs-graduation me-2 fs-4 text-primary' />
                                          Course - {course.course[0]}
                                        </label>
                                        <p className='m-0 ps-4'>
                                          Class Code - {course.class}
                                        </p>
                                        <p className='m-0 ps-4'>
                                          Price - {course.price[0]}
                                        </p>
                                        <p className='m-0 ps-4'>
                                          Trainer - {course.trainer}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                ))
                              ) : (
                                <div>No Data Found</div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-8 pe-0'>
                    <div id='service-table'>
                      <div className='card'>
                        <div className='card-body p-0'>
                          <div className='table-responsive'>
                            <table
                              className='table card-table table-vcenter text-center text-nowrap'
                              id
                              style={{ width: "100%" }}
                            >
                              <thead>
                                <tr>
                                  <th>SL NO</th>
                                  <th>Course Name</th>
                                  <th>Units</th>
                                  <th>Unit Price</th>
                                  <th>Discount (%)</th>
                                  <th>Gross Amt ($)</th>
                                  <th>Tax</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                {newCourses.map((course, index) => (
                                  <tr>
                                    <td>{index + 1}</td>
                                    <td>
                                      <input
                                        type='text'
                                        className='form-control'
                                        required='this field is required !'
                                        onChange={({ target }) => {
                                          newCourses[index].courseName =
                                            target.value;
                                          setNewCourses([...newCourses]);
                                        }}
                                        value={newCourses[index].courseName}
                                      />
                                      {newCourseErrors[index].courseName
                                        ?.length ? (
                                        <span className='text-danger'>
                                          {newCourseErrors[index].courseName}
                                        </span>
                                      ) : (
                                        ""
                                      )}
                                    </td>
                                    <td>
                                      <input
                                        type='text'
                                        className='form-control'
                                        onChange={({ target }) =>
                                          changePriceType(
                                            target.value,
                                            "unit",
                                            index,
                                          )
                                        }
                                        value={newCourses[index].unit}
                                      />
                                      {newCourseErrors[index].unit?.length ? (
                                        <span className='text-danger'>
                                          {newCourseErrors[index].unit}
                                        </span>
                                      ) : (
                                        ""
                                      )}
                                    </td>
                                    <td>
                                      <input
                                        type='text'
                                        className='form-control'
                                        onChange={({ target }) =>
                                          changePriceType(
                                            target.value,
                                            "unitPrice",
                                            index,
                                          )
                                        }
                                        value={newCourses[index].unitPrice}
                                      />
                                      {newCourseErrors[index].unitPrice
                                        ?.length ? (
                                        <span className='text-danger'>
                                          {newCourseErrors[index].unitPrice}
                                        </span>
                                      ) : (
                                        ""
                                      )}
                                    </td>
                                    <td>
                                      <input
                                        type='text'
                                        className='form-control'
                                        onChange={({ target }) =>
                                          changePriceType(
                                            target.value,
                                            "discount",
                                            index,
                                          )
                                        }
                                        value={newCourses[index].discount}
                                      />
                                      {newCourseErrors[index].discount
                                        ?.length ? (
                                        <span className='text-danger'>
                                          {newCourseErrors[index].discount}
                                        </span>
                                      ) : (
                                        ""
                                      )}
                                    </td>
                                    <td>
                                      <input
                                        type='text'
                                        className='form-control'
                                        onChange={({ target }) =>
                                          changePriceType(
                                            target.value,
                                            "grossAmt",
                                            index,
                                          )
                                        }
                                        value={
                                          newCourses[index].unitPrice.length
                                            ? Number(
                                                newCourses[index].unitPrice,
                                              ) * Number(newCourses[index].unit)
                                            : newCourses[index].grossAmt
                                        }
                                      />
                                      {newCourseErrors[index].grossAmt
                                        ?.length ? (
                                        <span className='text-danger'>
                                          {newCourseErrors[index].grossAmt}
                                        </span>
                                      ) : (
                                        ""
                                      )}
                                    </td>
                                    <td>
                                      <input
                                        type='text'
                                        className='form-control'
                                        onChange={({ target }) =>
                                          changePriceType(
                                            target.value,
                                            "tax",
                                            index,
                                          )
                                        }
                                        value={newCourses[index].tax}
                                      />
                                      {newCourseErrors[index].tax?.length ? (
                                        <span className='text-danger'>
                                          {newCourseErrors[index].tax}
                                        </span>
                                      ) : (
                                        ""
                                      )}
                                    </td>
                                    <td className='d-flex'>
                                      <button
                                        className='d-flex align-items-center justify-content-center btn btn-danger ripple mx-1'
                                        type='button'
                                        style={{
                                          width: "30px",
                                          height: "30px",
                                          fontSize: "15px",
                                        }}
                                        onClick={() => {
                                          if (newCourses.length > 1) {
                                            newCourses.splice(index, 1);
                                            setNewCourses([...newCourses]);
                                          } else if (newCourses.length == 1) {
                                            newCourses[index] = addCourses;
                                            setNewCourses([...newCourses]);
                                          }
                                          calculateCoursePrices();
                                        }}
                                      >
                                        X
                                      </button>
                                      {index == newCourses.length - 1 && (
                                        <button
                                          className='d-flex align-items-center justify-content-center btn btn-success'
                                          type='button'
                                          style={{
                                            width: "30px",
                                            height: "30px",
                                            fontSize: "15px",
                                          }}
                                          onClick={() => {
                                            setNewCourses([
                                              ...newCourses,
                                              addCourses,
                                            ]);

                                            setNewCourseErrors([
                                              ...newCourseErrors,
                                              courseErrors,
                                            ]);
                                          }}
                                        >
                                          +
                                        </button>
                                      )}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                              <thead>
                                <tr>
                                  <th colSpan={5} style={{ textAlign: "end" }}>
                                    Total discount{" "}
                                  </th>
                                  <th colSpan={2}>
                                    {coursePrices.totalDiscount &&
                                      `${coursePrices.totalDiscount}%`}
                                  </th>
                                </tr>
                                <tr>
                                  <th colSpan={5} style={{ textAlign: "end" }}>
                                    Total tax{" "}
                                  </th>
                                  <th colSpan={2}>
                                    {coursePrices.totalTax &&
                                      `${coursePrices.totalTax}%`}
                                  </th>
                                </tr>
                                <tr>
                                  <th colSpan={5} style={{ textAlign: "end" }}>
                                    Grand total
                                  </th>
                                  <th colSpan={2}>
                                    {" "}
                                    {coursePrices.grandTotal &&
                                      `$  ${coursePrices.grandTotal}`}
                                  </th>
                                </tr>
                              </thead>
                              <thead
                                id='package-total'
                                style={{ display: "none" }}
                              >
                                <tr>
                                  <th colSpan={7} style={{ textAlign: "end" }}>
                                    Package Amount
                                  </th>
                                  <th colSpan={2}>
                                    <input
                                      type='text'
                                      className='form-control'
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
              <Tab eventKey='preview' title='3 Preview'>
                <div className='row'>
                  <div className='col-md-3'>
                    <div className='card border border-primary'>
                      <div className='card-body'>
                        <h3
                          className='card-title mb-1'
                          style={{ color: "#1F3BB3" }}
                        >
                          <b>Address</b>
                        </h3>
                        <p className='m-0'>
                          {`${selectedLead?.companyAddress} Postal Code : ${selectedLead?.postalCode} `}
                        </p>
                        <hr className='my-3' />
                        <h3
                          className='card-title mb-1'
                          style={{ color: "#1F3BB3" }}
                        >
                          <b>Course Details</b>
                        </h3>
                        {customerCourses?.length
                          ? customerCourses.map((course) => (
                              <div>
                                <p
                                  className='m-0 card-p'
                                  style={{ fontWeight: "bold" }}
                                >
                                  {course.course[0]}
                                </p>
                                <p className='m-0'>
                                  Starting Date:{" "}
                                  {moment(course.startDate).format(
                                    "DD/MM/YYYY",
                                  )}
                                </p>
                                <p className='m-0'>
                                  Starting Time:{" "}
                                  {moment(course.startTime).format("HH:mm")}
                                </p>
                              </div>
                            ))
                          : ""}
                      </div>
                    </div>
                  </div>
                  <div className='col-md-9'>
                    <div className='row'>
                      <div className='col-md-8'>
                        <div className='card'>
                          <div className='card-body p-0'>
                            <div className='table-responsive'>
                              <CommonDataTable
                                data={newCourses}
                                tableHeaders={quotationPreviewHeaders}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-4'>
                        <div className='card border border-primary'>
                          <div className='card-body'>
                            <h3
                              className='card-title mb-1'
                              style={{ color: "#1F3BB3" }}
                            >
                              <b className='me-2'>Customer Details</b>
                            </h3>
                            <p className='m-0'>
                              <i
                                className='bx bx-user me-2 pt-1'
                                style={{ fontSize: "14px" }}
                              />
                              {selectedLead?.contactPerson}{" "}
                            </p>
                            <p className='m-0'>
                              <i
                                className='bx bx-phone me-2 pt-1'
                                style={{ fontSize: "14px" }}
                              />
                              {selectedLead?.contactPersonMobile}
                            </p>
                            <hr className='my-3' />
                            <h3
                              className='card-title mb-1'
                              style={{ color: "#1F3BB3" }}
                            >
                              <b className='me-2'>Amount Details</b>
                            </h3>
                            <div className='row'>
                              <div className='col-md-7'>
                                <p className='m-0'>
                                  Total <small>(before tax):</small>
                                </p>
                                <p className='m-0'>Total Tax:</p>
                                <p className='m-0'>Total Discount:</p>
                                <h6>Grand Total:</h6>
                              </div>
                              <div className='col-md-5'>
                                <p className='m-0'>
                                  {coursePrices.totalGrossAmt &&
                                    `$${coursePrices.totalGrossAmt}`}
                                </p>
                                <p className='m-0'>
                                  {coursePrices.totalTax &&
                                    `${coursePrices.totalTax}%`}
                                </p>
                                <p className='m-0'>
                                  {coursePrices.totalDiscount &&
                                    `${coursePrices.totalDiscount}%`}
                                </p>
                                <h6>
                                  {coursePrices.grandTotal &&
                                    `$${coursePrices.grandTotal}`}
                                </h6>
                              </div>
                            </div>
                            <button
                              type='button'
                              className='btn btn-info w-100 mt-3'
                              onClick={saveQuotationData}
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
            <div className='progress'>
              <div
                className='progress-bar'
                role='progressbar'
                style={{
                  width:
                    event === "customer"
                      ? "25%"
                      : event === "course"
                      ? "50%"
                      : event === "address"
                      ? "75%"
                      : "100%",
                }}
              />
            </div>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <button
          type='button'
          onClick={handlePrevious}
          disabled={event === "customer"}
          className='btn me-auto sw-btn-prev sw-btn'
        >
          Previous
        </button>
        <button
          type='button'
          onClick={handleNext}
          disabled={event === "preview"}
          className='btn btn-primary next-btn'
        >
          Next
        </button>
      </Modal.Footer>
    </Modal>
  );
}
