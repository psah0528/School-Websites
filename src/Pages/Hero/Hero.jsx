import React from "react";
import dark_arrow from '../../assets/dark_arrow.png';
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We Ensure better educations for a better world</h1>
        <p>Hello</p>
        <p>
          Our Cutting edge curriculum is designed to empower students with the
          knowledge , skills , and experiences needed to excel the dynamic
          fields of education
        </p>
        <button className="btn"> Explore More  <img src={dark_arrow} alt="" /> </button>
      </div>
    </div>
  );
};
export default Hero;
