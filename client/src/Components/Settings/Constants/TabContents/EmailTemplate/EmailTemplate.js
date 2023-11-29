import { useCallback, useEffect, useMemo, useState } from "react";
import AddNew from "./AddNew";
import { Card } from "react-bootstrap";
import MaterialReactTable from "material-react-table";
import { toast } from "react-toastify";
import DeleteModal2 from "../../../../../common-components/models/DeleteModal2";
import { emailTemplateColumnHeaders } from "../../../../../Constants/table.constants";
import { CommonDataTable } from "../../../../../common-components/CommonDataTable";
import { useAuth } from "../../../../../context/authContext";

export default function EmailTemplate() {
  const { user, NewAxiosInstance } = useAuth();
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteInfo, setDeleteInfo] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const [updateData, setUpdateData] = useState();

  const tableColumns = [
    { accessorKey: "name", header: "Name" },
    { accessorKey: "emailType", header: "Email Type" },
    { accessorKey: "subject", header: "Subject" },
  ];

  const getEmailTemplates = useCallback(async () => {
    try {
      let response = await NewAxiosInstance.get("/constants/emailtemplate");
      if (!response) toast.error("server error");
      if (response.status === 200) {
        setData(response.data);
      } else toast.error("error while fetching data");
    } catch (error) {
      console.log(error.response);
      toast.error("error while fetching");
    }
  }, []);
  const addEmailTemplate = useCallback(
    async (formData) => {
      try {
        let response = await NewAxiosInstance.post(
          "/constants/emailtemplate",
          formData
        );
        if (response.status === 200) {
          toast.success("Email Template added successfully");
          setData((preVal) => [...preVal, response.data]);
          setIsOpen(false);
        } else {
          console.log(response);
          toast.error("error while added Email Template");
        }
      } catch (error) {
        console.log(error.response);
        toast.error("error while adding Email Template");
      }
    },
    [data]
  );

  const updateEmailTemplate = useCallback(
    async (id, formData) => {
      try {
        console.log("run");
        let response = await NewAxiosInstance.put(
          "/constants/emailtemplate/" + id,
          formData
        );
        if (response.status === 200) {
          toast.success("Email Template updated successfully");
          let newArray = data.map((ele) => {
            if (ele._id === id) return response.data;
            else return ele;
          });
          setData(newArray);
          setIsOpen(false);
        } else {
          console.log(response);
          toast.error("error while updateing Email Template");
        }
      } catch (error) {
        console.log(error);
        toast.error("error while updating Email Template");
      }
    },
    [data]
  );

  useEffect(() => {
    getEmailTemplates();
  }, []);

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
        let response = await NewAxiosInstance.delete(
          "/constants/emailtemplate/" + id
        );
        if (response.status === 204) {
          let newArray = data.filter((ele) => ele._id != id);
          setData(newArray);
          return {
            success: true,
            message: "Email Template deleted successfully",
          };
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

  const showModal = (data, type, index) => {
    setUpdateData(data);
    if (type == "delete") {
      setDeleteInfo({
        id: data._id,
        message: `Do you really want to delete ${data.name} email template. 
                this cannot be undone`,
        header: "Delete Email Template",
      });
      setDeleteModalOpen(true);
    }
    if (type != "delete") setIsOpen(true);
  };

  const selectThisTemplate = async (template) => {
    try {
      const updateUserSelectedTemplate = await NewAxiosInstance.post(
        "/users/selectedTemplate",
        template
      );
      if (updateUserSelectedTemplate.status == 200) {
        if (template == "leadPayment") {
          user.userData["leadPaymentTemplate"] = template._id;
        } else if (template == "leadConfirmed") {
          user.userData["leadConfirmedTemplate"] = template._id;
        }
        toast.success(updateUserSelectedTemplate.data.message);
      } else {
        toast.error("something went wrong");
      }
    } catch (err) {
      console.error(err);
    }
  };

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
          addNew={addEmailTemplate}
          data={updateData}
          setData={setUpdateData}
          update={updateEmailTemplate}
        />
      )}
      <Card.Body>
        <div class="tab-pane">
          <h4>List All Email Templates</h4>
          <p class="card-title-desc" style={{ textAlign: "right" }}>
            <button
              class="btn btn-primary text-right"
              onClick={() => showModal()}
            >
              Add New Email Template
            </button>
          </p>

          <MaterialReactTable
            columns={tableColumns}
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
              <div className="hstack  fs-1">
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
                      message: `Do you really want to delete ${row.original.name} email template. 
                              this cannot be undone`,
                      header: "Delete Email Template",
                    });
                    setDeleteModalOpen(true);
                  }}
                  className="btn btn-icon btn-sm btn-danger rounded-pill"
                >
                  <i className="bx bxs-trash" />
                </button>
                <button
                  onClick={() => {
                    selectThisTemplate(row.original);
                  }}
                  className="btn btn-icon rounded-pill"
                >
                  <i className="mdi mdi-check-circle align-middle text-success" />
                </button>
              </div>
            )}
          />
          {/* <CommonDataTable
            tableHeaders={emailTemplateColumnHeaders}
            data={data}
            actionButtons
            editButton
            deleteButton
            callback={(data, type, index) => showModal(data, type, index)}
          /> */}
        </div>
      </Card.Body>
    </Card>
  );
}
