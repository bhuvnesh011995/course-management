import { Modal } from "react-bootstrap";

export default function AddPayrollModal({show,setShow}) {
    return(
        <Modal show={show} onHide={()=>setShow(false)}
        className="modal-dialog-scrollable"
        size="lg"
        >
            <Modal.Header closeButton>
          <Modal.Title>
            <h5 className="modal-title">Add Payroll</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="employeeName" className="form-label">
                        Employee Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="employeeName"
                        placeholder="Enter Employee Name"
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="department" className="form-label">
                        Department
                      </label>
                      <select className="form-select" id="department" required>
                        <option value selected disabled>
                          Select Department
                        </option>
                        <option value="hr">HR</option>
                        <option value="finance">Finance</option>
                        <option value="it">IT</option>
                        {/* Add more options as needed */}
                      </select>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="position" className="form-label">
                        Position
                      </label>
                      <select className="form-select" id="position" required>
                        <option value selected disabled>
                          Select Position
                        </option>
                        <option value="manager">Manager</option>
                        <option value="assistant">Assistant</option>
                        <option value="analyst">Analyst</option>
                        {/* Add more options as needed */}
                      </select>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="salary" className="form-label">
                        Salary
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="salary"
                        placeholder="Enter Salary"
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="allowances" className="form-label">
                        Allowances
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="allowances"
                        placeholder="Enter Allowances"
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="deductions" className="form-label">
                        Deductions
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="deductions"
                        placeholder="Enter Deductions"
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="netSalary" className="form-label">
                        Net Salary
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="netSalary"
                        placeholder="Enter Net Salary"
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="date" className="form-label">
                        Date
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="date"
                        required
                      />
                    </div>
                  </div>
                </form>
</Modal.Body>
        <Modal.Footer>
        <button
                  type="button"
                  onClick={()=>setShow(false)}
                >
                  Cancel
                </button>
                <button type="button" className="btn btn-primary">
                  Add Payroll
                </button>
        </Modal.Footer>
       
        </Modal>
    )
};
