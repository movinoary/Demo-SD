import React, { useRef } from "react";
import * as cssModule from "../../styles/index";

const EditAnnouncement = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  return (
    <>
      {showModal ? (
        <div className={cssModule.CRUD.editModal} ref={modalRef}>
          <div className={cssModule.CRUD.editAnnouncement}>
            <h1>
              Edit <span>Penggumuman</span>
            </h1>
            <form>
              <div>
                <label>Judul</label>
                <input type="text" placeHolder="judul" />
              </div>
              <div>
                <label>Pengumuman</label>
                <textarea placeholder="Isi Pengumuman" rows="3" />
              </div>
              <section>
                <button>Simpan</button>
                <button onClick={() => setShowModal(false)}>Batal</button>
              </section>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default EditAnnouncement;
