import React from "react";
import * as cssModule from "../../styles/index";

const CardFacility = ({ image, title, subTitle, endTitle }) => {
  return (
    <div className={cssModule.Components.cardFacility}>
      <img src={image} alt="fasilitas" />
      <div>
        <h3>{title}</h3>
        <h4>{subTitle}</h4>
        <p>{endTitle}</p>
      </div>
    </div>
  );
};

export default CardFacility;
