import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { AxiosInstance } from "../../../common-components/axiosInstance";
import { useEffect } from "react";

export const TradeTypeModal = ({
  setIsOpen,
  isOpen,
  callback,
  tradeData,
  viewTradeType,
}) => {
  const handleClose = () => {
    setIsOpen(false);
  };
  console.log(isOpen);
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

  const saveTradeType = async (tradeType) => {
    try {
      const { data } = await AxiosInstance.post(
        "/trades/saveTradeType",
        tradeType
      );
      callback(data);
      handleClose();
    } catch (err) {
      console.error(err);
    }
  };

  const editTradeType = async (tradeData) => {
    try {
      const { data } = await AxiosInstance.post(
        "/trades/updateTradeType",
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
          {viewTradeType ? (
            <h5 className="modal-title">View Trade Type</h5>
          ) : (
            <h5 className="modal-title">
              {tradeData ? "Update " : "Add New "} Trade Type
            </h5>
          )}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form
          onSubmit={handleSubmit(tradeData ? editTradeType : saveTradeType)}
        >
          <div className="mb-3">
            <label className="form-label">Trade Type :</label>
            <input
              type="text"
              className="form-control"
              {...register("tradeType", {
                required: "This field is required",
              })}
              placeholder="Enter Trade Type"
              disabled={viewTradeType}
            />
            <span className="text-danger">
              {errors?.tradeType && errors?.tradeType.message}
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
              {!viewTradeType && (
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
