import React, { Fragment } from "react";
import "./About.css";
const About = () => {
  return (
    <Fragment>
      <div className="about-container">
        <h3>ABOUT US </h3>
        <h2>Activo Fire Science</h2>
        <div className="about-statements">
          <p className="first">
            Our services include fire safety assessments, design and
            installation of fire protection systems, maintenance and testing of
            existing systems, and emergency response and repair. We offer a
            range of fire protection solutions, including sprinkler systems,
            fire alarm systems, fire suppression systems, and more.
          </p>
          <p className="second">
            At Activo Fire Science Ltd, we take pride in the quality of our work
            and the level of service we provide to our customers. We understand
            the importance of fire safety and are committed to helping you
            protect your property and those who use it. Contact us today to
            learn more about how we can help you keep your property safe from
            fire.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
