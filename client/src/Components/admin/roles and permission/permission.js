import { useEffect, useState } from "react";
import { MenuBar } from "../../../common-components/MenuBar";
import { CommonNavbar } from "../../../common-components/Navbar";
import { NewPermissionModal } from "../../../common-components/models/permissionModel";
import { CommonDataTable } from "../../../common-components/CommonDataTable";
import { permissionTableHeaders } from "../../../Constants/table.constants";
import { DeleteModel } from "../../../common-components/models/DeleteModal";
import { AxiosInstance } from "../../../common-components/axiosInstance";

export const Permission = () => {
  const [newPermissionModal, setNewPermissionModal] = useState(false);
  const [permissionIndex, setPermissionIndex] = useState(null);
  const [deletePermissionModal, setDeletePermissionModal] = useState(false);
  const [viewPermission, setViewPermission] = useState(false);
  const [permissions, setPermissions] = useState([]);
  const [permissionData, setPermissionData] = useState(null);

  useEffect(() => {
    getPermissions();
  }, []);

  const getPermissions = async () => {
    try {
      const { data } = await AxiosInstance.get("/permission/getPermissions");
      setPermissions(data);
    } catch (err) {
      console.error(err);
    }
  };

  const showPermissionModal = (data, type, index) => {
    setPermissionIndex(index);
    if (type == "view") setViewPermission(true);
    else if (type == "delete") {
      setDeletePermissionModal(true);
    } else {
      setViewPermission(false);
      setDeletePermissionModal(false);
    }
    if (data) setPermissionData(data);
    else setPermissionData(null);
    if (type != "delete") setNewPermissionModal(true);
  };

  const updatePermission = (permission) => {
    const inPermission = permissions.filter((e) => e._id == permission._id);
    if (inPermission.length) {
      // permissions.map((e, index) => {
      //   if (e._id == inPermission[0]._id) {
      //     permissions[index] = permission;
      //     setPermissions((old) => [...permissions]);
      //     return;
      //   }
      // })
      permissions[permissionIndex] = permission;
      setPermissions((old) => [...permissions]);
    } else setPermissions((old) => [...old, permission]);
  };

  const deletePermission = async (permissionData) => {
    try {
      const { data } = await AxiosInstance.delete(
        "/permission/deletePermission",
        { params: permissionData }
      );
      permissions.splice(permissionIndex, 1);
      setPermissions((old) => [...permissions]);
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
                    Permission Management
                  </h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="index.html">Dashboard</a>
                      </li>
                      <li className="breadcrumb-item active">
                        Permission Management
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-end">
                <button
                  className="btn btn-primary mb-3 text-nowrap add-new-role"
                  onClick={() => showPermissionModal()}
                >
                  <i className="bx bx-plus me-1 fw-semibold align-middle" />
                  Add New Permission
                </button>
              </div>
            </div>
            <div className="row g-4">
              <div className="col-md-12">
                <div className="card ">
                  <div className="card-header justify-content-between">
                    <div className="card-title">Permission List </div>
                  </div>
                  <div className="card-body">
                    {permissions.length && (
                      <CommonDataTable
                        data={permissions}
                        tableHeaders={permissionTableHeaders}
                        actionButtons
                        editButton
                        deleteButton
                        viewButton
                        downloadExcel
                        downloadPdf
                        callback={(e, type, index) =>
                          showPermissionModal(e, type, index)
                        }
                      />
                    )}
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
      {deletePermissionModal && (
        <DeleteModel
          isOpen={deletePermissionModal}
          setIsOpen={setDeletePermissionModal}
          data={permissionData}
          message={`do you really want to delete ${permissionData.permissionName} permission ?`}
          deleteHeader={"Delete Permission"}
          callback={(e) => deletePermission(e)}
        />
      )}

      {newPermissionModal && (
        <NewPermissionModal
          isShow={newPermissionModal}
          setIsShow={setNewPermissionModal}
          permissionData={permissionData}
          viewPermission={viewPermission}
          callback={(e) => updatePermission(e)}
        />
      )}
    </div>
  );
};
