import { Modal } from "react-bootstrap";

export const DeleteModel = ({
  setIsOpen,
  isOpen,
  message,
  callback,
  deleteHeader,
  data,
}) => {
  const handleClose = () => {
    setIsOpen(false);
  };

  const deleteData = () => {
    callback(data);
    handleClose();
  };

  return (
    <div>
      <Modal show={isOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h5 className="modal-title">Delete {" " + deleteHeader}</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="col-12 fv-plugins-icon-container">
            <label className="form-label">{message}</label>
          </div>
          <Modal.Footer>
            <div className="row">
              <div className="col-12 text-center">
                <button
                  type="submit"
                  onClick={deleteData}
                  className="btn btn-danger me-sm-3 me-1"
                >
                  Delete
                </button>
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
        </Modal.Body>
      </Modal>
    </div>
  );
};
