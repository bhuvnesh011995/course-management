import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { CommonJoditEditor } from "../CommonJoditEditor";
import { toast } from "react-toastify";
import { useAuth } from "../../context/authContext";

export const EmailVerfificationModal = ({
  isOpen,
  setIsOpen,
  userData,
  mailText,
  mailHeader,
  mailSubject,
  afterSendMailCallback,
}) => {
  const { NewAxiosInstance } = useAuth();
  const [mailValue, setMailValue] = useState(mailText);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    reset(userData);
  }, []);

  const sendEmail = async (mailData) => {
    try {
      toast.dismiss();
      mailData["mailValue"] = mailValue;
      const sendedMail = await NewAxiosInstance.get("/mail/sendEmail", {
        params: mailData,
      });
      if (sendedMail.status == 200) {
        toast.success(sendedMail.data.message);
        if (afterSendMailCallback) afterSendMailCallback();
      } else toast.error("something went wrong !");
      handleClose();
    } catch (err) {
      toast.error("something went wrong !");
      console.error(err);
    }
  };

  const handleClose = () => {
    reset();
    setIsOpen(false);
  };

  return (
    <div>
      <Modal show={isOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h5 className="modal-title" id="viewUserModalLabel">
              Send {mailHeader} Email
            </h5>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>
            <form onSubmit={handleSubmit(sendEmail)}>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="To : jhone@123"
                  {...register("email")}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  {...register("subject")}
                />
              </div>
              <div className="mb-3">
                <CommonJoditEditor
                  editorValue={mailValue}
                  setEditorValue={setMailValue}
                />
              </div>
              <Modal.Footer>
                <div style={{ marginTop: "50px" }}>
                  <button type="submit" className="mx-1 btn btn-success">
                    Send
                  </button>
                  <button
                    type="button"
                    onClick={handleClose}
                    className="mx-1 btn btn-secondary"
                  >
                    Close
                  </button>
                </div>
              </Modal.Footer>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};
