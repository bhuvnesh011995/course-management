import { useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useAuth } from "../../../context/authContext";

export const AddNewHoliday = ({ isOpen, setIsOpen, eventData, callback }) => {
  const { NewAxiosInstance } = useAuth();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    watch,
    setError,
  } = useForm();

  useEffect(() => {
    if (eventData) reset(eventData);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const addNewEvent = async (newEventData) => {
    try {
      toast.dismiss();
      const { data } = await NewAxiosInstance.post(
        "/events/AddEvent",
        newEventData
      );
      toast.success("Event Added");
      callback(data);
      handleClose();
    } catch (err) {
      toast.error("error occured");
      console.error(err);
    }
  };

  const checkDate = () => {
    if (new Date(watch("endDate")) < new Date(watch("startDate"))) {
      setError("endDate", {
        type: "manual",
        message: "Please Enter Date Greater Than Start Date",
      });
    } else {
      setError("endDate", undefined);
    }

    if (new Date(watch("startDate")) > new Date(watch("endDate"))) {
      setError("startDate", {
        type: "manual",
        message: "Please Enter Date Less Than End Date",
      });
    } else {
      setError("startDate", undefined);
    }
  };

  return (
    <div>
      <Modal show={isOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h5 className="modal-title" id="addEventModalLabel">
              {eventData ? "View" : "Add"} Event
            </h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(addNewEvent)}>
            <div className="form-group mb-3">
              <label>Event Title:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Event Title"
                {...register("title", { required: "Please Enter End Date" })}
                disabled={eventData?.title}
              />
              {errors?.title && (
                <span className="text-danger">{errors?.title.message}</span>
              )}
            </div>
            <div className="form-group mb-3">
              <label>Event Type:</label>
              <select
                className="form-select"
                {...register("type", { required: "Please Enter Event Type" })}
                disabled={eventData?.title}
              >
                <option key={"holiday"} value="holiday">
                  Holiday
                </option>
                <option key={"weekend"} value="weekend">
                  Weekend
                </option>
                {/* <option value="leave">Leave</option> */}
              </select>
              {errors?.type && (
                <span className="text-danger">{errors?.type.message}</span>
              )}
            </div>
            <div className="form-group mb-3">
              <label>Start Date:</label>
              <input
                type="date"
                className="form-control"
                {...register("startDate", {
                  required: "Please Enter Start Date",
                  onChange: () => checkDate(),
                })}
                disabled={eventData?.title}
              />
              {errors?.startDate && (
                <span className="text-danger">{errors?.startDate.message}</span>
              )}
            </div>
            <div className="form-group">
              <label>End Date:</label>
              <input
                type="date"
                className="form-control"
                {...register("endDate", {
                  required: "Please Enter End Date",
                  onChange: () => checkDate(),
                })}
                disabled={eventData?.title}
              />
              {errors?.endDate && (
                <span className="text-danger">{errors?.endDate.message}</span>
              )}
            </div>
            <Modal.Footer>
              <button
                type="button"
                onClick={() => handleClose()}
                className="btn btn-secondary"
              >
                Close
              </button>
              {!eventData?._id && (
                <button type="submit" className="btn btn-primary">
                  Add Event
                </button>
              )}
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};
