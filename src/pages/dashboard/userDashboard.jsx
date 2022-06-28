import React from "react";
import * as cssModule from "../../styles/index";
import * as Compoennts from "../../components/index";

const UserDashboard = () => {
  return (
    <div className={cssModule.Dashboard.homeDashboard}>
      <div className={cssModule.Dashboard.topRow}>
        <div className={cssModule.Dashboard.top}>
          <Compoennts.WidgetTodoListUser />
          <Compoennts.WidgetAnnouncementUser />
          <Compoennts.WidgetCalendar />
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
