import React, { Fragment, useState } from "react";
// import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import classes from "./ExtraServices.module.css";
import ExtraServicesCard from "../reusables/ExtraServicesCard";
import design from "../Images/fotos/1.jpg";
import testing from "../Images/fotos/2.jpg";
import protocol from "../Images/fotos/3.jpg";
import management from "../Images/fotos/4.jpg";
import support from "../Images/fotos/5.jpg";

const ExtraServices = ({ isOpen, setIsOpen, clickHandler, children }) => {
  AOS.init();

  const ExtraServicesData = [
    {
      id: "s1",
      image: design,
      title: "System design and planning",
      body: "The design and planning of a fire protection system is a critical aspect of ensuring the safety and protection of a building or facility.",
    },
    {
      id: "s2",
      image: testing,
      title: "Testing and Commissioning",
      body: "Testing is the process of evaluating a system or component to ensure that it meets the specified requirements and functions as intended.",
    },
    {
      id: "s3",
      image: protocol,
      title: "Open Protocol Interoperability",
      body: "Open protocol interoperability refers to the ability of different systems and devices to communicate and exchange information using open, standard protocols.",
    },
    {
      id: "s5",
      image: management,
      title: "Project Management",
      body: "Activo's fire protection project management services provide expert guidance and support to organizations looking to ensure that their buildings and facilities are properly equipped with fire protection systems.",
    },
    {
      id: "s4",
      image: support,
      title: " After Sales Support",
      body: "Activo do offer comprehensive after sales support and maintenance policies to ensure that its clients are fully satisfied with their products and services.",
    },
  ];

  const readMoreHandler = () => {
    alert("hi");
  };
  return (
    <Fragment>
      <section className={classes.extraServices}>
        <div className={classes.extraHeader}>
          <h3>WHAT YOU SHOULD KNOW</h3>
        </div>
        <div className={classes.container}>
          {ExtraServicesData.map((service) => {
            return (
              <div
                key={service.id}
                id={service.id}
                className={classes.serviceCard}
                data-aos="flip-right"
              >
                <ExtraServicesCard>
                  <img src={service.image} alt="service" />
                  <h3>{service.title}</h3>
                  <p>{service.body}</p>

                  <p
                    className={classes.more}
                    onClick={() => {
                      clickHandler(service.id);
                      setIsOpen(true);
                    }}
                  >
                    READ MORE
                  </p>
                </ExtraServicesCard>
              </div>
            );
          })}
          {children}
        </div>
      </section>
    </Fragment>
  );
};

export default ExtraServices;
