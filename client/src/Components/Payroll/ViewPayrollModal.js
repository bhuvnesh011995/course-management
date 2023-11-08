import { Modal } from "react-bootstrap";

export default function ViewPayrollModal({show,setShow}) {
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
                        defaultValue="Jane Doe"
                        readOnly
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="department" className="form-label">
                        Department
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="department"
                        defaultValue="HR"
                        readOnly
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="position" className="form-label">
                        Position
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="position"
                        defaultValue="Manager"
                        readOnly
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="salary" className="form-label">
                        Salary
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="salary"
                        defaultValue="$5,000"
                        readOnly
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
                        defaultValue="$1,000"
                        readOnly
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
                        defaultValue="$500"
                        readOnly
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
                        defaultValue="$5,500"
                        readOnly
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
                        defaultValue="2023-08-30"
                        readOnly
                      />
                    </div>
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
