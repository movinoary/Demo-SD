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
                <input type="text" placeholder="Nanda Fauzan" />
              </div>
              <div>
                <label>NIP</label>
                <input type="text" placeholder="123123-123123" />
              </div>
              <div>
                <label>NIK</label>
                <input type="text" placeholder="1230906712389123" />
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
                <input type="text" placeholder="jl.alamat no.29 " />
              </div>
              <div>
                <label>Jabatan</label>
                <input type="text" placeholder="Guru Kelas 1A" />
              </div>
              <div>
                <label>Golongan</label>
                <input type="text" placeholder="PNS" />
              </div>
              <div>
                <label>Status Perkawinan</label>
                <input type="text" placeholder="Jomblo" />
              </div>
              <div>
                <label>Mengajar Sejak</label>
                <input type="text" placeholder="2012" />
              </div>
              <div>
                <label>Status Mengajar</label>
                <input type="text" placeholder="Mengajar" />
              </div>
              <div>
                <label>Instagram</label>
                <input type="text" placeholder="@sekolah_id" />
              </div>
              <div>
                <label>Facebook</label>
                <input type="text" placeholder="sekolah" />
              </div>
              <div>
                <label>E-mail</label>
                <input type="text" placeholder="sekolah@mail.com" />
              </div>
              <div>
                <label>Whatsapp</label>
                <input type="text" placeholder="08129080706050" />
              </div>
              <div>
                <label>Telegram</label>
                <input type="text" placeholder="@id_sekolah" />
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
