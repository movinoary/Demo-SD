import React from "react";
import { useParams } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as Assets from "../../assets/index";
import * as cssModule from "../../styles/index";

const WidgetDetailProfile = () => {
  const { nama } = useParams();

  return (
    <>
      {Assets.DataAkun.filter(item => item.nama === nama).map(item => (
        <section className={cssModule.Widget.widgetProfile} key={item}>
          <div className={cssModule.Widget.topProfile}>
            <div>
              <h1>{item.nama}</h1>
              <p>{item.email}</p>
            </div>
            <img src={item.image} alt="profile" />
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
      ))}
    </>
  );
};

export default WidgetDetailProfile;
