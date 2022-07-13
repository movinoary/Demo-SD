import React from "react";
import * as cssModule from "../styles/index";
import * as Data from "../assets/index";
import * as Compoennts from "../components/index";
import { useParams } from "react-router-dom";

const DetailBerita = () => {
  const { judul } = useParams();

  return (
    <>
      {Data.DataBeritaBeranda.filter(product => product.judul === judul).map(
        item => (
          <div className={cssModule.Page.detailBerita}>
            <Compoennts.Title title="covid semakin meluas" />
            <div className={cssModule.Page.header}>
              <img src={item.image} alt="berita" />
              <div className={cssModule.Page.data}>
                <div className={cssModule.Page.desc}>
                  <h3>Pencipta </h3>
                  <p>Vino Arystio</p>
                </div>
                <div className={cssModule.Page.desc}>
                  <h3>Sumber </h3>
                  <p>{item.sumber}</p>
                </div>
                <div className={cssModule.Page.desc}>
                  <h3>Tanggal </h3>
                  <p>{item.tanggal}</p>
                </div>
                <div className={cssModule.Page.desc}>
                  <h3>Upload </h3>
                  <p>3 hari yang lalu</p>
                </div>
                <div className={cssModule.Page.desc}>
                  <h3>Kategori </h3>
                  <p>{item.kategori}</p>
                </div>
              </div>
            </div>
            <div className={cssModule.Page.footer}>
              <p>{item.isiBerita}</p>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default DetailBerita;
