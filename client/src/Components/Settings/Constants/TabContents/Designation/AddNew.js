import { Modal } from "react-bootstrap";


export default function AddNew({show,setShow}) {

    return (
        <Modal size="lg" show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Designation</Modal.Title>
          </Modal.Header>
    <form>
          <Modal.Body>
          <label>Designation Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Contract type"
                />
          </Modal.Body>
          <Modal.Footer>
          <button onClick={()=>{}} type="button" class="btn btn-dander">
                  Cancel
                </button>
                <button onClick={()=>{}} type="submit" class="btn btn-success">
                  Save
                </button>
          </Modal.Footer>
          </form>
        </Modal>
      );
};
