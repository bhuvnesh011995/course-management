import React, { useCallback, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../context/authContext";
import { generateCertificateHeaders } from "../../../Constants/table.constants";
import { toast } from "react-toastify";
import { FormattedMessage } from "react-intl";
import { languageObject } from "../../../Constants/tableLanguageConstants";
import MaterialReactTable from "material-react-table";
import { DownloadCertificate } from "./downloadCertificate";
import moment from "moment";
import {
  convertMongooseDate,
  convertToMongooseStartEndTiming,
} from "../../../common-components/useCommonUsableFunctions";
import { CreateCertificateMailMessage } from "./createCertificateMailMessage";

const GenerateCertificate = ({ isOpen, setIsOpen, certificates }) => {
  const { NewAxiosInstance, user } = useAuth();
  const [classes, setClasses] = useState([]);
  const [classCertificates, setClassCertificates] = useState([]);
  const [selectedLeads, setSelectedLeads] = useState([]);
  const [selectedDetails, setSelectedDetails] = useState([]);
  const [tradeTypeCodes, setTradeTypeCodes] = useState([]);
  const [mailMessage, setMailMessage] = useState("");
  const [singleSelectedLead, setSingleSelectedLead] = useState({});

  const dataKeys = Object.keys(generateCertificateHeaders);
  const tableColumns = [];

  tableColumns.push({
    header: "Certificate Number",
    Cell: ({ row }) => (
      <div>
        {row.index +
          (user?.otherConfigurations?.certificateNumberStart != null
            ? user.otherConfigurations.certificateNumberStart
            : 1)}
      </div>
    ),
  });

  const getTradeTypes = useCallback(async () => {
    try {
      let response = await NewAxiosInstance.get("/constants/tradeTypeCode");
      if (!response) toast.error("server error");
      if (response.status === 200) {
        setTradeTypeCodes(response.data);
      } else toast.error("error while fetching data");
    } catch (error) {
      console.error(error.response);
      toast.error("error while fetching");
    }
  }, []);

  dataKeys.map((e, index) => {
    tableColumns.push({
      accessorKey: e,
      header: generateCertificateHeaders[e],
      Header: () => (
        <FormattedMessage
          id={languageObject[generateCertificateHeaders[e]]}
          defaultMessage={generateCertificateHeaders[e]}
        />
      ),
    });
  });

  tableColumns.push({
    header: "Select",
    Header: () => (
      <div className='d-flex'>
        <FormattedMessage id='Select' defaultMessage={"Select"} />
      </div>
    ),
    Cell: ({ row }) => (
      <div className='d-flex align-items-center justify-content-center'>
        <input
          type='checkbox'
          onClick={() => {
            if (selectedLeads.includes(row.original?._id)) {
              const filterLeads = selectedLeads.filter(
                (leadId) => leadId != row.original?._id,
              );
              const filterDetails = selectedDetails.filter(
                (selectedDetail) =>
                  selectedDetail.selectedLeadId != row.original._id,
              );
              setSelectedDetails([...filterDetails]);
              setSelectedLeads([...filterLeads]);
            } else {
              setSelectedLeads([...selectedLeads, row.original?._id]);

              setSelectedDetails([
                ...selectedDetails,
                {
                  selectedLeadId: row.original._id,
                  leadCertificateNumber:
                    row.index + user.otherConfigurations.certificateNumberStart,
                },
              ]);
            }
          }}
          checked={selectedLeads.includes(row.original?._id)}
        />
      </div>
    ),
  });

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const [certificateDate, setCertificateDate] = useState(
    moment().format("YYYY-MM-DD"),
  );

  useEffect(() => {
    getAllClasses();
    getTradeTypes();
    if (watch("classId") && watch("classId").length) {
      getFilteredCertificate();
    }
  }, [watch("classId")]);

  const getAllClasses = async () => {
    try {
      const { data } = await NewAxiosInstance.get("/class/getCETClasses");
      setClasses(data.classes);
    } catch (err) {
      console.error(err);
    }
  };

  const getFilteredCertificate = async () => {
    try {
      const classLeadCertificate = await NewAxiosInstance.get(
        "/certificates/getFilteredCertificate/" + watch("classId"),
      );
      if (classLeadCertificate.status == 200) {
        if (classLeadCertificate.data.length) {
          setClassCertificates(classLeadCertificate.data);
        } else {
          toast.error("no Certificates found");
        }
      } else {
        toast.error("something went wrong");
      }
    } catch (err) {
      console.error(err);
      toast.error("something went wrong");
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    reset();
  };

  const generateSelectedCertificates = async (type) => {
    try {
      const getSelectedCertificates = await NewAxiosInstance.get(
        "/certificates/getSelectedCertificates",
        { params: { leads: selectedLeads } },
      );
      for (let certificate of getSelectedCertificates.data) {
        const filterDetails = selectedDetails.filter(
          (selectedDetail) => selectedDetail.selectedLeadId == certificate._id,
        );
        const certificateBase64Data = DownloadCertificate(
          certificate,
          {
            certificateDate: watch("certificateDate"),
            tradeTypeCode: watch("tradeTypeCode"),
            certificateType: watch("certificateType"),
          },
          type,
          filterDetails[0],
        );
        if (type == "sendMail") {
          const certificateMailMessage = CreateCertificateMailMessage(
            certificate,
            user,
          );
          const mailObject = {
            subject: `CET E-CERTIFICATE - ${certificate.tradeType.toUpperCase()} ${moment(
              certificate.startDate,
            ).format("DD MMM YYYY")}&nbsp; `,
            html: certificateMailMessage,
          };
          if (getSelectedCertificates.data.length != 1) {
            // const response = await NewAxiosInstance.post(
            //   "/certificates/sendLeadCertificateMail",
            //   {
            //     contactPersonMail: certificate.contactPersonEmail,
            //     base64Data: certificateBase64Data,
            //     mailObject: mailObject,
            //   },
            // );
            // if (response.status == 200) {
            //   toast.success(response.data.message);
            // }
            sendCertificateMail({
              contactPersonMail: certificate.contactPersonEmail,
              base64Data: certificateBase64Data,
              mailObject: mailObject,
            });
            handleClose();
          } else {
            setMailMessage(certificateMailMessage);
            setSingleSelectedLead({
              contactPersonMail: certificate.contactPersonEmail,
              base64Data: certificateBase64Data,
              mailObject: mailObject,
            });
          }
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  const sendCertificateMail = async (data) => {
    try {
      const response = await NewAxiosInstance.post(
        "/certificates/sendLeadCertificateMail",
        {
          contactPersonMail: data.contactPersonMail,
          base64Data: data.base64Data,
          mailObject: data.mailObject,
        },
      );
      if (response.status == 200) {
        toast.success(response.data.message);
      }
      handleClose();
      setMailMessage("");
    } catch (err) {
      console.error(err);
    }
  };

  // const selectAllCertificates = async () => {
  //   try {
  //     classCertificates.map((e) => {
  //       if (e.status == "confirmed") {
  //         if (selectedLeads.includes(e?._id)) {
  //           const filterLeads = selectedLeads.filter(
  //             (leadId) => leadId != e?._id,
  //           );
  //           setSelectedLeads([...filterLeads]);
  //         } else setSelectedLeads([...selectedLeads, e?._id]);
  //       } else {
  //         toast.error("can not select this lead");
  //       }
  //     });
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  return (
    <div>
      <Modal onHide={handleClose} show={isOpen} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>
            <h5 className='modal-title' id='addCertificateModalLabel'>
              Generate Certificate
            </h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(generateSelectedCertificates)}>
            <div className='row'>
              <div className='col-md-6 mb-3'>
                <label className='form-label'>Date</label>
                <input
                  type='date'
                  className='form-control'
                  {...register("certificateDate")}
                  value={certificateDate}
                  onChange={({ target }) =>
                    setCertificateDate(
                      moment(target.value).format("YYYY-MM-DD"),
                    )
                  }
                />
              </div>
              <div className='col-md-6 mb-3'>
                <label className='form-label'>Class</label>
                <select
                  className='form-select'
                  {...register("classId", {
                    required: "Please Select Class !",
                  })}
                >
                  <option value=''>Select Classes</option>
                  {classes?.length &&
                    classes.map((classData, index) => (
                      <option key={index} value={classData._id}>
                        {`${classData.course} ${convertMongooseDate(
                          classData.startDate,
                        )} (${convertToMongooseStartEndTiming(
                          classData.startTime,
                          classData.endTime,
                        )})`}
                      </option>
                    ))}
                </select>
                {errors?.courseId && (
                  <span className='text-danger'>
                    {errors?.courseId.message}
                  </span>
                )}
              </div>

              <div className='col-md-6 mb-3'>
                <label className='form-label'>Trade Type Code</label>
                <select className='form-select' {...register("tradeTypeCode")}>
                  <option value=''>Select Code</option>
                  {tradeTypeCodes?.length &&
                    tradeTypeCodes.map((tradeTypeCode, index) => (
                      <option key={index} value={tradeTypeCode.name}>
                        {tradeTypeCode.name}
                      </option>
                    ))}
                </select>
                {errors?.courseId && (
                  <span className='text-danger'>
                    {errors?.courseId.message}
                  </span>
                )}
              </div>

              <div className='col-md-6 mb-3'>
                <label className='form-label'>Certificate Type</label>
                <select
                  className='form-select'
                  {...register("certificateType")}
                >
                  <option value=''>Select Certificate Type</option>
                  <option value={"DR"}>DR</option>
                  <option value={"MS"}>MS</option>
                </select>
                {errors?.courseId && (
                  <span className='text-danger'>
                    {errors?.courseId.message}
                  </span>
                )}
              </div>

              <div className='card-body p-0'>
                <div className='table-responsive'>
                  <div className='p-3'>
                    <MaterialReactTable
                      columns={tableColumns}
                      data={classCertificates}
                      enableColumnActions={false}
                      enableFullScreenToggle={false}
                      enableGlobalFilter
                      enableDensityToggle={false}
                      enableColumnFilters={false}
                      enableHiding={false}
                      enableColumnFilterModes={false}
                      initialState={{
                        showGlobalFilter: true,
                      }}
                      enableRowNumbers
                      enableGlobalFilterModes
                    />
                  </div>
                </div>
              </div>
            </div>
            <Modal.Footer>
              <button
                type='button'
                onClick={handleClose}
                className='btn btn-secondary'
              >
                Cancel
              </button>
              <button
                type='button'
                onClick={() => generateSelectedCertificates(null)}
                className='btn btn-primary'
              >
                Download Selected Certificates
              </button>
              <button
                type='button'
                onClick={() => generateSelectedCertificates("sendMail")}
                className='btn btn-primary'
              >
                Send Certificates to Mail
              </button>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>

      <Modal
        show={mailMessage.length}
        onHide={() => setMailMessage("")}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h5 className='modal-title add-Customer-title'>View Mail</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row'>
            <div className='col-md-12 mb-3'>
              <label className='form-label'>
                To: <span className='text-danger'>*</span>
              </label>
              <input
                className='form-control'
                value={singleSelectedLead?.contactPersonMail}
                disabled
              />
            </div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: mailMessage }}></div>
          <Modal.Footer>
            <button
              className='btn btn-success'
              onClick={() => sendCertificateMail(singleSelectedLead)}
            >
              Send
            </button>
            <button
              className='btn btn-danger'
              onClick={() => setMailMessage("")}
            >
              Cancel
            </button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default GenerateCertificate;
