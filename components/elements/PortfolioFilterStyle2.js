import contentConfig from "@/util/constants/configs/contentConfig";
import Isotope from "isotope-layout";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

export default function PortfolioStyle2() {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".portfoliocontainer", {
        itemSelector: ".portfolio-wrapper",
        // layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".portfolio-wrapper",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = useCallback(
    (key) => () => {
      setFilterKey(key);
    },
    []
  );

  const activeBtn = (value) => (value === filterKey ? "trans current " : "");

  const { projectTabs, projects } = contentConfig?.portfolioConfig;
  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <div className="fliter_group">
            <ul className="portfolio_filter clearfix">
              {projectTabs?.map((item, index) => (
                <li
                  className={activeBtn(item?.activeClass)}
                  onClick={handleFilterKeyChange(item?.activeClass)}
                >
                  {item?.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div
        className="portfoliocontainer row"
        style={{ position: "relative", height: "1328.8px" }}
      >
        {projects?.map((item, index) => (
          <div
            className={`portfolio-wrapper col-xl-6 col-lg-6 col-md-6 col-sm-6 ${item?.tabClasses}`}
          >
            <div className="portfolio_box type_two">
              <div className="image_box ">
                <img src={item?.projectImage} className="img-fluid" alt="img" />
                <Link data-fancybox="gallery" className="zm_btn trans" href="#">
                  <span className="fi-rs-cursor-plus zoom_icon" />
                </Link>
              </div>
              <div className="content_box  trans">
                <div className="bg trans" />
                <div className="con">
                  <h2 className="title_30">
                    <Link href={item?.projectLink} rel="bookmark">
                      {item?.appName}
                    </Link>
                  </h2>
                  <p>{item?.companyName}</p>
                </div>
                <Link href={item?.projectLink} className="lnk trans">
                  <svg
                    className="trans"
                    width={17}
                    height={16}
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 7.75H16M16 7.75L9.25 1M16 7.75L9.25 14.5"
                      stroke="#008BF9"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
