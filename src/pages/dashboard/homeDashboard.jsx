import React from "react";
import * as cssModule from "../../styles/index";
import * as Compoennts from "../../components/index";

const HomeDashboard = () => {
  return (
    <div className={cssModule.Page.homeDashboard}>
      <div className={cssModule.Page.topRow}>
        <Compoennts.DashAnnouncement />
        <Compoennts.DashCalendar />
        <Compoennts.DashUser />
      </div>
    </div>
  );
};

export default HomeDashboard;
