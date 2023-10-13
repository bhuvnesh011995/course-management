/* eslint-disable default-case */
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import {
  TradeLevel1,
  TradeLevel2,
  TradeLevel3,
  TradeLevel4,
  educationalConstant,
  nationality,
  tradeType,
} from "../../Constants/newLeadContants";
import {
  emailPattern,
  mustBe10,
  mustBe6to16,
  mustBe9to10,
  namePattern,
  phonePattern,
} from "../validations";
import { useEffect } from "react";
import { AxiosInstance } from "../axiosInstance";

export const AddNewLeadModel = ({ setIsOpen, isOpen }) => {
  const {
    register,
    reset,
    getValues,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleClose = () => {
    setIsOpen(false);
  };

  const addNewLead = async (newLead) => {
    try {
      const formdata = new FormData();
      if (Object.keys(newLead.passportCopy).length)
        for (let file of newLead.passportCopy) {
          formdata.append("files", file);
        }
      if (Object.keys(newLead.bcaAcknowledgementNotice).length)
        for (let file of newLead.bcaAcknowledgementNotice) {
          formdata.append("files", file);
        }
      if (Object.keys(newLead.nricWorkDocument).length)
        for (let file of newLead.nricWorkDocument) {
          formdata.append("files", file);
        }
      if (Object.keys(newLead.MOMEploymentDetails).length)
        for (let file of newLead.MOMEploymentDetails) {
          formdata.append("files", file);
        }
      if (Object.keys(newLead.skillEvaluationCertificate).length)
        for (let file of newLead.skillEvaluationCertificate) {
          formdata.append("files", file);
        }
      if (Object.keys(newLead.paQuotaCopy).length)
        for (let file of newLead.paQuotaCopy) {
          formdata.append("files", file);
        }
      if (Object.keys(newLead.workersIc).length)
        for (let file of newLead.workersIc) {
          formdata.append("files", file);
        }
      if (Object.keys(newLead.workersPassport).length)
        for (let file of newLead.workersPassport) {
          formdata.append("files", file);
        }
      const { data } = await AxiosInstance.post("/leads/addNewLead", formdata, {
        params: newLead,
      });
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    changeRegistrationType();
  }, [watch("registrationType")]);

  const changeRegistrationType = () => {
    setValue("tradeLevel", "");

    if (watch("registrationType") !== 5) {
      setValue("myeNo", "");
      setValue("paReferenceNo", "");
      setValue("nationality", "");
      setValue("participantIcNo", "");
    } else if (watch("registrationType") == 5) {
      setValue("participantNRIC", "");
      setValue("participantMobile", "");
      setValue("alternateMobile", "");
    }

    switch (watch("registrationType")) {
      case 1:
        setValue("skillEvaluationCertificate", {});
        emptyCase5Files();
        break;
      case 2:
        emptyCase5Files();
        break;
      case 3:
        setValue("bcaAcknowledgementNotice", {});
        setValue("skillEvaluationCertificate", {});
        emptyCase5Files();
        break;
      case 4:
        setValue("passportCopy", {});
        setValue("MOMEploymentDetails", {});
        setValue("skillEvaluationCertificate", {});
        emptyCase5Files();
        break;
      case 5:
        setValue("bcaAcknowledgementNotice", {});
        setValue("nricWorkDocument", {});
        setValue("passportCopy", {});
        setValue("MOMEploymentDetails", {});
        setValue("skillEvaluationCertificate", {});
        break;
    }
  };

  const emptyCase5Files = () => {
    setValue("paQuotaCopy", {});
    setValue("workersIc", {});
    setValue("workersPassport", {});
  };

  return (
    <div>
      <Modal show={isOpen} onHide={handleClose} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>
            <h5 className="modal-title add-Customer-title">Add New Lead</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(addNewLead)}>
            <div className="row">
              <div className="col-md-12 mb-3">
                <label className="form-label">
                  Registration Type <span className="text-danger">*</span>
                </label>
                <select
                  className="form-select"
                  {...register("registrationType", {
                    required: "Please select registration type",
                  })}
                >
                  <option value="" selected>
                    Select Registration Type
                  </option>
                  <option value={1}>Core Trade</option>
                  <option value={2}>Multi-skilling</option>
                  <option value={3}>SEC(k)</option>
                  <option value={4}>CET(Renewal)</option>
                  <option value={5}>ALP for Malaysian &amp; NAS</option>
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
                  placeholder="Enter Office Fax No."
                />
                <span className="text-danger">
                  {errors?.officeFax && errors?.officeFax.message}
                </span>
              </div>
              {watch("registrationType") == 5 ? (
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
                    >
                      <option value="" disabled selected>
                        Select Nationality
                      </option>
                      {nationality.map((e) => (
                        <option value={e.value}>{e.option}</option>
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
                    >
                      <option value="" disabled selected>
                        Select Nationality
                      </option>
                      {educationalConstant.map((e) => (
                        <option value={e.value}>{e.option}</option>
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
                >
                  <option value="" disabled selected>
                    Select Trade Type
                  </option>
                  {tradeType.map((e) => (
                    <option value={e.value}>{e.option}</option>
                  ))}
                </select>
                <span className="text-danger">
                  {errors?.tradeType && errors?.tradeType.message}
                </span>
              </div>
              {watch("registrationType") == 4 ? (
                <div className="col-md-4 mb-3">
                  <label className="form-label">
                    CoreTrade / Multi-skilling/Direct R1 Registration No
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="coreTradeRegNo"
                    {...register("coreTradeRegNo")}
                    placeholder="Enter CoreTrade / Multi-skilling/Direct R1 Registration No"
                  />
                </div>
              ) : (
                <div className="col-md-4 mb-3">
                  <label className="form-label">Trade Level</label>
                  <select
                    className="form-select"
                    {...register("tradeLevel", {
                      required: "This Field Is Required",
                    })}
                  >
                    <option value="" disabled selected>
                      Select Trade Level
                    </option>
                    {watch("registrationType") == 1 &&
                      TradeLevel1.map((e) => (
                        <option value={e.value}>{e.option}</option>
                      ))}
                    {watch("registrationType") == 2 &&
                      TradeLevel2.map((e) => (
                        <option value={e.value}>{e.option}</option>
                      ))}
                    {watch("registrationType") == 3 &&
                      TradeLevel3.map((e) => (
                        <option value={e.value}>{e.option}</option>
                      ))}
                    {watch("registrationType") == 5 &&
                      TradeLevel4.map((e) => (
                        <option value={e.value}>{e.option}</option>
                      ))}
                  </select>
                  <span className="text-danger">
                    {errors?.tradeLevel && errors?.tradeLevel.message}
                  </span>
                </div>
              )}
              <div className="col-md-12 mb-3">
                <hr />
                <h4>
                  Upload Documents <span className="text-danger">*</span>
                </h4>
              </div>
              <div className="col-md-12">
                {watch("registrationType") &&
                  watch("registrationType") != 5 && (
                    <div className="row myDiv" id="show1">
                      {watch("registrationType") != 3 && (
                        <div className="col-md-4 mb-3">
                          <label className="form-label">
                            Valid BCA Acknowledgement Notice
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            {...register("bcaAcknowledgementNotice", {
                              required: "This field is required",
                            })}
                          />
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
                          type="file"
                          className="form-control"
                          {...register("nricWorkDocument", {
                            required: "This field is required",
                          })}
                        />
                        <span className="text-danger">
                          {errors?.nricWorkDocument &&
                            errors?.nricWorkDocument.message}
                        </span>
                      </div>
                      {watch("registrationType") != 4 && (
                        <div className="col-md-4 mb-3">
                          <label className="form-label">
                            Valid Copy Of Passport
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            {...register("passportCopy", {
                              required: "This field is required",
                            })}
                          />
                          <span className="text-danger">
                            {errors?.passportCopy &&
                              errors?.passportCopy.message}
                          </span>
                        </div>
                      )}
                      {watch("registrationType") != 4 && (
                        <div className="col-md-4 mb-3">
                          <label className="form-label">
                            Valid Copy Of MOM Employment Details
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            {...register("MOMEploymentDetails", {
                              required: "This field is required",
                            })}
                          />
                          <span className="text-danger">
                            {errors?.MOMEploymentDetails &&
                              errors?.MOMEploymentDetails.message}
                          </span>
                        </div>
                      )}
                      {watch("registrationType") == 2 && (
                        <div className="col-md-4 mb-3">
                          <label className="form-label">
                            1st Skill Evaluation Certificate / BCA Skills
                            Qualification Statement
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            {...register("skillEvaluationCertificate", {
                              required: "This field is required",
                            })}
                          />
                          <span className="text-danger">
                            {errors?.skillEvaluationCertificate &&
                              errors?.skillEvaluationCertificate.message}
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                {watch("registrationType") == 5 && (
                  <div className="row myDiv" id="show5">
                    <div className="col-md-4 mb-3">
                      <label className="form-label">
                        Copy Of PA Quota（PA复印件）
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        {...register("paQuotaCopy", {
                          required: "This field is required",
                        })}
                      />
                      <span className="text-danger">
                        {errors?.paQuotaCopy && errors?.paQuotaCopy.message}
                      </span>
                    </div>
                    <div className="col-md-4 mb-3">
                      <label className="form-label">
                        Copy Of Worker's IC 员工的身份证复印件
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        {...register("workersIc", {
                          required: "This field is required",
                        })}
                      />
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
                        type="file"
                        className="form-control"
                        {...register("workersPassport", {
                          required: "This field is required",
                        })}
                      />
                      <span className="text-danger">
                        {errors?.workersPassport &&
                          errors?.workersPassport.message}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <Modal.Footer>
              <div>
                <div className="row">
                  <div className="col-lg-12 text-end">
                    <button type="submit" className="mx-1 btn btn-primary">
                      Add New
                    </button>
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
