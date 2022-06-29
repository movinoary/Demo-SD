import React from "react";
import * as AiIcons from "react-icons/ai";
import * as cssModule from "../../styles/index";

const WidgetTahunAjaran = () => {
  return (
    <div className={cssModule.Widget.tahunAjaran}>
      <form>
        <h2>Tahun Ajaran</h2>
        <div>
          <input type="text" id="pel" placeholder="2022/2023" />
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>2022/2023</td>
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

export { WidgetTahunAjaran };
