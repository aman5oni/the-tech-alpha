import React from "react";
import "./style.css";
import DummyImage from "../../assets/images/DummyImage.jpg";

const OurLatestNews = () => {
  return (
    <div className="our-latest-news-container">
      <div className="our-latest-news-header">Latest News</div>
      <div className="our-latest-news-card-container">
        <div className="our-latest-news-card">
          <img src={DummyImage} className="our-latest-news-image" alt="" />
          <div className="our-latest-news-header-container">
            <div className="our-latest-news-card-header">Header 1</div>
            <div className="our-latest-news-card-content">Content</div>
          </div>
        </div>
        <div className="our-latest-news-card">
          <img src={DummyImage} className="our-latest-news-image" alt="" />
          <div className="our-latest-news-header-container">
            <div className="our-latest-news-card-header">Header 1</div>
            <div className="our-latest-news-card-content">Content</div>
          </div>
        </div>
        <div className="our-latest-news-card">
          <img src={DummyImage} className="our-latest-news-image" alt="" />
          <div className="our-latest-news-header-container">
            <div className="our-latest-news-card-header">Header 1</div>
            <div className="our-latest-news-card-content">Content</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurLatestNews;
