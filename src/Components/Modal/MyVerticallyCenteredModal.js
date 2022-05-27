import React from "react";
import { Modal, Button } from "react-bootstrap";
import { ImCross } from "react-icons/im";
import Title from "../Title/Title";
import "./Modal.css";

function MyVerticallyCenteredModal(props) {
  return (
    <>
      <Modal
        show={props.show}
        onHide={props.onHide}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        className="main-modal"
      >
        <Modal.Body>
          <div className="main-modal-container">
            <div className="modal-head">
              <ImCross onClick={props.onHide} className="cancel-icon" />
            </div>
            <div className="modal-title">
              <Title
                title="Enter Your Delivery Address"
                sup="Address Data & Types of Delivery"
              />
            </div>
            <div className="form-container">
              <form className="container">
                <div className="row">
                  <div className="col">1 of 3</div>
                  <div className="col">3 of 3</div>
                </div>
                <div className="row">
                  <div className="col">1 of 3</div>
                  <div className="col">3 of 3</div>
                </div>
                <div className="row">
                  <div className="col">1 of 3</div>
                  <div className="col">3 of 3</div>
                </div>
                <div className="row">
                  <div className="col">1 of 3</div>
                  <div className="col">3 of 3</div>
                </div>
                <div className="form-button-container">
                  <button type="button" className="btn btn-secondary">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MyVerticallyCenteredModal;
