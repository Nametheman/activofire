import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <section className="footer-container">
        <p className="first">
          © {new Date().getFullYear()} Activo Fire Science, Inc. All Rights
          Reserved. Designed by Emmanuel Owolabi.
        </p>
        {/* <p>
          Fire Alarm: ACR-1136 | Extinguisher: ECR1751245 | Sprinkler:
          SCR-G-1004 | Security: B17136
        </p> */}
      </section>
    </>
  );
};

export default Footer;
