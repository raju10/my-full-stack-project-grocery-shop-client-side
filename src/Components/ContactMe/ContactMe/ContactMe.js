import React, { useEffect } from "react";
import emailjs from "emailjs-com";

import "./ContactMe.css";
const ContactMe = () => {
  /////////////

  //////////////////
  function sendEmail(e) {
    console.log(e.target.value);
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t4b77sp",
        "template_b0ozs69",
        e.target,
        "user_o8Tv2LDlheDIOO91GunSi"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  /////
  return (
    <section className="contactMe-container">
      <div className="container">
        <div className="protfilio-header" style={{ paddingTop: "10px" }}>
          <h2>Contact me</h2>
        </div>
        <div className="row contactUs-Details">
          <div data-aos="fade-right" className="col-sm-6">
            <h3
              style={{
                color: "white",
                fontFamily: "monospace",
                paddingTop: "30px",
              }}
            >
              I will love to talk with. Send me email or <br /> DM me on my
              social media
            </h3>
            <h5>Email : arifulislamraju00@gmail.com</h5>
          </div>
          <div data-aos="fade-up" className="col-sm-6">
            <form className="contact-form" onSubmit={sendEmail}>
              <input type="hidden" name="contact_number" required />
              <label style={{ color: "#f1e9e9" }}>Name</label>

              <input
                type="text"
                name="user_name"
                className="form-control w-100"
                required
                placeholder="Name"
              />
              <br />
              <label style={{ color: "#f1e9e9" }}>Email</label>

              <input
                type="text"
                name="user_email"
                className="form-control w-100"
                placeholder="Email"
                required
              />
              <br />
              <label style={{ color: "#f1e9e9" }}>Message</label>

              <textarea
                name="message"
                className="form-control w-100"
                placeholder="Massage"
                required
              />
              <br />
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
