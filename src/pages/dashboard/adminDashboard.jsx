import React from "react";
import { BsCartPlusFill } from "react-icons/bs";
import { motion } from "framer-motion";
import * as Assets from "../../assets/index";
import * as cssModule from "../../styles/index";
import * as Components from "../../components/index";

const AdminDashboard = () => {
  return (
    <div className={cssModule.Dashboard.homeDashboard}>
      <motion.div
        className={cssModule.Dashboard.topRow}
        initial="out"
        animate="in"
        exit="out"
        variants={Assets.animationLeft}
        transition={Assets.transitionFast}
      >
        <div className={cssModule.Dashboard.topLeft}>
          <Components.WidgetCalendar />
          <Components.WidgetAnnouncementAdmin />
          <Components.WidgetTodoListAdmin />
        </div>
        <Components.WidgetProfile />
        <Components.WidgetLink />
        <Components.WidgetUser />
        <div className={cssModule.Dashboard.gridCenter}>
          {Assets.DataAnggaran.map(item => (
            <Components.WidgetStatistics
              key={item.id}
              icon={<BsCartPlusFill />}
              percen={item.persen}
              value={item.nilai}
              title={item.title}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AdminDashboard;
