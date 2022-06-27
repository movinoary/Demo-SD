import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import * as MdIcons from "react-icons/md";
import * as Components from "../components/index";
import * as cssModule from "../styles/index";
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

const RoutesDashboard = () => {
  const [click, setClick] = useState(false);
  const [showModalLogout, setShowModalLogout] = useState(false);

  const LogoutModal = () => {
    setShowModalLogout(prev => !prev);
  };

  function handleClick() {
    setClick(!click);
  }

  return (
    <>
      <Components.ModalLogout
        showModal={showModalLogout}
        setShowModal={setShowModalLogout}
      />
      <div className={cssModule.Components.dashboard}>
        <header>
          <div>
            <div onClick={handleClick}>
              {click ? <MdIcons.MdMenu /> : <MdIcons.MdMenuOpen />}
            </div>
            <Link to="/dashboard" className={cssModule.Components.titleLink}>
              <h1>
                SDN <span>Jatirahayu</span> IV
              </h1>
            </Link>
          </div>
          <div>
            <button onClick={LogoutModal}>logout</button>
          </div>
        </header>
        <section className={cssModule.Page.sectionDashboard}>
          <nav
            className={
              click
                ? cssModule.Components.footerActiveDashboard
                : cssModule.Components.footerDashboard
            }
          >
            <Link to="profile" className={cssModule.Components.profile}>
              <img
                src="https://i.pinimg.com/736x/f8/f0/a2/f8f0a252e3ebe2d13dad1373001160eb.jpg"
                alt="profile"
              />
              <h2>Irene</h2>
              <p>Irene@mail.com</p>
            </Link>
            <div>
              {Components.DataNavDashboard.map((item, index) => {
                return <Components.SubNav item={item} key={index} />;
              })}
            </div>
          </nav>
          <div className={cssModule.Page.routeDashboard}>
            <Routes>
              <Route exact path="/" element={<Page.HomeDashboard />} />
              <Route exact path="database" element={<Page.HomeDashboard />} />
              <Route exact path="profile" element={<Page.ProfileDashboard />} />
            </Routes>
          </div>
        </section>
      </div>
    </>
  );
};

export { RoutesHome, RoutesDashboard };
