import React from "react";
import * as AiIcons from "react-icons/ai";
import * as GrIcons from "react-icons/gr";
import * as cssModule from "../../styles/index";

const DaftarNilaiAkhirSemester = () => {
  return (
    <section className={cssModule.Dashboard.pembelajaran}>
      <h1>Penilaian Akhir Semester</h1>
      <div className={cssModule.Dashboard.topSelect}>
        <div>
          <h2>Tahun Ajaran</h2>
          <select>
            <option hidden>Tahun</option>
            <option>2022 / 2023</option>
          </select>
        </div>
        <div>
          <h2>Kelas</h2>
          <select>
            <option hidden>Kelas</option>
            <option>Kelas 1A</option>
          </select>
        </div>
        <div>
          <h2>Mata Pelajaran</h2>
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
        <button> Cari </button>
      </div>
      <div className={cssModule.Dashboard.ulanganAkhirBottom}>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>S1</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Vino</td>
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

export default DaftarNilaiAkhirSemester;
