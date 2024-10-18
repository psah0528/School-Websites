import React from "react";
import about_img from "../../assets/about.png";
import playicon from "../../assets/playicon.png";
import "./About.css";
const About = () => {
  return (
   


    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={playicon} alt="" className="playicon" />
      </div>
      <div className="about-right">
        <h3> ABOUT UNIVERSITY </h3>
        <h2>Nurturing Tomorrow's Leaders Today </h2>

        <p>Embark on a transformative educationals journey with 
         our university comprehensive educations programs. Our 
         cutting-edge curriculum is designed to empower students 
         with the knowledge skills , and experiences needed to excel
         in the dynamic fields of educations.....
        </p>

        <p>With a focus on innovation, hands-on learning ,
         and personalized mentorship , our programs prepare aspiring
         educators to make a meaningfull impact in classrooms , school , and 
        </p>


        <p>Whether you aspire to become a teacgers , administrator,
         counselor , or educational leader , our diverse range of programs offers the 
         perfect pathway to achieve your goals and unlock your 
         full potential in shaping the future of educations..
        </p>

      </div>
    </div>
  )
}

export default About;

