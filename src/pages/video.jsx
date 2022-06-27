import React from "react";
import * as cssModule from "../styles/index";
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
          <Components.CardVideo />
          <Components.CardVideo />
          <Components.CardVideo />
          <Components.CardVideo />
        </div>
      </div>
    </>
  );
};

export default Video;
