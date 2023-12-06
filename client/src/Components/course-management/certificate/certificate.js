import { useEffect, useState } from "react";
import { CommonDataTable } from "../../../common-components/CommonDataTable";
import { certificateHeaders } from "../../../Constants/table.constants";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/authContext";
import GenerateCertificate from "./generateCertificateModal";

export const Certificate = () => {
  const { user, NewAxiosInstance } = useAuth();
  const [certificateModal, setCertificateModal] = useState(false);
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    getCertificates();
  }, []);

  const showCertificateModal = (e, type, index) => {
    setCertificateModal(true);
  };

  const getCertificates = async () => {
    try {
      const { data } = await NewAxiosInstance.get(
        "/certificates/getCertificates"
      );
      setCertificates(data);
    } catch (err) {
      toast.error("something went wrong !");
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
                  <h4 className="mb-sm-0 font-size-18">
                    Certificate Management
                  </h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to={"/"}>Dashboard</Link>
                      </li>
                      <li className="breadcrumb-item active">
                        Certificate Management
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            {user.userData?.roleData?.certificateGeneration?.create && (
              <div className="row">
                <div className="col-xl-12">
                  <div className="card">
                    <div className="card-body p-3">
                      <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                        <div className="row w-50"></div>
                        <button
                          className="btn btn-primary me-2"
                          onClick={() => showCertificateModal()}
                        >
                          <i className="bx bx-plus me-1 fw-semibold align-middle" />
                          Generate Certificates
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
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
      </div>
      {certificateModal && (
        <GenerateCertificate
          isOpen={certificateModal}
          setIsOpen={setCertificateModal}
          certificates={certificates}
        />
      )}
    </div>
  );
};
