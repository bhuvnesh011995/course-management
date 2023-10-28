/* eslint-disable default-case */
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { AxiosInstance } from "../axiosInstance";
import { useForm } from "react-hook-form";
import moment from "moment";

export const AddEvent = ({ isOpen, setIsOpen, eventData, callback }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setError,
    setValue,
    getValues,
    reset,
  } = useForm();

  const [courses, setCourses] = useState([]);
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    getCourses();
    if (eventData?._id) {
      getCourseClasses(eventData.course);
      getEvent();
    } else {
      reset(eventData);
    }
  }, []);

  const getCourses = async () => {
    try {
      const { data } = await AxiosInstance.get("/courses/getCourses");
      setCourses(data.allCourses);
    } catch (err) {
      console.error(err);
    }
  };

  const getCourseClasses = async (courseId) => {
    try {
      const { data } = await AxiosInstance.get("/class/getCourseClasses", {
        params: { id: courseId },
      });
      setClasses(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const addNewEvent = async (EventData) => {
    try {
      const { data } = await AxiosInstance.post("/events/AddEvent", EventData);
      callback(data);
      handleClose();
    } catch (err) {
      console.error(err);
    }
  };

  const getEvent = async () => {
    try {
      const { data } = await AxiosInstance.get("/events/getEvent", {
        params: eventData,
      });
      data.startDate = moment(data.startDate).format("YYYY-MM-DD");
      data.endDate = moment(data.endDate).format("YYYY-MM-DD");
      data.startTime = moment(data.startTime, "hh:mm A").format("HH:mm");
      data.endTime = moment(data.endTime, "hh:mm A").format("HH:mm");
      reset(data);
    } catch (err) {
      console.error(err);
    }
  };

  const updateEvent = async (eventData) => {
    try {
      const { data } = await AxiosInstance.post(
        "/events/updateEvent",
        eventData
      );
      callback(data[0]);
      handleClose();
    } catch (err) {
      console.error(err);
    }
  };

  const deleteEvent = async () => {
    try {
      const { data } = await AxiosInstance.delete("/events/deleteEvent", {
        params: eventData,
      });
      callback(eventData, "delete");
      handleClose();
    } catch (err) {
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
    checkTime();
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

  return (
    <div>
      <Modal show={isOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h5 className="modal-title" id="addEventModalLabel">
              {eventData?._id ? "Update" : "Add"} Class
            </h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            className="row"
            onSubmit={handleSubmit(eventData?._id ? updateEvent : addNewEvent)}
          >
            <div className="col-md-6 form-group mb-3">
              <label>Course Name:</label>
              <select
                {...register("course", {
                  required: "Please Select Course",
                  onChange: ({ target }) => getCourseClasses(target.value),
                })}
                className="form-select"
              >
                <option value="" selected>
                  --select--
                </option>
                {courses.map((e) => (
                  <option value={e._id}>{e.courseName}</option>
                ))}
              </select>
              {errors?.course && (
                <span className="text-danger">{errors?.course.message}</span>
              )}
            </div>
            <div className="col-md-6 form-group mb-3">
              <label>Class Name:</label>
              <select
                className="form-select"
                id="className"
                {...register("class", { required: "please select this field" })}
              >
                <option value="" selected>
                  --select--
                </option>
                {classes?.map((e) => (
                  <option value={e._id}>{e.classCode}</option>
                ))}
              </select>
              {errors?.class && (
                <span className="text-danger">{errors?.class.message}</span>
              )}
            </div>
            <div className="col-md-6 form-group mb-3">
              <label>Start Time:</label>
              <input
                type="time"
                className="form-control"
                {...register("startTime", {
                  required: "Please Enter Start Time",
                  onChange: (e) => checkTime(),
                })}
              />
              {errors?.startTime && (
                <span className="text-danger">{errors?.startTime.message}</span>
              )}
            </div>
            <div className="col-md-6 form-group mb-3">
              <label>End Time:</label>
              <input
                type="time"
                className="form-control"
                {...register("endTime", {
                  required: "Please Enter End Time",
                  onChange: (e) => checkTime(),
                })}
              />
              {errors?.endTime && (
                <span className="text-danger">{errors?.endTime.message}</span>
              )}
            </div>
            <div className="col-md-6 form-group mb-3">
              <label>Start Date:</label>
              <input
                type="date"
                className="form-control"
                {...register("startDate", {
                  required: "please select Start Date",
                  onChange: (e) => checkDate(e.target.value, "startDate"),
                })}
              />
              {errors?.startDate && (
                <span className="text-danger">{errors?.startDate.message}</span>
              )}
            </div>
            <div className="col-md-6 form-group mb-3">
              <label>End Date:</label>
              <input
                type="date"
                className="form-control"
                {...register("endDate", {
                  required: "please select End Date",
                  onChange: (e) => checkDate(e.target.value, "endDate"),
                })}
              />
              {errors?.endDate && (
                <span className="text-danger">{errors?.endDate.message}</span>
              )}
            </div>
            <Modal.Footer>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => handleClose()}
              >
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                {eventData?._id ? "Update" : "Add"} Class
              </button>
              {eventData?._id && (
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={deleteEvent}
                >
                  Delete Class
                </button>
              )}
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};
