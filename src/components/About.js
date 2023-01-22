import React, { Fragment } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import "./About.css";
import activo from "../Images/activo.jpg";

const About = () => {
  AOS.init();

  return (
    <Fragment>
      <div className="about-container">
        <h3>ABOUT US </h3>
        <div className="about-section">
          <div className="about-image">
            <img src={activo} alt="" />
          </div>
          <div className="about-statements">
            <p className="first" data-aos="fade-right">
              Activo Fire Science is a leading provider of fire suppression
              solutions for a wide range of applications. Our company was
              founded by a team of experts in the fire safety industry and we
              have been helping our clients protect their people property and
              assets from danger of fire. We offer full range of fire
              suppression systems including device -integrated systems,
              automatic sprinkler systems, and handheld fire extinguishers. Our
              team of experience professionals help clients design and install
              the right fire suppression systems for individual needs and
              requirements.
            </p>
            <br />
            <p className="second" data-aos="fade-left">
              We also offer ongoing maintenance and support to ensure clients
              systems remain effective. We serve a wide range of industries,
              including commercial, industrial, residential and public
              buildings. Our products and services are designed to meet the
              specific needs of our customer. We are proud to be a trusted
              partner and a customer focused company in the field of fire safety
              and prevention. We strive to be a positive force in our world,
              making it a safer and more resilient place to live for everyone.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
