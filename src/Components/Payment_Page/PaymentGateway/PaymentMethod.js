import React from "react";
import "./PaymentMethod.css";

const PaymentMethod = (props) => {
  return (
    <div className="payement-method">
      <img className="image" src={props.img} alt="" width={props.width} height="auto" />
    </div>
  );
};

export default PaymentMethod;
