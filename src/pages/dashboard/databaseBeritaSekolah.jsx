import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as GrIcons from "react-icons/gr";
import * as Assets from "../../assets/index";
import * as cssModule from "../../styles/index";
import * as Components from "../../components/index";

const DatabaseBeritaSekolah = () => {
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);

  const DeleteModal = () => {
    setShowModalDelete(prev => !prev);
  };

  const EditModal = () => {
    setModalEdit(prev => !prev);
  };

  return (
    <>
      <Components.EditBeritaSekolah
        showModal={modalEdit}
        setShowModal={setModalEdit}
      />
      <Components.ModalDelete
        showModal={showModalDelete}
        setShowModal={setShowModalDelete}
      />
      <section className={cssModule.Dashboard.database}>
        <div className={cssModule.Dashboard.databaseTitle}>
          <h1>
            Berita <span>Sekolah</span>
          </h1>
          <button>Tambah</button>
        </div>
        <div>
          <table className={cssModule.Dashboard.databaseTableBerita}>
            <thead>
              <tr>
                <th>No</th>
                <th>judul</th>
                <th>tanggal</th>
                <th>Image</th>
                <th>isi berita</th>
                <th>pembuat</th>
                <th>kategori</th>
                <th>Sumber</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {Assets.DataBeritaSekolah.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.judul}</td>
                  <td>{item.tanggal}</td>
                  <td>
                    <img src={item.image} alt="berita" />
                  </td>
                  <td>{item.isiBerita}</td>
                  <td>{item.pembuat.nama}</td>
                  <td>{item.kategori}</td>
                  <td>{item.tanggal}</td>
                  <td>
                    <button>
                      <Link to="/berita/1" target="_blank">
                        <GrIcons.GrFormView />
                      </Link>
                    </button>
                    <button onClick={EditModal}>
                      <FaIcons.FaEdit />
                    </button>
                    <button onClick={DeleteModal}>
                      <AiIcons.AiFillDelete />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default DatabaseBeritaSekolah;
