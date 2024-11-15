import contentConfig from "@/util/constants/configs/contentConfig";
import Link from "next/link";

export default function Service1() {
  const { description, sectionTitle, services } =
    contentConfig.homePageConfig.services1;
  return (
    <>
      <section className="service-section">
        {/*-============spacing==========-*/}
        <div className="pd_top_80" />
        {/*-============spacing==========-*/}
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="section_title type_one">
                <h4 className="sm_title">{sectionTitle.smallTitle}</h4>
                <div className="title_whole">
                  <h2 className="title">{sectionTitle.mainTitle}</h2>
                </div>
              </div>
              {/*-============spacing==========-*/}
              <div className="mr_bottom_15" />
              {/*-============spacing==========-*/}
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="position-relative">
                <p>{description}</p>
              </div>
              {/*-============spacing==========-*/}
              <div className="mr_bottom_20" />
              {/*-============spacing==========-*/}
            </div>
          </div>
          {/*-============spacing==========-*/}
          <div className="pd_bottom_25" />
          {/*-============spacing==========-*/}
          <div className="service_post position-relative ajax_service_enabled ">
            <div className="row">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="col-xl-4 col-lg-4 col-md-6 col-sm-6"
                >
                  <div className="service_box type_two hover_1_get">
                    <Link href="/service" className="img_bx">
                      <div className="image trans hover_1">
                        <img
                          src={`/assets/images/service/other-ser-${
                            index + 1
                          }.jpg`}
                          className="img-fluid"
                          alt="service-image"
                        />
                        <div className="oh ho_1" />
                        <div className="oh ho_2" />
                        <div className="oh ho_3" />
                        <div className="oh ho_4" />
                      </div>
                    </Link>
                    <div className="content_box trans">
                      <div className="icon trans">
                        <i
                          className={`flaticon-${
                            index === 0
                              ? "salary"
                              : index === 1
                              ? "management"
                              : "business-trip"
                          } trans`}
                        />
                      </div>
                      <div className="steps trans">{service.step}</div>
                      <h4 className="title_24 trans">
                        <Link href="/service">{service.title}</Link>
                      </h4>
                      <p className="trans">{service.description}</p>
                      <Link href="/service" className="rd_more">
                        {service.readMore}{" "}
                        <i className="fi-rr-arrow-small-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/*-============spacing==========-*/}
        <div className="pd_bottom_60" />
        {/*-============spacing==========-*/}
      </section>
    </>
  );
}
