import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { AxiosInstance } from "../../../common-components/axiosInstance";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { numberWithoutPrecedingZero } from "../../../common-components/validations";

export const TradeTypeModal = ({
  setIsOpen,
  isOpen,
  callback,
  tradeData,
  viewTradeType,
}) => {
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

  const saveTradeType = async (tradeType) => {
    try {
      toast.dismiss();
      const newTradeType = await AxiosInstance.post(
        "/trades/saveTradeType",
        tradeType
      );
      if (newTradeType.status == 200) {
        callback(newTradeType.data.data);
        toast.success(newTradeType.data.message);
      } else {
        toast.error("something went wrong");
      }
      handleClose();
    } catch (err) {
      toast.error("something went wrong");
      console.error(err);
    }
  };

  const editTradeType = async (data) => {
    try {
      toast.dismiss();
      const response = await AxiosInstance.put(
        "/tradeType/"+data._id,
        {seat:data.seat}
      );
      if (response.status == 200) {
        callback(response.data);
        toast.success("trade Type Updated Successfull");
      } else {
        toast.error("something went wrong ");
      }
      handleClose();
    } catch (err) {
      toast.error("something went wrong ");
      console.error(err);
    }
  };

  return (
    <Modal show={isOpen} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          <h5 className="modal-title">
            {viewTradeType ? "View" : tradeData ? "Update " : "Add New "} Trade
            Type
          </h5>
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
              disabled
            />
            <span className="text-danger">
              {errors?.tradeType && errors?.tradeType.message}
            </span>
          </div>
          <div className="mb-3">
            <label className="form-label">Type Code :</label>
            <input
              type="text"
              className="form-control"
              {...register("typeCode", {
                required: "This field is required",
              })}
              placeholder="Enter Type Code"
              disabled
            />
            <span className="text-danger">
              {errors?.typeCode && errors?.typeCode.message}
            </span>
          </div>
          <div className="mb-3">
            <label className="form-label">Seat :</label>
            <input
              type="text"
              className="form-control"
              {...register("seat", {
                required: "This field is required",
                pattern:numberWithoutPrecedingZero
              })}
              placeholder="Enter Number of Seat"
              
            />
            <span className="text-danger">
              {errors?.seat && errors?.seat.message}
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
