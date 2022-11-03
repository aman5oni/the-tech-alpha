import React from "react";
import Carousel from "../../components/carousel";
import CustomerTestimonial from "../../components/customerTestimonial";
import FlexBanner from "../../components/flexBanner";
import Highlight from "../../components/highlight";
import OurLatestNews from "../../components/ourLatestNews";
import OurProjects from "../../components/ourProjects";
import OurServices from "../../components/ourServices";
import Section from "../../components/section";
import SendMessage from "../../components/sendMessage";

import "./style.css";

const HomePage = () => {
  return (
    <div className="home-page-container">
      <Carousel />
      <FlexBanner />
      <Highlight />
      <Section />
      <OurLatestNews />
      <OurProjects />
      <OurServices />
      <CustomerTestimonial />
      <SendMessage />
    </div>
  );
};

export default HomePage;
