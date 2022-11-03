import React from "react";
import OurLatestNews from "../../components/ourLatestNews";
import "./style.css";

const GallaryPage = () => {
  return (
    <div className="gallary-page-container">
      <div className="gallary-page-jumbotron">
        <div className="gallary-page-jumbotron-header">GALLARY</div>
        <div className="gallary-page-jumbotron-breadcrumbs-container">
          <div className="gallary-page-jumbotron-breadcrumbs-inactive">
            HOME
          </div>
          <div className="gallary-page-jumbotron-breadcrumbs-active">
            &nbsp; &nbsp;/ &nbsp;GALLARY
          </div>
        </div>
      </div>
      <OurLatestNews />
    </div>
  );
};

export default GallaryPage;
