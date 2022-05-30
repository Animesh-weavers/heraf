import React from "react";
import { Modal, CloseButton, Form, FormControl } from "react-bootstrap";
import Title from "../Title/Title";
import "./Modal.css";
import SelectCountryWithFlag from "./SelectCountryWithFlag";

const NewAddressModal = (props) => {
  return (
    <>
      <Modal
        {...props}
        dialogClassName="modal-90w custom-dialog"
        aria-labelledby="example-custom-modal-styling-title"
        centered
      >
        <div className="main-modal-container">
          <div className="modal-head">
            <CloseButton onClick={props.onHide} className="cancel-icon" />
          </div>
          <div className="modal-title">
            <Title
              title="Enter Your Delivery Address"
              sup="Address Data & Types of Delivery"
            />
          </div>
          <div className="form-container">
            <Form className="container">
              <div className="row">
                <div className="col">
                  <Form.Label className="labels">First Name *</Form.Label>
                  <FormControl
                    placeholder="Glenn"
                    aria-label="FirstName"
                    aria-describedby="basic-addon1"
                    className="controls"
                    required
                  />
                </div>
                <div className="col">
                  <Form.Label className="labels">Last Name *</Form.Label>
                  <FormControl
                    placeholder="Cross"
                    aria-label="LastName"
                    aria-describedby="basic-addon1"
                    className="controls"
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <Form.Label className="labels">Address *</Form.Label>
                  <FormControl
                    placeholder="1391 Single Street"
                    aria-label="Address"
                    aria-describedby="basic-addon1"
                    className="controls"
                    required
                  />
                </div>
                <div className="col">
                  <Form.Label className="labels">City *</Form.Label>
                  <FormControl
                    placeholder="Chicago"
                    aria-label="City"
                    aria-describedby="basic-addon1"
                    className="controls"
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <Form.Label className="labels">Postal/Zip Code *</Form.Label>
                  <FormControl
                    aria-label="Postal/Zip Code"
                    placeholder="MA 02-129"
                    type="number"
                    className="controls"
                    required
                  />
                </div>
                <div className="col">
                  <Form.Label className="labels">Contact No *</Form.Label>
                  <FormControl
                    aria-label="Postal/Zip Code"
                    placeholder="+5 781-644-3627"
                    type="number"
                    className="controls"
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <SelectCountryWithFlag labels="labels" controls="controls" />
                </div>
                <div className="col">
                  <Form.Label className="labels">E-mail ID *</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="gleen_cross@heraf.com"
                    className="controls"
                    required
                  />
                </div>
              </div>
              <div className="form-button-container">
                <button type="button" className="btn btn-secondary cancel-button">
                  cancel
                </button>

                <button type="submit" className="btn btn-secondary save-button">
                  Save
                </button>
              </div>
            </Form>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default NewAddressModal;
