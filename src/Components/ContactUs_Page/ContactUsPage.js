import React, { useState } from "react";
import "./ContactUsPage.css";
import WpSvg from "../../assets/whatsapp.svg";
import PhoneSvg from "../../assets/phone.svg";
import EMailSvg from "../../assets/mail.svg";
import { Form } from "react-bootstrap";
import { AiOutlineArrowRight } from "react-icons/ai";
import 'react-phone-input-2/lib/style.css'
import PhoneInput from "react-phone-input-2";

const ContactUsPage = () => {
  const [select, setSelect] = useState("");

  const handleChange = (e) => {
    setSelect(e.no);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(select);
  };

  return (
    <div className="contactus-full-container">
      {/*stay connected image container */}
      <div className="stay-connected-image-container">
        <h1>Stay Connected</h1>
      </div>
      {/*contactus-heading-types-container */}
      <div className="contactus-heading-types-container">
        {/*heading */}
        <div className="contactus-heading">
          <h1>Contact Us</h1>
          <p>Customer Care team available to 10am - 10 pm</p>
        </div>
        {/*contactus-types-container*/}
        <div className="contactus-types-container">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="contact-type-svg">
                  <img src={WpSvg} alt="" />
                </div>
                <div className="contact-type-details">
                  <h2>WhatsApp</h2>
                  <p>Chat with us and share media files by adding</p>
                  <p className="contact-n">00971 529291013</p>
                  <p>
                    We will reply to you in <sup>30-45 minutes</sup>
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="contact-type-svg">
                  <img src={PhoneSvg} alt="" />
                </div>
                <div className="contact-type-details">
                  <h2>Phone Call</h2>
                  <p>
                    UAE toll-free phone number <sup>800 686277</sup>
                  </p>
                  <p>
                    We will answer your call <sup>30 - 45 minutes</sup>
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="contact-type-svg">
                  <img src={EMailSvg} alt="" />
                </div>
                <div className="contact-type-details">
                  <h2>E-mail</h2>
                  <p className="contact-emailid">customercare@heraf.com</p>
                  <p className="contact-emailid">support@heraf.com</p>
                  <p>
                    We will reply to you in <sup>12 - 24 hours</sup>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*contactus-title-form-havequestion-container*/}
      <div className="contactus-title-form-havequestion-container">
        <div className="contactus-title">
          <h1>Send us an E-mail</h1>
        </div>
        <div className="contactus-form-container">
          <Form className="form" onSubmit={handleSubmit}>
            <div className="container">
              <div className="row">
                <div className="col">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="contact-us-label">
                      Type of Inquiry *
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Select Types"
                      className="contact-us-control"
                    />
                  </Form.Group>
                </div>
                <div className="col">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="contact-us-label">
                      Email address *
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Type email address"
                      className="contact-us-control"
                    />
                  </Form.Group>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="contact-us-label">
                      First Name *
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="First Name"
                      className="contact-us-control"
                    />
                  </Form.Group>
                </div>
                <div className="col">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="contact-us-label">
                      Last Name *
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Last Name"
                      className="contact-us-control"
                    />
                  </Form.Group>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <Form.Label className="contact-us-label">
                    Mobile Number *
                  </Form.Label>
                  <PhoneInput country={"us"} className="contact-us-control" />
                 
                </div>
                <div className="col">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="contact-us-label">
                      Order ID *
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Type your order id here"
                      className="contact-us-control"
                    />
                  </Form.Group>
                </div>
              </div>
            </div>
            <div className="submit-contatctus-form-button-container">
              <button type="submit" className="btn btn-danger">
                Submit <AiOutlineArrowRight className="arrow-icon-contact-us" />
              </button>
            </div>
          </Form>
        </div>

        <div className="have-question-container">
          <h3>Have a question? Well, we've got some answers.</h3>
          <div className="have-question-btn-container">
            <button type="button" className="btn btn-danger">
              Danger
            </button>
            Go to Help Center
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
