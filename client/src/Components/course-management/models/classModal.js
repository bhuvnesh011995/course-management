import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";

export const NewClassModal = ({ setIsOpen, isOpen }) => {
  const {
    handleSubmit,
    register,
    reset,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  const handleclose = () => {
    setIsOpen(false);
  };

  const addNewClass = async (newClass) => {
    try {
      console.log(newClass);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <Modal show={isOpen} onHide={handleclose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h5 className="modal-title">Add New Class</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(addNewClass)}>
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
                >
                  <option value="">Select courses</option>
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
                    type="text"
                    className="form-control"
                    placeholder="dd M, yyyy"
                    {...register("startDate", {
                      required: "Please Enter Start Date",
                    })}
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
                    type="text"
                    className="form-control"
                    placeholder="dd M, yyyy"
                    {...register("endDate", {
                      required: "Please Enter End Date",
                    })}
                  />
                  <span className="input-group-text">
                    <i className="mdi mdi-calendar" />
                  </span>
                </div>
                {errors?.endDate && (
                  <span className="text-danger">{errors?.endDate.message}</span>
                )}
              </div>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    '\n                                        .custom-select {\n                                            position: relative;\n                                            width: 100%;\n                                            cursor: pointer;\n                                        }\n\n                                        .option label {\n                                            margin-bottom: 0;\n                                        }\n\n                                        .select-box {\n                                            display: flex;\n                                            justify-content: space-between;\n                                            align-items: center;\n                                            padding: 10px;\n                                            border: 1px solid #ccc;\n                                            border-radius: 4px;\n                                        }\n\n                                        .custom-select-view .select-box {\n                                            background-color: #eff2f7;\n                                            opacity: 1;\n                                        }\n\n                                        .placeholder {\n                                            background-color: transparent;\n                                            opacity: 1;\n                                            flex-grow: 1;\n                                            margin-right: 10px;\n                                            cursor: pointer;\n                                        }\n\n                                        .options {\n                                            position: absolute;\n                                            top: 100%;\n                                            left: 0;\n                                            width: 100%;\n                                            background-color: #fff;\n                                            border: 1px solid #ccc;\n                                            border-top: none;\n                                            border-radius: 0 0 4px 4px;\n                                            display: none;\n                                        }\n\n                                        .option {\n                                            display: flex;\n                                            align-items: center;\n                                            padding: 5px;\n                                        }\n\n                                        input[type="checkbox"] {\n                                            margin-right: 5px;\n                                        }\n                                    ',
                }}
              />
              <div className="col-md-6 mb-3">
                <div className="custom-select">
                  <label>Lec In Week</label>
                  <div className="select-box">
                    <span className="placeholder">Select Items</span>
                    <i className="fas fa-chevron-down" />
                  </div>
                  <div className="options">
                    <div className="option">
                      <input
                        type="checkbox"
                        {...register("lectureDay", {
                          required: "Please Lecture Days",
                        })}
                      />
                      <label>Monday</label>
                    </div>
                    <div className="option">
                      <input
                        type="checkbox"
                        {...register("lectureDay", {
                          required: "Please Lecture Days",
                        })}
                      />
                      <label>Tuesday</label>
                    </div>
                    <div className="option">
                      <input
                        type="checkbox"
                        {...register("lectureDay", {
                          required: "Please Lecture Days",
                        })}
                      />
                      <label>Wednesday</label>
                    </div>
                    <div className="option">
                      <input
                        type="checkbox"
                        {...register("lectureDay", {
                          required: "Please Lecture Days",
                        })}
                      />
                      <label>Thursday</label>
                    </div>
                    <div className="option">
                      <input
                        type="checkbox"
                        {...register("lectureDay", {
                          required: "Please Lecture Days",
                        })}
                      />
                      <label>Friday</label>
                    </div>
                    <div className="option">
                      <input
                        type="checkbox"
                        {...register("lectureDay", {
                          required: "Please Lecture Days",
                        })}
                      />
                      <label>Saturday</label>
                    </div>
                  </div>
                  {errors?.lectureDay && (
                    <span className="text-danger">
                      {errors?.lectureDay.message}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary">
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Add Class
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};
