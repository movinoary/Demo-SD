import React from "react";
import * as cssModule from "../styles/index";
import * as Components from "../components/index";

const ProfieSekolah = () => {
  return (
    <div>
      <Components.Header
        className={cssModule.Components.headerSub}
        title="profile"
        subtitle="sekolah"
      />
      <div className={cssModule.Page.gridProfileSekolah}>
        <section>
          <div className={cssModule.Page.left}>
            <Components.CardProfileLeft
              title="Identitas Satuan Pendidikan"
              descOne="Nama : Sekolah Dasar Negeri Jatirahayu IV"
              descTwo="NPSN : 2022815"
            />
          </div>
          <div className={cssModule.Page.right}>
            <Components.CardProfileLeft
              title="Identitas Satuan Pendidikan"
              descOne="Nama : Sekolah Dasar Negeri Jatirahayu IV"
              descTwo="NPSN : 2022815"
            />
          </div>
          <div className={cssModule.Page.left}>
            <Components.CardProfileLeft
              title="Identitas Satuan Pendidikan"
              descOne="Nama : Sekolah Dasar Negeri Jatirahayu IV"
              descTwo="NPSN : 2022815"
              descThree="Nama : Sekolah Dasar Negeri Jatirahayu IV"
              descFour="NPSN : 2022815"
              descFive="Nama : Sekolah Dasar Negeri Jatirahayu IV"
              descSix="NPSN : 2022815"
              descSeven="Nama : Sekolah Dasar Negeri Jatirahayu IV"
              descEight="NPSN : 2022815"
              descNine="Nama : Sekolah Dasar Negeri Jatirahayu IV"
              descTen="NPSN : 2022815"
            />
          </div>
          <div className={cssModule.Page.right}>
            <Components.CardProfileLeft
              title="Identitas Satuan Pendidikan"
              descOne="Nama : Sekolah Dasar Negeri Jatirahayu IV"
              descTwo="NPSN : 2022815"
            />
          </div>
          <div className={cssModule.Page.left}>
            <Components.CardProfileLeft
              title="Identitas Satuan Pendidikan"
              descOne="Nama : Sekolah Dasar Negeri Jatirahayu IV"
              descTwo="NPSN : 2022815"
            />
          </div>
          <div className={cssModule.Page.right}>
            <Components.CardProfileLeft
              title="Identitas Satuan Pendidikan"
              descOne="Nama : Sekolah Dasar Negeri Jatirahayu IV"
              descTwo="NPSN : 2022815"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProfieSekolah;
