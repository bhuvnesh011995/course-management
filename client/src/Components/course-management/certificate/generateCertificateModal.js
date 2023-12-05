import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../context/authContext";
import { CommonDataTable } from "../../../common-components/CommonDataTable";
import { generateCertificateHeaders } from "../../../Constants/table.constants";
import { toast } from "react-toastify";
import { FormattedMessage } from "react-intl";
import { languageObject } from "../../../Constants/tableLanguageConstants";
import MaterialReactTable from "material-react-table";
import { DownloadCertificate } from "./downloadCertificate";

const GenerateCertificate = ({ isOpen, setIsOpen, certificates }) => {
  const { NewAxiosInstance } = useAuth();
  const [classes, setClasses] = useState([]);
  const [classCertificates, setClassCertificates] = useState([]);
  const [selectedLeads, setSelectedLeads] = useState([]);

  const dataKeys = Object.keys(generateCertificateHeaders);
  const tableColumns = [];

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
      <div className="d-flex">
        <FormattedMessage id="Select" defaultMessage={"Select"} />
        <input type="checkbox" onClick={selectAllCertificates} />
      </div>
    ),
    Cell: ({ row }) => (
      <div className="d-flex align-items-center justify-content-center">
        <input
          type="checkbox"
          onClick={() => {
            toast.dismiss();
            if (row.original.status == "confirmed") {
              if (selectedLeads.includes(row.original?._id)) {
                const filterLeads = selectedLeads.filter(
                  (leadId) => leadId != row.original?._id
                );
                setSelectedLeads([...filterLeads]);
              } else setSelectedLeads([...selectedLeads, row.original?._id]);
            } else {
              toast.error("can not select this lead");
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
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    getAllClasses();
    if (watch("classId") && watch("classId").length) {
      getFilteredCertificate();
    }
  }, [watch("classId")]);

  const getAllClasses = async () => {
    try {
      const { data } = await NewAxiosInstance.get("/class/getClasses");
      setClasses(data.classes);
    } catch (err) {
      console.error(err);
    }
  };

  const getFilteredCertificate = async () => {
    try {
      const classLeadCertificate = await NewAxiosInstance.get(
        "/certificates/getFilteredCertificate/" + watch("classId")
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

  const generateSelectedCertificates = async () => {
    try {
      const getSelectedCertificates = await NewAxiosInstance.get(
        "/certificates/getSelectedCertificates",
        { params: { leads: selectedLeads } }
      );
      for (let certificate of getSelectedCertificates.data) {
        DownloadCertificate(certificate);
      }
      handleClose();
    } catch (err) {
      console.error(err);
    }
  };

  const selectAllCertificates = async () => {
    try {
      classCertificates.map((e) => {
        if (e.status == "confirmed") {
          if (selectedLeads.includes(e?._id)) {
            const filterLeads = selectedLeads.filter(
              (leadId) => leadId != e?._id
            );
            setSelectedLeads([...filterLeads]);
          } else setSelectedLeads([...selectedLeads, e?._id]);
        } else {
          toast.error("can not select this lead");
        }
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Modal onHide={handleClose} show={isOpen} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            <h5 className="modal-title" id="addCertificateModalLabel">
              Generate Certificate
            </h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(generateSelectedCertificates)}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">
                  Class <span className="text-danger">*</span>
                </label>
                <select
                  className="form-select"
                  {...register("classId", {
                    required: "Please Select Class !",
                  })}
                >
                  <option value="">Select Classes</option>
                  {classes?.length &&
                    classes.map((classData, index) => (
                      <option key={index} value={classData._id}>
                        {classData.course}
                      </option>
                    ))}
                </select>
                {errors?.courseId && (
                  <span className="text-danger">
                    {errors?.courseId.message}
                  </span>
                )}
              </div>

              <div className="card-body p-0">
                <div className="table-responsive">
                  <div className="p-3">
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
                type="button"
                onClick={handleClose}
                className="btn btn-secondary"
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Generate Selected Certificates
              </button>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default GenerateCertificate;
