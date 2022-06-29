import React from "react";
import * as AiIcons from "react-icons/ai";
import * as GrIcons from "react-icons/gr";
import * as cssModule from "../../styles/index";

const PembelajaranSilabus = () => {
  return (
    <section className={cssModule.Dashboard.pembelajaran}>
      <h1>Pembelajaran Silabus</h1>
      <div className={cssModule.Dashboard.topSelect}>
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
        <button> Tambah </button>
      </div>
      <div className={cssModule.Dashboard.silabusBottom}>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Semester</th>
              <th>KD</th>
              <th>Indikator</th>
              <th>Materi</th>
              <th>Kegiatan</th>
              <th>Pendidikan Penguatan</th>
              <th>Penilaian</th>
              <th>Alokasi Waktu</th>
              <th>Sumber Belajar</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>iqro</td>
              <td>baca iqro</td>
              <td>baca</td>
              <td>10</td>
              <td>1 jam</td>
              <td>iqro</td>
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

export default PembelajaranSilabus;
