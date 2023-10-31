import { Modal } from "react-bootstrap";
import { AxiosInstance } from "../../../common-components/axiosInstance";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  emailPattern,
  namePattern,
  phonePattern,
} from "../../../common-components/validations";
import moment from "moment";

export const NewEmployeeManagementModal = ({
  isOpen,
  setIsOpen,
  employeeData,
  viewEmployee,
  callback,
}) => {
  const [roles, setRoles] = useState([]);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    getRoles();
    if (employeeData?._id) getEmployee();
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    reset();
  };

  const addEmployee = async (newEmployee) => {
    try {
      const { data } = await AxiosInstance.post(
        "/employee/addEmployee",
        newEmployee
      );
      callback(data);
      handleClose();
    } catch (err) {
      console.error(err);
    }
  };

  const updateEmployee = async (updatedEmployee) => {
    try {
      const { data } = await AxiosInstance.post(
        "/employee/updateEmployee",
        updatedEmployee
      );
      updatedEmployee["employeeName"] =
        updatedEmployee["employeeFirstName"] +
        " " +
        updatedEmployee["employeeLastName"];
      callback(updatedEmployee);
      handleClose();
    } catch (err) {
      console.error(err);
    }
  };

  const getEmployee = async () => {
    try {
      const { data } = await AxiosInstance.get("/employee/getEmployee", {
        params: employeeData,
      });
      data["employeeJoinDate"] = moment(data["employeeJoinDate"]).format(
        "YYYY-MM-DD"
      );
      reset(data);
    } catch (err) {
      console.error(err);
    }
  };

  const getRoles = async () => {
    try {
      const { data } = await AxiosInstance.get("/roles/getRoles");
      setRoles(data.roleData);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Modal onHide={handleClose} show={isOpen} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            <h5 className="modal-title" id="addCertificateModalLabel">
              {viewEmployee ? "View" : employeeData?._id ? "Update" : "Add"}{" "}
              Employee
            </h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={handleSubmit(
              employeeData?._id ? updateEmployee : addEmployee
            )}
            className="row"
          >
            <div className="col-md-6 mb-3">
              <label className="form-label">First Name</label>
              <input
                type="text"
                className="form-control"
                {...register("employeeFirstName", {
                  required: "Please Enter First Name",
                  pattern: namePattern,
                })}
                placeholder="Enter first name"
                disabled={viewEmployee}
              />
              {errors?.employeeFirstName && (
                <span className="text-danger">
                  {errors?.employeeFirstName.message}
                </span>
              )}
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter last name"
                {...register("employeeLastName", {
                  required: "Please Enter Last Name",
                  pattern: namePattern,
                })}
                disabled={viewEmployee}
              />
              {errors?.employeeLastName && (
                <span className="text-danger">
                  {errors?.employeeLastName.message}
                </span>
              )}
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter employee email"
                {...register("employeeEmail", {
                  required: "Please Enter Employee Email",
                  pattern: emailPattern,
                })}
                disabled={viewEmployee}
              />
              {errors?.employeeEmail && (
                <span className="text-danger">
                  {errors?.employeeEmail.message}
                </span>
              )}
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Phone</label>
              <input
                type="tel"
                className="form-control"
                placeholder="Enter employee phone"
                {...register("employeePhone", {
                  required: "Please Enter Employee Phone No.",
                  pattern: phonePattern,
                })}
                disabled={viewEmployee}
              />
              {errors?.employeePhone && (
                <span className="text-danger">
                  {errors?.employeePhone.message}
                </span>
              )}
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Position</label>
              <select
                className="form-select"
                {...register("employeePosition", {
                  required: "Please Select Employee Position",
                })}
                disabled={viewEmployee}
              >
                <option value="">Select position</option>
                <option value="Manager">Manager</option>
                <option value="Supervisor">Supervisor</option>
                <option value="Associate">Associate</option>
              </select>
              {errors?.employeePosition && (
                <span className="text-danger">
                  {errors?.employeePosition.message}
                </span>
              )}
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Department</label>
              <select
                className="form-select"
                {...register("employeeDepartment", {
                  required: "Please Select Employee Department",
                })}
                disabled={viewEmployee}
              >
                <option value="">Select department</option>
                <option value="HR">HR</option>
                <option value="Finance">Finance</option>
                <option value="IT">IT</option>
              </select>
              {errors?.employeeDepartment && (
                <span className="text-danger">
                  {errors?.employeeDepartment.message}
                </span>
              )}
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Join Date</label>
              <input
                type="date"
                className="form-control"
                {...register("employeeJoinDate", {
                  required: "Please Enter Employee Join Date",
                })}
                disabled={viewEmployee}
              />
              {errors?.employeeJoinDate && (
                <span className="text-danger">
                  {errors?.employeeJoinDate.message}
                </span>
              )}
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Salary</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter employee salary"
                {...register("employeeSalary", {
                  required: "Please Enter Employee Salary",
                })}
                disabled={viewEmployee}
              />
              {errors?.employeeSalary && (
                <span className="text-danger">
                  {errors?.employeeSalary.message}
                </span>
              )}
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Gender</label>
              <select
                className="form-select"
                {...register("employeeGender", {
                  required: "Please Select Employee Gender",
                })}
                disabled={viewEmployee}
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              {errors?.employeeGender && (
                <span className="text-danger">
                  {errors?.employeeGender.message}
                </span>
              )}
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Role</label>
              <select
                className="form-select"
                {...register("employeeRole", {
                  required: "Please Select Employee Role",
                })}
                disabled={viewEmployee}
              >
                <option value="">Select role</option>
                {roles.map((e) => (
                  <option value={e?._id}>{e?.roleName}</option>
                ))}
              </select>
              {errors?.employeeRole && (
                <span className="text-danger">
                  {errors?.employeeRole.message}
                </span>
              )}
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Status</label>
              <select
                className="form-select"
                {...register("status", {
                  required: "Please Select Employee Status",
                })}
                disabled={viewEmployee}
              >
                <option value="">Select status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
              {errors?.status && (
                <span className="text-danger">{errors?.status.message}</span>
              )}
            </div>
            <div className="col-md-12 mb-3">
              <label className="form-label">Address</label>
              <textarea
                className="form-control"
                rows={3}
                placeholder="Enter employee address"
                {...register("employeeAddress", {
                  required: "Please Enter Employee Address",
                })}
                disabled={viewEmployee}
                defaultValue={""}
              />
              {errors?.employeeAddress && (
                <span className="text-danger">
                  {errors?.employeeAddress.message}
                </span>
              )}
            </div>
            <Modal.Footer>
              <button
                type="button"
                onClick={handleClose}
                className="btn btn-secondary"
              >
                Cancel
              </button>
              {!viewEmployee && (
                <button type="submit" className="btn btn-primary">
                  {employeeData ? "Update" : "Add"} Certificate
                </button>
              )}
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};
