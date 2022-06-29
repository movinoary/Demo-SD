import React from "react";
import * as AiIcons from "react-icons/ai";
import * as cssModule from "../../styles/index";

const WidgetTodoListAdmin = () => {
  return (
    <div className={cssModule.Widget.todoList}>
      <form>
        <h2>Todo List</h2>
        <div>
          <input type="text" id="todo" placeholder="todoList" />
          <label htmlFor="todo">Tugas</label>
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
              <th>Tugas</th>
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
                <button>
                  <AiIcons.AiFillEdit />
                </button>
                <button>
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
                <button>
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
                <button>
                  <AiIcons.AiFillDelete />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const WidgetTodoListUser = () => {
  return (
    <div className={cssModule.Widget.todoList}>
      <div>
        <h2>Todo List</h2>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>no</th>
              <th>Tugas</th>
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
