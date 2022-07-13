import React from "react";
import * as cssModule from "../../styles/index";
import * as Compoennts from "../../components/index";

const UserDashboard = () => {
  return (
    <div className={cssModule.Dashboard.homeDashboard}>
      <div className={cssModule.Dashboard.topRow}>
        <div className={cssModule.Dashboard.topLeft}>
          <Compoennts.WidgetCalendar />
          <Compoennts.WidgetAnnouncementUser />
          <Compoennts.WidgetTodoListUser />
        </div>
        <Compoennts.WidgetProfileGuru />
      </div>
    </div>
  );
};

export default UserDashboard;
