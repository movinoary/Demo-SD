import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as cssModule from "../../styles/index";
import * as Components from "../index";

const WidgetInformation = () => {
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);

  const DeleteModal = () => {
    setShowModalDelete(prev => !prev);
  };

  const EditModal = () => {
    setModalEdit(prev => !prev);
  };

  return (
    <section className={cssModule.Widget.cardInformasi}>
      <button>
        <FaIcons.FaEdit />
      </button>
      <div className={cssModule.Widget.information}>
        <h2>sosial media </h2>
        <div className={cssModule.Widget.informationRow}>
          <AiIcons.AiOutlineInstagram />
          <div>
            <span>Insatgram</span>
            <p>www.Insatgram.com</p>
          </div>
        </div>
        <div className={cssModule.Widget.informationRow}>
          <AiIcons.AiOutlineYoutube />
          <div>
            <span>Youtube</span>
            <p>www.Youtube.com</p>
          </div>
        </div>
        <div className={cssModule.Widget.informationRow}>
          <AiIcons.AiOutlineFacebook />
          <div>
            <span>Facebook</span>
            <p>www.Facebook.com</p>
          </div>
        </div>
      </div>
      <div className={cssModule.Widget.information}>
        <h2>contact</h2>
        <div className={cssModule.Widget.informationRow}>
          <AiIcons.AiOutlineMail />
          <div>
            <span>E-mail</span>
            <p>www.E-mail.com</p>
          </div>
        </div>
        <div className={cssModule.Widget.informationRow}>
          <AiIcons.AiOutlineWhatsApp />
          <div>
            <span>WhatApp</span>
            <p>www.WhatApp.com</p>
          </div>
        </div>
        <div className={cssModule.Widget.informationRow}>
          <BsIcons.BsTelephone />
          <div>
            <span>Telepon</span>
            <p>www.Telepon.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WidgetInformation;
