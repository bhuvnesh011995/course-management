import { useCallback, useMemo, useState } from "react";
import AddNew from "./AddNew";
import { Card } from "react-bootstrap";
import MaterialReactTable from "material-react-table";
import { toast } from "react-toastify";
import DeleteModal2 from "../../../../../common-components/models/DeleteModal2";
import useCustomUseEffect from "../../../../../common-components/CustomUseEffect";
import { useAuth } from "../../../../../context/authContext";

export default function TypeCode() {
  const { NewAxiosInstance, user } = useAuth();
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteInfo, setDeleteInfo] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const [updateData, setUpdateData] = useState();

  const getTradeTypes = useCallback(async () => {
    try {
      let response = await NewAxiosInstance.get("/constants/tradeTypeCode");
      if (!response) toast.error("server error");
      if (response.status === 200) {
        setData(response.data);
      } else toast.error("error while fetching data");
    } catch (error) {
      console.error(error.response);
      toast.error("error while fetching");
    }
  }, []);
  const addTradeType = useCallback(
    async (formData) => {
      try {
        let response = await NewAxiosInstance.post(
          "/constants/tradeTypeCode",
          formData,
        );
        if (response.status === 200) {
          toast.success("Trade Type added successfully");
          setData((preVal) => [...preVal, response.data]);
          setIsOpen(false);
        } else {
          toast.error("error while added Trade Type");
        }
      } catch (error) {
        console.error(error.response);
        toast.error("error while adding Trade Type");
      }
    },
    [data],
  );

  const updateTradeType = useCallback(
    async (id, formData) => {
      try {
        let response = await NewAxiosInstance.put(
          "/constants/tradeTypeCode/" + id,
          formData,
        );
        if (response.status === 200) {
          toast.success("Trade Type updated successfully");
          let newArray = data.map((ele) => {
            if (ele._id === id) return response.data;
            else return ele;
          });
          setData(newArray);
          setIsOpen(false);
        } else {
          toast.error("error while updateing Trade Type");
        }
      } catch (error) {
        console.error(error);
        toast.error("error while updating Trade Type");
      }
    },
    [data],
  );

  useCustomUseEffect(getTradeTypes);

  const columns = useMemo(
    () => [
      {
        accessorKey: "name",
        header: "Name",
      },
    ],
    [],
  );
  const handleDelete = useCallback(
    async (id) => {
      try {
        let response = await NewAxiosInstance.delete(
          "/constants/tradeTypeCode/" + id,
        );
        if (response.status === 204) {
          let newArray = data.filter((ele) => ele._id != id);
          setData(newArray);
          return { success: true, message: "Trade Type deleted successfully" };
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
    [data],
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
          addNew={addTradeType}
          data={updateData}
          setData={setUpdateData}
          update={updateTradeType}
        />
      )}
      <Card.Body>
        <div class='tab-pane'>
          <h4>List All Trade Types</h4>
          <p class='card-title-desc' style={{ textAlign: "right" }}>
            {user.userData?.roleData?.constants?.create && (
              <button
                class='btn btn-primary text-right'
                onClick={() => setIsOpen(true)}
              >
                Add New Trade Type
              </button>
            )}
          </p>

          <MaterialReactTable
            columns={columns}
            data={data || []}
            enableColumnActions={false}
            enableColumnFilters={false}
            enableSorting={false}
            enableTopToolbar={false}
            enableRowActions
            positionActionsColumn='last'
            enableRowNumbers
            rowNumberMode='static'
            renderRowActions={({ row, table }) => (
              <div className='hstack gap-2 fs-1'>
                {user.userData?.roleData?.constants?.write && (
                  <button
                    onClick={() => {
                      setUpdateData(row.original);
                      setIsOpen(true);
                    }}
                    className='btn btn-icon btn-sm btn-info rounded-pill'
                  >
                    <i className='bx bxs-edit-alt' />
                  </button>
                )}
                {user.userData?.roleData?.constants?.delete && (
                  <button
                    onClick={async () => {
                      setDeleteInfo({
                        id: row.original._id,
                        message: `Do you really want to delete ${row.original.name}
                              this cannot be undone`,
                        header: "Delete Trade Type",
                      });
                      setDeleteModalOpen(true);
                    }}
                    className='btn btn-icon btn-sm btn-danger rounded-pill'
                  >
                    <i className='bx bxs-trash' />
                  </button>
                )}
              </div>
            )}
          />
        </div>
      </Card.Body>
    </Card>
  );
}
