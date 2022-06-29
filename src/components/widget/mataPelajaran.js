import React from "react";
import * as AiIcons from "react-icons/ai";
import * as cssModule from "../../styles/index";

const WidgetMataPelajaran = () => {
  return (
    <div className={cssModule.Widget.mataPelajaran}>
      <form>
        <h2>Mata Pelajaran</h2>
        <div>
          <input type="text" id="pel" placeholder="mata pelajaran" />
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
              <th>Mata Pelajaran</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Agama Islam</td>
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

export { WidgetMataPelajaran };
