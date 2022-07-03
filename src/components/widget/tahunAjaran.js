import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import * as AiIcons from "react-icons/ai";
import * as Configs from "../../configs/index";
import * as Components from "../index";
import * as cssModule from "../../styles/index";
import * as Page from "../../pages/index";

const WidgetTahunAjaran = () => {
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [idDelete, setIdDelete] = useState(null);
  const [modalEdit, setModalEdit] = useState(false);
  const [message, setMessage] = useState(null);
  const [click, setClick] = useState(false);
  const [form, setForm] = useState({ tahun: "" });
  const { tahun } = form;

  const handleClick = () => setClick(!click);

  const EditModal = () => {
    setModalEdit(prev => !prev);
  };

  let { data: tahuns, refetch } = useQuery("tahunsCache", async () => {
    const response = await Configs.API.get("/get-tahun-ajaran");
    return response.data.data.data;
  });

  const handleOnChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = useMutation(async e => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const body = JSON.stringify(form);

      await Configs.API.post("/add-tahun-ajaran", body, config);
      const alert = (
        <p className={cssModule.CRUD.alert}>Berhasil menambahkan Data</p>
      );
      setMessage(alert);
      setClick(prev => !prev);
    } catch (error) {
      console.log(error);
    }
  });

  const deleteById = useMutation(async id => {
    try {
      await Configs.API.delete(`/delete-tahun-ajaran/${id}`);
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
      <Components.EditDataKelas
        showModal={modalEdit}
        setShowModal={setModalEdit}
      />
      <div className={cssModule.Widget.tahunAjaran}>
        <form onSubmit={e => handleOnSubmit.mutate(e)}>
          <h2>Tahun Ajaran</h2>
          {click ? (
            <>
              <div>
                <input
                  type="text"
                  id="tahun"
                  title="input 0-9"
                  placeholder="2022/2023"
                  name="tahun"
                  value={tahun}
                  onChange={handleOnChange}
                />
              </div>
              <button>
                <p>
                  <AiIcons.AiOutlinePlusSquare />
                </p>
              </button>
              <button onClick={handleClick}>
                <p>
                  <AiIcons.AiOutlineClose />
                </p>
              </button>
            </>
          ) : (
            <>
              <button onClick={handleClick}>
                <p>
                  <AiIcons.AiOutlinePlus />
                </p>
              </button>
            </>
          )}
        </form>
        {message && message}
        <div>
          {tahuns?.length != 0 ? (
            <table>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Tahun Ajaran</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {tahuns?.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.tahun}</td>
                    <td>
                      <button onClick={EditModal}>
                        <AiIcons.AiFillEdit />
                      </button>
                      <button onClick={() => handleDelete(item.id)}>
                        <AiIcons.AiFillDelete />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <Page.BlankSmallNoData />
          )}
        </div>
      </div>
    </>
  );
};

export { WidgetTahunAjaran };
