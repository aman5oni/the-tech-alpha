import React, { useCallback, useRef } from "react";
import "./style.css";

import BackArrow from "../../assets/icons/BackArrow.png";
import ForwardArrow from "../../assets/icons/ForwardArrow.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const DATA = [
  {
    NAME: "AMAN SONI",
    QUOTE:
      "SOFTWARE ENGINEER jhfdakf fadkjh afdkjh afdkjl afdh afdklj fakjadf kjaf"
  },
  {
    NAME: "AMAN SONI",
    QUOTE:
      "SOFTWARE ENGINEER jhfdakf fadkjh afdkjh afdkjl afdh afdklj fakjadf kjaf"
  },
  {
    NAME: "AMAN SONI",
    QUOTE:
      "SOFTWARE ENGINEER jhfdakf fadkjh afdkjh afdkjl afdh afdklj fakjadf kjaf"
  },
  {
    NAME: "AMAN SONI",
    QUOTE:
      "SOFTWARE ENGINEER jhfdakf fadkjh afdkjh afdkjl afdh afdklj fakjadf kjaf"
  },
  {
    NAME: "AMAN SONI",
    QUOTE:
      "SOFTWARE ENGINEER jhfdakf fadkjh afdkjh afdkjl afdh afdklj fakjadf kjaf"
  }
];

const Carousel = () => {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel-back-image" />
      <div className="carousel-main-container">
        <div className="carousel-prev-button-icon">
          <img
            onClick={handlePrev}
            className="carousel-icon"
            src={BackArrow}
            alt=""
          />
        </div>
        <div className="carousel-main-container-swiper">
          <Swiper
            ref={sliderRef}
            slidesPerView={1}
            loop={true}
            spaceBetween={5}
            autoplay={true}
            centeredSlides={true}
            modules={[Autoplay, Navigation]}
          >
            {DATA.map((data, index) =>
              <SwiperSlide>
                <div className={"carousel-active-slides-container"}>
                  <div className={"carousel-active-main-slides-name"}>
                    {data.NAME}
                  </div>
                  <div className={"carousel-active-main-slides-quote"}>
                    " {data.QUOTE} "
                  </div>
                </div>
              </SwiperSlide>
            )}
          </Swiper>
        </div>
        <div className="carousel-next-button-icon">
          <img
            className="carousel-icon"
            onClick={handleNext}
            src={ForwardArrow}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
