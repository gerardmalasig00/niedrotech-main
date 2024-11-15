import contentConfig from "@/util/constants/configs/contentConfig";
import Link from "next/link";

export default function Blog1() {
  const blog1Content = contentConfig.homePageConfig.blog1;
  return (
    <>
      <section className="blog-section position-relative bg_light_1">
        {/*-============spacing==========-*/}
        <div className="pd_top_85" />
        {/*-============spacing==========-*/}
        <div className="ab_img_left_bottom z_0">
          <img
            src={blog1Content.backgroundImageLeft}
            className="img-fluid"
            alt="img"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="section_title text-center type_one">
                <h4 className="sm_title">{blog1Content.title.smTitle}</h4>
                <div className="title_whole">
                  <h2 className="title">{blog1Content.title.mainTitle}</h2>
                </div>
              </div>
            </div>
          </div>
          {/*-============spacing==========-*/}
          <div className="pd_bottom_40" />
          {/*-============spacing==========-*/}
          <div className="blog_post position-relative">
            <div className="row">
              {blog1Content.blogPosts.map((post, index) => (
                <div
                  key={index}
                  className="col-xl-4 col-lg-4 col-md-6 col-sm-6"
                >
                  <div className="blog_box type_two trans hover_1_get">
                    <div className="blog_inner trans">
                      <div className="image_box trans hover_1">
                        <Link href={post.readMoreLink}>
                          <img
                            src={post.image}
                            alt="blog img"
                            className="img-fluid trans"
                          />
                        </Link>
                        <div className="oh ho_1" />
                        <div className="oh ho_2" />
                        <div className="oh ho_3" />
                        <div className="oh ho_4" />
                        <span className="date_tm">
                          <i className="fi-rr-calendar" />
                          <time className="date published">{post.date}</time>
                        </span>
                      </div>
                      <div className="content">
                        <div className="d-flex authour align-items-center">
                          <img
                            src={post.authorImage}
                            alt="gavatar"
                            className="img-fluid"
                          />
                          {post.author}
                        </div>
                        <h4 className="title_22">
                          <Link href={post.readMoreLink}>{post.title}</Link>
                        </h4>
                        <p className="descs">{post.description}</p>
                        <div className="bottn_flex">
                          <Link href={post.readMoreLink} className="rd_more">
                            Read More <i className="fi-rr-arrow-small-right" />
                          </Link>
                          <small className="comments">
                            <i className="far fa-comment-dots" />
                            <Link
                              href={post.commentLink}
                              className="Comments are Closed"
                            >
                              Post a Comment
                            </Link>
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="ab_img_right_top z_0">
          <img
            src={blog1Content.backgroundImageRight}
            className="img-fluid"
            alt="img"
          />
        </div>
        {/*-============spacing==========-*/}
        <div className="pd_top_60" />
        {/*-============spacing==========-*/}
      </section>
    </>
  );
}
