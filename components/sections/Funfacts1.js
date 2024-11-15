import contentConfig from "@/util/constants/configs/contentConfig";
import dynamic from "next/dynamic";
const CounterUp = dynamic(() => import("../elements/CounterUp"), {
  ssr: false,
});

export default function Funfacts1() {
  const funFact1Content = contentConfig.homePageConfig.funFact1;
  return (
    <>
      <section className="fub-fact-section mr_bottom_minus_90 position-relative z_2">
        <div className="medium-container">
          <div
            className="inner-section bg_op_1 position-relative overflow-hidden pd_top_60 pd_bottom_30 pd_left_60 pd_right_60 md_pd_left_15 md_pd_right_15"
            style={{
              backgroundImage: "url(assets/images/page-image-1-min.jpg)",
            }}
          >
            <div className="background_overlay z_0"></div>
            <div className="row">
              {funFact1Content.map((fact, index) => (
                <div
                  key={index}
                  className="col-lg-3 col-md-6 col-sm-6 col-xs-12"
                >
                  <div className="fun_facts type_three">
                    <div className="icon trans">
                      <i className={`color_white ${fact.iconClass}`}></i>
                    </div>
                    <div className="content">
                      <h4>
                        <CounterUp
                          count={fact.count}
                          color="color_white"
                          time={1}
                        />
                        <small className="color_white"> {fact.unit} </small>
                      </h4>
                      <h6 className="title_no_a_18 color_white">
                        {fact.label}
                      </h6>
                    </div>
                  </div>
                  {/* Spacing */}
                  <div className="pd_bottom_30"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
