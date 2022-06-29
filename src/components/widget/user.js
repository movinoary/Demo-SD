import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as Components from "../index";
import * as cssModule from "../../styles/index";

const WidgetUser = () => {
  const [click, setClick] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);

  const DeleteModal = () => {
    setShowModalDelete(prev => !prev);
  };

  const handleClick = () => setClick(!click);

  return (
    <>
      <Components.ModalDelete
        showModal={showModalDelete}
        setShowModal={setShowModalDelete}
      />
      <section className={cssModule.Widget.userSection}>
        <div className={cssModule.Widget.userTitle}>
          <h1>
            List <span> Akun</span>
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
              <p>SubAdmin : Edit Data Unlock, Dashboard Lock</p>
              <h3>|</h3>
              <p>Teacher : Just Add Data</p>
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
                <td>Admin</td>
                <td>
                  <button>
                    <FaIcons.FaUserCheck />
                  </button>
                  <button>
                    <FaIcons.FaUserEdit />
                  </button>
                  <button onClick={DeleteModal}>
                    <FaIcons.FaUserTimes />
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

export default WidgetUser;
