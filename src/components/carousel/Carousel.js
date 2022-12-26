import React, { useState, useEffect } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import pic1 from "../../Images/fire1.jpeg";
import pic2 from "../../Images/fire2.jpg";
import pic3 from "../../Images/fire3.jpg";
import pic4 from "../../Images/fire4.jpg";
import "./Carousel.css";
import { links } from "../links";

const Carousel = () => {
  const imageData = [
    { image: pic1 },
    { image: pic2 },
    { image: pic3 },
    { image: pic4 },
  ];

  const [current, setCurrent] = useState(0);
  const [mobileNav, setMobileNav] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const length = imageData.length;

  useEffect(() => {
    setTimeout(() => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    }, 5000);
  }, [current]);

  if (!Array.isArray(imageData) || imageData.length <= 0) {
    return null;
  }

  const openMenu = () => {
    setMobileNav(true);
  };
  const closeMenu = () => {
    setMobileNav(false);
  };

  const changeBackground = () => {
    if (window.scrollY >= 85) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <main className="carousel" id="home">
      {imageData.map((image, index) => {
        return (
          <div
            className={
              index === current ? "imageContainer active" : "imageContainer"
            }
          >
            {index === current && (
              <img src={image.image} alt="slide" className="image" />
            )}
          </div>
        );
      })}
      <section className="cta">
        <div className="menu-btn" onClick={openMenu}>
          <BiMenuAltRight />
        </div>
        <div className={navbar ? "nav active" : "nav"}>
          <div className="logo">
            <h3>Activo</h3>
            <p className="fire-science">FIRE SCIENCE</p>
          </div>

          <div className="navLinks">
            <div className="links">
              {links.map((link) => {
                return (
                  <a href={link.url} key={link.id}>
                    {link.text}
                  </a>
                );
              })}
            </div>
            <a className="call-us" href="tel: +2348033907077">
              CALL US: 234-(803)-390-7077
            </a>
          </div>
        </div>
        <div
          className={mobileNav == false ? "mobile-nav-disabled" : "mobile-nav"}
        >
          <div className="close-btn" onClick={closeMenu}>
            <MdClose />
          </div>

          <div className="mobile-links">
            {links.map((link) => {
              return (
                <a href={link.url} key={link.id} onClick={closeMenu}>
                  {link.text}
                </a>
              );
            })}
          </div>
        </div>
        <div className="cta-content">
          <p className="welcome">You are welcome to</p>
          <h2>ACTIVO FIRE SCIENCE LTD.</h2>
          <p className="intro">
            We are a leading provider of fire protection systems, services, and
            products for commercial and residential properties.
          </p>
          <div className="readMoreContainer">
            <a className="read-more" href="#">
              Read More
            </a>
            <a className="call-us2" href="tel: +2348033907077">
              CALL US: 234-(803)-390-7077
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Carousel;
