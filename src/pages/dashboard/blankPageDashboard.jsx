import React from "react";
import * as FcIcons from "react-icons/fc";
import * as cssModule from "../../styles/index";

const BlankPageDashboard = () => {
  return (
    <div className={cssModule.Dashboard.blankPage}>
      <span>
        <FcIcons.FcLock />
      </span>
      <h1>Sorry You Not Access in Here</h1>
      <p>Please Contact Admin to Change Role Account</p>
    </div>
  );
};

export default BlankPageDashboard;
