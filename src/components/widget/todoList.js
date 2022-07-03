import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import dateFormat from "dateformat";
import * as AiIcons from "react-icons/ai";
import * as Configs from "../../configs/index";
import * as Components from "../index";
import * as cssModule from "../../styles/index";
import * as Page from "../../pages/index";

const WidgetTodoListAdmin = () => {
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [idDelete, setIdDelete] = useState(null);
  const [showModalTodo, setShowModalTodo] = useState(false);
  const [message, setMessage] = useState(null);
  const [click, setClick] = useState(false);
  const [form, setForm] = useState({
    judul: "",
    tanggal: "",
  });
  const { judul, tanggal } = form;

  const handleClick = () => setClick(!click);

  const TodoModal = () => {
    setShowModalTodo(prev => !prev);
  };

  let { data: acaras, refetch } = useQuery("acarasCache", async () => {
    const response = await Configs.API.get("/get-jadwal-acara");
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

      await Configs.API.post("/add-jadwal-acara", body, config);
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
      await Configs.API.delete(`/delete-jadwal-acara/${id}`);
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
      <Components.EditTodoList
        showModal={showModalTodo}
        setShowModal={setShowModalTodo}
      />
      <div className={cssModule.Widget.todoList}>
        <form onSubmit={e => handleOnSubmit.mutate(e)}>
          <h2>Acara / Event</h2>
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
                <label htmlFor="todo">Acara</label>
              </div>
              <div>
                <input
                  type="date"
                  id="tanggal"
                  name="tanggal"
                  value={tanggal}
                  onChange={handleOnChange}
                />
                <label htmlFor="date">Pelaksanaan</label>
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
          {acaras?.length != 0 ? (
            <table>
              <thead>
                <tr>
                  <th>no</th>
                  <th>Acara / Event</th>
                  <th>Pelaksanaan</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {acaras?.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.judul}</td>
                    <td>{dateFormat(item.tanggal, "dddd, d mmmm yyyy ")}</td>
                    <td>
                      <button onClick={TodoModal}>
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

const WidgetTodoListUser = () => {
  let { data: acaras } = useQuery("acarasCache", async () => {
    const response = await Configs.API.get("/get-jadwal-acara");
    console.log(response.data.data.data);
    return response.data.data.data;
  });

  return (
    <div className={cssModule.Widget.todoListUser}>
      <h2>Acara | Event</h2>
      <div>
        <table>
          <thead>
            <tr>
              <th>no</th>
              <th>Acara | Event</th>
              <th>Pelaksanaan</th>
            </tr>
          </thead>
          <tbody>
            {acaras?.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.judul}</td>
                <td>{item.tanggal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { WidgetTodoListAdmin, WidgetTodoListUser };
