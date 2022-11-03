import React, { useEffect, useState } from "react";
import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import DummyImage from "../../assets/images/DummyImage.jpg";

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

const DATA = [
  {
    IMAGE: DummyImage,
    NAME: "AMAN SONI",
    PROFESSION: "SOFTWARE ENGINEER",
    MESSAGE:
      "such a nice project i appreciate your project its great project okey bye see you with next project"
  },
  {
    IMAGE: DummyImage,
    NAME: "NAMAN SONI",
    PROFESSION: "WHOLESALER",
    MESSAGE:
      "such a nice project i appreciate your project its great project okey bye see you with next project"
  },
  {
    IMAGE: DummyImage,
    NAME: "PAWAN SONI",
    PROFESSION: "BUSINESSMAN",
    MESSAGE:
      "such a nice project i appreciate your project its great project okey bye see you with next project"
  },
  {
    IMAGE: DummyImage,
    NAME: "HARSHIT SONI",
    PROFESSION: "BILLIONARE",
    MESSAGE:
      "such a nice project i appreciate your project its great project okey bye see you with next project"
  }
];

const CustomerTestimonial = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="customer-testimonial-container">
      <div className="customer-testimonial-header">What Clients Say</div>
      <div className="customer-testimonial-swiper-container">
        <Swiper
          slidesPerView={windowSize.innerWidth > 720 ? 3 : 1}
          spaceBetween={50}
          loop={true}
          autoplay={true}
          pagination={{
            clickable: true
          }}
          centeredSlides={true}
          modules={[Pagination, Autoplay]}
        >
          {DATA.map((data, index) =>
            <SwiperSlide>
              {({ isActive }) =>
                <div
                  className={
                    isActive
                      ? "customer-testimonial-active-slides-container"
                      : "customer-testimonial-inactive-slides-container"
                  }
                >
                  <img
                    src={data.IMAGE}
                    className={
                      isActive
                        ? "customer-testimonial-active-main-slides-image"
                        : "customer-testimonial-inactive-main-slides-image"
                    }
                    alt=""
                  />
                  <div
                    className={
                      isActive
                        ? "customer-testimonial-active-main-slides-name"
                        : "customer-testimonial-inactive-main-slides-name"
                    }
                  >
                    {data.NAME}
                  </div>
                  <div
                    className={
                      isActive
                        ? "customer-testimonial-active-main-slides-profession"
                        : "customer-testimonial-inactive-main-slides-profession"
                    }
                  >
                    {data.PROFESSION}
                  </div>
                  <div
                    className={
                      isActive
                        ? "customer-testimonial-active-main-slides-message"
                        : "customer-testimonial-inactive-main-slides-message"
                    }
                  >
                    {data.MESSAGE}
                  </div>
                </div>}
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default CustomerTestimonial;
