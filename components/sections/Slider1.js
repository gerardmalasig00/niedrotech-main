import contentConfig from "@/util/constants/configs/contentConfig";
import Link from "next/link";

import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,

  // Navigation
  navigation: {
    nextEl: ".owl-next",
    prevEl: ".owl-prev",
  },

  // Pagination
  pagination: {
    // el: '.swiper-pagination',
    clickable: true,
  },
};
export default function Slider1() {
  const { slides } = contentConfig.homePageConfig.sliderContent;
  return (
    <>
      <section className="slider style_one">
        <Swiper
          {...swiperOptions}
          className="owl_nav_block owl_dots_none theme_carousel"
        >
          {slides.map((slide, index) => (
            <SwiperSlide className="slide-item-content" key={index}>
              <div
                className="image-layer"
                style={{ backgroundImage: `url(${slide.imageLayer})` }}
              />
              <div className="slide-item content_left">
                <div className="auto-container">
                  <div className="row align-items-center">
                    <div className="col-md-7">
                      <div className="slider_content">
                        <div className="bg_image animate_up">
                          <img
                            src={slide.bgImage}
                            className="img-fluid"
                            alt="ptimage"
                          />
                        </div>
                        <h6 className="animate_up">
                          <img
                            src={"/assets/images/slider/Icon-white.png"}
                            className="img-fluid"
                            alt="icon"
                          />
                          {slide.subText}
                        </h6>
                        <h1 className="animate_left">{slide.heading}</h1>
                        <div className="button_all animate_down">
                          <Link
                            href={slide.buttonLink}
                            className="theme_btn color_white animated"
                          >
                            {slide.buttonText}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination" />
        <div className="owl-nav">
          <button type="button" role="presentation" className="owl-prev">
            <i className={"fi-rs-arrow-small-left"} />
          </button>
          <button type="button" role="presentation" className="owl-next">
            <i className={"fi-rs-arrow-small-right"} />
          </button>
        </div>
      </section>
    </>
  );
}
