import React from "react";
import "./DeliveryStatus.css";
import { BiCartAlt } from "react-icons/bi";
import { BsCreditCard2Back } from "react-icons/bs";
import { AiFillCar } from "react-icons/ai";

const DeliveryStatus = () => {
  return (
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
  );
};

export default DeliveryStatus;
