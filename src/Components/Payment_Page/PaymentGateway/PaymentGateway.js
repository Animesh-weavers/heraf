import React from "react";
import "./PaymentGateway.css";
import { BiCartAlt } from "react-icons/bi";
import { BsCreditCard2Back } from "react-icons/bs";
import { AiFillCar, AiOutlineArrowRight } from "react-icons/ai";
import PaymentMethod from "./PaymentMethod";
import Discover from "../../../assets/discover.svg";
import Maestro from "../../../assets/Maestro.png";
import MasterCard from "../../../assets/payment3.svg";
import Visa from "../../../assets/visa.svg";
import Payment6 from "../../../assets/payment6.svg";
import Paypal from "../../../assets/paypal-logo-preview.png";
import { Link } from "react-router-dom";
import DeliveryStatus from "../../DeliveryStatus/DeliveryStatus";

const PaymentGateway = () => {
  return (
    <div className="paymentGateway">
      {/* <div className="delivery-status"> */}
        <DeliveryStatus />
      {/* </div> */}
      <div className="payment">
        <div className="payment-title">
          <h4>Payment Method</h4>
        </div>
        <div className="methods">
          <div className="container">
            {/*first row */}
            <div className="row">
              <div className="col">
                <PaymentMethod img={Discover} />
              </div>
              <div className="col">
                <PaymentMethod img={Maestro} />
              </div>
              <div className="col">
                <PaymentMethod img={MasterCard} />
              </div>
            </div>
            {/*second row */}
            <div className="row">
              <div className="col">
                <PaymentMethod img={Visa} />
              </div>
              <div className="col">
                <PaymentMethod img={Payment6} />
              </div>
              <div className="col">
                <PaymentMethod img={Paypal} />
              </div>
            </div>
          </div>
        </div>
        <div className="toal-money-container">
          <div className="sub-money-container">
            <div className="amount-details">
              <h6>Item(s) Total:</h6>
            </div>
            <div className="amount">
              <h5>US$ 37.00</h5>
            </div>
          </div>
          <div className="sub-money-container">
            <div className="amount-details">
              <h6>Shop Discount:</h6>
            </div>
            <div className="amount">
              <h5>-US$ 9.25</h5>
            </div>
          </div>
          <hr />
          <div className="sub-money-container">
            <div className="amount-details">
              <h6>Subtotal:</h6>
            </div>
            <div className="amount">
              <h5>US$ 27.75</h5>
            </div>
          </div>
          <div className="sub-money-container">
            <div className="amount-details">
              <h6>
                Delivery(To<sub>India</sub>):
              </h6>
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
            <div className="total-amount">
              <h5>US$ 275.75</h5>
            </div>
          </div>
        </div>
        <div className="button-container">
          <button type="button" className="btn btn-danger">
            Proceed To Checkout <AiOutlineArrowRight />
          </button>
        </div>
        <div className="additional">
          <pre>
            <p className="first">Local taxes included (where applicable)</p>
            <p className="second">
              *Additional duties and taxes{" "}
              <Link to="">
                <span>may apply</span>
              </Link>
            </p>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default PaymentGateway;
