import React from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import * as cssModule from "../../styles/index";

const WidgetLink = () => {
  return (
    <section className={cssModule.Widget.cardLink}>
      <Link to="database/berita" className={cssModule.Widget.link}>
        <p>
          <FaIcons.FaNewspaper />
        </p>
        <h2>
          Database <span>Berita</span>
        </h2>
      </Link>
      <Link to="database/sekolah" className={cssModule.Widget.link}>
        <p>
          <FaIcons.FaSchool />
        </p>
        <h2>
          Database <span>Sekolah</span>
        </h2>
      </Link>
      <Link to="database/galeri" className={cssModule.Widget.link}>
        <p>
          <MdIcons.MdPhotoLibrary />
        </p>
        <h2>
          Database <span>Galeri</span>
        </h2>
      </Link>
    </section>
  );
};

export default WidgetLink;
