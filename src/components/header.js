import React from "react";
import { motion } from "framer-motion";
import * as Assets from "../assets/index";

const Header = ({ className, title, subtitle }) => {
  return (
    <div className={className}>
      <motion.h1
        initial="out"
        animate="in"
        exit="out"
        variants={Assets.animationScale}
        transition={Assets.transitionSlow}
      >
        {title}
      </motion.h1>
      <motion.h3
        initial="out"
        animate="in"
        exit="out"
        variants={Assets.animationScale}
        transition={Assets.transitionSlow}
      >
        {subtitle}
      </motion.h3>
    </div>
  );
};

export default Header;
