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
            <p>Irene@mail.com</p>
            <button onClick={EditModal}>Edit</button>
          </div>
          <img
            src="https://i.pinimg.com/736x/f8/f0/a2/f8f0a252e3ebe2d13dad1373001160eb.jpg"
            alt="profile"
          />
        </div>
        <div className={cssModule.Widget.centerProfile}>
          <div>
            <p>@vinoArystio</p>
            <AiIcons.AiOutlineInstagram />
          </div>
          <div>
            <p>VinoArystio</p>
            <AiIcons.AiOutlineFacebook />
          </div>
          <div>
            <AiIcons.AiOutlineGoogle />
            <p>vino1arystio@gmail.com</p>
          </div>
          <div>
            <AiIcons.AiOutlineWhatsApp />
            <p>085156611224</p>
          </div>
          <div>
            <FaIcons.FaTelegramPlane />
            <p>085156611224</p>
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
            <p>L</p>
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
            <p>Kawin</p>
          </div>
          <div>
            <h4>Mengajar Sejak</h4>
            <p>2012</p>
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

export default WidgetProfile;
