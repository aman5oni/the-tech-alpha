import React from "react";
import OurServices from "../../components/ourServices";
import "./style.css";

const ServicesPage = () => {
  return (
    <div className="services-page-container">
      <div className="services-page-jumbotron">
        <div className="services-page-jumbotron-header">SERVICES</div>
        <div className="services-page-jumbotron-breadcrumbs-container">
          <div className="services-page-jumbotron-breadcrumbs-inactive">
            HOME
          </div>
          <div className="services-page-jumbotron-breadcrumbs-active">
            &nbsp; &nbsp;/ &nbsp;SERVICES
          </div>
        </div>
      </div>
      <OurServices />
    </div>
  );
};

export default ServicesPage;
