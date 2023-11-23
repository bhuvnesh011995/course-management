import { toast } from "react-toastify";
import { AxiosInstance } from "../../common-components/axiosInstance";
import { useEffect, useState } from "react";
import { CommonDataTable } from "../../common-components/CommonDataTable";
import { invoiceQuoatationListHeaders } from "../../Constants/table.constants";
import ViewQuotationModal from "./ViewQuotationModal";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { DeleteModel } from "../../common-components/models/DeleteModal";

export const Invoice = () => {
  const { user } = useAuth();
  const [allQuoatations, setAllQuotations] = useState([]);
  const [isViewModalOpen, setViewModal] = useState(false);
  const [quotationData, setQuotationData] = useState(null);
  const [deleteQuotation, setDeleteQuotation] = useState(false);

  useEffect(() => {
    getAllQuotations();
  }, []);

  const getAllQuotations = async () => {
    try {
      const { data } = await AxiosInstance.get("/quotations/getQuotations");
      const filteredQuotation = data.filter((quotation, index) => {
        quotation.invoiceQuotationNo = index + 1;
        return quotation.isInvoice == true;
      });
      setAllQuotations(filteredQuotation);
    } catch (err) {
      console.error(err);
    }
  };

  const showQuotationModal = (data, type, index) => {
    setQuotationData(data);
    if (type == "view") {
      setViewModal(true);
      setDeleteQuotation(false);
    } else if (type == "delete") {
      setViewModal(false);
      setDeleteQuotation(true);
    }
  };

  const deleteSelectedQuotation = async (quotation) => {
    try {
      toast.dismiss();
      const deletedQuote = await AxiosInstance.delete(
        "/quotations/deleteQuotation",
        { params: quotation }
      );
      if (deletedQuote.status == 200) {
        const filterQuotations = allQuoatations.filter(
          (quote) => quote._id != quotation._id
        );
        setAllQuotations([...filterQuotations]);
        toast.success(deletedQuote.data);
      } else toast.error("Something Went Wrong");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div id="layout-wrapper">
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            {/* start page title */}
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0 font-size-18">Invoice Management</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to="/">Dashboard</Link>
                      </li>
                      <li className="breadcrumb-item active">
                        Invoice Management
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            {/* end page title */}
            {/* <div className="row">
              <div className="col-xl-12">
                <div className="card">
                  <div className="card-body p-3">
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                      <div className="row w-100">
                        <div className="col-xl-5">
                          <select className="form-select">
                            <option value="CA">Newest</option>
                            <option value="NV">Oldest</option>
                            <option value="OR">Recent</option>
                          </select>
                        </div>
                        <div className="col-xl-7">
                          <div className="d-flex" role="search">
                            <input
                              className="form-control me-2"
                              type="search"
                              placeholder="Search"
                              aria-label="Search"
                            />{" "}
                            <button className="btn btn-light" type="submit">
                              Search
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* Role cards */}
            <div className="row g-4">
              <div className="col-md-12">
                {/* Role Table */}
                <div className="card ">
                  <div className="card-header justify-content-between">
                    <div className="card-title">Invoice List </div>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <CommonDataTable
                        data={allQuoatations}
                        tableHeaders={invoiceQuoatationListHeaders}
                        actionButtons
                        deleteButton={
                          user.userData?.roleData?.finManagement?.delete
                        }
                        enableRowNumbers={false}
                        viewButton
                        callback={(data, type, index) =>
                          showQuotationModal(data, type, index)
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
        <footer className="footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6">© Tonga.</div>
              <div className="col-sm-6">
                <div className="text-sm-end d-none d-sm-block">
                  Design &amp; Develop by{" "}
                  <a href="https://braincavesoft.com" target="_blank">
                    Braincave Software Pvt.Ltd.
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      {isViewModalOpen && (
        <ViewQuotationModal
          show={isViewModalOpen}
          setShow={setViewModal}
          quotationData={quotationData}
        />
      )}

      {deleteQuotation && (
        <DeleteModel
          setIsOpen={setDeleteQuotation}
          isOpen={deleteQuotation}
          message={`Do yo really want to delete customer ${quotationData?.contactPerson} quotation`}
          callback={(data) => deleteSelectedQuotation(data)}
          deleteHeader="Quotation"
          data={quotationData}
        />
      )}
    </div>
  );
};
