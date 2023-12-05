import { useEffect, useState } from "react";
import { CommonDataTable } from "../../common-components/CommonDataTable";
import { salesQuoatationListHeaders } from "../../Constants/table.constants";
import { DeleteModel } from "../../common-components/models/DeleteModal";
import ViewQuotationModal from "./ViewQuotationModal";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";

export const SalesQuotation = () => {
  const { user, NewAxiosInstance } = useAuth();
  const [allQuoatations, setAllQuotations] = useState([]);
  const [isViewModalOpen, setViewModal] = useState(false);
  const [quotationData, setQuotationData] = useState(null);
  const [deleteQuotation, setDeleteQuotation] = useState(false);

  useEffect(() => {
    getAllQuotations();
  }, []);

  const getAllQuotations = async () => {
    try {
      const { data } = await NewAxiosInstance.get("/quotations/getQuotations");
      const filteredQuotation = data.filter((quotation, index) => {
        quotation.salesQuotationNo = index + 1;
        return quotation.isInvoice == false;
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
      const deletedQuote = await NewAxiosInstance.delete(
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

  const updateQuotations = (quotation) => {
    const filteredQuotations = allQuoatations.filter(
      (quote) => quote._id != quotation._id
    );
    setAllQuotations([...filteredQuotations]);
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
                  <h4 className="mb-sm-0 font-size-18">Sales Quotation</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to="/">Dashboard</Link>
                      </li>
                      <li className="breadcrumb-item active">
                        Sales Quotation
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-md-12">
                <div className="card ">
                  <div className="card-header justify-content-between">
                    <div className="card-title">Sales Quotation List </div>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <CommonDataTable
                        data={allQuoatations}
                        tableHeaders={salesQuoatationListHeaders}
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
      </div>
      {isViewModalOpen && (
        <ViewQuotationModal
          show={isViewModalOpen}
          setShow={setViewModal}
          quotationData={quotationData}
          isSalesQuotation
          callback={(data) => updateQuotations(data)}
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
