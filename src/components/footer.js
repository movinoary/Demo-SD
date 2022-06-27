import React from "react";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as cssModule from "../styles/index";

const Footer = () => {
  return (
    <footer className={cssModule.Components.footer}>
      <div className={cssModule.Components.left}>
        <h2>Silahkan Hubungi Kami</h2>
        <div className={cssModule.Components.contact}>
          <div>
            <h4>sosial media</h4>
            <div>
              <AiIcons.AiOutlineInstagram />
              <p>Insatgram</p>
            </div>
            <div>
              <AiIcons.AiOutlineYoutube />
              <p>Youtube</p>
            </div>
            <div>
              <AiIcons.AiOutlineFacebook />
              <p>Facebook</p>
            </div>
          </div>
          <div>
            <h4>contact</h4>
            <div>
              <AiIcons.AiOutlineMail />
              <p>E-mail</p>
            </div>
            <div>
              <AiIcons.AiOutlineWhatsApp />
              <p>WhatApp</p>
            </div>
            <div>
              <BsIcons.BsTelephone />
              <p>Telepon</p>
            </div>
          </div>
        </div>

        <div className={cssModule.Components.create}>
          <h3>SDN Jatirahayu IV</h3>
          <div>
            <p>
              Design MV <span>©</span> 2021
            </p>
            <p>
              Licence ADS <span>©</span> 2021
            </p>
          </div>
        </div>
      </div>
      <div className={cssModule.Components.right}>
        <h2>Lokasi Kami</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7931.565454692225!2d106.9144505!3d-6.292261399999991!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x412ff30a149e9751!2sSekolah%20Dasar%20Negeri%20Jati%20Rahayu%20IV!5e0!3m2!1sid!2sid!4v1638252643901!5m2!1sid!2sid"
          title="lokasi"
        />
      </div>
    </footer>
  );
};

export default Footer;
