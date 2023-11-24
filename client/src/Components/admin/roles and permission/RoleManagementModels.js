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
    HRMS: false,
    timesheet: false,
    customer: false,
    trainer: false,
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

  const checkArray = [
    "employeeManagement",
    "trainer",
    "finManagement",
    "payroll",
    "leaveManagement",
    "userManagement",
    "lead",
    "customer",
    "timesheet",
    "role",
  ];

  const permissionType = {
    admin: ["role", "userManagement"],
    HRMS: ["timesheet", "leaveManagement", "payroll", "employeeManagement"],
  };

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
    checkArray.map((type) => selectAllTypes(type, isChecked));
    setIsAllSelected(isChecked);
    setPermissionChecked({
      lead: isChecked,
      trainer: isChecked,
      customer: isChecked,
      timesheet: isChecked,
      userManagement: isChecked,
      employeeManagement: isChecked,
      HRMS: isChecked,
      finManagement: isChecked,
      leaveManagement: isChecked,
      payroll: isChecked,
      role: isChecked,
      admin: isChecked,
    });
  };

  const selectAllTypes = (type, isChecked) => {
    setValue(`${type}.read`, isChecked);
    setValue(`${type}.write`, isChecked);
    setValue(`${type}.create`, isChecked);
    setValue(`${type}.delete`, isChecked);
    permissionChecked[type] = isChecked;
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
        selectAllTypes("userManagement", getValues(permission));
        break;
      case "lead.selectAll":
        selectAllTypes("lead", getValues(permission));
        break;
      case "customer.selectAll":
        selectAllTypes("customer", getValues(permission));
        break;
      case "timesheet.selectAll":
        selectAllTypes("timesheet", getValues(permission));
        break;
      case "employeeManagement.selectAll":
        selectAllTypes("employeeManagement", getValues(permission));
        break;
      case "trainer.selectAll":
        selectAllTypes("trainer", getValues(permission));
        break;
      case "finManagement.selectAll":
        selectAllTypes("finManagement", getValues(permission));
        break;
      case "leaveManagement.selectAll":
        selectAllTypes("leaveManagement", getValues(permission));
        break;
      case "payroll.selectAll":
        selectAllTypes("payroll", getValues(permission));
        break;
      case "role.selectAll":
        selectAllTypes("role", getValues(permission));
        break;
    }
  };

  const checkAllSelected = (data = getValues()) => {
    const isAllChecked = {
      lead: [],
      customer: [],
      timesheet: [],
      trainer: [],
      userManagement: [],
      finManagement: [],
      payroll: [],
      leaveManagement: [],
      employeeManagement: [],
      role: [],
      isAllSelected: [],
    };
    if (Object.keys(data).length) {
      checkArray.map((type) => {
        for (const checkbox in data[type]) {
          isAllChecked[type].push(data[type][checkbox]);
          isAllChecked.isAllSelected.push(data[type][checkbox]);
        }
      });

      for (const checkbox in data.trainer) {
        isAllChecked.trainer.push(data.trainer[checkbox]);
        isAllChecked.isAllSelected.push(data.trainer[checkbox]);
      }
      if (isAllChecked.isAllSelected.includes(false)) setIsAllSelected(false);
      else setIsAllSelected(true);

      checkIfAllSelected(isAllChecked);
    }
  };

  const checkIfAllSelected = (isAllChecked) => {
    checkArray.map((type) => {
      if (isAllChecked[type].includes(false)) {
        permissionChecked[type] = false;
      } else {
        permissionChecked[type] = true;
      }
    });
    if (
      isAllChecked.role.includes(false) ||
      isAllChecked.userManagement.includes(false)
    ) {
      permissionChecked.admin = false;
    } else {
      permissionChecked.admin = true;
    }
    console.log(isAllChecked);
    if (
      isAllChecked.timesheet.includes(false) ||
      isAllChecked.payroll.includes(false) ||
      isAllChecked.leaveManagement.includes(false) ||
      isAllChecked.employeeManagement.includes(false)
    ) {
      permissionChecked.HRMS = false;
    } else {
      permissionChecked.HRMS = true;
    }

    setPermissionChecked({ ...permissionChecked });
  };

  const selectMainPermissionTab = (tabName) => {
    setValue(tabName, !getValues(tabName));

    switch (tabName) {
      case "admin":
        permissionType.admin.map((type) => {
          selectAllTypes(type, getValues(tabName));

          setValue(`${type}.selectAll`, tabName);
        });
        break;
      case "HRMS":
        permissionType.HRMS.map((type) => {
          selectAllTypes(type, getValues(tabName));
          setValue(`${type}.selectAll`, tabName);
        });
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
              <h3 className="role-title">{roleId ? "Edit" : "Add New"} Role</h3>
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
              <div style={{ height: "400px" }} className="table-responsive">
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
                      <tbody>
                        <tr>
                          <th>
                            <div className="form-check mx-3">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                onChange={() => selectMainPermissionTab("HRMS")}
                                checked={permissionChecked.HRMS}
                                disabled={viewRole}
                              />
                              <td className="text-nowrap fw-medium">HRMS</td>
                            </div>
                          </th>
                        </tr>

                        <tr>
                          <div className="form-check mx-3">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              onChange={() =>
                                onPermissionChange(
                                  "employeeManagement.selectAll"
                                )
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
                                    onPermissionChange(
                                      "employeeManagement.read"
                                    )
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
                                    onPermissionChange(
                                      "employeeManagement.write"
                                    )
                                  }
                                  checked={
                                    permissionChecked.employeeManagement
                                      ? permissionChecked.employeeManagement
                                      : watch("employeeManagement.write")
                                  }
                                  disabled={viewRole}
                                />
                                <label className="form-check-label">
                                  Write
                                </label>
                              </div>
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  {...register("employeeManagement.create")}
                                  onChange={() =>
                                    onPermissionChange(
                                      "employeeManagement.create"
                                    )
                                  }
                                  checked={
                                    permissionChecked.employeeManagement
                                      ? permissionChecked.employeeManagement
                                      : watch("employeeManagement.create")
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
                                  {...register("employeeManagement.delete")}
                                  onChange={() =>
                                    onPermissionChange(
                                      "employeeManagement.delete"
                                    )
                                  }
                                  checked={
                                    permissionChecked.employeeManagement
                                      ? permissionChecked.employeeManagement
                                      : watch("employeeManagement.delete")
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
                                <label className="form-check-label">
                                  Write
                                </label>
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
                                <label className="form-check-label">
                                  Create
                                </label>
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
                                  {...register("payroll.read")}
                                  onChange={() =>
                                    onPermissionChange("payroll.read")
                                  }
                                  checked={
                                    permissionChecked.payroll
                                      ? permissionChecked.payroll
                                      : watch("payroll.read")
                                  }
                                  disabled={viewRole}
                                />
                                <label className="form-check-label">Read</label>
                              </div>
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  {...register("payroll.write")}
                                  onChange={() =>
                                    onPermissionChange("payroll.write")
                                  }
                                  checked={
                                    permissionChecked.payroll
                                      ? permissionChecked.payroll
                                      : watch("payroll.write")
                                  }
                                  disabled={viewRole}
                                />
                                <label className="form-check-label">
                                  Write
                                </label>
                              </div>
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  {...register("payroll.create")}
                                  onChange={() =>
                                    onPermissionChange("payroll.create")
                                  }
                                  checked={
                                    permissionChecked.payroll
                                      ? permissionChecked.payroll
                                      : watch("payroll.create")
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
                                  {...register("payroll.delete")}
                                  onChange={() =>
                                    onPermissionChange("payroll.delete")
                                  }
                                  checked={
                                    permissionChecked.payroll
                                      ? permissionChecked.payroll
                                      : watch("payroll.delete")
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
                                onPermissionChange("timesheet.selectAll")
                              }
                              checked={permissionChecked.timesheet}
                              disabled={viewRole}
                            />
                            <td className="text-nowrap fw-medium">Timesheet</td>
                          </div>
                          <td>
                            <div className="d-flex">
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  {...register("timesheet.read")}
                                  onChange={() =>
                                    onPermissionChange("timesheet.read")
                                  }
                                  checked={
                                    permissionChecked.timesheet
                                      ? permissionChecked.timesheet
                                      : watch("timesheet.read")
                                  }
                                  disabled={viewRole}
                                />
                                <label className="form-check-label">Read</label>
                              </div>
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  {...register("timesheet.write")}
                                  onChange={() =>
                                    onPermissionChange("timesheet.write")
                                  }
                                  checked={
                                    permissionChecked.timesheet
                                      ? permissionChecked.timesheet
                                      : watch("timesheet.write")
                                  }
                                  disabled={viewRole}
                                />
                                <label className="form-check-label">
                                  Write
                                </label>
                              </div>
                              <div className="form-check me-3 me-lg-5">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  {...register("timesheet.create")}
                                  onChange={() =>
                                    onPermissionChange("timesheet.create")
                                  }
                                  checked={
                                    permissionChecked.timesheet
                                      ? permissionChecked.timesheet
                                      : watch("timesheet.create")
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
                                  {...register("timesheet.delete")}
                                  onChange={() =>
                                    onPermissionChange("timesheet.delete")
                                  }
                                  checked={
                                    permissionChecked.timesheet
                                      ? permissionChecked.timesheet
                                      : watch("timesheet.delete")
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

                    <tr>
                      <div className="form-check mx-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          onChange={() =>
                            onPermissionChange("customer.selectAll")
                          }
                          checked={permissionChecked.customer}
                          disabled={viewRole}
                        />
                        <td className="text-nowrap fw-medium">Customer</td>
                      </div>
                      <td>
                        <div className="d-flex">
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              {...register("customer.read")}
                              onChange={() =>
                                onPermissionChange("customer.read")
                              }
                              checked={
                                permissionChecked.customer
                                  ? permissionChecked.customer
                                  : watch("customer.read")
                              }
                              disabled={viewRole}
                            />
                            <label className="form-check-label">Read</label>
                          </div>
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              {...register("customer.write")}
                              onChange={() =>
                                onPermissionChange("customer.write")
                              }
                              checked={
                                permissionChecked.customer
                                  ? permissionChecked.customer
                                  : watch("customer.write")
                              }
                              disabled={viewRole}
                            />
                            <label className="form-check-label">Write</label>
                          </div>
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              {...register("customer.create")}
                              onChange={() =>
                                onPermissionChange("customer.create")
                              }
                              checked={
                                permissionChecked.customer
                                  ? permissionChecked.customer
                                  : watch("customer.create")
                              }
                              disabled={viewRole}
                            />
                            <label className="form-check-label">Create</label>
                          </div>
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              {...register("customer.delete")}
                              onChange={() =>
                                onPermissionChange("customer.delete")
                              }
                              checked={
                                permissionChecked.customer
                                  ? permissionChecked.customer
                                  : watch("customer.delete")
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
                            onPermissionChange("trainer.selectAll")
                          }
                          checked={permissionChecked.trainer}
                          disabled={viewRole}
                        />
                        <td className="text-nowrap fw-medium">Trainer</td>
                      </div>
                      <td>
                        <div className="d-flex">
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              {...register("trainer.read")}
                              onChange={() =>
                                onPermissionChange("trainer.read")
                              }
                              checked={
                                permissionChecked.trainer
                                  ? permissionChecked.trainer
                                  : watch("trainer.read")
                              }
                              disabled={viewRole}
                            />
                            <label className="form-check-label">Read</label>
                          </div>
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              {...register("trainer.write")}
                              onChange={() =>
                                onPermissionChange("trainer.write")
                              }
                              checked={
                                permissionChecked.trainer
                                  ? permissionChecked.trainer
                                  : watch("trainer.write")
                              }
                              disabled={viewRole}
                            />
                            <label className="form-check-label">Write</label>
                          </div>
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              {...register("trainer.create")}
                              onChange={() =>
                                onPermissionChange("trainer.create")
                              }
                              checked={
                                permissionChecked.trainer
                                  ? permissionChecked.trainer
                                  : watch("trainer.create")
                              }
                              disabled={viewRole}
                            />
                            <label className="form-check-label">Create</label>
                          </div>
                          <div className="form-check me-3 me-lg-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              {...register("trainer.delete")}
                              onChange={() =>
                                onPermissionChange("trainer.delete")
                              }
                              checked={
                                permissionChecked.trainer
                                  ? permissionChecked.trainer
                                  : watch("trainer.delete")
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
