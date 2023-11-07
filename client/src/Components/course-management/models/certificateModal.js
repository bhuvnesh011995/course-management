import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import {
  AxiosInstance,
  formAxiosInstance,
} from "../../../common-components/axiosInstance";
import { filePath } from "../../../common-components/useCommonUsableFunctions";
import jsPDF from "jspdf";
import { toast } from "react-toastify";

const AddNewCertificate = ({
  isOpen,
  setIsOpen,
  certificateData,
  viewCertificate,
  callback,
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses();
    if (!certificateData?._id) {
      setValue(
        "certificateNo",
        `cfg${Date.now() + Math.round(Math.random() * 1e9)}`
      );
      setValue("certificateAttchment", "");
    } else {
      getCertificate();
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    reset();
  };

  const addCertificate = async (newCertificate) => {
    try {
      const formData = new FormData();
      for (let file of newCertificate.certificateAttchment)
        formData.append("file", file);

      formData.append("certificateData", JSON.stringify(newCertificate));
      const { data } = await formAxiosInstance.post(
        "/certificates/addCertificate",
        formData
      );
      toast.success("certificate Added")
      callback(data);
      handleClose();
    } catch (err) {
      toast.error('error occured')
      console.error(err);
    }
  };

  const updateCertificate = async (updatedCertificate) => {
    try {
      const formData = new FormData();

      if (updatedCertificate?.certificateAttchment[0]?.name) {
        Object.keys(updatedCertificate.certificateAttchment).map((e) =>
          formData.append("file", updatedCertificate.certificateAttchment[e])
        );
      }
      if (updatedCertificate?.certificateFilePath)
        updatedCertificate["removeOldAttachment"] =
          updatedCertificate?.certificateFilePath.split("/")[
            updatedCertificate?.certificateFilePath.split("/").length - 1
          ];

      formData.append("certificateData", JSON.stringify(updatedCertificate));
      const { data } = await AxiosInstance.post(
        "/certificates/updateCertificate",
        formData
      );
      toast.success('certificate updated')
      callback(data.updatedCertificate);
      handleClose();
    } catch (err) {
      toast.error("error occured")
      console.error(err);
    }
  };

  const getCourses = async () => {
    try {
      const { data } = await AxiosInstance.get("/courses/getCourses");
      setCourses(data.allCourses);
    } catch (err) {
      console.error(err);
    }
  };

  const getCertificate = async () => {
    try {
      const { data } = await AxiosInstance.get("/certificates/getCertificate", {
        params: certificateData,
      });
      reset(data);
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
    const selectedFilePath = certificateData.certificateFilePath;

    const certificateUrl = filePath(selectedFilePath);
    window.open(certificateUrl);
  };

  return (
    <div>
      <Modal onHide={handleClose} show={isOpen} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            <h5 className="modal-title" id="addCertificateModalLabel">
              {viewCertificate
                ? "View"
                : certificateData?._id
                ? "Update"
                : "Add"}{" "}
              Certificate
            </h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={handleSubmit(
              certificateData?._id ? updateCertificate : addCertificate
            )}
          >
            <div className="row">
              <div className="col-md-12 mb-3">
                <label className="form-label">Certificate Number</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("certificateNo")}
                  readOnly
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Participant's Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Participant's Name"
                  {...register("participantName", {
                    required: "Please Enter Participant Name",
                  })}
                  disabled={viewCertificate}
                />
                {errors?.participantName && (
                  <span className="text-danger">
                    {errors?.participantName.message}
                  </span>
                )}
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Course</label>
                <select
                  className="form-select"
                  {...register("courseId", {
                    required: "Please Select Course !",
                  })}
                  disabled={viewCertificate}
                >
                  <option value="">Select courses</option>
                  {courses?.length &&
                    courses.map((course) => (
                      <option value={course._id}>{course.courseName}</option>
                    ))}
                </select>
                {errors?.courseId && (
                  <span className="text-danger">
                    {errors?.courseId.message}
                  </span>
                )}
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Course Duration</label>
                <select
                  className="form-select"
                  {...register("courseDuration", {
                    required: "Please Select Course Duration",
                  })}
                  disabled={viewCertificate}
                >
                  <option value="" selected>
                    Select Duration
                  </option>
                  <option value="3 Months">3 Months</option>
                  <option value="6 Months">6 Months</option>
                  <option value="1 Year">1 Year</option>
                </select>
                {errors?.courseDuration && (
                  <span className="text-danger">
                    {errors?.courseDuration.message}
                  </span>
                )}
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Grade</label>
                <select
                  className="form-select"
                  id="grade"
                  {...register("grade", { required: "Please Select Grade" })}
                  disabled={viewCertificate}
                >
                  <option value="" selected>
                    Select Grade
                  </option>
                  <option value="A+">A+</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  {/* Add more options here */}
                </select>
                {errors?.grade && (
                  <span className="text-danger">{errors?.grade.message}</span>
                )}
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Date of Completion</label>
                <input
                  type="date"
                  className="form-control"
                  {...register("completionDate", {
                    required: "Please Enter Completion Date",
                  })}
                  disabled={viewCertificate}
                />
                {errors?.completionDate && (
                  <span className="text-danger">
                    {errors?.completionDate.message}
                  </span>
                )}
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Remarks</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Remarks"
                  {...register("remarks", {
                    required: "Please Enter Remarks",
                  })}
                  disabled={viewCertificate}
                />
                {errors?.remarks && (
                  <span className="text-danger">{errors?.remarks.message}</span>
                )}
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Attachment</label>
                <input
                  type={
                    watch("certificateAttchment") &&
                    watch("certificateAttchment")[0]?.name
                      ? "file"
                      : !watch("certificateAttchment")
                      ? "file"
                      : "text"
                  }
                  className="form-control"
                  disabled={watch("certificateAttchment")}
                  {...register("certificateAttchment", {
                    required: "Please Attach Certificate",
                  })}
                  accept=".pdf,.doc,.docx"
                />
                {errors?.certificateAttchment && (
                  <span className="text-danger">
                    {errors?.certificateAttchment.message}
                  </span>
                )}
                {!viewCertificate && watch("certificateAttchment") && (
                  <div className="input-icons">
                    <i
                      className="fas fa-trash text-danger cursor-pointer"
                      onClick={(e) => setValue("certificateAttchment", "")}
                    ></i>
                    <i
                      className="fas fa-eye text-primary cursor-pointer"
                      onClick={() =>
                        openFile(
                          watch("certificateAttchment")[0]?.name
                            ? "certificateAttchment"
                            : "certificateFilePath"
                        )
                      }
                    ></i>
                  </div>
                )}
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
              {!viewCertificate && (
                <button type="submit" className="btn btn-primary">
                  {certificateData ? "Update" : "Add"} Certificate
                </button>
              )}
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddNewCertificate;
