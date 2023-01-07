import React from "react";
import classes from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";

const Modal = ({ setIsOpen, data, type }) => {
  const moreService = {};
  return (
    <>
      {type === "s1" && (
        <div className={classes.darkBG} onClick={() => setIsOpen(false)}>
          <div className={classes.centered}>
            <div className={classes.modal}>
              <div className={classes.modalHeader}></div>
              <div className={classes.modalContent}>
                <div className={classes.myHeader}>
                  <img src={data.image} alt="" />
                  <div className={classes.title}>
                    <h3>{data.title}</h3>
                    <p>
                      The design and planning of a fire protection system is a
                      critical aspect of ensuring the safety and protection of a
                      building or facility.
                    </p>
                  </div>
                </div>

                <div className={classes.modalTexts}>
                  <p>
                    The design and planning of a fire protection system is a
                    critical aspect of ensuring the safety and protection of a
                    building or facility. A fire protection system is a
                    combination of various components that work together to
                    detect, contain, and extinguish fires.
                  </p>
                  <br />
                  <p>
                    The design of a fire protection system begins with a risk
                    assessment to identify potential fire hazards and the
                    likelihood of those hazards occurring. This assessment will
                    help determine the appropriate level of protection needed
                    for the facility.
                  </p>
                  <br />
                  <p>
                    Next, the system design will include the layout and
                    placement of fire detection and alarm systems, such as smoke
                    detectors and manual pull stations. It will also include the
                    design of the fire suppression system, which may include
                    sprinklers, fire clude the design of the fire suppression
                    system, which may include sprinklers, fire hoses, and fire
                    extinguishers.
                  </p>
                  <br />
                  <p>
                    The system planning for a fire protection system involves
                    the development of a comprehensive maintenance and testing
                    plan to ensure that all components of the system are in
                    proper working order. It may also include the development of
                    emergency response and evacuation plans to ensure the safety
                    of building occupants in the event of a fire.
                  </p>
                </div>
              </div>
              <button
                className={classes.closeBtn}
                onClick={() => setIsOpen(false)}
              >
                <RiCloseLine style={{ marginBottom: "-3px" }} />
              </button>
            </div>
          </div>
        </div>
      )}

      {type === "s2" && (
        <div className={classes.darkBG} onClick={() => setIsOpen(false)}>
          <div className={classes.centered}>
            <div className={classes.modal}>
              <div className={classes.modalHeader}></div>
              <div className={classes.modalContent}>
                <div className={classes.myHeader}>
                  <img src={data.image} alt="" />
                  <div className={classes.title}>
                    <h3>{data.title}</h3>
                    <p>
                      Testing is the process of evaluating a system or component
                      to ensure that it meets the specified requirements and
                      functions as intended.
                    </p>
                  </div>
                </div>

                <div className={classes.modalTexts}>
                  <p>
                    Testing is the process of evaluating a system or component
                    to ensure that it meets the specified requirements and
                    functions as intended. It may involve a range of activities,
                    such as functional testing, performance testing, and stress
                    testing, among others. Testing is typically conducted during
                    the development or implementation phase of a project to
                    ensure that the system is ready for use.
                  </p>
                  <br />
                  <p>
                    Commissioning, on the other hand, is the process of ensuring
                    that a system or component is properly installed and
                    configured, and that it meets the required performance
                    standards. Commissioning typically occurs after testing is
                    complete and may involve activities such as verifying the
                    operation of the system, training users, and preparing
                    documentation.
                  </p>
                  <br />
                  <p>
                    Testing and commissioning are important to ensure that a
                    project is delivered on time, within budget, and meets the
                    required performance standards. It is essential to carefully
                    plan and coordinate these activities to ensure that the
                    project is successful.
                  </p>
                  <br />
                  <p>
                    At <strong>Activo Fire Science</strong>, we take this part
                    of our process serious to ensure our clients receive what
                    was promised according to specifications and performance.
                  </p>
                </div>
              </div>
              <button
                className={classes.closeBtn}
                onClick={() => setIsOpen(false)}
              >
                <RiCloseLine style={{ marginBottom: "-3px" }} />
              </button>
            </div>
          </div>
        </div>
      )}

      {type === "s3" && (
        <div className={classes.darkBG} onClick={() => setIsOpen(false)}>
          <div className={classes.centered}>
            <div className={classes.modal}>
              <div className={classes.modalHeader}></div>
              <div className={classes.modalContent}>
                <div className={classes.myHeader}>
                  <img src={data.image} alt="" />
                  <div className={classes.title}>
                    <h3>{data.title}</h3>
                    <p>
                      Open protocol interoperability refers to the ability of
                      different systems and devices to communicate and exchange
                      information using open, standard protocols.
                    </p>
                  </div>
                </div>

                <div className={classes.modalTexts}>
                  <p>
                    Open protocol interoperability refers to the ability of
                    different systems and devices to communicate and exchange
                    information using open, standard protocols. In the context
                    of fire alarm systems, Activo engineers adoption of open
                    protocol interoperability enables different components of
                    the system to work together seamlessly, regardless of the
                    manufacturer or model.
                  </p>
                  <br />
                  <p>
                    Open protocols are standards that are publicly available and
                    not proprietary to a specific company or product. They are
                    designed to allow different systems and devices to
                    communicate and exchange information in a consistent and
                    standardized way.
                  </p>
                  <br />
                  <p>
                    In the case of fire alarm systems, open protocols can be
                    used to enable interoperability between different components
                    of the system, such as fire detection and alarm devices, as
                    well as the control panel and other system components. This
                    can improve the overall functionality and reliability of the
                    system, as well as make it easier to add or replace
                    components as needed.
                  </p>
                </div>
              </div>
              <button
                className={classes.closeBtn}
                onClick={() => setIsOpen(false)}
              >
                <RiCloseLine style={{ marginBottom: "-3px" }} />
              </button>
            </div>
          </div>
        </div>
      )}

      {type === "s4" && (
        <div className={classes.darkBG} onClick={() => setIsOpen(false)}>
          <div className={classes.centered}>
            <div className={classes.modal}>
              <div className={classes.modalHeader}></div>
              <div className={classes.modalContent}>
                <div className={classes.myHeader}>
                  <img src={data.image} alt="" />
                  <div className={classes.title}>
                    <h3>{data.title}</h3>
                    <p>
                      Activo do offer comprehensive after sales support and
                      maintenance policies to ensure that its clients are fully
                      satisfied with their products and services. .
                    </p>
                  </div>
                </div>

                <div className={classes.modalTexts}>
                  <p>
                    These policies may include provisions for ongoing
                    maintenance and support, as well as warranties and
                    guarantees. Some specific examples of after sales support
                    and maintenance services that Activo may offer include:
                  </p>
                  <br />
                  <ul>
                    <li style={{ marginBottom: "20px" }}>
                      <span style={{ fontWeight: "bold" }}>
                        Technical support
                      </span>{" "}
                      <br /> Activo provides technical support to help clients
                      troubleshoot any issues they may have with their products
                      or services. This may include phone and email support, as
                      well as remote access to Activo's technical support team.
                      Maintenance and repairs: Activo offers maintenance and
                      repair services to keep its products and services in good
                      working order. This may include periodic inspections,
                      maintenance visits, and repairs as needed. Upgrades and
                      updates: Activo may offer upgrades and updates to its
                      products and services to ensure that they are up to date
                      with the latest technology and features.
                    </li>
                    <li>
                      <span style={{ fontWeight: "bold" }}>
                        Warranties and guarantees
                      </span>{" "}
                      <br /> Activo provides technical support to help clients
                      troubleshoot any issues they may have with their products
                      or services. This may include phone and email support, as
                      well as remote access to Activo's technical support team.
                      Maintenance and repairs: Activo offers maintenance and
                      repair services to keep its products and services in good
                      working order. This may include periodic inspections,
                      maintenance visits, and repairs as needed. Upgrades and
                      updates: Activo may offer upgrades and updates to its
                      products and services to ensure that they are up to date
                      with the latest technology and features.
                    </li>
                  </ul>
                </div>
              </div>
              <button
                className={classes.closeBtn}
                onClick={() => setIsOpen(false)}
              >
                <RiCloseLine style={{ marginBottom: "-3px" }} />
              </button>
            </div>
          </div>
        </div>
      )}

      {type === "s5" && (
        <div className={classes.darkBG} onClick={() => setIsOpen(false)}>
          <div className={classes.centered}>
            <div className={classes.modal}>
              <div className={classes.modalHeader}></div>
              <div className={classes.modalContent}>
                <div className={classes.myHeader}>
                  <img src={data.image} alt="" />
                  <div className={classes.title}>
                    <h3>{data.title}</h3>
                    <p>
                      Activo's fire protection project management services
                      provide expert guidance and support to organizations
                      looking to ensure that their buildings and facilities are
                      properly equipped with fire protection systems.
                    </p>
                  </div>
                </div>

                <div className={classes.modalTexts}>
                  <p>
                    Activo's team of fire protection project management
                    professionals has extensive experience in designing,
                    installing, and maintaining fire protection systems for a
                    wide range of buildings and facilities. The company works
                    closely with clients to assess their specific fire
                    protection needs and develop customized solutions that meet
                    local codes and regulations.
                  </p>
                  <br />
                  <p>
                    In addition to designing and installing fire protection
                    systems, Activo also offers ongoing maintenance and testing
                    services to ensure that these systems are functioning
                    properly and are ready to protect buildings and occupants in
                    the event of a fire.
                  </p>
                  <br />
                  <p>
                    Whether you are a building owner, property manager, or
                    facility manager, <strong>Activo's fire protection </strong>
                    project management services can help you ensure the safety
                    of your buildings and occupants.
                  </p>
                </div>
              </div>
              <button
                className={classes.closeBtn}
                onClick={() => setIsOpen(false)}
              >
                <RiCloseLine style={{ marginBottom: "-3px" }} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
