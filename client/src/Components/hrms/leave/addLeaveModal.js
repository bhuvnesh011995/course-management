import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import moment from "moment";
import { useAuth } from "../../../context/authContext";

export default function AddLeaveModal({
  show,
  setShow,
  callback,
  viewLeave,
  leaveData,
}) {
  const { NewAxiosInstance } = useAuth();
  const [employees, setEmployees] = useState([]);
  const [leaveTypes, setLeaveTypes] = useState([]);
  const {
    handleSubmit,
    register,
    reset,
    setError,
    getValues,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    getEmployees();
    getAllLeaves();
    if (leaveData) {
      getLeave();
    }
  }, []);

  const getLeave = async () => {
    try {
      const selectedLeave = await NewAxiosInstance.get("/leaves/getLeave", {
        params: leaveData,
      });

      if (selectedLeave.status == 200) {
        selectedLeave.data.startDate = moment(
          selectedLeave.data.startDate
        ).format("YYYY-MM-DD");
        selectedLeave.data.endDate = moment(selectedLeave.data.endDate).format(
          "YYYY-MM-DD"
        );

        reset(selectedLeave.data);
      }
    } catch (err) {
      toast.error("something went wrong !");
      console.error(err);
    }
  };

  const getEmployees = async () => {
    try {
      const { data } = await NewAxiosInstance.get("/users/getUsers");
      setEmployees(data.users);
    } catch (err) {
      toast.error("something went wrong !");
      console.error(err);
    }
  };

  const saveLeave = async (leaveData) => {
    try {
      toast.dismiss();
      const newLeave = await NewAxiosInstance.post(
        "/leaves/addLeave",
        leaveData
      );
      if (newLeave.status == 200) {
        callback(newLeave.data.data[0]);
        toast.success(newLeave.data.message);
        setShow(false);
      } else {
        toast.error("something went wrong !");
      }
    } catch (err) {
      toast.error("something went wrong !");
      console.error(err);
    }
  };

  const updateLeave = async (updatedLeaveData) => {
    try {
      toast.dismiss();
      const updatedLeave = await NewAxiosInstance.post(
        "/leaves/updateLeave",
        updatedLeaveData
      );
      if (updatedLeave.status == 200) {
        callback(updatedLeave.data.data[0]);
        toast.success(updatedLeave.data.message);
        setShow(false);
      } else {
        toast.error("something went wrong !");
      }
    } catch (err) {
      toast.error("something went wrong !");
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

  const getAllLeaves = async () => {
    try {
      const allLeaves = await NewAxiosInstance.get("/constants/leave");
      if (allLeaves.status == 200) {
        if (allLeaves.data.length) {
          setLeaveTypes(allLeaves.data);
        } else {
          toast.error("Please add Leaves");
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Modal
      show={show}
      onHide={() => setShow(false)}
      className="modal-dialog-scrollable"
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <h5 className="modal-title">
            {viewLeave ? "View" : leaveData ? "Edit" : "Add"} Leave
          </h5>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit(leaveData ? updateLeave : saveLeave)}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">
                Employee Name <span className="text-danger">*</span>
              </label>
              <select
                className="form-select"
                {...register("employee", {
                  required: "Please Select Employee",
                })}
                disabled={viewLeave}
              >
                <option value="">Select Employee</option>
                {employees.map((employee, index) => (
                  <option value={employee._id} key={index}>
                    {employee.name}
                  </option>
                ))}
              </select>
              {errors?.employee && (
                <span className="text-danger">{errors?.employee.message}</span>
              )}
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">
                Leave Type <span className="text-danger">*</span>
              </label>
              <select
                className="form-select"
                {...register("leavetype", {
                  required: "Please Select Leave Type",
                })}
                disabled={viewLeave}
              >
                <option key={""} value="">
                  Select Leave
                </option>
                {leaveTypes?.length &&
                  leaveTypes.map((e) => (
                    <option
                      key={e._id}
                      value={e._id}
                      selected={e._id == watch("leaveType") && e._id}
                    >
                      {e.name}
                    </option>
                  ))}
              </select>
              {errors?.leavetype && (
                <span className="text-danger">{errors?.leavetype.message}</span>
              )}
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">
                Start Date <span className="text-danger">*</span>
              </label>
              <div className="input-group">
                <input
                  type="date"
                  className="form-control"
                  placeholder="dd M, yyyy"
                  {...register("startDate", {
                    required: "Please Enter Start Date",
                    onChange: (e) => checkDate(),
                  })}
                  disabled={viewLeave}
                />
                <span className="input-group-text">
                  <i className="mdi mdi-calendar" />
                </span>
              </div>
              {errors?.startDate && (
                <span className="text-danger">{errors?.startDate.message}</span>
              )}
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">
                End Date <span className="text-danger">*</span>
              </label>
              <div className="input-group" id="datepicker3">
                <input
                  type="date"
                  className="form-control"
                  placeholder="dd M, yyyy"
                  {...register("endDate", {
                    required: "Please Enter End Date",
                    onChange: (e) => checkDate(),
                  })}
                  disabled={viewLeave}
                />
                <span className="input-group-text">
                  <i className="mdi mdi-calendar" />
                </span>
              </div>
              {errors?.endDate && (
                <span className="text-danger">{errors?.endDate.message}</span>
              )}
            </div>
          </div>
          <Modal.Footer>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setShow(false)}
            >
              Cancel
            </button>
            {!viewLeave && (
              <button type="submit" className="btn btn-primary">
                {leaveData ? "Update" : "Add"} Leave
              </button>
            )}
          </Modal.Footer>
        </form>
      </Modal.Body>
    </Modal>
  );
}
