import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { AxiosInstance } from "../axiosInstance";
import { useForm } from "react-hook-form";

export const AddEvent = ({ isOpen, setIsOpen, eventData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    getValues,
    reset,
  } = useForm();

  const [courses, setCourses] = useState([]);
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    getCourses();
    getClasses();
    if (eventData) {
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

  const getClasses = async () => {
    try {
      const { data } = await AxiosInstance.get("/class/getClasses");
      setClasses(data.classes);
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
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Modal show={isOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h5 className="modal-title" id="addEventModalLabel">
              {eventData ? "Update" : "Add"} Course
            </h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row" onSubmit={handleSubmit(addNewEvent)}>
            <div className="col-md-6 form-group mb-3">
              <label>Course Name:</label>
              <select
                {...register("course", {
                  required: "Please Select Course",
                })}
                className="form-select"
                disabled={eventData}
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
                disabled={eventData}
              >
                <option value="" selected>
                  --select--
                </option>
                {classes.map((e) => (
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
                })}
                disabled={eventData}
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
                {...register("endTime", { required: "Please Enter End Time" })}
                disabled={eventData}
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
                })}
                disabled={eventData}
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
                {...register("endDate", { required: "please select End Date" })}
                disabled={eventData}
              />
              {errors?.endDate && (
                <span className="text-danger">{errors?.endDate.message}</span>
              )}
            </div>
            <div className="col-md-12 form-group mb-3">
              <label>Location:</label>
              <select
                className="form-select"
                {...register("location", {
                  required: "Please Select Location",
                })}
                disabled={eventData}
              >
                <option value="">--select--</option>
                <option value="location1">Location 1</option>
                <option value="location2">Location 2</option>
                <option value="location3">Location 3</option>
              </select>
              {errors?.location && (
                <span className="text-danger">{errors?.location.message}</span>
              )}
            </div>
            <Modal.Footer>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onclick={handleClose}
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Add Course
                </button>
              </div>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};
