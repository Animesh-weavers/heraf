import React, { useState } from "react";
import "./ShoppingCart.css";
import { InputGroup, FormControl } from "react-bootstrap";
import Paper from "../../../assets/paper.svg";
import { Link } from "react-router-dom";
import ProductImg from "../../../assets/img_big.jpg";
import Title from "../../Title/Title";

const ShoppingCart = () => {
  const [quan, setQuan] = useState(1);

  const decreaseHandler = (e) => {
    e.preventDefault();
    if (quan <= 1) {
      setQuan(1);
      return;
    }
    setQuan(quan - 1);
  };
  const increaseHandler = (e) => {
    e.preventDefault();
    setQuan(quan + 1);
  };
  const changeInputFieldHandler = (e) => {
    setQuan(e.target.value);
  };

  return (
    <div className="shoppingCart">
      {/* <h1 className="title">
        Shopping Cart<sup>(1 item in your basket)</sup>
      </h1> */}
      <Title title="Shopping Cart" sup="1 item in your basket" />
      <div className="box">
        <div className="details-box">
          <div className="img-text-box">
            <img src={ProductImg} alt="" className="product-image" />
            <div className="text">
              <h4>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
              </h4>
              <h5>FINISH: STERLING SILVER</h5>
              <h5>LENGTH:18 INCHES</h5>

              <Link to="" className="edit">
                Edit
              </Link>

              <p>Personalisation: Not requested on this term</p>
              <div className="button">
                <div className="btn-group">
                  <Link to="" className="btn btn-primary button">
                    Save for Later
                  </Link>
                  <Link to="" className="btn btn-primary button">
                    Remove
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="textarea">
            <textarea
              className="form-control"
              aria-label="With textarea"
              placeholder="Add a note to The Authentic Corner(optional)"
            ></textarea>
          </div>
        </div>
        {/*money box */}
        <div className="money-box">
          <div className="increase-decrease-inputfield-dollar">
            <form className="inputfield">
              <button className="decrease" onClick={decreaseHandler}>
                -
              </button>
              <input
                type="number"
                value={quan}
                onChange={changeInputFieldHandler}
              />
              <button className="increase" onClick={increaseHandler}>
                +
              </button>
            </form>
            <div className="dollar">
              <Link to="" className="contact-shop">
                Contact Shop
              </Link>
              <h2>US$13.95</h2>
              <p>
                <s>US$ 37.00</s>
              </p>
              <p>Sales ends in 18:35:29</p>
            </div>
          </div>
          <div className="coupon-codes">
            <h6>Apply shop coupon codes</h6>
            <InputGroup className="form-control">
              <FormControl
                type="text"
                placeholder="Promo Code"
                className="input"
              />
              <div className="search-icon">
                <img src={Paper} alt="" />
              </div>
            </InputGroup>
            <InputGroup className="form-control">
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option value="selected">
                  US $200.00 (04-15 Oct. Standard Delivery)
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </InputGroup>
            <div className="para">
              <p>
                Estimated Delivery: <span className="date">04-21 Oct. </span>
                <span className="country">from United States</span>
              </p>
            </div>
            <h6>Heraf offsets carbon emissions from every delivery</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
