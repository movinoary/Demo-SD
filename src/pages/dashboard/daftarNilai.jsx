import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as GiIcons from "react-icons/gi";
import * as cssModule from "../../styles/index";
import * as Page from "../index";

const DaftarNilai = () => {
  return (
    <div>
      <section className={cssModule.Widget.cardLink}>
        <Link to="umum" className={cssModule.Widget.link}>
          <p>
            <GiIcons.GiNewspaper />
          </p>
          <h2>
            Ulangan <span>Harian</span>
          </h2>
        </Link>
        <Link to="sekolah" className={cssModule.Widget.link}>
          <p>
            <FaIcons.FaRegNewspaper />
          </p>
          <h2>
            Pekan <span>Ulangan</span>
          </h2>
        </Link>
        <Link to="pengumuman" className={cssModule.Widget.link}>
          <p>
            <FaIcons.FaNewspaper />
          </p>
          <h2>
            Penilaian <span>Tengah</span> Semester
          </h2>
        </Link>
        <Link to="view" className={cssModule.Widget.link}>
          <p>
            <AiIcons.AiOutlineFolderView />
          </p>
          <h2>
            Penilaian <span>Akhir</span> Semester
          </h2>
        </Link>
        <Link to="view" className={cssModule.Widget.link}>
          <p>
            <AiIcons.AiOutlineFolderView />
          </p>
          <h2>
            Penilaian <span>Akhir</span> Tahun
          </h2>
        </Link>
      </section>
    </div>
  );
};

export default DaftarNilai;
