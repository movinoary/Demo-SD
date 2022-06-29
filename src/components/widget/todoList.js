import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";
import * as Components from "../index";
import * as cssModule from "../../styles/index";

const WidgetTodoListAdmin = () => {
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModalTodo, setShowModalTodo] = useState(false);

  const DeleteModal = () => {
    setShowModalDelete(prev => !prev);
  };

  const TodoModal = () => {
    setShowModalTodo(prev => !prev);
  };

  return (
    <>
      <Components.ModalDelete
        showModal={showModalDelete}
        setShowModal={setShowModalDelete}
      />
      <Components.EditTodoList
        showModal={showModalTodo}
        setShowModal={setShowModalTodo}
      />
      <div className={cssModule.Widget.todoList}>
        <form>
          <h2>Acara / Event</h2>
          <div>
            <input type="text" id="todo" placeholder="todoList" />
            <label htmlFor="todo">Acara</label>
          </div>
          <div>
            <input type="date" id="date" />
            <label htmlFor="date">Pelaksanaan</label>
          </div>
          <button>
            <p>
              <AiIcons.AiOutlinePlusSquare />
            </p>
          </button>
        </form>
        <div>
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
              <tr>
                <td>1</td>
                <td>Kerjakan Soal UTS</td>
                <td>12 April 2022</td>
                <td>
                  <button onClick={TodoModal}>
                    <AiIcons.AiFillEdit />
                  </button>
                  <button onClick={DeleteModal}>
                    <AiIcons.AiFillDelete />
                  </button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Kerjakan Soal UTS</td>
                <td>12 April 2022</td>
                <td>
                  <button>
                    <AiIcons.AiFillEdit />
                  </button>
                  <button onClick={DeleteModal}>
                    <AiIcons.AiFillDelete />
                  </button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Kerjakan Soal UTS</td>
                <td>12 April 2022</td>
                <td>
                  <button>
                    <AiIcons.AiFillEdit />
                  </button>
                  <button onClick={DeleteModal}>
                    <AiIcons.AiFillDelete />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

const WidgetTodoListUser = () => {
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
            <tr>
              <td>1</td>
              <td>Kerjakan Soal UTS</td>
              <td>12 April 2022</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Kerjakan Soal UTS</td>
              <td>12 April 2022</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Kerjakan Soal UTS</td>
              <td>12 April 2022</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { WidgetTodoListAdmin, WidgetTodoListUser };
