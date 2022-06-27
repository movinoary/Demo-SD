import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import * as cssModule from "../styles/index";
import * as Components from "../components/index";

const Nav = () => {
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [showModalLogin, setShowModalLogin] = useState(false);

  const LoginModal = () => {
    setShowModalLogin(prev => !prev);
  };

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const changeBackground = () => {
    if (window.scrollY >= 300) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <Components.ModalLogin
        showModal={showModalLogin}
        setShowModal={setShowModalLogin}
      />
      <nav
        className={
          navbar ? cssModule.Components.nav : cssModule.Components.navActive
        }
      >
        <div className={cssModule.Components.navIcon} onClick={handleClick}>
          {click ? <AiIcons.AiOutlineClose /> : <AiIcons.AiOutlineMenu />}
        </div>
        <div
          className={
            click
              ? cssModule.Components.navMenuMo
              : cssModule.Components.navMenu
          }
        >
          <Link
            to="/"
            className={cssModule.Components.navLink}
            onClick={closeMobileMenu}
          >
            <p>home</p>
          </Link>
          <Link
            to="profile"
            className={cssModule.Components.navLink}
            onClick={closeMobileMenu}
          >
            <p>profile</p>
          </Link>
          <Link
            to="berita"
            className={cssModule.Components.navLink}
            onClick={closeMobileMenu}
          >
            <p>berita</p>
          </Link>
          <Link
            to="video"
            className={cssModule.Components.navLink}
            onClick={closeMobileMenu}
          >
            <p>video</p>
          </Link>
          <button className={cssModule.Components.navLink} onClick={LoginModal}>
            Login
          </button>
        </div>
      </nav>
    </>
  );
};

export default Nav;
