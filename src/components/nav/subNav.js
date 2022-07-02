import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import * as Assets from "../../assets/index";
import * as cssModule from "../../styles/index";

const SubNav = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <div
        onClick={item.subNav && showSubnav}
        className={cssModule.Dashboard.menu}
      >
        {item.path ? (
          <Link className={cssModule.Dashboard.list} to={item.path}>
            <span>{item.icon}</span>
            <p>{item.title}</p>
          </Link>
        ) : (
          <div className={cssModule.Dashboard.list}>
            <span>{item.icon}</span>
            <p>{item.title}</p>
          </div>
        )}
        <div className={cssModule.Dashboard.arrow}>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </div>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <Link
              to={item.path}
              key={index}
              className={cssModule.Dashboard.subMenu}
            >
              <motion.span
                initial="out"
                animate="in"
                exit="out"
                variants={Assets.animationLeft}
                transition={Assets.transitionFast}
              >
                {item.icon}
              </motion.span>
              <motion.p
                initial="out"
                animate="in"
                exit="out"
                variants={Assets.animationRight}
                transition={Assets.transitionFast}
              >
                {item.title}
              </motion.p>
            </Link>
          );
        })}
    </>
  );
};

export default SubNav;
