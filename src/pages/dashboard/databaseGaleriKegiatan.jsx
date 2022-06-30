import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as GrIcons from "react-icons/gr";
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
          <table className={cssModule.Dashboard.databaseTableGaleri}>
            <thead>
              <tr>
                <th>No</th>
                <th>Image</th>
                <th>judul</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <img
                    src="https://awsimages.detik.net.id/community/media/visual/2022/02/08/kontak-erat-covid-pengertian-cara-mengatasinya_169.jpeg?w=700&q=90"
                    alt="berita"
                  />
                </td>
                <td>12 April 2022</td>
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
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default DatabaseGaleriKegiatan;
