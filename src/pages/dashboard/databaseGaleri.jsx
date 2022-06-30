import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import * as MdIcons from "react-icons/md";
import * as cssModule from "../../styles/index";
import * as Page from "../index";

const DatabaseGaleri = () => {
  return (
    <>
      <section className={cssModule.Widget.cardLink}>
        <Link to="fasilitas" className={cssModule.Widget.link}>
          <p>
            <MdIcons.MdPhotoCamera />
          </p>
          <h2>
            Galeri <span>Fasilitas</span>
          </h2>
        </Link>
        <Link to="kegitan" className={cssModule.Widget.link}>
          <p>
            <MdIcons.MdPhoto />
          </p>
          <h2>
            Galeri <span>Kegiatan</span>
          </h2>
        </Link>
        <Link to="video-youtube" className={cssModule.Widget.link}>
          <p>
            <MdIcons.MdVideocam />
          </p>
          <h2>
            Video <span>Youtube</span>
          </h2>
        </Link>
      </section>
      <Routes>
        <Route path="/" element={<Page.BlankPageNoData />} />
        <Route path="fasilitas" element={<Page.DatabaseGaleriFasilitas />} />
        <Route path="kegitan" element={<Page.DatabaseGaleriKegiatan />} />
        <Route path="video-youtube" element={<Page.DatabaseVideo />} />
      </Routes>
    </>
  );
};

export default DatabaseGaleri;
