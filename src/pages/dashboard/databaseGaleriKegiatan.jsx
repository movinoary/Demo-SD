import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as GrIcons from "react-icons/gr";
import * as Assets from "../../assets/index";
import * as cssModule from "../../styles/index";
import * as Components from "../../components/index";

const DatabaseGaleriKegiatan = () => {
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
      <Components.ModalDelete
        showModal={showModalDelete}
        setShowModal={setShowModalDelete}
      />
      <Components.EditGaleriKegiatan
        showModal={modalEdit}
        setShowModal={setModalEdit}
      />
      <section className={cssModule.Dashboard.database}>
        <div className={cssModule.Dashboard.databaseTitle}>
          <h1>
            Galeri <span>Kegiatan</span>
          </h1>
          <button>Tambah</button>
        </div>
        <div>
          <table className={cssModule.Dashboard.databaseTableGaleriKegiatan}>
            <thead>
              <tr>
                <th>No</th>
                <th>Image</th>
                <th>judul</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Assets.DataGeleriKegiatan.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <img src={item.image} alt="berita" />
                  </td>
                  <td>{item.nama}</td>
                  <td>
                    <button>
                      <Link to="/" target="_blank">
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

export default DatabaseGaleriKegiatan;
