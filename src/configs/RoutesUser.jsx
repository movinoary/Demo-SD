import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import * as MdIcons from "react-icons/md";
import * as Components from "../components/index";
import * as cssModule from "../styles/index";
import * as Page from "../pages/index";

const RoutesUser = () => {
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
      <div className={cssModule.Dashboard.dashboard}>
        <header>
          <div>
            <div onClick={handleClick}>
              {click ? <MdIcons.MdMenu /> : <MdIcons.MdMenuOpen />}
            </div>
            <Link
              to="/user-dashboard"
              className={cssModule.Dashboard.titleLink}
            >
              <h1>User</h1>
              <h2>
                SDN <span>Jatirahayu</span> IV
              </h2>
            </Link>
          </div>
          <div>
            <button onClick={LogoutModal}>logout</button>
          </div>
        </header>
        <section className={cssModule.Dashboard.sectionDashboard}>
          <nav
            className={
              click
                ? cssModule.Dashboard.footerActiveDashboard
                : cssModule.Dashboard.footerDashboard
            }
          >
            <Link to="profile" className={cssModule.Dashboard.profile}>
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
          <div className={cssModule.Dashboard.routeDashboard}>
            <Routes>
              <Route exact path="/" element={<Page.UserDashboard />} />
              <Route exact path="profile" element={<Page.ProfileDashboard />} />
              <Route exact path="*" element={<Page.BlankPageDashboard />} />
            </Routes>
          </div>
        </section>
      </div>
    </>
  );
};

export default RoutesUser;
