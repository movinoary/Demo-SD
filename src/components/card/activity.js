import React from "react";
import * as cssModule from "../../styles/index";
const CardActivity = ({ image, title }) => {
  return (
    <div className={cssModule.Components.cardActivity}>
      <img src={image} alt="Activity" />
      <div>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default CardActivity;
