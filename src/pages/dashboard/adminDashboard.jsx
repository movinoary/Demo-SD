import React from "react";
import * as cssModule from "../../styles/index";
import * as Components from "../../components/index";
import { BsCartPlusFill } from "react-icons/bs";

const AdminDashboard = () => {
  return (
    <div className={cssModule.Dashboard.homeDashboard}>
      <div className={cssModule.Dashboard.topRow}>
        <div className={cssModule.Dashboard.topLeft}>
          <Components.WidgetCalendar />
          <Components.WidgetAnnouncementAdmin />
          <Components.WidgetTodoListAdmin />
        </div>
        <Components.WidgetProfile />
        <Components.WidgetLink />
        <Components.WidgetUser />
        <div className={cssModule.Dashboard.gridCenter}>
          <Components.WidgetStatistics
            icon={<BsCartPlusFill />}
            percen="50%"
            value="200000000"
            title="anggaran"
          />
          <Components.WidgetStatistics
            icon={<BsCartPlusFill />}
            percen="50%"
            value="200000000"
            title="anggaran"
          />
          <Components.WidgetStatistics
            icon={<BsCartPlusFill />}
            percen="50%"
            value="200000000"
            title="anggaran yang buat itu loh ya kan"
          />
          <Components.WidgetStatistics
            icon={<BsCartPlusFill />}
            percen="50%"
            value="200000000"
            title="anggaran"
          />
          <Components.WidgetStatistics
            icon={<BsCartPlusFill />}
            percen="50%"
            value="200000000"
            title="anggaran"
          />
          <Components.WidgetStatistics
            icon={<BsCartPlusFill />}
            percen="50%"
            value="200000000"
            title="anggaran"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
