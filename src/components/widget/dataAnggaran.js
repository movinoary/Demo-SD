import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";
import * as cssModule from "../../styles/index";
import * as Components from "../index";
import * as Assets from "../../assets/index";

const WidgetDataAnggaran = () => {
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
      <div className={cssModule.Widget.dataAnggaran}>
        <form>
          <h2>Data Anggaran</h2>
          {click ? (
            <>
              <div>
                <input type="text" id="judul" placeholder="judul" />
                <label htmlFor="judul">Judul</label>
              </div>
              <div>
                <input type="file" />
                <label htmlFor="icon">Icon</label>
              </div>
              <div>
                <input type="text" id="jumlah" placeholder="jumlah" />
                <label htmlFor="jumlah">Jumlah</label>
              </div>
              <div>
                <input type="text" id="persen" placeholder="50%" />
                <label htmlFor="persen">Persen</label>
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
                <th>Icon</th>
                <th>persen</th>
                <th>Jumlah</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Assets.DataAnggaran.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>Icon</td>
                  <td>{item.persen}</td>
                  <td>{item.nilai}</td>
                  <td>
                    <button onClick={EditModal}>
                      <AiIcons.AiFillEdit />
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
      </div>
    </>
  );
};

export { WidgetDataAnggaran };
