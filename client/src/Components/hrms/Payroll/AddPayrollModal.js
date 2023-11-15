import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { AxiosInstance } from "../../../common-components/axiosInstance";
import { useForm } from "react-hook-form";
import { mustBeNumbers } from "../../../common-components/validations";
import { toast } from "react-toastify";

export default function AddPayrollModal({
  show,
  setShow,
  callback,
  viewPayroll,
  payrollData,
}) {
  const [employees, setEmployees] = useState([]);
  const {
    handleSubmit,
    register,
    reset,
    getValues,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    getEmployees();
    if (payrollData) {
      getPayroll();
    }
  }, []);

  const getPayroll = async () => {
    try {
      const selectedPayroll = await AxiosInstance.get("/payrolls/getPayroll", {
        params: payrollData,
      });
      if (selectedPayroll.status == 200) reset(selectedPayroll.data);
    } catch (err) {
      toast.error("something went wrong !");
      console.error(err);
    }
  };

  const getEmployees = async () => {
    try {
      const { data } = await AxiosInstance.get("/employee/getEmployees");
      setEmployees(data);
    } catch (err) {
      toast.error("something went wrong !");
      console.error(err);
    }
  };

  const savePayroll = async (payrollData) => {
    try {
      toast.dismiss();
      const newPayroll = await AxiosInstance.post(
        "/payrolls/addPayroll",
        payrollData
      );
      if (newPayroll.status == 200) {
        callback(newPayroll.data.data[0]);
        toast.success(newPayroll.data.message);
        setShow(false);
      } else {
        toast.error("something went wrong !");
      }
    } catch (err) {
      toast.error("something went wrong !");
      console.error(err);
    }
  };

  const updatePayroll = async (updatedPayrollData) => {
    try {
      toast.dismiss();
      const updatedPayroll = await AxiosInstance.post(
        "/payrolls/updatePayroll",
        updatedPayrollData
      );
      if (updatedPayroll.status == 200) {
        callback(updatedPayroll.data.data[0]);
        toast.success(updatedPayroll.data.message);
        setShow(false);
      } else {
        toast.error("something went wrong !");
      }
    } catch (err) {
      toast.error("something went wrong !");
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
            {viewPayroll ? "View" : payrollData ? "Edit" : "Add"} Payroll
          </h5>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form
          onSubmit={handleSubmit(payrollData ? updatePayroll : savePayroll)}
        >
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Employee Name</label>
              <select
                className="form-select"
                {...register("employee", {
                  required: "Please Select Employee",
                })}
                disabled={viewPayroll}
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
            <div className="col-md-6 mb-3">
              <label className="form-label">Salary</label>
              <input
                type="text"
                className="form-control"
                {...register("salary", {
                  required: "Please Enter Salary",
                  pattern: mustBeNumbers,
                })}
                disabled={viewPayroll}
                placeholder="Enter Salary"
              />
              {errors?.salary && (
                <span className="text-danger">{errors?.salary.message}</span>
              )}
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Allowances</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Allowances"
                {...register("allowances", {
                  required: "Please Enter allowances",
                  pattern: mustBeNumbers,
                })}
                disabled={viewPayroll}
              />
              {errors?.allowances && (
                <span className="text-danger">
                  {errors?.allowances.message}
                </span>
              )}
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Deductions</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Deductions"
                {...register("deductions", {
                  required: "Please Enter deductions",
                  pattern: mustBeNumbers,
                })}
                disabled={viewPayroll}
              />
              {errors?.deductions && (
                <span className="text-danger">
                  {errors?.deductions.message}
                </span>
              )}
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Net Salary</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Net Salary"
                {...register("netSalary", {
                  required: "Please Enter net Salary",
                  pattern: mustBeNumbers,
                })}
                disabled={viewPayroll}
              />
              {errors?.netSalary && (
                <span className="text-danger">{errors?.netSalary.message}</span>
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
            {!viewPayroll && (
              <button type="submit" className="btn btn-primary">
                {payrollData ? "Update" : "Add"} Payroll
              </button>
            )}
          </Modal.Footer>
        </form>
      </Modal.Body>
    </Modal>
  );
}
