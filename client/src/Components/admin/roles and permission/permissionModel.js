import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { AxiosInstance } from "../../../common-components/axiosInstance";

export const NewPermissionModal = ({
  isShow,
  setIsShow,
  permissionData,
  viewPermission,
  callback,
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  const handleClose = () => {
    setIsShow(false);
    setValue("permission", {});
  };

  useEffect(() => {
    if (permissionData) setValue("permission", permissionData);
    else setValue("permission", {});
  }, []);

  const editPermissionData = async (permissionData) => {
    try {
      const permission = await AxiosInstance.post(
        "/permission/editPermission",
        permissionData
      );
      callback(permissionData.permission);
      handleClose();
    } catch (err) {
      console.error(err);
    }
  };

  const addNewpermission = async (permissionData) => {
    try {
      const { data } = await AxiosInstance.post(
        "/permission/addNewPermission",
        permissionData
      );

      callback(data);
      handleClose();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Modal show={isShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {" "}
            {viewPermission ? (
              <h5 className="modal-title">View Permission</h5>
            ) : (
              <h5 className="modal-title">
                {permissionData ? "Edit" : "Add New"} Permission
              </h5>
            )}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={handleSubmit(
              permissionData ? editPermissionData : addNewpermission
            )}
            className="row g-3 "
          >
            <div className="col-12 fv-plugins-icon-container">
              <label className="form-label" htmlFor="modalRoleName">
                Permission Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter a Permission Name"
                tabIndex={-1}
                {...register("permission.permissionName")}
                disabled={viewPermission}
              />
            </div>
            <div className="col-12">
              <div>
                <label className="form-label">Assign To</label>
                <select
                  className="form-select"
                  {...register("permission.assignTo")}
                  disabled={viewPermission}
                >
                  <option value={"Sub-Admin"}>Sub-Admin</option>
                  <option value={"Manager"}>Manager</option>
                  <option value={"User"}>User</option>
                </select>
              </div>
            </div>
            <Modal.Footer>
              <div className="row">
                <div className="col-12 text-center">
                  {!viewPermission && (
                    <button
                      type="submit"
                      className="btn btn-primary me-sm-3 me-1"
                    >
                      {permissionData ? "Update" : "Create Permission"}
                    </button>
                  )}{" "}
                  <button
                    type="reset"
                    className="btn btn-label-secondary"
                    onClick={handleClose}
                  >
                    Discard
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
