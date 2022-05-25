import React from "react";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import "./PaymentPage.css";
import PaymentGateway from "./PaymentGateway/PaymentGateway";

const PaymentPage = () => {
  return (
    <div className="paymentPage">
      <ShoppingCart />
      <PaymentGateway />
    </div>
  );
};

export default PaymentPage;
