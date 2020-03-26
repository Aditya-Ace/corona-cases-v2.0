import React from "react";
import { Link } from "react-router-dom";

import Precaution1 from "../assets/precaution_1.jpg";
import Precaution2 from "../assets/precaution_2.jpg";
import Precaution3 from "../assets/precaution_3.jpg";
import Precaution4 from "../assets/precaution_4.jpg";
import Precaution5 from "../assets/precaution_5.jpg";
import Precaution6 from "../assets/precaution_6.jpg";
import Precaution7 from "../assets/precaution_7.jpg";
import Precaution8 from "../assets/precaution_8.jpg";
import Precaution9 from "../assets/precaution_9.jpg";

const Precaustions = () => {
  return (
    <div className="precautions-content">
      <img src={Precaution1} alt="Precaustions" />
      <img src={Precaution2} alt="Precaustions" />
      <img src={Precaution3} alt="Precaustions" />
      <img src={Precaution4} alt="Precaustions" />
      <img src={Precaution5} alt="Precaustions" />
      <img src={Precaution6} alt="Precaustions" />
      <img src={Precaution7} alt="Precaustions" />
      <img src={Precaution8} alt="Precaustions" />
      <img src={Precaution9} alt="Precaustions" />
      <Link to="/" className="btn">
        Home
      </Link>
      <Link to="/globalreport" className="btn">
        Global Report
      </Link>
      <Link to="/userCountryCases" className="btn">
        Cases in your Country
      </Link>
    </div>
  );
};

export default Precaustions;
