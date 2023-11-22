import { Modal } from "react-bootstrap";
import { AxiosInstance } from "../../common-components/axiosInstance";
import { useEffect, useState } from "react";
import moment from "moment";
import { CommonDataTable } from "../../common-components/CommonDataTable";
import { quotationPreviewHeaders } from "../../Constants/table.constants";
import { toast } from "react-toastify";

export default function ViewQuotationModal({
  show,
  setShow,
  quotationData,
  isSalesQuotation,
  callback,
}) {
  const [selectedQuotation, setSelectedQuotation] = useState(null);
  const [totalAmt, setTotalAmt] = useState(null);

  const calculateQuotation = (courses) => {
    const priceTypes = {
      totalDiscount: 0,
      totalTax: 0,
      totalGrossAmt: 0,
      grandTotal: 0,
    };
    courses.map((course) => {
      priceTypes.totalDiscount =
        priceTypes.totalDiscount + Number(course.discount);
      priceTypes.totalTax = priceTypes.totalTax + Number(course.tax);
      if (course.unitPrice)
        priceTypes.totalGrossAmt =
          priceTypes.totalGrossAmt +
          Number(course.unitPrice) * Number(course.unit);
      else
        priceTypes.totalGrossAmt =
          priceTypes.totalGrossAmt + Number(course.grossAmt);
    });

    const calculateCourseTotal =
      priceTypes.totalGrossAmt * (priceTypes.totalTax / 100) +
      priceTypes.totalGrossAmt -
      priceTypes.totalGrossAmt * (priceTypes.totalDiscount / 100);

    priceTypes.grandTotal = calculateCourseTotal.toFixed(2);
    setTotalAmt(priceTypes);
  };

  useEffect(() => {
    getQuotation();
  }, []);

  const getQuotation = async () => {
    try {
      const { data } = await AxiosInstance.get("/quotations/getQuotation", {
        params: quotationData,
      });
     
      setSelectedQuotation(data);
      calculateQuotation(data.quotationCourses);
    } catch (err) {
      console.error(err);
    }
  };

  const updateSalesQuotation = async () => {
    try {
      const { data } = await AxiosInstance.post(
        "/quotations/updateQuotation",
        quotationData
      );

      setShow(false);
      if (callback) callback(quotationData);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Modal
      show={show}
      onHide={() => setShow(false)}
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
                  <h3 className="card-title mb-1" style={{ color: "#1F3BB3" }}>
                    <b>Address</b>
                  </h3>
                  <p className="m-0">
                    {`${selectedQuotation?.companyAddress} Postal Code : ${selectedQuotation?.postalCode}`}
                  </p>
                  <hr className="my-3" />
                  <h3 className="card-title mb-1" style={{ color: "#1F3BB3" }}>
                    <b>Course Details</b>
                  </h3>
                  <p className="m-0 card-p">{selectedQuotation?.courseName}</p>
                  <p className="m-0">
                    Starting Date:{" "}
                    {moment(selectedQuotation?.startDate).format("DD/MM/YYYY")}
                  </p>
                  <p className="m-0">
                    Starting Time:{" "}
                    {moment(selectedQuotation?.startTime, "hh:mm a").format(
                      "HH:mm"
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="row">
                <div className="col-md-8">
                  <div className="card">
                    <div className="card-body p-0">
                      <div className="table-responsive">
                        {selectedQuotation && (
                          <CommonDataTable
                            data={selectedQuotation?.quotationCourses}
                            tableHeaders={quotationPreviewHeaders}
                            tableSearchBar={false}
                          />
                        )}
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
                        {selectedQuotation?.contactPerson}
                      </p>
                      <p className="m-0">
                        <i
                          className="bx bx-phone me-2 pt-1"
                          style={{ fontSize: "14px" }}
                        />
                        {selectedQuotation?.contactPersonMobile}
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
                          <p className="m-0">{`$${
                            totalAmt ? totalAmt?.totalGrossAmt : 0
                          }`}</p>
                          <p className="m-0">{`${
                            totalAmt ? totalAmt?.totalTax : 0
                          }%`}</p>
                          <p className="m-0">{`${
                            totalAmt ? totalAmt?.totalDiscount : 0
                          }%`}</p>
                          <h6>{`$${totalAmt ? totalAmt?.grandTotal : 0}`}</h6>
                        </div>
                        {isSalesQuotation && (
                          <button
                            type="button"
                            className="btn btn-info w-100 mt-3"
                            onClick={updateSalesQuotation}
                          >
                            Confirm
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <button
          onClick={() => setShow(false)}
          type="button"
          className="btn btn-primary"
        >
          Discard
        </button>
      </Modal.Footer>
    </Modal>
  );
}
