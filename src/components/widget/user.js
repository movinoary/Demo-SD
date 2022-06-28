import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as cssModule from "../../styles/index";

const WidgetUser = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <section className={cssModule.Widget.userSection}>
      <div className={cssModule.Widget.userTitle}>
        <h1>
          All <span>User</span>
        </h1>
        <button>
          <FaIcons.FaUserPlus />
        </button>
      </div>
      <div className={cssModule.Widget.userTable}>
        {click ? (
          <div className={cssModule.Widget.userInfo}>
            <p>Admin : No Lock Everthing </p>
            <h3>|</h3>
            <p>SuUser : Edit Data Unlock, Dashboard Lock</p>
            <h3>|</h3>
            <p>User : Just Add Data</p>
            <h3>|</h3>
            <p>Reporter : Just Add Edit Dashboard News </p>
          </div>
        ) : (
          <div className={cssModule.Widget.userInfoOut} />
        )}
        <table className={cssModule.Widget.tableProfile}>
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
              <th>
                role <button onClick={handleClick}>i</button>
              </th>
              <th>action</th>
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

export default WidgetUser;
