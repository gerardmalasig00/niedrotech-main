import contentConfig from "@/util/constants/configs/contentConfig";
import Link from "next/link";

export default function Client1() {
  const { spacingTop, spacingBottom, title, button, clients } =
    contentConfig.homePageConfig.client1;
  return (
    <>
      <section className="client-section">
        <div className={`pd_top_${spacingTop}`} />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="section_title type_one">
                <h4 className="sm_title">{title.smTitle}</h4>
                <div className="title_whole">
                  <h2 className="title">{title.mainTitle}</h2>
                </div>
                <p>{title.description}</p>
              </div>
              <div className="pd_bottom_30" />
              <div className="theme_btn_all">
                <Link href={button.link} className="theme_btn big rotate">
                  {button.label}{" "}
                  <span>
                    {" "}
                    <i className="fi-rr-arrow-small-up" />
                  </span>
                </Link>
              </div>
              <div className="pd_bottom_20" />
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="client_grid">
                {clients.map((client) => (
                  <div
                    key={client.id}
                    className={`client_box ${client.id > 4 ? "last" : ""}`}
                  >
                    <Link href={client.link}>
                      <img
                        src={client.image}
                        className="img-fluid"
                        alt={client.alt}
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={`pd_bottom_${spacingBottom}`} />
      </section>
    </>
  );
}
