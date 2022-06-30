import React, { useRef } from "react";
import * as cssModule from "../../../styles/index";

const EditBeritaHome = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  return (
    <>
      {showModal ? (
        <div className={cssModule.CRUD.editModal} ref={modalRef}>
          <div className={cssModule.CRUD.editBerita}>
            <h1>
              Edit <span>Berita</span> Home
            </h1>
            <form>
              <div>
                <label>Judul</label>
                <input type="text" placeHolder="judul" />
              </div>
              <div>
                <label>Tanggal</label>
                <input type="date" />
              </div>
              <div>
                <label>Isi Berita</label>
                <textarea placeholder="Berita" rows="3" />
              </div>
              <div>
                <label>Pembuat</label>
                <input type="text" placeholder="pembuat" />
              </div>
              <div>
                <label>Kategori</label>
                <select>
                  <option>Berita</option>
                  <option>Pengumuman</option>
                </select>
              </div>
              <div>
                <label>Sumber</label>
                <input type="text" placeholder="pembuat" />
              </div>
              <div>
                <label>Image</label>
                <input type="file" />
              </div>
              <img
                src="https://awsimages.detik.net.id/community/media/visual/2022/02/08/kontak-erat-covid-pengertian-cara-mengatasinya_169.jpeg?w=700&q=90"
                alt="berita"
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

export default EditBeritaHome;
