import React from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddNewCertificate = ({
  isOpen,
  setIsOpen,
  certificateData,
  viewCertificate,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleClose = () => {
    setIsOpen(false);
  };

  const addCertificate = async (newCertificate) => {
    try {
      console.log(newCertificate);
    } catch (err) {
      console.error(err);
    }
  };

  const updateCertificate = async (updatedCertificate) => {
    try {
      console.log(updatedCertificate);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Modal onHide={handleClose} show={isOpen}>
        <Modal.Header>
          <Modal.Title>
            <h5 className="modal-title" id="addCertificateModalLabel">
              Add Certificate
            </h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={handleSubmit(
              certificateData ? updateCertificate : addCertificate
            )}
          >
            <div className="row">
              <div className="col-md-12 mb-3">
                <label className="form-label">Certificate Number</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={
                    certificateData
                      ? certificateData?.certificateNo
                      : `cfg${Date.now() + Math.round(Math.random * 1e9)}`
                  }
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
                  {...register("participantName", {
                    required: "Please Enter Participant Name",
                  })}
                >
                  <option value={0}>Select courses</option>
                  <option value="class-1">class-1</option>
                  <option value="class-2">class-2</option>
                  <option value="class-3">class-3</option>
                </select>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="courseDuration" className="form-label">
                  Course Duration
                </label>
                <select className="form-select" id="courseDuration" required>
                  <option value selected>
                    Select Duration
                  </option>
                  <option value="3 Months">3 Months</option>
                  <option value="6 Months">6 Months</option>
                  <option value="1 Year">1 Year</option>
                </select>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="grade" className="form-label">
                  Grade
                </label>
                <select className="form-select" id="grade" required>
                  <option value selected>
                    Select Grade
                  </option>
                  <option value="A+">A+</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  {/* Add more options here */}
                </select>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="dateOfCompletion" className="form-label">
                  Date of Completion
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="dateOfCompletion"
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="certificateAttachment" className="form-label">
                  Attachment
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="certificateAttachment"
                  accept=".pdf,.doc,.docx"
                />
              </div>
            </div>
            <Modal.Footer>
              <button type="button" className="btn btn-secondary">
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Add Certificate
              </button>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddNewCertificate;
