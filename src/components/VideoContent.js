import React from "react";
import Overlay from "./Overlay";

const VideoContent = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <Overlay />
          <div className="video-content">
            <h1>COVID - 19</h1>
            <h5>About the Virus</h5>
            <p>
              Coronavirus disease (COVID-19) is an infectious disease caused by
              a new virus. The disease causes respiratory illness (like the flu)
              with symptoms such as a cough, fever, and in more severe cases,
              difficulty breathing. You can protect yourself by washing your
              hands frequently, avoiding touching your face, and avoiding close
              contact (1 meter or 3 feet) with people who are unwell.
            </p>
            <h5>How it Spreads</h5>
            <p>
              Coronavirus disease spreads primarily through contact with an
              infected person when they cough or sneeze. It also spreads when a
              person touches a surface or object that has the virus on it, then
              touches their eyes, nose, or mouth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoContent;
