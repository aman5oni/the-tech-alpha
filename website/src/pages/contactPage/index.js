import React from "react";
import CustomerTestimonial from "../../components/customerTestimonial";
import SendMessage from "../../components/sendMessage";
import "./style.css";

const ContactPage = () => {
  return (
    <div className="contact-page-container">
      <div className="contact-page-jumbotron">
        <div className="contact-page-jumbotron-header">CONTACT</div>
        <div className="contact-page-jumbotron-breadcrumbs-container">
          <div className="contact-page-jumbotron-breadcrumbs-inactive">
            HOME
          </div>
          <div className="contact-page-jumbotron-breadcrumbs-active">
            &nbsp; &nbsp;/ &nbsp;CONTACT
          </div>
        </div>
      </div>
      <SendMessage />
      <CustomerTestimonial />
    </div>
  );
};

export default ContactPage;
