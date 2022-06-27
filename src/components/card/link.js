import React from "react";
import * as cssModule from "../../styles/index";

const CardLink = ({ icon, title, subtitle, onclick }) => {
  return (
    <button className={cssModule.Components.cardLink} onClick={onclick}>
      <div>{icon}</div>
      <h3>
        {title} <span>{subtitle}</span>
      </h3>
    </button>
  );
};

export default CardLink;
