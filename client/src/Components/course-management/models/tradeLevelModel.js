import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { AxiosInstance } from "../../../common-components/axiosInstance";
import { useEffect } from "react";

export const TradeLevelModal = ({
  setIsOpen,
  isOpen,
  callback,
  tradeData,
  viewTradeLevel,
}) => {
  const handleClose = () => {
    setIsOpen(false);
  };

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (tradeData) reset(tradeData);
  }, []);

  const saveTradeLevel = async (tradeLevel) => {
    try {
      const { data } = await AxiosInstance.post(
        "/trades/saveTradeLevel",
        tradeLevel
      );
      callback(data);
      handleClose();
    } catch (err) {
      console.error(err);
    }
  };

  const editTradeLevel = async (tradeData) => {
    try {
      const { data } = await AxiosInstance.post(
        "/trades/updateTradeLevel",
        tradeData
      );
      callback(tradeData);
      handleClose();
    } catch (err) {
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
