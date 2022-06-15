import React from "react";
// import titleVideo from "./assets/Video/GAsuiteVideo.mp4";
import xclose from "./assets/images/icons/xmark-solid.svg";

export default function showreel() {
  return (
    <>
      <div className="showreelvideo">
        <a href="/" className="showreelclosebutton">
          <img src={xclose} alt="video" />
        </a>
        <div className="showreelContent">
          <iframe
            id="showreelvideo"
            src="https://www.youtube.com/embed/gI2rkiKvAQI?&autoplay=1&loop=1"
            title="YouTube video player"
            frameborder="0"
            allow="autoplay; loop"
            // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            // allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
}
