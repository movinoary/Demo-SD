import React from "react";
import * as Assets from "../assets/index";
import * as cssModule from "../styles/index";
import * as Components from "../components/index";
import { BsCartPlusFill } from "react-icons/bs";

const ProfileAnggaran = () => {
  return (
    <div>
      <Components.Header
        className={cssModule.Components.headerSub}
        title="anggaran"
        subtitle="sekolah"
      />
      <div className={cssModule.Page.gridAnggaran}>
        {Assets.DataAnggaran.map(item => (
          <Components.CardStatistics
            key={item.id}
            icon={<BsCartPlusFill />}
            percen={item.persen}
            value={item.nilai}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfileAnggaran;
