import { useCallback, useEffect, useState } from "react";
import Table from "./Table";
import AddNew from "./AddNew";
import { Link } from "react-router-dom";

export default function MultiLanguage() {
    const [isOpen,setIsOpen]= useState(false)
    const [data,setData] = useState([
        {name:"english",
    code:"en",
status:"active"},
{name:"hindi",
    code:"hi",
status:"inactive"}
    ])
    const getLanguages = useCallback(async ()=>{

    },[])
    useEffect(()=>{

    },[])

    return(
        <div id="layout-wrapper">
            {isOpen && <AddNew  show={isOpen} getLanguages={getLanguages} setShow={setIsOpen}/>}
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
                      <Table getLanguages={getLanguages} data={data || []} />
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
