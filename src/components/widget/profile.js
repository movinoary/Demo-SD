import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as cssModule from "../../styles/index";

const WidgetProfile = () => {
  return (
    <section>
      <div>
        <img
          src="https://i.pinimg.com/736x/f8/f0/a2/f8f0a252e3ebe2d13dad1373001160eb.jpg"
          alt="profile"
        />
        <h1>Irene</h1>
        <p>Irene@mail.com</p>
      </div>
      <header>
        <div>
          <h2>sosial media </h2>
          <div className={cssModule.Widget.informationRow}>
            <AiIcons.AiOutlineInstagram />
            <div>
              <span>Insatgram</span>
              <p>www.Insatgram.com</p>
            </div>
          </div>
          <div>
            <AiIcons.AiOutlineYoutube />
            <div>
              <span>Youtube</span>
              <p>www.Youtube.com</p>
            </div>
          </div>
          <div>
            <AiIcons.AiOutlineFacebook />
            <div>
              <span>Facebook</span>
              <p>www.Facebook.com</p>
            </div>
          </div>
        </div>
        <div>
          <h2>contact</h2>
          <div>
            <AiIcons.AiOutlineMail />
            <div>
              <span>E-mail</span>
              <p>www.E-mail.com</p>
            </div>
          </div>
          <div>
            <AiIcons.AiOutlineWhatsApp />
            <div>
              <span>WhatApp</span>
              <p>www.WhatApp.com</p>
            </div>
          </div>
          <div>
            <BsIcons.BsTelephone />
            <div>
              <span>Telepon</span>
              <p>www.Telepon.com</p>
            </div>
          </div>
        </div>
      </header>
      <footer>
        <h2>Data</h2>
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
  );
};

export default WidgetProfile;
