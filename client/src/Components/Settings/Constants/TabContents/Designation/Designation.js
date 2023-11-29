import { useCallback, useEffect, useMemo, useState } from "react";
import AddNew from "./AddNew";
import { Card } from "react-bootstrap";
import MaterialReactTable from "material-react-table";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { toast } from "react-toastify";
import { Axios } from "axios";
import DeleteModal2 from "../../../../../common-components/models/DeleteModal2";
import { useAuth } from "../../../../../context/authContext";

export default function Designation() {
  const { NewAxiosInstance } = useAuth();
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteInfo, setDeleteInfo] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const [updateData, setUpdateData] = useState();

  const getDesignations = useCallback(async () => {
    try {
      let response = await NewAxiosInstance.get("/constants/designations");
      if (!response) toast.error("server error");
      if (response.status === 200) {
        setData(response.data);
      } else toast.error("error while fetching data");
    } catch (error) {
      console.log(error.response);
      toast.error("error while fetching");
    }
  }, []);
  const addDesignation = useCallback(
    async (formData) => {
      try {
        let response = await NewAxiosInstance.post(
          "/constants/designations",
          formData
        );
        if (response.status === 200) {
          toast.success("designation added successfully");
          setData((preVal) => [...preVal, response.data]);
          setIsOpen(false);
        } else {
          console.log(response);
          toast.error("error while added designation");
        }
      } catch (error) {
        console.log(error.response);
        toast.error("error while adding designation");
      }
    },
    [data]
  );

  const updateDesignation = useCallback(
    async (id, formData) => {
      try {
        console.log("run");
        let response = await NewAxiosInstance.put(
          "/constants/designations/" + id,
          formData
        );
        if (response.status === 200) {
          toast.success("designation updated successfully");
          let newArray = data.map((ele) => {
            if (ele._id === id) return response.data;
            else return ele;
          });
          setData(newArray);
          setIsOpen(false);
        } else {
          console.log(response);
          toast.error("error while updateing designation");
        }
      } catch (error) {
        console.log(error);
        toast.error("error while updating designation");
      }
    },
    [data]
  );

  useEffect(() => {
    getDesignations();
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: "name",
        header: "Designation",
      },
    ],
    []
  );
  const handleDelete = useCallback(
    async (id) => {
      try {
        let response = await NewAxiosInstance.delete(
          "/constants/designations/" + id
        );
        if (response.status === 204) {
          let newArray = data.filter((ele) => ele._id != id);
          setData(newArray);
          return { success: true, message: "designation deleted successfully" };
        } else
          return {
            success: false,
            message: "some error occured while deleting",
          };
      } catch (error) {
        console.log(error.response);
        return { success: false, message: "server error occured" };
      }
    },
    [data]
  );
  return (
    <Card>
      {isDeleteModalOpen && (
        <DeleteModal2
          setInfo={setDeleteInfo}
          show={isDeleteModalOpen}
          info={deleteInfo}
          callback={handleDelete}
          setShow={setDeleteModalOpen}
        />
      )}
      {isOpen && (
        <AddNew
          show={isOpen}
          setShow={setIsOpen}
          addNew={addDesignation}
          data={updateData}
          setData={setUpdateData}
          update={updateDesignation}
        />
      )}
      <Card.Body>
        <div class="tab-pane">
          <h4>List All Designations</h4>
          <p class="card-title-desc" style={{ textAlign: "right" }}>
            <button
              class="btn btn-primary text-right"
              onClick={() => setIsOpen(true)}
            >
              Add New Designation
            </button>
          </p>

          <MaterialReactTable
            columns={columns}
            data={data || []}
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
                    setUpdateData(row.original);
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
                      message: `Do you really want to delete ${row.original.name}
                              this cannot be undone`,
                      header: "Delete Designation",
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
      </Card.Body>
    </Card>
  );
}
