import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import * as Assets from "../../assets/index";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as GiIcons from "react-icons/gi";
import * as cssModule from "../../styles/index";
import * as Page from "../index";

const DatabaseBerita = () => {
  return (
    <>
      <section className={cssModule.Widget.cardLink}>
        <Link to="beranda" className={cssModule.Widget.link}>
          <p>
            <GiIcons.GiNewspaper />
          </p>
          <h2>
            Berita <span>Beranda</span>
          </h2>
        </Link>
        <Link to="sekolah" className={cssModule.Widget.link}>
          <p>
            <FaIcons.FaRegNewspaper />
          </p>
          <h2>
            Berita <span>Sekolah</span>
          </h2>
        </Link>
        <Link to="pengumuman" className={cssModule.Widget.link}>
          <p>
            <FaIcons.FaNewspaper />
          </p>
          <h2>
            Pengumuman <span>Sekolah</span>
          </h2>
        </Link>
        <Link to="view" className={cssModule.Widget.link}>
          <p>
            <AiIcons.AiOutlineFolderView />
          </p>
          <h2>
            Berita <span>View</span>
          </h2>
        </Link>
      </section>
      <motion.div
        initial="out"
        animate="in"
        exit="end"
        variants={Assets.animationRightToLeft}
        transition={Assets.transitionMiddle}
      >
        <Routes>
          <Route path="/" element={<Page.BlankPageNoData />} />
          <Route path="beranda" element={<Page.DatabaseBeritaBeranda />} />
          <Route path="sekolah" element={<Page.DatabaseBeritaSekolah />} />
          <Route
            path="pengumuman"
            element={<Page.DatabasePengumumanSekolah />}
          />
          <Route path="view/*" element={<Page.Berita />} />
        </Routes>
      </motion.div>
    </>
  );
};

export default DatabaseBerita;
