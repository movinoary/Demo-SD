import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";
import * as cssModule from "../../styles/index";
import * as Components from "../index";

const WidgetMataPelajaran = () => {
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
      <div className={cssModule.Widget.mataPelajaran}>
        <form>
          <h2>Mata Pelajaran</h2>
          {click ? (
            <>
              <div>
                <input type="text" id="pel" placeholder="mata pelajaran" />
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
                <th>Mata Pelajaran</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Agama Islam</td>
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

export { WidgetMataPelajaran };
