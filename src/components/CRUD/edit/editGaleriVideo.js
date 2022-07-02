import React, { useRef } from "react";
import * as cssModule from "../../../styles/index";

const EditGaleriVideo = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  return (
    <>
      {showModal ? (
        <div className={cssModule.CRUD.editModal} ref={modalRef}>
          <div className={cssModule.CRUD.editVideo}>
            <h1>
              Edit <span>Galeri</span> Video
            </h1>
            <form>
              <div>
                <label>Judul</label>
                <input type="text" placeholder="judul" />
              </div>
              <div>
                <label>Link Youtube</label>
                <input type="text" placeholder="www.youtubr.com" />
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

export default EditGaleriVideo;
