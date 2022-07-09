import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as Assets from "../../assets/index";
import * as Components from "../index";
import * as cssModule from "../../styles/index";

const WidgetUser = () => {
  const [click, setClick] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const navigate = useNavigate();

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
          <button onClick={() => navigate("tambah-akun")}>
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
              {Assets.DataAkun.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <section>
                      <div>
                        <img src={item.image} alt="profil" />
                      </div>
                      <div>
                        <h2>{item.nama}</h2>
                        <p>{item.email}</p>
                      </div>
                    </section>
                  </td>
                  <td>{item.role}</td>
                  <td>
                    <button
                      onClick={() => navigate(`detail-user/${item.nama}`)}
                    >
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
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default WidgetUser;
