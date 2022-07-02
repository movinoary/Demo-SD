import React, { useRef } from "react";
import * as cssModule from "../../../styles/index";

const EditDataMataPelajaran = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  return (
    <>
      {showModal ? (
        <div className={cssModule.CRUD.editModal} ref={modalRef}>
          <div className={cssModule.CRUD.editData}>
            <h1>
              Edit <span>Mata</span> Pelajaran
            </h1>
            <form>
              <div>
                <label>Mata Pelajaran</label>
                <input type="text" placeholder="Mata Pelajaran" />
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

export default EditDataMataPelajaran;
