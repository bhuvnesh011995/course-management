import { Modal } from "react-bootstrap";

export default function AddTimesheetModal({show,setShow}) {
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
                    <label htmlFor="addDate" className="form-label">
                      Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="addDate"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="addEmployee" className="form-label">
                      Employee Name
                    </label>
                    <select className="form-select" id="addEmployee" required>
                      <option value selected>
                        Select an employee
                      </option>
                      <option value="employee1">Employee 1</option>
                      <option value="employee2">Employee 2</option>
                      {/* Add more options for other employees */}
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="addHoursWorked" className="form-label">
                      Hours Worked
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="addHoursWorked"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="addOvertimeHours" className="form-label">
                      Overtime Hours
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="addOvertimeHours"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="addShift" className="form-label">
                      Shift
                    </label>
                    <select className="form-select" id="addShift" required>
                      <option value="Day Shift">Day Shift</option>
                      <option value="Night Shift">Night Shift</option>
                    </select>
                  </div>
                </form>
</Modal.Body>
        <Modal.Footer>
        <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={()=>setShow(false)}
                >
                  Cancel
                </button>
                <button type="button" className="btn btn-primary">
                  Save Changes
                </button>
        </Modal.Footer>
       
        </Modal>
    )
};
