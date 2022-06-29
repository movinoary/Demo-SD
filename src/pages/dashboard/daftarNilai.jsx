import React from "react";
import { Routes, Route } from "react-router-dom";
import * as cssModule from "../../styles/index";
import * as Page from "../index";

const DaftarNilai = () => {
  return (
    <div>
      <section className={cssModule.Widget.cardLink}>
        <Routes>
          <Route
            path="ulangan-harian"
            element={<Page.DaftarNilaiUlanganHarian />}
          />
          <Route
            path="pekan-ulangan"
            element={<Page.DaftarNilaiPekanUlangan />}
          />
          <Route
            path="penilaian-tengah-semester"
            element={<Page.DaftarNilaiTengahSemester />}
          />
          <Route
            path="penilaian-akhir-semester"
            element={<Page.DaftarNilaiAkhirSemester />}
          />
          <Route
            path="penilaian-akhir-tahun"
            element={<Page.DaftarNilaiAkhirTahun />}
          />
        </Routes>
      </section>
    </div>
  );
};

export default DaftarNilai;
