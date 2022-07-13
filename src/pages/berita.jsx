import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import * as Page from "./index";
import * as Data from "../assets/index";
import * as Components from "../components/index";
import * as cssModule from "../styles/index";

const Berita = () => {
  const navigasi = useNavigate();

  return (
    <>
      <Components.Header
        className={cssModule.Components.headerSub}
        title="Berita"
        subtitle="Pengumuman"
      />
      <Routes>
        <Route path="/:judul" element={<Page.DetailBerita />} />
      </Routes>
      <div className={cssModule.Page.news}>
        <Components.Title title="Berita" subTitle="sekolah" />
        <div className={cssModule.Page.row}>
          {Data.DataBeritaBeranda.map(item => (
            <Components.CardNews
              onclick={() => navigasi(`${item.judul}`)}
              key={item.id}
              image={item.image}
              date={item.angka}
              month={item.bulan}
              title={item.judul}
              category={item.kategori}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Berita;
