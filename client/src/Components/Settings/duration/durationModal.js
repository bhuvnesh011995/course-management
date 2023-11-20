import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { AxiosInstance } from "../../../common-components/axiosInstance";
import { useEffect } from "react";
import { toast } from "react-toastify";

export const DurationModal = ({
  setIsOpen,
  isOpen,
  callback,
  durationData,
}) => {
  const handleClose = () => {
    setIsOpen(false);
    reset({});
  };
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (durationData) reset(durationData);
  }, []);

  const addDuration = async (duration) => {
    try {
      toast.dismiss();
      const newDuration = await AxiosInstance.post(
        "/durations/addDuration",
        duration
      );
      if (newDuration.status == 200) {
        callback(newDuration.data.data);
        toast.success(newDuration.data.message);
      } else {
        toast.error("something went wrong");
      }
      handleClose();
    } catch (err) {
      toast.error("something went wrong");
      console.error(err);
    }
  };

  const editDuration = async (durationData) => {
    try {
      toast.dismiss();
      const updatedDuration = await AxiosInstance.post(
        "/durations/updateDuration",
        durationData
      );
      if (updatedDuration.status == 200) {
        callback(durationData);
        toast.success(updatedDuration.data.message);
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
            {durationData ? "Update " : "Add New "} Duration
          </h5>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form
          onSubmit={handleSubmit(durationData ? editDuration : addDuration)}
        >
          <div className="form-group mb-3">
            <label>Duration Type:</label>
            <select
              className="form-select"
              {...register("type", { required: "Please Select Duration Type" })}
            >
              <option key={"Day"} value="Day">
                Day
              </option>
              <option key={"Week"} value="Week">
                Week
              </option>
              <option key={"Month"} value="Month">
                Month
              </option>
              <option key={"Year"} value="Year">
                Year
              </option>
              {/* <option value="leave">Leave</option> */}
            </select>
            {errors?.type && (
              <span className="text-danger">{errors?.type.message}</span>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Duration :</label>
            <input
              type="text"
              className="form-control"
              {...register("duration", {
                required: "This field is required",
                pattern:
                  watch("type") == "Day"
                    ? {
                        value: /^[0-9]{1,3}$/,
                        message: "Please Enter Number between 3 characters.",
                      }
                    : {
                        value: /^[0-9]{1,2}$/,
                        message: "Please Enter Number between 2 characters.",
                      },
              })}
              placeholder="Enter Duration"
            />
            <span className="text-danger">
              {errors?.duration && errors?.duration.message}
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
                {durationData ? "Update" : "Save"}
              </button>
            </div>
          </Modal.Footer>
        </form>
      </Modal.Body>
    </Modal>
  );
};
