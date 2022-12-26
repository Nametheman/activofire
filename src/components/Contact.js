import React, { useRef, useState } from "react";
import { BsFillTelephoneFill, BsWhatsapp, BsTwitter } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci/index";
import { MdLocationPin } from "react-icons/md/index";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
// import "sweetalert2/src/sweetalert2.scss";
import "./Contact.css";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const form = useRef();
  const Swal = require("sweetalert2");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        // setLoading(true),
        "service_ca2cuip",
        "template_ogvu902",
        form.current,
        "slpiNM7C64YRlRNzm"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            title: "",
            text: "Message sent successfully!",
            // icon,
            confirmButtonText: "Cool",
            position: "top-end",
            width: "25em",
            height: "20em",
            background: "#3d3d3d",
            color: "#ffffff",
            timer: 3000,
            timerProgressBar: true,
          });
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            title: "Uh Uh",
            text: "Failed to send!",
            // icon,
            confirmButtonText: "Cool",
            position: "top-end",
            width: "25em",
            height: "20em",
            background: "#e36262",
            color: "#ffffff",
            timer: 3000,
            timerProgressBar: true,
          });
          setLoading(false);
        }
      );
  };

  return (
    <>
      <section className="contact-section">
        <div className="contact-form">
          <h2>Contact Us For General Inquiries</h2>
          <form ref={form} onSubmit={sendEmail}>
            <label>Your Name</label>
            <input type="text" name="user_name" />
            <label>Your Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" className="textArea" />
            <input
              type="submit"
              value={loading === true ? "Sending..." : "Send"}
              className="submit"
              style={
                loading === true
                  ? { backgroundColor: "#000", outline: "none" }
                  : { backgroundColor: "" }
              }
            />
          </form>
        </div>
        <div className="mapContainer">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.2628785047605!2d3.348771514048265!3d6.614225723938751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93cdcf476d77%3A0x5c53a47514ee0e89!2s11%20Itelorun%20Cl%2C%20101233%2C%20Ikeja%2C%20Lagos!5e0!3m2!1sen!2sng!4v1671982018199!5m2!1sen!2sng"
            className="contactMap"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <section className="contact-info-section">
        <div className="address">
          <h3>Address</h3>
          <div className="address-details">
            <span>
              <MdLocationPin />
            </span>
            <p>
              11, Itelorun Close, Off Alhaji Jimoh Street, Adeniyi Jones Avenue,
              Ikeja, Lagos.
            </p>
          </div>
        </div>
        <div className="social">
          <h3> Reach Out</h3>
          <div className="social-details">
            <span>
              <BsWhatsapp />
            </span>
            <span>
              <FiTwitter />
            </span>
            <span>
              <CiLinkedin />
            </span>
          </div>
        </div>
        <div className="phone">
          <h3> Call Us</h3>
          <div className="phone-details">
            <span>
              <BsFillTelephoneFill />
            </span>
            <p>+234-(803)-390-7077</p>
          </div>
        </div>
        {/* <div>1</div> */}
      </section>
    </>
  );
};

export default Contact;
