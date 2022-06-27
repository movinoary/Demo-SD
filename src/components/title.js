import React from "react";
import * as cssModule from "../styles/index";

const Title = ({ title, subTitle, endTitle }) => {
  return (
    <h1 className={cssModule.Components.title}>
      {title} <span> {subTitle}</span> {endTitle}
    </h1>
  );
};

export default Title;
