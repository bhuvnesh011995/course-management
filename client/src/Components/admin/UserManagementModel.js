import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import {
  emailPattern,
  namePattern,
  passwordPattern,
  phonePattern,
} from "../../common-components/validations";
import { toast } from "react-toastify";
import { useAuth } from "../../context/authContext";

export const AddNewUserModal = ({
  isOpen,
  setIsOpen,
  userData,
  callback,
  viewUser,
}) => {
  const { NewAxiosInstance } = useAuth();
  const [userRoles, setUserRoles] = useState([]);
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    getUserRoles();
    if (userData) setUserData();
  }, []);

  const handleClose = () => {
    reset({});
    setIsOpen(false);
  };

  const setUserData = () => {
    reset(userData);
  };

  const getUserRoles = async () => {
    try {
      const { data } = await NewAxiosInstance.get("/roles/getRoles");
      setUserRoles(data.roleData);
    } catch (err) {
      toast.error("something went wrong !");
      console.error(err);
    }
  };
  const addNewUser = async (userData) => {
    try {
      toast.dismiss();
      userData["name"] = userData["firstName"] + " " + userData["lastName"];
      const { data } = await NewAxiosInstance.post(
        "/users/addNewUser",
        userData
      );
      toast.success("New User Added");
      callback(data);
      handleClose();
    } catch (err) {
      toast.error("something went wrong !");
      console.error(err);
    }
  };

  const updateUser = async (userData) => {
    try {
      toast.dismiss();
      userData["name"] = userData["firstName"] + " " + userData["lastName"];
      const { data } = await NewAxiosInstance.post(
        "/users/updateUser",
        userData
      );
      toast.success("User Updated");
      callback(userData);
      handleClose();
    } catch (err) {
      toast.error("something went wrong !");
      console.error(err);
    }
  };

  return (
    <div>
      <Modal show={isOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {viewUser ? (
              <h5 className="modal-title" id="addUserModalLabel">
                View User
              </h5>
            ) : (
              <h5 className="modal-title" id="addUserModalLabel">
                {userData ? "Edit" : "Add"} User
              </h5>
            )}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(userData ? updateUser : addNewUser)}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">
                  First Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter first name"
                  {...register("firstName", {
                    required: "First Name is required",
                    pattern: namePattern,
                  })}
                  disabled={viewUser}
                />
                <span className="text-danger">
                  {errors?.firstName && errors?.firstName.message}
                </span>
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">
                  Last Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter last name"
                  {...register("lastName", {
                    required: "Last Name is required",
                    pattern: namePattern,
                  })}
                  disabled={viewUser}
                />
                <span className="text-danger">
                  {errors?.lastName && errors?.lastName.message}
                </span>
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">
                  Email <span className="text-danger">*</span>
                </label>
                <input
                  className="form-control"
                  placeholder="Enter email"
                  {...register("email", {
                    required: "Email is Required",
                    pattern: emailPattern,
                    validate: (fieldValue) => {
                      return (
                        fieldValue !== "admin@admin.admin" ||
                        "enter different email address"
                      );
                    },
                  })}
                  disabled={viewUser}
                />
                <span className="text-danger">
                  {errors?.email && errors?.email?.message}
                </span>
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">
                  Mobile <span className="text-danger">*</span>
                </label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Mobile"
                  {...register("phoneNo", {
                    required: true,
                    pattern: phonePattern,
                  })}
                  disabled={viewUser}
                />
                {errors?.phoneNo && (
                  <span className="text-danger">
                    {errors?.phoneNo?.message}
                  </span>
                )}
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">
                  User Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter username"
                  {...register("userName", {
                    required: "User Name is required",
                    pattern: namePattern,
                  })}
                  disabled={viewUser}
                />
                <span className="text-danger">
                  {errors?.userName && errors?.userName.message}
                </span>
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">
                  Password <span className="text-danger">*</span>
                </label>
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
                  disabled={viewUser}
                />
                <span className="text-danger">
                  {errors?.password && errors?.password.message}
                </span>
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">
                  User Roles <span className="text-danger">*</span>
                </label>
                <select
                  className="form-select"
                  {...register("userRole", { required: "please select role" })}
                  disabled={viewUser}
                >
                  <option value={""}>-- select --</option>
                  {userRoles.map((e) => (
                    <option
                      value={e._id}
                      selected={e._id == watch("userRole") && e._id}
                      key={e._id}
                    >
                      {e.roleName}
                    </option>
                  ))}
                </select>
                {errors?.userRole && (
                  <span className="text-danger">
                    {errors?.userRole.message}
                  </span>
                )}
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Status</label>
                <select
                  className="form-select"
                  {...register("status")}
                  disabled={viewUser}
                >
                  <option key="" value={""}>
                    -- select --
                  </option>
                  <option key="active" value={"Active"}>
                    Active
                  </option>
                  <option key="Inactive" value={"Inactive"}>
                    Inactive
                  </option>
                </select>
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
              {!viewUser && (
                <button type="submit" className="btn btn-primary">
                  {userData ? "Update" : "Add User"}
                </button>
              )}
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};
