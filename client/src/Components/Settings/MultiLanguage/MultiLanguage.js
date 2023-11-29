import { useCallback, useEffect, useState } from "react";

import MaterialReactTable from "material-react-table";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import AddNew from "./AddNew";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import LanguageModal from "./LanguageModal";
import { useMemo } from "react";
import DeleteModal2 from "../../../common-components/models/DeleteModal2";
import { CommonFooter } from "../../../common-components/commonFooter";
import { useAuth } from "../../../context/authContext";

export default function MultiLanguage() {
  const { NewAxiosInstance } = useAuth();
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteInfo, setDeleteInfo] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const [updateData, setUpdataData] = useState(null);
  const [showLagModal, setShowLngModal] = useState(false);
  const [language, setLanguage] = useState({});

  const columns = useMemo(
    () => [
      {
        accessorKey: "name",
        header: "Name",
      },
      {
        accessorKey: "code",
        header: "Code",
      },
      {
        accessorKey: "status",
        header: "Status",
      },
    ],
    []
  );
  const getLanguages = useCallback(async () => {
    try {
      let res = await NewAxiosInstance.get("/languages");
      if (res.status === 200) {
        setData(res.data);
      } else {
        toast.error("error while fetching");
        setData([]);
        console.log(res);
      }
    } catch (error) {
      toast.error("error while fetching");
      console.log(error.response);
    }
  }, []);
  useEffect(() => {
    getLanguages();
  }, []);

  const handleDelete = useCallback(
    async (id) => {
      try {
        let response = await NewAxiosInstance.delete("/languages/" + id);
        if (response.status === 204) {
          let newArray = data.filter((ele) => ele._id != id);
          setData(newArray);
          return { success: true, message: "language deleted successfully" };
        } else {
          return { success: false, message: "error occured while deleting" };
        }
      } catch (error) {
        console.log(error);
        return { success: false, message: "server error occured" };
      }
    },
    [data]
  );
  return (
    <div id="layout-wrapper">
      {showLagModal && (
        <LanguageModal
          getLanguages={getLanguages}
          show={showLagModal}
          setShow={setShowLngModal}
          language={language}
        />
      )}
      {isDeleteModalOpen && (
        <DeleteModal2
          show={isDeleteModalOpen}
          callback={handleDelete}
          setShow={setDeleteModalOpen}
          info={deleteInfo}
          setInfo={setDeleteInfo}
        />
      )}
      {isOpen && (
        <AddNew
          data={updateData}
          setData={setUpdataData}
          show={isOpen}
          getLanguages={getLanguages}
          setShow={setIsOpen}
        />
      )}
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0 font-size-18">Language Management</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to={"/"}>Dashboard</Link>
                      </li>
                      <li className="breadcrumb-item active">
                        Language Management
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
                        onClick={() => setIsOpen(true)}
                      >
                        <i className="bx bx-plus me-1 fw-semibold align-middle" />
                        Add New Language
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
                    <div className="card-title">Language List </div>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <MaterialReactTable
                        columns={columns}
                        data={data}
                        enableColumnActions={false}
                        enableColumnFilters={false}
                        enableSorting={false}
                        enableTopToolbar={false}
                        enableRowActions
                        positionActionsColumn="last"
                        enableRowNumbers
                        rowNumberMode="static"
                        renderRowActions={({ row, table }) => (
                          <div className="hstack gap-2 fs-1">
                            <button
                              onClick={() => {
                                setLanguage(row.original);
                                setShowLngModal(true);
                              }}
                              className="btn btn-icon btn-sm btn-warning rounded-pill"
                            >
                              <i className="mdi mdi-eye"></i>
                            </button>
                            <button
                              onClick={() => {
                                setUpdataData({
                                  _id: row.original._id,
                                  name: row.original.name,
                                  code: row.original.code,
                                });
                                setIsOpen(true);
                              }}
                              className="btn btn-icon btn-sm btn-info rounded-pill"
                            >
                              <i className="bx bxs-edit-alt" />
                            </button>
                            <button
                              onClick={async () => {
                                setDeleteInfo({
                                  id: row.original._id,
                                  message: `Do you readlly want to delete ${row.original.name} language. This cannot be undone once deleted`,
                                  header: "Delete Language",
                                });
                                setDeleteModalOpen(true);
                              }}
                              className="btn btn-icon btn-sm btn-danger rounded-pill"
                            >
                              <i className="bx bxs-trash" />
                            </button>
                          </div>
                        )}
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
    </div>
  );
}
