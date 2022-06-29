import React from "react";
import * as AiIcons from "react-icons/ai";
import * as cssModule from "../../styles/index";

const WidgetKelas = () => {
  return (
    <div className={cssModule.Widget.kelas}>
      <form>
        <h2>Daftar Kelas</h2>
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

export { WidgetKelas };
