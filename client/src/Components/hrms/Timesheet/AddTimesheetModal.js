import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { AxiosInstance } from "../../../common-components/axiosInstance";
import { useEffect, useState } from "react";

export default function AddTimesheetModal({
  show,
  setShow,
  viewModal,
  timesheetData,
}) {
  const {
    handleSubmit,
    register,
    reset,
    getValues,
    watch,
    formState: { errors },
  } = useForm();
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getEmployees();
  }, []);

  const getEmployees = async () => {
    try {
      const { data } = await AxiosInstance.get("/employee/getEmployees");
      setEmployees(data);
    } catch (err) {
      console.error(err);
    }
  };

  const addNewTimesheet = async (data) => {
    try {
      console.log(data);
      const addTimesheet = await AxiosInstance.post(
        "/timesheets/addTimeSheet",
        data
      );
      console.log(addTimesheet);
    } catch (err) {
      console.error(err);
    }
  };

  const updateTimeSheet = async (data) => {
    try {
      const updatedTimesheet = await AxiosInstance.post(
        "/timesheets/updateTimeSheet",
        data
      );
      console.log(updatedTimesheet);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Modal
      show={show}
      onHide={() => setShow(false)}
      className="modal-dialog-scrollable"
      size="sm-3"
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <h5 className="modal-title">
            {viewModal ? "View" : timesheetData ? "Edit" : "Add"} Work Hours
          </h5>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form
          onSubmit={handleSubmit(
            timesheetData ? updateTimeSheet : addNewTimesheet
          )}
        >
          <div className="mb-3">
            <label className="form-label">Date</label>
            <input
              type="date"
              className="form-control"
              {...register("addDate", { required: "Please Enter Date" })}
            />
            {errors?.addDate && (
              <span className="text-danger">{errors?.addDate.message}</span>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Employee Name</label>
            <select
              className="form-select"
              {...register("addEmployee", {
                required: "Please Select Employee",
              })}
              disabled={viewModal}
            >
              <option value="">Select Employee</option>
              {employees.map((employee) => (
                <option
                  value={employee._id}
                  selected={watch("employee") == employee._id && employee._id}
                >
                  {employee.employeeName}
                </option>
              ))}
            </select>
            {errors?.addEmployee && (
              <span className="text-danger">{errors?.addEmployee.message}</span>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Hours Worked</label>
            <input
              type="number"
              className="form-control"
              {...register("addHoursWorked", {
                required: "This field is required",
              })}
              disabled={viewModal}
            />
            {errors?.addHoursWorked && (
              <span className="text-danger">
                {errors?.addHoursWorked.message}
              </span>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Overtime Hours</label>
            <input
              type="number"
              className="form-control"
              {...register("addOvertimeHours", {
                required: "This field is required",
              })}
              disabled={viewModal}
            />
            {errors?.addOvertimeHours && (
              <span className="text-danger">
                {errors?.addOvertimeHours.message}
              </span>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Shift</label>
            <select
              className="form-select"
              {...register("shiftTiming", {
                required: "please select Shift Timing",
              })}
              disabled={viewModal}
            >
              <option value="">Select Shift</option>
              <option value="Day Shift">Day Shift</option>
              <option value="Night Shift">Night Shift</option>
            </select>
            {errors?.shiftTiming && (
              <span className="text-danger">{errors?.shiftTiming.message}</span>
            )}
          </div>
          <Modal.Footer>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setShow(false)}
            >
              Cancel
            </button>
            {!viewModal && (
              <button type="submit" className="btn btn-primary">
                {timesheetData ? "Update" : "Save"} Changes
              </button>
            )}
          </Modal.Footer>
        </form>
      </Modal.Body>
    </Modal>
  );
}
