/* eslint-disable default-case */
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { AxiosInstance } from "../../../common-components/axiosInstance";
import { toast } from "react-toastify";

export const AddNewRoleModel = ({
  isOpen,
  setIsOpen,
  roleId,
  viewRole,
  callback,
}) => {
  const [isAllSelected, setIsAllSelected] = useState(false);

  const [permissionChecked, setPermissionChecked] = useState({
    userManagement: false,
    contentManagement: false,
    finManagement: false,
    reporting: false,
    payroll: false,
    role: false,
    admin: false,
  });

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
      const { data } = await AxiosInstance.get("/roles/selectedRoleData", {
        params: {
          id: roleId,
        },
      });
      checkAllSelected(data[0]);
      reset(data[0]);
    } catch (err) {
      toast.error("something went wrong !");
      console.error(err);
    }
  };

  const editRoleData = async (roleData) => {
    try {
      toast.dismiss();
      const { data } = AxiosInstance.post("/roles/editRole", roleData);
      toast.success("Role Updated");
      callback(roleData);
      handleCloseRoleModal();
    } catch (err) {
      toast.error("something went wrong !");
      console.error(err);
    }
  };

  const addNewRole = async (roleData) => {
    try {
      toast.dismiss();
      const newRole = await AxiosInstance.post("/roles/addNewRole", roleData);
      if (newRole.status == 200) {
        toast.success("Role Added Successfully");
        callback(newRole.data);
      } else {
        toast.error(newRole.data.message);
      }
      handleCloseRoleModal();
    } catch (err) {
      toast.error("something went wrong !");
      console.error(err);
    }
  };

  const handleCloseRoleModal = () => {
    setIsOpen(false);
    selectAll(false);
    reset();
  };

  const selectAll = (isChecked) => {
    selectAllContentManagement(isChecked);
    selectAllFinManagement(isChecked);
    selectAllPayRoll(isChecked);
    selectAllReporting(isChecked);
    selectAllUserManagement(isChecked);
    setIsAllSelected(isChecked);
    selectAllRoles(isChecked);
    setPermissionChecked({
      userManagement: isChecked,
      contentManagement: isChecked,
      finManagement: isChecked,
      reporting: isChecked,
      payroll: isChecked,
      role: isChecked,
      admin: isChecked,
    });
  };

  const selectAllContentManagement = (isChecked) => {
    setValue("contentManagement.read", isChecked);
    setValue("contentManagement.write", isChecked);
    setValue("contentManagement.create", isChecked);
    setValue("contentManagement.delete", isChecked);
    permissionChecked.contentManagement = isChecked;
    setPermissionChecked(permissionChecked);
  };

  const selectAllFinManagement = (isChecked) => {
    setValue("finManagement.read", isChecked);
    setValue("finManagement.write", isChecked);
    setValue("finManagement.create", isChecked);
    setValue("finManagement.delete", isChecked);
    permissionChecked.finManagement = isChecked;
    setPermissionChecked(permissionChecked);
  };

  const selectAllPayRoll = (isChecked) => {
    setValue("payRoll.read", isChecked);
    setValue("payRoll.write", isChecked);
    setValue("payRoll.create", isChecked);
    setValue("payRoll.delete", isChecked);
    permissionChecked.payroll = isChecked;
    setPermissionChecked(permissionChecked);
  };

  const selectAllUserManagement = (isChecked) => {
    setValue("userManagement.read", isChecked);
    setValue("userManagement.write", isChecked);
    setValue("userManagement.create", isChecked);
    setValue("userManagement.delete", isChecked);
    permissionChecked.userManagement = isChecked;
    setPermissionChecked(permissionChecked);
  };

  const selectAllReporting = (isChecked) => {
    setValue("reporting.read", isChecked);
    setValue("reporting.write", isChecked);
    setValue("reporting.create", isChecked);
    setValue("reporting.delete", isChecked);
    permissionChecked.reporting = isChecked;
    setPermissionChecked(permissionChecked);
  };

  const selectAllRoles = (isChecked) => {
    setValue("role.read", isChecked);
    setValue("role.write", isChecked);
    setValue("role.create", isChecked);
    setValue("role.delete", isChecked);
    permissionChecked.role = isChecked;
    setPermissionChecked(permissionChecked);
  };

  const onPermissionChange = (permission) => {
    setValue(permission, !getValues(permission));
    selectPermissionTab(permission);
    checkAllSelected();
  };

  const selectPermissionTab = (permission) => {
    switch (permission) {
      case "userManagement.selectAll":
        selectAllUserManagement(getValues(permission));
        break;
      case "contentManagement.selectAll":
        selectAllContentManagement(getValues(permission));
        break;
      case "finManagement.selectAll":
        selectAllFinManagement(getValues(permission));
        break;
      case "reporting.selectAll":
        selectAllReporting(getValues(permission));
        break;
      case "payroll.selectAll":
        selectAllPayRoll(getValues(permission));
        break;
      case "role.selectAll":
        selectAllRoles(getValues(permission));
        break;
    }
  };

  const checkAllSelected = (data = getValues()) => {
    const isAllChecked = {
      userManagement: [],
      finManagement: [],
      payroll: [],
      reporting: [],
      contentManagement: [],
      role: [],
      isAllSelected: [],
    };
    if (Object.keys(data).length) {
      for (const checkbox in data.contentManagement) {
        isAllChecked.contentManagement.push(data.contentManagement[checkbox]);
        isAllChecked.isAllSelected.push(data.contentManagement[checkbox]);
      }
      for (const checkbox in data.finManagement) {
        isAllChecked.finManagement.push(data.finManagement[checkbox]);
        isAllChecked.isAllSelected.push(data.finManagement[checkbox]);
      }
      for (const checkbox in data.payRoll) {
        isAllChecked.payroll.push(data.payRoll[checkbox]);
        isAllChecked.isAllSelected.push(data.payRoll[checkbox]);
      }
      for (const checkbox in data.reporting) {
        isAllChecked.reporting.push(data.reporting[checkbox]);
        isAllChecked.isAllSelected.push(data.reporting[checkbox]);
      }
      for (const checkbox in data.userManagement) {
        isAllChecked.userManagement.push(data.userManagement[checkbox]);
        isAllChecked.isAllSelected.push(data.userManagement[checkbox]);
      }
      for (const checkbox in data.role) {
        isAllChecked.role.push(data.role[checkbox]);
        isAllChecked.isAllSelected.push(data.role[checkbox]);
      }
      if (isAllChecked.isAllSelected.includes(false)) setIsAllSelected(false);
      else setIsAllSelected(true);

      checkIfAllSelected(isAllChecked);
    }
  };

  const checkIfAllSelected = (isAllChecked) => {
    if (isAllChecked.contentManagement.includes(false)) {
      permissionChecked.contentManagement = false;
    } else {
      permissionChecked.contentManagement = true;
    }
    if (isAllChecked.userManagement.includes(false)) {
      permissionChecked.userManagement = false;
    } else {
      permissionChecked.userManagement = true;
    }
    if (isAllChecked.reporting.includes(false)) {
      permissionChecked.reporting = false;
    } else {
      permissionChecked.reporting = true;
    }
    if (isAllChecked.payroll.includes(false)) {
      permissionChecked.payroll = false;
    } else {
      permissionChecked.payroll = true;
    }
    if (isAllChecked.finManagement.includes(false)) {
      permissionChecked.finManagement = false;
    } else {
      permissionChecked.finManagement = true;
    }
    if (isAllChecked.role.includes(false)) {
      permissionChecked.role = false;
    } else {
      permissionChecked.role = true;
    }
    if (
      isAllChecked.role.includes(false) ||
      isAllChecked.userManagement.includes(false)
    ) {
      permissionChecked.admin = false;
    } else {
      permissionChecked.admin = true;
    }
    setPermissionChecked({ ...permissionChecked });
  };

  const selectMainPermissionTab = (tabName) => {
    setValue(tabName, !getValues(tabName));

    switch (tabName) {
      case "admin":
        selectAllRoles(getValues(tabName));
        selectAllUserManagement(getValues(tabName));
        setValue("userManagement.selectAll", tabName);
        setValue("role.selectAll", tabName);
        break;
    }
    checkAllSelected();
  };

  return (
    <div>
      <Modal show={isOpen} onHide={handleCloseRoleModal} size="lg">
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
              <label className="form-label">Role Name</label>
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
                        <i className="bx bx-info-circle bx-xs" />
                        {/* <ToggleButton
                          aria-label="Allows a full access to the system"
                          title="Allows a full access to the system"
                          className="bx bx-info-circle bx-xs"
                        /> */}
                      </td>
                      <td>
                        <div className="form-check ">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            onChange={({ target }) => selectAll(target.checked)}
                            checked={isAllSelected}
                            disabled={viewRole}
                          />
                          <label className="form-check-label">Select All</label>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <tbody>
                        <tr>
                          <th>
                            <div className="form-check mx-3">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                onChange={() =>
                                  selectMainPermissionTab("admin")
                                }
                                checked={permissionChecked.admin}
                                disabled={viewRole}
                              />
                              <td className="text-nowrap fw-medium">Admin</td>
                            </div>
                          </th>
                        </tr>
                        <tr>
                          <div className="form-check mx-3">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              onChange={() =>
                                onPermissionChange("userManagement.selectAll")
                              }
                              checked={permissionChecked.userManagement}
                              disabled={viewRole}
                            />
                            <td className="text-nowrap fw-medium">
                              User Management
                            </td>
                          </div>
                          <td>
                            <div className="d-flex">
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  {...register("userManagement.read")}
                                  onChange={() =>
                                    onPermissionChange("userManagement.read")
                                  }
                                  checked={
                                    permissionChecked.userManagement
                                      ? permissionChecked.userManagement
                                      : watch("userManagement.read")
                                  }
                                  disabled={viewRole}
                                />
                                <label className="form-check-label">Read</label>
                              </div>
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  {...register("userManagement.write")}
                                  onChange={() =>
                                    onPermissionChange("userManagement.write")
                                  }
                                  checked={
                                    permissionChecked.userManagement
                                      ? permissionChecked.userManagement
                                      : watch("userManagement.write")
                                  }
                                  disabled={viewRole}
                                />
                                <label className="form-check-label">
                                  Write
                                </label>
                              </div>
                              <div className="form-check  me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  {...register("userManagement.create")}
                                  onChange={() =>
                                    onPermissionChange("userManagement.create")
                                  }
                                  checked={
                                    permissionChecked.userManagement
                                      ? permissionChecked.userManagement
                                      : watch("userManagement.create")
                                  }
                                  disabled={viewRole}
                                />
                                <label className="form-check-label">
                                  Create
                                </label>
                              </div>
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  {...register("userManagement.delete")}
                                  onChange={() =>
                                    onPermissionChange("userManagement.delete")
                                  }
                                  checked={
                                    permissionChecked.userManagement
                                      ? permissionChecked.userManagement
                                      : watch("userManagement.delete")
                                  }
                                  disabled={viewRole}
                                />
                                <label className="form-check-label">
                                  Delete
                                </label>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <div className="form-check mx-3">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              onChange={() =>
                                onPermissionChange("role.selectAll")
                              }
                              checked={permissionChecked.role}
                              disabled={viewRole}
                            />
                            <td className="text-nowrap fw-medium">
                              Roles And Permission
                            </td>
                          </div>
                          <td>
                            <div className="d-flex">
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  {...register("role.read")}
                                  onChange={() =>
                                    onPermissionChange("role.read")
                                  }
                                  checked={
                                    permissionChecked.role
                                      ? permissionChecked.role
                                      : watch("role.read")
                                  }
                                  disabled={viewRole}
                                />
                                <label className="form-check-label">Read</label>
                              </div>
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  {...register("role.write")}
                                  onChange={() =>
                                    onPermissionChange("role.write")
                                  }
                                  checked={
                                    permissionChecked.role
                                      ? permissionChecked.role
                                      : watch("role.write")
                                  }
                                  disabled={viewRole}
                                />
                                <label className="form-check-label">
                                  Write
                                </label>
                              </div>
                              <div className="form-check  me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  {...register("role.create")}
                                  onChange={() =>
                                    onPermissionChange("role.create")
                                  }
                                  checked={
                                    permissionChecked.role
                                      ? permissionChecked.role
                                      : watch("role.create")
                                  }
                                  disabled={viewRole}
                                />
                                <label className="form-check-label">
                                  Create
                                </label>
                              </div>
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  {...register("role.delete")}
                                  onChange={() =>
                                    onPermissionChange("role.delete")
                                  }
                                  checked={
                                    permissionChecked.role
                                      ? permissionChecked.role
                                      : watch("role.delete")
                                  }
                                  disabled={viewRole}
                                />
                                <label className="form-check-label">
                                  Delete
                                </label>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </tr>
                    <tr>
                      <div className="form-check mx-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          onChange={() =>
                            onPermissionChange("contentManagement.selectAll")
                          }
                          checked={permissionChecked.contentManagement}
                          disabled={viewRole}
                        />
                        <td className="text-nowrap fw-medium">
                          Content Management
                        </td>
                      </div>
                      <td>
                        <div className="d-flex">
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              {...register("contentManagement.read")}
                              onChange={() =>
                                onPermissionChange("contentManagement.read")
                              }
                              checked={
                                permissionChecked.contentManagement
                                  ? permissionChecked.contentManagement
                                  : watch("contentManagement.read")
                              }
                              disabled={viewRole}
                            />
                            <label className="form-check-label">Read</label>
                          </div>
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              {...register("contentManagement.write")}
                              onChange={() =>
                                onPermissionChange("contentManagement.write")
                              }
                              checked={
                                permissionChecked.contentManagement
                                  ? permissionChecked.contentManagement
                                  : watch("contentManagement.write")
                              }
                              disabled={viewRole}
                            />
                            <label className="form-check-label">Write</label>
                          </div>
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              {...register("contentManagement.create")}
                              onChange={() =>
                                onPermissionChange("contentManagement.create")
                              }
                              checked={
                                permissionChecked.contentManagement
                                  ? permissionChecked.contentManagement
                                  : watch("contentManagement.create")
                              }
                              disabled={viewRole}
                            />
                            <label className="form-check-label">Create</label>
                          </div>
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              {...register("contentManagement.delete")}
                              onChange={() =>
                                onPermissionChange("contentManagement.delete")
                              }
                              checked={
                                permissionChecked.contentManagement
                                  ? permissionChecked.contentManagement
                                  : watch("contentManagement.delete")
                              }
                              disabled={viewRole}
                            />
                            <label className="form-check-label">Delete</label>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <div className="form-check mx-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          onChange={() =>
                            onPermissionChange("finManagement.selectAll")
                          }
                          checked={permissionChecked.finManagement}
                          disabled={viewRole}
                        />
                        <td className="text-nowrap fw-medium">
                          Financial Management
                        </td>
                      </div>
                      <td>
                        <div className="d-flex">
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              {...register("finManagement.read")}
                              onChange={() =>
                                onPermissionChange("finManagement.read")
                              }
                              checked={
                                permissionChecked.finManagement
                                  ? permissionChecked.finManagement
                                  : watch("finManagement.read")
                              }
                              disabled={viewRole}
                            />
                            <label className="form-check-label">Read</label>
                          </div>
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              {...register("finManagement.write")}
                              onChange={() =>
                                onPermissionChange("finManagement.write")
                              }
                              checked={
                                permissionChecked.finManagement
                                  ? permissionChecked.finManagement
                                  : watch("finManagement.write")
                              }
                              disabled={viewRole}
                            />
                            <label className="form-check-label">Write</label>
                          </div>
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              {...register("finManagement.create")}
                              onChange={() =>
                                onPermissionChange("finManagement.create")
                              }
                              checked={
                                permissionChecked.finManagement
                                  ? permissionChecked.finManagement
                                  : watch("finManagement.create")
                              }
                              disabled={viewRole}
                            />
                            <label className="form-check-label">Create</label>
                          </div>
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              {...register("finManagement.delete")}
                              onChange={() =>
                                onPermissionChange("finManagement.delete")
                              }
                              checked={
                                permissionChecked.finManagement
                                  ? permissionChecked.finManagement
                                  : watch("finManagement.delete")
                              }
                              disabled={viewRole}
                            />
                            <label className="form-check-label">Delete</label>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <div className="form-check mx-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          onChange={() =>
                            onPermissionChange("reporting.selectAll")
                          }
                          checked={permissionChecked.reporting}
                          disabled={viewRole}
                        />
                        <td className="text-nowrap fw-medium">Reporting</td>
                      </div>
                      <td>
                        <div className="d-flex">
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              {...register("reporting.read")}
                              onChange={() =>
                                onPermissionChange("reporting.read")
                              }
                              checked={
                                permissionChecked.reporting
                                  ? permissionChecked.reporting
                                  : watch("reporting.read")
                              }
                              disabled={viewRole}
                            />
                            <label className="form-check-label">Read</label>
                          </div>
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              {...register("reporting.write")}
                              onChange={() =>
                                onPermissionChange("reporting.write")
                              }
                              checked={
                                permissionChecked.reporting
                                  ? permissionChecked.reporting
                                  : watch("reporting.write")
                              }
                              disabled={viewRole}
                            />
                            <label className="form-check-label">Write</label>
                          </div>
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              {...register("reporting.create")}
                              onChange={() =>
                                onPermissionChange("reporting.create")
                              }
                              checked={
                                permissionChecked.reporting
                                  ? permissionChecked.reporting
                                  : watch("reporting.create")
                              }
                              disabled={viewRole}
                            />
                            <label className="form-check-label">Create</label>
                          </div>
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              {...register("reporting.delete")}
                              onChange={() =>
                                onPermissionChange("reporting.delete")
                              }
                              checked={
                                permissionChecked.reporting
                                  ? permissionChecked.reporting
                                  : watch("reporting.delete")
                              }
                              disabled={viewRole}
                            />
                            <label className="form-check-label">Delete</label>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <div className="form-check mx-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          onChange={() =>
                            onPermissionChange("payroll.selectAll")
                          }
                          checked={permissionChecked.payroll}
                          disabled={viewRole}
                        />
                        <td className="text-nowrap fw-medium">Payroll</td>
                      </div>
                      <td>
                        <div className="d-flex">
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              {...register("payRoll.read")}
                              onChange={() =>
                                onPermissionChange("payRoll.read")
                              }
                              checked={
                                permissionChecked.payroll
                                  ? permissionChecked.payroll
                                  : watch("payRoll.read")
                              }
                              disabled={viewRole}
                            />
                            <label className="form-check-label">Read</label>
                          </div>
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              {...register("payRoll.write")}
                              onChange={() =>
                                onPermissionChange("payRoll.write")
                              }
                              checked={
                                permissionChecked.payroll
                                  ? permissionChecked.payroll
                                  : watch("payRoll.write")
                              }
                              disabled={viewRole}
                            />
                            <label className="form-check-label">Write</label>
                          </div>
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              {...register("payRoll.create")}
                              onChange={() =>
                                onPermissionChange("payRoll.create")
                              }
                              checked={
                                permissionChecked.payroll
                                  ? permissionChecked.payroll
                                  : watch("payRoll.create")
                              }
                              disabled={viewRole}
                            />
                            <label className="form-check-label">Create</label>
                          </div>
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              {...register("payRoll.delete")}
                              onChange={() =>
                                onPermissionChange("payRoll.delete")
                              }
                              checked={
                                permissionChecked.payroll
                                  ? permissionChecked.payroll
                                  : watch("payRoll.delete")
                              }
                              disabled={viewRole}
                            />
                            <label className="form-check-label">Delete</label>
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
