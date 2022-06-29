import React from "react";
import * as AiIcons from "react-icons/ai";
import * as GrIcons from "react-icons/gr";
import * as cssModule from "../../styles/index";

const PembelajaranPromes = () => {
  return (
    <section className={cssModule.Dashboard.pembelajaran}>
      <h1>Pembelajaran Promes</h1>
      <div className={cssModule.Dashboard.topSelect}>
        <div>
          <h2>Teacher</h2>
          <select>
            <option hidden>Teacher | Class</option>
            <option>Irene | Kelas 1A</option>
            <option>Sana | Kelas 1B</option>
            <option>Lia | Kelas 2A</option>
            <option>Jinni | Kelas 2B</option>
          </select>
        </div>
        <button> Tambah </button>
      </div>
      <div className={cssModule.Dashboard.promesBottom}>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Tema</th>
              <th>SubTema</th>
              <th>Akolasi Waktu</th>
              <th>Pembelajaran Ke-1</th>
              <th>Pembelajaran Ke-2</th>
              <th>Pembelajaran Ke-3</th>
              <th>Pembelajaran Ke-4</th>
              <th>Pembelajaran Ke-5</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>
                <p>1</p>
                <p>membaca buku yang ada judulnya</p>
              </td>
              <td>1 jam</td>
              <td>1 - Juni -2022</td>
              <td>7 - Juni - 2022</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
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

export default PembelajaranPromes;
