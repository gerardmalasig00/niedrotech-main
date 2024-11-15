import contentConfig from "@/util/constants/configs/contentConfig";
import { useState } from "react";

export default function Faq1() {
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

  const faq1Content = contentConfig.homePageConfig.faq1;
  return (
    <section className="faq-section">
      {/* Spacing */}
      <div className="pd_top_80" />
      {/* Content */}
      <div className="container">
        <div className="row align-items-center">
          {/* FAQ Text Section */}
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="section_title type_one">
              <h4 className="sm_title">{faq1Content.sectionTitle}</h4>
              <div className="title_whole">
                <h2 className="title">{faq1Content.sectionSubtitle}</h2>
              </div>
              <div className="pd_bottom_20" />
            </div>
            <div className="position-relative br_left_3px_theme_color pd_left_10">
              {faq1Content.sectionDescription}
            </div>
            <div className="pd_bottom_30" />
            <div className="block_faq">
              <div className="accordion-box">
                {faq1Content.faqs.map((faq, index) => (
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
                          {faq.question}
                        </div>
                        <span className={`icon_fq trans ${faq.iconClass}`} />
                      </div>
                    </div>
                    <div
                      className="answer accordion-content"
                      style={{
                        display: isActive.key === index ? "block" : "none",
                      }}
                    >
                      {faq.answer}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="pd_bottom_40" />
          </div>

          {/* FAQ Image Section */}
          <div className="col-lg-6 col-md-6 col-sm-12 pd_left_30">
            <div className="image_box_only type_three">
              <div className="left">
                {faq1Content.images.left.map((image, idx) => (
                  <div
                    key={idx}
                    className={`image ${idx === 0 ? "one" : "two"}`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="img-fluid"
                    />
                  </div>
                ))}
              </div>
              <div className="right">
                <div className="image three">
                  <img
                    src={faq1Content.images.right.src}
                    alt={faq1Content.images.right.alt}
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="pd_bottom_40" />
          </div>
        </div>
      </div>
      {/* Spacing */}
      <div className="pd_bottom_40" />
    </section>
  );
}
