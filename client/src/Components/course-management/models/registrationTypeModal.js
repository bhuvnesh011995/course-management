import { Modal } from "react-bootstrap";
import { AxiosInstance } from "../../../common-components/axiosInstance";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export const RegistrationTypeModal = ({
  isOpen,
  setIsOpen,
  callback,
  registrationData,
  viewModal,
}) => {
  const [tradeLevels, setTradeLevels] = useState([]);
  const [selectAllTradeLevel, setSelectAllTradeLevel] = useState([]);

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    getTradeLevels();
  }, []);

  useEffect(() => {
    if (registrationData) {
      getRegistration();
    }
  }, [registrationData]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const saveRegistrationData = async (registrationData) => {
    try {
      const { data } = await AxiosInstance.post(
        "/registrationType/addRegistrationType",
        registrationData
      );
      const selectedTrades = tradeLevels.filter((e) =>
        data.tradeLevelIds.includes(e._id)
      );
      data["tradeLevelIds"] = selectedTrades.map((e) => {
        return e.tradeLevel + " ,";
      });
      callback(data);
      handleClose();
    } catch (err) {
      console.error(err);
    }
  };

  const getTradeLevels = async () => {
    try {
      const { data } = await AxiosInstance.get("/trades/getTradeLevels");
      setTradeLevels(data.allTradeLevels);
    } catch (err) {
      console.error(err);
    }
  };

  const showDropDown = () => {
    const dropDownElement = document.getElementById("onDropDown");
    if (dropDownElement.classList.contains("on"))
      dropDownElement.classList.remove("on");
    else dropDownElement.classList.add("on");
  };

  const checkAll = () => {
    const newArray = [];
    if (selectAllTradeLevel.length == tradeLevels.length) {
      setSelectAllTradeLevel([...newArray]);
      setValue("tradeLevelIds", []);
    } else
      tradeLevels.map((e) => {
        if (selectAllTradeLevel.includes(e._id)) {
          return;
        } else {
          selectAllTradeLevel.push(e._id);
          setValue("tradeLevelIds", selectAllTradeLevel);
          setSelectAllTradeLevel([...selectAllTradeLevel]);
        }
      });
  };

  const changeSelected = (levelId) => {
    if (selectAllTradeLevel.includes(levelId)) {
      const filteredTradeLevels = selectAllTradeLevel.filter(
        (e) => e != levelId
      );
      setSelectAllTradeLevel([...filteredTradeLevels]);
    } else if (!selectAllTradeLevel.includes(levelId)) {
      setSelectAllTradeLevel((old) => [...old, levelId]);
    }
  };

  const getRegistration = async () => {
    try {
      const { data } = await AxiosInstance.get(
        "/registrationType/getRegistrationType",
        { params: { registrationData } }
      );
      reset(data[0]);
    } catch (err) {
      console.error(err);
    }
  };

  const editRegistrationType = async (newData) => {
    try {
      const { data } = await AxiosInstance.post(
        "/registrationType/updateRegistration",
        newData
      );
      const selectedTrades = tradeLevels.filter((e) =>
        newData.tradeLevelIds.includes(e._id)
      );
      newData["tradeLevelIds"] = selectedTrades.map((e) => {
        return e.tradeLevel + " ,";
      });
      callback(newData);
      handleClose();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Modal show={isOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h5 className="modal-title" id="addRegistrationTypeModalLabel">
              {viewModal ? "View" : registrationData ? "Update" : "Add New"}{" "}
              Registration Type
            </h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={handleSubmit(
              registrationData ? editRegistrationType : saveRegistrationData
            )}
          >
            <div className="mb-3">
              <label className="form-label">Registration Type:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter registration type"
                disabled={viewModal}
                {...register("registrationName", { required: "" })}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Registration Code:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter registration Code"
                disabled={viewModal}
                {...register("registrationCode")}
              />
            </div>
            <div className="mb-3">
              <div className="form-label">
                Trade Level
                <span className="text-danger">*</span>
              </div>
              <div className="dropdown" id="onDropDown">
                <label onClick={showDropDown} className="dropdown-label">
                  {viewModal ? "View" : "Select"}
                </label>

                <div className="dropdown-list">
                  {!viewModal && (
                    <a
                      className="dropdown-option border-bottom text-blue cursor-pointer"
                      onClick={checkAll}
                    >
                      Check All
                    </a>
                  )}
                  {tradeLevels.map((e, index) => (
                    <label className="dropdown-option">
                      <input
                        type="checkbox"
                        value={e._id}
                        onClick={() => changeSelected(e._id)}
                        checked={selectAllTradeLevel.includes(e._id)}
                        {...register("tradeLevelIds")}
                        disabled={viewModal}
                      />
                      {e.tradeLevel}
                    </label>
                  ))}{" "}
                </div>
              </div>
            </div>
            <Modal.Header>
              <button
                type="button"
                onClick={handleClose}
                className="btn btn-secondary"
              >
                Cancel
              </button>
              {!viewModal && (
                <button type="submit" className="btn btn-primary">
                  {registrationData ? "Update" : "Save"}
                </button>
              )}
            </Modal.Header>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};
