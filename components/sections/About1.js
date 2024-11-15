import contentConfig from "@/util/constants/configs/contentConfig";
import Link from "next/link";
import { useState } from "react";

export default function About1() {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };

  const { title, caption, tabs, imgPerson } =
    contentConfig.homePageConfig.about1;
  return (
    <>
      <section className="about-section position-relative">
        {/*-============spacing==========-*/}
        <div className="pd_top_20" />
        {/*-============spacing==========-*/}
        <div className="ab_img_left_bottom z_minus_1">
          <img src="/assets/images/bg-1.png" className="img-fluid" alt="img" />
        </div>
        <div className="large-container">
          <div className="row align-items-start">
            <div className="col-lg-5 col-md-5 col-sm-12">
              <div className="image_box">
                <img src={imgPerson} className="img-fluid" alt="img" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 pd_left_30">
              <div className="section_title type_one">
                <h4 className="sm_title">{caption}</h4>
                <div className="title_whole">
                  <h2 className="title">{title}</h2>
                </div>
              </div>
              {/*-============spacing==========-*/}
              <div className="mr_bottom_20" />
              {/*-============spacing==========-*/}
              <div className="fom_tab_box custom_tabs only_tab_content">
                <ul className="nav nav-tabs links trans" role="tablist">
                  {tabs.map((tab, index) => (
                    <li
                      className="nav-item"
                      onClick={() => handleOnClick(index)}
                    >
                      <button
                        className={
                          activeIndex === index ? "nav-link active" : "nav-link"
                        }
                      >
                        {tab.title}
                        <svg
                          width={12}
                          height={12}
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 11L11 1M11 1H3.5M11 1V8.5"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="s_tabs_content tab-content">
                  {tabs.map((tab, index) => (
                    <div
                      className={
                        activeIndex === index ? "tab-pane active" : "tab-pane"
                      }
                    >
                      <div className="tab_content_box">
                        <div className="content">{tab.content}</div>
                        <div className="d-flex">
                          <ul>
                            {tab.attributes.map((attribute, index) => (
                              <li>
                                <svg
                                  width={25}
                                  height={25}
                                  viewBox="0 0 25 25"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <circle
                                    cx="12.5"
                                    cy="12.5"
                                    r="12.5"
                                    fill="#36DB9F"
                                  />
                                  <g>
                                    <path
                                      d="M11.8363 18.7066C12.2244 19.0994 13.0886 18.9692 13.1817 18.3516C13.7607 14.5175 16.6577 11.2829 18.85 8.23494C19.4579 7.39031 18.0602 6.58795 17.4602 7.42252C15.4568 10.2075 12.9317 13.138 11.9439 16.5174C10.815 15.3637 9.68161 14.221 8.41548 13.2072C7.61364 12.5649 6.46665 13.6965 7.27713 14.3455C8.92674 15.6668 10.3523 17.2076 11.8363 18.7066Z"
                                      fill="white"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath>
                                      <rect
                                        width={12}
                                        height={12}
                                        fill="white"
                                        transform="translate(7 7)"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                                <span>{attribute}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ab_img_right_bottom z_minus_1">
          <img src="/assets/images/bg-2.png" className="img-fluid" alt="img" />
        </div>
      </section>
    </>
  );
}
