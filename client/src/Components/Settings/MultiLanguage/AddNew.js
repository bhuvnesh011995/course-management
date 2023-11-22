import { useCallback, useState } from "react";
import { Modal } from "react-bootstrap";
import { AxiosInstance } from "../../../common-components/axiosInstance";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

export default function AddNew({ data, setData, show, setShow, getLanguages }) {
  const [ready, setReady] = useState(false);
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [updateData, setUpdateData] = useState(null);
  const onSubmit = useCallback(
    async (languageData, updateData) => {
      try {
        toast.dismiss();
        if (data) {
          if (!updateData) return;
          let res = await AxiosInstance.put(
            "/languages/language/" + data._id,
            updateData
          );

          if (res.status === 204) {
            toast.success("language update successfull");
            setShow(false);
            getLanguages();
          } else {
            toast.error("error occured while updating");
          }
        } else {
          console.log("in post");
          let res = await AxiosInstance.post("/languages", languageData);
          if (res.status === 201) {
            toast.success("language added successfully");
            getLanguages();
            setShow(false);
          } else {
            toast.error("error occured");
            console.log(res);
          }
        }
      } catch (error) {
        toast.error("error occured");
        console.log(error.response);
      }
    },
    [data]
  );

  useEffect(() => {
    if (data) reset(data);

    return () => {
      if (ready) {
        setUpdateData(null);
        setData(null);
      } else setReady(true);
    };
  }, []);

  return (
    <Modal size="sm" show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>{data ? "Update" : "Add New"} Language</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form
          onSubmit={handleSubmit((data) => onSubmit(data, updateData))}
          class="row"
        >
          <div class="col-md-12 mb-2">
            <label for="">Language Name</label>
            <input
              {...register("name", {
                required: "name is requried",
                onChange: (e) =>
                  setUpdateData((preVal) => ({
                    ...preVal,
                    name: e.target.value,
                  })),
              })}
              type="text"
              class="form-control"
              placeholder=""
            />
            {errors.name && (
              <span style={{ color: "red" }}>{errors.name.message}</span>
            )}
          </div>
          <div class="col-md-12 mb-2">
            <label for="">Language Code</label>
            <input
              {...register("code", {
                required: "code is required field",
                onChange: (e) =>
                  setUpdateData((preVal) => ({
                    ...preVal,
                    code: e.target.value,
                  })),
              })}
              type="text"
              class="form-control"
              placeholder=""
            />
            {errors.code && (
              <span style={{ color: "red" }}>{errors.code.message}</span>
            )}
          </div>
          <div class="col-md-12">
            <button type="submit" class="btn btn-info float-end">
              {data ? "update" : "Add"} Language
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}
