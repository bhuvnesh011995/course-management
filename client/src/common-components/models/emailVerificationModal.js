import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { CommonJoditEditor } from "../CommonJoditEditor";
import { AxiosInstance } from "../axiosInstance";

export const EmailVerfificationModal = ({ isOpen, setIsOpen, userData }) => {
  const [mailValue, setMailValue] = useState(
    `
      <p >Congratulations! Your account has been successfully registered. Please confirm your email address by clicking the link below.</p>\n
      <p>We may need to send you critical information about our service, and it is important that we have an accurate email address.</p>\n    \n
      <a href="http://localhost:3000/" class="verification-btn">Confirm email address</a><br>\n
      <span>login with your email and password given below.</span>
      <span> : ${userData.password}</span>
      <p><strong>Tonga</strong> <br>\n
      Support Team\n
      </p>\n\n \n
    `
  );
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
      mailData["mailValue"] = mailValue;
      const { data } = await AxiosInstance.get("/mail/sendEmail", {
        params: mailData,
      });
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
                  value={"Verify Your Account"}
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
