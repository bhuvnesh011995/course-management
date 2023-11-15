import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { AxiosInstance } from "../../../common-components/axiosInstance";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import moment from "moment";

export default function AddTimesheetModal({
  show,
  setShow,
  viewModal,
  timesheetData,
  callback,
}) {
  const {
    handleSubmit,
    register,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getEmployees();
    if (timesheetData) getTimesheet();
  }, []);

  const getEmployees = async () => {
    try {
      const { data } = await AxiosInstance.get("/employee/getEmployees");
      setEmployees(data);
    } catch (err) {
      toast.error("something went wrong");
      console.error(err);
    }
  };

  const getTimesheet = async () => {
    try {
      const selectedTimesheet = await AxiosInstance.get(
        "/timesheets/getTimesheet",
        { params: timesheetData }
      );
      if (selectedTimesheet.status == 200) {
        selectedTimesheet.data[0].date = moment(
          selectedTimesheet.data[0].date
        ).format("YYYY-MM-DD");
        reset(selectedTimesheet.data[0]);
      } else {
        toast.error("something went wrong ");
      }
    } catch (err) {
      toast.error("something went wrong");
      console.error(err);
    }
  };

  const addNewTimesheet = async (data) => {
    try {
      toast.dismiss();
      const addTimesheet = await AxiosInstance.post(
        "/timesheets/addTimeSheet",
        data
      );
      if (addTimesheet.status == 200) {
        callback(addTimesheet.data.data[0]);
        toast.success(addTimesheet.data.message);
        setShow(false);
      } else {
        toast.error("something went wrong");
      }
    } catch (err) {
      toast.error("something went wrong");
      console.error(err);
    }
  };

  const updateTimeSheet = async (data) => {
    try {
      toast.dismiss();
      const updatedTimesheet = await AxiosInstance.post(
        "/timesheets/updateTimeSheet",
        data
      );
      if (updatedTimesheet.status == 200) {
        callback(updatedTimesheet.data.data[0]);
        toast.success(updatedTimesheet.data.message);
        setShow(false);
      } else {
        toast.error("something went wrong ");
      }
    } catch (err) {
      toast.error("something went wrong");
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
              {...register("date", { required: "Please Enter Date" })}
              disabled={viewModal}
            />
            {errors?.date && (
              <span className="text-danger">{errors?.date.message}</span>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Employee Name</label>
            <select
              className="form-select"
              {...register("employee", {
                required: "Please Select Employee",
              })}
              disabled={viewModal}
            >
              <option value="">Select Employee</option>
              {employees.map((employee, index) => (
                <option value={employee._id} key={index}>
                  {employee.employeeName}
                </option>
              ))}
            </select>
            {errors?.employee && (
              <span className="text-danger">{errors?.employee.message}</span>
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
              <option key={""} value="">
                Select Shift
              </option>
              <option key={"Day Shift"} value="Day Shift">
                Day Shift
              </option>
              <option key={"Night Shift"} value="Night Shift">
                Night Shift
              </option>
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
