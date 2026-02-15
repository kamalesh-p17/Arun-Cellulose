import React from "react";
import "./About.css";
import i1 from "../../assets/1.png";
import i2 from "../../assets/2.png";
import i3 from "../../assets/3.png";
import i4 from "../../assets/4.png";
import i5 from "../../assets/5.png";
import i6 from "../../assets/6.png";
import i7 from "../../assets/7.png";

const About = () => {
  return (
    <section className="about-section" id="about">
      
      <div className="about-container">
        
        {/* LEFT CONTENT */}
        <div className="about-text">
          <h2>About Us</h2>

          <p>We create Better Paper Boards for Everyone.</p>

          <p><strong>Founded in 2019.</strong></p>

          <p>
            ACI is the creator of Tree Free Paper Board, pulp boards using 
            cellulose residual from agro-based waste & garment & packaging industries.
          </p>

          <p>
            We produce affordable, planet-friendly paper boards:
          </p>

          <ul>
            <li>Reducing landfill waste</li>
            <li>Upcycling textile and agricultural residues</li>
          </ul>
        </div>

        {/* RIGHT IMAGES */}
        <div className="about-images">
          <img src={i1} alt="Paper Board 1" />
          <img src={i2} alt="Paper Board 1" />
          <img src={i3} alt="Paper Board 1" />
          <img src={i4} alt="Paper Board 1" />
          <img src={i5} alt="Paper Board 1" />
          <img src={i6} alt="Paper Board 1" />
          <img src={i7} alt="Paper Board 1" />
        </div>

      </div>
    </section>
  );
};

export default About;
