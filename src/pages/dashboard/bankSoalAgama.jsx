import React from "react";
import * as AiIcons from "react-icons/ai";
import * as GrIcons from "react-icons/gr";
import * as cssModule from "../../styles/index";

const BankSoalAgama = () => {
  return (
    <>
      <section className={cssModule.Dashboard.pembelajaran}>
        <h1>Bank Soal Pendidikan Agama</h1>
        <div className={cssModule.Dashboard.topSelect}>
          <div>
            <h2>Pilh Soal</h2>
            <select>
              <option hidden>Soal</option>
              <option>Ulangan Harian</option>
              <option>Pekan Ulangan</option>
              <option>Penilaian Tengah Semester</option>
              <option>Penilaian Akhir Semester</option>
              <option>Penilaian Akhir Tahun</option>
            </select>
          </div>
          <button> Tambah </button>
        </div>
        <div className={cssModule.Dashboard.bankSoalBottom}>
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Judul</th>
                <th>Jumlah Soal</th>
                <th>DOC</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>PTS pertama kali</td>
                <td>20</td>
                <td>uts.pdf</td>
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
    </>
  );
};

export default BankSoalAgama;
