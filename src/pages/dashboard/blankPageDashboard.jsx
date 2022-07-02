import React from "react";
import { motion } from "framer-motion";
import * as Assets from "../../assets/index";
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

const BlankPageNoData = () => {
  return (
    <motion.div
      className={cssModule.Dashboard.blankPage}
      initial="out"
      animate="in"
      exit="out"
      variants={Assets.animationScale}
      transition={Assets.transitionFast}
    >
      <span>
        <FcIcons.FcBriefcase />
      </span>
      <h1>Please Select Data</h1>
    </motion.div>
  );
};

export { BlankPageDashboardUser, BlankPageDashboardAdmin, BlankPageNoData };
