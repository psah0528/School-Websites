import React from "react";
import Footer from "./component/Footer/Footer";
import Navbar from "./component/Navbar/Navbar";
import About from "./Pages/About/About";
import Campus from "./Pages/Campus/Campus";
import Contact from "./Pages/Contact/Contact";
import Hero from "./Pages/Hero/Hero";
import Programss from "./Pages/Programss/Programss";
import Testimonial from "./Pages/Testimonial/Testimonial";
import Title from "./Pages/Title/Title";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Title />
      <Footer />
      <Footer />


      <div className="container">
        <Title subTitle="Our PROGRAM " title="What We Offer" />
      <Programss />
        
        
        <Title subTitle="Gallery" title="Campus Photos " />
      <Campus />

      
        <Title subTitle="TESTIMONIALS" title="What Student Says" />
      <Testimonial />

      
        <Title subTitle="Contact Us " title="Get in Touch " />
      <Contact />

       
      </div>
    </div>
  );
};
export default App;
