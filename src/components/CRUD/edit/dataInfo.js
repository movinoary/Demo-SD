import React, { useRef } from "react";
import * as cssModule from "../../../styles/index";

const EditDataInfo = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  return (
    <>
      {showModal ? (
        <div className={cssModule.CRUD.editModal} ref={modalRef}>
          <div className={cssModule.CRUD.editData}>
            <h1>
              Edit <span>Data</span> Info
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

export default EditDataInfo;
