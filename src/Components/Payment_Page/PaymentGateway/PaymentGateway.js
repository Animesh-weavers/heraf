import React from "react";
import "./PaymentGateway.css";
import { BiCartAlt } from "react-icons/bi";
import { BsCreditCard2Back } from "react-icons/bs";
import { AiFillCar } from "react-icons/ai";
import PaymentMethod from "./PaymentMethod";
import Discover from "../../../assets/discover.svg";
import Maestro from "../../../assets/Maestro.png";
import MasterCard from "../../../assets/payment3.svg";
import Visa from "../../../assets/visa.svg";
import Payment6 from "../../../assets/payment6.svg";
import Paypal from "../../../assets/paypal-logo-preview.png";

const PaymentGateway = () => {
  return (
    <div className="paymentGateway">
      <div className="delivery-status">
        <div className="status current-status">
          <BiCartAlt className="icon" />
        </div>
        &nbsp;
        <hr />
        &nbsp;
        <div className="status">
          <AiFillCar className="icon" />
        </div>
        &nbsp;
        <hr />
        &nbsp;
        <div className="status">
          <BsCreditCard2Back className="icon" />
        </div>
      </div>
      <div className="payment">
        <div className="payment-title">
          <h4>Payment Method</h4>
        </div>
        <div className="methods">
          <div className="container">
            {/*first row */}
            <div className="row">
              <div className="col">
                <PaymentMethod img={Discover} width="100%" />
              </div>
              <div className="col">
                <PaymentMethod img={Maestro} width="100%" />
              </div>
              <div className="col">
                <PaymentMethod img={MasterCard} width="100%" />
              </div>
            </div>
            {/*second row */}
            <div className="row">
              <div className="col">
                <PaymentMethod img={Visa} width="100%" />
              </div>
              <div className="col">
                <PaymentMethod img={Payment6} width="100%" />
              </div>
              <div className="col">
                <PaymentMethod img={Paypal} width="100%" />
              </div>
            </div>
          </div>
        </div>
        <div className="toal-money-container">
          <div className="sub-money-container">
            <div className="amount-details">
              <p>Item(s) Total:</p>
            </div>
            <div className="amount">
              <h5>US$ 37.00</h5>
            </div>
          </div>
          <div className="sub-money-container">
            <div className="amount-details">
              <p>Shop Discount:</p>
            </div>
            <div className="amount">
              <h5>-US$ 9.25</h5>
            </div>
          </div>
          <hr />
          <div className="sub-money-container">
            <div className="amount-details">
              <p>Subtotal:</p>
            </div>
            <div className="amount">
              <h5>US$ 27.75</h5>
            </div>
          </div>
          <div className="sub-money-container">
            <div className="amount-details">
              <p>
                Delivery(To<sub>India</sub>):
              </p>
            </div>
            <div className="amount">
              <h5>US$ 200.00</h5>
            </div>
          </div>
          <hr />
          <div className="sub-money-container">
            <div className="amount-details">
              <p>Total (1 Item)</p>
            </div>
            <div className="amount">
              <h5>US$ 275.75</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentGateway;
