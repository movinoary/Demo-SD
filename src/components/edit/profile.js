import React, { useRef } from "react";
import * as cssModule from "../../styles/index";

const EditProfile = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  return (
    <>
      {showModal ? (
        <div className={cssModule.CRUD.editModal} ref={modalRef}>
          <div className={cssModule.CRUD.editProfile}>
            <h1>
              Edit <span>Acara </span> Event
            </h1>
            <form>
              <div>
                <label>Nama Lengkap</label>
                <input type="text" placeHolder="Nama Lengkap" />
              </div>
              <div>
                <label>NIP</label>
                <input type="text" placeHolder="NIP" />
              </div>
              <div>
                <label>NIK</label>
                <input type="text" placeHolder="NIK" />
              </div>
              <div>
                <label>Jenis Kelamin</label>
                <select>
                  <option hidden></option>
                  <option>Laki-Laki</option>
                  <option>Perempuan</option>
                </select>
              </div>
              <div>
                <label>Alamat</label>
                <input type="text" placeHolder="Alamat" />
              </div>
              <div>
                <label>Jabatan</label>
                <input type="text" placeHolder="Jabatan" />
              </div>
              <div>
                <label>Golongan</label>
                <input type="text" placeHolder="Golongan" />
              </div>
              <div>
                <label>Status Perkawinan</label>
                <input type="text" placeHolder="Staus" />
              </div>
              <div>
                <label>Mengajar Sejak</label>
                <input type="text" placeHolder="Tahun" />
              </div>
              <div>
                <label>Status Mengajar</label>
                <input type="text" placeHolder="Status" />
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

export default EditProfile;
