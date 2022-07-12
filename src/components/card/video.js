import React from "react";
import ReactPlayer from "react-player/youtube";
import * as cssModule from "../../styles/index";

const CardVideo = ({ link, title }) => {
  return (
    <div className={cssModule.Components.cardVideo}>
      <ReactPlayer
        className={cssModule.Components.player}
        url={link}
        width="100%"
        heigth="100%"
      />
      <h3>{title}</h3>
    </div>
  );
};

export default CardVideo;
