import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import * as AiIcons from "react-icons/ai";
import * as Configs from "../../configs/index";
import * as Components from "../index";
import * as cssModule from "../../styles/index";

const WidgetDataInfo = () => {
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [idDelete, setIdDelete] = useState(null);
  const [modalEdit, setModalEdit] = useState(false);
  const [message, setMessage] = useState(null);
  const [click, setClick] = useState(false);
  const [form, setForm] = useState({
    judul: "",
    jumlah: "",
  });
  const { judul, jumlah } = form;

  const handleClick = () => setClick(!click);

  const EditModal = () => {
    setModalEdit(prev => !prev);
  };

  let { data: infos, refetch } = useQuery("acarasCache", async () => {
    const response = await Configs.API.get("/get-data-informasi");
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

      await Configs.API.post("/add-data-informasi", body, config);
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
      await Configs.API.delete(`/delete-data-informasi/${id}`);
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
      <Components.EditDataAnggaran
        showModal={modalEdit}
        setShowModal={setModalEdit}
      />
      <div className={cssModule.Widget.dataInfo}>
        <form onSubmit={e => handleOnSubmit.mutate(e)}>
          <h2>Data Info</h2>
          {click ? (
            <>
              <div>
                <input
                  type="text"
                  id="judul"
                  placeholder="judul"
                  name="judul"
                  value={judul}
                  onChange={handleOnChange}
                />
                <label htmlFor="judul">Judul</label>
              </div>
              <div>
                <input
                  type="text"
                  id="jumlah"
                  placeholder="jumlah"
                  name="jumlah"
                  value={jumlah}
                  onChange={handleOnChange}
                />
                <label htmlFor="jumlah">Jumlah</label>
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
              {message && message}
              <button onClick={handleClick}>
                <p>
                  <AiIcons.AiOutlinePlus />
                </p>
              </button>
            </>
          )}
        </form>
        <div>
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Judul</th>
                <th>Jumlah</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {infos?.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.judul}</td>
                  <td>{item.jumlah}</td>
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
        </div>
      </div>
    </>
  );
};

export { WidgetDataInfo };
