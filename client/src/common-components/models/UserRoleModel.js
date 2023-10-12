import { Modal } from "react-bootstrap";
import { AddNewRoleModel } from "./RoleManagementModels";
import axios from "axios";

export const UserRoleModel = ({ isOpen, setIsOpen, viewUser, userData }) => {
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Modal show={isOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h3 className="role-title">View User Role</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <label className="d-flex mx-4 form-label">
              {" "}
              User Name : <p className="mx-3">{userData.userName}</p>
            </label>
            <label className="d-flex mx-4 form-label">
              Role Name : <p className="mx-3">{userData.roleName}</p>
            </label>
            <label className="d-flex mx-4 form-label">
              {" "}
              Status : <p className="mx-3">{userData.status}</p>
            </label>
          </div>
          <Modal.Footer>
            <div className="row">
              <div className="col-12 text-center">
                {/* {!viewRole && (
                    <button
                      type="submit"
                      className="btn btn-primary me-sm-3 me-1"
                    >
                      {roleId ? "Update" : "Submit"}
                    </button>
                  )} */}
                <button
                  type="reset"
                  className="btn btn-label-secondary"
                  onClick={handleClose}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </div>
  );
};
