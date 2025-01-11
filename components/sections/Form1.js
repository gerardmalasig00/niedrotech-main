import contentConfig from "@/util/constants/configs/contentConfig";
import { useState } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 0,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  // loop: true,

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

export default function Form1() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };

  const { sectionTitle, sectionSubtitleTop, sectionSubtitleBottom, reasons } =
    contentConfig.homePageConfig.form1;
  return (
    <>
      <section className="form-section bg_light_1 position-relative">
        <div className="ab_img_left_top">
          <img
            src="/assets/images/bg.png"
            className="img-fluid"
            alt="Background"
          />
        </div>
        <div className="pd_top_190" />
        <div className="container-fluid">
          <div className="row align-items-end">
            <div className="col-lg-3 col-md-3 col-sm-12">
              <div className="image">
                <img
                  src="/assets/images/about/man-1.png"
                  className="img-fluid m-auto"
                  alt="Image 1"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="section_title text-center type_one">
                <h4 className="sm_title">{sectionTitle}</h4>
              </div>
              <div className="pd_bottom_40" />
              <section className="fom_tab_box custom_tabs type_one">
                <div className="block_faq">
                  <div className="accordion-box">
                    {reasons.map((reason, index) => (
                      <div
                        key={index}
                        className={
                          isActive.key === index
                            ? "accordion active-block"
                            : "accordion"
                        }
                      >
                        <div
                          className={
                            isActive.key === index
                              ? "question faq_header active"
                              : "question faq_header"
                          }
                          onClick={() => handleToggle(index)}
                        >
                          <div className="question_box">
                            <div className="title_no_a_18 trans">
                              {reason.title}
                            </div>
                            <span
                              className={`icon_fq trans fi-rs-arrow-small-right`}
                            />
                          </div>
                        </div>
                        <div
                          className="answer accordion-content"
                          style={{
                            display: isActive.key === index ? "block" : "none",
                          }}
                        >
                          {reason.paragraph}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <div className="pd_bottom_90" />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
              <div className="image">
                <img
                  src="/assets/images/about/man-2.png"
                  className="img-fluid m-auto"
                  alt="Image 2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
