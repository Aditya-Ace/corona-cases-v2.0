import React from "react";
import backgroundVideo from "../assets/Corona.mp4";

const BackgroundVideo = () => {
  return (
    <div className="fullscreen-video-wrap">
      <video autoPlay muted loop playsInline id="videoBackground">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default BackgroundVideo;
