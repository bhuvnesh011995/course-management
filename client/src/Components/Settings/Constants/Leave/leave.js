import { useCallback, useMemo, useState } from "react";
import { useAuth } from "../../../../context/authContext";
import { toast } from "react-toastify";
import useCustomUseEffect from "../../../../common-components/CustomUseEffect";
import { Card } from "react-bootstrap";
import DeleteModal2 from "../../../../common-components/models/DeleteModal2";
import AddNew from "../TabContents/Designation/AddNew";
import MaterialReactTable from "material-react-table";

export default function Leave() {
  const { NewAxiosInstance } = useAuth();
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteInfo, setDeleteInfo] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const [updateData, setUpdateData] = useState();

  const getLeaves = useCallback(async () => {
    try {
      let response = await NewAxiosInstance.get("/constants/leave");
      if (!response) toast.error("server error");
      if (response.status === 200) {
        setData(response.data);
      } else toast.error("error while fetching data");
    } catch (error) {
      console.error(error.response);
      toast.error("error while fetching");
    }
  }, []);
  const addLeave = useCallback(
    async (formData) => {
      try {
        let response = await NewAxiosInstance.post(
          "/constants/leave",
          formData
        );
        if (response.status === 200) {
          toast.success("leave added successfully");
          setData((preVal) => [...preVal, response.data]);
          setIsOpen(false);
        } else {
          toast.error("error while added leave");
        }
      } catch (error) {
        console.error(error.response);
        toast.error("error while adding leave");
      }
    },
    [data]
  );

  const updateLeave = useCallback(
    async (id, formData) => {
      try {
        let response = await NewAxiosInstance.put(
          "/constants/leave/" + id,
          formData
        );
        if (response.status === 200) {
          toast.success("leave updated successfully");
          let newArray = data.map((ele) => {
            if (ele._id === id) return response.data;
            else return ele;
          });
          setData(newArray);
          setIsOpen(false);
        } else {
          toast.error("error while updateing leave");
        }
      } catch (error) {
        console.error(error);
        toast.error("error while updating leave");
      }
    },
    [data]
  );

  useCustomUseEffect(getLeaves);

  const columns = useMemo(
    () => [
      {
        accessorKey: "name",
        header: "Name",
      },
    ],
    []
  );
  const handleDelete = useCallback(
    async (id) => {
      try {
        let response = await NewAxiosInstance.delete("/constants/leave/" + id);
        if (response.status === 204) {
          let newArray = data.filter((ele) => ele._id != id);
          setData(newArray);
          return { success: true, message: "leave deleted successfully" };
        } else
          return {
            success: false,
            message: response.data.message,
          };
      } catch (error) {
        console.error(error.response);
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
          addNew={addLeave}
          data={updateData}
          setData={setUpdateData}
          update={updateLeave}
        />
      )}
      <Card.Body>
        <div class="tab-pane">
          <h4>List All Leave</h4>
          <p class="card-title-desc" style={{ textAlign: "right" }}>
            <button
              class="btn btn-primary text-right"
              onClick={() => setIsOpen(true)}
            >
              Add New Leave
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
            leaveActionsColumn="last"
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
                      header: "Delete Leave",
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
