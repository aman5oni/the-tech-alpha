import React from "react";
import SendMessage from "../../components/sendMessage";
import "./style.css";

const FaqPage = () => {
  return (
    <div className="faq-page-container">
      <div className="faq-page-jumbotron">
        <div className="faq-page-jumbotron-header">FAQs</div>
        <div className="faq-page-jumbotron-breadcrumbs-container">
          <div className="faq-page-jumbotron-breadcrumbs-inactive">HOME</div>
          <div className="faq-page-jumbotron-breadcrumbs-active">
            &nbsp; &nbsp;/ &nbsp;FAQs
          </div>
        </div>
      </div>
      <SendMessage />
    </div>
  );
};

export default FaqPage;
