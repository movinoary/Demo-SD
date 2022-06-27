import React from "react";
import ReactPlayer from "react-player/youtube";
import * as cssModule from "../../styles/index";

const CardVideo = () => {
  return (
    <div className={cssModule.Components.cardVideo}>
      <ReactPlayer
        className={cssModule.Components.player}
        url="https://www.youtube.com/watch?v=f6YDKF0LVWw"
        width="100%"
        heigth="100%"
      />
      <h3>main air</h3>
    </div>
  );
};

export default CardVideo;
