import React from "react";
import { motion } from "framer-motion";
import * as Assets from "../../assets/index";
import * as Components from "../../components/index";
import * as cssModule from "../../styles/index";

const DatabaseSekolah = () => {
  return (
    <motion.section
      className={cssModule.Dashboard.databaseSekolah}
      initial="out"
      animate="in"
      exit="out"
      variants={Assets.animationRight}
      transition={Assets.transitionFast}
    >
      <Components.WidgetInformation />
      <Components.WidgetDataAnggaran />
      <Components.WidgetDataInfo />
      <Components.WidgetMataPelajaran />
      <Components.WidgetTahunAjaran />
      <Components.WidgetKelas />
    </motion.section>
  );
};

export default DatabaseSekolah;
