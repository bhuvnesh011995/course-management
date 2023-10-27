import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { AxiosInstance } from "../../../common-components/axiosInstance";
import { useEffect, useState } from "react";
import moment from "moment";

export const NewClassModal = ({
  setIsOpen,
  isOpen,
  classData,
  viewClass,
  callback,
}) => {
  const [courses, setCourses] = useState([]);
  const [showLecDays, setShowLecDays] = useState(false);
  const [trainers, setTrainers] = useState([]);

  const {
    handleSubmit,
    register,
    reset,
    setValue,
    getValues,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    getCourses();
    getTrainers();
    if (classData) getClass();
  }, []);

  useEffect(() => {
    changeSelectHeader();
  }, [watch("lectureDay")]);

  const getTrainers = async () => {
    try {
      const { data } = await AxiosInstance.get("/trainer/getTrainers");
      setTrainers(data);
    } catch (err) {
      console.error(err);
    }
  };

  const changeSelectHeader = () => {
    let newHeader = "";
    const selectElement = document.getElementById("selectedItems");
    if (watch("lectureDay")) {
      if (watch("lectureDay").length) {
        watch("lectureDay").map((e) => {
          newHeader += e + ",";
        });
        selectElement.innerText = newHeader;
      } else {
        selectElement.innerText = "Select Items";
      }
    }
  };

  const getClass = async () => {
    try {
      const { data } = await AxiosInstance.get("/class/getClass", {
        params: classData,
      });
      data[0].startDate = moment(data[0].startDate).format("YYYY-MM-DD");
      data[0].endDate = moment(data[0].endDate).format("YYYY-MM-DD");
      reset(data[0]);
    } catch (err) {
      console.error(err);
    }
  };

  const handleclose = () => {
    reset({});
    setIsOpen(false);
  };

  const addNewClass = async (newClass) => {
    try {
      const { data } = await AxiosInstance.post("/class/addClass", newClass);
      callback(data);
      handleclose();
    } catch (err) {
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

  const updateClass = async (updatedClass) => {
    try {
      const { data } = await AxiosInstance.post(
        "/class/updateClass",
        updatedClass
      );
      callback(data);
      handleclose();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Modal show={isOpen} onHide={handleclose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            <h5 className="modal-title">
              {viewClass ? "View" : classData ? "Update" : "Add New"} Class
            </h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(classData ? updateClass : addNewClass)}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Class Code</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter class code"
                  {...register("classCode", {
                    required: "Please Enter Class Code",
                  })}
                  disabled={viewClass}
                />
                {errors?.classCode && (
                  <span className="text-danger">
                    {errors?.classCode.message}
                  </span>
                )}
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Course</label>
                <select
                  className="form-select"
                  {...register("course", {
                    required: "This Field Is Required",
                  })}
                  disabled={viewClass}
                >
                  <option value="">Select courses</option>
                  {courses.map((e) => (
                    <option value={e._id}>{e.courseName}</option>
                  ))}
                </select>
                {errors?.course && (
                  <span className="text-danger">{errors?.course.message}</span>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="col-form-label">
                  Status<span className="text-danger">*</span>
                </label>
                <div className="col-lg-12">
                  <select
                    className="form-select validate"
                    {...register("classStatus", {
                      required: "This Field is Required",
                    })}
                    disabled={viewClass}
                  >
                    <option value selected>
                      Choose Status..
                    </option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                  {errors?.classStatus && (
                    <span className="text-danger">
                      {errors?.classStatus.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Class Starting Timing</label>
                <input
                  type="time"
                  className="form-control"
                  {...register("startTiming", {
                    required: "Please Enter Start Timing",
                  })}
                  disabled={viewClass}
                />
                {errors?.startTiming && (
                  <span className="text-danger">
                    {errors?.startTiming.message}
                  </span>
                )}
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Class Ending Timing</label>
                <input
                  type="time"
                  className="form-control"
                  {...register("endTiming", {
                    required: "Please Enter End Timing",
                  })}
                  disabled={viewClass}
                />
                {errors?.endTiming && (
                  <span className="text-danger">
                    {errors?.endTiming.message}
                  </span>
                )}
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Start Date</label>
                <div className="input-group">
                  <input
                    type="date"
                    className="form-control"
                    placeholder="dd M, yyyy"
                    {...register("startDate", {
                      required: "Please Enter Start Date",
                    })}
                    disabled={viewClass}
                  />
                  <span className="input-group-text">
                    <i className="mdi mdi-calendar" />
                  </span>
                </div>
                {errors?.startDate && (
                  <span className="text-danger">
                    {errors?.startDate.message}
                  </span>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="endDate" className="form-label">
                  End Date
                </label>
                <div className="input-group" id="datepicker3">
                  <input
                    type="date"
                    className="form-control"
                    placeholder="dd M, yyyy"
                    {...register("endDate", {
                      required: "Please Enter End Date",
                    })}
                    disabled={viewClass}
                  />
                  <span className="input-group-text">
                    <i className="mdi mdi-calendar" />
                  </span>
                </div>
                {errors?.endDate && (
                  <span className="text-danger">{errors?.endDate.message}</span>
                )}
              </div>
              {/* <style
                dangerouslySetInnerHTML={{
                  __html:
                    `\n
.custom-select {\n
position: relative;\n
width: 100%;\n                                            
cursor: pointer;\n                                        
}\n\n                                        
.option label {\n                                            
  margin-bottom: 0;\n                                        
}\n\n                                        
.select-box {\n                                            
  display: flex;\n                                            
  justify-content: space-between;\n                                            
  align-items: center;\n                                            
  padding: 10px;\n                                            
  border: 1px solid #ccc;\n                                            
  border-radius: 4px;\n                                        
}\n\n                                        
.custom-select-view 
.select-box {\n                                            
  background-color: #eff2f7;\n                                            
  opacity: 1;\n                                        
}\n\n                                        
.placeholder {\n                                            
  background-color: transparent;\n                                            
  opacity: 1;\n                                            
  flex-grow: 1;\n                                            
  margin-right: 10px;\n                                            
  cursor: pointer;\n                                        
}\n\n                                        
.options {\n                                            
  position: absolute;\n                                            
  top: 100%;\n                                            
  left: 0;\n                                            
  width: 100%;\n                                            
  background-color: #fff;\n                                            
  border: 1px solid #ccc;\n                                            
  border-top: none;\n                                            
  border-radius: 0 0 4px 4px;\n                                            
  display: none;\n                                        
}\n\n                                        
.option {\n                                            
  display: flex;\n                                            
  align-items: center;\n                                            
  padding: 5px;\n                                        
}\n\n                                        
input[type="checkbox"] {\n                                            
  margin-right: 5px;\n                                        
}\n                                    
`,            
}}
/> */}

              <div className="col-md-6 mb-3">
                <div className="custom-select">
                  <label>Lec In Week</label>
                  <div
                    className="select-box"
                    onClick={() => !viewClass && setShowLecDays(!showLecDays)}
                  >
                    <span
                      className="placeholder d-flex flex-wrap"
                      id="selectedItems"
                    >
                      Select Items
                    </span>
                    <i className="fas fa-chevron-down" />
                  </div>
                  {showLecDays && (
                    <div className="options" style={{ display: "block" }}>
                      <div className="option">
                        <input
                          type="checkbox"
                          value="Monday"
                          {...register("lectureDay", {
                            required: "Please Lecture Days",
                          })}
                        />
                        <label>Monday</label>
                      </div>
                      <div className="option">
                        <input
                          type="checkbox"
                          value="Tuesday"
                          {...register("lectureDay", {
                            required: "Please Lecture Days",
                          })}
                        />
                        <label>Tuesday</label>
                      </div>
                      <div className="option">
                        <input
                          type="checkbox"
                          value="Wednesday"
                          {...register("lectureDay", {
                            required: "Please Lecture Days",
                          })}
                        />
                        <label>Wednesday</label>
                      </div>
                      <div className="option">
                        <input
                          type="checkbox"
                          value="Thursday"
                          {...register("lectureDay", {
                            required: "Please Lecture Days",
                          })}
                        />
                        <label>Thursday</label>
                      </div>
                      <div className="option">
                        <input
                          type="checkbox"
                          value="Friday"
                          {...register("lectureDay", {
                            required: "Please Lecture Days",
                          })}
                        />
                        <label>Friday</label>
                      </div>
                      <div className="option">
                        <input
                          type="checkbox"
                          value="Saturday"
                          {...register("lectureDay", {
                            required: "Please Lecture Days",
                          })}
                        />
                        <label>Saturday</label>
                      </div>
                    </div>
                  )}
                  {errors?.lectureDay && (
                    <span className="text-danger">
                      {errors?.lectureDay.message}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Trainer</label>
                <select
                  className="form-select"
                  {...register("trainer", {
                    required: "Please Select Trainer",
                  })}
                  disabled={viewClass}
                >
                  <option value="">Select Trainer</option>
                  {trainers.map((e) => (
                    <option value={e._id}>{e.trainerName}</option>
                  ))}
                </select>
                {errors?.trainer && (
                  <span className="text-danger">{errors?.trainer.message}</span>
                )}
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                onClick={handleclose}
                className="btn btn-secondary"
              >
                Cancel
              </button>
              {!viewClass && (
                <button type="submit" className="btn btn-primary">
                  {classData ? "Update" : "Add"} Class
                </button>
              )}
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};
