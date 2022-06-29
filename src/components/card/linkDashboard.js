import React from "react";
import { Link } from "react-router-dom";
import * as cssModule from "../../styles/index";

const CardLinkDashboard = ({ link, title, subTitle, icon }) => {
  return (
    <Link to={link} className={cssModule.Widget.link}>
      <p>{icon}</p>
      <h2>
        {title}
        <span>{subTitle}</span>
      </h2>
    </Link>
  );
};

export default CardLinkDashboard;
