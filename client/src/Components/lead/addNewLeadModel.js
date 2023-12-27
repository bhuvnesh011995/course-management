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
import { filePath } from "../../common-components/useCommonUsableFunctions";
import { CreateBankPdf, CreatePaymentPdfBase64 } from "./createPdfDcument";
import { toast } from "react-toastify";
import moment from "moment";
import { FormattedMessage } from "react-intl";
import { useAuth } from "../../context/authContext";

export const AddNewLeadModel = ({
  setIsOpen,
  isOpen,
  leadData,
  callback,
  viewLead,
  registrationTypes,
  tradeTypes,
}) => {
  const { user, NewAxiosInstance } = useAuth();
  const [tradeLevels, setTradeLevels] = useState([]);
  const [allClasses, setAllClasses] = useState([]);
  const [selectedRegistration, setSelectedRegistration] = useState("");

  const {
    register,
    reset,
    setValue,
    watch,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (leadData) {
      getLead();
      if (leadData) {
        const registrationLevels = registrationTypes.filter((e) => {
          if (e._id == leadData.registrationType) return e;
        });
        if (registrationLevels) {
          setTradeLevels(registrationLevels[0].tradeLevels);
          setSelectedRegistration(registrationLevels[0].registrationCode);
        }
      }
    }
  }, []);

  useEffect(() => {
    // if (leadData?.status == "pending" && leadData.class) {
    if (watch("tradeType") || watch("registrationType") || watch("tradeLevel"))
      getFilteredClasses({
        tradeType: watch("tradeType"),
        registrationType: watch("registrationType"),
        tradeLevel: watch("tradeLevel"),
      });
    // }
  }, [watch("tradeLevel"), watch("tradeType"), watch("registrationType")]);

  const setCoreTradeRegNo = () => {
    const CTDnumber =
      selectedRegistration +
      "-" +
      tradeLevels.filter((e) => e._id == watch("tradeLevel"))[0].tradeCode +
      "-" +
      Date.now() +
      "-" +
      tradeTypes.filter((e) => e._id == watch("tradeType"))[0].typeCode;
    return CTDnumber;
  };

  const getFilteredClasses = async (selectedLead) => {
    try {
      const { data } = await NewAxiosInstance.get("/class/getFilteredClasses", {
        params: selectedLead,
      });
      setAllClasses(data);
    } catch (err) {
      console.error(err);
    }
  };

  const addNewLead = async (newLead) => {
    try {
      toast.dismiss();
      newLead["selectedRegistration"] = selectedRegistration;
      if (selectedRegistration != "CRW")
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
      formdata.append("leadData", JSON.stringify(newLead));
      const { data } = await NewAxiosInstance.post(
        "/leads/addNewLead",
        formdata,
      );
      toast.success("New Lead Added Successfully");
      callback(data.newLead);
      handleClose();
    } catch (err) {
      toast.error("error occured");
      console.error(err);
    }
  };

  const changeRegistrationType = ({ value }) => {
    const registrationLevels = registrationTypes.filter((e) => {
      if (e._id == value) return e;
    });
    setValue("tradeLevel", "");
    setSelectedRegistration(registrationLevels[0].registrationCode);
    // setValue("registrationType", registrationLevels[0].registrationCode);
    if (registrationLevels[0].registrationCode !== "AMN") {
      setValue("myeNo", "");
      setValue("paReferenceNo", "");
      setValue("nationality", "");
      setValue("participantIcNo", "");
    } else if (registrationLevels[0].registrationCode == "AMN") {
      setValue("participantNRIC", "");
      setValue("participantMobile", "");
      setValue("alternateMobile", "");
    }
    setTradeLevels(registrationLevels[0].tradeLevels);
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

  const editLead = async (newLeadData) => {
    try {
      toast.dismiss();
      newLeadData["selectedRegistration"] = selectedRegistration;
      const deleteFiles = [];
      if (leadData.registrationType != newLeadData.registrationType) {
        Object.keys(leadData.fileLocations).map((e) => {
          if (leadData.fileLocations[e])
            deleteFiles.push(leadData.fileLocations[e]);
        });
      }
      if (selectedRegistration != "CRW")
        newLeadData["coreTradeRegNo"] = setCoreTradeRegNo();
      const formdata = new FormData();
      if (newLeadData.passportCopy)
        if (newLeadData.passportCopy[0]?.name) {
          deleteFiles.push(newLeadData.fileLocations["passportCopy"]);
          newLeadData.fileLocations["passportCopy"] = "";
          for (let file of newLeadData.passportCopy) {
            newLeadData["passportCopy"] = file.name;
            formdata.append("files", file);
          }
        }
      if (newLeadData.bcaAcknowledgementNotice)
        if (newLeadData.bcaAcknowledgementNotice[0].name) {
          deleteFiles.push(newLeadData.fileLocations["notice"]);
          newLeadData.fileLocations["notice"] = "";
          for (let file of newLeadData.bcaAcknowledgementNotice) {
            newLeadData["bcaAcknowledgementNotice"] = file.name;
            formdata.append("files", file);
          }
        }
      if (newLeadData.nricWorkDocument)
        if (newLeadData.nricWorkDocument[0].name) {
          deleteFiles.push(newLeadData.fileLocations["nric"]);
          newLeadData.fileLocations["nric"] = "";
          for (let file of newLeadData.nricWorkDocument) {
            newLeadData["nricWorkDocument"] = file.name;
            formdata.append("files", file);
          }
        }
      if (newLeadData.MOMEploymentDetails)
        if (newLeadData.MOMEploymentDetails[0].name) {
          deleteFiles.push(newLeadData.fileLocations["MOME"]);
          newLeadData.fileLocations["MOME"] = "";
          for (let file of newLeadData.MOMEploymentDetails) {
            newLeadData["MOMEploymentDetails"] = file.name;
            formdata.append("files", file);
          }
        }
      if (newLeadData.skillEvaluationCertificate)
        if (newLeadData.skillEvaluationCertificate[0].name) {
          deleteFiles.push(newLeadData.fileLocations["skill"]);
          newLeadData.fileLocations["skill"] = "";
          for (let file of newLeadData.skillEvaluationCertificate) {
            newLeadData["skillEvaluationCertificate"] = file.name;
            formdata.append("files", file);
          }
        }
      if (newLeadData.paQuotaCopy)
        if (newLeadData.paQuotaCopy[0].name) {
          deleteFiles.push(newLeadData.fileLocations["pa"]);
          newLeadData.fileLocations["pa"] = "";
          for (let file of newLeadData.paQuotaCopy) {
            newLeadData["paQuotaCopy"] = file.name;
            formdata.append("files", file);
          }
        }
      if (newLeadData.workersIc)
        if (newLeadData.workersIc[0].name) {
          deleteFiles.push(newLeadData.fileLocations["ISC"]);
          newLeadData.fileLocations["ISC"] = "";
          for (let file of newLeadData.workersIc) {
            newLeadData["workersIc"] = file.name;
            formdata.append("files", file);
          }
        }
      if (newLeadData.workersPassport)
        if (newLeadData.workersPassport[0].name) {
          deleteFiles.push(newLeadData.fileLocations["workersPassport"]);
          newLeadData.fileLocations["workersPassport"] = "";
          for (let file of newLeadData.workersPassport) {
            newLeadData["workersPassport"] = file.name;
            formdata.append("files", file);
          }
        }

      if (watch("class")?.length) {
        newLeadData["class"] = watch("class");
        if (newLeadData["status"] == "new") newLeadData["status"] = "pending";
        else if (newLeadData["status"] == "assign")
          newLeadData["status"] = "assign";
      } else {
        setError("class", { message: "Please Select Class" });
        return;
      }
      newLeadData["deleteFileList"] = deleteFiles;
      formdata.append("leadData", JSON.stringify(newLeadData));
      const { data } = await NewAxiosInstance.post(
        "/leads/updateLead",
        formdata,
      );
      toast.success("Lead Updated Successfully");
      callback(data.updatedLead);
      handleClose();
    } catch (err) {
      toast.error("Error Occured");
      console.error(err);
    }
  };

  const getLead = async () => {
    try {
      const { data } = await NewAxiosInstance.get("/leads/getLead", {
        params: leadData,
      });
      if (data[0]) {
        if (data[0].DOB) data[0].DOB = moment(data[0].DOB).format("YYYY-MM-DD");
        reset(data[0]);
        if (leadData) {
          getFilteredClasses(data[0]);
        }
      }
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
    if (selectedFilePath.split("https://").length == 2) {
      window.open(selectedFilePath);
      return;
    }
    const leadUrl = filePath(selectedFilePath);
    window.open(leadUrl);
  };

  const getPaymentRegistration = async () => {
    try {
      toast.dismiss();
      const { data } = await NewAxiosInstance.get("/leads/getSelectedLead", {
        params: leadData,
      });
      const Subject = `APPROVAL OF ONLINE REGISTRATION ${leadData.tradeType} ${
        data?.lead?.tradeLevel && data?.lead?.tradeLevel
      }`;
      leadData["paymentPdfBase64"] = CreatePaymentPdfBase64(
        data.lead,
        Subject,
        data.user,
        user.otherConfigurations?.paymentPdfLogo,
      );
      leadData["bankDetailsPdfBase64"] = CreateBankPdf();
      leadData.status = "assign";
      const getPaymentData = await NewAxiosInstance.post(
        "/leads/getPayment",
        leadData,
      );
      if (getPaymentData.status == 200) {
        toast.success(getPaymentData.data.message);
        delete leadData.paymentPdfBase64;
        delete leadData.bankDetailsPdfBase64;
        callback(leadData, "getPayment");
      } else {
        toast.error("something went wrong");
      }

      handleClose();
    } catch (err) {
      toast.error("something went wrong");
      console.error(err);
    }
  };

  const confirmRegistration = async () => {
    try {
      const confirmPayment = await NewAxiosInstance.post(
        "/leads/confirmPayment",
        leadData,
      );
      if (confirmPayment.status == 200) {
        toast.success(confirmPayment.data.message);
        leadData.status = "confirmed";
        callback(leadData, "confirm");
      } else {
        toast.error("something went wrong");
      }
      handleClose();
    } catch (err) {
      toast.error("something went wrong");
      console.error(err);
    }
  };

  return (
    <div>
      <Modal show={isOpen} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>
            <h5 className='modal-title add-Customer-title'>
              {viewLead ? "View" : leadData ? "Update" : "Add New"} Lead
            </h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(leadData ? editLead : addNewLead)}>
            <div className='row'>
              <div className='col-md-12 mb-3'>
                <label className='form-label'>
                  Registration Type <span className='text-danger'>*</span>
                </label>
                <select
                  className='form-select'
                  {...register("registrationType", {
                    required: "Please select registration type",
                    onChange: ({ target }) => changeRegistrationType(target),
                  })}
                  disabled={viewLead}
                >
                  <option value=''>Select Registration Type</option>
                  {registrationTypes.map((e) => (
                    <option key={e._id} value={e._id}>
                      {e.registrationName}
                    </option>
                  ))}
                </select>
                <span className='text-danger'>
                  {errors?.registrationType && errors?.registrationType.message}
                </span>
              </div>
              <div className='col-md-12 mb-3'>
                <label className='form-label'>
                  Status <span className='text-danger'>*</span>
                </label>
                <select
                  className='form-select'
                  disabled={viewLead}
                  {...register("status", { required: "Please Select Status" })}
                >
                  <option value='' selected>
                    Select Status
                  </option>
                  <option value='new'>New</option>
                  <option value='pending'>Pending</option>
                  <option value='assign'>Assign</option>
                  <option value='confirmed'>Confirmed</option>
                </select>
              </div>
              <span className='text-danger'>
                {errors?.status && errors?.status.message}
              </span>
              <div className='col-md-12 mb-3'>
                <label className='form-label'>Remarks</label>
                <textarea
                  {...register("remarks")}
                  disabled={viewLead}
                  className='form-control'
                  cols='30'
                  rows='2'
                  placeholder='Enter Remarks'
                ></textarea>
              </div>
            </div>
            <div className='row'>
              <hr />
              <h4 className='mb-3'>Company Information</h4>{" "}
              <div className='col-md-12 mb-3'>
                <label className='form-label'>
                  Company Name <span className='text-danger'>*</span>
                </label>

                <FormattedMessage
                  id='Enter_Company_Name'
                  defaultMessage={"Enter Company Name"}
                >
                  {(placeholder) => (
                    <FormattedMessage
                      id='Please_Enter_Company_Name'
                      defaultMessage={"Please Emter Company Name"}
                    >
                      {(requiredMsg) => (
                        <input
                          type='text'
                          className='form-control'
                          {...register("companyName", {
                            required: requiredMsg[0],
                            pattern: namePattern,
                          })}
                          disabled={viewLead}
                          placeholder={placeholder}
                        />
                      )}
                    </FormattedMessage>
                  )}
                </FormattedMessage>

                <span className='text-danger'>
                  {errors?.companyName && errors?.companyName.message}
                </span>
              </div>
              <div className='col-md-12 mb-3'>
                <label className='form-label'>
                  Company UEN No. <span className='text-danger'>*</span>
                </label>
                <input
                  type='text'
                  className='form-control'
                  {...register("companyUEN", {
                    required: "Please Enter Company UEN ",
                    pattern: mustBe9to10,
                  })}
                  disabled={viewLead}
                  placeholder='Enter Company UEN '
                />
                <span className='text-danger'>
                  {errors?.companyUEN && errors?.companyUEN.message}
                </span>
              </div>
              <div className='col-md-12 mb-3'>
                <label className='form-label'>
                  Company Address <span className='text-danger'>*</span>
                </label>
                <input
                  type='text'
                  className='form-control'
                  {...register("companyAddress", {
                    required: "Please Enter Company Address",
                    pattern: namePattern,
                  })}
                  placeholder='Enter Company Address'
                  disabled={viewLead}
                />
                <span className='text-danger'>
                  {errors?.companyAddress && errors?.companyAddress.message}
                </span>
              </div>
              <div className='col-md-4 mb-3'>
                <label className='form-label'>
                  Postal Code <span className='text-danger'>*</span>
                </label>

                <input
                  type='text'
                  className='form-control'
                  {...register("postalCode", {
                    required: "Please Enter Postal Code",
                    pattern: mustBe6to16,
                  })}
                  disabled={viewLead}
                  placeholder='Enter Postal Code'
                />
                <span className='text-danger'>
                  {errors?.postalCode && errors?.postalCode.message}
                </span>
              </div>
              <div className='col-md-4 mb-3'>
                <label className='form-label'>
                  Contact Person <span className='text-danger'>*</span>
                </label>

                <input
                  type='text'
                  className='form-control'
                  {...register("contactPerson", {
                    required: "Please Enter Contact Person",
                    pattern: namePattern,
                  })}
                  disabled={viewLead}
                  placeholder='Enter Contact Person'
                />
                <span className='text-danger'>
                  {errors?.contactPerson && errors?.contactPerson.message}
                </span>
              </div>
              <div className='col-md-4 mb-3'>
                <label className='form-label'>
                  Contact Person's Mobile <span className='text-danger'>*</span>
                </label>

                <input
                  type='tel'
                  className='form-control'
                  {...register("contactPersonMobile", {
                    required: "Please Enter Contact Person's Mobile",
                    pattern: phonePattern,
                  })}
                  disabled={viewLead}
                  placeholder="Enter Contact Person's Mobile"
                />
                <span className='text-danger'>
                  {errors?.contactPersonMobile &&
                    errors?.contactPersonMobile.message}
                </span>
              </div>
              <div className='col-md-12 mb-3'>
                <label className='form-label'>
                  Contact Person's Email Address{" "}
                  <span className='text-danger'>*</span>
                </label>

                <input
                  type='email'
                  className='form-control'
                  {...register("contactPersonEmail", {
                    required: "Please Enter Contact Person's Email Address",
                    pattern: emailPattern,
                  })}
                  disabled={viewLead}
                  placeholder="Enter Contact Person's Email Address"
                />
                <span className='text-danger'>
                  {errors?.contactPersonEmail &&
                    errors?.contactPersonEmail.message}
                </span>
              </div>
              <div className='col-md-4 mb-3'>
                <label className='form-label'>
                  Office Telephone No. <span className='text-danger'>*</span>
                </label>
                <input
                  type='tel'
                  className='form-control'
                  {...register("officeTelephone", {
                    required: "Please Enter Office Telephone No.",
                    pattern: {
                      value: /^.[0-9]{8,10}$/,
                      message: "Must have 8 to 10 numeric characters",
                    },
                  })}
                  disabled={viewLead}
                  placeholder='Enter Office Telephone No.'
                />
                <span className='text-danger'>
                  {errors?.officeTelephone && errors?.officeTelephone.message}
                </span>
              </div>
              <div className='col-md-4 mb-3'>
                <label className='form-label'>
                  Office Fax No. <span className='text-danger'>*</span>
                </label>
                <input
                  type='tel'
                  className='form-control'
                  {...register("officeFax", {
                    required: "Please Enter Office Fax No.",
                    pattern: {
                      value: /^.[0-9]{7,10}$/,
                      message: "Must have 8 to 10 numeric characters",
                    },
                  })}
                  disabled={viewLead}
                  placeholder='Enter Office Fax No.'
                />
                <span className='text-danger'>
                  {errors?.officeFax && errors?.officeFax.message}
                </span>
              </div>
            </div>
            <div className='row'>
              <hr />
              <h4 className='mb-3'>Participant's Particular</h4>
              <div className='col-md-4 mb-3'>
                <label className='form-label'>
                  Name of Participant <span className='text-danger'>*</span>
                </label>
                <input
                  type='text'
                  className='form-control'
                  {...register("participantName", {
                    required: "Please Enter Name of Participant",
                    pattern: namePattern,
                  })}
                  disabled={viewLead}
                  placeholder='Enter Name of Participant'
                />
                <span className='text-danger'>
                  {errors?.participantName && errors?.participantName.message}
                </span>
              </div>
              <div className='col-md-4 mb-3'>
                <label className='form-label'>
                  Participant's Mobile <span className='text-danger'>*</span>
                </label>

                <input
                  type='tel'
                  className='form-control'
                  {...register("participantMobile", {
                    required: "Please Enter Participant's Mobile",
                    pattern: phonePattern,
                  })}
                  disabled={viewLead}
                  placeholder="Enter Participant's Mobile"
                />
                <span className='text-danger'>
                  {errors?.participantMobile &&
                    errors?.participantMobile.message}
                </span>
              </div>
              <div className='col-md-4 mb-3'>
                <label className='form-label'>
                  Trade Type <span className='text-danger'>*</span>
                </label>

                <select
                  className='form-select'
                  {...register("tradeType", {
                    required: "This Field Is Required",
                  })}
                  disabled={viewLead}
                >
                  <option value=''> Select Trade Type</option>
                  {tradeTypes.map((e) =>
                    selectedRegistration == "CRW"
                      ? e?.isCet?.length && (
                          <option key={e._id} value={e._id}>
                            {e.tradeType}
                          </option>
                        )
                      : !e?.isCet?.length && (
                          <option key={e._id} value={e._id}>
                            {e.tradeType}
                          </option>
                        ),
                  )}
                </select>
                <span className='text-danger'>
                  {errors?.tradeType && errors?.tradeType.message}
                </span>
              </div>
              {selectedRegistration == "CRW" ? (
                <div className='col-md-4 mb-3'>
                  <label className='form-label'>
                    CoreTrade / Multi-skilling/Direct R1 Registration No{" "}
                    <span className='text-danger'>*</span>
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='coreTradeRegNo'
                    {...register("coreTradeRegNo", {
                      required: "This field is required !",
                    })}
                    disabled={viewLead}
                    placeholder='Enter CoreTrade / Multi-skilling/Direct R1 Registration No'
                  />
                  <span className='text-danger'>
                    {errors?.coreTradeRegNo && errors?.coreTradeRegNo?.message}
                  </span>
                </div>
              ) : (
                <div className='col-md-4 mb-3'>
                  <label className='form-label'>
                    Trade Level <span className='text-danger'>*</span>
                  </label>

                  <select
                    className='form-select'
                    {...register("tradeLevel", {
                      required: "This Field Is Required",
                    })}
                    disabled={viewLead}
                  >
                    <option value=''>Select Trade Level</option>
                    {tradeLevels.map((e) => (
                      <option key={e._id} value={e._id}>
                        {e.tradeLevel}
                      </option>
                    ))}
                  </select>
                  <span className='text-danger'>
                    {errors?.tradeLevel && errors?.tradeLevel.message}
                  </span>
                </div>
              )}
              {selectedRegistration == "AMN" ? (
                <div className='row'>
                  <div className='col-md-4 mb-3'>
                    <label className='form-label'>
                      Participant's IC No.{" "}
                      <span className='text-danger'>*</span>
                    </label>

                    <input
                      type='text'
                      className='form-control'
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
                    <span className='text-danger'>
                      {errors?.participantIcNo &&
                        errors?.participantIcNo.message}
                    </span>
                  </div>
                  <div className='col-md-4 mb-3'>
                    <label className='form-label'>
                      Date Of Birth <span className='text-danger'>*</span>
                    </label>

                    <input
                      type='date'
                      className='form-control'
                      {...register("DOB", {
                        required: "Please Enter Date Of Birth",
                      })}
                      disabled={viewLead}
                    />
                    <span className='text-danger'>
                      {errors?.DOB && errors?.DOB.message}
                    </span>
                  </div>
                  <div className='col-md-4 mb-3'>
                    <label className='form-label'>
                      Nationality <span className='text-danger'>*</span>
                    </label>

                    <select
                      className='form-select'
                      {...register("nationality", {
                        required: "This Field Is Required",
                      })}
                      disabled={viewLead}
                    >
                      <option value=''>Select Nationality</option>
                      {nationality.map((e) => (
                        <option key={e.name} value={e.name}>
                          {e.name}
                        </option>
                      ))}
                    </select>
                    <span className='text-danger'>
                      {errors?.nationality && errors?.nationality.message}
                    </span>
                  </div>
                  <div className='col-md-4 mb-3'>
                    <label className='form-label'>
                      Educational / Vocational Level{" "}
                      <span className='text-danger'>*</span>
                    </label>

                    <select
                      className='form-select'
                      {...register("educationalLevel", {
                        required: "This Field Is Required",
                      })}
                      disabled={viewLead}
                    >
                      <option value=''>
                        Select Educational / Vocational Level
                      </option>
                      {educationalConstant.map((e) => (
                        <option key={e.name} value={e.name}>
                          {e.name}
                        </option>
                      ))}
                    </select>
                    <span className='text-danger'>
                      {errors?.educationalLevel &&
                        errors?.educationalLevel.message}
                    </span>
                  </div>
                  <div className='row'>
                    <hr />
                    <h4 className='mb-3'>PA / MYE Particular</h4>
                    <div className='col-md-4 mb-3'>
                      <label className='form-label'>
                        MYE No. <span className='text-danger'>*</span>
                      </label>

                      <input
                        type='text'
                        className='form-control'
                        {...register("myeNo", {
                          required: "Please Enter MYE No",
                          pattern: mustBe10,
                        })}
                        disabled={viewLead}
                        placeholder='Enter MYE No'
                      />
                      <span className='text-danger'>
                        {errors?.myeNo && errors?.myeNo.message}
                      </span>
                    </div>
                    <div className='col-md-4 mb-3'>
                      <label className='form-label'>
                        Pa Reference No. <span className='text-danger'>*</span>
                      </label>

                      <input
                        type='text'
                        className='form-control'
                        {...register("paReferenceNo", {
                          required: "Please Enter Pa Reference No.",
                          pattern: mustBe10,
                        })}
                        disabled={viewLead}
                        placeholder='Enter Pa Reference No.'
                      />
                      <span className='text-danger'>
                        {errors?.paReferenceNo && errors?.paReferenceNo.message}
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className='row'>
                  <div className='col-md-4 mb-3'>
                    <label className='form-label'>
                      Participant's NRIC / FIN No.{" "}
                      <span className='text-danger'>*</span>
                    </label>

                    <input
                      type='text'
                      className='form-control'
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
                    <span className='text-danger'>
                      {errors?.participantNRIC &&
                        errors?.participantNRIC.message}
                    </span>
                  </div>

                  <div className='col-md-4 mb-3'>
                    <label className='form-label'>
                      Alternate Mobile Number (if any)
                    </label>
                    <input
                      type='tel'
                      className='form-control'
                      {...register("alternateMobile", {
                        pattern: phonePattern,
                      })}
                      disabled={viewLead}
                      placeholder='Enter Alternate Mobile Number (if any)'
                    />
                    <span className='text-danger'>
                      {errors?.alternateMobile &&
                        errors?.alternateMobile.message}
                    </span>
                  </div>
                </div>
              )}

              {leadData && (
                <div className='col-md-4 mb-3'>
                  <label className='form-label'>
                    Class <span className='text-danger'>*</span>
                  </label>

                  <select
                    className='form-select'
                    {...register("class", {
                      required: "Please Select Class !",
                    })}
                    disabled={leadData.class && viewLead}
                  >
                    <option value=''>Select Class</option>
                    {allClasses?.length &&
                      allClasses.map((e) => (
                        <option
                          key={e._id}
                          value={e._id}
                          selected={watch("class") == e._id && e._id}
                        >
                          {e.courseName}
                        </option>
                      ))}
                  </select>
                  <span className='text-danger'>
                    {errors?.class && errors?.class.message}
                  </span>
                </div>
              )}
            </div>
            <div className='row'>
              <div className='col-md-12 mb-3'>
                <hr />
                <h4>
                  {viewLead ? "View" : "Upload"} Documents{" "}
                  <span className='text-danger'>*</span>
                </h4>
              </div>
              <div className='col-md-12'>
                {selectedRegistration && selectedRegistration != "AMN" && (
                  <div className='row' id='show1'>
                    {selectedRegistration != "SK" && (
                      <div className='col-md-4 mb-3'>
                        <label className='form-label'>
                          Valid BCA Acknowledgement Notice{" "}
                          <span className='text-danger'>*</span>
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
                          className='form-control'
                          {...register("bcaAcknowledgementNotice", {
                            required: "This field is required",
                          })}
                          disabled={watch("bcaAcknowledgementNotice")}
                        />
                        {watch("bcaAcknowledgementNotice") && (
                          <div>
                            <div className='input-icons'>
                              {!viewLead && (
                                <i
                                  className='fas fa-trash text-danger cursor-pointer'
                                  onClick={() =>
                                    setValue("bcaAcknowledgementNotice", null)
                                  }
                                ></i>
                              )}
                              <i
                                className='fas fa-eye text-primary cursor-pointer'
                                onClick={() =>
                                  openFile(
                                    watch("bcaAcknowledgementNotice")[0]?.name
                                      ? "bcaAcknowledgementNotice"
                                      : "notice",
                                  )
                                }
                              ></i>
                            </div>
                          </div>
                        )}
                        <span className='text-danger'>
                          {errors?.bcaAcknowledgementNotice &&
                            errors?.bcaAcknowledgementNotice.message}
                        </span>
                      </div>
                    )}
                    <div className='col-md-4 mb-3'>
                      <label className='form-label'>
                        Valid copy of NRIC / Work document{" "}
                        <span className='text-danger'>*</span>
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
                        className='form-control'
                        {...register("nricWorkDocument", {
                          required: "This field is required",
                        })}
                        disabled={watch("nricWorkDocument")}
                      />
                      {watch("nricWorkDocument") && (
                        <div>
                          <div className='input-icons'>
                            {!viewLead && (
                              <i
                                className='fas fa-trash text-danger cursor-pointer'
                                onClick={() =>
                                  setValue("nricWorkDocument", null)
                                }
                              ></i>
                            )}
                            <i
                              className='fas fa-eye text-primary cursor-pointer'
                              onClick={() =>
                                openFile(
                                  watch("nricWorkDocument")[0]?.name
                                    ? "nricWorkDocument"
                                    : "nric",
                                )
                              }
                            ></i>
                          </div>
                        </div>
                      )}
                      <span className='text-danger'>
                        {errors?.nricWorkDocument &&
                          errors?.nricWorkDocument.message}
                      </span>
                    </div>
                    {selectedRegistration != "CRW" && (
                      <div className='col-md-4 mb-3'>
                        <label className='form-label'>
                          Valid Copy Of Passport{" "}
                          <span className='text-danger'>*</span>
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
                          className='form-control'
                          {...register("passportCopy", {
                            required: "This field is required",
                          })}
                          disabled={watch("passportCopy")}
                        />
                        {watch("passportCopy") && (
                          <div>
                            <div className='input-icons'>
                              {!viewLead && (
                                <i
                                  className='fas fa-trash text-danger cursor-pointer'
                                  onClick={() => setValue("passportCopy", null)}
                                ></i>
                              )}
                              <i
                                className='fas fa-eye text-primary cursor-pointer'
                                onClick={() => openFile("passportCopy")}
                              ></i>
                            </div>
                          </div>
                        )}
                        <span className='text-danger'>
                          {errors?.passportCopy && errors?.passportCopy.message}
                        </span>
                      </div>
                    )}
                    {selectedRegistration != "CRW" && (
                      <div className='col-md-4 mb-3'>
                        <label className='form-label'>
                          Valid Copy Of MOM Employment Details{" "}
                          <span className='text-danger'>*</span>
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
                          className='form-control'
                          {...register("MOMEploymentDetails", {
                            required: "This field is required",
                          })}
                          disabled={watch("MOMEploymentDetails")}
                        />
                        {watch("MOMEploymentDetails") && (
                          <div>
                            <div className='input-icons'>
                              {!viewLead && (
                                <i
                                  className='fas fa-trash text-danger cursor-pointer'
                                  onClick={() =>
                                    setValue("MOMEploymentDetails", null)
                                  }
                                ></i>
                              )}
                              <i
                                className='fas fa-eye text-primary cursor-pointer'
                                onClick={() =>
                                  openFile(
                                    watch("MOMEploymentDetails")[0]?.name
                                      ? "MOMEploymentDetails"
                                      : "MOME",
                                  )
                                }
                              ></i>
                            </div>
                          </div>
                        )}
                        <span className='text-danger'>
                          {errors?.MOMEploymentDetails &&
                            errors?.MOMEploymentDetails.message}
                        </span>
                      </div>
                    )}
                    {selectedRegistration == "MSG" && (
                      <div className='col-md-4 mb-3'>
                        <label className='form-label'>
                          1st Skill Evaluation Certificate / BCA Skills
                          Qualification Statement{" "}
                          <span className='text-danger'>*</span>
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
                          className='form-control'
                          {...register("skillEvaluationCertificate", {
                            required: "This field is required",
                          })}
                          disabled={watch("skillEvaluationCertificate")}
                        />
                        {watch("skillEvaluationCertificate") && (
                          <div>
                            <div className='input-icons'>
                              {!viewLead && (
                                <i
                                  className='fas fa-trash text-danger cursor-pointer'
                                  onClick={() =>
                                    setValue("skillEvaluationCertificate", "")
                                  }
                                ></i>
                              )}
                              <i
                                className='fas fa-eye text-primary cursor-pointer'
                                onClick={() =>
                                  openFile(
                                    watch("skillEvaluationCertificate")[0]?.name
                                      ? "skillEvaluationCertificate"
                                      : "skill",
                                  )
                                }
                              ></i>
                            </div>
                          </div>
                        )}

                        <span className='text-danger'>
                          {errors?.skillEvaluationCertificate &&
                            errors?.skillEvaluationCertificate.message}
                        </span>
                      </div>
                    )}
                  </div>
                )}
                {selectedRegistration == "AMN" && (
                  <div className='row' id='show5'>
                    <div className='col-md-4 mb-3'>
                      <label className='form-label'>
                        Copy Of PA Quota（PA复印件）
                        <span className='text-danger'>*</span>
                      </label>

                      <input
                        type={
                          watch("paQuotaCopy") && watch("paQuotaCopy")[0]?.name
                            ? "file"
                            : !watch("paQuotaCopy")
                            ? "file"
                            : "text"
                        }
                        className='form-control'
                        {...register("paQuotaCopy", {
                          required: "This field is required",
                        })}
                        disabled={watch("paQuotaCopy")}
                      />
                      {watch("paQuotaCopy") && (
                        <div>
                          <div className='input-icons'>
                            {!viewLead && (
                              <i
                                className='fas fa-trash text-danger cursor-pointer'
                                onClick={() => setValue("paQuotaCopy", null)}
                              ></i>
                            )}{" "}
                            <i
                              className='fas fa-eye text-primary cursor-pointer'
                              onClick={() =>
                                openFile(
                                  watch("paQuotaCopy")[0]?.name
                                    ? "paQuotaCopy"
                                    : "pa",
                                )
                              }
                            ></i>
                          </div>
                        </div>
                      )}
                      <span className='text-danger'>
                        {errors?.paQuotaCopy && errors?.paQuotaCopy.message}
                      </span>
                    </div>
                    <div className='col-md-4 mb-3'>
                      <label className='form-label'>
                        Copy Of Worker's IC 员工的身份证复印件{" "}
                        <span className='text-danger'>*</span>
                      </label>

                      <input
                        type={
                          watch("workersIc") && watch("workersIc")[0]?.name
                            ? "file"
                            : !watch("workersIc")
                            ? "file"
                            : "text"
                        }
                        className='form-control'
                        {...register("workersIc", {
                          required: "This field is required",
                        })}
                        disabled={watch("workersIc")}
                      />
                      {watch("workersIc") && (
                        <div>
                          <div className='input-icons'>
                            {!viewLead && (
                              <i
                                className='fas fa-trash text-danger cursor-pointer'
                                onClick={() => setValue("workersIc", null)}
                              ></i>
                            )}{" "}
                            <i
                              className='fas fa-eye text-primary cursor-pointer'
                              onClick={() =>
                                openFile(
                                  watch("workersIc")[0]?.name
                                    ? "workersIc"
                                    : "ISC",
                                )
                              }
                            ></i>
                          </div>
                        </div>
                      )}
                      <span className='text-danger'>
                        {errors?.workersIc && errors?.workersIc.message}
                      </span>
                    </div>
                    <div className='col-md-4 mb-3'>
                      <label className='form-label'>
                        Copy Of Worker's Passport (if available)
                        员工的护照复印件 - 如有请提供{" "}
                        <span className='text-danger'>*</span>
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
                        className='form-control'
                        {...register("workersPassport", {
                          required: "This field is required",
                        })}
                        disabled={watch("workersPassport")}
                      />
                      {watch("workersPassport") && (
                        <div>
                          <div className='input-icons'>
                            {!viewLead && (
                              <i
                                className='fas fa-trash text-danger cursor-pointer'
                                onClick={() =>
                                  setValue("workersPassport", null)
                                }
                              ></i>
                            )}
                            <i
                              className='fas fa-eye text-primary cursor-pointer'
                              onClick={() => openFile("workersPassport")}
                            ></i>
                          </div>
                        </div>
                      )}
                      <span className='text-danger'>
                        {errors?.workersPassport &&
                          errors?.workersPassport.message}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* </div> */}
            <Modal.Footer>
              <div>
                <div className='d-flex'>
                  <div className='d-flex col-lg-12 text-end'>
                    {!viewLead && (
                      <button type='submit' className='mx-1 btn btn-primary'>
                        {leadData ? "Update" : "Add New"}
                      </button>
                    )}
                    {user.userData?.roleData?.lead?.write && viewLead && (
                      <div className='d-flex'>
                        {leadData.class && leadData.status == "pending" && (
                          <button
                            type='button'
                            onClick={getPaymentRegistration}
                            className='btn mx-1 btn-primary'
                          >
                            Get Payment
                          </button>
                        )}
                        {leadData.class && leadData.status == "assign" && (
                          <div className='d-flex'>
                            <button
                              type='button'
                              onClick={confirmRegistration}
                              className='btn mx-1 btn-success'
                            >
                              Confirm
                            </button>
                            <button
                              type='button'
                              // onClick={rejectRegistration}
                              className='btn mx-1 btn-danger'
                            >
                              Reject
                            </button>
                          </div>
                        )}
                        {!leadData.class && (
                          <div className='d-flex'>
                            <button
                              type='submit'
                              className='btn mx-1 btn-success'
                            >
                              Assign Class
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                    <button
                      type='button'
                      onClick={handleClose}
                      className='mx-1 btn btn-secondary'
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
