import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as Components from "../index";
import * as cssModule from "../../styles/index";

const WidgetProfile = () => {
  const [modalEdit, setModalEdit] = useState(false);

  const EditModal = () => {
    setModalEdit(prev => !prev);
  };

  return (
    <>
      <Components.EditProfile
        showModal={modalEdit}
        setShowModal={setModalEdit}
      />
      <section className={cssModule.Widget.widgetProfile}>
        <div className={cssModule.Widget.topProfile}>
          <div>
            <h1>Irene</h1>
            <p>baebae@mail.com</p>
            <button onClick={EditModal}>Edit</button>
          </div>
          <img
            src="https://i.pinimg.com/564x/a8/af/46/a8af468d375599b57c80e9c2d1a34a80.jpg"
            alt="profile"
          />
        </div>
        <div className={cssModule.Widget.centerProfile}>
          <div>
            <p>@irene</p>
            <AiIcons.AiOutlineInstagram />
          </div>
          <div>
            <p>baebaeredred</p>
            <AiIcons.AiOutlineFacebook />
          </div>
          <div>
            <AiIcons.AiOutlineGoogle />
            <p>irenered@gmail.com</p>
          </div>
          <div>
            <AiIcons.AiOutlineWhatsApp />
            <p>1239895134531</p>
          </div>
          <div>
            <FaIcons.FaTelegramPlane />
            <p>32490850932</p>
          </div>
        </div>
        <footer className={cssModule.Widget.bottomProfile}>
          <div>
            <h4>Nama Lengkap</h4>
            <p>Mohammad Vino Arystio Nanda Fauzan</p>
          </div>
          <div>
            <h4>NIP</h4>
            <p>1231293-021312</p>
          </div>
          <div>
            <h4>NIK</h4>
            <p>1231293-021312</p>
          </div>
          <div>
            <h4>Jenis Kelamin</h4>
            <p>Perempuan</p>
          </div>
          <div>
            <h4>Alamat Lengkap</h4>
            <p>Jl.Palem</p>
          </div>
          <div>
            <h4>Jabatan</h4>
            <p>Guru</p>
          </div>
          <div>
            <h4>Golongan</h4>
            <p>PNS</p>
          </div>
          <div>
            <h4>Status Perkawinan</h4>
            <p>singel</p>
          </div>
          <div>
            <h4>Mengajar Sejak</h4>
            <p>2015</p>
          </div>
          <div>
            <h4>Status Mengajar</h4>
            <p>Active</p>
          </div>
        </footer>
      </section>
    </>
  );
};

const WidgetProfileGuru = () => {
  const [modalEdit, setModalEdit] = useState(false);

  const EditModal = () => {
    setModalEdit(prev => !prev);
  };

  return (
    <>
      <Components.EditProfile
        showModal={modalEdit}
        setShowModal={setModalEdit}
      />
      <section className={cssModule.Widget.widgetProfile}>
        <div className={cssModule.Widget.topProfile}>
          <div>
            <h1>Kim Tae-ri</h1>
            <p>na-haido@mail.com</p>
            <button onClick={EditModal}>Edit</button>
          </div>
          <img
            src="https://i.pinimg.com/736x/8d/8f/ae/8d8fae621adaf2b4516d2b9f22a0b93d.jpg"
            alt="profile"
          />
        </div>
        <div className={cssModule.Widget.centerProfile}>
          <div>
            <p>@kimtae-ri</p>
            <AiIcons.AiOutlineInstagram />
          </div>
          <div>
            <p>nahae-fo</p>
            <AiIcons.AiOutlineFacebook />
          </div>
          <div>
            <AiIcons.AiOutlineGoogle />
            <p>kimhai@gmail.com</p>
          </div>
          <div>
            <AiIcons.AiOutlineWhatsApp />
            <p>1239895134531</p>
          </div>
          <div>
            <FaIcons.FaTelegramPlane />
            <p>32490850932</p>
          </div>
        </div>
        <footer className={cssModule.Widget.bottomProfile}>
          <div>
            <h4>Nama Lengkap</h4>
            <p>Kim Tae-ri</p>
          </div>
          <div>
            <h4>NIP</h4>
            <p>1231293-021312</p>
          </div>
          <div>
            <h4>NIK</h4>
            <p>1231293-021312</p>
          </div>
          <div>
            <h4>Jenis Kelamin</h4>
            <p>Perempuan</p>
          </div>
          <div>
            <h4>Alamat Lengkap</h4>
            <p>Jl.Palem</p>
          </div>
          <div>
            <h4>Jabatan</h4>
            <p>Guru</p>
          </div>
          <div>
            <h4>Golongan</h4>
            <p>PNS</p>
          </div>
          <div>
            <h4>Status Perkawinan</h4>
            <p>singel</p>
          </div>
          <div>
            <h4>Mengajar Sejak</h4>
            <p>2015</p>
          </div>
          <div>
            <h4>Status Mengajar</h4>
            <p>Active</p>
          </div>
        </footer>
      </section>
    </>
  );
};

export { WidgetProfile, WidgetProfileGuru };
