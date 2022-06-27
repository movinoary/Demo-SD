import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";
import * as Page from "./index";
import * as cssModule from "../styles/index";
import * as Components from "../components/index";

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className={cssModule.Page.gridProfile}>
        <Components.CardLink
          icon={<FaIcons.FaSchool />}
          title="profile"
          subtitle="sekolah"
          onclick={() => navigate("/profile")}
        />
        <Components.CardLink
          icon={<FaIcons.FaChalkboardTeacher />}
          title="profile"
          subtitle="Guru"
          onclick={() => navigate("guru")}
        />
        <Components.CardLink
          icon={<RiIcons.RiLineChartFill />}
          title="Anggaran"
          onclick={() => navigate("anggaran")}
        />
      </div>
      <Routes>
        <Route path="/" element={<Page.ProfieSekolah />} />
        <Route path="guru" element={<Page.ProfileGuru />} />
        <Route path="anggaran" element={<Page.ProfileAnggaran />} />
      </Routes>
    </div>
  );
};

export default Profile;
