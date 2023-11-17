import { useEffect, useState } from "react";

import AddQuotationModal from "./AddQuotationModal";
import ViewQuotationModal from "./ViewQuotationModal";
import { AxiosInstance } from "../../common-components/axiosInstance";
import { CommonDataTable } from "../../common-components/CommonDataTable";
import { quoatationListHeaders } from "../../Constants/table.constants";
import { DeleteModel } from "../../common-components/models/DeleteModal";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export const Quotation = () => {
  const [isAddModelOpen, setAddModal] = useState(false);
  const [isViewModalOpen, setViewModal] = useState(false);
  const [allQuoatations, setAllQuotations] = useState([]);
  const [quotationData, setQuotationData] = useState(null);
  const [deleteQuotation, setDeleteQuotation] = useState(false);

  useEffect(() => {
    getAllQuotations();
  }, []);

  const getAllQuotations = async () => {
    try {
      const { data } = await AxiosInstance.get("/quotations/getQuotations");
      data.map((quotation, index) => (quotation.quotationNo = index + 1));
      setAllQuotations(data);
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
    if (type !== "delete" && type !== "view") setAddModal(true);
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
        filterQuotations.map(
          (quotation, index) =>
            (filterQuotations[index].quotationNo = index + 1)
        );
        setAllQuotations([...filterQuotations]);
        toast.success(deletedQuote.data);
      } else toast.error("Something Went Wrong");
    } catch (err) {
      toast.error("Something Went Wrong");
      console.error(err);
    }
  };

  const updateQuotations = (newQuotation) => {
    newQuotation.quotationNo = allQuoatations.length + 1;
    setAllQuotations([...allQuoatations, newQuotation]);
  };

  return (
    <div id="layout-wrapper">
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0 font-size-18">Quotation Management</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to='/'>Dashboard</Link>
                      </li>
                      <li className="breadcrumb-item active">
                        Quotation Management
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="card">
                  <div className="card-body p-3">
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                      <div className="row w-50"></div>
                      <button
                        className="btn btn-primary me-2"
                        onClick={() => showQuotationModal()}
                      >
                        <i className="bx bx-plus me-1 fw-semibold align-middle" />
                        Add New Quotation
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-4">
              <div className="col-md-12">
                <div className="card ">
                  <div className="card-header justify-content-between">
                    <div className="card-title">Quotation List </div>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <CommonDataTable
                        data={allQuoatations}
                        tableHeaders={quoatationListHeaders}
                        actionButtons
                        deleteButton
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

      {isAddModelOpen && (
        <AddQuotationModal
          show={isAddModelOpen}
          setShow={setAddModal}
          callback={(e) => updateQuotations(e)}
        />
      )}
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
