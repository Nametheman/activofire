import React, { useState } from "react";
import About from "./components/About";
import Carousel from "./components/carousel/Carousel";
import Contact from "./components/Contact";
import ExtraServices from "./components/ExtraServices";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Modal from "./Modal";
import design from "./Images/fotos/1.jpg";
import testing from "./Images/fotos/2.jpg";
import protocol from "./Images/fotos/3.jpg";
import management from "./Images/fotos/4.jpg";
import support from "./Images/fotos/5.jpg";

function App() {
  const [modaldata, setmodaldata] = useState();
  const ExtraServicesData = [
    {
      id: "s1",
      image: design,
      title: "System design and planning",
      body: "The design and planning of a fire protection system is a critical aspect of ensuring the safety and protection of a building or facility. A fire protection system is a combination of various components that work together to detect, contain, and extinguish fires. The design of a fire protection system begins with a risk assessment to identify potential fire hazards and the likelihood of those hazards occurring. This assessment will help determine the appropriate level of protection needed for the facility. Next, the system design will include the layout and placement of fire detection and alarm systems, such as smoke detectors and manual pull stations. It will also include the design of the fire suppression system, which may include sprinklers, fire clude the design of the fire suppression system, which may include sprinklers, fire hoses, and fire extinguishers. The system planning for a fire protection system involves the development of a comprehensive maintenance and testing plan to ensure that all components of the system are in proper working order. It may also include the development of emergency response and evacuation plans to ensure the safety of building occupants in the event of a fire. Overall, effective design and planning of a fire protection system is essential for the safety and protection of a facility and its occupants. requires a thorough understanding of fire hazards and the appropriate level of protection needed, as well as the proper placement and maintenance of system components.",
    },
    {
      id: "s2",
      image: testing,
      title: "Testing and Commissioning",
      body: "Testing is the process of evaluating a system or component to ensure that it meets the specified requirements and functions as intended. It may involve a range of activities, such as functional testing, performance testing, and stress testing, among others. Testing is typically conducted during the development or implementation phase of a project to ensure that the system is ready for use. Commissioning, on the other hand, is the process of ensuring that a system or component is properly installed and configured, and that it meets the required performance standards. Commissioning typically occurs after testing is complete and may involve activities such as verifying the operation of the system, training users, and preparing documentation. Testing and commissioning are important to ensure that a project is delivered on time, within budget, and meets the required performance standards. It is essential to carefully plan and coordinate these activities to ensure that the project is successful. At Activo, we take this part of our process serious to ensure our clients receive what was promised according to specifications and performance.",
    },
    {
      id: "s3",
      image: protocol,
      title: "Open Protocol Interoperability",
      body: "Open protocol interoperability refers to the ability of different systems and devices to communicate and exchange information using open, standard protocols. In the context of fire alarm systems, Activo engineers adoption of open protocol interoperability enables different components of the system to work together seamlessly, regardless of the manufacturer or model. Open protocols are standards that are publicly available and not proprietary to a specific company or product. They are designed to allow different systems and devices to communicate and exchange information in a consistent and standardized way. In the case of fire alarm systems, open protocols can be used to enable interoperability between different components of the system, such as fire detection and alarm devices, as well as the control panel and other system components. This can improve the overall functionality and reliability of the system, as well as make it easier to add or replace components as needed.",
    },
    {
      id: "s5",
      image: management,
      title: "Project Management",
      body: "Activo's fire protection project management services provide expert guidance and support to organizations looking to ensure that their buildings and facilities are properly equipped with fire protection systems. These systems are designed to detect fires, alert occupants, and suppress the spread of flames in the event of a fire. Activo's team of fire protection project management professionals has extensive experience in designing, installing, and maintaining fire protection systems for a wide range of buildings and facilities. The company works closely with clients to assess their specific fire protection needs and develop customized solutions that meet local codes and regulations. In addition to designing and installing fire protection systems, Activo also offers ongoing maintenance and testing services to ensure that these systems are functioning properly and are ready to protect buildings and occupants in the event of a fire. Whether you are a building owner, property manager, or facility manager, Activo's fire protection project management services can help you ensure the safety of your buildings and occupants.",
    },
    {
      id: "s4",
      image: support,
      title: " After Sales Support",
      body: "Activo do offer comprehensive after sales support and maintenance policies to ensure that its clients are fully satisfied with their products and services. These policies may include provisions for ongoing maintenance and support, as well as warranties and guarantees. Some specific examples of after sales support and maintenance services that Activo may offer include: Technical support: Activo provides technical support to help clients troubleshoot any issues they may have with their products or services. This may include phone and email support, as well as remote access to Activo's technical support team. Maintenance and repairs: Activo offers maintenance and repair services to keep its products and services in good working order. This may include periodic inspections, maintenance visits, and repairs as needed.Upgrades and updates: Activo may offer upgrades and updates to its products and services to ensure that they are up to date with the latest technology and features. Warranties and guarantees: Activo may offer warranties and guarantees on its products and services to provide its clients with additional peace of mind. These may include warranties on materials and workmanship, as well as guarantees on the performance of the products and services. Overall, Activo's after sales support and maintenance policies are designed to provide its clients with the support and assurance they need to fully utilize and benefit from their products and services.",
    },
  ];
  const readMoreHandler = (id) => {
    const modalData = ExtraServicesData.find((service) => service.id === id);
    setmodaldata(modalData);
  };

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          data={modaldata}
          type={modaldata.id}
        />
      )}
      <main>
        <Carousel />
        <section className="services" id="services">
          <Services />
          <ExtraServices
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            clickHandler={readMoreHandler}
          ></ExtraServices>
        </section>
        <section className="about" id="about">
          <About />
        </section>
        <section className="contact" id="contact">
          <Contact />
        </section>
        <section className="footer" id="footer">
          <Footer />
        </section>
      </main>
    </>
  );
}

export default App;
