import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../../../context/authContext";

export const TradeLevelModal = ({
  setIsOpen,
  isOpen,
  callback,
  tradeData,
  viewTradeLevel,
}) => {
  const { NewAxiosInstance } = useAuth();
  const handleClose = () => {
    setIsOpen(false);
    reset({});
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (tradeData) reset(tradeData);
  }, []);

  const saveTradeLevel = async (tradeLevel) => {
    try {
      toast.dismiss();
      const newTradeLevel = await NewAxiosInstance.post(
        "/trades/saveTradeLevel",
        tradeLevel
      );
      if (newTradeLevel.status == 200) {
        callback(newTradeLevel.data.data);
        toast.success(newTradeLevel.data.message);
      } else {
        toast.error("something went wrong");
      }
      handleClose();
    } catch (err) {
      toast.error("something went wrong");
      console.error(err);
    }
  };

  const editTradeLevel = async (tradeData) => {
    try {
      toast.dismiss();
      const updatedTradeLevel = await NewAxiosInstance.post(
        "/trades/updateTradeLevel",
        tradeData
      );
      if (updatedTradeLevel.status == 200) {
        callback(tradeData);
        toast.success(updatedTradeLevel.data.message);
      } else {
        toast.error("something went wrong");
      }
      handleClose();
    } catch (err) {
      toast.error("something went wrong");
      console.error(err);
    }
  };

  return (
    <Modal show={isOpen} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {viewTradeLevel ? (
            <h5 className="modal-title">View Trade Level</h5>
          ) : (
            <h5 className="modal-title">
              {tradeData ? "Update " : "Add New "} Trade Level
            </h5>
          )}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form
          onSubmit={handleSubmit(tradeData ? editTradeLevel : saveTradeLevel)}
        >
          <div className="mb-3">
            <label className="form-label">Trade Level :</label>
            <input
              type="text"
              className="form-control"
              {...register("tradeLevel", {
                required: "This field is required",
              })}
              placeholder="Enter Trade Level"
              disabled={viewTradeLevel}
            />
            <span className="text-danger">
              {errors?.tradeLevel && errors?.tradeLevel.message}
            </span>
          </div>

          <Modal.Footer>
            <div>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleClose}
              >
                Cancel
              </button>
              {!viewTradeLevel && (
                <button type="submit" className="btn btn-primary">
                  {tradeData ? "Update" : "Save"}
                </button>
              )}
            </div>
          </Modal.Footer>
        </form>
      </Modal.Body>
    </Modal>
  );
};
