import { Modal } from "react-bootstrap";
import MaterialReactTable from "material-react-table";
import { useCallback, useEffect, useMemo, useState } from "react";
import { AxiosInstance } from "../../../common-components/axiosInstance";
import { toast } from "react-toastify";

export default function LanguageModal({getLanguages, show, setShow, language }) {
    const [updateData,setUpdateData] = useState(null)
    const [languageData,setLanguageData] = useState({})
    const [ready,setReady] = useState(false)
const handleSubmit = useCallback(async (id,data)=>{
  if(!data) return
  try {
  let res = await AxiosInstance.put("/languages/"+id, data)
  if(res.status ===204){
    toast.success("language updaate successfull")
    setUpdateData(null)
  }else{
    toast.error("error occured while fetching")
  }
  }catch (error) {
    console.log(error)
    toast.error("error occured while fetching")
  }
  
},[])
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

  const getLanguageData = useCallback(async id=>{
    try {
      let response = await AxiosInstance.get("/languages/"+id)
      if(response.status===200){
        let array = Object.keys(response.data||{}).map((ele) =>({
          key: ele,
          value: response.data[ele] || "",
        }))
        setTableData(array)
      }
    } catch (error) {
      toast.error("error while fetching language")
    }
  },[])
 useEffect(()=>{
  if(ready) getLanguageData(language._id)
  else setReady(true)
 },[ready])

  const [tableData, setTableData] = useState([])

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
