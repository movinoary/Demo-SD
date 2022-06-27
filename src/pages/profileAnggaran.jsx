import React from "react";
import * as cssModule from "../styles/index";
import * as Components from "../components/index";

const ProfileAnggaran = () => {
  return (
    <div>
      <Components.Header
        className={cssModule.Components.headerSub}
        title="anggaran"
        subtitle="sekolah"
      />
      <Components.CardStatistics />
    </div>
  );
};

export default ProfileAnggaran;
