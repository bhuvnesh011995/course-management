import { useEffect, useState } from "react";
import { MenuBar } from "../../common-components/MenuBar";
import { CommonNavbar } from "../../common-components/Navbar";
import { TradeLevelModal } from "./models/tradeLevelModel";
import { AxiosInstance } from "../../common-components/axiosInstance";
import { CommonDataTable } from "../../common-components/CommonDataTable";
import { tradeLevelHeaders } from "../../Constants/table.constants";
import { DeleteModel } from "../../common-components/models/DeleteModal";

export const TradeLevel = () => {
  const [tradeModalOpen, setTradeModalOpen] = useState(false);
  const [tradeLevels, setTradeLevels] = useState([]);
  const [tradeIndex, setTradeIndex] = useState(null);
  const [tradeData, setTradeData] = useState(null);
  const [viewTradeLevel, setViewTradeLevel] = useState(false);
  const [deleteTradeModal, setDeleteTradeModal] = useState(false);

  const showTradeLevelModal = (data, type, index) => {
    setTradeIndex(index);
    if (data) setTradeData(data);
    else setTradeData(null);
    if (type == "view") {
      setViewTradeLevel(!viewTradeLevel);
    } else if (type == "delete") {
      setDeleteTradeModal(true);
    } else {
      setViewTradeLevel(false);
      setDeleteTradeModal(false);
    }
    if (type !== "delete") setTradeModalOpen(!tradeModalOpen);
  };

  const updateTradeLevel = (data) => {
    const checkTrades = tradeLevels.filter((e) => e._id == data._id);

    if (checkTrades.length > 0) {
      tradeLevels[tradeIndex] = data;
      setTradeLevels([...tradeLevels]);
    } else {
      setTradeLevels((old) => [...old, data]);
    }
  };

  useEffect(() => {
    getTrades();
  }, []);

  const getTrades = async () => {
    try {
      const { data } = await AxiosInstance.get("/trades/getTradeLevels");
      setTradeLevels(data.allTradeLevels);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTrade = async (tradeData) => {
    try {
      const { data } = await AxiosInstance.delete("/trades/deleteTradeLevel", {
        params: tradeData,
      });

      const newTradeLevels = tradeLevels.filter((e) => e._id != tradeData._id);
      setTradeLevels([...newTradeLevels]);
    } catch (err) {
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
                  <h4 className="mb-sm-0 font-size-18">Trade Level</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="index.html">Dashboard</a>
                      </li>
                      <li className="breadcrumb-item active">Trade Level</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            {/* end page title */}
            <div className="row">
              <div className="col-xl-12">
                <div className="card">
                  <div className="card-body p-3">
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                      <div className="row w-50">
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
                      <button
                        className="btn btn-primary me-2"
                        onClick={() => showTradeLevelModal()}
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
                {/* Registration Type Table */}
                <div className="card">
                  <div className="card-header justify-content-between">
                    <div className="card-title">Trade Level List</div>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <CommonDataTable
                        data={tradeLevels}
                        tableHeaders={tradeLevelHeaders}
                        actionButtons
                        viewButton
                        editButton
                        deleteButton
                        callback={(e, type, index) =>
                          showTradeLevelModal(e, type, index)
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
        <TradeLevelModal
          isOpen={tradeModalOpen}
          setIsOpen={setTradeModalOpen}
          callback={(e) => updateTradeLevel(e)}
          tradeData={tradeData}
          viewTradeLevel={viewTradeLevel}
        />
      )}
      {deleteTradeModal && (
        <DeleteModel
          setIsOpen={setDeleteTradeModal}
          isOpen={deleteTradeModal}
          message={`do you really want to delete ${tradeData.tradeLevel}`}
          callback={(e) => deleteTrade(e)}
          deleteHeader={"Delete Trade Level"}
          data={tradeData}
        />
      )}
    </div>
  );
};
