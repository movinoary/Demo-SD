import React from "react";
import * as GiIcons from "react-icons/gi";
import * as cssModule from "../../styles/index";

const DashAnnouncement = () => {
  return (
    <div className={cssModule.Components.announcement}>
      <div className={cssModule.Components.announRow}>
        <div className={cssModule.Components.announTitle}>
          <h1>Pengumuman</h1>
          <h3>title Pengumuman</h3>
        </div>
        <div className={cssModule.Components.announIcon}>
          <GiIcons.GiNewspaper />
        </div>
      </div>
      <div className={cssModule.Components.announDesc}>
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

export default DashAnnouncement;
