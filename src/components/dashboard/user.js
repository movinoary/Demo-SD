import React from "react";
import * as FaIcons from "react-icons/fa";
import * as cssModule from "../../styles/index";

const DashUser = () => {
  return (
    <section className={cssModule.Components.userSection}>
      <div className={cssModule.Components.userTitle}>
        <h1>
          All <span>User</span>
        </h1>
        <button>
          <FaIcons.FaUserPlus />
        </button>
      </div>
      <div className={cssModule.Components.userTable}>
        <table className={cssModule.Components.tableProfile}>
          <thead>
            <tr>
              <th>No</th>
              <th>akun</th>
              <th>NIP</th>
              <th>Kelamin</th>
              <th>Jabatan</th>
              <th>Status</th>
              <th>telepon</th>
              <th>alamat</th>
              <th>role</th>
              <th>aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <section>
                  <img
                    src="https://i.pinimg.com/736x/f8/f0/a2/f8f0a252e3ebe2d13dad1373001160eb.jpg"
                    alt="profil"
                  />
                  <div>
                    <h2>Irene</h2>
                    <p>irene@mail.com</p>
                  </div>
                </section>
              </td>
              <td>1231293-021312</td>
              <td>P</td>
              <td>Guru Kelas 1</td>
              <td>PNS</td>
              <td>085156611224</td>
              <td>JL.Palem Kartika No.29</td>
              <td>Admin</td>
              <td>
                <button>
                  <FaIcons.FaUserCheck />
                </button>
                <button>
                  <FaIcons.FaUserEdit />
                </button>
                <button>
                  <FaIcons.FaUserTimes />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default DashUser;
