import React from "react";
import "./Modal.css";
import { Modal } from "react-bootstrap";
import SuccessIcon from "../../../assets/icon2.svg";

const ModalSuccess = (props) => {
  return (
    <>
      <Modal
        show={props.show}
        onHide={props.onHide}
        dialogClassName="modal-del-access"
      >
        <div className="modal-body-container">
          <div className="del-success-svg-icon">
            <img src={SuccessIcon} alt="delivery_success_icon" />
          </div>
          <div className="del-success-text">
            <h4>Your order has been placed successfully</h4>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalSuccess;
