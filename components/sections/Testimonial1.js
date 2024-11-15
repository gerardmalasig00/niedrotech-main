import contentConfig from "@/util/constants/configs/contentConfig";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,

  // Navigation
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};

const renderStars = (rating) => {
  return (
    <>
      {Array.from({ length: 5 }).map((_, index) => (
        <i
          key={index}
          className={`fa fa-star ${index < rating ? "fill" : "empty"}`}
        />
      ))}
    </>
  );
};

export default function Testimonial1() {
  const { data, banner } = contentConfig.homePageConfig.testimonial1;
  return (
    <section className="testimonial-section position-relative">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-8 pd_zero">
            <div className="image">
              <img
                src={banner}
                className="img-fluid height_800px object-fit-cover w_100"
                alt="img"
              />
            </div>
          </div>
          <div className="col-lg-4 pd_right_100 pd_top_40">
            <div className="testimonial_ver_carousel nav_false position-relative dot_true mr_left_minus_250">
              <Swiper {...swiperOptions} className="vertoneitem">
                {data.map((testimonial, index) => (
                  <SwiperSlide key={index} className="testimonial_box type_one">
                    <div className="top_content">
                      <p>{renderStars(testimonial.rating)}</p>
                      <div className="title_no_a_26 t_comment">
                        <sup>“</sup>
                        {testimonial.comment}
                        <sub>“</sub>
                      </div>
                    </div>
                    <div className="lower_content clearfix">
                      <div className="image_box">
                        <img
                          className="img-fluid"
                          src={testimonial.image}
                          alt={testimonial.name}
                        />
                        <svg
                          width={86}
                          height={88}
                          viewBox="0 0 86 88"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M39.9434 87.5484C17.5317 86.8101 0.00666874 66.6886 0.800056 42.6058C1.59344 18.523 20.4048 -0.401485 42.8165 0.336847C65.2281 1.07518 85.8758 32.0772 85.0824 56.16C84.289 80.2429 62.355 88.2868 39.9434 87.5484Z"
                            fill="var(--color-set-one-1)"
                          />
                        </svg>
                      </div>
                      <div className="cont">
                        <h4 className="title_no_a_22">{testimonial.name}</h4>
                        <p>{testimonial.role}</p>
                      </div>
                    </div>
                    <i className="flaticon-right-quote" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
