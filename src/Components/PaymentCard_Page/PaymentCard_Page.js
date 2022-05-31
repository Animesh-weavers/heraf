import React from "react";
import "./PaymentCard_Page.css";
import Title from "../Title/Title";
import DeliveryStatus from "../DeliveryStatus/DeliveryStatus";

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
      </div>
    </>
  );
};

export default PaymentCard_Page;
