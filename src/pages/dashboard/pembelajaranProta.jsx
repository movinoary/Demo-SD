import React from "react";
import * as AiIcons from "react-icons/ai";
import * as GrIcons from "react-icons/gr";
import * as cssModule from "../../styles/index";

const PembelajaranProta = () => {
  return (
    <section className={cssModule.Dashboard.pembelajaran}>
      <h1>Pembelajaran Prota</h1>
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
      <div className={cssModule.Dashboard.protaBottom}>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Tema</th>
              <th>SubTema</th>
              <th>Akolasi Waktu</th>
              <th>Tanggal Pengerjaan</th>
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
              <td>1 jam</td>
              <td>12 - Juni -2022</td>
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
            <tr>
              <td>1</td>
              <td>1</td>
              <td>
                <p>2</p>
                <p>Baca Quran</p>
              </td>
              <td>1 jam</td>
              <td>13 - Juni -2022</td>
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
            <tr>
              <td>1</td>
              <td>1</td>
              <td>
                <p>3</p>
                <p>Baca Suart</p>
              </td>
              <td>1 jam</td>
              <td>14 - Juni -2022</td>
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
            <tr>
              <td>1</td>
              <td>1</td>
              <td>
                <p>4</p>
                <p>Baca Hadis</p>
              </td>
              <td>1 jam</td>
              <td>15 - Juni -2022</td>
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

export default PembelajaranProta;
