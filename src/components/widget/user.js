import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import * as FaIcons from "react-icons/fa";
import * as Assets from "../../assets/index";
import * as Configs from "../../configs/index";
import * as Components from "../index";
import * as cssModule from "../../styles/index";

const WidgetUser = () => {
  const [click, setClick] = useState(false);
  const [idDelete, setIdDelete] = useState(null);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(null);
  const navigate = useNavigate();
  let api = Configs.API;

  const handleClick = () => setClick(!click);

  let { data: users, refetch } = useQuery("userCache", async () => {
    const config = {
      method: "GET",
      headers: {
        Authorization: "Basic " + localStorage.token,
      },
    };
    const response = await api.get("/get-user", config);
    return response.data.data.users;
  });

  const deleteById = useMutation(async id => {
    try {
      await api.delete(`/delete-user/${id}`);
      refetch();
    } catch (error) {
      console.log(error);
    }
  });

  const DeleteModal = () => {
    setShowModalDelete(prev => !prev);
  };

  const handleDelete = id => {
    setIdDelete(id);
    DeleteModal();
  };

  useEffect(() => {
    if (confirmDelete) {
      setShowModalDelete(prev => !prev);
      deleteById.mutate(idDelete);
      setConfirmDelete(null);
    }
  }, [confirmDelete]);

  return (
    <>
      <Components.ModalDelete
        setConfirmDelete={setConfirmDelete}
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
              {users?.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>
                    <section>
                      <div>
                        <img src={Assets.imgBlank} alt="profil" />
                      </div>
                      <div>
                        <h2>{item.nama}</h2>
                        <p>{item.email}</p>
                      </div>
                    </section>
                  </td>
                  <td>{item.role}</td>
                  <td>
                    <button>
                      <FaIcons.FaUserCheck />
                    </button>
                    <button>
                      <FaIcons.FaUserEdit />
                    </button>
                    <button
                      onClick={() => {
                        handleDelete(item.id);
                      }}
                    >
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
