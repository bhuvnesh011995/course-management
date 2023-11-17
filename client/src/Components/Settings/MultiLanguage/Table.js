
import MaterialReactTable from "material-react-table";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { useMemo, useState } from "react";
import LanguageModal from "./LanguageModal";
import { AxiosInstance } from "../../../common-components/axiosInstance";


export default function Table({data,getLanguages}) {
  const [showLagModal,setShowLngModal] = useState(false)
  const [language,setLanguage] = useState({})

     const columns = useMemo(() => [
     {
         accessorKey: 'name',
         header: 'Name',
       },
       {
           accessorKey: 'code',
           header: 'Code',
         },
         {
             accessorKey: 'status',
             header: 'Status',   
           },
     ],[])


  return (
    <>
      
{showLagModal && <LanguageModal getLanguages={getLanguages} show={showLagModal} setShow={setShowLngModal} language={language} />}
  <MaterialReactTable
 columns={columns}
 data={data}
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
              onClick={() =>{}}
              className="btn btn-icon btn-sm btn-warning rounded-pill"
            >
              <i className="mdi mdi-eye"></i>
            </button>
            <button
                onClick={() => {}}
                className="btn btn-icon btn-sm btn-info rounded-pill"
              >
                <i className="bx bxs-edit-alt" />
              </button>
              <button
                onClick={() =>{}}
                className="btn btn-icon btn-sm btn-danger rounded-pill"
              >
                <i className="bx bxs-trash" />
              </button>
                 </div>
             )}
 /> 
    </>
  );
}
