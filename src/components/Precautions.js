import React from "react";

import Overlay from "./Overlay";

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
    <div className="container">
      <div className="row">
        <div className="col s12">
          <Overlay />
          <div className="carousel carousel-slider center gallery">
            <div className="carousel-item red white-text" href="#one!">
              <img src={Precaution5} alt="Precaustions" />
            </div>
            <div className="carousel-item amber white-text" href="#two!">
              <img src={Precaution2} alt="Precaustions" />
            </div>
            <div className="carousel-item green white-text" href="#three!">
              <img src={Precaution3} alt="Precaustions" />
            </div>
            <div className="carousel-item blue white-text" href="#four!">
              <img src={Precaution4} alt="Precaustions" />
            </div>
            <div className="carousel-item blue white-text" href="#five!">
              <img src={Precaution1} alt="Precaustions" />
            </div>
            <div className="carousel-item blue white-text" href="#six!">
              <img src={Precaution6} alt="Precaustions" />
            </div>
            <div className="carousel-item blue white-text" href="#seven!">
              <img src={Precaution7} alt="Precaustions" />
            </div>
            <div className="carousel-item blue white-text" href="#eight!">
              <img src={Precaution8} alt="Precaustions" />
            </div>
            <div className="carousel-item blue white-text" href="#nine!">
              <img src={Precaution9} alt="Precaustions" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Precaustions;
