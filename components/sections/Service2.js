import contentConfig from "@/util/constants/configs/contentConfig";
import Link from "next/link";

export default function Service2() {
  const service2Content = contentConfig.homePageConfig.service2;
  return (
    <>
      <section className="service-section position-relative bg_2 overflow-hidden">
        {/*-============spacing==========-*/}
        <div className="pd_top_80" />
        {/*-============spacing==========-*/}
        <div className="ab_img_left_top mr_top_minus_40 z_0">
          <img
            src="/assets/images/shape/wave-pattern-2.png"
            className="img-fluid"
            alt="img"
          />
        </div>
        <div className="position-relative z_1">
          <div className="container pd_zero md_pd_left_15 md_pd_right_15">
            <div className="row">
              <div className="col-lg-7 m-auto">
                <div className="section_title text-center type_one color_white">
                  <h4 className="sm_title">{service2Content?.sectionTitle}</h4>
                  <div className="title_whole">
                    <h2 className="title">
                      {service2Content?.sectionSubtitle}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            {/*-============spacing==========-*/}
            <div className="pd_bottom_40" />
            {/*-============spacing==========-*/}
            <div className="row  mr_left_minus_15 mr_right_minus_15">
              {service2Content?.services.map((service, index) => (
                <div
                  key={index}
                  className="col-xl-4 col-lg-4 col-md-6 col-sm-6"
                >
                  <div className="service_box type_five style_two icon_box_only type_three trans">
                    <div className="icon_inner trans">
                      <div className="d-flex trans">
                        <div className="icon trans">
                          {/* You can replace with dynamic icon class */}
                          <i
                            className={service.iconClass}
                            aria-hidden="true"
                          ></i>
                        </div>
                        <div className="content">
                          <div className="title_22">
                            <Link href="/service">{service.name}</Link>
                          </div>
                          <p className="trans">{service.description}</p>
                          <Link href="/service" className="rd_more">
                            {service.readMore}
                            <svg
                              width={14}
                              height={12}
                              viewBox="0 0 14 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8 1L13 6M13 6L8 11M13 6H1"
                                stroke="var(--color-white)"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="ab_img_right_bottom mr_bottom_minus_250 z_0">
          <img
            src="/assets/images/shape/wave-pattern-1.png"
            className="img-fluid"
            alt="img"
          />
        </div>
        {/*-============spacing==========-*/}
        <div className="pd_bottom_80" />
        {/*-============spacing==========-*/}
      </section>
    </>
  );
}
