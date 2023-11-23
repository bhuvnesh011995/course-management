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
    lead: false,
    userManagement: false,
    employeeManagement: false,
    finManagement: false,
    leaveManagement: false,
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
    selectAllemployeeManagement(isChecked);
    selectAllFinManagement(isChecked);
    selectAllPayRoll(isChecked);
    selectAllleaveManagement(isChecked);
    selectAllUserManagement(isChecked);
    selectAllLead(isChecked);
    setIsAllSelected(isChecked);
    selectAllRoles(isChecked);
    setPermissionChecked({
      lead: isChecked,
      userManagement: isChecked,
      employeeManagement: isChecked,
      finManagement: isChecked,
      leaveManagement: isChecked,
      payroll: isChecked,
      role: isChecked,
      admin: isChecked,
    });
  };

  const selectAllemployeeManagement = (isChecked) => {
    setValue("employeeManagement.read", isChecked);
    setValue("employeeManagement.write", isChecked);
    setValue("employeeManagement.create", isChecked);
    setValue("employeeManagement.delete", isChecked);
    permissionChecked.employeeManagement = isChecked;
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

  const selectAllLead = (isChecked) => {
    setValue("lead.read", isChecked);
    setValue("lead.write", isChecked);
    setValue("lead.create", isChecked);
    setValue("lead.delete", isChecked);
    permissionChecked.lead = isChecked;
    setPermissionChecked(permissionChecked);
  };

  const selectAllleaveManagement = (isChecked) => {
    setValue("leaveManagement.read", isChecked);
    setValue("leaveManagement.write", isChecked);
    setValue("leaveManagement.create", isChecked);
    setValue("leaveManagement.delete", isChecked);
    permissionChecked.leaveManagement = isChecked;
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
      case "lead.selectAll":
        selectAllLead(getValues(permission));
        break;
      case "employeeManagement.selectAll":
        selectAllemployeeManagement(getValues(permission));
        break;
      case "finManagement.selectAll":
        selectAllFinManagement(getValues(permission));
        break;
      case "leaveManagement.selectAll":
        selectAllleaveManagement(getValues(permission));
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
      lead: [],
      userManagement: [],
      finManagement: [],
      payroll: [],
      leaveManagement: [],
      employeeManagement: [],
      role: [],
      isAllSelected: [],
    };
    if (Object.keys(data).length) {
      for (const checkbox in data.employeeManagement) {
        isAllChecked.employeeManagement.push(data.employeeManagement[checkbox]);
        isAllChecked.isAllSelected.push(data.employeeManagement[checkbox]);
      }
      for (const checkbox in data.finManagement) {
        isAllChecked.finManagement.push(data.finManagement[checkbox]);
        isAllChecked.isAllSelected.push(data.finManagement[checkbox]);
      }
      for (const checkbox in data.payRoll) {
        isAllChecked.payroll.push(data.payRoll[checkbox]);
        isAllChecked.isAllSelected.push(data.payRoll[checkbox]);
      }
      for (const checkbox in data.leaveManagement) {
        isAllChecked.leaveManagement.push(data.leaveManagement[checkbox]);
        isAllChecked.isAllSelected.push(data.leaveManagement[checkbox]);
      }
      for (const checkbox in data.userManagement) {
        isAllChecked.userManagement.push(data.userManagement[checkbox]);
        isAllChecked.isAllSelected.push(data.userManagement[checkbox]);
      }
      for (const checkbox in data.lead) {
        isAllChecked.lead.push(data.lead[checkbox]);
        isAllChecked.isAllSelected.push(data.lead[checkbox]);
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
    if (isAllChecked.employeeManagement.includes(false)) {
      permissionChecked.employeeManagement = false;
    } else {
      permissionChecked.employeeManagement = true;
    }
    if (isAllChecked.userManagement.includes(false)) {
      permissionChecked.userManagement = false;
    } else {
      permissionChecked.userManagement = true;
    }
    if (isAllChecked.lead.includes(false)) {
      permissionChecked.lead = false;
    } else {
      permissionChecked.lead = true;
    }
    if (isAllChecked.leaveManagement.includes(false)) {
      permissionChecked.leaveManagement = false;
    } else {
      permissionChecked.leaveManagement = true;
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
                            onPermissionChange("employeeManagement.selectAll")
                          }
                          checked={permissionChecked.employeeManagement}
                          disabled={viewRole}
                        />
                        <td className="text-nowrap fw-medium">
                          employee Management
                        </td>
                      </div>
                      <td>
                        <div className="d-flex">
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              {...register("employeeManagement.read")}
                              onChange={() =>
                                onPermissionChange("employeeManagement.read")
                              }
                              checked={
                                permissionChecked.employeeManagement
                                  ? permissionChecked.employeeManagement
                                  : watch("employeeManagement.read")
                              }
                              disabled={viewRole}
                            />
                            <label className="form-check-label">Read</label>
                          </div>
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              {...register("employeeManagement.write")}
                              onChange={() =>
                                onPermissionChange("employeeManagement.write")
                              }
                              checked={
                                permissionChecked.employeeManagement
                                  ? permissionChecked.employeeManagement
                                  : watch("employeeManagement.write")
                              }
                              disabled={viewRole}
                            />
                            <label className="form-check-label">Write</label>
                          </div>
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              {...register("employeeManagement.create")}
                              onChange={() =>
                                onPermissionChange("employeeManagement.create")
                              }
                              checked={
                                permissionChecked.employeeManagement
                                  ? permissionChecked.employeeManagement
                                  : watch("employeeManagement.create")
                              }
                              disabled={viewRole}
                            />
                            <label className="form-check-label">Create</label>
                          </div>
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              {...register("employeeManagement.delete")}
                              onChange={() =>
                                onPermissionChange("employeeManagement.delete")
                              }
                              checked={
                                permissionChecked.employeeManagement
                                  ? permissionChecked.employeeManagement
                                  : watch("employeeManagement.delete")
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
                            onPermissionChange("leaveManagement.selectAll")
                          }
                          checked={permissionChecked.leaveManagement}
                          disabled={viewRole}
                        />
                        <td className="text-nowrap fw-medium">
                          leaveManagement
                        </td>
                      </div>
                      <td>
                        <div className="d-flex">
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              {...register("leaveManagement.read")}
                              onChange={() =>
                                onPermissionChange("leaveManagement.read")
                              }
                              checked={
                                permissionChecked.leaveManagement
                                  ? permissionChecked.leaveManagement
                                  : watch("leaveManagement.read")
                              }
                              disabled={viewRole}
                            />
                            <label className="form-check-label">Read</label>
                          </div>
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              {...register("leaveManagement.write")}
                              onChange={() =>
                                onPermissionChange("leaveManagement.write")
                              }
                              checked={
                                permissionChecked.leaveManagement
                                  ? permissionChecked.leaveManagement
                                  : watch("leaveManagement.write")
                              }
                              disabled={viewRole}
                            />
                            <label className="form-check-label">Write</label>
                          </div>
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              {...register("leaveManagement.create")}
                              onChange={() =>
                                onPermissionChange("leaveManagement.create")
                              }
                              checked={
                                permissionChecked.leaveManagement
                                  ? permissionChecked.leaveManagement
                                  : watch("leaveManagement.create")
                              }
                              disabled={viewRole}
                            />
                            <label className="form-check-label">Create</label>
                          </div>
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              {...register("leaveManagement.delete")}
                              onChange={() =>
                                onPermissionChange("leaveManagement.delete")
                              }
                              checked={
                                permissionChecked.leaveManagement
                                  ? permissionChecked.leaveManagement
                                  : watch("leaveManagement.delete")
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
                    <tr>
                      <div className="form-check mx-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          onChange={() => onPermissionChange("lead.selectAll")}
                          checked={permissionChecked.lead}
                          disabled={viewRole}
                        />
                        <td className="text-nowrap fw-medium">Lead</td>
                      </div>
                      <td>
                        <div className="d-flex">
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              {...register("lead.read")}
                              onChange={() => onPermissionChange("lead.read")}
                              checked={
                                permissionChecked.lead
                                  ? permissionChecked.lead
                                  : watch("lead.read")
                              }
                              disabled={viewRole}
                            />
                            <label className="form-check-label">Read</label>
                          </div>
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              {...register("lead.write")}
                              onChange={() => onPermissionChange("lead.write")}
                              checked={
                                permissionChecked.lead
                                  ? permissionChecked.lead
                                  : watch("lead.write")
                              }
                              disabled={viewRole}
                            />
                            <label className="form-check-label">Write</label>
                          </div>
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              {...register("lead.create")}
                              onChange={() => onPermissionChange("lead.create")}
                              checked={
                                permissionChecked.lead
                                  ? permissionChecked.lead
                                  : watch("lead.create")
                              }
                              disabled={viewRole}
                            />
                            <label className="form-check-label">Create</label>
                          </div>
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              {...register("lead.delete")}
                              onChange={() => onPermissionChange("lead.delete")}
                              checked={
                                permissionChecked.lead
                                  ? permissionChecked.lead
                                  : watch("lead.delete")
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
