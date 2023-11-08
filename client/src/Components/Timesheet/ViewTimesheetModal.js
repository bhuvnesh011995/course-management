import { Modal } from "react-bootstrap";

export default function ViewTimesheetModal({show,setShow}) {
    return(
        <Modal show={show} onHide={()=>setShow(false)}
        className="modal-dialog-scrollable"
        size="sm-3"
        >
            <Modal.Header closeButton>
          <Modal.Title>
            <h5 className="modal-title">Add Work Hours</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form>
                  <div className="mb-3">
                    <label htmlFor="viewDate" className="form-label">
                      Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="viewDate"
                      defaultValue="2023-09-01"
                      readOnly
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="viewEmployee" className="form-label">
                      Employee Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="viewEmployee"
                      defaultValue="Jane Doe"
                      readOnly
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="viewHoursWorked" className="form-label">
                      Hours Worked
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="viewHoursWorked"
                      defaultValue={8}
                      readOnly
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="viewOvertimeHours" className="form-label">
                      Overtime Hours
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="viewOvertimeHours"
                      defaultValue={2}
                      readOnly
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="viewShift" className="form-label">
                      Shift
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="viewShift"
                      defaultValue="Day Shift"
                      readOnly
                    />
                  </div>
                </form>
</Modal.Body>
        <Modal.Footer>
        <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={()=>setShow(false)}
                >
                  Close
                </button>
        </Modal.Footer>
       
        </Modal>
    )
};
