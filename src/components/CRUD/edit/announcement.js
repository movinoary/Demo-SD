import React from "react";
import { useNavigate } from "react-router-dom";
import * as cssModule from "../../../styles/index";

const EditAnnouncement = () => {
  const navigate = useNavigate();

  return (
    <div className={cssModule.CRUD.editPage}>
      <div className={cssModule.CRUD.editAnnouncement}>
        <h1>
          Edit <span>Penggumuman</span>
        </h1>
        <form>
          <div>
            <label>Judul</label>
            <input type="text" placeholder="judul" />
          </div>
          <div>
            <label>Pengumuman</label>
            <textarea placeholder="Isi Pengumuman" rows="3" />
          </div>
          <section>
            <button>Simpan</button>
            <button onClick={() => navigate(`/admin-dashboard`)}>Batal</button>
          </section>
        </form>
      </div>
    </div>
  );
};

export default EditAnnouncement;
