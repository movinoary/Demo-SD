import React, { useRef } from "react";
import * as cssModule from "../../../styles/index";

const EditGaleriKegiatan = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  return (
    <>
      {showModal ? (
        <div className={cssModule.CRUD.editModal} ref={modalRef}>
          <div className={cssModule.CRUD.editVideo}>
            <h1>
              Edit <span>Galeri</span> Kegiatan
            </h1>
            <form>
              <div>
                <label>Judul</label>
                <input type="text" placeholder="judul" />
              </div>
              <div>
                <label>Image</label>
                <input type="file" />
              </div>
              <img
                src="https://awsimages.detik.net.id/community/media/visual/2022/02/08/kontak-erat-covid-pengertian-cara-mengatasinya_169.jpeg?w=700&q=90"
                alt="galeri"
              />
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

export default EditGaleriKegiatan;
