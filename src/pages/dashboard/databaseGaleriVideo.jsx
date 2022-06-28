import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as GrIcons from "react-icons/gr";
import * as cssModule from "../../styles/index";

const DatabaseVideo = () => {
  return (
    <section className={cssModule.Dashboard.database}>
      <div className={cssModule.Dashboard.databaseTitle}>
        <h1>
          Video <span>Youtube</span>
        </h1>
        <button>
          <FaIcons.FaPlusSquare />
        </button>
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
                  <GrIcons.GrFormView />
                </button>
                <button>
                  <FaIcons.FaEdit />
                </button>
                <button>
                  <AiIcons.AiFillDelete />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default DatabaseVideo;
