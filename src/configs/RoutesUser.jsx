import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import * as MdIcons from "react-icons/md";
import * as BsIcons from "react-icons/bs";
import * as Components from "../components/index";
import * as cssModule from "../styles/index";
import * as Page from "../pages/index";

const RoutesUser = () => {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);
  const [showModalLogout, setShowModalLogout] = useState(false);

  const LogoutModal = () => {
    setShowModalLogout(prev => !prev);
  };

  function handleColor() {
    setColor(!color);
  }

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
            {color ? (
              <div
                onClick={handleColor}
                className={cssModule.Dashboard.colorWhite}
              >
                <BsIcons.BsFillSunFill
                  className={cssModule.Dashboard.colorLight}
                />
              </div>
            ) : (
              <div
                onClick={handleColor}
                className={cssModule.Dashboard.colorBlack}
              >
                <BsIcons.BsFillMoonFill
                  className={cssModule.Dashboard.colorDark}
                />
              </div>
            )}
            <button onClick={LogoutModal}>Keluar</button>
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
            <div className={cssModule.Dashboard.profile}>
              <img
                src="https://i.pinimg.com/564x/11/50/82/115082111ba44cb03a13f6efafd09d2b.jpg"
                alt="profile"
              />
              <h2>Irene</h2>
            </div>
            <div>
              {Components.DataNavDashboardUser.map((item, index) => {
                return <Components.SubNav item={item} key={index} />;
              })}
            </div>
          </nav>
          <div className={cssModule.Dashboard.routeDashboard}>
            <Routes>
              <Route exact path="/" element={<Page.UserDashboard />} />
              <Route exact path="*" element={<Page.BlankPageDashboardUser />} />
            </Routes>
          </div>
        </section>
      </div>
    </>
  );
};

export default RoutesUser;
