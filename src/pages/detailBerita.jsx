import React from "react";
import * as cssModule from "../styles/index";
import * as Compoennts from "../components/index";

const DetailBerita = ({ title, image, desc }) => {
  return (
    <div className={cssModule.Page.detailBerita}>
      <Compoennts.Title title="covid semakin meluas" />
      <div className={cssModule.Page.header}>
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample52.jpg"
          alt="berita"
        />
        <div className={cssModule.Page.data}>
          <div className={cssModule.Page.desc}>
            <h3>Pencipta </h3>
            <p>Vino Arystio</p>
          </div>
          <div className={cssModule.Page.desc}>
            <h3>Sumber </h3>
            <p>www.google.com</p>
          </div>
          <div className={cssModule.Page.desc}>
            <h3>Tanggal </h3>
            <p>12, april 2022</p>
          </div>
          <div className={cssModule.Page.desc}>
            <h3>Upload </h3>
            <p>3 hari yang lalu</p>
          </div>
          <div className={cssModule.Page.desc}>
            <h3>Kategori </h3>
            <p>Berita Sekolah</p>
          </div>
        </div>
      </div>
      <div className={cssModule.Page.footer}>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, quos.
          Consequuntur ipsa eligendi magnam omnis, quasi quas eveniet, eius
          culpa unde ratione praesentium odio, aut at dolore excepturi quis
          optio voluptates natus magni? Asperiores repellendus et ut corrupti
          dolorum harum quod sint totam praesentium nobis laborum, dignissimos
          mollitia? Ratione error non commodi necessitatibus soluta quisquam sed
          omnis, dolores et! Officiis, exercitationem magnam? Qui reprehenderit
          corporis voluptatem ducimus nihil alias tenetur, repellat quae
          voluptas nisi officia facere omnis laborum ipsa sed odit suscipit
          expedita nesciunt enim ad rerum voluptatum dolores dolore a? Sit
          nobis, deserunt aut iste ipsa quibusdam sunt! Est.
        </p>
      </div>
    </div>
  );
};

export default DetailBerita;
