import React from "react";
import * as cssModule from "../../styles/index";
import * as Compoennts from "../../components/index";

const AdminDashboard = () => {
  return (
    <div className={cssModule.Dashboard.homeDashboard}>
      <div className={cssModule.Dashboard.topRow}>
        <div className={cssModule.Dashboard.top}>
          <Compoennts.WidgetTodoListAdmin />
          <Compoennts.WidgetAnnouncementAdmin />
          <Compoennts.WidgetCalendar />
        </div>
        <Compoennts.WidgetLink />
        <Compoennts.WidgetUser />
      </div>
    </div>
  );
};

export default AdminDashboard;
