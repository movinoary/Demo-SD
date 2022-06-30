import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as GrIcons from "react-icons/gr";
import * as cssModule from "../../styles/index";
import * as Components from "../../components/index";

const DatabaseVideo = () => {
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
      <Components.EditGaleriVideo
        showModal={modalEdit}
        setShowModal={setModalEdit}
      />
      <section className={cssModule.Dashboard.database}>
        <div className={cssModule.Dashboard.databaseTitle}>
          <h1>
            Video <span>Youtube</span>
          </h1>
          <button>Tambah</button>
        </div>
        <div>
          <table className={cssModule.Dashboard.databaseTableVideo}>
            <thead>
              <tr>
                <th>No</th>
                <th>Judul</th>
                <th>Link Youtube</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Ayo Ke sekolah</td>
                <td>www.youtube.com</td>
                <td>
                  <button>
                    <Link to="/video" target="_blank">
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

export default DatabaseVideo;
