import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import * as Page from "./index";
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
        <Route path="/1" element={<Page.DetailBerita />} />
      </Routes>
      <div className={cssModule.Page.news}>
        <Components.Title title="Berita" subTitle="sekolah" />
        <div className={cssModule.Page.row}>
          <Components.CardNews
            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample52.jpg"
            date="23"
            month="oct"
            title="Jumlah Penyebaran Corona Hilang selama-lamanya"
            category="umum"
            onclick={() => navigasi("1")}
          />
          <Components.CardNews
            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample52.jpg"
            date="23"
            month="oct"
            title="Jumlah Penyebaran Corona Hilang selama-lamanya"
            category="umum"
          />
          <Components.CardNews
            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample52.jpg"
            date="23"
            month="oct"
            title="Jumlah Penyebaran Corona Hilang selama-lamanya"
            category="umum"
          />
          <Components.CardNews
            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample52.jpg"
            date="23"
            month="oct"
            title="Jumlah Penyebaran Corona Hilang selama-lamanya"
            category="umum"
          />
        </div>
        <Components.Title subTitle="pengumuman" endTitle="sekolah" />
        <div className={cssModule.Page.row}>
          <Components.CardNews
            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample52.jpg"
            date="23"
            month="oct"
            title="Jumlah Penyebaran Corona Hilang selama-lamanya"
            category="umum"
          />
          <Components.CardNews
            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample52.jpg"
            date="23"
            month="oct"
            title="Jumlah Penyebaran Corona Hilang selama-lamanya"
            category="umum"
          />
        </div>
        <div className={cssModule.Page.row}>
          <Components.CardNews
            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample52.jpg"
            date="23"
            month="oct"
            title="Jumlah Penyebaran Corona Hilang selama-lamanya"
            category="umum"
          />
          <Components.CardNews
            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample52.jpg"
            date="23"
            month="oct"
            title="Jumlah Penyebaran Corona Hilang selama-lamanya"
            category="umum"
          />
          <Components.CardNews
            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample52.jpg"
            date="23"
            month="oct"
            title="Jumlah Penyebaran Corona Hilang selama-lamanya"
            category="umum"
          />
        </div>
      </div>
    </>
  );
};

export default Berita;
