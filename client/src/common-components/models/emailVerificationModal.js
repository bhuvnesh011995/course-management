import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { CommonQuillTextEditor } from "../commonQuillTextEditor";

export const EmailVerfificationModal = ({ isOpen, setIsOpen }) => {
  return (
    <div>
      <Modal show={isOpen} onHide={setIsOpen}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h5 className="modal-title" id="viewUserModalLabel">
              Send Verification Email
            </h5>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="To : jhone@123"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Subject : Verify Email Address"
              />
            </div>
            {/* <div className="mb-3">
              <form method="post">
                <textarea
                  id="open-source-plugins"
                  defaultValue={
                    '                                <p>Congratulations! Your account has been successfully registered. Please confirm your email address by clicking the link below.</p>\n                                <p>We may need to send you critical information about our service, and it is important that we have an accurate email address.</p>\n                               \n                                <a href="#" style="font-family: \'Helvetica Neue\',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; color: #fff; text-decoration: none; line-height: 2em; font-weight: bold; text-align: center; cursor: pointer; display: inline-block; border-radius: 5px; text-transform: capitalize; background-color: #34c38f; margin: 0; border-color: #34c38f; border-style: solid; border-width: 8px 16px;">Confirm email address</a>\n                                <p><strong>Tonga</strong> <br>\n                                    Support Team\n                                </p>\n\n                                \n                            '
                  }
                />
              </form>
            </div> */}
            <div className="mb-3">
              <CommonQuillTextEditor />
              {/* <CommonFroalaTextEditor /> */}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button type="button" className="btn btn-success">
            Send
          </button>
          <button type="button" className="btn btn-secondary">
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
