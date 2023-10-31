// <!doctype html>
// <html lang="en">

import { useEffect, useState } from "react";
import { MenuBar } from "../../common-components/MenuBar";
import { CommonNavbar } from "../../common-components/Navbar";
import AddNewCertificate from "./models/certificateModal";
import { AxiosInstance } from "../../common-components/axiosInstance";
import { CommonDataTable } from "../../common-components/CommonDataTable";
import { certificateHeaders } from "../../Constants/table.constants";
import { DeleteModel } from "../../common-components/models/DeleteModal";

export const Certificate = () => {
  const [certificateModal, setCertificateModal] = useState(false);
  const [certificateData, setCertificateData] = useState({});
  const [certificates, setCertificates] = useState([]);
  const [deleteCertificate, setDeleteCertificate] = useState(false);
  const [viewCertificate, setViewCertificate] = useState(false);
  const [certificateIndex, setCertificateIndex] = useState(null);

  useEffect(() => {
    getCertificates();
  }, []);

  const showCertificateModal = (e, type, index) => {
    setCertificateData(e);
    setCertificateIndex(index);
    if (type == "view") {
      setViewCertificate(true);
      setDeleteCertificate(false);
    } else if (type == "delete") {
      setViewCertificate(false);
      setDeleteCertificate(true);
    } else {
      setViewCertificate(false);
      setDeleteCertificate(false);
    }
    if (type != "delete") setCertificateModal(true);
  };

  const getCertificates = async () => {
    try {
      const { data } = await AxiosInstance.get("/certificates/getCertificates");
      setCertificates(data);
    } catch (err) {
      console.error(err);
    }
  };

  const updateCertificates = (certificate) => {
    const filteredCertificates = certificates.filter(
      (e) => e._id == certificate._id
    );
    if (filteredCertificates.length) {
      certificates[certificateIndex] = certificate;
      setCertificates([...certificates]);
    } else {
      setCertificates([...certificates, certificate]);
    }
  };

  const deleteSelectedCertificate = async (certificate) => {
    try {
      const { data } = await AxiosInstance.delete(
        "/certificates/deleteCertificate",
        { params: certificate }
      );
      const filteredCertificates = certificates.filter(
        (e) => e._id != certificate._id
      );
      setCertificates([...filteredCertificates]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div id="layout-wrapper">
      <CommonNavbar />
      <MenuBar />
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0 font-size-18">
                    Certificate Management
                  </h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="index.html">Dashboard</a>
                      </li>
                      <li className="breadcrumb-item active">
                        Certificate Management
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
                        onClick={() => showCertificateModal()}
                      >
                        <i className="bx bx-plus me-1 fw-semibold align-middle" />
                        Add New Certificate
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header justify-content-between">
                    <div className="card-title">Certificate List </div>
                  </div>
                  <div className="card-body">
                    <CommonDataTable
                      tableHeaders={certificateHeaders}
                      data={certificates}
                      actionButtons
                      editButton
                      deleteButton
                      viewButton
                      callback={(e, type, index) =>
                        showCertificateModal(e, type, index)
                      }
                    />
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>{" "}
        </div>
        <footer className="footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6">© Saurabh Amin.</div>
              <div className="col-sm-6">
                <div className="text-sm-end d-none d-sm-block">
                  Design &amp; Develop by Saurabh Amin
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      {certificateModal && (
        <AddNewCertificate
          isOpen={certificateModal}
          setIsOpen={setCertificateModal}
          certificateData={certificateData}
          callback={(data) => updateCertificates(data)}
          viewCertificate={viewCertificate}
        />
      )}
      {deleteCertificate && (
        <DeleteModel
          setIsOpen={setDeleteCertificate}
          isOpen={deleteCertificate}
          message={`do you really want to delete ${certificateData?.certificateNo} certificate.`}
          callback={(e) => deleteSelectedCertificate(e)}
          deleteHeader={"Certificate"}
          data={certificateData}
        />
      )}
    </div>
  );
};
