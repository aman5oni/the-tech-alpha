import React from "react";
import OurProjects from "../../components/ourProjects";
import "./style.css";

const PortfolioPage = () => {
  return (
    <div className="portfolio-page-container">
      <div className="portfolio-page-jumbotron">
        <div className="portfolio-page-jumbotron-header">PORTFOLIO</div>
        <div className="portfolio-page-jumbotron-breadcrumbs-container">
          <div className="portfolio-page-jumbotron-breadcrumbs-inactive">
            HOME
          </div>
          <div className="portfolio-page-jumbotron-breadcrumbs-active">
            &nbsp; &nbsp;/ &nbsp;PORTFOLIO
          </div>
        </div>
      </div>
      <OurProjects />
    </div>
  );
};

export default PortfolioPage;
