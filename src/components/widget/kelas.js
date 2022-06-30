import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";
import * as cssModule from "../../styles/index";
import * as Components from "../index";

const WidgetKelas = () => {
  const [modalEdit, setModalEdit] = useState(false);
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const EditModal = () => {
    setModalEdit(prev => !prev);
  };

  return (
    <>
      <Components.EditDataKelas
        showModal={modalEdit}
        setShowModal={setModalEdit}
      />
      <div className={cssModule.Widget.kelas}>
        <form>
          <h2>Daftar Kelas</h2>
          {click ? (
            <>
              <div>
                <select id="kelas">
                  <option hidden>Tahun</option>
                  <option>2021/2022</option>
                  <option>2022/2023</option>
                </select>
                <label htmlFor="kelas">Tahun</label>
              </div>
              <div>
                <input type="text" id="kelas" placeholder="kelas" />
                <label htmlFor="kelas">Kelas</label>
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
                <th>Tahun Ajaran</th>
                <th>Kelas</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>2021 / 2022</td>
                <td>Kelas 1A</td>
                <td>
                  <button onClick={EditModal}>
                    <AiIcons.AiFillEdit />
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

export { WidgetKelas };
