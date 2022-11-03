import React from "react";
import Carousel from "../../components/carousel";
import "./style.css";

const BlogsPage = () => {
  return (
    <div className="blogs-page-container">
      <div className="blogs-page-jumbotron">
        <div className="blogs-page-jumbotron-header">BLOGS</div>
        <div className="blogs-page-jumbotron-breadcrumbs-container">
          <div className="blogs-page-jumbotron-breadcrumbs-inactive">HOME</div>
          <div className="blogs-page-jumbotron-breadcrumbs-active">
            &nbsp; &nbsp;/ &nbsp;BLOGS
          </div>
        </div>
      </div>
      <Carousel />
    </div>
  );
};

export default BlogsPage;
