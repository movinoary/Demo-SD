import React from "react";
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
        <Components.CardStatistics
          icon={<BsCartPlusFill />}
          percen="50%"
          value="200000000"
          title="anggaran"
        />
        <Components.CardStatistics
          icon={<BsCartPlusFill />}
          percen="50%"
          value="200000000"
          title="anggaran"
        />
        <Components.CardStatistics
          icon={<BsCartPlusFill />}
          percen="50%"
          value="200000000"
          title="anggaran"
        />
        <Components.CardStatistics
          icon={<BsCartPlusFill />}
          percen="50%"
          value="200000000"
          title="anggaran"
        />
        <Components.CardStatistics
          icon={<BsCartPlusFill />}
          percen="50%"
          value="200000000"
          title="anggaran"
        />
      </div>
    </div>
  );
};

export default ProfileAnggaran;
