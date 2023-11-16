import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { AxiosInstance } from "../../../common-components/axiosInstance";
import { toast } from "react-toastify";

export const CourseModal = ({
  isOpen,
  setIsOpen,
  tradeTypes,
  registrationTypes,
  courseData,
  viewCourse,
  callback,
}) => {
  const [tradeLevels, setTradeLevels] = useState([]);
  const [registrationCode, setRegistrationCode] = useState("");
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (courseData) getSelectedCourse();
  }, []);

  const addNewCourse = async (newCourse) => {
    try {
      toast.dismiss();
      const { data } = await AxiosInstance.post(
        "/courses/addNewCourse",
        newCourse
      );
      toast.success("Course Added");
      callback(data);
      handleClose();
    } catch (err) {
      toast.error("error occured");
      console.error(err);
    }
  };

  const getSelectedCourse = async () => {
    try {
      const { data } = await AxiosInstance.get("/courses/getCourse", {
        params: courseData,
      });
      reset(data[0]);
      changeRegistrationData(data[0].registrationType);
    } catch (err) {
      console.error(err);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    reset({});
  };

  const changeRegistrationData = (value) => {
    if (!value.length) {
      setTradeLevels([]);
      setRegistrationCode("");
    }

    const registrationLevels = registrationTypes.filter((e) => e._id == value);
    if (registrationLevels.length && registrationLevels[0]?.tradeLevels?.length)
      setTradeLevels(registrationLevels[0].tradeLevels);
    setRegistrationCode(registrationLevels[0]?.registrationCode);
  };

  const updateCourse = async (updatedCourse) => {
    try {
      toast.dismiss();
      const course = await AxiosInstance.post(
        "/courses/updateCourse",
        updatedCourse
      );
      if (course.status == 200) {
        callback(course.data.updatedCourse);
        toast.success(course.data.message);
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
    <div>
      <Modal show={isOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h5 className="modal-title" id="addCourseModalLabel">
              {viewCourse ? "View" : courseData ? "Update" : "Add New"} Course
            </h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={handleSubmit(courseData ? updateCourse : addNewCourse)}
            className="row"
          >
            <div className="col-md-6 mb-3">
              <label className="form-label">Course Name:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Course Name"
                {...register("courseName", {
                  required: "Course Name is required",
                })}
                disabled={viewCourse}
              />
              <span className="text-danger">
                {errors?.courseName && errors?.courseName.message}
              </span>
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Trade Type:</label>
              <select
                className="form-select"
                {...register("tradeType", {
                  required: "Trade Type is required",
                })}
                disabled={viewCourse}
              >
                <option value="">-- Select Trade Type --</option>
                {tradeTypes.map((e, index) => (
                  <option key={index} value={e._id}>
                    {e.tradeType}
                  </option>
                ))}
              </select>
              <span className="text-danger">
                {errors?.tradeType && errors?.tradeType.message}
              </span>
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Registration Type:</label>
              <select
                className="form-select"
                {...register("registrationType", {
                  required: "Registration Type is required",
                  onChange: ({ target }) =>
                    changeRegistrationData(target.value),
                })}
                disabled={viewCourse}
              >
                <option value="">-- Select Registration Type --</option>
                {registrationTypes.map((e, index) => (
                  <option key={index} value={e._id}>
                    {e.registrationName}
                  </option>
                ))}
              </select>
              <span className="text-danger">
                {errors?.registrationType && errors?.registrationType.message}
              </span>
            </div>
            {registrationCode != "CRW" && (
              <div className="col-md-6 mb-3">
                <label className="form-label">Trade Level:</label>
                <select
                  className="form-select"
                  {...register("tradeLevel", {
                    required: "Trade Level is required",
                  })}
                  disabled={viewCourse}
                >
                  <option value="">-- Select Registration Level --</option>
                  {tradeLevels.map((e, index) => (
                    <option key={index} value={e._id}>
                      {e.tradeLevel}
                    </option>
                  ))}
                </select>
                <span className="text-danger">
                  {errors?.tradeLevel && errors?.tradeLevel.message}
                </span>
              </div>
            )}
            <div className="col-md-6 mb-3">
              <label className="form-label">Price:</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter price"
                {...register("price", { required: "Price is required" })}
                disabled={viewCourse}
              />
              <span className="text-danger">
                {errors?.price && errors?.price.message}
              </span>
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Duration:</label>
              <input
                className="form-control"
                {...register("duration", { required: "Duration is required" })}
                disabled={viewCourse}
                placeholder={"months, years, weeks"}
              />
              <span className="text-danger">
                {errors?.duration && errors?.duration.message}
              </span>
            </div>
            <Modal.Footer>
              <div>
                <button
                  type="button"
                  onClick={handleClose}
                  className=" mx-1 btn btn-secondary"
                >
                  Cancel
                </button>
                {!viewCourse && (
                  <button type="submit" className="mx-1 btn btn-primary">
                    {courseData ? "Update" : "Save"}
                  </button>
                )}
              </div>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};
