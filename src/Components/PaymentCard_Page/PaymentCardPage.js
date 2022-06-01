import React, { useState } from "react";
import "./PaymentCardPage.css";
import Title from "../Title/Title";
import DeliveryStatus from "../DeliveryStatus/DeliveryStatus";
import { HiLockClosed } from "react-icons/hi";
import { BsArrowRight } from "react-icons/bs";
import PaymentMethod from "../Payment_Page/PaymentGateway/PaymentMethod";
import MasterCard from "../../assets/payment3.svg";
import VisaCard from "../../assets/visa.svg";
import { InputGroup, FormControl, Form } from "react-bootstrap";

const PaymentCard_Page = () => {
  const [isShowForm, setIsShowForm] = useState(true);
  const [isShowNewCardForm, setIsSHowNewCardForm] = useState(false);
  const radioButtonHandler = (e) => {
    console.log(e.target.value);
    switch (e.target.value) {
      case "add-new-card":
        setIsSHowNewCardForm(true);
        setIsShowForm(false);
        break;
      case "master-card":
        setIsSHowNewCardForm(false);
        setIsShowForm(false);
        break;
      case "re-enter-card-number":
        setIsSHowNewCardForm(false);
        setIsShowForm(true);
        break;
      case "visa-card":
        setIsSHowNewCardForm(false);
        setIsShowForm(false);
        break;
      default:
        console.log("error from Switch Case");
        break;
    }
  };

  return (
    <>
      <div className="staticContainer">
        <div className="static-header-container">
          <div className="static-Title">
            <Title
              title="Choose a Payment method"
              sup="You will not be charged,untill you review this order on the next page"
            />
          </div>
          <div className="static-status-delivery">
            <DeliveryStatus />
          </div>
        </div>
        <div className="payment-card-container">
          <div className="select-payment-card-container">
            <div className="select-payment-card-option">
              <div className="radio-payment-container">
                <div className="form-check">
                  <input
                    className="form-check-input radio-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    value="re-enter-card-number"
                    defaultChecked
                    onChange={radioButtonHandler}
                  />
                  &nbsp; &nbsp;
                  <label
                    className="form-check-label label"
                    htmlFor="flexRadioDefault1"
                  >
                    For your security, please re-enter your card number.
                  </label>
                </div>
              </div>

              {isShowForm && (
                <div className="inputfield-payment-container">
                  <form>
                    <div className="input-field">
                      <label htmlFor="basic-url" className="form-label">
                        Visa ... 3446
                      </label>
                      <div className="input-group mb-3">
                        <input
                          type="number"
                          className="form-control"
                          aria-label="Amount (to the nearest dollar)"
                        />
                        <span className="input-group-text">
                          <HiLockClosed />
                        </span>
                      </div>
                    </div>
                    <div className="payment-button-container">
                      <div className="confirm-btn">
                        <button type="submit" className="btn btn-danger">
                          Confirm &nbsp;&nbsp;
                          <BsArrowRight className="arrow-icon-confirm-button" />
                        </button>
                      </div>
                      <div className="delete-btn">
                        <button type="button" className="btn btn-danger">
                          Delete
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              )}
              <hr />
            </div>
            {/*second */}
            <div className="select-payment-card-option">
              <div className="radio-payment-container">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    value="master-card"
                    onChange={radioButtonHandler}
                  />
                  &nbsp; &nbsp;
                  <label
                    className="form-check-label card-label"
                    htmlFor="flexRadioDefault2"
                  >
                    <div className="card">
                      <PaymentMethod img={MasterCard} />
                    </div>
                    <div className="card-details">
                      <h6>Master Card ... 7161</h6>
                      <h6>Exp: 10/2021</h6>
                      <h6>Glenn Cross</h6>
                    </div>
                  </label>
                </div>
              </div>
              <div className="inputfield-payment-container"></div>
              <hr className="hr-element" />
            </div>
            {/*3rd */}
            <div className="select-payment-card-option">
              <div className="radio-payment-container">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault3"
                    value="visa-card"
                    onChange={radioButtonHandler}
                  />
                  &nbsp; &nbsp;
                  <label
                    className="form-check-label card-label"
                    htmlFor="flexRadioDefault3"
                  >
                    <div className="card">
                      <PaymentMethod img={VisaCard} />
                    </div>
                    <div className="card-details">
                      <h6>Visa Card ... 7161</h6>
                      <h6>Exp: 10/2021</h6>
                      <h6>Glenn Cross</h6>
                    </div>
                  </label>
                </div>
              </div>
              <div className="inputfield-payment-container"></div>
              <hr className="hr-element" />
            </div>
            {/*4th */}
            <div className="select-payment-card-option">
              <div className="radio-payment-container">
                <div className="form-check">
                  <input
                    className="form-check-input add-new-card-radio"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault4"
                    value="add-new-card"
                    onChange={radioButtonHandler}
                  />
                  &nbsp; &nbsp;
                  <label
                    className="form-check-label add-new-card"
                    htmlFor="flexRadioDefault4"
                  >
                    <h6>Add a new card</h6>
                  </label>
                </div>
              </div>
              {isShowNewCardForm && (
                <div className="inputfield-payment-container">
                  <div className="add-another-card-details">
                    <div className="container">
                      <div className="row">
                        <div className="col">
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Name on Card *</Form.Label>
                            <Form.Control
                              type="text"
                              required
                              className="card-input common-card-input card-name-input"
                            />
                          </Form.Group>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <Form.Label>Card Number *</Form.Label>
                          <InputGroup className="mb-3">
                            <FormControl
                              type="number"
                              required
                              className="card-input card-number common-card-input"
                            />
                            <InputGroup.Text>
                              <HiLockClosed />
                            </InputGroup.Text>
                          </InputGroup>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <Form.Label>Exp. Date *</Form.Label>
                          <Form.Select className="common-card-input select-card-input">
                            <option value="01">01</option>
                            <option value="02">02</option>
                            <option value="03">03</option>
                          </Form.Select>
                        </div>
                        <div className="col">
                          <Form.Label style={{ color: "transparent" }}>
                            -
                          </Form.Label>
                          <Form.Select className="common-card-input select-card-input">
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                          </Form.Select>
                        </div>
                        <div className="col">
                          <Form.Label>Security Code *</Form.Label>
                          <InputGroup className="mb-3">
                            <FormControl
                              type="number"
                              required
                              className="card-input security-code common-card-input"
                            />
                            <InputGroup.Text>
                              <HiLockClosed />
                            </InputGroup.Text>
                          </InputGroup>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <hr className="hr-element" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentCard_Page;
