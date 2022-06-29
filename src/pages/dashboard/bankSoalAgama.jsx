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
            <h2>Kelas</h2>
            <select>
              <option hidden>Kelas | Guru</option>
              <option>Kelas 1A | Irene </option>
              <option>Kelas 1B | Sana </option>
              <option>Kelas 2A | Lia </option>
              <option>Kelas 2B | Jinni </option>
            </select>
          </div>
          <button> Tambah </button>
        </div>
        <div className={cssModule.Dashboard.bankSoalBottom}>
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Tema</th>
                <th>SubTema</th>
                <th>Pembelajaran</th>
                <th>Soal</th>
                <th>Jawaban</th>
                <th>Kunci Jawaban</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>1</td>
                <td>
                  <p>1</p>
                  <p>Baca Iqro</p>
                </td>
                <td>pembelajaran ke-1</td>
                <td>Berapa Jus dalam Al-quran?</td>
                <td>
                  <div>
                    <p>A</p>
                    <p>30</p>
                  </div>
                  <div>
                    <p>B</p>
                    <p>40</p>
                  </div>
                  <div>
                    <p>C</p>
                    <p>20</p>
                  </div>
                  <div>
                    <p>D</p>
                    <p>Banyak</p>
                  </div>
                </td>
                <td>
                  <p>A</p>
                </td>
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
