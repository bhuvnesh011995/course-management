import { useCallback, useEffect, useState } from "react";

import MaterialReactTable from "material-react-table";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import AddNew from "./AddNew";
import { Link } from "react-router-dom";
import { AxiosInstance } from "../../../common-components/axiosInstance";
import { toast } from "react-toastify";
import LanguageModal from "./LanguageModal";
import { useMemo } from "react";

export default function MultiLanguage() {
    const [isOpen,setIsOpen]= useState(false)
    const [data,setData] = useState([])
    const [updateData,setUpdataData] = useState(null)
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
    const getLanguages = useCallback(async ()=>{
      try {
        let res = await AxiosInstance.get("/languages")
      if(res.status===200){
        setData(res.data)
      }else{
        toast.error("error while fetching")
        setData([])
        console.log(res)
      }
      } catch (error) {
        toast.error("error while fetcing")
        console.log(error.response)
      }
      
    },[])
    useEffect(()=>{
      getLanguages()
    },[])

    return(
        <div id="layout-wrapper">
            {isOpen && <AddNew data={updateData} setData={setUpdataData}  show={isOpen} getLanguages={getLanguages} setShow={setIsOpen}/>}
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0 font-size-18">Language Management</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to={"/"}>Dashboard</Link>
                      </li>
                      <li className="breadcrumb-item active">
                        Language Management
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="card">
                  <div className="card-body p-3">
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                      <div className="row w-50"></div>
                      <button
                        className="btn btn-primary me-2"
                        onClick={() => setIsOpen(true)}
                      >
                        <i className="bx bx-plus me-1 fw-semibold align-middle" />
                        Add New Language
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-4">
              <div className="col-md-12">
                <div className="card ">
                  <div className="card-header justify-content-between">
                    <div className="card-title">Language List </div>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
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
              onClick={() =>{
                setLanguage(row.original)
                setShowLngModal(true)
              }}
              className="btn btn-icon btn-sm btn-warning rounded-pill"
            >
              <i className="mdi mdi-eye"></i>
            </button>
            <button
                onClick={() => {
                  setUpdataData({_id:row.original._id,name:row.original.name,code:row.original.code})
                  setIsOpen(true)
                }}
                className="btn btn-icon btn-sm btn-info rounded-pill"
              >
                <i className="bx bxs-edit-alt" />
              </button>
              <button
                onClick={async () =>{
                  try{
                    let response = await AxiosInstance.delete("/languages/"+row.original._id)
                    if(response.status===204){
                      toast.success("language deleted successfully")
                      getLanguages()
                    }else{
                      console.log(response)
                      toast.error("error occured while deleting language")
                    }
                  }catch(error){
                    toast.error('error occured while deleting language')
                    console.log(error.response)
                  }
                }}
                className="btn btn-icon btn-sm btn-danger rounded-pill"
              >
                <i className="bx bxs-trash" />
              </button>
                 </div>
             )}
 /> 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

    </div>
    )
};
