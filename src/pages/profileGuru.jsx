import React from "react";
import * as Assets from "../assets/index";
import * as cssModule from "../styles/index";
import * as Components from "../components/index";

const ProfileGuru = () => {
  return (
    <>
      <Components.Header
        className={cssModule.Components.headerSub}
        title="profile"
        subtitle="guru"
      />
      <div className={cssModule.Page.gridProfileGuru}>
        {Assets.DataAkun.map(item => (
          <Components.CardTeacher
            key={item.id}
            image={item.image}
            mapel={item.role}
            nama={item.nama}
            desc={item.email}
          />
        ))}
      </div>
    </>
  );
};

export default ProfileGuru;
