/*
<==================how can you use this component and necessory things to work this component========>

must unmount modal to clear delete info to prevent memory leak not just make "show" false

callback must return a success and message in object form and success can be truthy or falsey value

must pass "show" which is boolean value to show modal

pass a "setShow" which handle the value of "show"

"info" is the object which contain the delete,information eg:- {
  id:(anything which you want to use in callback, it will be passed to callback as argument),
  message:(delete message to represent what you are going to delete),
  header:(modal header to show what kind how thing will be deleted)
}

if callback response is success true or false a toast will appear with response messagge
*/



import { useCallback, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { toast } from "react-toastify";

export default function DeleteModal2({callback,info,setInfo,show,setShow}) {
    const [ready,setReady]= useState(false)
    useEffect(()=>{
return ()=>{
    if(ready) setInfo({})
    else setReady(true)
}
    },[])
    const handleDelete = useCallback(async()=>{
        let res = info?.id && await callback(info?.id)
        if(res.success){
            toast.success(res.message??"delete successfull")
            setShow(false)
        }else{
            toast.error(res.message)
        }
    },[info])

    return (
        <div>
          <Modal show={show} onHide={()=>setShow(false)}>
            <Modal.Header closeButton>
              <Modal.Title>
                <h5 className="modal-title">Delete {" " + info?.Header}</h5>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="col-12 fv-plugins-icon-container">
                <label className="form-label">{info?.message}</label>
              </div>
              <Modal.Footer>
                <div className="row">
                  <div className="col-12 text-center">
                    <button
                      type="submit"
                      onClick={handleDelete}
                      className="btn btn-danger me-sm-3 me-1"
                    >
                      Delete
                    </button>
                    <button
                      type="reset"
                      className="btn btn-label-secondary"
                      onClick={()=>setShow(false)}
                    >
                      Discard
                    </button>
                  </div>
                </div>
              </Modal.Footer>
            </Modal.Body>
          </Modal>
        </div>
      );
};
