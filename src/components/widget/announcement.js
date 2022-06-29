import React, { useState } from "react";
import * as GiIcons from "react-icons/gi";
import * as Components from "../index";
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
      <div className={cssModule.Widget.announcement}>
        <div className={cssModule.Widget.announRow}>
          <div className={cssModule.Widget.announTitle}>
            <h1>Pengumuman</h1>
            <h3>title Pengumuman</h3>
          </div>
          <div className={cssModule.Widget.announIcon}>
            <button onClick={EditModal}>edit</button>
          </div>
        </div>
        <div className={cssModule.Widget.announDesc}>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
            omnis, recusandae aspernatur tenetur, obcaecati iusto rem inventore
            quis magni a ratione deserunt adipisci eum quos ab atque hic ad
            voluptatum earum reprehenderit voluptate quo esse velit. Corporis,
            laboriosam earum reprehenderit voluptate quo esse velit. Corporis,
            laboriosam earum reprehenderit voluptate quo esse velit. Corporis,
            laboriosam earum reprehenderit voluptate quo esse velit. Corporis,
            laboriosam
          </p>
        </div>
      </div>
    </>
  );
};

const WidgetAnnouncementUser = () => {
  return (
    <div className={cssModule.Widget.announcement}>
      <div className={cssModule.Widget.announRow}>
        <div className={cssModule.Widget.announTitle}>
          <h1>Pengumuman</h1>
          <h3>title Pengumuman</h3>
        </div>
        <div className={cssModule.Widget.announIcon}>
          <GiIcons.GiNewspaper />
        </div>
      </div>
      <div className={cssModule.Widget.announDesc}>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste omnis,
          recusandae aspernatur tenetur, obcaecati iusto rem inventore quis
          magni a ratione deserunt adipisci eum quos ab atque hic ad voluptatum
          earum reprehenderit voluptate quo esse velit. Corporis, laboriosam
          earum reprehenderit voluptate quo esse velit. Corporis, laboriosam
          earum reprehenderit voluptate quo esse velit. Corporis, laboriosam
          earum reprehenderit voluptate quo esse velit. Corporis, laboriosam
        </p>
      </div>
    </div>
  );
};

export { WidgetAnnouncementAdmin, WidgetAnnouncementUser };
