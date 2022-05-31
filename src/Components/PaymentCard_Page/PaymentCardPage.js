import React from "react";
import "./PaymentCardPage.css";
import Title from "../Title/Title";
import DeliveryStatus from "../DeliveryStatus/DeliveryStatus";
import { HiLockClosed } from "react-icons/hi";
import { BsArrowRight } from "react-icons/bs";
const PaymentCard_Page = () => {
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
                  />
                  &nbsp; &nbsp;
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    For your security, please re-enter your card number.
                  </label>
                </div>
              </div>
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
              <hr className="hr-element" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentCard_Page;
