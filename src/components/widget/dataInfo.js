import React from "react";
import * as AiIcons from "react-icons/ai";
import * as cssModule from "../../styles/index";

const WidgetDataInfo = () => {
  return (
    <div className={cssModule.Widget.dataInfo}>
      <form>
        <h2>Data Info</h2>
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
                <button>
                  <AiIcons.AiFillEdit />
                </button>
                <button>
                  <AiIcons.AiFillDelete />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { WidgetDataInfo };
