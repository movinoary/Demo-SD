import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";
import * as cssModule from "../../styles/index";
import * as Components from "../index";

const WidgetDataInfo = () => {
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

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
      <Components.EditDataAnggaran
        showModal={modalEdit}
        setShowModal={setModalEdit}
      />
      <div className={cssModule.Widget.dataInfo}>
        <form>
          <h2>Data Info</h2>
          {click ? (
            <>
              <div>
                <input type="text" id="judul" placeholder="judul" />
                <label htmlFor="judul">Judul</label>
              </div>
              <div>
                <input type="text" id="jumlah" placeholder="jumlah" />
                <label htmlFor="jumlah">Jumlah</label>
              </div>
              <button>
                <p>
                  <AiIcons.AiOutlinePlusSquare />
                </p>
              </button>
              <button onClick={handleClick}>
                <p>
                  <AiIcons.AiOutlineClose />
                </p>
              </button>
            </>
          ) : (
            <button onClick={handleClick}>
              <p>
                <AiIcons.AiOutlinePlus />
              </p>
            </button>
          )}
        </form>
        <div>
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Judul</th>
                <th>Jumlah</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Siswa</td>
                <td>100</td>
                <td>
                  <button onClick={EditModal}>
                    <AiIcons.AiFillEdit />
                  </button>
                  <button onClick={DeleteModal}>
                    <AiIcons.AiFillDelete />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export { WidgetDataInfo };
