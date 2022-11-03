import React from "react";
import Highlight from "../../components/highlight";
import "./style.css";

const CareerPage = () => {
  return (
    <div className="career-page-container">
      <div className="career-page-jumbotron">
        <div className="career-page-jumbotron-header">CAREER</div>
        <div className="career-page-jumbotron-breadcrumbs-container">
          <div className="career-page-jumbotron-breadcrumbs-inactive">HOME</div>
          <div className="career-page-jumbotron-breadcrumbs-active">
            &nbsp; &nbsp;/ &nbsp;CAREER
          </div>
        </div>
      </div>
      <Highlight />
    </div>
  );
};

export default CareerPage;
