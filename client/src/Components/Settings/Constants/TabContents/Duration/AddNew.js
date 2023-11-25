
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";


export default function AddNew({data,setData,addNew,
  update,show,setShow}) {
    const [ready,setReady] = useState(false)
    
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm();
    useEffect(()=>{
      if(data){
        reset(data)
      }
      return ()=>{
        if(ready){
          setData(null)
        }else setReady(true)
      }
    },[ready])

    return (
        <Modal size="lg" show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>{data?"Update Designation":"Add New Designation"}</Modal.Title>
          </Modal.Header>
    <form onSubmit={handleSubmit(formData=>{
      data?._id ? update(data._id,formData) : addNew(formData)
    })}>
          <Modal.Body>
          <label>Duration Title</label>
                <input
                {...register("name",{required:"this is required field"})}
                  type="text"
                  class="form-control mt-3"
                  placeholder="Enter Duration Title"
                />
                {errors.name && <span style={{color:"red"}}>{errors.name.message}</span>}

                <label>Value</label>
                <input
                {...register("value",{required:"this is required field"})}
                  type="number"
                  class="form-control mt-3"
                  placeholder="Enter Value"
                />
                {errors.value && <span style={{color:"red"}}>{errors.value.message}</span>}
          </Modal.Body>
          <Modal.Footer>
          <button onClick={()=>{setShow(false)}} type="button" class="btn btn-dander">
                  Cancel
                </button>
                <button type="submit" class="btn btn-success">
                  Save
                </button>
          </Modal.Footer>
          </form>
        </Modal>
      );
};
