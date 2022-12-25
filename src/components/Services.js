import React, { Fragment } from "react";
import "./Services.css";

const Services = () => {
  return (
    <Fragment>
      <div className="services-container">
        <h3 className="services-header">WHAT OUR SERVICES OFFER YOU</h3>
        <h2 className="services-head">Fire Protection</h2>
        <hr className="border-bottom" />
        <p className="services-body">
          Fire protection refers to the measures taken to prevent a fire from
          starting or spreading, as well as the systems and equipment used to
          protect people and property from the effects of a fire. At Activo Fire
          Science, we offer a range of fire protection services, including fire
          risk assessments, installation and maintenance of fire protection
          systems, and fire safety training. Our team of experts can help you
          identify potential fire hazards in your facility and develop a
          customized plan to reduce the risk of fire and protect your assets.
        </p>
        <h2 className="services-head">Fire Suppression</h2>
        <hr className="border-bottom" />
        <p className="services-body">
          Fire suppression refers to the use of various methods to extinguish a
          fire once it has started. These methods can include the use of water,
          foam, dry chemicals, or other fire-extinguishing agents. At Activo
          Fire Science Ltd, we offer a range of fire suppression solutions,
          including automatic fire sprinkler systems, portable fire
          extinguishers, and fire suppression systems for specialized
          environments such as computer server rooms and kitchen hoods
        </p>
        <h2 className="services-head">Fire Detection</h2>
        <hr className="border-bottom" />
        <p className="services-body">
          Fire detection refers to the use of sensors and alarms to alert people
          to the presence of a fire. These systems can include smoke detectors,
          heat detectors, and other types of sensors that are designed to detect
          the presence of fire. At Activo Fire Science Ltd, we offer a range of
          fire detection solutions, including smoke detectors, heat detectors,
          and combination smoke/heat detectors. We also offer fire alarm system
          design and installation services to help ensure that your fire
          detection system is properly configured and working properly to keep
          your property and occupants safe.
        </p>
      </div>
    </Fragment>
  );
};

export default Services;
