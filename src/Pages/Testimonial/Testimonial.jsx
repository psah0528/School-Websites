import React, { useRef } from "react";
import backicon from "../../assets/backicon.png";
import nexticon from "../../assets/nexticon.png";
import user1 from "../../assets/user1.png";
import user2 from "../../assets/user2.png";
import user3 from "../../assets/user3.png";
import user4 from "../../assets/user4.png";
import "./Testimonial.css";
const Testimonial = () => {

  // slide both side start 
const slider = useRef();
let tx = 0;

const slideforward = ()=>{
  if(tx > -50){
    tx -= 25;
  }
  slider.current.style.transform = 'translateX(${tx}%)';

}
const slideback = ()=>{
  if(tx < 0){
    tx += 25;
  }
  slider.current.style.transform = 'translateX(${tx}%)';

}
// end slide code 

  return (
    <div className="testimonials">
      <img src={nexticon} alt="" className="next-btn" onClick={slideforward}/>
      <img src={backicon} alt="" className="back-btn"  onClick={slideback}/>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user1} alt="" />
                <div>
                  <h3>Williom Jackson</h3>
                  <span>Edusity , USA </span>
                </div>
              </div>
              <p>
                Choosing to pursue my degreee at Edusity was one of the best
                decisions i 've ever made . The supportive community , state of
                the art facilities , and commitment to academic excellence have
                truly exceed my expectations .
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user2} alt="" />
                <div>
                  <h3>Williom Jackson</h3>
                  <span>Edusity , USA </span>
                </div>
              </div>
              <p>
                Choosing to pursue my degreee at Edusity was one of the best
                decisions i 've ever made . The supportive community , state of
                the art facilities , and commitment to academic excellence have
                truly exceed my expectations .
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user3} alt="" />
                <div>
                  <h3>Williom Jackson</h3>
                  <span>Edusity , USA </span>
                </div>
              </div>
              <p>
                Choosing to pursue my degreee at Edusity was one of the best
                decisions i 've ever made . The supportive community , state of
                the art facilities , and commitment to academic excellence have
                truly exceed my expectations .
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user4} alt="" />
                <div>
                  <h3>Williom Jackson</h3>
                  <span>Edusity , USA </span>
                </div>
              </div>
              <p>
                Choosing to pursue my degreee at Edusity was one of the best
                decisions i 've ever made . The supportive community , state of
                the art facilities , and commitment to academic excellence have
                truly exceed my expectations .
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonial;
