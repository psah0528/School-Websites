import React from "react";
import heronxt1 from "../../assets/heronxt1.png";
import heronxt2 from "../../assets/heronxt2.png";
import heronxt3 from "../../assets/heronxt3.png";
import programicon1 from "../../assets/programicon1.png";
import programicon2 from "../../assets/programicon2.png";
import programicon3 from "../../assets/programicon3.png";
import "./Programss.css";

const Programss = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={heronxt1} alt="" />
        <div className="caption">
          <img src={programicon1} alt="" />
          <p> Graduation Degree </p>
        </div>
      </div>

      <div className="program">
        <img src={heronxt2} alt="" />
        <div className="caption">
          <img src={programicon2} alt="" />
          <p> Masters Degree </p>
        </div>
      </div>

      <div className="program">
        <img src={heronxt3} alt="" />
        <div className="caption">
          <img src={programicon3} alt="" />
          <p> Post Graduations </p>
        </div>
      </div>
    </div>
  );
};

export default Programss;
