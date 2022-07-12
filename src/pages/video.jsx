import React from "react";
import * as cssModule from "../styles/index";
import * as Assets from "../assets/index";
import * as Components from "../components/index";

const Video = () => {
  return (
    <>
      <Components.Header
        className={cssModule.Components.headerSub}
        title="video"
        subtitle="sekolah"
      />
      <div className={cssModule.Page.video}>
        <Components.Title title="list" subTitle="video" />
        <div className={cssModule.Page.row}>
          {Assets.DataGeleriVideo.map(item => (
            <Components.CardVideo
              key={item.id}
              link={item.link}
              title={item.judul}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Video;
