/* eslint-disable default-case */
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import {
  educationalConstant,
  nationality,
} from "../../Constants/newLeadContants";
import {
  emailPattern,
  mustBe10,
  mustBe6to16,
  mustBe9to10,
  namePattern,
  phonePattern,
} from "../../common-components/validations";
import { useEffect, useState } from "react";
import { AxiosInstance } from "../../common-components/axiosInstance";
import { filePath } from "../../common-components/useCommonUsableFunctions";

export const AddNewLeadModel = ({
  setIsOpen,
  isOpen,
  leadData,
  callback,
  viewLead,
}) => {
  const [tradeLevels, setTradeLevels] = useState([]);
  const [allCourses, setAllCourses] = useState([]);
  const [tradeTypes, setTradeTypes] = useState([]);
  const [registrationTypes, setRegistrationTypes] = useState([]);

  const {
    register,
    reset,
    getValues,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
      if (leadData) {
        const registrationLevels = data.filter((e) => {
          if (e._id == leadData.registrationType) return e;
        });
        if (registrationLevels)
          setTradeLevels(registrationLevels[0].tradeLevelIds);
      }
    } catch (err) {
      console.error(err);
    }
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    getTradeTypes();
    getRegistrationTypes();
    if (leadData) {
      getLead();
      if (leadData.getPayment && leadData.confirmed) {
        getFilteredCourses();
      }
    }
  }, []);

  const setCoreTradeRegNo = () => {
    const CTDnumber =
      watch("registrationType") +
      "-" +
      watch("tradeLevel") +
      "-" +
      1234 +
      "-" +
      watch("tradeType");
    return CTDnumber;
  };

  const getFilteredCourses = async () => {
    try {
      const { data } = await AxiosInstance.get("/courses/getFilteredCourses", {
        params: leadData,
      });
      setAllCourses(data);
    } catch (err) {
      console.error(err);
    }
  };

  const addNewLead = async (newLead) => {
    try {
      if (newLead?.registrationType != "CRW")
        newLead["coreTradeRegNo"] = setCoreTradeRegNo();
      const formdata = new FormData();
      if (newLead.passportCopy)
        if (Object.keys(newLead.passportCopy).length)
          for (let file of newLead.passportCopy) {
            newLead["passportCopy"] = file.name;
            formdata.append("files", file);
          }
      if (newLead.bcaAcknowledgementNotice)
        if (Object.keys(newLead.bcaAcknowledgementNotice).length)
          for (let file of newLead.bcaAcknowledgementNotice) {
            newLead["bcaAcknowledgementNotice"] = file.name;
            formdata.append("files", file);
          }
      if (newLead.nricWorkDocument)
        if (Object.keys(newLead.nricWorkDocument).length)
          for (let file of newLead.nricWorkDocument) {
            newLead["nricWorkDocument"] = file.name;
            formdata.append("files", file);
          }
      if (newLead.MOMEploymentDetails)
        if (Object.keys(newLead.MOMEploymentDetails).length)
          for (let file of newLead.MOMEploymentDetails) {
            newLead["MOMEploymentDetails"] = file.name;
            formdata.append("files", file);
          }
      if (newLead.skillEvaluationCertificate)
        if (Object.keys(newLead.skillEvaluationCertificate).length)
          for (let file of newLead.skillEvaluationCertificate) {
            newLead["skillEvaluationCertificate"] = file.name;
            formdata.append("files", file);
          }
      if (newLead.paQuotaCopy)
        if (Object.keys(newLead.paQuotaCopy).length)
          for (let file of newLead.paQuotaCopy) {
            newLead["paQuotaCopy"] = file.name;
            formdata.append("files", file);
          }
      if (newLead.workersIc)
        if (Object.keys(newLead.workersIc).length)
          for (let file of newLead.workersIc) {
            newLead["workersIc"] = file.name;
            formdata.append("files", file);
          }
      if (newLead.workersPassport)
        if (Object.keys(newLead.workersPassport).length)
          for (let file of newLead.workersPassport) {
            newLead["workersPassport"] = file.name;
            formdata.append("files", file);
          }
      const { data } = await AxiosInstance.post("/leads/addNewLead", formdata, {
        params: newLead,
      });
      callback(data.newLead);
      handleClose();
    } catch (err) {
      console.error(err);
    }
  };

  const changeRegistrationType = ({ value }) => {
    setValue("registrationType", value);
    if (value !== "AMN") {
      setValue("myeNo", "");
      setValue("paReferenceNo", "");
      setValue("nationality", "");
      setValue("participantIcNo", "");
    } else if (value == "AMN") {
      setValue("participantNRIC", "");
      setValue("participantMobile", "");
      setValue("alternateMobile", "");
    }
    const registrationLevels = registrationTypes.filter((e) => {
      if (e._id == value) return e;
    });
    setTradeLevels(registrationLevels[0].tradeLevelIds);
    setValue("bcaAcknowledgementNotice", null);
    setValue("nricWorkDocument", null);
    setValue("passportCopy", null);
    setValue("MOMEploymentDetails", null);
    setValue("skillEvaluationCertificate", null);
    emptyCase5Files();
  };

  const emptyCase5Files = () => {
    setValue("paQuotaCopy", null);
    setValue("workersIc", null);
    setValue("workersPassport", null);
  };

  const editLead = async (leadData) => {
    try {
      const deleteFiles = [];
      const updateFiles = [];
      if (leadData?.registrationType != "CRW")
        leadData["coreTradeRegNo"] = setCoreTradeRegNo();
      const formdata = new FormData();
      if (leadData.passportCopy)
        if (leadData.passportCopy[0]?.name) {
          deleteFiles.push(leadData.fileLocations["passportCopy"]);
          leadData.fileLocations["passportCopy"] = "";
          for (let file of leadData.passportCopy) {
            leadData["passportCopy"] = file.name;
            updateFiles.push({ passportCopy: file.name });
            formdata.append("files", file);
          }
        }
      if (leadData.bcaAcknowledgementNotice)
        if (leadData.bcaAcknowledgementNotice[0].name) {
          deleteFiles.push({ notice: leadData.fileLocations["notice"] });
          leadData.fileLocations["notice"] = "";
          for (let file of leadData.bcaAcknowledgementNotice) {
            leadData["bcaAcknowledgementNotice"] = file.name;
            updateFiles.push({ notice: file.name });
            formdata.append("files", file);
          }
        }
      if (leadData.nricWorkDocument)
        if (leadData.nricWorkDocument[0].name) {
          deleteFiles.push({ nric: leadData.fileLocations["nric"] });
          leadData.fileLocations["nric"] = "";
          for (let file of leadData.nricWorkDocument) {
            updateFiles.push({ nric: file.name });
            leadData["nricWorkDocument"] = file.name;
            formdata.append("files", file);
          }
        }
      if (leadData.MOMEploymentDetails)
        if (leadData.MOMEploymentDetails[0].name) {
          deleteFiles.push({ MOME: leadData.fileLocations["MOME"] });
          leadData.fileLocations["MOME"] = "";
          for (let file of leadData.MOMEploymentDetails) {
            updateFiles.push({ MOME: file.name });
            leadData["MOMEploymentDetails"] = file.name;
            formdata.append("files", file);
          }
        }
      if (leadData.skillEvaluationCertificate)
        if (leadData.skillEvaluationCertificate[0].name) {
          deleteFiles.push({ skill: leadData.fileLocations["skill"] });
          leadData.fileLocations["skill"] = "";
          for (let file of leadData.skillEvaluationCertificate) {
            updateFiles.push({ skill: file.name });
            leadData["skillEvaluationCertificate"] = file.name;
            formdata.append("files", file);
          }
        }
      if (leadData.paQuotaCopy)
        if (leadData.paQuotaCopy[0].name) {
          deleteFiles.push({ pa: leadData.fileLocations["pa"] });
          leadData.fileLocations["pa"] = "";
          for (let file of leadData.paQuotaCopy) {
            updateFiles.push({ pa: file.name });
            leadData["paQuotaCopy"] = file.name;
            formdata.append("files", file);
          }
        }
      if (leadData.workersIc)
        if (leadData.workersIc[0].name) {
          deleteFiles.push({ ISC: leadData.fileLocations["ISC"] });
          leadData.fileLocations["ISC"] = "";
          for (let file of leadData.workersIc) {
            updateFiles.push({ ISC: file.name });
            leadData["workersIc"] = file.name;
            formdata.append("files", file);
          }
        }
      if (leadData.workersPassport)
        if (leadData.workersPassport[0].name) {
          deleteFiles.push({
            workersPassport: leadData.fileLocations["workersPassport"],
          });
          leadData.fileLocations["workersPassport"] = "";
          for (let file of leadData.workersPassport) {
            updateFiles.push({ workersPassport: file.name });
            leadData["workersPassport"] = file.name;
            formdata.append("files", file);
          }
        }
      leadData["updateFiles"] = updateFiles;
      leadData["deleteFileList"] = deleteFiles;
      const { data } = await AxiosInstance.post("/leads/updateLead", formdata, {
        params: leadData,
      });
      callback(data.updatedLead);
      handleClose();
    } catch (err) {
      console.error(err);
    }
  };

  const getLead = async () => {
    try {
      const { data } = await AxiosInstance.get("/leads/getLead", {
        params: leadData,
      });
      reset(data[0]);
    } catch (err) {
      console.error(err);
    }
  };

  const openFile = (fileName) => {
    const fileData = watch(fileName);
    if (fileData)
      if (fileData[0]?.name) {
        const fileUrl = URL.createObjectURL(watch(fileName)[0]);
        window.open(fileUrl);
        return;
      }
    const selectedFilePath = leadData.fileLocations[fileName];

    const leadUrl = filePath(selectedFilePath);
    window.open(leadUrl);
  };

  const getPaymentRegistration = async () => {
    try {
      const getPaymentData = await AxiosInstance.post(
        "/leads/getPayment",
        leadData
      );
      leadData.getPayment = true;
      callback(leadData);
      handleClose();
    } catch (err) {
      console.error(err);
    }
  };

  const confirmRegistration = async () => {
    try {
      const confirmPayment = await AxiosInstance.post(
        "/leads/confirmPayment",
        leadData
      );
      leadData.confirmed = true;
      callback(leadData);
      handleClose();
    } catch (err) {
      console.error(err);
    }
  };

  const rejectRegistration = async () => {
    try {
      console.log("reject registration");
    } catch (err) {
      console.error(err);
    }
  };

  const confirmCourseAssigned = async (updatedLead) => {
    try {
      const { data } = await AxiosInstance.post(
        "/leads/assignCourse",
        updatedLead
      );
      callback(updatedLead);
      handleClose();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Modal show={isOpen} onHide={handleClose} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>
            <h5 className="modal-title add-Customer-title">
              {viewLead ? "View" : leadData ? "Update" : "Add New"} Lead
            </h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(leadData ? editLead : addNewLead)}>
            <div className="row">
              <div className="col-md-12 mb-3">
                <label className="form-label">
                  Registration Type <span className="text-danger">*</span>
                </label>
                <select
                  className="form-select"
                  {...register("registrationType", {
                    required: "Please select registration type",
                    onChange: ({ target }) => changeRegistrationType(target),
                  })}
                  disabled={viewLead}
                >
                  <option value="" selected>
                    Select Registration Type
                  </option>
                  {registrationTypes.map((e) => (
                    <option
                      value={e._id}
                      selected={e._id == watch("registrationType") && e._id}
                    >
                      {e.registrationName}
                    </option>
                  ))}
                </select>
                <span className="text-danger">
                  {errors?.registrationType && errors?.registrationType.message}
                </span>
              </div>
              <div className="col-md-4 mb-3">
                <label className="form-label">Company Name</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("companyName", {
                    required: "Please Enter Company Name",
                    pattern: namePattern,
                  })}
                  disabled={viewLead}
                  placeholder="Enter Company Name"
                />
                <span className="text-danger">
                  {errors?.companyName && errors?.companyName.message}
                </span>
              </div>
              <div className="col-md-4 mb-3">
                <label className="form-label">Company UEN No.</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("companyUEN", {
                    required: "Please Enter Company UEN ",
                    pattern: mustBe9to10,
                  })}
                  disabled={viewLead}
                  placeholder="Enter Company UEN "
                />
                <span className="text-danger">
                  {errors?.companyUEN && errors?.companyUEN.message}
                </span>
              </div>
              <div className="col-md-4 mb-3">
                <label className="form-label">Company Address</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("companyAddress", {
                    required: "Please Enter Company Address",
                    pattern: namePattern,
                  })}
                  placeholder="Enter Company Address"
                  disabled={viewLead}
                />
                <span className="text-danger">
                  {errors?.companyAddress && errors?.companyAddress.message}
                </span>
              </div>
              <div className="col-md-4 mb-3">
                <label className="form-label">Postal Code</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("postalCode", {
                    required: "Please Enter Postal Code",
                    pattern: mustBe6to16,
                  })}
                  disabled={viewLead}
                  placeholder="Enter Postal Code"
                />
                <span className="text-danger">
                  {errors?.postalCode && errors?.postalCode.message}
                </span>
              </div>
              <div className="col-md-4 mb-3">
                <label className="form-label">Contact Person</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("contactPerson", {
                    required: "Please Enter Contact Person",
                    pattern: namePattern,
                  })}
                  disabled={viewLead}
                  placeholder="Enter Contact Person"
                />
                <span className="text-danger">
                  {errors?.contactPerson && errors?.contactPerson.message}
                </span>
              </div>
              <div className="col-md-4 mb-3">
                <label className="form-label">Contact Person's Mobile</label>
                <input
                  type="tel"
                  className="form-control"
                  {...register("contactPersonMobile", {
                    required: "Please Enter Contact Person's Mobile",
                    pattern: phonePattern,
                  })}
                  disabled={viewLead}
                  placeholder="Enter Contact Person's Mobile"
                />
                <span className="text-danger">
                  {errors?.contactPersonMobile &&
                    errors?.contactPersonMobile.message}
                </span>
              </div>
              <div className="col-md-4 mb-3">
                <label className="form-label">
                  Contact Person's Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  {...register("contactPersonEmail", {
                    required: "Please Enter Contact Person's Email Address",
                    pattern: emailPattern,
                  })}
                  disabled={viewLead}
                  placeholder="Enter Contact Person's Email Address"
                />
                <span className="text-danger">
                  {errors?.contactPersonEmail &&
                    errors?.contactPersonEmail.message}
                </span>
              </div>
              <div className="col-md-4 mb-3">
                <label className="form-label">Office Telephone No.</label>
                <input
                  type="tel"
                  className="form-control"
                  {...register("officeTelephone", {
                    required: "Please Enter Office Telephone No.",
                    pattern: {
                      value: /^.[0-9]{8,10}$/,
                      message: "Must have 8 to 10 numeric characters",
                    },
                  })}
                  disabled={viewLead}
                  placeholder="Enter Office Telephone No."
                />
                <span className="text-danger">
                  {errors?.officeTelephone && errors?.officeTelephone.message}
                </span>
              </div>
              <div className="col-md-4 mb-3">
                <label className="form-label">Office Fax No.</label>
                <input
                  type="tel"
                  className="form-control"
                  {...register("officeFax", {
                    required: "Please Enter Office Fax No.",
                    pattern: {
                      value: /^.[0-9]{8,10}$/,
                      message: "Must have 8 to 10 numeric characters",
                    },
                  })}
                  disabled={viewLead}
                  placeholder="Enter Office Fax No."
                />
                <span className="text-danger">
                  {errors?.officeFax && errors?.officeFax.message}
                </span>
              </div>
              {watch("registrationType") == "AMN" ? (
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <label className="form-label">MYE No.</label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("myeNo", {
                        required: "Please Enter MYE No",
                        pattern: mustBe10,
                      })}
                      disabled={viewLead}
                      placeholder="Enter MYE No"
                    />
                    <span className="text-danger">
                      {errors?.myeNo && errors?.myeNo.message}
                    </span>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Pa Reference No.</label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("paReferenceNo", {
                        required: "Please Enter Pa Reference No.",
                        pattern: mustBe10,
                      })}
                      disabled={viewLead}
                      placeholder="Enter Pa Reference No."
                    />
                    <span className="text-danger">
                      {errors?.paReferenceNo && errors?.paReferenceNo.message}
                    </span>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Name of Participant</label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("participantName", {
                        required: "Please Enter Name of Participant",
                        pattern: namePattern,
                      })}
                      disabled={viewLead}
                      placeholder="Enter Name of Participant"
                    />
                    <span className="text-danger">
                      {errors?.participantName &&
                        errors?.participantName.message}
                    </span>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Participant's IC No.</label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("participantIcNo", {
                        required: "Please Enter Participant's IC No",
                        pattern: {
                          value: /^.{15,18}$/,
                          message: "must have 15 to 18 characters",
                        },
                      })}
                      disabled={viewLead}
                      placeholder="Enter Participant's IC No"
                    />
                    <span className="text-danger">
                      {errors?.participantIcNo &&
                        errors?.participantIcNo.message}
                    </span>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Date Of Birth</label>
                    <input
                      type="date"
                      className="form-control"
                      {...register("DOB", {
                        required: "Please Enter Date Of Birth",
                      })}
                      disabled={viewLead}
                    />
                    <span className="text-danger">
                      {errors?.DOB && errors?.DOB.message}
                    </span>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Nationality</label>
                    <select
                      className="form-select"
                      {...register("nationality", {
                        required: "This Field Is Required",
                      })}
                      disabled={viewLead}
                    >
                      <option value="" disabled selected>
                        Select Nationality
                      </option>
                      {nationality.map((e) => (
                        <option
                          value={e.value}
                          selected={e.value == watch("nationality") && e.value}
                        >
                          {e.name}
                        </option>
                      ))}
                    </select>
                    <span className="text-danger">
                      {errors?.nationality && errors?.nationality.message}
                    </span>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label">
                      Educational / Vocational Level
                    </label>
                    <select
                      className="form-select"
                      {...register("educationalLevel", {
                        required: "This Field Is Required",
                      })}
                      disabled={viewLead}
                    >
                      <option value="" disabled selected>
                        Select Nationality
                      </option>
                      {educationalConstant.map((e) => (
                        <option
                          value={e.value}
                          selected={
                            e.value == watch("educationalLevel") && e.value
                          }
                        >
                          {e.name}
                        </option>
                      ))}
                    </select>
                    <span className="text-danger">
                      {errors?.educationalLevel &&
                        errors?.educationalLevel.message}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Name of Participant</label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("participantName", {
                        required: "Please Enter Name of Participant",
                        pattern: namePattern,
                      })}
                      disabled={viewLead}
                      placeholder="Enter Name of Participant"
                    />
                    <span className="text-danger">
                      {errors?.participantName &&
                        errors?.participantName.message}
                    </span>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label">
                      Participant's NRIC / FIN No.
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("participantNRIC", {
                        required: "Please Enter Participant's NRIC / FIN No.",
                        pattern: {
                          value: /^.{9}$/,
                          message: "Must Be 9 characters.",
                        },
                      })}
                      disabled={viewLead}
                      placeholder="Enter Participant's NRIC / FIN No."
                    />
                    <span className="text-danger">
                      {errors?.participantNRIC &&
                        errors?.participantNRIC.message}
                    </span>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Participant's Mobile</label>
                    <input
                      type="tel"
                      className="form-control"
                      {...register("participantMobile", {
                        required: "Please Enter Participant's Mobile",
                        pattern: phonePattern,
                      })}
                      disabled={viewLead}
                      placeholder="Enter Participant's Mobile"
                    />
                    <span className="text-danger">
                      {errors?.participantMobile &&
                        errors?.participantMobile.message}
                    </span>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label">
                      Alternate Mobile Number (if any)
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      {...register("alternateMobile", {
                        pattern: phonePattern,
                      })}
                      disabled={viewLead}
                      placeholder="Enter Alternate Mobile Number (if any)"
                    />
                    <span className="text-danger">
                      {errors?.alternateMobile &&
                        errors?.alternateMobile.message}
                    </span>
                  </div>
                </div>
              )}
              <div className="col-md-4 mb-3">
                <label className="form-label">Trade Type</label>
                <select
                  className="form-select"
                  {...register("tradeType", {
                    required: "This Field Is Required",
                  })}
                  disabled={viewLead}
                >
                  <option value="" disabled>
                    Select Trade Type
                  </option>
                  {tradeTypes.map((e) => (
                    <option value={e._id} selected={e._id}>
                      {e.tradeType}
                    </option>
                  ))}
                </select>
                <span className="text-danger">
                  {errors?.tradeType && errors?.tradeType.message}
                </span>
              </div>
              {watch("registrationType") == "CRW" ? (
                <div className="col-md-4 mb-3">
                  <label className="form-label">
                    CoreTrade / Multi-skilling/Direct R1 Registration No
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="coreTradeRegNo"
                    {...register("coreTradeRegNo", {
                      required: "This field is required !",
                    })}
                    disabled={viewLead}
                    placeholder="Enter CoreTrade / Multi-skilling/Direct R1 Registration No"
                  />
                  <span className="text-danger">
                    {errors?.coreTradeRegNo && errors?.coreTradeRegNo?.message}
                  </span>
                </div>
              ) : (
                <div className="col-md-4 mb-3">
                  <label className="form-label">Trade Level</label>
                  <select
                    className="form-select"
                    {...register("tradeLevel", {
                      required: "This Field Is Required",
                    })}
                    disabled={viewLead}
                  >
                    <option value="" disabled selected>
                      Select Trade Level
                    </option>
                    {tradeLevels.map((e) => (
                      <option
                        value={e._id}
                        selected={e._id == watch("tradeLevel") && e._id}
                      >
                        {e.tradeLevel}
                      </option>
                    ))}
                  </select>
                  <span className="text-danger">
                    {errors?.tradeLevel && errors?.tradeLevel.message}
                  </span>
                </div>
              )}
              {leadData?.getPayment && leadData?.confirmed && (
                <div className="col-md-4 mb-3">
                  <label className="form-label">Course</label>
                  <select
                    className="form-select"
                    {...register("course", {
                      required: "Please Select Course !",
                    })}
                    disabled={leadData?.courseAssigned && viewLead}
                  >
                    <option value="" disabled selected>
                      Select Course
                    </option>
                    {allCourses.map((e) => (
                      <option
                        value={e._id}
                        selected={e._id == watch("course") && e._id}
                      >
                        {e.courseName}
                      </option>
                    ))}
                  </select>
                  <span className="text-danger">
                    {errors?.course && errors?.course.message}
                  </span>
                </div>
              )}
              <div className="row">
                <div className="col-md-12 mb-3">
                  <hr />
                  <h4>
                    {viewLead ? "View" : "Upload"} Documents{" "}
                    <span className="text-danger">*</span>
                  </h4>
                </div>
                <div className="col-md-12">
                  {watch("registrationType") &&
                    watch("registrationType") != "AMN" && (
                      <div className="row" id="show1">
                        {watch("registrationType") != "SK" && (
                          <div className="col-md-4 mb-3">
                            <label className="form-label">
                              Valid BCA Acknowledgement Notice
                            </label>
                            <input
                              type={
                                watch("bcaAcknowledgementNotice") &&
                                watch("bcaAcknowledgementNotice")[0]?.name
                                  ? "file"
                                  : !watch("bcaAcknowledgementNotice")
                                  ? "file"
                                  : "text"
                              }
                              className="form-control"
                              {...register("bcaAcknowledgementNotice", {
                                required: "This field is required",
                              })}
                              disabled={watch("bcaAcknowledgementNotice")}
                            />
                            {watch("bcaAcknowledgementNotice") && (
                              <div>
                                <div className="input-icons">
                                  {!viewLead && (
                                    <i
                                      className="fas fa-trash text-danger cursor-pointer"
                                      onClick={() =>
                                        setValue(
                                          "bcaAcknowledgementNotice",
                                          null
                                        )
                                      }
                                    ></i>
                                  )}
                                  <i
                                    className="fas fa-eye text-primary cursor-pointer"
                                    onClick={() =>
                                      openFile(
                                        watch("bcaAcknowledgementNotice")[0]
                                          ?.name
                                          ? "bcaAcknowledgementNotice"
                                          : "notice"
                                      )
                                    }
                                  ></i>
                                </div>
                              </div>
                            )}
                            <span className="text-danger">
                              {errors?.bcaAcknowledgementNotice &&
                                errors?.bcaAcknowledgementNotice.message}
                            </span>
                          </div>
                        )}
                        <div className="col-md-4 mb-3">
                          <label className="form-label">
                            Valid copy of NRIC / Work document
                          </label>
                          <input
                            type={
                              watch("nricWorkDocument") &&
                              watch("nricWorkDocument")[0]?.name
                                ? "file"
                                : !watch("nricWorkDocument")
                                ? "file"
                                : "text"
                            }
                            className="form-control"
                            {...register("nricWorkDocument", {
                              required: "This field is required",
                            })}
                            disabled={watch("nricWorkDocument")}
                          />
                          {watch("nricWorkDocument") && (
                            <div>
                              <div className="input-icons">
                                {!viewLead && (
                                  <i
                                    className="fas fa-trash text-danger cursor-pointer"
                                    onClick={() =>
                                      setValue("nricWorkDocument", null)
                                    }
                                  ></i>
                                )}
                                <i
                                  className="fas fa-eye text-primary cursor-pointer"
                                  onClick={() =>
                                    openFile(
                                      watch("nricWorkDocument")[0]?.name
                                        ? "nricWorkDocument"
                                        : "nric"
                                    )
                                  }
                                ></i>
                              </div>
                            </div>
                          )}
                          <span className="text-danger">
                            {errors?.nricWorkDocument &&
                              errors?.nricWorkDocument.message}
                          </span>
                        </div>
                        {watch("registrationType") != "CRW" && (
                          <div className="col-md-4 mb-3">
                            <label className="form-label">
                              Valid Copy Of Passport
                            </label>
                            <input
                              type={
                                watch("passportCopy") &&
                                watch("passportCopy")[0]?.name
                                  ? "file"
                                  : !watch("passportCopy")
                                  ? "file"
                                  : "text"
                              }
                              className="form-control"
                              {...register("passportCopy", {
                                required: "This field is required",
                              })}
                              disabled={watch("passportCopy")}
                            />
                            {watch("passportCopy") && (
                              <div>
                                <div className="input-icons">
                                  {!viewLead && (
                                    <i
                                      className="fas fa-trash text-danger cursor-pointer"
                                      onClick={() =>
                                        setValue("passportCopy", null)
                                      }
                                    ></i>
                                  )}
                                  <i
                                    className="fas fa-eye text-primary cursor-pointer"
                                    onClick={() => openFile("passportCopy")}
                                  ></i>
                                </div>
                              </div>
                            )}
                            <span className="text-danger">
                              {errors?.passportCopy &&
                                errors?.passportCopy.message}
                            </span>
                          </div>
                        )}
                        {watch("registrationType") != "CRW" && (
                          <div className="col-md-4 mb-3">
                            <label className="form-label">
                              Valid Copy Of MOM Employment Details
                            </label>
                            <input
                              type={
                                watch("MOMEploymentDetails") &&
                                watch("MOMEploymentDetails")[0]?.name
                                  ? "file"
                                  : !watch("MOMEploymentDetails")
                                  ? "file"
                                  : "text"
                              }
                              className="form-control"
                              {...register("MOMEploymentDetails", {
                                required: "This field is required",
                              })}
                              disabled={watch("MOMEploymentDetails")}
                            />
                            {watch("MOMEploymentDetails") && (
                              <div>
                                <div className="input-icons">
                                  {!viewLead && (
                                    <i
                                      className="fas fa-trash text-danger cursor-pointer"
                                      onClick={() =>
                                        setValue("MOMEploymentDetails", null)
                                      }
                                    ></i>
                                  )}
                                  <i
                                    className="fas fa-eye text-primary cursor-pointer"
                                    onClick={() =>
                                      openFile(
                                        watch("MOMEploymentDetails")[0]?.name
                                          ? "MOMEploymentDetails"
                                          : "MOME"
                                      )
                                    }
                                  ></i>
                                </div>
                              </div>
                            )}
                            <span className="text-danger">
                              {errors?.MOMEploymentDetails &&
                                errors?.MOMEploymentDetails.message}
                            </span>
                          </div>
                        )}
                        {watch("registrationType") == "MSG" && (
                          <div className="col-md-4 mb-3">
                            <label className="form-label">
                              1st Skill Evaluation Certificate / BCA Skills
                              Qualification Statement
                            </label>
                            <input
                              type={
                                watch("skillEvaluationCertificate") &&
                                watch("skillEvaluationCertificate")[0]?.name
                                  ? "file"
                                  : !watch("skillEvaluationCertificate")
                                  ? "file"
                                  : "text"
                              }
                              className="form-control"
                              {...register("skillEvaluationCertificate", {
                                required: "This field is required",
                              })}
                              disabled={watch("skillEvaluationCertificate")}
                            />
                            {watch("skillEvaluationCertificate") && (
                              <div>
                                <div className="input-icons">
                                  {!viewLead && (
                                    <i
                                      className="fas fa-trash text-danger cursor-pointer"
                                      onClick={() =>
                                        setValue(
                                          "skillEvaluationCertificate",
                                          ""
                                        )
                                      }
                                    ></i>
                                  )}
                                  <i
                                    className="fas fa-eye text-primary cursor-pointer"
                                    onClick={() =>
                                      openFile(
                                        watch("skillEvaluationCertificate")[0]
                                          ?.name
                                          ? "skillEvaluationCertificate"
                                          : "skill"
                                      )
                                    }
                                  ></i>
                                </div>
                              </div>
                            )}

                            <span className="text-danger">
                              {errors?.skillEvaluationCertificate &&
                                errors?.skillEvaluationCertificate.message}
                            </span>
                          </div>
                        )}
                      </div>
                    )}
                  {watch("registrationType") == "AMN" && (
                    <div className="row" id="show5">
                      <div className="col-md-4 mb-3">
                        <label className="form-label">
                          Copy Of PA Quota（PA复印件）
                        </label>
                        <input
                          type={
                            watch("paQuotaCopy") &&
                            watch("paQuotaCopy")[0]?.name
                              ? "file"
                              : !watch("paQuotaCopy")
                              ? "file"
                              : "text"
                          }
                          className="form-control"
                          {...register("paQuotaCopy", {
                            required: "This field is required",
                          })}
                          disabled={watch("paQuotaCopy")}
                        />
                        {watch("paQuotaCopy") && (
                          <div>
                            <div className="input-icons">
                              {!viewLead && (
                                <i
                                  className="fas fa-trash text-danger cursor-pointer"
                                  onClick={() => setValue("paQuotaCopy", null)}
                                ></i>
                              )}{" "}
                              <i
                                className="fas fa-eye text-primary cursor-pointer"
                                onClick={() =>
                                  openFile(
                                    watch("paQuotaCopy")[0]?.name
                                      ? "paQuotaCopy"
                                      : "pa"
                                  )
                                }
                              ></i>
                            </div>
                          </div>
                        )}
                        <span className="text-danger">
                          {errors?.paQuotaCopy && errors?.paQuotaCopy.message}
                        </span>
                      </div>
                      <div className="col-md-4 mb-3">
                        <label className="form-label">
                          Copy Of Worker's IC 员工的身份证复印件
                        </label>
                        <input
                          type={
                            watch("workersIc") && watch("workersIc")[0]?.name
                              ? "file"
                              : !watch("workersIc")
                              ? "file"
                              : "text"
                          }
                          className="form-control"
                          {...register("workersIc", {
                            required: "This field is required",
                          })}
                          disabled={watch("workersIc")}
                        />
                        {watch("workersIc") && (
                          <div>
                            <div className="input-icons">
                              {!viewLead && (
                                <i
                                  className="fas fa-trash text-danger cursor-pointer"
                                  onClick={() => setValue("workersIc", null)}
                                ></i>
                              )}{" "}
                              <i
                                className="fas fa-eye text-primary cursor-pointer"
                                onClick={() =>
                                  openFile(
                                    watch("workersIc")[0]?.name
                                      ? "workersIc"
                                      : "ISC"
                                  )
                                }
                              ></i>
                            </div>
                          </div>
                        )}
                        <span className="text-danger">
                          {errors?.workersIc && errors?.workersIc.message}
                        </span>
                      </div>
                      <div className="col-md-4 mb-3">
                        <label className="form-label">
                          Copy Of Worker's Passport (if available)
                          员工的护照复印件 - 如有请提供
                        </label>
                        <input
                          type={
                            watch("workersPassport") &&
                            watch("workersPassport")[0]?.name
                              ? "file"
                              : !watch("workersPassport")
                              ? "file"
                              : "text"
                          }
                          className="form-control"
                          {...register("workersPassport", {
                            required: "This field is required",
                          })}
                          disabled={watch("workersPassport")}
                        />
                        {watch("workersPassport") && (
                          <div>
                            <div className="input-icons">
                              {!viewLead && (
                                <i
                                  className="fas fa-trash text-danger cursor-pointer"
                                  onClick={() =>
                                    setValue("workersPassport", null)
                                  }
                                ></i>
                              )}
                              <i
                                className="fas fa-eye text-primary cursor-pointer"
                                onClick={() => openFile("workersPassport")}
                              ></i>
                            </div>
                          </div>
                        )}
                        <span className="text-danger">
                          {errors?.workersPassport &&
                            errors?.workersPassport.message}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <Modal.Footer>
              <div>
                <div className="d-flex">
                  <div className="d-flex col-lg-12 text-end">
                    {!viewLead && (
                      <button type="submit" className="mx-1 btn btn-primary">
                        {leadData ? "Update" : "Add New"}
                      </button>
                    )}
                    {viewLead && (
                      <div className="d-flex">
                        {!leadData.getPayment && (
                          <button
                            type="button"
                            onClick={getPaymentRegistration}
                            class="btn mx-1 btn-primary"
                          >
                            Get Payment
                          </button>
                        )}
                        {leadData.getPayment && !leadData.confirmed && (
                          <div className="d-flex">
                            <button
                              type="button"
                              onClick={confirmRegistration}
                              class="btn mx-1 btn-success"
                            >
                              Confirm
                            </button>
                            <button
                              type="button"
                              onClick={rejectRegistration}
                              class="btn mx-1 btn-danger"
                            >
                              Reject
                            </button>
                          </div>
                        )}
                        {leadData.getPayment &&
                          leadData.confirmed &&
                          !leadData.courseAssigned && (
                            <div className="d-flex">
                              <button
                                type="submit"
                                onClick={confirmCourseAssigned}
                                class="btn mx-1 btn-success"
                              >
                                Assign Course
                              </button>
                            </div>
                          )}
                      </div>
                    )}
                    <button
                      type="button"
                      onClick={handleClose}
                      className="mx-1 btn btn-secondary"
                    >
                      Discard
                    </button>
                  </div>
                </div>
              </div>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};