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
      checkAllSelected({ role: data[0] });
      setValue("role", data[0]);
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
      callback(roleData.role);
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
    setValue("role", {});
  };

  const selectAll = (isChecked) => {
    setValue("role.contentManagement.read", isChecked);
    setValue("role.contentManagement.write", isChecked);
    setValue("role.contentManagement.create", isChecked);
    setValue("role.finManagement.read", isChecked);
    setValue("role.finManagement.write", isChecked);
    setValue("role.finManagement.create", isChecked);
    setValue("role.payRoll.read", isChecked);
    setValue("role.payRoll.write", isChecked);
    setValue("role.payRoll.create", isChecked);
    setValue("role.reporting.read", isChecked);
    setValue("role.reporting.write", isChecked);
    setValue("role.reporting.create", isChecked);
    setValue("role.userManagement.read", isChecked);
    setValue("role.userManagement.write", isChecked);
    setValue("role.userManagement.create", isChecked);

    setAllPermissionChecked(isChecked);
  };

  const onPermissionChange = (permission) => {
    setValue(permission, !getValues(permission));
    checkAllSelected();
  };

  const checkAllSelected = (data = getValues()) => {
    const isAllChecked = [];
    if (Object.keys(data).length) {
      for (const checkbox in data.role.contentManagement) {
        isAllChecked.push(data.role.contentManagement[checkbox]);
      }
      for (const checkbox in data.role.finManagement) {
        isAllChecked.push(data.role.finManagement[checkbox]);
      }
      for (const checkbox in data.role.payRoll) {
        isAllChecked.push(data.role.payRoll[checkbox]);
      }
      for (const checkbox in data.role.reporting) {
        isAllChecked.push(data.role.reporting[checkbox]);
      }
      for (const checkbox in data.role.userManagement) {
        isAllChecked.push(data.role.userManagement[checkbox]);
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
                {...register("role.roleName")}
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
                              {...register("role.userManagement.read")}
                              onChange={() =>
                                onPermissionChange("role.userManagement.read")
                              }
                              checked={
                                allPermissionChecked
                                  ? allPermissionChecked
                                  : watch("role.userManagement.read")
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
                              {...register("role.userManagement.write")}
                              onChange={() =>
                                onPermissionChange("role.userManagement.write")
                              }
                              checked={
                                allPermissionChecked
                                  ? allPermissionChecked
                                  : watch("role.userManagement.write")
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
                              {...register("role.userManagement.create")}
                              onChange={() =>
                                onPermissionChange("role.userManagement.create")
                              }
                              checked={
                                allPermissionChecked
                                  ? allPermissionChecked
                                  : watch("role.userManagement.create")
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
                              {...register("role.contentManagement.read")}
                              onChange={() =>
                                onPermissionChange(
                                  "role.contentManagement.read"
                                )
                              }
                              checked={
                                allPermissionChecked
                                  ? allPermissionChecked
                                  : watch("role.contentManagement.read")
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
                              {...register("role.contentManagement.write")}
                              onChange={() =>
                                onPermissionChange(
                                  "role.contentManagement.write"
                                )
                              }
                              checked={
                                allPermissionChecked
                                  ? allPermissionChecked
                                  : watch("role.contentManagement.write")
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
                              {...register("role.contentManagement.create")}
                              onChange={() =>
                                onPermissionChange(
                                  "role.contentManagement.create"
                                )
                              }
                              checked={
                                allPermissionChecked
                                  ? allPermissionChecked
                                  : watch("role.contentManagement.create")
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
                              {...register("role.finManagement.read")}
                              onChange={() =>
                                onPermissionChange("role.finManagement.read")
                              }
                              checked={
                                allPermissionChecked
                                  ? allPermissionChecked
                                  : watch("role.finManagement.read")
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
                              {...register("role.finManagement.write")}
                              onChange={() =>
                                onPermissionChange("role.finManagement.write")
                              }
                              checked={
                                allPermissionChecked
                                  ? allPermissionChecked
                                  : watch("role.finManagement.write")
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
                              {...register("role.finManagement.create")}
                              onChange={() =>
                                onPermissionChange("role.finManagement.create")
                              }
                              checked={
                                allPermissionChecked
                                  ? allPermissionChecked
                                  : watch("role.finManagement.create")
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
                              {...register("role.reporting.read")}
                              onChange={() =>
                                onPermissionChange("role.reporting.read")
                              }
                              checked={
                                allPermissionChecked
                                  ? allPermissionChecked
                                  : watch("role.reporting.read")
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
                              {...register("role.reporting.write")}
                              onChange={() =>
                                onPermissionChange("role.reporting.write")
                              }
                              checked={
                                allPermissionChecked
                                  ? allPermissionChecked
                                  : watch("role.reporting.write")
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
                              {...register("role.reporting.create")}
                              onChange={() =>
                                onPermissionChange("role.reporting.create")
                              }
                              checked={
                                allPermissionChecked
                                  ? allPermissionChecked
                                  : watch("role.reporting.create")
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
                              {...register("role.payRoll.read")}
                              onChange={() =>
                                onPermissionChange("role.payRoll.read")
                              }
                              checked={
                                allPermissionChecked
                                  ? allPermissionChecked
                                  : watch("role.payRoll.read")
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
                              {...register("role.payRoll.write")}
                              onChange={() =>
                                onPermissionChange("role.payRoll.write")
                              }
                              checked={
                                allPermissionChecked
                                  ? allPermissionChecked
                                  : watch("role.payRoll.write")
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
                              {...register("role.payRoll.create")}
                              onChange={() =>
                                onPermissionChange("role.payRoll.create")
                              }
                              checked={
                                allPermissionChecked
                                  ? allPermissionChecked
                                  : watch("role.payRoll.create")
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
