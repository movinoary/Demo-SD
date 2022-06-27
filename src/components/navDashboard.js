import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as MdIcons from "react-icons/md";
import * as cssModule from "../styles/index";
import * as Components from "./index";
import SubNav from "./subNav";

const NavDashboard = () => {
  const [click, setClick] = useState(false);
  const [showModalLogout, setShowModalLogout] = useState(false);

  const LogoutModal = () => {
    setShowModalLogout(prev => !prev);
  };

  const handleClick = () => setClick(!click);

  return (
    <>
      <Components.ModalLogout
        showModal={showModalLogout}
        setShowModal={setShowModalLogout}
      />
      <nav className={cssModule.Components.navDashboard}>
        <header>
          <div>
            <div onClick={handleClick}>
              {click ? <MdIcons.MdMenu /> : <MdIcons.MdMenuOpen />}
            </div>
            <h1>
              SDN <span>Jatirahayu</span> IV
            </h1>
          </div>
          <div>
            <button onClick={LogoutModal}>logout</button>
          </div>
        </header>
        <footer
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
          </Link>
          <div>
            {Components.DataNavDashboard.map((item, index) => {
              return <SubNav item={item} key={index} />;
            })}
          </div>
        </footer>
      </nav>
    </>
  );
};

export default NavDashboard;
