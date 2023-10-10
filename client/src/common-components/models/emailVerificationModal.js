import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { CommonQuillTextEditor } from "../commonQuillTextEditor";
import { useForm } from "react-hook-form";
import axios from "axios";
import { CommonJoditEditor } from "../CommonJoditEditor";

export const EmailVerfificationModal = ({ isOpen, setIsOpen, userData }) => {
  const [mailValue, setMailValue] = useState(
    `
      <p >Congratulations! Your account has been successfully registered. Please confirm your email address by clicking the link below.</p>\n
      <p>We may need to send you critical information about our service, and it is important that we have an accurate email address.</p>\n    \n
      <button class="verification-btn">Confirm email address</button><br>\n
    <p><strong>Tonga</strong> <br>\n
    Support Team\n
    </p>\n\n \n
    `
  );
  const {
    register,
    setValue,
    getValues,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendEmail = async (mailData) => {
    try {
      mailData["mailValue"] = mailValue;
      const { data } = await axios.get(
        "http://localhost:5000/api/mail/sendEmail",
        { params: mailData }
      );
      handleClose();
    } catch (err) {
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
              Send Verification Email
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
                  placeholder="Subject : Verify Email Address"
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
