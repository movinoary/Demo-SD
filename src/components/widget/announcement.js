import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import * as GiIcons from "react-icons/gi";
import * as Configs from "../../configs/index";
import * as cssModule from "../../styles/index";

const WidgetAnnouncementAdmin = () => {
  const navigate = useNavigate();

  let { data: pengumumans } = useQuery("pengumumanCache", async () => {
    const response = await Configs.API.get("/get-pengumuman");
    return response.data.data.data;
  });

  return (
    <>
      {pengumumans ? (
        <div className={cssModule.Widget.announcement}>
          <div className={cssModule.Widget.announRow}>
            <div className={cssModule.Widget.announTitle}>
              <h1>Pengumuman</h1>
              <h3>{pengumumans?.judul}</h3>
            </div>

            <div className={cssModule.Widget.announIcon}>
              <button
                onClick={() => navigate(`edit-pengumuman/${pengumumans?.id}`)}
              >
                edit
              </button>
            </div>
          </div>
          <div className={cssModule.Widget.announDesc}>
            <p>{pengumumans?.isiPengumuman}</p>
          </div>
        </div>
      ) : (
        <div className={cssModule.Widget.announcement}>
          <div className={cssModule.Widget.announRow}>
            <div className={cssModule.Widget.announTitle}>
              <h1>Pengumuman</h1>
            </div>

            <div className={cssModule.Widget.announIcon}>
              <button onClick={() => navigate(`add-pengumuman`)}>Tambah</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const WidgetAnnouncementUser = () => {
  let { data: pengumumans } = useQuery("pengumumanCache", async () => {
    const response = await Configs.API.get("/get-pengumuman");
    return response.data.data.data;
  });

  return (
    <>
      <div className={cssModule.Widget.announcement}>
        <div className={cssModule.Widget.announRow}>
          <div className={cssModule.Widget.announTitle}>
            <h1>Pengumuman</h1>
            <h3>{pengumumans?.judul}</h3>
          </div>
          <div className={cssModule.Widget.announIcon}>
            <GiIcons.GiNewspaper />
          </div>
        </div>
        <div className={cssModule.Widget.announDesc}>
          <p>{pengumumans?.isiPengumuman}</p>
        </div>
      </div>
    </>
  );
};

export { WidgetAnnouncementAdmin, WidgetAnnouncementUser };
