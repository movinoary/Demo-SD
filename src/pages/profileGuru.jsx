import React from "react";
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
        <Components.CardTeacher />
        <Components.CardTeacher />
        <Components.CardTeacher />
        <Components.CardTeacher />
        <Components.CardTeacher />
        <Components.CardTeacher />
        <Components.CardTeacher />
        <Components.CardTeacher />
        <Components.CardTeacher />
      </div>
    </>
  );
};

export default ProfileGuru;
