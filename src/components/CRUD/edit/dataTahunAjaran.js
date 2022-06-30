import React, { useRef } from "react";
import * as cssModule from "../../../styles/index";

const EditDataTahunAjaran = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  return (
    <>
      {showModal ? (
        <div className={cssModule.CRUD.editModal} ref={modalRef}>
          <div className={cssModule.CRUD.editData}>
            <h1>
              Edit <span>Tahun</span> Ajaran
            </h1>
            <form>
              <div>
                <label>Tahun Ajaran</label>
                <input type="text" placeHolder="Tahun Ajaran" />
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

export default EditDataTahunAjaran;
