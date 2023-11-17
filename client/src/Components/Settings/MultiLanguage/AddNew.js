import { useCallback, useState } from "react";
import { Modal } from "react-bootstrap";
import { AxiosInstance } from "../../../common-components/axiosInstance";

export default function AddNew({show,setShow,getLanguages}) {
    const [language,setLanguage] = useState({})

    const handleSubmit = useCallback(async (data)=>{
        
        let res = await AxiosInstance(data)
        
    })
    return(
        <Modal size="sm" show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Language</Modal.Title>
          </Modal.Header>
    
          <Modal.Body>
            <div class="row">
                <div class="col-md-12 mb-2">
                    <label for="">Language Name</label>
                    <input
                    value={language.name}
                    onChange={e=>setLanguage(preVal=>({...preVal,name:e.target.value}))}
                    type="text" class="form-control" placeholder=""/>
                </div>
                <div class="col-md-12 mb-2">
                    <label for="">Language Code</label>
                    <input
                    value={language.code}
                    onChange={e=>setLanguage(preVal=>({...preVal,code:e.target.value}))}
                    type="text" class="form-control" placeholder=""/>
                </div>
                <div class="col-md-12">
                    <button onClick={()=>handleSubmit(language)} class="btn btn-info float-end">Add Language</button>
                </div>
            </div>
          </Modal.Body>
        </Modal>
    )
};
