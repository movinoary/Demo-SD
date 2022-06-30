import React, { useRef } from "react";
import * as cssModule from "../../../styles/index";

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
                <input type="text" placeHolder="Nanda Fauzan" />
              </div>
              <div>
                <label>NIP</label>
                <input type="text" placeHolder="123123-123123" />
              </div>
              <div>
                <label>NIK</label>
                <input type="text" placeHolder="1230906712389123" />
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
                <input type="text" placeHolder="jl.alamat no.29 " />
              </div>
              <div>
                <label>Jabatan</label>
                <input type="text" placeHolder="Guru Kelas 1A" />
              </div>
              <div>
                <label>Golongan</label>
                <input type="text" placeHolder="PNS" />
              </div>
              <div>
                <label>Status Perkawinan</label>
                <input type="text" placeHolder="Jomblo" />
              </div>
              <div>
                <label>Mengajar Sejak</label>
                <input type="text" placeHolder="2012" />
              </div>
              <div>
                <label>Status Mengajar</label>
                <input type="text" placeHolder="Mengajar" />
              </div>
              <div>
                <label>Instagram</label>
                <input type="text" placeHolder="@sekolah_id" />
              </div>
              <div>
                <label>Facebook</label>
                <input type="text" placeHolder="sekolah" />
              </div>
              <div>
                <label>E-mail</label>
                <input type="text" placeHolder="sekolah@mail.com" />
              </div>
              <div>
                <label>Whatsapp</label>
                <input type="text" placeHolder="08129080706050" />
              </div>
              <div>
                <label>Telegram</label>
                <input type="text" placeHolder="@id_sekolah" />
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
