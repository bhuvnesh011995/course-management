import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { AxiosInstance } from "../../../common-components/axiosInstance";
import { useEffect, useState } from "react";

export const AddNewTask = ({
  isOpen,
  setIsOpen,
  taskData,
  viewTask,
  callback,
}) => {
  const [customers, setCustomers] = useState([]);
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();

  useEffect(() => {
    if (taskData?._id) getTask();
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    reset();
  };

  const addTask = async (newTask) => {
    try {
      const formData = new FormData();
      Object.keys(newTask.taskAttachment).map((e) =>
        formData.append("file", newTask.taskAttachment[e])
      );
      const { data } = await AxiosInstance.post("/task/addTask", formData, {
        params: newTask,
      });
      callback(data);
    } catch (err) {
      console.error(err);
    }
  };

  const updateTask = async (updatedTask) => {
    try {
      const formData = new FormData();
      Object.keys(updatedTask.taskAttachment).map((e) =>
        formData.append("file", updatedTask.taskAttachment[e])
      );
      const { data } = await AxiosInstance.post("/task/updateTask", formData, {
        params: updatedTask,
      });
      callback(data);
    } catch (err) {
      console.error(err);
    }
  };

  const getTask = async () => {
    try {
      const { data } = await AxiosInstance.get("/task/getTask", {
        params: taskData,
      });
      reset(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Modal show={isOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h5 className="modal-title" id="addCertificateModalLabel">
              {viewTask ? "View" : taskData?._id ? "Update" : "Add New "} Task
            </h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(taskData?._id ? updateTask : addTask)}>
            <div className="mb-3">
              <label className="form-label">Task Name</label>
              <input
                type="text"
                className="form-control"
                {...register("taskName", {
                  required: "Please Enter Task Name",
                })}
                placeholder="Enter task name"
              />
              {errors?.taskName && (
                <span className="text-danger">{errors?.taskName.message}</span>
              )}
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Assigned To</label>
                <select
                  className="form-select"
                  {...register("assignedTo", {
                    required: "Please Select Assigned To Customer",
                  })}
                >
                  <option value="">Select assigned to</option>
                  {/* Add more options here */}
                </select>
                {errors?.assignedTo && (
                  <span className="text-danger">
                    {errors?.assignedTo.message}
                  </span>
                )}
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Assigned By</label>
                <select
                  className="form-select"
                  {...register("assignedBy", {
                    required: "Please Select Assigned By Trainer",
                  })}
                >
                  <option value="">Select assigned by</option>
                  {/* Add more options here */}
                </select>
                {errors?.assignedBy && (
                  <span className="text-danger">
                    {errors?.assignedBy.message}
                  </span>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Course</label>
                <select
                  className="form-select"
                  placeholder="Enter course"
                  {...register("course", { required: "Please Select Course" })}
                >
                  <option value="">Select course</option>
                </select>
                {errors?.course && (
                  <span className="text-danger">{errors?.course.message}</span>
                )}
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Class</label>
                <select
                  className="form-select"
                  {...register("class", { required: "Please Select Class" })}
                >
                  <option value="">Select class</option>
                </select>
                {errors?.class && (
                  <span className="text-danger">{errors?.class.message}</span>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Status</label>
                <select
                  className="form-select"
                  {...register("taskStatus", {
                    required: "Please Select Status",
                  })}
                >
                  <option value="">Select status</option>
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                </select>
                {errors?.taskStatus && (
                  <span className="text-danger">
                    {errors?.taskStatus.message}
                  </span>
                )}
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Priority</label>
                <select
                  className="form-select"
                  {...register("priority", {
                    required: "Please Select Priority",
                  })}
                >
                  <option value="">Select priority</option>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
                {errors?.priority && (
                  <span className="text-danger">
                    {errors?.priority.message}
                  </span>
                )}
              </div>
            </div>
            <div className="row">
              {/* <div className="col-md-6 mb-3">
                <label  className="form-label">
                  Created At
                </label>
                <input
                  type="datetime-local"
                  className="form-control"
                  id="createdAt"
                  required
                />
              </div> */}
              <div className="col-md-6 mb-3">
                <label className="form-label">Due Date</label>
                <input
                  type="date"
                  className="form-control"
                  {...register("dueDate", {
                    required: "Please Enter Due Date",
                  })}
                />
                {errors?.dueDate && (
                  <span className="text-danger">{errors?.dueDate.message}</span>
                )}
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Attachments</label>
                <input
                  type="file"
                  className="form-control"
                  {...register("attachments")}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Estimated Time</label>
                <select
                  className="form-select"
                  {...register("estimatedTime", {
                    required: "Please Enter Estimated Time",
                  })}
                >
                  <option value="">Select estimated time</option>
                  <option value={1}>1 hour</option>
                  <option value={3}>3 hours</option>
                  <option value={6}>6 hours</option>
                  <option value={9}>9 hours</option>
                  <option value={9}>12 hours</option>
                  <option value={9}>1 Day</option>
                  <option value={9}>2 Day</option>
                </select>
                {errors?.estimatedTime && (
                  <span className="text-danger">
                    {errors?.estimatedTime.message}
                  </span>
                )}
              </div>
            </div>
            <Modal.Footer>
              <button
                type="button"
                onClick={handleClose}
                className="btn btn-secondary"
              >
                Cancel
              </button>
              {!viewTask && (
                <button type="submit" className="btn btn-primary">
                  {taskData ? "Update" : "Add"} Task
                </button>
              )}
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};
