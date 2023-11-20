import { Modal } from "react-bootstrap";
import MaterialReactTable from "material-react-table";
import { useCallback, useMemo, useState } from "react";
import { AxiosInstance } from "../../../common-components/axiosInstance";
import { toast } from "react-toastify";

export default function LanguageModal({getLanguages, show, setShow, language }) {
    const [updateData,setUpdateData] = useState(null)
const handleSubmit = useCallback(async (id,data)=>{
  if(!data) return
  let res = await AxiosInstance.put("/languages/"+id, data)
  if(res.status ===204){
    toast.success("language updaate successfull")
    setShow(false)
    setUpdateData(null)
    getLanguages()
  }else{

  }
  
})
  const columns = useMemo(
    () => [
      {
        accessorKey: "key",
        header: "key",
        enableEditing:false
      },
      {
        accessorKey: "value",
        header: "value",
      },
    ],
    []
  );
  let array = useMemo(() => Object.keys(language?.language), []);

  const [tableData, setTableData] = useState(()=>array.map((ele) => {
    return {
      key: ele,
      value: language.language[ele] || "",
    };
  }))

  const handleSaveCell = (row,cell, value) => {
    
    tableData[cell.row.index][cell.column.id] = value;
   
   
    setUpdateData(preVal=>({...preVal,[row.original.key]:value}))
    setTableData([...tableData]);
  };

  return (
    <Modal size="lg" show={show} onHide={() => setShow(false)}>
      <Modal.Body>
        <MaterialReactTable
          columns={columns}
          data={tableData}
          enableColumnActions={false}
          enableColumnFilters={false}
          enableSorting={false}
          enableTopToolbar={false}
          editingMode="cell"
        enableEditing
        muiTableHeadCellProps={{
          sx: {
            border: '1px solid rgba(81, 81, 81, 1)',
          },
        }}
        muiTableBodyCellProps={{
          sx: {
            border: '1px solid rgba(81, 81, 81, 1)',
          },
        }}
        muiTableBodyCellEditTextFieldProps={({ row,cell }) => ({
        //onBlur is more efficient, but could use onChange instead
        onBlur: (event) => {
          handleSaveCell(row,cell, event.target.value);

        },
      })}
      renderBottomToolbarCustomActions={()=>(
        <div className="textAlign-right">
            <button onClick={()=>handleSubmit(language._id,updateData)} className="btn btn-success">Save</button>
        </div>
      )}
        />
      </Modal.Body>
    </Modal>
  );
}
