import React from "react";
import FlexBanner from "../../components/flexBanner";
import "./style.css";

const AboutPage = () => {
  return (
    <div className="about-page-container">
      <div className="about-page-jumbotron">
        <div className="about-page-jumbotron-header">ABOUT</div>
        <div className="about-page-jumbotron-breadcrumbs-container">
          <div className="about-page-jumbotron-breadcrumbs-inactive">HOME</div>
          <div className="about-page-jumbotron-breadcrumbs-active">
            &nbsp; &nbsp;/ &nbsp;ABOUT
          </div>
        </div>
      </div>
      <FlexBanner />
    </div>
  );
};

export default AboutPage;
