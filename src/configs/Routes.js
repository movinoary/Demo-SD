import React from "react";
import { Route, Routes } from "react-router-dom";
import * as Components from "../components/index";
import * as Page from "../pages/index";

const RoutesHome = () => {
  return (
    <>
      <Components.Nav />
      <Routes>
        <Route exact path="/" element={<Page.Home />} />
        <Route exact path="profile/*" element={<Page.Profile />} />
        <Route exact path="berita/*" element={<Page.Berita />} />
        <Route exact path="video" element={<Page.Video />} />
      </Routes>
      <Components.Footer />
    </>
  );
};

export default RoutesHome;
