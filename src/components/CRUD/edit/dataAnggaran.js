import React, { useRef } from "react";
import * as cssModule from "../../../styles/index";

const EditDataAnggaran = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  return (
    <>
      {showModal ? (
        <div className={cssModule.CRUD.editModal} ref={modalRef}>
          <div className={cssModule.CRUD.editAnggaran}>
            <h1>
              Edit <span>Anggaran</span>
            </h1>
            <form>
              <div>
                <label>Judul</label>
                <input type="text" placeholder="judul" />
              </div>
              <div>
                <label>Jumlah</label>
                <input type="text" placeholder="Jumlah" />
              </div>
              <div>
                <label>Persen</label>
                <input type="text" placeholder="50%" />
              </div>
              <div>
                <label>ICON</label>
                <input type="file" />
              </div>
              <img src="" alt="icon" />
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

export default EditDataAnggaran;
