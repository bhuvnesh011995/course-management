import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import face4 from "../../../assets/images/faces/4.jpg";
import {
  emailPattern,
  namePattern,
  phonePattern,
} from "../../../common-components/validations";
import { useEffect, useState } from "react";
import {
  convertMongooseDate,
  filePath,
} from "../../../common-components/useCommonUsableFunctions";
import { toast } from "react-toastify";
import { useAuth } from "../../../context/authContext";

export const NewTrainerModal = ({
  isOpen,
  setIsOpen,
  trainerData,
  callback,
}) => {
  const { NewAxiosInstance } = useAuth();
  const [imageUrl, setImageUrl] = useState("");
  const [designations, setDesignations] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  useEffect(() => {
    if (trainerData) {
      getTrainer();
    }
    getAllDesignations();
  }, []);

  const getAllDesignations = async () => {
    try {
      const response = await NewAxiosInstance.get("/constants/designations");
      if (response.status == 200) {
        if (response.data?.length) {
          setDesignations(response.data);
        }
      } else {
        toast.error("something went wrong");
      }
    } catch (err) {
      toast.error("something went wrong");
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    reset();
  };

  const addNewTrainer = async (trainerData) => {
    try {
      toast.dismiss();
      const formData = new FormData();
      if (trainerData?.trainerImage.length)
        formData.append("file", trainerData.trainerImage[0]);
      formData.append("trainerData", JSON.stringify(trainerData));
      const { data } = await NewAxiosInstance.post(
        "/trainer/addNewTrainer",
        formData,
      );
      toast.success("New Trainer Added");
      callback(data);
      handleClose();
    } catch (err) {
      toast.error("Error occured");
      console.error(err);
    }
  };

  const updateTrainer = async (trainerData) => {
    try {
      toast.dismiss();
      const formData = new FormData();
      if (trainerData?.trainerImage.length) {
        formData.append("file", trainerData.trainerImage[0]);
        trainerData["deleteImagePath"] = trainerData.trainerImagePath;
      }
      formData.append("trainerData", JSON.stringify(trainerData));
      const updatedTrainer = await NewAxiosInstance.post(
        "/trainer/updateTrainer",
        formData,
      );
      if (updatedTrainer.status == 200) {
        callback(updatedTrainer.data.data);
        toast.success(updatedTrainer.data.message);
      }
      handleClose();
    } catch (err) {
      toast.error("Error occured");
      console.error(err);
    }
  };

  const getTrainer = async () => {
    try {
      const { data } = await NewAxiosInstance.get("/trainer/getTrainer", {
        params: trainerData,
      });
      data.trainerDOB = convertMongooseDate(data.trainerDOB);
      reset(data);
    } catch (err) {
      console.error(err);
    }
  };

  const changeImageUrl = ({ target }) => {
    setImageUrl(URL.createObjectURL(target.files[0]));
  };

  return (
    <div>
      <Modal show={isOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h5 className='modal-title' id='addTrainerModalLabel'>
              {trainerData ? "Update" : "Add"} Trainer
            </h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={handleSubmit(trainerData ? updateTrainer : addNewTrainer)}
          >
            <div className='row'>
              <div className='col-md-6 mb-3'>
                <label className='form-label'>
                  Name <span className='text-danger'>*</span>
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='trainerName'
                  placeholder="Enter trainer's name"
                  {...register("trainerName", {
                    required: "Please Enter Trainer Name",
                    pattern: namePattern,
                  })}
                />
                {errors?.trainerName && (
                  <span className='text-danger'>
                    {errors?.trainerName?.message}
                  </span>
                )}
              </div>
              <div className='col-md-6 mb-3'>
                <label className='form-label'>
                  Email ID <span className='text-danger'>*</span>
                </label>
                <input
                  type='email'
                  className='form-control'
                  id='trainerEmail'
                  placeholder='Enter email'
                  {...register("trainerEmail", {
                    pattern: emailPattern,
                  })}
                />
                {errors?.trainerEmail && (
                  <span className='text-danger'>
                    {errors?.trainerEmail?.message}
                  </span>
                )}
              </div>
              <div className='col-md-6 mb-3'>
                <label className='form-label'>
                  Mobile No. <span className='text-danger'>*</span>
                </label>
                <input
                  type='tel'
                  className='form-control'
                  placeholder='Enter mobile number'
                  {...register("trainerMobile", {
                    pattern: phonePattern,
                  })}
                />
                {errors?.trainerMobile && (
                  <span className='text-danger'>
                    {errors?.trainerMobile?.message}
                  </span>
                )}
              </div>
              <div className='col-md-6 mb-3'>
                <label className='form-label'>
                  DOB (Date of Birth) <span className='text-danger'>*</span>
                </label>
                <input
                  type='date'
                  className='form-control'
                  id='trainerDOB'
                  {...register("trainerDOB")}
                />
              </div>
              <div className='col-md-6 mb-3'>
                <label className='form-label'>
                  Designation <span className='text-danger'>*</span>
                </label>
                <select
                  className='form-select'
                  {...register("trainerDesignation")}
                >
                  <option key={""} value=''>
                    Select Designation
                  </option>
                  {designations.length &&
                    designations.map((e) => (
                      <option
                        key={e._id}
                        value={e._id}
                        selected={e._id == watch("trainerDesignation")}
                      >
                        {e.name}
                      </option>
                    ))}
                </select>
              </div>
              <div className='col-md-6 mb-3'>
                <label>Upload Photo</label> <br />
                <div className='d-flex gap-2'>
                  <label className='custom-file-input form-control'>
                    <span id='trainerFileName'>Upload Photo</span>
                    <input
                      type='file'
                      {...register("trainerImage", {
                        onChange: (e) => changeImageUrl(e),
                      })}
                      accept='image/*'
                    />
                  </label>
                  {watch("trainerImage") && watch("trainerImage")[0]?.name && (
                    <span className='avatar avatar-rounded avatar-md'>
                      {" "}
                      <img
                        src={
                          URL.createObjectURL(watch("trainerImage")[0])
                          // imageUrl.length
                          //   ? imageUrl
                          //   : filePath(watch("trainerImagePath"))
                        }
                        alt=''
                      />{" "}
                    </span>
                  )}
                  {!watch("trainerImage") && trainerData?.trainerImagePath && (
                    <span className='avatar avatar-rounded avatar-md'>
                      {" "}
                      <img
                        src={filePath(trainerData?.trainerImagePath)}
                        alt=''
                      />{" "}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <Modal.Footer>
              <div className='modal-footer'>
                <button
                  type='button'
                  className='btn btn-secondary'
                  onClick={handleClose}
                >
                  Cancel
                </button>
                <button type='submit' className='btn btn-primary'>
                  {trainerData ? "Update" : "Add"} Trainer
                </button>
              </div>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};
