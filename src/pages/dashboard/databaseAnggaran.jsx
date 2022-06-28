import React from "react";
import * as FaIcons from "react-icons/fa";
import * as cssModule from "../../styles/index";

const DatabaseAnggaran = () => {
  return (
    <section className={cssModule.Dashboard.database}>
      <div className={cssModule.Dashboard.databaseTitle}>
        <h1>Anggaran</h1>
        <button>
          <FaIcons.FaUserPlus />
        </button>
      </div>
      <div>
        <table className={cssModule.Dashboard.databaseTableAnggaran}>
          <thead>
            <tr>
              <th>No</th>
              <th>Keterangan</th>
              <th>Icon</th>
              <th>Jumlah</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Sekolah</td>
              <td></td>
              <td>100.000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default DatabaseAnggaran;
