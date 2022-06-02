import React from "react";
import "./ContactUsPage.css";
import WpSvg from "../../assets/whatsapp.svg";
import PhoneSvg from "../../assets/phone.svg";
import EMailSvg from "../../assets/mail.svg";

const ContactUsPage = () => {
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
    </div>
  );
};

export default ContactUsPage;
