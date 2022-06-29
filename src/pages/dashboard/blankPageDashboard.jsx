import React from "react";
import * as FcIcons from "react-icons/fc";
import * as cssModule from "../../styles/index";

const BlankPageDashboardUser = () => {
  return (
    <div className={cssModule.Dashboard.blankPage}>
      <span>
        <FcIcons.FcLock />
      </span>
      <h1>Sorry You Not Access</h1>
      <p>Please Contact Admin to Change Role Account</p>
    </div>
  );
};

const BlankPageDashboardAdmin = () => {
  return (
    <div className={cssModule.Dashboard.blankPage}>
      <span>
        <FcIcons.FcServices />
      </span>
      <h1>Sorry This Feature is Not Ready</h1>
      <p>Please Waiting For It</p>
    </div>
  );
};

export { BlankPageDashboardUser, BlankPageDashboardAdmin };
