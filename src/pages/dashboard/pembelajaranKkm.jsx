import React from "react";
import * as AiIcons from "react-icons/ai";
import * as GrIcons from "react-icons/gr";
import * as cssModule from "../../styles/index";

const PembelajaranKkm = () => {
  return (
    <section className={cssModule.Dashboard.pembelajaran}>
      <h1>KKM</h1>
      <div className={cssModule.Dashboard.topSelect}>
        <div>
          <h2>Kelas</h2>
          <select>
            <option hidden>Mata Pelajaran</option>
            <option>Agama Islam</option>
            <option>PKN</option>
            <option>Bahasa Indonesia</option>
            <option>Matematika</option>
            <option>IPA</option>
            <option>IPS</option>
            <option>PJOK</option>
            <option>SBdP</option>
            <option>Bahasa Inggris</option>
            <option>Bahasa Indonesia</option>
          </select>
        </div>
        <button> Tambah </button>
      </div>
      <div className={cssModule.Dashboard.kkmBottom}>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Mata Pelajaran</th>
              <th>KKM</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Agama Islam</td>
              <td>100</td>
              <td>
                <button>
                  <GrIcons.GrFormView />
                </button>
                <button>
                  <GrIcons.GrEdit />
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

export default PembelajaranKkm;
