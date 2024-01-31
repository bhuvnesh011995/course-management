import { useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import moment from "moment";
import { useAuth } from "../../context/authContext";

export const CalendarEventModal = ({
  isOpen,
  setIsOpen,
  eventData,
  callback,
}) => {
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

  const checkTime = () => {
    if (
      moment(watch("startDate")).format("YYYY-MM-DD") ===
      moment(watch("endDate")).format("YYYY-MM-DD")
    ) {
      if (
        moment(watch("startTime"), "HH:mm") >= moment(watch("endTime"), "HH:mm")
      ) {
        setError("startTime", {
          type: "manual",
          message: "Please Enter Time Less Than Start Time",
        });
      } else {
        setError("startTime", undefined);
      }
      if (
        moment(watch("endTime"), "HH:mm") <= moment(watch("startTime"), "HH:mm")
      ) {
        setError("endTime", {
          type: "manual",
          message: "Please Enter Time greater Than Start Time",
        });
      } else {
        setError("endTime", undefined);
      }
    } else {
      setError("startTime", undefined);
      setError("endTime", undefined);
    }
  };

  const updateEvent = async (updatedEvent) => {
    try {
      const updateEvent = await NewAxiosInstance.post(
        "/class/updateCalendarEvent",
        updatedEvent,
      );
      callback(updatedEvent);
      handleClose();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Modal show={isOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h5 className='modal-title' id='addEventModalLabel'>
              {eventData ? "View" : "Add"} Event
            </h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(updateEvent)}>
            <div className='form-group mb-3'>
              <label>Event Title:</label>
              <input
                type='text'
                className='form-control'
                placeholder='Enter Event Title'
                {...register("title", { required: "Please Enter End Date" })}
                // disabled={eventData?.title}
              />
              {errors?.title && (
                <span className='text-danger'>{errors?.title.message}</span>
              )}
            </div>

            <div className='col-md-6 mb-3'>
              <label className='form-label'>
                Class Starting Timing <span className='text-danger'>*</span>
              </label>
              <input
                type='time'
                className='form-control'
                {...register("startTime", {
                  required: "Please Enter Start Timing",
                  onChange: (e) => checkTime(),
                })}
                // disabled={eventData?.title}
              />
              {errors?.startTime && (
                <span className='text-danger'>{errors?.startTime.message}</span>
              )}
            </div>
            <div className='col-md-6 mb-3'>
              <label className='form-label'>
                Class Ending Timing <span className='text-danger'>*</span>
              </label>
              <input
                type='time'
                className='form-control'
                {...register("endTime", {
                  required: "Please Enter End Timing",
                  onChange: (e) => checkTime(),
                })}
                // disabled={eventData?.title}
              />
              {errors?.endTime && (
                <span className='text-danger'>{errors?.endTime.message}</span>
              )}
            </div>
            <div className='form-group mb-3'>
              <label>Start Date:</label>
              <input
                type='date'
                className='form-control'
                {...register("startDate", {
                  required: "Please Enter Start Date",
                  onChange: () => checkDate(),
                })}
                // disabled={eventData?.title}
              />
              {errors?.startDate && (
                <span className='text-danger'>{errors?.startDate.message}</span>
              )}
            </div>
            <div className='form-group'>
              <label>End Date:</label>
              <input
                type='date'
                className='form-control'
                {...register("endDate", {
                  required: "Please Enter End Date",
                  onChange: () => checkDate(),
                })}
                // disabled={eventData?.title}
              />
              {errors?.endDate && (
                <span className='text-danger'>{errors?.endDate.message}</span>
              )}
            </div>
            <div className='col-md-12 mb-3'>
              <label className='form-label'>Remarks</label>
              <textarea
                className='form-control'
                {...register("classRemarks")}
                // disabled={eventData?.title}
              />
            </div>
            <Modal.Footer>
              <button type='submit' className='btn btn-primary'>
                Update
              </button>
              <button
                type='button'
                onClick={() => handleClose()}
                className='btn btn-secondary'
              >
                Close
              </button>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};
