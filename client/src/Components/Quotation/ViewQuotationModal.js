import { Modal } from "react-bootstrap";

export default function ViewQuotationModal({show , setShow}) {
    return(
        <Modal show={show} onHide={()=>setShow(false)}
        className="modal-dialog-scrollable"
        size="xl"
        >
            <Modal.Header closeButton>
          <Modal.Title>
            <h5 className="modal-title">View Quotation</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form className="row text-left">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="card border border-primary">
                        <div className="card-body">
                          <h3
                            className="card-title mb-1"
                            style={{ color: "#1F3BB3" }}
                          >
                            <b>Address</b>
                          </h3>
                          <p className="m-0">
                            BLK 3017 BEDOK NORTH STREET 5 #01-22 GOURMET EAST
                            KITCHEN SINGAPORE 486121
                          </p>
                          <hr className="my-3" />
                          <h3
                            className="card-title mb-1"
                            style={{ color: "#1F3BB3" }}
                          >
                            <b>Course Details</b>
                          </h3>
                          <p className="m-0 card-p">Cyber Security</p>
                          <p className="m-0">Duration : 12 Weeks</p>
                          <p className="m-0">Starting Date: 25/04/2023</p>
                          <p className="m-0">Starting Time: 05:47 PM</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-9">
                      <div className="row">
                        <div className="col-md-8">
                          <div className="card">
                            <div className="card-body p-0">
                              <div className="table-responsive">
                                <table className="table card-table table-vcenter text-center text-nowrap datatable">
                                  <thead>
                                    <tr>
                                      <th>SL NO</th>
                                      <th>Course Name</th>
                                      <th>Unit Price</th>
                                      <th>Quantity</th>
                                      <th>Gross Amount ($)</th>
                                      <th>Discount (%)</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>1</td>
                                      <td>Html</td>
                                      <td>$308.00</td>
                                      <td>2</td>
                                      <td>$308.00</td>
                                      <td>8%</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="card border border-primary">
                            <div className="card-body">
                              <h3
                                className="card-title mb-1"
                                style={{ color: "#1F3BB3" }}
                              >
                                <b className="me-2">Customer Details</b>
                              </h3>
                              <p className="m-0">
                                <i
                                  className="bx bx-user me-2 pt-1"
                                  style={{ fontSize: "14px" }}
                                />
                                Jhone Doe
                              </p>
                              <p className="m-0">
                                <i
                                  className="bx bx-phone me-2 pt-1"
                                  style={{ fontSize: "14px" }}
                                />
                                +91-9737155901
                              </p>
                              <hr className="my-3" />
                              <h3
                                className="card-title mb-1"
                                style={{ color: "#1F3BB3" }}
                              >
                                <b className="me-2">Amount Details</b>
                              </h3>
                              <div className="row">
                                <div className="col-md-7">
                                  <p className="m-0">
                                    Total <small>(before tax):</small>
                                  </p>
                                  <p className="m-0">Total Tax:</p>
                                  <p className="m-0">Total Discount:</p>
                                  <h6>Grand Total:</h6>
                                </div>
                                <div className="col-md-5">
                                  <p className="m-0">$200.00</p>
                                  <p className="m-0">$0.00</p>
                                  <p className="m-0">$0.00</p>
                                  <h6>$200.00</h6>
                                </div>
                              </div>
                              <button
                                type="button"
                                className="btn btn-info w-100 mt-3"
                                data-dismiss="modal"
                              >
                                Confirm
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
</Modal.Body>
        <Modal.Footer>
        <button type="button" className="btn btn-primary">
                  Discard
                </button>
        </Modal.Footer>
       
        </Modal>
    )
};
