import { useEffect, useState } from "react";
import { AxiosInstance } from "../../../common-components/axiosInstance";
import { TradeTypeModal } from "./tradeTypeModel";
import { DeleteModel } from "../../../common-components/models/DeleteModal";
import { CommonDataTable } from "../../../common-components/CommonDataTable";
import { tradeTypeHeaders } from "../../../Constants/table.constants";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export const TradeType = () => {
  const [tradeModalOpen, setTradeModalOpen] = useState(false);
  const [tradeTypes, setTradeTypes] = useState([]);
  const [tradeIndex, setTradeIndex] = useState(null);
  const [tradeData, setTradeData] = useState(null);
  const [viewTradeType, setViewTradeType] = useState(false);
  const [deleteTradeModal, setDeleteTradeModal] = useState(false);

  const showTradeTypeModal = (data, type, index) => {
    setTradeIndex(index);
    if (data) setTradeData(data);
    else setTradeData(null);
    if (type == "view") {
      setViewTradeType(!viewTradeType);
    } else if (type == "delete") {
      setDeleteTradeModal(true);
    } else {
      setViewTradeType(false);
      setDeleteTradeModal(false);
    }
    if (type !== "delete") setTradeModalOpen(!tradeModalOpen);
  };

  const updateTradeType = (data) => {
    const checkTrades = tradeTypes.filter((e) => e._id == data._id);

    if (checkTrades.length > 0) {
      tradeTypes[tradeIndex] = data;
      setTradeTypes([...tradeTypes]);
    } else {
      setTradeTypes((old) => [...old, data]);
    }
  };

  useEffect(() => {
    getTrades();
  }, []);

  const getTrades = async () => {
    try {
      const { data } = await AxiosInstance.get("/trades/getTradeTypes");
      setTradeTypes(data.allTradeTypes);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTrade = async (tradeData) => {
    try {
      toast.dismiss();
      const deleteTradeType = await AxiosInstance.delete(
        "/trades/deleteTradeType",
        {
          params: tradeData,
        }
      );
      if (deleteTradeType.status == 200) {
        const newTradeTypes = tradeTypes.filter((e) => e._id != tradeData._id);
        setTradeTypes([...newTradeTypes]);
        toast.success(deleteTradeType.data.message);
      } else {
        toast.error("something went wrong ");
      }
    } catch (err) {
      toast.error("something went wrong ");
      console.error(err);
    }
  };

  return (
    <div id="layout-wrapper">
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0 font-size-18">Trade Type</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to={"/"}>Dashboard</Link>
                      </li>
                      <li className="breadcrumb-item active">Trade Type</li>
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
                      <div className="row w-50">
                        {/* <div className="col-xl-5">
                          <select className="form-select">
                            <option key={"CA"} value="CA">
                              Newest
                            </option>
                            <option key={"NV"} value="NV">
                              Oldest
                            </option>
                            <option key={"OR"} value="OR">
                              Recent
                            </option>
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
                        </div> */}
                      </div>
                      <button
                        className="btn btn-primary me-2"
                        onClick={() => showTradeTypeModal()}
                      >
                        <i className="bx bx-plus me-1 fw-semibold align-middle" />
                        Add New
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-4">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header justify-content-between">
                    <div className="card-title">Trade Type List</div>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <CommonDataTable
                        data={tradeTypes}
                        tableHeaders={tradeTypeHeaders}
                        actionButtons
                        viewButton
                        editButton
                        deleteButton
                        callback={(e, type, index) =>
                          showTradeTypeModal(e, type, index)
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
      {tradeModalOpen && (
        <TradeTypeModal
          isOpen={tradeModalOpen}
          setIsOpen={setTradeModalOpen}
          callback={(e) => updateTradeType(e)}
          tradeData={tradeData}
          viewTradeType={viewTradeType}
        />
      )}
      {deleteTradeModal && (
        <DeleteModel
          setIsOpen={setDeleteTradeModal}
          isOpen={deleteTradeModal}
          message={`do you really want to delete ${tradeData.tradeType}`}
          callback={(e) => deleteTrade(e)}
          deleteHeader={"Delete Trade Type"}
          data={tradeData}
        />
      )}
    </div>
  );
};
