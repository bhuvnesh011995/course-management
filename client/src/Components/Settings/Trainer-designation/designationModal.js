import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { AxiosInstance } from "../../../common-components/axiosInstance";
import { useEffect } from "react";
import { toast } from "react-toastify";

export const DesignationModal = ({
  setIsOpen,
  isOpen,
  callback,
  designationData,
}) => {
  const handleClose = () => {
    setIsOpen(false);
    reset({});
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (designationData) reset(designationData);
  }, []);

  const addDesignation = async (designation) => {
    try {
      toast.dismiss();
      const newDesignation = await AxiosInstance.post(
        "/designations/addDesignation",
        designation
      );
      if (newDesignation.status == 200) {
        callback(newDesignation.data.data);
        toast.success(newDesignation.data.message);
      } else {
        toast.error("something went wrong");
      }
      handleClose();
    } catch (err) {
      toast.error("something went wrong");
      console.error(err);
    }
  };

  const editDesignation = async (designationData) => {
    try {
      toast.dismiss();
      const updatedDesignation = await AxiosInstance.post(
        "/designations/updateDesignation",
        designationData
      );
      if (updatedDesignation.status == 200) {
        callback(designationData);
        toast.success(updatedDesignation.data.message);
      } else {
        toast.error("something went wrong ");
      }

      handleClose();
    } catch (err) {
      toast.error("something went wrong ");
      console.error(err);
    }
  };

  return (
    <Modal show={isOpen} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          <h5 className="modal-title">
            {designationData ? "Update " : "Add New "} Designation
          </h5>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form
          onSubmit={handleSubmit(
            designationData ? editDesignation : addDesignation
          )}
        >
          <div className="mb-3">
            <label className="form-label">Designation :</label>
            <input
              type="text"
              className="form-control"
              {...register("designation", {
                required: "This field is required",
              })}
              placeholder="Enter Designation"
            />
            <span className="text-danger">
              {errors?.designation && errors?.designation.message}
            </span>
          </div>
          <Modal.Footer>
            <div>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleClose}
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                {designationData ? "Update" : "Save"}
              </button>
            </div>
          </Modal.Footer>
        </form>
      </Modal.Body>
    </Modal>
  );
};
