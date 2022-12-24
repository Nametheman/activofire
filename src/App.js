import React from "react";
import About from "./components/About";
import Carousel from "./components/carousel/Carousel";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Services from "./components/Services";

function App() {
  return (
    <main>
      <Carousel />
      <section className="services">
        <Services />
      </section>
      <section className="about">
        <About />
      </section>
      <section className="contact">
        <Contact />
      </section>
      <section className="footer">
        <Footer />
      </section>
    </main>
  );
}

export default App;
