import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";

export default function AddNew({
  data,
  setData,
  addNew,
  update,
  show,
  setShow,
}) {
  const [ready, setReady] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    if (data) {
      reset(data);
    }
    return () => {
      if (ready) {
        setData(null);
      } else setReady(true);
    };
  }, [ready]);

  return (
    <Modal size="lg" show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>
          {data ? "Update Position" : "Add New Position"}
        </Modal.Title>
      </Modal.Header>
      <form
        onSubmit={handleSubmit((formData) => {
          data?._id ? update(data._id, formData) : addNew(formData);
        })}
      >
        <Modal.Body>
          <label>Position Name</label>
          <input
            {...register("name", { required: "this is required field" })}
            type="text"
            class="form-control"
            placeholder="Enter Position"
          />
          {errors.name && (
            <span style={{ color: "red" }}>{errors.name.message}</span>
          )}
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={() => {
              setShow(false);
            }}
            type="button"
            class="btn btn-dander"
          >
            Cancel
          </button>
          <button type="submit" class="btn btn-success">
            Save
          </button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}
