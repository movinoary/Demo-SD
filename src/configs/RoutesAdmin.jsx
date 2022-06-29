import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import * as BsIcons from "react-icons/bs";
import * as MdIcons from "react-icons/md";
import * as Components from "../components/index";
import * as cssModule from "../styles/index";
import * as Page from "../pages/index";

const RoutesAdmin = () => {
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
              to="/admin-dashboard"
              className={cssModule.Dashboard.titleLink}
            >
              <h1>Admin</h1>
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
            <div className={cssModule.Dashboard.profile}>
              <img
                src="https://i.pinimg.com/736x/f8/f0/a2/f8f0a252e3ebe2d13dad1373001160eb.jpg"
                alt="profile"
              />
              <h2>Irene</h2>
              <p>Irene@mail.com</p>
            </div>
            <div>
              {Components.DataNavDashboard.map((item, index) => {
                return <Components.SubNav item={item} key={index} />;
              })}
            </div>
          </nav>
          <div className={cssModule.Dashboard.routeDashboard}>
            <Routes>
              <Route exact path="/" element={<Page.AdminDashboard />} />
              <Route exact path="*" element={<Page.BlankPageDashboard />} />
              <Route exact path="profile" element={<Page.ProfileDashboard />} />
              {/* Database */}
              <Route
                exact
                path="database/berita/*"
                element={<Page.DatabaseBerita />}
              />
              <Route
                exact
                path="database/galeri/*"
                element={<Page.DatabaseGaleri />}
              />
              <Route
                exact
                path="database/Sekolah"
                element={<Page.DatabaseSekolah />}
              />
              {/* Perangkat Pembelajaran */}
              <Route
                exact
                path="perangkat-pembelajaran/silabus"
                element={<Page.PembelajaranSilabus />}
              />
              <Route
                exact
                path="perangkat-pembelajaran/kkm"
                element={<Page.PembelajaranKkm />}
              />
              <Route
                exact
                path="perangkat-pembelajaran/prota"
                element={<Page.PembelajaranProta />}
              />
              <Route
                exact
                path="perangkat-pembelajaran/promes"
                element={<Page.PembelajaranPromes />}
              />
              {/* Bank Soal */}
              <Route
                exact
                path="bank-soal/pendidikan-agama"
                element={<Page.BankSoalAgama />}
              />
              {/* Data Siswa */}
              <Route
                exact
                path="data-siswa-kelas-1"
                element={<Page.DataSiswaKelas1 />}
              />
              {/* Daftar Nilai */}
              <Route
                exact
                path="daftar-nilai/"
                element={<Page.DaftarNilai />}
              />
            </Routes>
          </div>
        </section>
      </div>
    </>
  );
};

export default RoutesAdmin;
