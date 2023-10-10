import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { RolesConstants } from "../../Constants/table.constants";
import axios from "axios";

export const AddNewRoleModel = ({
  isOpen,
  setIsOpen,
  roleId,
  viewRole,
  callback,
}) => {
  const [allPermissionChecked, setAllPermissionChecked] = useState(false);

  useEffect(() => {
    if (roleId) {
      setRoleData();
    }
  }, []);

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
    reset,
  } = useForm();

  const setRoleData = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/roles/selectedRoleData",
        {
          params: {
            id: roleId,
          },
        }
      );
      checkAllSelected(data[0]);
      reset(data[0]);
    } catch (err) {
      console.error(err);
    }
  };

  const editRoleData = async (roleData) => {
    try {
      const { data } = axios.post(
        "http://localhost:5000/api/roles/editRole",
        roleData
      );
      callback(roleData);
      handleCloseRoleModal();
    } catch (err) {
      console.error(err);
    }
  };

  const addNewRole = async (roleData) => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/roles/addNewRole",
        roleData
      );
      callback(data);
      handleCloseRoleModal();
    } catch (err) {
      console.error(err);
    }
  };

  const handleCloseRoleModal = () => {
    setIsOpen(false);
    selectAll(false);
    reset();
  };

  const selectAll = (isChecked) => {
    setValue("contentManagement.read", isChecked);
    setValue("contentManagement.write", isChecked);
    setValue("contentManagement.create", isChecked);
    setValue("finManagement.read", isChecked);
    setValue("finManagement.write", isChecked);
    setValue("finManagement.create", isChecked);
    setValue("payRoll.read", isChecked);
    setValue("payRoll.write", isChecked);
    setValue("payRoll.create", isChecked);
    setValue("reporting.read", isChecked);
    setValue("reporting.write", isChecked);
    setValue("reporting.create", isChecked);
    setValue("userManagement.read", isChecked);
    setValue("userManagement.write", isChecked);
    setValue("userManagement.create", isChecked);

    setAllPermissionChecked(isChecked);
  };

  const onPermissionChange = (permission) => {
    setValue(permission, !getValues(permission));
    checkAllSelected();
  };

  const checkAllSelected = (data = getValues()) => {
    const isAllChecked = [];
    if (Object.keys(data).length) {
      for (const checkbox in data.contentManagement) {
        isAllChecked.push(data.contentManagement[checkbox]);
      }
      for (const checkbox in data.finManagement) {
        isAllChecked.push(data.finManagement[checkbox]);
      }
      for (const checkbox in data.payRoll) {
        isAllChecked.push(data.payRoll[checkbox]);
      }
      for (const checkbox in data.reporting) {
        isAllChecked.push(data.reporting[checkbox]);
      }
      for (const checkbox in data.userManagement) {
        isAllChecked.push(data.userManagement[checkbox]);
      }
      if (isAllChecked.includes(false)) {
        setAllPermissionChecked(false);
      } else {
        setAllPermissionChecked(true);
      }
    }
  };

  return (
    <div>
      <Modal show={isOpen} onHide={handleCloseRoleModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {viewRole ? (
              <h3 className="role-title">View Role</h3>
            ) : (
              <h3 className="role-title">
                {roleId ? "Edit " : "Add New "}Role
              </h3>
            )}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(roleId ? editRoleData : addNewRole)}>
            <div className="col-12 mb-4 fv-plugins-icon-container">
              <label className="form-label" htmlFor="modalRoleName">
                Role Name
              </label>
              <input
                type="text"
                id="modalRoleName"
                {...register("roleName")}
                className="form-control"
                placeholder="Enter a role name"
                tabIndex={-1}
                disabled={viewRole}
              />
            </div>
            <div className="col-12">
              <h4>Role Permissions</h4>
              <div className="table-responsive">
                <table className="table table-flush-spacing">
                  <tbody>
                    <tr>
                      <td className="text-nowrap fw-medium">
                        Administrator Access{" "}
                        <i
                          className="bx bx-info-circle bx-xs"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          aria-label="Allows a full access to the system"
                          data-bs-original-title="Allows a full access to the system"
                        />
                        {/* <ToggleButton
                          aria-label="Allows a full access to the system"
                          title="Allows a full access to the system"
                          className="bx bx-info-circle bx-xs"
                        /> */}
                      </td>
                      <td>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="selectAll"
                            onChange={({ target }) => selectAll(target.checked)}
                            checked={allPermissionChecked}
                            disabled={viewRole}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="selectAll"
                          >
                            Select All
                          </label>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-nowrap fw-medium">User Management</td>
                      <td>
                        <div className="d-flex">
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="userManagementRead"
                              {...register("userManagement.read")}
                              onChange={() =>
                                onPermissionChange("userManagement.read")
                              }
                              checked={
                                allPermissionChecked
                                  ? allPermissionChecked
                                  : watch("userManagement.read")
                              }
                              disabled={viewRole}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="userManagementRead"
                            >
                              Read
                            </label>
                          </div>
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="userManagementWrite"
                              {...register("userManagement.write")}
                              onChange={() =>
                                onPermissionChange("userManagement.write")
                              }
                              checked={
                                allPermissionChecked
                                  ? allPermissionChecked
                                  : watch("userManagement.write")
                              }
                              disabled={viewRole}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="userManagementWrite"
                            >
                              Write
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="userManagementCreate"
                              {...register("userManagement.create")}
                              onChange={() =>
                                onPermissionChange("userManagement.create")
                              }
                              checked={
                                allPermissionChecked
                                  ? allPermissionChecked
                                  : watch("userManagement.create")
                              }
                              disabled={viewRole}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="userManagementCreate"
                            >
                              Create
                            </label>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-nowrap fw-medium">
                        Content Management
                      </td>
                      <td>
                        <div className="d-flex">
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="contentManagementRead"
                              {...register("contentManagement.read")}
                              onChange={() =>
                                onPermissionChange("contentManagement.read")
                              }
                              checked={
                                allPermissionChecked
                                  ? allPermissionChecked
                                  : watch("contentManagement.read")
                              }
                              disabled={viewRole}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="contentManagementRead"
                            >
                              Read
                            </label>
                          </div>
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="contentManagementWrite"
                              {...register("contentManagement.write")}
                              onChange={() =>
                                onPermissionChange("contentManagement.write")
                              }
                              checked={
                                allPermissionChecked
                                  ? allPermissionChecked
                                  : watch("contentManagement.write")
                              }
                              disabled={viewRole}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="contentManagementWrite"
                            >
                              Write
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="contentManagementCreate"
                              {...register("contentManagement.create")}
                              onChange={() =>
                                onPermissionChange("contentManagement.create")
                              }
                              checked={
                                allPermissionChecked
                                  ? allPermissionChecked
                                  : watch("contentManagement.create")
                              }
                              disabled={viewRole}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="contentManagementCreate"
                            >
                              Create
                            </label>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-nowrap fw-medium">
                        Financial Management
                      </td>
                      <td>
                        <div className="d-flex">
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="finManagementRead"
                              {...register("finManagement.read")}
                              onChange={() =>
                                onPermissionChange("finManagement.read")
                              }
                              checked={
                                allPermissionChecked
                                  ? allPermissionChecked
                                  : watch("finManagement.read")
                              }
                              disabled={viewRole}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="finManagementRead"
                            >
                              Read
                            </label>
                          </div>
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="finManagementWrite"
                              {...register("finManagement.write")}
                              onChange={() =>
                                onPermissionChange("finManagement.write")
                              }
                              checked={
                                allPermissionChecked
                                  ? allPermissionChecked
                                  : watch("finManagement.write")
                              }
                              disabled={viewRole}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="finManagementWrite"
                            >
                              Write
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="finManagementCreate"
                              {...register("finManagement.create")}
                              onChange={() =>
                                onPermissionChange("finManagement.create")
                              }
                              checked={
                                allPermissionChecked
                                  ? allPermissionChecked
                                  : watch("finManagement.create")
                              }
                              disabled={viewRole}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="finManagementCreate"
                            >
                              Create
                            </label>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-nowrap fw-medium">Reporting</td>
                      <td>
                        <div className="d-flex">
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="reportingRead"
                              {...register("reporting.read")}
                              onChange={() =>
                                onPermissionChange("reporting.read")
                              }
                              checked={
                                allPermissionChecked
                                  ? allPermissionChecked
                                  : watch("reporting.read")
                              }
                              disabled={viewRole}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="reportingRead"
                            >
                              Read
                            </label>
                          </div>
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="reportingWrite"
                              {...register("reporting.write")}
                              onChange={() =>
                                onPermissionChange("reporting.write")
                              }
                              checked={
                                allPermissionChecked
                                  ? allPermissionChecked
                                  : watch("reporting.write")
                              }
                              disabled={viewRole}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="reportingWrite"
                            >
                              Write
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="reportingCreate"
                              {...register("reporting.create")}
                              onChange={() =>
                                onPermissionChange("reporting.create")
                              }
                              checked={
                                allPermissionChecked
                                  ? allPermissionChecked
                                  : watch("reporting.create")
                              }
                              disabled={viewRole}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="reportingCreate"
                            >
                              Create
                            </label>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-nowrap fw-medium">Payroll</td>
                      <td>
                        <div className="d-flex">
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="payrollRead"
                              {...register("payRoll.read")}
                              onChange={() =>
                                onPermissionChange("payRoll.read")
                              }
                              checked={
                                allPermissionChecked
                                  ? allPermissionChecked
                                  : watch("payRoll.read")
                              }
                              disabled={viewRole}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="payrollRead"
                            >
                              Read
                            </label>
                          </div>
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="payrollWrite"
                              {...register("payRoll.write")}
                              onChange={() =>
                                onPermissionChange("payRoll.write")
                              }
                              checked={
                                allPermissionChecked
                                  ? allPermissionChecked
                                  : watch("payRoll.write")
                              }
                              disabled={viewRole}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="payrollWrite"
                            >
                              Write
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="payrollCreate"
                              {...register("payRoll.create")}
                              onChange={() =>
                                onPermissionChange("payRoll.create")
                              }
                              checked={
                                allPermissionChecked
                                  ? allPermissionChecked
                                  : watch("payRoll.create")
                              }
                              disabled={viewRole}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="payrollCreate"
                            >
                              Create
                            </label>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <Modal.Footer>
              <div className="row">
                <div className="col-12 text-center">
                  {!viewRole && (
                    <button
                      type="submit"
                      className="btn btn-primary me-sm-3 me-1"
                    >
                      {roleId ? "Update" : "Submit"}
                    </button>
                  )}
                  <button
                    type="reset"
                    className="btn btn-label-secondary"
                    onClick={handleCloseRoleModal}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};
