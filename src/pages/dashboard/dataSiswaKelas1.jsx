import React from "react";
import * as AiIcons from "react-icons/ai";
import * as GrIcons from "react-icons/gr";
import * as cssModule from "../../styles/index";

const DataSiswaKelas1 = () => {
  return (
    <section className={cssModule.Dashboard.pembelajaran}>
      <h1>Kelas 1</h1>
      <div className={cssModule.Dashboard.topSelect}>
        <div>
          <h2>Tahun Ajaran</h2>
          <select>
            <option hidden>Tahun | Kelas</option>
            <option>2022-2023 | Kelas 1A</option>
            <option>2022-2023 | Kelas 1B</option>
            <option>2023-2024 | Kelas 1A</option>
            <option>2023-2024 | Kelas 1B</option>
          </select>
        </div>
        <button> Tambah </button>
      </div>
      <div className={cssModule.Dashboard.dataSiswaBottom}>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Foto</th>
              <th>Nama Lengkap</th>
              <th>NIK</th>
              <th>NIS</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <img
                  src="https://i.pinimg.com/564x/ee/35/5b/ee355bbdfcac7ec734440704c2eaed37.jpg"
                  alt="siswa"
                />
              </td>
              <td>Mohammad Vino Arytsio Nanda fauzan</td>
              <td>3175103010000006</td>
              <td>3175103010000006</td>
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

export default DataSiswaKelas1;
