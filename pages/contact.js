import Layout from "@/components/layout/Layout";
import contentConfig from "@/util/constants/configs/contentConfig";
import Link from "next/link";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { location, emails, phoneNos, contactForm, niedrotechContact } =
    contentConfig?.contactConfig;
  const { socials } = contentConfig?.headerConfig;

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        "service_00o1j2a",
        "template_u3wq46t",
        {
          from_name: form.name,
          to_name: niedrotechContact?.name,
          from_email: form.email,
          to_email: niedrotechContact?.email,
          message: form.message,
        },
        "YAbQhhSGJHPmb5HLf"
      );
      setForm({ name: "", email: "", message: "" });
      alert("Thank you! I will get back to you as soon as possible.");
    } catch (error) {
      console.log(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Layout breadcrumbTitle="Contact">
        {/*-contact*/}
        <section className="contact-section">
          {/*-============spacing==========-*/}
          <div className="pd_top_80" />
          {/*-============spacing==========-*/}
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="contact_box_content">
                  <div className="icon trans">
                    <img
                      src="/assets/images/cont-1.png"
                      alt="img"
                      className="img-fluid"
                    />
                  </div>
                  <div className="contact-infor">
                    <h6 className="title_no_a_24"> Location</h6>
                    <span>{location}</span>
                  </div>
                </div>
                {/*-============spacing==========-*/}
                <div className="pd_bottom_30" />
                {/*-============spacing==========-*/}
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="contact_box_content">
                  <div className="icon trans">
                    <img
                      src="/assets/images/cont-2.png"
                      alt="img"
                      className="img-fluid"
                    />
                  </div>
                  <div className="contact-infor">
                    <h6 className="title_no_a_24">Email</h6>
                    {emails.map((email, index) => (
                      <Link href={`mailto:${email}`} key={index}>
                        {email}
                      </Link>
                    ))}
                  </div>
                </div>
                {/*-============spacing==========-*/}
                <div className="pd_bottom_30" />
                {/*-============spacing==========-*/}
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="contact_box_content">
                  <div className="icon trans">
                    <img
                      src="/assets/images/cont-3.png"
                      alt="img"
                      className="img-fluid"
                    />
                  </div>
                  <div className="contact-infor">
                    <h6 className="title_no_a_24">Call Us</h6>
                    {phoneNos.map((phoneNo, index) => (
                      <Link href={`tel:${phoneNo}`} key={index}>
                        {phoneNo}
                      </Link>
                    ))}
                  </div>
                </div>
                {/*-============spacing==========-*/}
                <div className="pd_bottom_30" />
                {/*-============spacing==========-*/}
              </div>
            </div>
          </div>
          {/*-============spacing==========-*/}
          <div className="pd_bottom_40" />
          {/*-============spacing==========-*/}
        </section>
        {/*-contact end*/}\{/*map*/}
        <section className="contact-map-section">
          <div className="container-no">
            <div className="row">
              <div className="col-lg-12">
                <section className="map-section">
                  {/*Map Outer*/}
                  <div className="map-outer">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.3903584762284!2d121.08107867413179!3d14.576818885906725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c72322e10baf%3A0x1e82148a985b83eb!2sniedro!5e0!3m2!1sen!2sph!4v1735110712471!5m2!1sen!2sph"
                      height={570}
                      style={{ border: 0, width: "100%" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
        {/*map*/}
        {/*form*/}
        <section className="form-section bg_light_1 position-relative">
          {/*-============spacing==========-*/}
          <div className="pd_top_90" />
          {/*-============spacing==========-*/}
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-12">
                <div className="section_title type_one">
                  <h4 className="sm_title">{contactForm?.title}</h4>
                  <div className="title_whole">
                    <h2 className="title"> {contactForm?.subtitle}</h2>
                  </div>
                  <p> {contactForm?.phrase}</p>
                </div>
                {/*-============spacing==========-*/}
                <div className="pd_bottom_40" />
                {/*-============spacing==========-*/}
                <div className="social-icons">
                  <ul>
                    {socials.map((social, index) => (
                      <li>
                        <Link href={social?.link} className="m_icon">
                          <i className={social?.icon} />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                {/*-============spacing==========-*/}
                <div className="pd_bottom_20" />
                {/*-============spacing==========-*/}
              </div>
              <div className="col-lg-8 col-md-12">
                <section className="contact_form_box_all">
                  <div className="contact_form_shortcode">
                    <form ref={formRef} onSubmit={handleSubmit}>
                      <div className="messages" />
                      <div className="controls">
                        <div className="row">
                          <div className="col-md-6 col-sm-12">
                            <div className="form-group">
                              <input
                                type="text"
                                name="name"
                                value={form?.name}
                                onChange={handleChange}
                                placeholder="Your Name *"
                                required="required"
                                data-error="Enter Your Name"
                              />
                              <div className="help-block with-errors" />
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-12">
                            <div className="form-group">
                              <input
                                type="text"
                                name="email"
                                value={form?.email}
                                onChange={handleChange}
                                required="required"
                                placeholder="Email *"
                                data-error="Enter Your Email Id"
                              />
                              <div className="help-block with-errors" />
                            </div>
                          </div>

                          <div className="col-sm-12">
                            <div className="form-group">
                              <textarea
                                name="message"
                                value={form?.message}
                                onChange={handleChange}
                                placeholder="Additional Information... (Optional) "
                                rows={3}
                                required="required"
                                data-error="Please, leave us a message."
                              />
                              <div className="help-block with-errors" />
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <div className="form-group mg_top apbtn">
                              <button
                                disabled={loading}
                                className="theme_btn"
                                type="submit"
                              >
                                Send Message
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <div className="ab_img_left_bottom z_0 mr_top_minus_150">
            <img
              src="/assets/images/bg-1.png"
              className="img-fluid"
              alt="img"
            />
          </div>
          {/*-============spacing==========-*/}
          <div className="pd_bottom_90" />
          {/*-============spacing==========-*/}
        </section>
        {/*form*/}
      </Layout>
    </>
  );
}
