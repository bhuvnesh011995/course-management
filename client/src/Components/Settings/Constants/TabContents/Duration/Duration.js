import { useCallback, useEffect, useMemo, useState } from "react";
import AddNew from "./AddNew";
import { Card } from "react-bootstrap";
import MaterialReactTable from "material-react-table";
import { toast } from "react-toastify";
import DeleteModal2 from "../../../../../common-components/models/DeleteModal2";
import useCustomUseEffect from "../../../../../common-components/CustomUseEffect";
import { useAuth } from "../../../../../context/authContext";

export default function Duration() {
  const { NewAxiosInstance } = useAuth();
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteInfo, setDeleteInfo] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const [updateData, setUpdateData] = useState();

  const getDurations = useCallback(async () => {
    try {
      console.log("run");
      let response = await NewAxiosInstance.get("/constants/duration");
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
          "/constants/duration",
          formData
        );
        if (response.status === 200) {
          toast.success("duration added successfully");
          setData((preVal) => [...preVal, response.data]);
          setIsOpen(false);
        } else {
          console.log(response);
          toast.error("error while added duration");
        }
      } catch (error) {
        console.log(error.response);
        toast.error("error while adding duration");
      }
    },
    [data]
  );

  const updateDesignation = useCallback(
    async (id, formData) => {
      try {
        let response = await NewAxiosInstance.put(
          "/constants/duration/" + id,
          formData
        );
        if (response.status === 200) {
          toast.success("duration updated successfully");
          let newArray = data.map((ele) => {
            if (ele._id === id) return response.data;
            else return ele;
          });
          setData(newArray);
          setIsOpen(false);
        } else {
          console.log(response);
          toast.error("error while updateing duration");
        }
      } catch (error) {
        console.log(error);
        toast.error("error while updating duration");
      }
    },
    [data]
  );

  useCustomUseEffect(getDurations);

  const columns = useMemo(
    () => [
      {
        accessorKey: "name",
        header: "Name",
      },
      {
        accessorKey: "value",
        header: "Value",
      },
    ],
    []
  );
  const handleDelete = useCallback(
    async (id) => {
      try {
        let response = await NewAxiosInstance.delete(
          "/constants/duration/" + id
        );
        if (response.status === 204) {
          let newArray = data.filter((ele) => ele._id != id);
          setData(newArray);
          return { success: true, message: "duration deleted successfully" };
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
          <h4>List All Duration</h4>
          <p class="card-title-desc" style={{ textAlign: "right" }}>
            <button
              class="btn btn-primary text-right"
              onClick={() => setIsOpen(true)}
            >
              Add New Duration
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
                      header: "Delete Duration",
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
