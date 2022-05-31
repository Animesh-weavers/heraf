import React, { useState } from "react";
import DeliveryStatus from "../DeliveryStatus/DeliveryStatus";
import "./DeliveryPage.css";
import Title from "../Title/Title";
import { AiOutlineArrowRight } from "react-icons/ai";
import NewAddressModal from "../Modal/NewAddressModal";

const DeliveryPage = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  const modalShowHandler = () => {
    setIsShowModal(true);
  };
  const modalCloseHandler = () => {
    setIsShowModal(false);
  };
  return (
    <>
      <NewAddressModal show={isShowModal} onHide={modalCloseHandler} />
      <div className="staticContainer">
        <div className="static-header-container">
          <div className="static-Title">
            <Title
              title="Choose a Delivery Address"
              sup="Address Data & Types of Delivery"
            />
          </div>
          <div className="static-status-delivery">
            <DeliveryStatus />
          </div>
        </div>
        <div className="delivery-address-container">
          <div className="default-address">
            <div className="address-title">
              <h5>Default Address</h5>
            </div>
            <div className="address">
              <h6>Beatric Waddle 1391 Single Street.</h6>
              <h6 className="country">Chicago,MA 02129 USA</h6>
              <h6>+5 781-644-3627</h6>
              <h6>glenn_cross@heraf.com</h6>
            </div>
            <div className="new-address-btn-container">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={modalShowHandler}
              >
                Add New Address
              </button>
            </div>
          </div>
          <div className="dispatch">
            <div className="dispatch-button-container">
              <div className="h4">
                <h5>Dispatch Here</h5>
              </div>
              &nbsp; &nbsp; &nbsp; &nbsp;
              <div className="dispatch-button">
                <button type="button" className="btn btn-danger">
                  <AiOutlineArrowRight />
                </button>
              </div>
            </div>
            <div className="edit-delete-button-container">
              <button type="button" className="btn btn-danger edit">
                Edit
              </button>
              <button type="button" className="btn btn-danger delete">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeliveryPage;
