import { Modal } from "react-bootstrap";
import { AxiosInstance } from "../../../common-components/axiosInstance";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  emailPattern,
  namePattern,
  passwordPattern,
  phonePattern,
} from "../../../common-components/validations";
import moment from "moment";
import { toast } from "react-toastify";

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
    watch,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    getRoles();
    if (employeeData?._id) reset(employeeData);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    reset();
  };

  const addEmployee = async (newEmployee) => {
    try {
      toast.dismiss();
      const addedEmployee = await AxiosInstance.post(
        "/users/addNewUser",
        newEmployee
      );
      if (addedEmployee.status == 200) {
        toast.success("New Employee Added");
        callback(addedEmployee.data);
      }
      handleClose();
    } catch (err) {
      toast.error("error occured");
      console.error(err);
    }
  };

  const updateEmployee = async (updatedEmployee) => {
    try {
      toast.dismiss();
      const { data } = await AxiosInstance.post(
        "/users/updateUser",
        updatedEmployee
      );
      toast.success("employee updated");
      updatedEmployee["name"] =
        updatedEmployee["firstName"] + " " + updatedEmployee["lastName"];
      callback(updatedEmployee);
      handleClose();
    } catch (err) {
      toast.error("error occured");
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
                {...register("firstName", {
                  required: "Please Enter First Name",
                  pattern: namePattern,
                })}
                placeholder="Enter first name"
                disabled={viewEmployee}
              />
              {errors?.firstName && (
                <span className="text-danger">{errors?.firstName.message}</span>
              )}
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter last name"
                {...register("lastName", {
                  required: "Please Enter Last Name",
                  pattern: namePattern,
                })}
                disabled={viewEmployee}
              />
              {errors?.lastName && (
                <span className="text-danger">{errors?.lastName.message}</span>
              )}
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter employee email"
                {...register("email", {
                  required: "Please Enter Employee Email",
                  pattern: emailPattern,
                })}
                disabled={viewEmployee}
              />
              {errors?.email && (
                <span className="text-danger">{errors?.email.message}</span>
              )}
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Phone</label>
              <input
                type="tel"
                className="form-control"
                placeholder="Enter employee phone"
                {...register("phoneNo", {
                  required: "Please Enter Employee Phone No.",
                  pattern: phonePattern,
                })}
                disabled={viewEmployee}
              />
              {errors?.phoneNo && (
                <span className="text-danger">{errors?.phoneNo.message}</span>
              )}
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Position</label>
              <select
                className="form-select"
                {...register("position", {
                  required: "Please Select Employee Position",
                })}
                disabled={viewEmployee}
              >
                <option key={""} value="">
                  Select position
                </option>
                <option key={"Manager"} value="Manager">
                  Manager
                </option>
                <option key={"Supervisor"} value="Supervisor">
                  Supervisor
                </option>
                <option key={"Associate"} value="Associate">
                  Associate
                </option>
              </select>
              {errors?.position && (
                <span className="text-danger">{errors?.position.message}</span>
              )}
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Department</label>
              <select
                className="form-select"
                {...register("department", {
                  required: "Please Select Employee Department",
                })}
                disabled={viewEmployee}
              >
                <option key={""} value="">
                  Select department
                </option>
                <option key={"HR"} value="HR">
                  HR
                </option>
                <option key={"Finance"} value="Finance">
                  Finance
                </option>
                <option key={"IT"} value="IT">
                  IT
                </option>
              </select>
              {errors?.department && (
                <span className="text-danger">
                  {errors?.department.message}
                </span>
              )}
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Join Date</label>
              <input
                type="date"
                className="form-control"
                {...register("joinDate", {
                  required: "Please Enter Employee Join Date",
                })}
                disabled={viewEmployee}
              />
              {errors?.joinDate && (
                <span className="text-danger">{errors?.joinDate.message}</span>
              )}
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Salary</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter employee salary"
                {...register("salary", {
                  required: "Please Enter Employee Salary",
                })}
                disabled={viewEmployee}
              />
              {errors?.salary && (
                <span className="text-danger">{errors?.salary.message}</span>
              )}
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Gender</label>
              <select
                className="form-select"
                {...register("gender", {
                  required: "Please Select Employee Gender",
                })}
                disabled={viewEmployee}
              >
                <option key={""} value="">
                  Select gender
                </option>
                <option key={"Male"} value="Male">
                  Male
                </option>
                <option key={"Female"} value="Female">
                  Female
                </option>
                <option key={"Other"} value="Other">
                  Other
                </option>
              </select>
              {errors?.gender && (
                <span className="text-danger">{errors?.gender.message}</span>
              )}
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Role</label>
              <select
                className="form-select"
                {...register("userRole", {
                  required: "Please Select Employee Role",
                })}
                disabled={viewEmployee}
              >
                <option value="">Select role</option>
                {roles.map((e, index) => (
                  <option
                    key={index}
                    value={e?._id}
                    selected={e._id == watch("userRole") && e._id}
                  >
                    {e?.roleName}
                  </option>
                ))}
              </select>
              {errors?.userRole && (
                <span className="text-danger">{errors?.userRole.message}</span>
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
                <option key={""} value="">
                  Select status
                </option>
                <option key={"Active"} value="Active">
                  Active
                </option>
                <option key={"Inactive"} value="Inactive">
                  Inactive
                </option>
              </select>
              {errors?.status && (
                <span className="text-danger">{errors?.status.message}</span>
              )}
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">User Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter username"
                {...register("userName", {
                  required: "User Name is required",
                  pattern: namePattern,
                })}
                disabled={viewEmployee}
              />
              <span className="text-danger">
                {errors?.userName && errors?.userName.message}
              </span>
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                {...register("password", {
                  required: "Password is required",
                  pattern: passwordPattern,
                  minLength: {
                    value: 8,
                    message: "password must be greater than 8 characters",
                  },
                })}
                disabled={viewEmployee}
              />
              <span className="text-danger">
                {errors?.password && errors?.password.message}
              </span>
            </div>
            <div className="col-md-12 mb-3">
              <label className="form-label">Address</label>
              <textarea
                className="form-control"
                rows={3}
                placeholder="Enter employee address"
                {...register("address", {
                  required: "Please Enter Employee Address",
                })}
                disabled={viewEmployee}
                defaultValue={""}
              />
              {errors?.address && (
                <span className="text-danger">{errors?.address.message}</span>
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
                  {employeeData ? "Update" : "Add"} Employee
                </button>
              )}
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};
