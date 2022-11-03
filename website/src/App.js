import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "swiper/css/bundle";
import FooterBar from "./components/footerBar";
import NavigationBar from "./components/navigationBar";
import HomePage from "./pages/homePage";
import AboutPage from "./pages/aboutPage";
import ContactPage from "./pages/contactPage";
import ServicesPage from "./pages/servicesPage";
import PortfolioPage from "./pages/portfolioPage";
import BlogsPage from "./pages/blogsPage";
import CareerPage from "./pages/careerPage";
import GallaryPage from "./pages/gallaryPage";
import FaqPage from "./pages/faqPage";
import Neumorphism from "./components/neumorphism";
const App = () => {
  return (
    <Router>
      {/* <Neumorphism /> */}
      <NavigationBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/contact" element={<ContactPage />} />
        <Route exact path="/services" element={<ServicesPage />} />
        <Route exact path="/portfolio" element={<PortfolioPage />} />
        <Route exact path="/blogs" element={<BlogsPage />} />
        <Route exact path="/career" element={<CareerPage />} />
        <Route exact path="/gallary" element={<GallaryPage />} />
        <Route exact path="/faq" element={<FaqPage />} />
      </Routes>
      <FooterBar />
    </Router>
  );
};

export default App;
