import { Modal } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import { useEffect, useMemo, useState } from "react";
import moment from "moment";
import { toast } from "react-toastify";
import ReactSelect from "react-select";
import { useAuth } from "../../../context/authContext";

export const NewClassModal = ({
  setIsOpen,
  isOpen,
  classData,
  viewClass,
  callback,
  isCalendar = false,
}) => {
  const { NewAxiosInstance } = useAuth();
  const lectureDayOptions = useMemo(
    () => [
      { label: "Monday", value: "Monday" },
      { label: "Tuesday", value: "Tuesday" },
      { label: "Wednesday", value: "Wednesday" },
      { label: "Thursday", value: "Thursday" },
      { label: "Friday", value: "Friday" },
      { label: "Saturday", value: "Wednesday" },
      { label: "Sunday", value: "Sunday" },
    ],
    [],
  );
  const [courses, setCourses] = useState([]);
  const [showLecDays, setShowLecDays] = useState(false);
  const [trainers, setTrainers] = useState([]);

  const {
    handleSubmit,
    register,
    reset,
    setValue,
    setError,
    control,
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
      const { data } = await NewAxiosInstance.get("/trainer/getTrainers");
      setTrainers(data);
    } catch (err) {
      console.error(err);
    }
  };

  const changeSelectHeader = () => {
    let newHeader = "";
    const selectElement = document.getElementById("selectedItems");
    if (selectElement)
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
      const { data } = await NewAxiosInstance.get("/class/getClass", {
        params: classData,
      });
      data[0].startDate = moment(data[0].startDate).format("YYYY-MM-DD");
      data[0].endDate = moment(data[0].endDate).format("YYYY-MM-DD");
      data[0].lectureDay = data[0].lectureDay?.map((ele) => ({
        label: ele,
        value: ele,
      }));
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
      if (newClass.lectureDay) {
        newClass.lectureDay = newClass.lectureDay.map((ele) => ele.value);
      }
      toast.dismiss();
      const { data } = await NewAxiosInstance.post("/class/addClass", newClass);
      toast.success("New Class Added");
      callback(data);
      handleclose();
    } catch (err) {
      toast.error("error occured");
      console.error(err);
    }
  };

  const getCourses = async () => {
    try {
      const { data } = await NewAxiosInstance.get("/courses/getCourses");
      setCourses(data.allCourses);
    } catch (err) {
      console.error(err);
    }
  };

  const updateClass = async (updatedClass) => {
    try {
      if (updatedClass.lectureDay) {
        updatedClass.lectureDay = updatedClass.lectureDay.map(
          (ele) => ele.value,
        );
      }
      toast.dismiss();
      const { data } = await NewAxiosInstance.post(
        "/class/updateClass",
        updatedClass,
      );
      toast.success("Class Updated");
      callback(data);
      handleclose();
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
      <Modal show={isOpen} onHide={handleclose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>
            <h5 className='modal-title'>
              {viewClass ? "View" : classData ? "Update" : "Add New"} Class
            </h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(classData ? updateClass : addNewClass)}>
            <div className='row'>
              <div className='col-md-6 mb-3'>
                <label className='form-label'>
                  Course <span className='text-danger'>*</span>
                </label>
                <select
                  className='form-select'
                  {...register("course", {
                    required: "This Field Is Required",
                  })}
                  disabled={viewClass ? viewClass : isCalendar}
                >
                  <option value=''>Select courses</option>
                  {courses.map((e, index) => (
                    <option key={index} value={e._id}>
                      {e.courseName}
                    </option>
                  ))}
                </select>
                {errors?.course && (
                  <span className='text-danger'>{errors?.course.message}</span>
                )}
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6 mb-3'>
                <label className='form-label'>
                  Trainer <span className='text-danger'>*</span>
                </label>
                <select
                  className='form-select'
                  {...register("trainer", {
                    required: "Please Select Trainer",
                  })}
                  disabled={viewClass ? viewClass : isCalendar}
                >
                  <option value=''>Select Trainer</option>
                  {trainers.map((e, index) => (
                    <option key={index} value={e._id}>
                      {e.trainerName}
                    </option>
                  ))}
                </select>
                {errors?.trainer && (
                  <span className='text-danger'>{errors?.trainer.message}</span>
                )}
              </div>
              <div className='col-md-6 mb-3'>
                <label className='col-form-label'>
                  Status<span className='text-danger'>*</span>
                </label>
                <div className='col-lg-12'>
                  <select
                    className='form-select validate'
                    {...register("classStatus", {
                      required: "This Field is Required",
                    })}
                    disabled={viewClass}
                  >
                    <option key={""} value=''>
                      Choose Status..
                    </option>
                    <option key={"Active"} value='Active'>
                      Active
                    </option>
                    <option key={"Inactive"} value='Inactive'>
                      Inactive
                    </option>
                  </select>
                  {errors?.classStatus && (
                    <span className='text-danger'>
                      {errors?.classStatus.message}
                    </span>
                  )}
                </div>
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
                  disabled={viewClass}
                />
                {errors?.startTime && (
                  <span className='text-danger'>
                    {errors?.startTime.message}
                  </span>
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
                  disabled={viewClass}
                />
                {errors?.endTime && (
                  <span className='text-danger'>{errors?.endTime.message}</span>
                )}
              </div>
              <div className='col-md-6 mb-3'>
                <label className='form-label'>
                  Start Date <span className='text-danger'>*</span>
                </label>
                <div className='input-group'>
                  <input
                    type='date'
                    className='form-control'
                    placeholder='dd M, yyyy'
                    {...register("startDate", {
                      required: "Please Enter Start Date",
                      onChange: (e) => checkDate(),
                    })}
                    disabled={viewClass}
                  />
                  <span className='input-group-text'>
                    <i className='mdi mdi-calendar' />
                  </span>
                </div>
                {errors?.startDate && (
                  <span className='text-danger'>
                    {errors?.startDate.message}
                  </span>
                )}
              </div>
              <div className='col-md-6 mb-3'>
                <label className='form-label'>
                  End Date <span className='text-danger'>*</span>
                </label>
                <div className='input-group' id='datepicker3'>
                  <input
                    type='date'
                    className='form-control'
                    placeholder='dd M, yyyy'
                    {...register("endDate", {
                      required: "Please Enter End Date",
                      onChange: (e) => checkDate(),
                    })}
                    disabled={viewClass}
                  />
                  <span className='input-group-text'>
                    <i className='mdi mdi-calendar' />
                  </span>
                </div>
                {errors?.endDate && (
                  <span className='text-danger'>{errors?.endDate.message}</span>
                )}
              </div>
            </div>
            {/* <Controller
              name="lectureDay"
              control={control}
              render={({ field }) => (
                <ReactSelect {...field} options={lectureDayOptions} isMulti />
              )}
            /> */}

            <div className='col-md-12 mb-3'>
              <label className='form-label'>Remarks</label>
              <textarea
                className='form-control'
                {...register("classRemarks")}
              />
            </div>

            <div className='modal-footer'>
              <button
                type='button'
                onClick={handleclose}
                className='btn btn-secondary'
              >
                Cancel
              </button>
              {!viewClass && (
                <button type='submit' className='btn btn-primary'>
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
