import React, { useState } from "react";
import * as GiIcons from "react-icons/gi";
import * as Components from "../index";
import * as Assets from "../../assets/index";
import * as cssModule from "../../styles/index";

const WidgetAnnouncementAdmin = () => {
  const [showModalEdit, setShowModalEdit] = useState(false);

  const EditModal = () => {
    setShowModalEdit(prev => !prev);
  };
  return (
    <>
      <Components.EditAnnouncement
        showModal={showModalEdit}
        setShowModal={setShowModalEdit}
      />
      {Assets.Pengumuman.map(item => (
        <div className={cssModule.Widget.announcement} key={item}>
          <div className={cssModule.Widget.announRow}>
            <div className={cssModule.Widget.announTitle}>
              <h1>Pengumuman</h1>
              <h3>{item.title}</h3>
            </div>
            <div className={cssModule.Widget.announIcon}>
              <button onClick={EditModal}>edit</button>
            </div>
          </div>
          <div className={cssModule.Widget.announDesc}>
            <p>{item.desc}</p>
          </div>
        </div>
      ))}
    </>
  );
};

const WidgetAnnouncementUser = () => {
  return (
    <>
      {Assets.Pengumuman.map(item => (
        <div className={cssModule.Widget.announcement} key={item}>
          <div className={cssModule.Widget.announRow}>
            <div className={cssModule.Widget.announTitle}>
              <h1>Pengumuman</h1>
              <h3>{item.title}</h3>
            </div>
            <div className={cssModule.Widget.announIcon}>
              <GiIcons.GiNewspaper />
            </div>
          </div>
          <div className={cssModule.Widget.announDesc}>
            <p>{item.desc}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export { WidgetAnnouncementAdmin, WidgetAnnouncementUser };
